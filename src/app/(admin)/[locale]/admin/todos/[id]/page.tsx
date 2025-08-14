import { notFound, redirect } from 'next/navigation';
import { adminDb } from '@/lib/firebase/admin';
import { toggleTodo, deleteTodo } from '../../../actions/todos';

async function getTodo(id: string) {
  try {
    const snap = await adminDb.collection('todos').doc(id).get();
    return snap.exists ? { id: snap.id, ...(snap.data() as any) } : null;
  } catch {
    return null;
  }
}

type Props = { params: Promise<{ id: string; locale: string }> };
export default async function TodoEditPage({ params }: Props) {
  const { id, locale } = await params;
  const todo = await getTodo(id);
  if (!todo) notFound();

  async function onToggle(formData: FormData) {
    'use server';
    const done = String(formData.get('done')) === 'on';
    await toggleTodo(locale, id, done);
    redirect(`/${locale}/admin/todos`);
  }

  async function onDelete() {
    'use server';
    await deleteTodo(locale, id);
    redirect(`/${locale}/admin/todos`);
  }

  return (
    <main className="mx-auto max-w-screen-md px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold">Edit todo</h1>
      <form action={onToggle} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Title</label>
          <input
            defaultValue={todo.title}
            disabled
            className="mt-1 w-full rounded border px-3 py-2 bg-neutral-50"
          />
        </div>
        <label className="inline-flex items-center gap-2 text-sm">
          <input name="done" type="checkbox" defaultChecked={todo.done} /> Done
        </label>
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
