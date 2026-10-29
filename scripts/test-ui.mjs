import { chromium } from 'playwright-core'

const browser = await chromium.launch({
  executablePath: process.env.CHROME_PATH ?? '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
  headless: true,
  args: ['--no-sandbox', '--disable-gpu'],
})
const context = await browser.newContext({ viewport: { width: 1440, height: 1000 }, permissions: ['clipboard-read', 'clipboard-write'] })
const pixel = Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNk+A8AAQUBAScY42YAAAAASUVORK5CYII=', 'base64')
await context.route('https://github.com/**', (route) => route.fulfill({ status: 200, contentType: 'image/png', body: pixel }))
const page = await context.newPage()
const errors = []
page.on('pageerror', (error) => errors.push(error.message))
page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })

const checks = []
const check = (label, condition, detail = '') => {
  checks.push({ label, ok: Boolean(condition), detail })
  console.log(`${condition ? 'PASS' : 'FAIL'}  ${label}${detail ? ` — ${detail}` : ''}`)
}

await page.goto('http://127.0.0.1:4173/', { waitUntil: 'domcontentloaded' })
await page.waitForSelector('.plugin-card')
await page.waitForTimeout(1800)

check('data cards rendered', await page.locator('.plugin-card').count() === 24)
check('hero count is 3,917', (await page.locator('#statTotal').textContent()).trim() === '3,917', await page.locator('#statTotal').textContent())
check('hero shows verified compatibility', (await page.locator('#scanCompatible').textContent()).trim() === '938', await page.locator('#scanCompatible').textContent())

await page.locator('[data-compat="ok"]').click()
await page.waitForTimeout(250)
const okPills = await page.locator('.plugin-card .compat-pill').evaluateAll((els) => [...new Set(els.map((el) => el.className))])
check('compatibility filter leaves only ok pills', okPills.every((value) => value.includes('ok')), okPills.join(','))
check('result count reflects filter', (await page.locator('#resultCount').textContent()).includes('938'))

await page.locator('#searchInput').fill('context')
await page.waitForTimeout(350)
const titles = await page.locator('.plugin-card h3').allTextContents()
check('search narrows results', titles.length > 0 && titles.some((title) => /context/i.test(title)), titles.slice(0, 3).join(' | '))

await page.locator('#searchClear').click()
await page.waitForTimeout(200)
await page.locator('[data-compat="all"]').click()
await page.waitForTimeout(200)

await page.locator('.plugin-card .title-link').first().click()
check('plugin dialog opens', await page.locator('#pluginDialog').evaluate((dialog) => dialog.open))
check('cards show downloads and rating', await page.locator('.plugin-card .plugin-metric').count() >= 2)
check('detail shows download/star/rating metrics', await page.locator('.detail-metric').count() === 3)
check('dialog has install command', (await page.locator('.detail-install code').textContent()).includes('dsh plugin'))
const command = await page.locator('.detail-install code').textContent()
await page.locator('.detail-install .copy-btn').click()
await page.waitForTimeout(150)
check('copy shows toast', await page.locator('#toast').evaluate((el) => el.classList.contains('show')))
check('clipboard contains command', (await page.evaluate(() => navigator.clipboard.readText())) === command)
await page.locator('.plugin-dialog .dialog-close').click()

await page.locator('#openMarket').click()
check('market dialog opens', await page.locator('#marketDialog').evaluate((dialog) => dialog.open))
check('compatible index URL is exposed', (await page.locator('#dialogCompatUrl').textContent()).endsWith('/data/market-compatible.json'))
await page.locator('#marketDialog .dialog-close').click()

await page.locator('#runtimeButton').click()
await page.locator('#runtimeInput').fill('0.2.1-rc.3')
await page.locator('#runtimeForm button[type="submit"]').click()
await page.waitForTimeout(400)
check('runtime label updates', (await page.locator('#runtimeLabel').textContent()).includes('0.2.1-rc.3'))
const okAfter = await page.locator('[data-compat="ok"] .count').textContent()
check('compatibility recalculates for runtime', Number(okAfter.replace(/,/g, '')) > 900, okAfter)

await page.locator('#langToggle').click()
await page.waitForTimeout(250)
check('language switches to English', (await page.locator('#browseTitle').textContent()).trim() === 'Every plugin')
check('hero switches to English', (await page.locator('#heroTitle').textContent()).includes('something better'))

await page.locator('#themeToggle').click()
check('theme toggles to light', await page.locator('html').getAttribute('data-theme') === 'light')

await page.locator('.plugin-card .fav-btn').first().click()
check('favorite toggles', await page.locator('.plugin-card .fav-btn').first().getAttribute('aria-pressed') === 'true')

await page.setViewportSize({ width: 390, height: 844 })
await page.waitForTimeout(200)
await page.locator('#mobileFilter').click()
check('mobile filter drawer opens', await page.locator('body').evaluate((body) => body.classList.contains('filters-open')))
await page.locator('#closeFilters').click()
check('mobile filter drawer closes', await page.locator('body').evaluate((body) => !body.classList.contains('filters-open')))

check('no console/page errors', errors.length === 0, errors.join(' | '))
const failed = checks.filter((item) => !item.ok)
console.log(`\n${checks.length - failed.length}/${checks.length} checks passed`)
await browser.close()
if (failed.length) process.exitCode = 1
