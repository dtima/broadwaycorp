import { redirect } from 'next/navigation';
import { createInventoryItem } from '../../../actions/inventory';

type Props = { params: Promise<{ locale: string }> };
export default async function InventoryCreatePage({ params }: Props) {
  const { locale } = await params;
  async function onCreate(formData: FormData) {
    'use server';
    const name = String(formData.get('name') || '').trim();
    const sku = String(formData.get('sku') || '').trim() || undefined;
    const quantity = Number(formData.get('quantity') || 0);
    const location = String(formData.get('location') || '').trim() || undefined;
    await createInventoryItem(locale, { name, sku, quantity, location });
    redirect(`/${locale}/admin/inventory`);
  }

  return (
    <main className="mx-auto max-w-screen-md px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold">New inventory item</h1>
      <form action={onCreate} className="mt-6 space-y-4">
        <div>
          <label className="block text-sm font-medium">Name</label>
          <input
            name="name"
            required
            className="mt-1 w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="grid gap-4 sm:grid-cols-3">
          <div>
            <label className="block text-sm font-medium">SKU</label>
            <input
              name="sku"
              className="mt-1 w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Quantity</label>
            <input
              name="quantity"
              type="number"
              defaultValue={0}
              min={0}
              className="mt-1 w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
          <div>
            <label className="block text-sm font-medium">Location</label>
            <input
              name="location"
              className="mt-1 w-full rounded border px-3 py-2 focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>
        <div className="flex gap-2">
          <button
            type="submit"
            className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Create
          </button>
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
