import { notFound, redirect } from 'next/navigation';
import { adminDb } from '@/lib/firebase/admin';
import { updateProject, deleteProject } from '../../../actions/projects';

async function getProject(id: string) {
  try {
    const snap = await adminDb.collection('projects').doc(id).get();
    return snap.exists ? { id: snap.id, ...(snap.data() as any) } : null;
  } catch {
    return null;
  }
}

type Props = { params: Promise<{ id: string; locale: string }> };
export default async function ProjectEditPage({ params }: Props) {
  const { id, locale } = await params;
  const project = await getProject(id);
  if (!project) notFound();

  async function onUpdate(formData: FormData) {
    'use server';
    const name = String(formData.get('name') || '').trim();
    const status = String(formData.get('status') || 'planned') as any;
    await updateProject(locale, id, { name, status });
    redirect(`/${locale}/admin/projects`);
  }

  async function onDelete() {
    'use server';
    await deleteProject(locale, id);
    redirect(`/${locale}/admin/projects`);
  }

  return (
    <main className="mx-auto max-w-screen-md px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold">Edit project</h1>
      <form action={onUpdate} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            defaultValue={project.name}
            required
            className="mt-1 w-full rounded border px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select
            name="status"
            defaultValue={project.status}
            className="mt-1 w-full rounded border px-3 py-2"
          >
            <option value="planned">Planned</option>
            <option value="active">Active</option>
            <option value="paused">Paused</option>
            <option value="done">Done</option>
          </select>
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Save
          </button>
          <form action={onDelete}>
            <button type="submit" className="rounded border px-4 py-2 text-red-600 hover:bg-red-50">
              Delete
            </button>
          </form>
          <a
            href={`/${locale}/admin/projects`}
            className="rounded border px-4 py-2 hover:bg-neutral-50"
          >
            Cancel
          </a>
        </div>
      </form>
    </main>
  );
}
