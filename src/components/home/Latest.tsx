import { LatestContent } from '@/lib/types/content';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Latest({ data, locale }: { data: LatestContent; locale: string }) {
  const t = useTranslations();
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <div>
        <h2 className="text-xl font-semibold sm:text-2xl">{t('home.latest.upcomingTitle')}</h2>
        <ul className="mt-4 space-y-3">
          {data.events.map((e) => (
            <li
              key={e.id}
              className="rounded-lg border bg-white/60 p-4 shadow-sm ring-1 ring-neutral-100 dark:bg-[var(--card)]"
            >
              <Link className="font-medium" href={`/${locale}${e.href}`}>
                {e.title}
              </Link>
              <div className="text-sm text-neutral-600">{new Date(e.startAt).toDateString()}</div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
