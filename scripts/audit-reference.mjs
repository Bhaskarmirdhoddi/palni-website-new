import { chromium } from 'playwright'
import { mkdir, writeFile } from 'node:fs/promises'

const base = 'https://palni.indexstudio.net/'
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true })
const context = await browser.newContext({ viewport: { width: 1440, height: 900 }, ignoreHTTPSErrors: true })
const page = await context.newPage()
// The reference host rejects browser navigation requests in this environment;
// serve the unchanged live response through Playwright's request transport.
await page.route('https://palni.indexstudio.net/**', async route => {
  const response = await context.request.get(route.request().url())
  await route.fulfill({ response })
})
await mkdir('docs/visual-audit/reference', { recursive: true })
await mkdir('docs/visual-audit/before', { recursive: true })
const queue = ['index.html']; const records = []; const assets = new Set(['assets/site.css', 'assets/site.js', 'assets/scenes.js', 'assets/fonts/space-grotesk.woff2'])
for (let i = 0; i < queue.length; i++) {
  const file = queue[i]
  const response = await page.goto(base + file, { waitUntil: 'networkidle' })
  if (!response?.ok()) { records.push({ file, status: response?.status(), destination: page.url() }); continue }
  await writeFile('docs/ref-' + file, await response.text())
  const structure = await page.evaluate(() => ({ title: document.title, sections: [...document.querySelectorAll('main section')].map(s => ({ id: s.id, class: s.className, title: s.querySelector('h1,h2')?.textContent, images: [...s.querySelectorAll('img')].map(i => i.getAttribute('src')) })), links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')), assets: [...document.querySelectorAll('[src]')].map(n => n.getAttribute('src')) }))
  for (const link of structure.links) { const f = link.split('#')[0]; if (/^[a-z0-9-]+\.html$/.test(f) && !queue.includes(f)) queue.push(f) }
  for (const asset of structure.assets) if (asset.startsWith('assets/')) assets.add(asset)
  await page.screenshot({ path: `docs/visual-audit/reference/${file}.png` })
  for (let y = 0; y < await page.evaluate(() => document.body.scrollHeight); y += 700) { await page.evaluate(y => scrollTo(0, y), y); await page.waitForTimeout(100) }
  await page.screenshot({ path: `docs/visual-audit/reference/${file}-full.png`, fullPage: true })
  records.push({ file, status: response.status(), ...structure })
  console.log('Inspected reference', file, structure.sections.length, 'sections')
  await page.goto('http://127.0.0.1:5173/' + file, { waitUntil: 'networkidle' })
  records.at(-1).before = await page.evaluate(() => ({ sections: [...document.querySelectorAll('main section')].map(s => ({ id: s.id, class: s.className, title: s.querySelector('h1,h2')?.textContent })), navigation: [...document.querySelectorAll('.nav .top')].map(n => n.textContent.trim()) }))
  await page.screenshot({ path: `docs/visual-audit/before/${file}.png`, fullPage: true })
}
for (const asset of assets) {
  const response = await context.request.get(base + asset)
  if (!response.ok()) throw new Error(`Asset ${asset}: ${response.status()}`)
  const path = asset === 'assets/site.css' ? 'docs/ref-site.css' : asset === 'assets/site.js' ? 'docs/ref-site.js' : asset === 'assets/scenes.js' ? 'docs/ref-scenes.js' : 'public/' + asset
  await mkdir(path.slice(0, path.lastIndexOf('/')), { recursive: true })
  await writeFile(path, await response.body())
}
await writeFile('docs/visual-audit/inventory.json', JSON.stringify(records, null, 2))
await browser.close()
console.log('Downloaded', assets.size, 'reference assets; audited', records.length, 'pages')
