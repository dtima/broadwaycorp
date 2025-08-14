import Link from 'next/link';
import type { Metadata } from 'next';
import events from '@/content/events.json';
import { getTranslations } from 'next-intl/server';

type EventItem = {
  id: string;
  title: string;
  startAt: string;
  location?: string;
  href: string;
};

export const metadata: Metadata = {
  title: 'Events | Broadway Corporation',
};

type Props = { params: Promise<{ locale: string }> };
export default async function EventsPage({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale });
  const all = (events as EventItem[]).slice();
  const now = Date.now();
  const upcoming = all
    .filter((e) => new Date(e.startAt).getTime() >= now)
    .sort((a, b) => new Date(a.startAt).getTime() - new Date(b.startAt).getTime());
  const past = all
    .filter((e) => new Date(e.startAt).getTime() < now)
    .sort((a, b) => new Date(b.startAt).getTime() - new Date(a.startAt).getTime());

  function formatDate(iso: string) {
    const d = new Date(iso);
    return d.toLocaleDateString(locale, {
      weekday: 'short',
      year: 'numeric',
      month: 'short',
      day: '2-digit',
    });
  }

  const withLocale = (href: string) => `/${locale}${href}`;

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50 dark:from-[var(--background)] dark:to-neutral-900/40">
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wide text-blue-700 sm:text-sm">
            {t('events.eyebrow')}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {t('events.title')}
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-[var(--muted)]">
            {t('events.intro')}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold sm:text-2xl">{t('events.upcoming')}</h2>
        {upcoming.length === 0 ? (
          <p className="mt-4 text-sm text-neutral-600">{t('events.noUpcoming')}</p>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {upcoming.map((e) => (
              <li
                key={e.id}
                className="rounded-2xl border bg-white/70 p-5 shadow-sm ring-1 ring-neutral-100 transition hover:shadow-md dark:bg-[var(--card)]"
              >
                <Link href={withLocale(e.href)} className="block focus:outline-none">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-blue-700">{formatDate(e.startAt)}</div>
                      <h3 className="mt-1 text-lg font-semibold">{e.title}</h3>
                      {e.location && (
                        <div className="mt-1 text-sm text-neutral-600">{e.location}</div>
                      )}
                    </div>
                    <span
                      aria-hidden
                      className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-blue-50 text-blue-700"
                    >
                      →
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>

      <section className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 lg:px-8">
        <h2 className="text-xl font-semibold sm:text-2xl">{t('events.past')}</h2>
        {past.length === 0 ? (
          <p className="mt-4 text-sm text-neutral-600">{t('events.noPast')}</p>
        ) : (
          <ul className="mt-4 grid gap-4 sm:grid-cols-2">
            {past.map((e) => (
              <li
                key={e.id}
                className="rounded-2xl border bg-white/60 p-5 opacity-90 shadow-sm ring-1 ring-neutral-100 dark:bg-[var(--card)]"
              >
                <Link href={withLocale(e.href)} className="block focus:outline-none">
                  <div className="flex items-start justify-between">
                    <div>
                      <div className="text-sm text-neutral-500">{formatDate(e.startAt)}</div>
                      <h3 className="mt-1 text-lg font-medium">{e.title}</h3>
                      {e.location && (
                        <div className="mt-1 text-sm text-neutral-600">{e.location}</div>
                      )}
                    </div>
                    <span
                      aria-hidden
                      className="mt-1 inline-flex h-8 w-8 items-center justify-center rounded-full bg-neutral-100 text-neutral-600"
                    >
                      ↗
                    </span>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}
