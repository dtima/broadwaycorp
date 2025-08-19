import { test, expect } from '@playwright/test';

test.describe('Internationalization (i18n) System', () => {
  test('should support English locale by default', async ({ page }) => {
    await page.goto('/en');
    await expect(page).toHaveURL('/en');
  });

  test('should support French locale', async ({ page }) => {
    await page.goto('/fr');
    await expect(page).toHaveURL('/fr');
  });

  test('should redirect root to default locale', async ({ page }) => {
    await page.goto('/');
    await expect(page).toHaveURL('/en');
  });

  test('should maintain locale in navigation', async ({ page }) => {
    await page.goto('/en');
    await page.getByRole('link', { name: /About/i }).click();
    await expect(page).toHaveURL('/en/about');
  });

  test('should handle locale switching in admin routes', async ({ page }) => {
    await page.goto('/en/admin/sign-in');
    await expect(page).toHaveURL('/en/admin/sign-in');

    await page.goto('/fr/admin/sign-in');
    await expect(page).toHaveURL('/fr/admin/sign-in');
  });

  test('should handle invalid locales gracefully', async ({ page }) => {
    await page.goto('/invalid-locale');
    const currentUrl = page.url();
    expect(currentUrl).toMatch(/\/en|\/fr|404/);
  });
});
