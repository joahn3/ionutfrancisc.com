import AxeBuilder from '@axe-core/playwright'
import { expect, test } from '@playwright/test'

const routes = [
  '/',
  '/security-privacy/',
  '/work/',
  '/consulting/',
  '/contact/',
  '/privacy/',
  '/ro/',
  '/ro/securitate-confidentialitate/',
  '/ro/work/',
  '/ro/consultanta/',
  '/ro/contact/',
  '/ro/confidentialitate/',
]

for (const route of routes) {
  test(`${route} has no automatically detectable accessibility violations`, async ({
    page,
  }) => {
    await page.goto(route)
    const results = await new AxeBuilder({ page }).analyze()

    expect(results.violations).toEqual([])
  })
}
