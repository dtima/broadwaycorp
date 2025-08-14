'use server';
import { adminDb } from '@/lib/firebase/admin';
import { requireCanManageContent } from '@/lib/auth/rbac';
import { headers } from 'next/headers';
import { isAllowedOrigin } from '@/lib/utils';
import { inventoryCreateSchema, inventoryUpdateSchema } from '@/lib/validations/inventory';
import { revalidatePath } from 'next/cache';

export async function createInventoryItem(
  locale: string,
  data: { name: string; sku?: string; quantity: number; location?: string }
) {
  await requireCanManageContent();
  const origin = (await headers()).get('origin');
  if (!isAllowedOrigin(origin)) throw new Error('Invalid origin');
  const parsed = inventoryCreateSchema.safeParse(data);
  if (!parsed.success) throw new Error('Invalid input');
  const now = new Date().toISOString();
  const doc = await adminDb.collection('inventory').add({ ...parsed.data, updatedAt: now });
  revalidatePath(`/${locale}/admin/inventory`);
  return { id: doc.id };
}

export async function updateInventoryItem(
  locale: string,
  id: string,
  patch: Partial<{ name: string; sku?: string; quantity: number; location?: string }>
) {
  await requireCanManageContent();
  const origin = (await headers()).get('origin');
  if (!isAllowedOrigin(origin)) throw new Error('Invalid origin');
  const parsed = inventoryUpdateSchema.safeParse(patch);
  if (!parsed.success) throw new Error('Invalid input');
  const now = new Date().toISOString();
  await adminDb
    .collection('inventory')
    .doc(id)
    .set({ ...parsed.data, updatedAt: now }, { merge: true });
  revalidatePath(`/${locale}/admin/inventory`);
}

export async function deleteInventoryItem(locale: string, id: string) {
  await requireCanManageContent();
  const origin = (await headers()).get('origin');
  if (!isAllowedOrigin(origin)) throw new Error('Invalid origin');
  await adminDb.collection('inventory').doc(id).delete();
  revalidatePath(`/${locale}/admin/inventory`);
}
