import { notFound, redirect } from 'next/navigation';
import { adminDb } from '@/lib/firebase/admin';
import { updateEmployee, deleteEmployee } from '../../../actions/employees';

async function getEmployee(id: string) {
  try {
    const snap = await adminDb.collection('employees').doc(id).get();
    return snap.exists ? { id: snap.id, ...(snap.data() as any) } : null;
  } catch {
    return null;
  }
}

type Props = { params: Promise<{ id: string; locale: string }> };
export default async function EmployeeEditPage({ params }: Props) {
  const { id, locale } = await params;
  const employee = await getEmployee(id);
  if (!employee) notFound();

  async function onUpdate(formData: FormData) {
    'use server';
    const name = String(formData.get('name') || '').trim();
    const role = String(formData.get('role') || '').trim();
    const email = String(formData.get('email') || '').trim() || undefined;
    await updateEmployee(locale, id, { name, role, email });
    redirect(`/${locale}/admin/employees`);
  }

  async function onDelete() {
    'use server';
    await deleteEmployee(locale, id);
    redirect(`/${locale}/admin/employees`);
  }

  return (
    <main className="mx-auto max-w-screen-md px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold">Edit employee</h1>
      <form action={onUpdate} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            defaultValue={employee.name}
            required
            className="mt-1 w-full rounded border px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Role</label>
          <input
            name="role"
            defaultValue={employee.role}
            required
            className="mt-1 w-full rounded border px-3 py-2"
          />
        </div>
        <div>
          <label className="block text-sm font-medium">Email</label>
          <input
            name="email"
            type="email"
            defaultValue={employee.email || ''}
            className="mt-1 w-full rounded border px-3 py-2"
          />
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
            href={`/${locale}/admin/employees`}
            className="rounded border px-4 py-2 hover:bg-neutral-50"
          >
            Cancel
          </a>
        </div>
      </form>
    </main>
  );
}
