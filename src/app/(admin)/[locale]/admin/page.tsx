export default function AdminHome() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6">
      <h1 className="text-2xl font-semibold">Admin Dashboard</h1>
      <p className="mt-2 text-sm text-neutral-600">Snapshot of KPIs and quick access to modules.</p>
      <section className="mt-8 grid gap-4 md:grid-cols-4">
        <a
          href="./inventory"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <div className="text-sm text-neutral-500">Module</div>
          <div className="mt-1 text-xl font-semibold">Inventory</div>
          <p className="mt-2 text-sm text-neutral-600">Track items and stock.</p>
        </a>
        <a
          href="./todos"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <div className="text-sm text-neutral-500">Module</div>
          <div className="mt-1 text-xl font-semibold">Todos</div>
          <p className="mt-2 text-sm text-neutral-600">Team tasks and follow‑ups.</p>
        </a>
        <a
          href="./projects"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <div className="text-sm text-neutral-500">Module</div>
          <div className="mt-1 text-xl font-semibold">Projects</div>
          <p className="mt-2 text-sm text-neutral-600">Status and milestones.</p>
        </a>
        <a
          href="./employees"
          className="rounded-2xl border bg-white p-6 shadow-sm transition hover:shadow-md"
        >
          <div className="text-sm text-neutral-500">Module</div>
          <div className="mt-1 text-xl font-semibold">Employees</div>
          <p className="mt-2 text-sm text-neutral-600">Directory and roles.</p>
        </a>
      </section>
    </main>
  );
}
