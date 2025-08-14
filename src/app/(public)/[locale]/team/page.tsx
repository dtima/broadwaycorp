export default function TeamPage() {
  const members = [
    { name: 'Operations', desc: 'Delivering impact across divisions.' },
    { name: 'Engineering', desc: 'Building reliable, scalable platforms.' },
    { name: 'Design', desc: 'Crafting accessible, human interfaces.' },
    { name: 'Support', desc: 'Helping customers succeed every day.' },
  ];
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <header className="mb-8">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-700 sm:text-sm">
          Our Team
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          People behind Broadway
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          Meet the groups delivering sustainable solutions across agriculture, labs, IT and
          hospitality.
        </p>
      </header>
      <section className="grid gap-6 sm:grid-cols-2 md:grid-cols-4">
        {members.map((m) => (
          <div key={m.name} className="rounded-2xl border bg-white p-6 shadow-sm">
            <div className="text-lg font-semibold">{m.name}</div>
            <p className="mt-2 text-sm text-neutral-600">{m.desc}</p>
          </div>
        ))}
      </section>
    </main>
  );
}
