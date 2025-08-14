import { ReactNode } from 'react';

export interface HeroSimpleProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  actions?: ReactNode;
}

export default function HeroSimple({ eyebrow, title, subtitle, actions }: HeroSimpleProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50 dark:from-[var(--background)] dark:to-neutral-900/40">
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        {eyebrow && (
          <p className="text-xs font-medium uppercase tracking-wide text-blue-700 sm:text-sm">
            {eyebrow}
          </p>
        )}
        <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
          {title}
        </h1>
        {subtitle && (
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-[var(--muted)] sm:text-lg">
            {subtitle}
          </p>
        )}
        {actions && <div className="mt-6 flex flex-wrap gap-3">{actions}</div>}
      </div>
    </section>
  );
}
