import { notFound, redirect } from 'next/navigation';
import { adminDb } from '@/lib/firebase/admin';
import { updateInventoryItem, deleteInventoryItem } from '../../../actions/inventory';

async function getItem(id: string) {
  try {
    const snap = await adminDb.collection('inventory').doc(id).get();
    return snap.exists ? { id: snap.id, ...(snap.data() as any) } : null;
  } catch {
    return null;
  }
}

type Props = { params: Promise<{ id: string; locale: string }> };
export default async function InventoryEditPage({ params }: Props) {
  const { id, locale } = await params;
  const item = await getItem(id);
  if (!item) notFound();

  async function onUpdate(formData: FormData) {
    'use server';
    const name = String(formData.get('name') || '').trim();
    const sku = String(formData.get('sku') || '').trim() || undefined;
    const quantity = Number(formData.get('quantity') || 0);
    const location = String(formData.get('location') || '').trim() || undefined;
    await updateInventoryItem(locale, id, { name, sku, quantity, location });
    redirect(`/${locale}/admin/inventory`);
  }

  async function onDelete() {
    'use server';
    await deleteInventoryItem(locale, id);
    redirect(`/${locale}/admin/inventory`);
  }

  return (
    <main className="mx-auto max-w-screen-md px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold">Edit item</h1>
      <form action={onUpdate} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            defaultValue={item.name}
            required
            className="mt-1 w-full rounded border px-3 py-2"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium">SKU</label>
            <input
              name="sku"
              defaultValue={item.sku || ''}
              className="mt-1 w-full rounded border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Quantity</label>
            <input
              name="quantity"
              type="number"
              defaultValue={item.quantity}
              min={0}
              className="mt-1 w-full rounded border px-3 py-2"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              name="location"
              defaultValue={item.location || ''}
              className="mt-1 w-full rounded border px-3 py-2"
            />
          </div>
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
            href={`/${locale}/admin/inventory`}
            className="rounded border px-4 py-2 hover:bg-neutral-50"
          >
            Cancel
          </a>
        </div>
      </form>
    </main>
  );
}
