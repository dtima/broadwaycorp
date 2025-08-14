'use server';
import { adminDb } from '@/lib/firebase/admin';
import { requireCanManageEmployees } from '@/lib/auth/rbac';
import { headers } from 'next/headers';
import { isAllowedOrigin } from '@/lib/utils';
import { employeeCreateSchema, employeeUpdateSchema } from '@/lib/validations/employees';
import { revalidatePath } from 'next/cache';

export async function createEmployee(
  locale: string,
  data: { name: string; role: string; email?: string }
) {
  await requireCanManageEmployees();
  const origin = (await headers()).get('origin');
  if (!isAllowedOrigin(origin)) throw new Error('Invalid origin');
  const parsed = employeeCreateSchema.safeParse(data);
  if (!parsed.success) {
    throw new Error('Invalid input');
  }
  const now = new Date().toISOString();
  const doc = await adminDb.collection('employees').add({ ...parsed.data, updatedAt: now });
  revalidatePath(`/${locale}/admin/employees`);
  return { id: doc.id };
}

export async function updateEmployee(
  locale: string,
  id: string,
  patch: Partial<{ name: string; role: string; email?: string }>
) {
  await requireCanManageEmployees();
  const origin = (await headers()).get('origin');
  if (!isAllowedOrigin(origin)) throw new Error('Invalid origin');
  const parsed = employeeUpdateSchema.safeParse(patch);
  if (!parsed.success) throw new Error('Invalid input');
  const now = new Date().toISOString();
  await adminDb
    .collection('employees')
    .doc(id)
    .set({ ...parsed.data, updatedAt: now }, { merge: true });
  revalidatePath(`/${locale}/admin/employees`);
}

export async function deleteEmployee(locale: string, id: string) {
  await requireCanManageEmployees();
  const origin = (await headers()).get('origin');
  if (!isAllowedOrigin(origin)) throw new Error('Invalid origin');
  await adminDb.collection('employees').doc(id).delete();
  revalidatePath(`/${locale}/admin/employees`);
}
