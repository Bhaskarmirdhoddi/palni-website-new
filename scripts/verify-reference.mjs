import { chromium } from 'playwright'
import { readFile, writeFile, mkdir } from 'node:fs/promises'
import assert from 'node:assert/strict'

const inventory = JSON.parse(await readFile('docs/visual-audit/inventory.json', 'utf8'))
const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true })
const sizes = [[1920, 1080], [1440, 900], [768, 1024], [390, 844]]
const results = [], errors = [], interactions = []
async function serveReference(route) {
  const pathname = new URL(route.request().url()).pathname.slice(1) || 'index.html'
  const path = pathname.startsWith('assets/')
    ? pathname === 'assets/site.css' ? 'docs/ref-site.css' : pathname === 'assets/site.js' ? 'docs/ref-site.js' : pathname === 'assets/scenes.js' ? 'docs/ref-scenes.js' : 'public/' + pathname
    : 'docs/ref-' + pathname
  await route.fulfill({ path })
}
async function inspect(page) {
  await page.evaluate(async () => {
    await document.fonts.ready
    // Decode below-the-fold pictures before measuring intrinsic image heights.
    // Hidden theme logos and alternate slides are valid lazy-loaded assets too.
    for (const image of document.images) image.loading = 'eager'
    await Promise.all([...document.images].map(image => image.decode().catch(() => {})))
    for (const section of document.querySelectorAll('main section, .cta, footer')) {
      section.scrollIntoView({ behavior: 'instant' })
      await new Promise(r => setTimeout(r, 30))
    }
    window.scrollTo({ top: 0, behavior: 'instant' })
  })
  await page.waitForTimeout(250)
  return page.evaluate(() => {
    const sections = [...document.querySelectorAll('main section, .cta, footer')]
    return {
      title: document.title,
      overflow: document.documentElement.scrollWidth > innerWidth,
      brokenImages: [...document.images].filter(i => i.getBoundingClientRect().width > 0 && i.complete && i.naturalWidth === 0).map(i => i.getAttribute('src')),
      sections: sections.map(s => {
        const rect = s.getBoundingClientRect(), css = getComputedStyle(s), heading = s.querySelector('h1,h2')
        return { id: s.id, heading: heading?.textContent.replace(/\s+/g, ' ').trim(), y: Math.round(rect.top + scrollY), height: Math.round(rect.height), background: css.backgroundColor, font: heading && getComputedStyle(heading).fontSize, images: s.querySelectorAll('img').length }
      }),
      links: [...document.querySelectorAll('a[href]')].map(a => a.getAttribute('href')),
    }
  })
}
await Promise.all(sizes.map(async ([width, height]) => {
  const context = await browser.newContext({ viewport: { width, height }, reducedMotion: 'reduce' })
  const ref = await context.newPage(), local = await context.newPage()
  await ref.route('https://palni.indexstudio.net/**', serveReference)
  local.on('pageerror', error => errors.push({ width, url: local.url(), error: error.message }))
  for (const entry of inventory.filter(p => p.status === 200)) {
    const slug = entry.file.replace('.html', ''), dir = `docs/visual-audit/${width}x${height}`
    await mkdir(dir, { recursive: true })
    await Promise.all([
      ref.goto('https://palni.indexstudio.net/' + entry.file, { waitUntil: 'networkidle' }),
      local.goto('http://127.0.0.1:5174/' + entry.file, { waitUntil: 'networkidle' }),
    ])
    const [reference, actual] = await Promise.all([inspect(ref), inspect(local)])
    const mismatches = []
    if (JSON.stringify(reference.sections) !== JSON.stringify(actual.sections)) mismatches.push('section geometry/content/styles')
    if (reference.title !== actual.title) mismatches.push('title')
    if (actual.overflow) mismatches.push('horizontal overflow')
    if (actual.brokenImages.length) mismatches.push('broken images')
    results.push({ file: entry.file, width, height, mismatches, reference, actual })
    await Promise.all([
      ref.screenshot({ path: `${dir}/${slug}-reference.png`, fullPage: true }),
      local.screenshot({ path: `${dir}/${slug}-local.png`, fullPage: true }),
    ])
    console.log(`${width} ${entry.file}: ${mismatches.join(', ') || 'matched'}`)
  }
  // Inspect reference and local menus at each responsive breakpoint.
  for (const [name, page] of [['reference', ref], ['local', local]]) {
    await page.goto(name === 'local' ? 'http://127.0.0.1:5174/' : 'https://palni.indexstudio.net/index.html')
    if (width > 1023) {
      for (const label of ['Capabilities', 'Resources', 'Company']) {
        const button = page.locator('.nav .top').filter({ hasText: label })
        await button.hover(); await button.click()
        await page.waitForTimeout(250)
        assert.equal(await button.getAttribute('aria-expanded'), 'true')
        await page.screenshot({ path: `docs/visual-audit/${width}x${height}/menu-${label}-${name}.png` })
        await page.keyboard.press('Escape')
      }
    } else {
      await page.locator('.hdr .burger').click()
      assert.equal(await page.locator('#drawer').isVisible(), true)
      await page.screenshot({ path: `docs/visual-audit/${width}x${height}/menu-mobile-${name}.png` })
      await page.keyboard.press('Escape')
      assert.equal(await page.locator('#drawer').isVisible(), false)
    }
  }
  await context.close()
}))

