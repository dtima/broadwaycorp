import { test, expect } from '@playwright/test';

test.describe('Admin Authentication Flows', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to admin sign-in page
    await page.goto('/en/admin/sign-in');
  });

  test('should display admin sign-in form', async ({ page }) => {
    // Check form elements are present
    await expect(page.getByRole('heading', { name: 'Admin Sign In' })).toBeVisible();
    await expect(page.getByLabel('Email')).toBeVisible();
    await expect(page.getByLabel('Password')).toBeVisible();
    await expect(page.getByRole('button', { name: 'Sign In' })).toBeVisible();
    await expect(page.getByLabel('Remember me')).toBeVisible();
  });

  test('should show validation errors for empty form submission', async ({ page }) => {
    // Submit empty form
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Should show validation errors
    await expect(page.getByText('Email is required')).toBeVisible();
    await expect(page.getByText('Password is required')).toBeVisible();
  });

  test('should show validation errors for invalid email format', async ({ page }) => {
    // Enter invalid email
    await page.getByLabel('Email').fill('invalid-email');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Should show email validation error
    await expect(page.getByText('Please enter a valid email address')).toBeVisible();
  });

  test('should redirect unauthenticated users from admin routes', async ({ page }) => {
    // Try to access admin dashboard without authentication
    await page.goto('/en/admin');

    // Should redirect to sign-in page
    await expect(page).toHaveURL('/en/admin/sign-in');
    await expect(page.getByRole('heading', { name: 'Admin Sign In' })).toBeVisible();
  });

  test('should redirect unauthenticated users from protected admin modules', async ({ page }) => {
    const protectedRoutes = [
      '/en/admin/employees',
      '/en/admin/inventory',
      '/en/admin/projects',
      '/en/admin/todos',
    ];

    for (const route of protectedRoutes) {
      await page.goto(route);
      await expect(page).toHaveURL('/en/admin/sign-in');
    }
  });

  test('should show error message for invalid credentials', async ({ page }) => {
    // Enter invalid credentials
    await page.getByLabel('Email').fill('invalid@example.com');
    await page.getByLabel('Password').fill('wrongpassword');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Should show error message
    await expect(page.getByText('Invalid email or password')).toBeVisible();
  });

  test('should remember email when remember me is checked', async ({ page }) => {
    const testEmail = 'test@example.com';

    // Fill form and check remember me
    await page.getByLabel('Email').fill(testEmail);
    await page.getByLabel('Password').fill('password123');
    await page.getByLabel('Remember me').check();

    // Submit form (will fail due to invalid credentials, but email should be remembered)
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Navigate away and back
    await page.goto('/en/admin/sign-in');

    // Email should still be filled
    await expect(page.getByLabel('Email')).toHaveValue(testEmail);
  });

  test('should not remember email when remember me is unchecked', async ({ page }) => {
    const testEmail = 'test@example.com';

    // Fill form without checking remember me
    await page.getByLabel('Email').fill(testEmail);
    await page.getByLabel('Password').fill('password123');

    // Submit form (will fail due to invalid credentials)
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Navigate away and back
    await page.goto('/en/admin/sign-in');

    // Email should not be filled
    await expect(page.getByLabel('Email')).toHaveValue('');
  });

  test('should handle network errors gracefully', async ({ page }) => {
    // Mock network failure
    await page.route('**/api/auth/sign-in', (route) => {
      route.abort('failed');
    });

    // Fill and submit form
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('password123');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Should show network error message
    await expect(page.getByText(/network|connection|error/i)).toBeVisible();
  });

  test('should show loading state during sign-in', async ({ page }) => {
    // Fill form
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('password123');

    // Submit form
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Button should show loading state
    await expect(page.getByRole('button', { name: 'Signing In...' })).toBeVisible();
  });

  test('should handle escape key to close any error modals', async ({ page }) => {
    // Trigger an error (invalid credentials)
    await page.getByLabel('Email').fill('test@example.com');
    await page.getByLabel('Password').fill('wrongpassword');
    await page.getByRole('button', { name: 'Sign In' }).click();

    // Wait for error to appear
    await expect(page.getByText('Invalid email or password')).toBeVisible();

    // Press escape key
    await page.keyboard.press('Escape');

    // Error should still be visible (escape doesn't clear validation errors)
    await expect(page.getByText('Invalid email or password')).toBeVisible();
  });
});

test.describe('Admin Layout and Navigation', () => {
  test('should show correct navigation based on user role', async ({ page }) => {
    // This test would require authentication setup
    // For now, we'll test the unauthenticated state

    await page.goto('/en/admin/sign-in');

    // Should show sign-in link in header
    await expect(page.getByRole('link', { name: 'Sign in' })).toBeVisible();

    // Should not show admin navigation items
    await expect(page.getByRole('link', { name: 'Employees' })).not.toBeVisible();
    await expect(page.getByRole('link', { name: 'Inventory' })).not.toBeVisible();
    await expect(page.getByRole('link', { name: 'Projects' })).not.toBeVisible();
    await expect(page.getByRole('link', { name: 'Todos' })).not.toBeVisible();
  });

  test('should handle locale switching in admin routes', async ({ page }) => {
    // Test English locale
    await page.goto('/en/admin/sign-in');
    await expect(page.getByRole('heading', { name: 'Admin Sign In' })).toBeVisible();

    // Test French locale
    await page.goto('/fr/admin/sign-in');
    // Note: This would need French translations to be implemented
    // For now, we'll just verify the route is accessible
    await expect(page).toHaveURL('/fr/admin/sign-in');
  });
});
