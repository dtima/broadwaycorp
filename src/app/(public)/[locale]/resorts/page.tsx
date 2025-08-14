'use client';
import HeroSimple from '@/components/sections/HeroSimple';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function ResortsPage() {
  const { locale } = useParams<{ locale: string }>();
  const withLocale = (p: string) => `/${locale}${p}`;
  return (
    <main>
      <HeroSimple
        eyebrow="Resorts"
        title="Revive in nature’s embrace"
        subtitle="Agro‑tourism, sanctuary, roadhouse menu, hospitality and family‑friendly holidays."
        actions={
          <Link
            href={withLocale('/contact')}
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white"
            data-analytics="cta_plan_visit"
            data-analytics-meta="resorts"
          >
            Plan a visit
          </Link>
        }
      />

      {/* Overview */}
      <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Experiences that bring people together</h2>
            <p className="mt-3 text-neutral-600">
              From learning to leisure, our programs foster connection with nature while offering
              comfort and safety.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <li className="rounded-lg border bg-white p-3 shadow-sm">
                Educational sanctuary visits
              </li>
              <li className="rounded-lg border bg-white p-3 shadow-sm">
                Roadhouse menu & specials
              </li>
              <li className="rounded-lg border bg-white p-3 shadow-sm">Hospitality & amenities</li>
              <li className="rounded-lg border bg-white p-3 shadow-sm">Outdoor games & holidays</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border bg-white">
            <img
              src="/images/divisions/BR.jpeg"
              alt="Resorts"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70" />
          </div>
        </div>
      </section>

      {/* Experiences */}
      <section className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-4">
          {[
            { t: 'Agro‑tourism', h: withLocale('/resorts/agro-tourism') },
            { t: 'Sanctuary', h: withLocale('/resorts/sanctuary') },
            { t: 'Roadhouse menu', h: withLocale('/resorts/roadhouse') },
            { t: 'Hospitality', h: withLocale('/resorts/hospitality') },
          ].map((x) => (
            <div key={x.t} className="rounded-2xl border bg-white p-6 shadow-sm">
              <h3 className="text-lg font-semibold">{x.t}</h3>
              <Link
                href={x.h}
                className="mt-2 inline-block text-sm text-blue-600 underline"
                data-analytics={`click_${x.t.replace(/\W+/g, '_').toLowerCase()}`}
                data-analytics-meta="resorts"
              >
                Learn more
              </Link>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