await writeFile('docs/visual-audit/results.json', JSON.stringify({ results, errors, interactions }, null, 2))
const context = await browser.newContext({ viewport: { width: 1440, height: 900 } })
const page = await context.newPage()
page.on('pageerror', error => errors.push({ url: page.url(), error: error.message }))
await page.goto('http://127.0.0.1:5174/')
await page.waitForTimeout(1800)
await page.screenshot({ path: 'docs/visual-audit/home-desktop.png' })
const field = page.locator('.hero canvas')
const first = await field.evaluate(c => c.toDataURL())
await page.waitForTimeout(300)
assert.notEqual(await field.evaluate(c => c.toDataURL()), first)
interactions.push('Hero canvas changes over time')
await page.locator('.slider .next').click()
assert.equal(await page.locator('.sl-count b').textContent(), '2')
await page.locator('.slider .prev').click()
assert.equal(await page.locator('.sl-count b').textContent(), '1')
interactions.push('Outcome carousel next/previous')
await page.locator('.theme-toggle').first().click()
assert.equal(await page.locator('html').getAttribute('data-theme'), 'light')
await page.locator('.theme-toggle').first().click()
interactions.push('Theme toggle')
// Exercise SPA route transitions rather than just direct page loads.
for (const slug of ['salesforce', 'servicenow', 'databricks', 'data-engineering', 'ai-automation', 'cx-solutions', 'about', 'careers', 'contact']) {
  await page.evaluate(slug => document.querySelector(`.ftr a[href="/${slug}"]`)?.click(), slug)
  await page.waitForTimeout(250)
  assert.ok(new URL(page.url()).pathname.includes(slug), 'SPA link ' + slug)
  assert.equal(await page.locator('.nav button.top').count(), 3)
  await page.locator('.nav .top').first().click()
  assert.equal(await page.locator('.nav .top').first().getAttribute('aria-expanded'), 'true')
  await page.keyboard.press('Escape')
}
interactions.push('Nine SPA transitions; menus reinitialize after each')
await page.goto('http://127.0.0.1:5174/use-cases#databricks')
await page.waitForTimeout(300)
assert.equal(await page.locator('#uc-filters [data-filter="databricks"]').getAttribute('aria-pressed'), 'true')
assert.ok(await page.locator('.case[data-tag="databricks"]:visible').count() > 0)
assert.equal(await page.locator('.case[data-tag="salesforce"]:visible').count(), 0)
interactions.push('Use-case hash filter')
await page.goto('http://127.0.0.1:5174/salesforce#focus')
await page.waitForTimeout(300)
assert.ok(await page.locator('#focus').evaluate(n => Math.abs(n.getBoundingClientRect().top) < 200))
interactions.push('In-page section navigation')
await writeFile('docs/visual-audit/results.json', JSON.stringify({ results, errors, interactions }, null, 2))
await browser.close()
console.log(JSON.stringify({ comparisons: results.length, mismatches: results.filter(r => r.mismatches.length).map(r => ({file:r.file,width:r.width,mismatches:r.mismatches})), errors, interactions }, null, 2))
