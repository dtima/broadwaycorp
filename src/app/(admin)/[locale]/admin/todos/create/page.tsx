import { redirect } from 'next/navigation';
import { createTodo } from '../../../actions/todos';

type Props = { params: Promise<{ locale: string }> };
export default async function TodoCreatePage({ params }: Props) {
  const { locale } = await params;
  async function onCreate(formData: FormData) {
    'use server';
    const title = String(formData.get('title') || '').trim();
    const assignee = String(formData.get('assignee') || '').trim() || undefined;
    await createTodo(locale, { title, assignee });
    redirect(`/${locale}/admin/todos`);
  }

  return (
    <main className="mx-auto max-w-screen-md px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold">New todo</h1>
      <form action={onCreate} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            name="title"
            required
            className="mt-1 w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Assignee</label>
          <input
            name="assignee"
            className="mt-1 w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Create
          </button>
          <a
            href={`/${locale}/admin/todos`}
            className="rounded border px-4 py-2 hover:bg-neutral-50"
          >
            Cancel
          </a>
        </div>
      </form>
    </main>
  );
}
