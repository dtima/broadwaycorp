'use server';
import { adminDb } from '@/lib/firebase/admin';
import { requireCanManageContent } from '@/lib/auth/rbac';
import { headers } from 'next/headers';
import { isAllowedOrigin } from '@/lib/utils';
import { projectCreateSchema, projectUpdateSchema } from '@/lib/validations/projects';
import { revalidatePath } from 'next/cache';

export async function createProject(
  locale: string,
  data: { name: string; status?: 'planned' | 'active' | 'paused' | 'done' }
) {
  await requireCanManageContent();
  const origin = (await headers()).get('origin');
  if (!isAllowedOrigin(origin)) throw new Error('Invalid origin');
  const parsed = projectCreateSchema.safeParse(data);
  if (!parsed.success) throw new Error('Invalid input');
  const now = new Date().toISOString();
  const doc = await adminDb
    .collection('projects')
    .add({ name: parsed.data.name, status: parsed.data.status || 'planned', updatedAt: now });
  revalidatePath(`/${locale}/admin/projects`);
  return { id: doc.id };
}

export async function updateProject(
  locale: string,
  id: string,
  patch: Partial<{ name: string; status: 'planned' | 'active' | 'paused' | 'done' }>
) {
  await requireCanManageContent();
  const origin = (await headers()).get('origin');
  if (!isAllowedOrigin(origin)) throw new Error('Invalid origin');
  const parsed = projectUpdateSchema.safeParse(patch);
  if (!parsed.success) throw new Error('Invalid input');
  const now = new Date().toISOString();
  await adminDb
    .collection('projects')
    .doc(id)
    .set({ ...parsed.data, updatedAt: now }, { merge: true });
  revalidatePath(`/${locale}/admin/projects`);
}

export async function deleteProject(locale: string, id: string) {
  await requireCanManageContent();
  const origin = (await headers()).get('origin');
  if (!isAllowedOrigin(origin)) throw new Error('Invalid origin');
  await adminDb.collection('projects').doc(id).delete();
  revalidatePath(`/${locale}/admin/projects`);
}
