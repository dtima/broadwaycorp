import divisions from '@/content/divisions.json';
import HeroSimple from '@/components/sections/HeroSimple';

export default function DivisionsIndex() {
  const items = divisions as Array<{
    id: string;
    title: string;
    description?: string;
    href: string;
  }>;
  return (
    <main>
      <HeroSimple title="All Divisions" subtitle="Explore Broadway Corporation's four divisions." />
      <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <ul className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((d) => (
            <li
              key={d.id}
              className="rounded-2xl border bg-white/70 p-5 shadow-sm ring-1 ring-neutral-100"
            >
              <a href={`/${d.href.replace(/^\//, '')}`} className="block">
                <div className="h-32 w-full rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500" />
                <h3 className="mt-4 text-lg font-semibold">{d.title}</h3>
                {d.description && <p className="mt-1 text-sm text-neutral-600">{d.description}</p>}
              </a>
            </li>
          ))}
        </ul>
      </section>
    </main>
  );
}
