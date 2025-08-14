'use client';
import HeroSimple from '@/components/sections/HeroSimple';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function FarmhousePage() {
  const { locale } = useParams<{ locale: string }>();
  const withLocale = (p: string) => `/${locale}${p}`;
  return (
    <main>
      <HeroSimple
        eyebrow="Farmhouse"
        title="Grow today, feed tomorrow"
        subtitle="Programs and facilities across Black Soldier Fly (BSF), fish farming and agricultural education."
        actions={
          <Link
            href={withLocale('/contact')}
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white"
          >
            Talk to our team
          </Link>
        }
      />

      {/* Overview */}
      <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Sustainable agriculture at scale</h2>
            <p className="mt-3 text-neutral-600">
              We help communities and institutions implement high‑yield programs using BSF, fish and
              educational outreach. From farm layout to workforce enablement and visitor
              experiences, our approach is practical, safe and repeatable.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <li className="rounded-lg border bg-white p-3 shadow-sm">
                BSF protein & organic fertilizer
              </li>
              <li className="rounded-lg border bg-white p-3 shadow-sm">
                Tilapia & catfish grow‑out
              </li>
              <li className="rounded-lg border bg-white p-3 shadow-sm">Education & guided tours</li>
              <li className="rounded-lg border bg-white p-3 shadow-sm">
                On‑site safety & compliance
              </li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border bg-white">
            <img
              src="/images/divisions/BF.jpeg"
              alt="Farmhouse"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70" />
          </div>
        </div>
      </section>

      {/* BSF / Fish / Education */}
      <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">BSF program</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Design, larvae production, drying and packaging with traceable SOPs.
            </p>
            <a
              href={withLocale('/farmhouse/bsf')}
              className="mt-3 inline-block text-sm text-blue-600 underline"
              data-analytics="click_bsf_learn_more"
              data-analytics-meta="farmhouse"
            >
              Learn more
            </a>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Fish farming</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Hatchery and grow‑out for tilapia and catfish with water‑quality controls.
            </p>
            <a
              href={withLocale('/farmhouse/fish')}
              className="mt-3 inline-block text-sm text-blue-600 underline"
              data-analytics="click_fish_learn_more"
              data-analytics-meta="farmhouse"
            >
              Learn more
            </a>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Education & tours</h3>
            <p className="mt-2 text-sm text-neutral-600">
              School programs and guided tours that inspire the next generation.
            </p>
            <a
              href={withLocale('/farmhouse/scorpion')}
              className="mt-3 inline-block text-sm text-blue-600 underline"
              data-analytics="click_scorpion_learn_more"
              data-analytics-meta="farmhouse"
            >
              Learn more
            </a>
          </div>
        </div>
      </section>

      {/* Visit CTA */}
      <section className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="rounded-2xl border bg-blue-600/95 p-6 text-white shadow-sm">
          <div className="grid items-center gap-4 md:grid-cols-2">
            <div>
              <h3 className="text-xl font-semibold">Plan a visit</h3>
              <p className="mt-1 text-sm text-blue-100">
                See our facilities in action and meet the team behind the programs.
              </p>
            </div>
            <div className="md:text-right">
              <Link
                href={withLocale('/contact')}
                className="inline-block rounded-md bg-white px-5 py-2.5 text-sm font-medium text-blue-700"
                data-analytics="cta_book_tour"
                data-analytics-meta="farmhouse"
              >
                Book a tour
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
