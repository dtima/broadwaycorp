import Link from 'next/link';

export interface SubsectionCardProps {
  title: string;
  description: string;
  href: string;
}

export default function SubsectionCard({ title, description, href }: SubsectionCardProps) {
  return (
    <Link
      href={href}
      className="group block rounded-2xl border bg-white/70 p-5 shadow-sm ring-1 ring-neutral-100 transition hover:shadow-md dark:bg-[var(--card)]"
    >
      <div className="h-28 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 opacity-90 transition group-hover:opacity-100" />
      <h3 className="mt-4 text-lg font-semibold">{title}</h3>
      <p className="mt-1 text-sm text-neutral-600 dark:text-[var(--muted)]">{description}</p>
    </Link>
  );
}
