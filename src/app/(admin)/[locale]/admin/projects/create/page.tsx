import { redirect } from 'next/navigation';
import { createProject } from '../../../actions/projects';

type Props = { params: Promise<{ locale: string }> };
export default async function ProjectCreatePage({ params }: Props) {
  const { locale } = await params;
  async function onCreate(formData: FormData) {
    'use server';
    const name = String(formData.get('name') || '').trim();
    const status = String(formData.get('status') || 'planned') as any;
    await createProject(locale, { name, status });
    redirect(`/${locale}/admin/projects`);
  }

  return (
    <main className="mx-auto max-w-screen-md px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold">New project</h1>
      <form action={onCreate} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Status</label>
          <select name="status" className="mt-1 w-full rounded border px-3 py-2">
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
            Create
          </button>
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
