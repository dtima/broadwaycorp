'use server';
import { adminDb } from '@/lib/firebase/admin';
import { revalidatePath } from 'next/cache';

export async function createEmployee(
  locale: string,
  data: { name: string; role: string; email?: string }
) {
  const now = new Date().toISOString();
  const doc = await adminDb.collection('employees').add({ ...data, updatedAt: now });
  revalidatePath(`/${locale}/admin/employees`);
  return { id: doc.id };
}

export async function updateEmployee(
  locale: string,
  id: string,
  patch: Partial<{ name: string; role: string; email?: string }>
) {
  const now = new Date().toISOString();
  await adminDb
    .collection('employees')
    .doc(id)
    .set({ ...patch, updatedAt: now }, { merge: true });
  revalidatePath(`/${locale}/admin/employees`);
}

export async function deleteEmployee(locale: string, id: string) {
  await adminDb.collection('employees').doc(id).delete();
  revalidatePath(`/${locale}/admin/employees`);
}
