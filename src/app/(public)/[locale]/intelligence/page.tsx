'use client';
import HeroSimple from '@/components/sections/HeroSimple';
import { useParams } from 'next/navigation';
import Link from 'next/link';

export default function IntelligencePage() {
  const { locale } = useParams<{ locale: string }>();
  const withLocale = (p: string) => `/${locale}${p}`;
  return (
    <main>
      <HeroSimple
        eyebrow="Intelligence"
        title="Managed IT, data center and security"
        subtitle="Stay online and secure with managed services, compliant infrastructure and practical cyber programs."
        actions={
          <Link
            href={withLocale('/contact')}
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white"
            data-analytics="cta_get_support"
            data-analytics-meta="intelligence"
          >
            Get support
          </Link>
        }
      />

      {/* Overview */}
      <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <h2 className="text-2xl font-semibold">Operational continuity with guardrails</h2>
            <p className="mt-3 text-neutral-600">
              Our teams deliver SLAs, monitoring and playbooks to keep your business running and
              protected.
            </p>
            <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
              <li className="rounded-lg border bg-white p-3 shadow-sm">
                24/7 monitoring & response
              </li>
              <li className="rounded-lg border bg-white p-3 shadow-sm">
                Backups & disaster recovery
              </li>
              <li className="rounded-lg border bg-white p-3 shadow-sm">
                Zero‑trust & access control
              </li>
              <li className="rounded-lg border bg-white p-3 shadow-sm">Training & awareness</li>
            </ul>
          </div>
          <div className="relative overflow-hidden rounded-2xl border bg-white">
            <img
              src="/images/divisions/BI.jpeg"
              alt="Intelligence"
              className="h-full w-full object-cover"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-white/70" />
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="mx-auto max-w-screen-xl px-4 pb-16 sm:px-6 lg:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Managed IT</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Catalog of services with SLAs and clear pricing tiers.
            </p>
            <Link
              href={withLocale('/intelligence/it')}
              className="mt-3 inline-block text-sm text-blue-600 underline"
              data-analytics="click_it_services"
              data-analytics-meta="intelligence"
            >
              View services
            </Link>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Data center</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Capabilities, infrastructure and compliance posture.
            </p>
            <Link
              href={withLocale('/intelligence/data-center')}
              className="mt-3 inline-block text-sm text-blue-600 underline"
              data-analytics="click_data_center"
              data-analytics-meta="intelligence"
            >
              Explore
            </Link>
          </div>
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h3 className="text-lg font-semibold">Security consulting</h3>
            <p className="mt-2 text-sm text-neutral-600">
              Audits, penetration testing and maturity programs.
            </p>
            <Link
              href={withLocale('/intelligence/security')}
              className="mt-3 inline-block text-sm text-blue-600 underline"
              data-analytics="click_security_consulting"
              data-analytics-meta="intelligence"
            >
              Learn more
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
