import { unstable_noStore as noStore } from 'next/cache';
import { adminDb } from '@/lib/firebase/admin';
import { InventoryItem } from '@/lib/types/admin';

async function listItems(): Promise<InventoryItem[]> {
  noStore();
  try {
    const snap = await adminDb.collection('inventory').orderBy('updatedAt', 'desc').limit(50).get();
    return snap.docs.map((d) => ({ id: d.id, ...(d.data() as any) }));
  } catch {
    return [];
  }
}

export default async function InventoryPage() {
  const items = await listItems();
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold">Inventory</h1>
      <a
        href="./create"
        className="mt-4 inline-block rounded border px-3 py-1 text-sm hover:bg-neutral-50"
      >
        New item
      </a>
      <table className="mt-4 w-full table-fixed border-collapse text-sm">
        <thead>
          <tr className="text-left">
            <th className="w-3/6 border-b p-2">Name</th>
            <th className="w-1/6 border-b p-2">SKU</th>
            <th className="w-1/6 border-b p-2">Qty</th>
            <th className="w-1/6 border-b p-2">Updated</th>
          </tr>
        </thead>
        <tbody>
          {items.map((i) => (
            <tr key={i.id} className="hover:bg-neutral-50">
              <td className="p-2">
                <a className="underline" href={`./${i.id}`}>
                  {i.name}
                </a>
              </td>
              <td className="p-2">{i.sku || '—'}</td>
              <td className="p-2">{i.quantity}</td>
              <td className="p-2">{new Date(i.updatedAt).toLocaleString()}</td>
            </tr>
          ))}
          {items.length === 0 && (
            <tr>
              <td className="p-2 text-neutral-500" colSpan={4}>
                No items yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </main>
  );
}
