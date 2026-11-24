import assert from 'node:assert/strict'
import { chromium } from 'playwright'
import { posts } from '../src/content/blog.js'

const origin = process.env.SITE_URL || 'http://127.0.0.1:5174'
const browser = await chromium.launch({
  headless: true,
  executablePath: process.env.CHROME_PATH || (process.platform === 'win32' ? 'C:/Program Files/Google/Chrome/Application/chrome.exe' : undefined),
})

try {
  const context = await browser.newContext({ reducedMotion: 'reduce', permissions: ['clipboard-read', 'clipboard-write'] })
  const page = await context.newPage()
  const errors = []
  const broken = []
  page.on('pageerror', error => errors.push(error.message))
  page.on('console', message => { if (message.type() === 'error') errors.push(message.text()) })
  page.on('response', response => {
    if (response.url().startsWith(origin) && response.status() >= 400) broken.push(response.url())
  })

  async function open(path) {
    const response = await page.goto(origin + path)
    assert.equal(response.status(), 200, path)
    await page.locator('main h1').waitFor()
  }
  async function checkLayout() {
    assert.equal(await page.locator('.hdr').count(), 1)
    assert.equal(await page.locator('.ftr').count(), 1)
    assert.equal(await page.locator('h1').count(), 1)
    assert.ok(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), 'horizontal overflow')
    assert.ok(await page.locator('.journal-feature').evaluateAll(cards => cards.every(card => {
      const image = card.querySelector('.journal-card-image').getBoundingClientRect()
      const copy = card.querySelector('.journal-card-copy').getBoundingClientRect()
      return image.right <= copy.left + 1 || image.bottom <= copy.top + 1
    })), 'featured image and copy are separated')
    for (const image of await page.locator('main img').all()) {
      await image.scrollIntoViewIfNeeded()
      await image.evaluate(img => img.decode())
      assert.ok(await image.evaluate(img => img.naturalWidth > 0), 'image decoded')
    }
    await page.evaluate(() => window.scrollTo(0, 0))
  }

  await open('/')
  const sharedStyles = await page.locator('.hdr,.ftr').evaluateAll(nodes => nodes.map(node => {
    const computed = getComputedStyle(node)
    return [computed.fontFamily, computed.backgroundColor, computed.position]
  }))
  await open('/blog/')
  assert.deepEqual(await page.locator('.hdr,.ftr').evaluateAll(nodes => nodes.map(node => {
    const computed = getComputedStyle(node)
    return [computed.fontFamily, computed.backgroundColor, computed.position]
  })), sharedStyles)
  assert.equal(await page.locator('.journal-card').count(), 4)
  assert.equal(await page.locator('.ftr a[href="/blog/"]').count(), 1)
  assert.match(await page.locator('.journal-results [role=status]').innerText(), /^6 articles/)
  await page.getByRole('link', { name: 'Page 2' }).click()
  await page.waitForURL('**/blog/page/2/#latest-insights')
  await page.getByText('6 articles · Page 2 of 2').waitFor()
  assert.equal(await page.locator('.journal-card').count(), 2)
  await page.goBack()
  await page.locator('.journal-feature').waitFor()
  await page.getByRole('link', { name: 'Cloud & DevOps' }).click()
  await page.getByText('4 articles', { exact: true }).waitFor()
  assert.match(await page.locator('.journal-results [role=status]').innerText(), /^4 articles/)
  assert.equal(await page.getByRole('link', { name: 'Cloud & DevOps' }).getAttribute('aria-current'), 'true')
  await page.getByRole('searchbox').fill('Einstein')
  await page.getByRole('button', { name: 'Search', exact: true }).click()
  await page.waitForURL('**q=Einstein**')
  await page.getByText('2 articles for “Einstein”').waitFor()
  assert.equal(await page.locator('.journal-card').count(), 2)
  await page.getByRole('searchbox').fill('nonexistent-journal-term')
  await page.getByRole('searchbox').press('Enter')
  await page.getByRole('heading', { name: 'No articles found' }).waitFor()
  await page.getByRole('link', { name: 'Clear filters' }).click()
  await page.locator('.journal-feature').waitFor()
  assert.ok(await page.getByRole('button', { name: 'Subscribe' }).isDisabled())

  for (const post of posts) {
    await open(post.path)
    await checkLayout()
    assert.equal(await page.locator('h1').innerText(), post.title)
    assert.ok(await page.locator('.journal-prose').evaluate((node, body) => {
      const source = document.createElement('div')
      source.innerHTML = body
      return source.innerHTML === node.innerHTML
    }, post.body))
    assert.equal(await page.locator('link[rel=canonical]').getAttribute('href'), 'https://palni-website-new.vercel.app' + post.path)
    assert.equal(JSON.parse(await page.locator('script[type="application/ld+json"]').textContent()).headline, post.title)
    assert.equal(await page.locator('.journal-related article').count(), 2)
    for (const link of await page.locator('.journal-neighbors a,.journal-related article a').all()) {
      const href = await link.getAttribute('href')
      assert.ok(posts.some(item => item.path === href), 'internal article link')
    }
  }

  await open(posts[0].path)
  await page.getByRole('navigation', { name: 'On this page' }).getByRole('link').first().click()
  await page.waitForURL('**#section-1')
  await page.getByRole('button', { name: 'Copy link' }).click()
  await page.getByText('Link copied.').waitFor()
  await page.getByRole('link', { name: /Previous article/ }).click()
  await page.waitForURL(origin + posts[1].path)
  await page.getByRole('link', { name: /Next article/ }).click()
  await page.waitForURL(origin + posts[0].path)
  await page.getByRole('link', { name: 'Back to all insights' }).click()
  await page.locator('.journal-feature').waitFor()

  for (const [width, height] of [[1440, 1000], [1920, 1080], [768, 1024], [1024, 900], [375, 812], [390, 844], [430, 932]]) {
    await page.setViewportSize({ width, height })
    for (const [view, path] of [['archive', '/blog/'], ['article', posts[0].path]]) {
      await open(path)
      await checkLayout()
      if ([1440, 768, 390].includes(width)) {
        await page.screenshot({ path: `docs/visual-audit/blog/${view}-${width}.png` })
      }
      if (view === 'archive' && width === 1440) {
        await page.locator('#latest-insights').evaluate(section => section.scrollIntoView())
        await page.screenshot({ path: 'docs/visual-audit/blog/archive-index-1440.png' })
      }
    }
    console.log(`PASS archive and article at ${width}px`)
  }
  await page.evaluate(() => localStorage.setItem('palni-theme', 'light'))
  await open('/blog/')
  assert.equal(await page.locator('html').getAttribute('data-theme'), 'light')
  await checkLayout()
  assert.deepEqual(errors, [])
  assert.deepEqual(broken, [])
  console.log('PASS all six articles, metadata, search, filter, pagination, share, heading links, shared chrome, and no browser errors')
} finally {
  await browser.close()
}
