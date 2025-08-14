'use server';
import { adminDb } from '@/lib/firebase/admin';
import { requireCanManageContent } from '@/lib/auth/rbac';
import { revalidatePath } from 'next/cache';

export async function createProject(
  locale: string,
  data: { name: string; status?: 'planned' | 'active' | 'paused' | 'done' }
) {
  await requireCanManageContent();
  const now = new Date().toISOString();
  const doc = await adminDb
    .collection('projects')
    .add({ name: data.name, status: data.status || 'planned', updatedAt: now });
  revalidatePath(`/${locale}/admin/projects`);
  return { id: doc.id };
}

export async function updateProject(
  locale: string,
  id: string,
  patch: Partial<{ name: string; status: 'planned' | 'active' | 'paused' | 'done' }>
) {
  await requireCanManageContent();
  const now = new Date().toISOString();
  await adminDb
    .collection('projects')
    .doc(id)
    .set({ ...patch, updatedAt: now }, { merge: true });
  revalidatePath(`/${locale}/admin/projects`);
}

export async function deleteProject(locale: string, id: string) {
  await requireCanManageContent();
  await adminDb.collection('projects').doc(id).delete();
  revalidatePath(`/${locale}/admin/projects`);
}
