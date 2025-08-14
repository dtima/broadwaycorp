import { unstable_noStore as noStore } from 'next/cache';
import { adminDb } from '@/lib/firebase/admin';
import { ProjectItem } from '@/lib/types/admin';

async function listProjects(): Promise<ProjectItem[]> {
  noStore();
  try {
    const snap = await adminDb.collection('projects').orderBy('updatedAt', 'desc').limit(100).get();
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
  } catch {
    return [];
  }
}

export default async function ProjectsPage() {
  const items = await listProjects();
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold">Projects</h1>
      <a
        href="./create"
        className="mt-4 inline-block rounded border px-3 py-1 text-sm hover:bg-neutral-50"
      >
        New project
      </a>
      <div className="mt-4 grid gap-4 md:grid-cols-2">
        {items.map((p) => (
          <div key={p.id} className="rounded-2xl border bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div className="text-lg font-semibold">{p.name}</div>
              <span className="rounded border px-2 py-0.5 text-xs capitalize">{p.status}</span>
            </div>
            <div className="mt-2 text-xs text-neutral-500">
              Updated {new Date(p.updatedAt).toLocaleString()}
            </div>
          </div>
        ))}
        {items.length === 0 && (
          <div className="rounded border p-4 text-neutral-500">No projects yet.</div>
        )}
      </div>
    </main>
  );
}
