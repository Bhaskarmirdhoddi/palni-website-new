import { chromium } from 'playwright'
import { readFile, writeFile } from 'node:fs/promises'
import assert from 'node:assert/strict'

const browser = await chromium.launch({ executablePath: 'C:/Program Files/Google/Chrome/Application/chrome.exe', headless: true })
const page = await browser.newPage({ viewport: { width: 1440, height: 900 } })
const passed = [], errors = [], missingAnchors = []
page.on('pageerror', error => errors.push(error.message))
const origin = 'http://127.0.0.1:5174'
await page.goto(origin + '/contact#databricks')
assert.ok(await page.locator('#service-databricks').isChecked())
await page.locator('#enquiry button[type=submit]').click()
assert.equal(await page.locator('#f-name').getAttribute('aria-invalid'), 'true')
await page.locator('#f-name').fill('Local browser verification')
await page.locator('#f-email').fill('verification@example.com')
await page.locator('#f-company').fill('Local verification')
await page.locator('#enquiry button[type=submit]').click()
assert.ok(await page.locator('#enquiry-done').isVisible())
await page.locator('#enquiry-again').click()
assert.ok(await page.locator('#enquiry').isVisible())
passed.push('Contact: service deep link, required validation, client-side success and reset')
await page.goto(origin + '/careers')
await page.locator('#role-q').fill('no-matching-role-12345')
assert.ok(await page.locator('#roles-empty').isVisible())
await page.locator('#role-q').fill('')
await page.locator('button[data-team="Engineering"]').click()
assert.equal(await page.locator('button[data-team="Engineering"]').getAttribute('aria-pressed'), 'true')
const role = page.locator('.role:visible').first()
const wasOpen = await role.locator(':scope > button').getAttribute('aria-expanded') === 'true'
await role.locator(':scope > button').click()
assert.equal(await role.locator('.detail').isVisible(), !wasOpen)
if (wasOpen) await role.locator(':scope > button').click()
assert.ok(await role.locator('.detail').isVisible())
await page.locator('#cv-email').fill('verification@example.com')
await page.locator('#cv-form button[type=submit]').click()
assert.match(await page.locator('#cv-msg').textContent(), /Thanks/)
passed.push('Careers: search, empty state, team filter, role expansion, client-side CV confirmation')
for (const slug of ['data-engineering', 'ai-automation', 'cx-solutions', 'databricks-capabilities']) {
  await page.goto(origin + '/' + slug)
  const tabs = page.locator('[role=tab]')
  if (await tabs.count() > 1) {
    await tabs.nth(1).click()
    assert.equal(await tabs.nth(1).getAttribute('aria-selected'), 'true')
    await page.keyboard.press('ArrowRight')
    assert.equal(await tabs.nth(2).getAttribute('aria-selected'), 'true')
    const panel = await tabs.nth(2).getAttribute('aria-controls')
    assert.ok(await page.locator('#' + panel).isVisible())
    passed.push(slug + ': mouse and keyboard tab navigation')
  }
}
const inventory = JSON.parse(await readFile('docs/visual-audit/inventory.json', 'utf8'))
for (const entry of inventory) {
  await page.goto(origin + '/' + entry.file)
  const missing = await page.evaluate(() => [...document.querySelectorAll('a[href^="#"]')].filter(a => a.hash.length > 1 && !document.getElementById(decodeURIComponent(a.hash.slice(1)))).map(a => a.hash))
  if (missing.length) missingAnchors.push({ file: entry.file, missing })
}
await page.setViewportSize({ width: 390, height: 844 })
await page.goto(origin)
await page.locator('.hdr .burger').click()
await page.screenshot({ path: 'docs/visual-audit/mobile-navigation.png' })
await page.locator('#drawer a[href="/data-engineering"]').click()
assert.equal(new URL(page.url()).pathname, '/data-engineering')
assert.equal(await page.locator('#drawer').isVisible(), false)
assert.equal(await page.locator('html').evaluate(n => n.style.overflow), '')
await page.goto(origin)
await page.waitForTimeout(1500)
await page.screenshot({ path: 'docs/visual-audit/home-mobile.png' })
passed.push('Mobile: nested navigation destination, drawer closes and scrolling restores')
const result = { passed, errors, missingAnchors }
await writeFile('docs/visual-audit/interaction-results.json', JSON.stringify(result, null, 2))
await browser.close()
console.log(JSON.stringify(result, null, 2))
assert.equal(errors.length, 0)
assert.equal(missingAnchors.length, 0)
