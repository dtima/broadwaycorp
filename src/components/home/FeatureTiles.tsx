import { FeatureTile } from '@/lib/types/content';
import divisions from '@/content/divisions.json';
import Skeleton from '@/components/common/Skeleton';
import Link from 'next/link';
import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function FeatureTiles({ tiles, locale }: { tiles: FeatureTile[]; locale: string }) {
  const t = useTranslations('divisions');
  const items = tiles && tiles.length ? tiles : (divisions as FeatureTile[]);
  const safeT = (key: Parameters<typeof t>[0], fallback: string) => {
    try {
      const val = t(key as any);
      return val || fallback;
    } catch {
      return fallback;
    }
  };
  const tLocaleTitle = (id: string, fallback: string) =>
    safeT(`cards.${id}.title` as any, fallback);
  const tLocaleDesc = (id: string, fallback: string) => safeT(`cards.${id}.desc` as any, fallback);
  return (
    <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <div className="flex items-end justify-between">
        <h2 className="text-xl font-semibold sm:text-2xl">{t('sectionTitle')}</h2>
        <a
          href={`/${locale}/divisions`}
          className="rounded px-2 py-1 text-sm text-blue-600 hover:bg-blue-50 hover:underline focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          {t('viewAll')}
        </a>
      </div>
      <ul className="mt-6 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.length === 0
          ? Array.from({ length: 4 }).map((_, i) => (
              <li key={i} className="rounded-2xl border p-5">
                <Skeleton className="h-32 w-full rounded-xl" />
                <Skeleton className="mt-4 h-5 w-1/2" />
                <Skeleton className="mt-2 h-4 w-3/4" />
              </li>
            ))
          : items.map((t) => (
              <li
                key={t.id}
                role="listitem"
                className="group rounded-2xl border bg-white/70 p-5 shadow-sm ring-1 ring-neutral-100 transition hover:shadow-md focus-within:ring-2 focus-within:ring-blue-500 dark:bg-[var(--card)]"
              >
                <Link
                  href={`/${locale}${t.href}`}
                  className="block focus:outline-none"
                  aria-label={`Explore ${t.title} division`}
                  data-analytics="click_division_tile"
                  data-division={t.id}
                >
                  <div
                    className={`relative h-32 w-full overflow-hidden rounded-xl bg-gradient-to-r ${(t as any).accentColor || 'from-blue-600 to-cyan-500'} opacity-90 transition group-hover:opacity-100`}
                  >
                    {(t as any).imageUrl ? (
                      <Image
                        src={(t as any).imageUrl}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 25vw"
                        className="object-cover opacity-90"
                        priority={false}
                      />
                    ) : null}
                  </div>
                  <div className="mt-4">
                    <h3 className="text-base font-semibold sm:text-lg">
                      {tLocaleTitle((t as any).id as string, t.title)}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-neutral-600 dark:text-[var(--muted)]">
                      {tLocaleDesc((t as any).id as string, t.description || '')}
                    </p>
                  </div>
                </Link>
              </li>
            ))}
      </ul>
    </section>
  );
}
