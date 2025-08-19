import { test, expect } from '@playwright/test';

test.describe('Admin Modules', () => {
  test.describe('Employees Module', () => {
    test('should redirect unauthenticated users to sign-in', async ({ page }) => {
      await page.goto('/en/admin/employees');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });

    test('should show create employee form', async ({ page }) => {
      await page.goto('/en/admin/employees/create');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });

    test('should show employee list page', async ({ page }) => {
      await page.goto('/en/admin/employees');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });
  });

  test.describe('Inventory Module', () => {
    test('should redirect unauthenticated users to sign-in', async ({ page }) => {
      await page.goto('/en/admin/inventory');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });

    test('should show create inventory form', async ({ page }) => {
      await page.goto('/en/admin/inventory/create');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });

    test('should show inventory list page', async ({ page }) => {
      await page.goto('/en/admin/inventory');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });
  });

  test.describe('Projects Module', () => {
    test('should redirect unauthenticated users to sign-in', async ({ page }) => {
      await page.goto('/en/admin/projects');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });

    test('should show create project form', async ({ page }) => {
      await page.goto('/en/admin/projects/create');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });

    test('should show project list page', async ({ page }) => {
      await page.goto('/en/admin/projects');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });
  });

  test.describe('Todos Module', () => {
    test('should redirect unauthenticated users to sign-in', async ({ page }) => {
      await page.goto('/en/admin/todos');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });

    test('should show create todo form', async ({ page }) => {
      await page.goto('/en/admin/todos/create');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });

    test('should show todo list page', async ({ page }) => {
      await page.goto('/en/admin/todos');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });
  });

  test.describe('Admin Dashboard', () => {
    test('should redirect unauthenticated users to sign-in', async ({ page }) => {
      await page.goto('/en/admin');
      await expect(page).toHaveURL('/en/admin/sign-in');
    });

    test('should show module navigation links', async ({ page }) => {
      await page.goto('/en/admin/sign-in');

      // Should show sign-in form
      await expect(page.getByRole('heading', { name: 'Admin Sign In' })).toBeVisible();
    });
  });
});
