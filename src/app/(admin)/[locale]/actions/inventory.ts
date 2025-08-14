'use server';
import { adminDb } from '@/lib/firebase/admin';
import { requireCanManageContent } from '@/lib/auth/rbac';
import { revalidatePath } from 'next/cache';

export async function createInventoryItem(
  locale: string,
  data: { name: string; sku?: string; quantity: number; location?: string }
) {
  await requireCanManageContent();
  const now = new Date().toISOString();
  const doc = await adminDb.collection('inventory').add({ ...data, updatedAt: now });
  revalidatePath(`/${locale}/admin/inventory`);
  return { id: doc.id };
}

export async function updateInventoryItem(
  locale: string,
  id: string,
  patch: Partial<{ name: string; sku?: string; quantity: number; location?: string }>
) {
  await requireCanManageContent();
  const now = new Date().toISOString();
  await adminDb
    .collection('inventory')
    .doc(id)
    .set({ ...patch, updatedAt: now }, { merge: true });
  revalidatePath(`/${locale}/admin/inventory`);
}

export async function deleteInventoryItem(locale: string, id: string) {
  await requireCanManageContent();
  await adminDb.collection('inventory').doc(id).delete();
  revalidatePath(`/${locale}/admin/inventory`);
}
