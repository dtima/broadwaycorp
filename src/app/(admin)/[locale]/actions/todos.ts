'use server';
import { adminDb } from '@/lib/firebase/admin';
import { revalidatePath } from 'next/cache';

export async function createTodo(locale: string, data: { title: string; assignee?: string }) {
  const now = new Date().toISOString();
  const doc = await adminDb.collection('todos').add({ ...data, done: false, updatedAt: now });
  revalidatePath(`/${locale}/admin/todos`);
  return { id: doc.id };
}

export async function toggleTodo(locale: string, id: string, done: boolean) {
  const now = new Date().toISOString();
  await adminDb.collection('todos').doc(id).set({ done, updatedAt: now }, { merge: true });
  revalidatePath(`/${locale}/admin/todos`);
}

export async function deleteTodo(locale: string, id: string) {
  await adminDb.collection('todos').doc(id).delete();
  revalidatePath(`/${locale}/admin/todos`);
}
