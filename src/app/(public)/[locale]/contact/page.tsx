'use client';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations();
  const [status, setStatus] = useState<'idle' | 'sent'>('idle');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('sent');
  }

  return (
    <main>
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50 dark:from-[var(--background)] dark:to-neutral-900/40">
        <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
          <p className="text-xs font-medium uppercase tracking-wide text-blue-700 sm:text-sm">
            {t('contact.eyebrow')}
          </p>
          <h1 className="mt-2 text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
            {t('contact.title')}
          </h1>
          <p className="mt-3 max-w-2xl text-neutral-600 dark:text-[var(--muted)]">
            {t('contact.intro')}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="grid gap-8 md:grid-cols-2">
          <div className="rounded-2xl border bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold">{t('contact.formTitle')}</h2>
            {status === 'sent' ? (
              <div className="mt-4 rounded-md bg-green-50 p-3 text-sm text-green-700">
                {t('contact.thanks')}
              </div>
            ) : (
              <form onSubmit={onSubmit} className="mt-4 space-y-3">
                <div>
                  <label htmlFor="c-name" className="block text-sm font-medium">
                    {t('contact.name')}
                  </label>
                  <input
                    id="c-name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                    className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="c-email" className="block text-sm font-medium">
                    {t('contact.email')}
                  </label>
                  <input
                    id="c-email"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <div>
                  <label htmlFor="c-msg" className="block text-sm font-medium">
                    {t('contact.message')}
                  </label>
                  <textarea
                    id="c-msg"
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    required
                    rows={5}
                    className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
                  />
                </div>
                <button
                  type="submit"
                  className="rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                >
                  {t('contact.send')}
                </button>
              </form>
            )}
          </div>
          <div className="grid gap-6">
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{t('contact.direct')}</h2>
              <ul className="mt-3 text-sm text-neutral-700">
                <li>
                  <span className="font-medium">Email:</span>{' '}
                  <a className="underline" href="mailto:info@broadway-corp.com">
                    info@broadway-corp.com
                  </a>
                </li>
                <li className="mt-1">
                  <span className="font-medium">WhatsApp:</span>{' '}
                  <a
                    className="underline"
                    target="_blank"
                    rel="noopener noreferrer"
                    href="https://wa.me/237677181487"
                  >
                    +237 677 181 487
                  </a>
                </li>
              </ul>
            </div>
            <div className="rounded-2xl border bg-white p-6 shadow-sm">
              <h2 className="text-lg font-semibold">{t('contact.address')}</h2>
              <p className="mt-2 text-sm text-neutral-700">Simbock, Yaoundé, Cameroon</p>
              <div className="mt-3 rounded-lg bg-neutral-100 p-4 text-xs text-neutral-600">
                Map placeholder
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
