import { test, expect } from '@playwright/test'

test('display the top page', async ({ page }) => {
  await page.goto('http://localhost:3001')

  await expect(page).toHaveURL('http://localhost:3001')
})
