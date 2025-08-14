import { describe, it, expect, vi, beforeEach, afterEach } from 'vitest';
import { UnauthorizedError } from '@/lib/auth/rbac';

// Import one action representative for each guard
import { createEmployee } from '@/app/(admin)/[locale]/actions/employees';
import { createInventoryItem } from '@/app/(admin)/[locale]/actions/inventory';

vi.mock('@/lib/auth/session', async (orig) => {
  // Always return null to simulate unauthenticated requests
  return {
    ...(await orig()),
    getCurrentUser: vi.fn(async () => null),
  };
});

// These tests simulate calling server actions without a session
// The guards internally will call getCurrentUser(), which returns null in test env

describe('Authorization guards on server actions', () => {
  it('rejects unauthenticated user for employees (admin-only)', async () => {
    await expect(
      createEmployee('en', { name: 'Test', role: 'Engineer', email: 't@example.com' })
    ).rejects.toBeInstanceOf(UnauthorizedError);
  });

  it('rejects unauthenticated user for inventory (admin/editor)', async () => {
    await expect(createInventoryItem('en', { name: 'Item', quantity: 1 })).rejects.toBeInstanceOf(
      UnauthorizedError
    );
  });
});
