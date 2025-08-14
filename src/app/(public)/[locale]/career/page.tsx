export default function CareerPage() {
  return (
    <main className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <header className="mb-8">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-700 sm:text-sm">
          Careers
        </p>
        <h1 className="mt-2 text-3xl font-extrabold tracking-tight sm:text-4xl">
          Join Broadway Corporation
        </h1>
        <p className="mt-3 max-w-2xl text-neutral-600">
          We’re building sustainable systems across agriculture, labs, IT and hospitality. Come grow
          with us.
        </p>
      </header>

      <section className="grid gap-6 md:grid-cols-2">
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Why work with us</h2>
          <ul className="mt-3 list-inside list-disc text-sm text-neutral-700">
            <li>Impactful, multi‑disciplinary projects</li>
            <li>Growth and mentorship culture</li>
            <li>Remote‑friendly, flexible schedules</li>
            <li>Inclusive and accessible workplace</li>
          </ul>
        </div>
        <div className="rounded-2xl border bg-white p-6 shadow-sm">
          <h2 className="text-lg font-semibold">Open roles</h2>
          <p className="mt-2 text-sm text-neutral-600">
            We’re hiring across engineering, design and operations.
          </p>
          <a
            href="mailto:career@broadway-corp.com"
            className="mt-4 inline-block rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Email your resume
          </a>
        </div>
      </section>

      {/* Featured role: Marketing Interns */}
      <section className="mt-8 rounded-2xl border bg-white p-6 shadow-sm">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-start">
          <div>
            <p className="text-xs font-medium uppercase tracking-wide text-emerald-700">
              Internship Opportunity
            </p>
            <h2 className="mt-1 text-2xl font-extrabold leading-tight sm:text-3xl">
              Marketing Interns Wanted!
            </h2>
            <div className="mt-3 flex flex-wrap gap-2 text-xs">
              <span className="inline-flex items-center rounded-full border px-2 py-1">
                📍 Simbock, Yaoundé, Cameroon
              </span>
              <span className="inline-flex items-center rounded-full border px-2 py-1">
                🏢 Broadway Corporation (Broadway Enterprise)
              </span>
              <span className="inline-flex items-center rounded-full border px-2 py-1">
                📅 2 Months · Volunteer with stipend
              </span>
            </div>
            <p className="mt-4 max-w-3xl text-sm text-neutral-700">
              Are you a motivated young Cameroonian passionate about marketing and eager to make a
              real impact in the field of education and science? We strongly encourage women (21+)
              to apply; all qualified candidates aged 21+ are welcome.
            </p>
          </div>
          <div className="shrink-0">
            <a
              href="mailto:career@broadway-corp.com"
              className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              Apply via Email
            </a>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="text-sm font-semibold">About Broadway Corporation</h3>
            <p className="mt-2 text-sm text-neutral-700">
              We operate at the intersection of science and education, delivering high‑quality
              laboratory and scientific equipment to secondary and high schools across Cameroon. Our
              mission: transform science education and empower future generations.
            </p>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="text-sm font-semibold">Internship Responsibilities</h3>
            <ul className="mt-2 list-inside list-disc text-sm text-neutral-700">
              <li>Identify and map potential educational institutions</li>
              <li>Assist in creating marketing strategies for the education sector</li>
              <li>Support outreach campaigns to onboard new clients</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4">
            <h3 className="text-sm font-semibold">Who we’re looking for</h3>
            <ul className="mt-2 list-inside list-disc text-sm text-neutral-700">
              <li>21+ with strong marketing and business skills</li>
              <li>Excellent communication and organization</li>
              <li>Fluent in English or French (bilingual is a plus)</li>
              <li>Clear reading and writing skills</li>
              <li>Physically strong and smart — field‑ready</li>
            </ul>
          </div>
        </div>

        <div className="mt-6 grid gap-6 md:grid-cols-3">
          <div className="rounded-lg border p-4">
            <h3 className="text-sm font-semibold">What you’ll get</h3>
            <ul className="mt-2 list-inside list-disc text-sm text-neutral-700">
              <li>Monthly stipend: 50,000 XAF + 10,000 XAF transport allowance</li>
              <li>Leadership development & mentorship</li>
              <li>Networking opportunities with professionals</li>
              <li>Bonus perks for top performers</li>
            </ul>
          </div>
          <div className="rounded-lg border p-4 md:col-span-2">
            <h3 className="text-sm font-semibold">How to apply</h3>
            <p className="mt-2 text-sm text-neutral-700">
              Send your CV or a short cover letter to{' '}
              <a className="underline" href="mailto:career@broadway-corp.com">
                career@broadway-corp.com
              </a>
              . You can also reach us on WhatsApp:{' '}
              <a
                className="underline"
                href="https://wa.me/237677181487"
                target="_blank"
                rel="noopener noreferrer"
              >
                +237 677 181 487
              </a>
              .
            </p>
            <div className="mt-4 flex flex-wrap gap-3">
              <a
                href="mailto:career@broadway-corp.com"
                className="inline-flex items-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Apply via Email
              </a>
              <a
                href="https://wa.me/237677181487"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center rounded-md border px-4 py-2 text-sm font-medium hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
