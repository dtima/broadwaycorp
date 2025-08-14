'use client';
import HeroSimple from '@/components/sections/HeroSimple';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function EnterprisePage() {
  const { locale } = useParams<{ locale: string }>();
  const withLocale = (p: string) => `/${locale}${p}`;
  return (
    <main>
      <HeroSimple
        eyebrow="Enterprise"
        title="Turnkey labs and a trusted catalog"
        subtitle="Compliant lab designs, build and a curated equipment catalog to get you research‑ready."
        actions={
          <Link
            href={withLocale('/contact')}
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white"
            data-analytics="cta_request_consultation"
            data-analytics-meta="enterprise"
          >
            Request a consultation
          </Link>
        }
      />

      {/* Overview */}
      <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">From design to handover</h2>
            <p className="mt-3 text-neutral-600">
              We deliver compliant laboratory spaces and provide a vetted catalog of equipment to
              match your research roadmap.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <li className="rounded-lg border bg-white p-3 shadow-sm">
                Compliant architecture & HVAC
              </li>
              <li className="rounded-lg border bg-white p-3 shadow-sm">Procurement & onboarding</li>
              <li className="rounded-lg border bg-white p-3 shadow-sm">SOPs & training</li>
              <li className="rounded-lg border bg-white p-3 shadow-sm">STEM outreach & programs</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border bg-white">
            <img
              src="/images/divisions/BE.jpeg"
              alt="Enterprise"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70" />
          </div>
        </div>
      </section>

      {/* Catalog / Designs / STEM */}
      <section className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Equipment catalog</h3>
            <p className="mt-2 text-sm text-neutral-600">
              A curated selection with clear specs, support and availability.
            </p>
            <Link
              href={withLocale('/enterprise/catalog')}
              className="mt-3 inline-block text-sm text-blue-600 underline"
              data-analytics="click_catalog_browse"
              data-analytics-meta="enterprise"
            >
              Browse catalog
            </Link>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Laboratory designs</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Case studies and portfolio of completed spaces.
            </p>
            <Link
              href={withLocale('/enterprise/designs')}
              className="mt-3 inline-block text-sm text-blue-600 underline"
              data-analytics="click_designs_view"
              data-analytics-meta="enterprise"
            >
              See designs
            </Link>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">STEM programs</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Programs by age and level: inspire the next generation.
            </p>
            <Link
              href={withLocale('/enterprise/stem')}
              className="mt-3 inline-block text-sm text-blue-600 underline"
              data-analytics="click_stem_explore"
              data-analytics-meta="enterprise"
            >
              Explore programs
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
