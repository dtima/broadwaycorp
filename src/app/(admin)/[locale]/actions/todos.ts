'use server';
import { adminDb } from '@/lib/firebase/admin';
import { requireCanManageContent } from '@/lib/auth/rbac';
import { headers } from 'next/headers';
import { isAllowedOrigin } from '@/lib/utils';
import { todoCreateSchema, todoToggleSchema } from '@/lib/validations/todos';
import { revalidatePath } from 'next/cache';

export async function createTodo(locale: string, data: { title: string; assignee?: string }) {
  await requireCanManageContent();
  const origin = (await headers()).get('origin');
  if (!isAllowedOrigin(origin)) throw new Error('Invalid origin');
  const parsed = todoCreateSchema.safeParse(data);
  if (!parsed.success) throw new Error('Invalid input');
  const now = new Date().toISOString();
  const doc = await adminDb
    .collection('todos')
    .add({ ...parsed.data, done: false, updatedAt: now });
  revalidatePath(`/${locale}/admin/todos`);
  return { id: doc.id };
}

export async function toggleTodo(locale: string, id: string, done: boolean) {
  await requireCanManageContent();
  const origin = (await headers()).get('origin');
  if (!isAllowedOrigin(origin)) throw new Error('Invalid origin');
  const parsed = todoToggleSchema.safeParse({ done });
  if (!parsed.success) throw new Error('Invalid input');
  const now = new Date().toISOString();
  await adminDb
    .collection('todos')
    .doc(id)
    .set({ done: parsed.data.done, updatedAt: now }, { merge: true });
  revalidatePath(`/${locale}/admin/todos`);
}

export async function deleteTodo(locale: string, id: string) {
  await requireCanManageContent();
  const origin = (await headers()).get('origin');
  if (!isAllowedOrigin(origin)) throw new Error('Invalid origin');
  await adminDb.collection('todos').doc(id).delete();
  revalidatePath(`/${locale}/admin/todos`);
}
