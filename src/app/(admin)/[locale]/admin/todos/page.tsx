import { unstable_noStore as noStore } from 'next/cache';
import { adminDb } from '@/lib/firebase/admin';
import { TodoItem } from '@/lib/types/admin';

async function listTodos(): Promise<TodoItem[]> {
  noStore();
  try {
    const snap = await adminDb.collection('todos').orderBy('updatedAt', 'desc').limit(100).get();
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
  } catch {
    return [];
  }
}

export default async function TodosPage() {
  const items = await listTodos();
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold">Todos</h1>
      <a
        href="./create"
        className="mt-4 inline-block rounded border px-3 py-1 text-sm hover:bg-neutral-50"
      >
        New todo
      </a>
      <ul className="mt-4 divide-y rounded border bg-white">
        {items.map((t) => (
          <li key={t.id} className="flex items-center justify-between p-3">
            <div>
              <div className="font-medium">{t.title}</div>
              <div className="text-xs text-neutral-500">
                Updated {new Date(t.updatedAt).toLocaleString()}
              </div>
            </div>
            <span
              className={`rounded px-2 py-0.5 text-xs ${t.done ? 'bg-green-50 text-green-700' : 'bg-yellow-50 text-yellow-700'}`}
            >
              {t.done ? 'Done' : 'Open'}
            </span>
          </li>
        ))}
        {items.length === 0 && <li className="p-3 text-neutral-500">No todos yet.</li>}
      </ul>
    </main>
  );
}
