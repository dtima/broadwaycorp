import Link from 'next/link';

export default function Presentation({ locale }: { locale: string }) {
  const values = [
    {
      title: 'Integrity',
      body: 'We keep our promises, protect customer data and hold ourselves to the highest standards.',
    },
    {
      title: 'Empathy',
      body: 'We design for everyone. Accessibility and inclusivity are first‑class requirements.',
    },
    {
      title: 'Excellence',
      body: 'We pursue quality relentlessly — performance, reliability and polish matter.',
    },
    {
      title: 'Growth',
      body: 'We learn, iterate and share knowledge to lift our teams and communities.',
    },
  ];

  const impact = [
    { k: '100+', v: 'Projects delivered' },
    { k: '6', v: 'Countries of operation' },
    { k: '< 2h', v: 'First-response (managed services)' },
    { k: '99.95%', v: 'Uptime targets (IT)' },
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
          <p className="text-sm font-medium uppercase tracking-wide text-blue-700">About us</p>
          <h2 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
            We build the systems that power farms, labs, IT and hospitality
          </h2>
          <p className="mt-3 text-neutral-600">
            From field to lab to guest experience, we help organizations launch faster, operate
            safer and grow sustainably across Africa, the Middle East and the UK.
          </p>

          {/* Pill grid */}
          <ul className="mt-6 grid grid-cols-2 gap-3 text-sm">
            <li className="rounded-lg border bg-white p-3 shadow-sm">Sustainable agriculture</li>
            <li className="rounded-lg border bg-white p-3 shadow-sm">Laboratory solutions</li>
            <li className="rounded-lg border bg-white p-3 shadow-sm">IT & security services</li>
            <li className="rounded-lg border bg-white p-3 shadow-sm">Hospitality & experiences</li>
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

      {/* Mission */}
      <div className="mt-12 grid gap-8 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Our mission</h3>
          <p className="mt-2 text-neutral-600">
            To design and deliver sustainable, secure and guest‑ready solutions that improve lives
            and help businesses grow — from farms and labs to data centers and resorts.
          </p>
        </div>

        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h3 className="text-lg font-semibold">Our values</h3>
          <ul className="mt-3 grid gap-3 sm:grid-cols-2">
            {values.map((v) => (
              <li key={v.title} className="rounded-lg border p-4">
                <div className="font-medium">{v.title}</div>
                <p className="mt-1 text-sm text-neutral-600">{v.body}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* Operations */}
      <div className="mt-12 rounded-2xl border bg-white p-6 shadow-sm">
        <h3 className="text-lg font-semibold">Operations</h3>
        <p className="mt-2 text-neutral-600">
          We collaborate across regions to deliver with speed and quality.
        </p>
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
            Talk to sales
          </Link>
          <Link
            href={`/${locale}/blog`}
            className="rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            View case studies
          </Link>
          <Link
            href={`/${locale}/divisions`}
            className="rounded-md border px-5 py-2.5 text-sm font-medium hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Explore divisions
          </Link>
        </div>
      </div>
    </section>
  );
}
