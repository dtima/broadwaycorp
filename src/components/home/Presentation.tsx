import Link from 'next/link';
import { useTranslations } from 'next-intl';

export default function Presentation({ locale }: { locale: string }) {
  const t = useTranslations('home.presentation');
  const values = [
    {
      title: t('values.integrity.title'),
      body: t('values.integrity.body'),
    },
    {
      title: t('values.empathy.title'),
      body: t('values.empathy.body'),
    },
    {
      title: t('values.excellence.title'),
      body: t('values.excellence.body'),
    },
    {
      title: t('values.growth.title'),
      body: t('values.growth.body'),
    },
  ];

  const impact = [
    { k: '100+', v: t('impact.projects') },
    { k: '6', v: t('impact.countries') },
    { k: '< 2h', v: t('impact.response') },
    { k: '99.95%', v: t('impact.uptime') },
  ];

  const countries = [
    { name: 'Nigeria', code: 'ng' },
    { name: 'Ghana', code: 'gh' },
    { name: 'Cameroon', code: 'cm' },
    { name: 'Rwanda', code: 'rw' },
    { name: 'UAE', code: 'ae' },
    { name: 'UK', code: 'gb' },
    { name: 'USA (support)', code: 'us' },
  ];

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-12 sm:px-6 md:py-16 lg:px-8">
      {/* Headline & primary message */}
      <div className="grid items-start gap-8 md:grid-cols-2 lg:gap-12">
        <div>
          <p className="text-sm font-medium uppercase tracking-wide text-blue-700">{t('about')}</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            {t('headline')}
          </h2>
          <p className="mt-3 text-neutral-600">{t('subhead')}</p>

          {/* Pill grid */}
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <li className="rounded-lg border bg-white p-3 shadow-sm">{t('pill1')}</li>
            <li className="rounded-lg border bg-white p-3 shadow-sm">{t('pill2')}</li>
            <li className="rounded-lg border bg-white p-3 shadow-sm">{t('pill3')}</li>
            <li className="rounded-lg border bg-white p-3 shadow-sm">{t('pill4')}</li>
          </ul>
        </div>

        {/* Impact card */}
        <div className="relative">
          <div className="pointer-events-none absolute -top-8 -left-8 h-40 w-40 rounded-full bg-blue-400/20 blur-2xl" />
          <div className="pointer-events-none absolute -bottom-10 -right-10 h-48 w-48 rounded-full bg-emerald-400/20 blur-2xl" />
          <div className="relative rounded-2xl border bg-white/70 p-6 shadow-sm backdrop-blur">
            <div className="grid grid-cols-2 gap-4 text-sm">
              {impact.map((i) => (
                <div key={i.v} className="rounded-lg border p-4 text-center">
                  <div className="text-2xl font-bold">{i.k}</div>
                  <div className="mt-1 text-neutral-600">{i.v}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Vision Statement */}
      <div className="mt-12">
        <div className="rounded-2xl border bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-4xl mx-auto">
              {`To transform Africa's potential into global benchmarks of excellence—through modular innovation, multicultural branding, and community-driven systems that uplift lives, landscapes, and legacies.`}
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
            <div className="text-center p-4 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm">
              <div className="text-3xl mb-3">🌱</div>
              <h4 className="font-semibold text-gray-900 mb-2">Regenerative Agriculture</h4>
              <p className="text-sm text-gray-600">Hub of biotech exploration</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm">
              <div className="text-3xl mb-3">🏞️</div>
              <h4 className="font-semibold text-gray-900 mb-2">Eco-Conscious Tourism</h4>
              <p className="text-sm text-gray-600">Culinary storytelling destination</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm">
              <div className="text-3xl mb-3">🤝</div>
              <h4 className="font-semibold text-gray-900 mb-2">Inclusive Governance</h4>
              <p className="text-sm text-gray-600">Operational transparency model</p>
            </div>
            <div className="text-center p-4 rounded-xl bg-white/70 backdrop-blur-sm shadow-sm">
              <div className="text-3xl mb-3">🚀</div>
              <h4 className="font-semibold text-gray-900 mb-2">Youth Innovation</h4>
              <p className="text-sm text-gray-600">Global collaboration launchpad</p>
            </div>
          </div>

          <div className="text-center">
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              We build ecosystems where technology meets tradition, where hospitality meets
              sustainability, and where education meets empowerment. From our smart farms and
              immersive resorts to our laboratories and leadership boardrooms, every Broadway
              initiative is a blueprint for resilient futures.
            </p>
            <p className="text-lg font-semibold text-blue-600 mt-4">
              With every branded toolkit, every aerial story, and every community we serve, Broadway
              moves Africa forward—modularly, boldly, and beautifully.
            </p>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="mt-12">
        <div className="rounded-2xl border bg-gradient-to-br from-emerald-50 via-teal-50 to-cyan-50 p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Core Values</h3>
            <p className="text-lg text-gray-700 leading-relaxed max-w-3xl mx-auto">
              The principles that guide every decision, every innovation, and every relationship we
              build across Africa and beyond.
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {values.map((v, index) => (
              <div
                key={v.title}
                className="bg-white/80 backdrop-blur-sm rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 transform hover:-translate-y-2 text-center"
              >
                <div
                  className={`w-16 h-16 rounded-full mx-auto mb-4 flex items-center justify-center text-2xl ${
                    index === 0
                      ? 'bg-blue-100 text-blue-600'
                      : index === 1
                        ? 'bg-emerald-100 text-emerald-600'
                        : index === 2
                          ? 'bg-purple-100 text-purple-600'
                          : 'bg-orange-100 text-orange-600'
                  }`}
                >
                  {index === 0 ? '🔒' : index === 1 ? '❤️' : index === 2 ? '⭐' : '🌱'}
                </div>
                <h4 className="font-semibold text-gray-900 mb-3 text-lg">{v.title}</h4>
                <p className="text-gray-600 leading-relaxed">{v.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Operations */}
      <div className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">{t('operationsTitle')}</h3>
        <p className="mt-2 text-neutral-600">{t('operationsNote')}</p>
        <div className="mt-3 flex flex-wrap gap-2">
          {countries.map((c) => (
            <span
              key={c.name}
              className="inline-flex items-center gap-2 rounded-full border px-3 py-1 text-sm text-neutral-700 shadow-sm"
            >
              <img src={`/images/flags/${c.code}.svg`} alt="" className="h-3.5 w-5" aria-hidden />
              <span>{c.name}</span>
            </span>
          ))}
        </div>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={`/${locale}/contact`}
            className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {t('ctaTalkToSales')}
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {t('ctaCaseStudies')}
          </Link>
          <Link
            href={`/${locale}/divisions`}
            className="rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            {t('ctaExploreDivisions')}
          </Link>
        </div>
      </div>
    </section>
  );
}
