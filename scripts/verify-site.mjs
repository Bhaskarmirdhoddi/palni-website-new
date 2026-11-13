// Read-only browser checks. Start Vite before running; no screenshots/reports written.
import { chromium } from 'playwright'
import assert from 'node:assert/strict'

const origin = process.env.SITE_URL || 'http://127.0.0.1:5174'
const options = { headless: true }
if (process.env.CHROME_PATH) options.executablePath = process.env.CHROME_PATH
else if (process.platform === 'win32') options.executablePath = 'C:/Program Files/Google/Chrome/Application/chrome.exe'

const browser = await chromium.launch(options)
try {
  const page = await browser.newPage({ viewport: { width: 1440, height: 900 }, reducedMotion: 'reduce' })
  const errors = []
  page.on('pageerror', error => errors.push(error.message))
  await page.goto(origin)
  const routes = await page.evaluate(async () => {
    const { routeList } = await import('/src/content/pages.js')
    return routeList.map(({ path, page }) => ({ path, key: page.key, title: page.title }))
  })
  for (const route of routes) {
    const response = await page.goto(origin + route.path)
    await page.waitForSelector('main h1')
    assert.equal(response.status(), 200, route.path)
    assert.equal(await page.title(), route.title)
    for (const selector of ['.hdr', '.ftr', 'main']) assert.equal(await page.locator(selector).count(), 1, `${route.path}: ${selector}`)
    const counts = await page.evaluate(async key => {
      const { pageConfigurations } = await import('/src/data/pages/index.js')
      return { expected: pageConfigurations[key].sections.filter(s => s.type !== 'text').length, actual: document.querySelector('main').children.length }
    }, route.key)
    assert.equal(counts.actual, counts.expected, `${route.path}: section count`)
    console.log('Passed', route.path)
  }
  await page.setViewportSize({ width: 390, height: 844 })
  for (const route of routes.filter(route => !route.path.endsWith('.html'))) {
    await page.goto(origin + route.path)
    await page.waitForSelector('main h1')
    assert.equal(await page.evaluate(() => document.documentElement.scrollWidth > innerWidth + 1), false, `${route.path}: mobile overflow`)
    await page.locator('.hdr .burger').click()
    assert.ok(await page.locator('#drawer').isVisible())
    await page.keyboard.press('Escape')
    assert.equal(await page.locator('#drawer').isVisible(), false)
  }
  const isolation = await page.evaluate(async () => {
    const { pageConfigurations } = await import('/src/data/pages/index.js')
    const owners = new Map()
    function visit(value, page, seen = new Set()) {
      if (!value || typeof value !== 'object' || seen.has(value)) return
      seen.add(value)
      if (owners.has(value) && owners.get(value) !== page) throw new Error(`Shared mutable data: ${owners.get(value)} / ${page}`)
      owners.set(value, page)
      for (const child of Object.values(value)) visit(child, page, seen)
    }
    for (const [key, configuration] of Object.entries(pageConfigurations)) visit(configuration, key)
    return Object.keys(pageConfigurations).length
  })
  await page.goto(origin + '/missing-page-check')
  await page.waitForURL(origin + '/')
  assert.deepEqual(errors, [])
  console.log(`Passed ${routes.length} route aliases, ${isolation} mobile pages, data isolation and fallback redirect. No artifacts written.`)
} finally {
  await browser.close()
}
