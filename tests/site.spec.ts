import { expect, test } from '@playwright/test'

const routes = [
  '/',
  '/security-privacy/',
  '/work/',
  '/consulting/',
  '/instruction/',
  '/contact/',
  '/privacy/',
  '/ro/',
  '/ro/securitate-confidentialitate/',
  '/ro/work/',
  '/ro/consultanta/',
  '/ro/mentorat/',
  '/ro/contact/',
  '/ro/confidentialitate/',
]

const productionUrl = 'https://ionut-francisc.netlify.app'

for (const route of routes) {
  test(`${route} renders without overflow or console errors`, async ({
    page,
  }) => {
    const errors: string[] = []
    page.on('console', (message) => {
      if (message.type() === 'error') errors.push(message.text())
    })
    page.on('pageerror', (error) => errors.push(error.message))

    await page.goto(route)

    await expect(page.locator('h1')).toBeVisible()
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
      'href',
      `${productionUrl}${route}`
    )
    expect(
      await page.evaluate(
        () => document.documentElement.scrollWidth > window.innerWidth
      )
    ).toBe(false)
    expect(errors).toEqual([])
  })
}

test('contact forms expose Netlify metadata and privacy consent', async ({
  page,
}) => {
  for (const route of ['/contact/', '/ro/contact/', '/consulting/']) {
    await page.goto(route)
    const form = page.locator('form[data-netlify="true"]')
    await expect(form).toHaveCount(1)
    await expect(form.locator('input[name="form-name"]')).toHaveCount(1)
    await expect(form.locator('input[name="privacy-consent"]')).toBeVisible()
  }
})

test('public CV, WhatsApp, canonical, and language links are present', async ({
  page,
}) => {
  await page.goto('/')

  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
    'href',
    'https://ionut-francisc.netlify.app/'
  )
  await expect(
    page.locator('a[download][href$="ionut-francisc-cv-en.pdf"]')
  ).toHaveCount(2)
  await expect(page.locator('a[href^="https://wa.me/"]')).toHaveCount(1)
  await expect(page.locator('link[hreflang="ro"]')).toHaveCount(1)

  const response = await page.request.get('/cv/ionut-francisc-cv-en.pdf')
  expect(response.ok()).toBe(true)
  expect(response.headers()['content-type']).toContain('application/pdf')
})

test('public profiles are visible and no direct email address is exposed', async ({
  page,
}) => {
  await page.goto('/contact/')

  await expect(
    page.locator(
      'a[href="https://www.linkedin.com/in/ionut-iulian-francisc"]'
    )
  ).toHaveCount(3)
  await expect(page.locator('a[href="https://github.com/joahn3"]')).toHaveCount(
    2
  )
  await expect(page.locator('a[href^="mailto:"]')).toHaveCount(0)
  await expect(page.getByText('iif.ionut@gmail.com')).toHaveCount(0)
})

test('Google Analytics loads only after explicit consent', async ({ page }) => {
  await page.goto('/')

  const googleTag = page.locator(
    'script[src*="googletagmanager.com/gtag/js?id=G-E0LHCWXKPF"]'
  )
  await expect(googleTag).toHaveCount(0)

  await page.getByRole('button', { name: 'Accept analytics' }).click()
  await expect(googleTag).toHaveCount(1)
  expect(
    await page.evaluate(() =>
      window.localStorage.getItem('ionut-francisc-analytics-consent')
    )
  ).toBe('accepted')
})

test('llms.txt exposes the primary public professional sources', async ({
  page,
}) => {
  const response = await page.request.get('/llms.txt')
  expect(response.ok()).toBe(true)
  const content = await response.text()

  expect(content).toContain('# Ionuț Francisc')
  expect(content).toContain('/security-privacy/')
  expect(content).toContain('linkedin.com/in/ionut-iulian-francisc')
})
