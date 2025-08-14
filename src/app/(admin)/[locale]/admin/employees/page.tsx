import { unstable_noStore as noStore } from 'next/cache';
import { adminDb } from '@/lib/firebase/admin';
import { EmployeeItem } from '@/lib/types/admin';

async function listEmployees(): Promise<EmployeeItem[]> {
  noStore();
  try {
    const snap = await adminDb
      .collection('employees')
      .orderBy('updatedAt', 'desc')
      .limit(100)
      .get();
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
  } catch {
    return [];
  }
}

export default async function EmployeesPage() {
  const items = await listEmployees();
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold">Employees</h1>
      <a
        href="./create"
        className="mt-4 inline-block rounded border px-3 py-1 text-sm hover:bg-neutral-50"
      >
        New employee
      </a>
      <table className="mt-4 w-full table-fixed border-collapse text-sm">
        <thead>
          <tr className="text-left">
            <th className="w-2/6 border-b p-2">Name</th>
            <th className="w-2/6 border-b p-2">Role</th>
            <th className="w-2/6 border-b p-2">Updated</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id} className="hover:bg-neutral-50">
              <td className="p-2">{i.name}</td>
              <td className="p-2">{i.role}</td>
              <td className="p-2">{new Date(i.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
          {items.length === 0 && (
            <tr>
              <td className="p-2 text-neutral-500" colSpan={3}>
                No employees yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
