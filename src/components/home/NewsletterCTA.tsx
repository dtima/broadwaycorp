'use client';
import { useState } from 'react';

export default function NewsletterCTA() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'submitted'>('idle');

  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('submitted');
  }

  return (
    <section className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
      <div className="rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 p-6 text-white sm:p-8">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
          <div>
            <h2 className="text-2xl font-semibold">Stay in the loop</h2>
            <p className="mt-1 text-white/80">Get updates on events, articles, and product news.</p>
          </div>
          {status === 'submitted' ? (
            <div className="rounded-md bg-white/10 px-4 py-2">Thanks for subscribing!</div>
          ) : (
            <form onSubmit={onSubmit} className="flex w-full max-w-md items-center gap-2">
              <label htmlFor="nl-email" className="sr-only">
                Email
              </label>
              <input
                id="nl-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="you@example.com"
                className="h-10 w-full flex-1 rounded-md border border-white/20 bg-white/10 px-3 text-white placeholder-white/60 outline-none focus:ring-2 focus:ring-white"
              />
              <button
                type="submit"
                className="h-10 rounded-md bg-white px-4 text-sm font-medium text-blue-700 hover:bg-neutral-100"
              >
                Subscribe
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
