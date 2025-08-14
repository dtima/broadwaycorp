'use client';
import { useState } from 'react';
import { useParams, useRouter } from 'next/navigation';
import Link from 'next/link';
import { firebaseAuth } from '@/lib/firebase/client';
import {
  signInWithEmailAndPassword,
  setPersistence,
  browserLocalPersistence,
  browserSessionPersistence,
} from 'firebase/auth';
import { createSession } from '../../actions/sign-in';

export default function AdminSignInPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPw, setShowPw] = useState(false);

  const router = useRouter();
  const params = useParams<{ locale: string }>();
  const locale = params?.locale || 'en';

  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [remember, setRemember] = useState(false);

  // Pre-fill last email from localStorage (best-effort)
  useState(() => {
    try {
      const last = localStorage.getItem('admin:lastEmail');
      if (last) setEmail(last);
    } catch {}
  });

  function mapAuthError(code?: string) {
    switch (code) {
      case 'auth/network-request-failed':
        return 'Network error. Check your connection, VPN/proxy, or ad-blocker and try again.';
      case 'auth/invalid-credential':
      case 'auth/wrong-password':
      case 'auth/user-not-found':
        return 'Invalid email or password.';
      case 'auth/too-many-requests':
        return 'Too many attempts. Please wait and try again.';
      default:
        return 'Unable to sign in. Please try again.';
    }
  }

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setSubmitting(true);
    try {
      if (!navigator.onLine)
        throw Object.assign(new Error('offline'), { code: 'auth/network-request-failed' });
      const auth = firebaseAuth();
      await setPersistence(auth, remember ? browserLocalPersistence : browserSessionPersistence);
      const cred = await signInWithEmailAndPassword(auth, email, password);
      const idToken = await cred.user.getIdToken();
      await createSession(idToken, locale);
      try {
        if (remember) localStorage.setItem('admin:lastEmail', email);
        else localStorage.removeItem('admin:lastEmail');
      } catch {}
      router.push(`/${locale}/admin`);
    } catch (err: any) {
      setError(mapAuthError(err?.code) || err?.message);
    } finally {
      setSubmitting(false);
    }
  }

  return (
    <main className="mx-auto min-h-[calc(100vh-56px)] w-full px-4 py-8 sm:px-6">
      <div className="mx-auto grid h-full max-w-screen-xl items-stretch gap-8 lg:grid-cols-2">
        {/* Form panel */}
        <section className="mx-auto flex w-full max-w-md flex-col justify-center py-6 lg:py-12">
          <div>
            <p className="text-sm text-blue-700">Welcome back</p>
            <h1 className="mt-1 text-3xl font-extrabold tracking-tight">Admin sign in</h1>
            <p className="mt-2 text-sm leading-6 text-neutral-600">
              Employees and admins can sign in to access the Admin Dashboard.
            </p>
          </div>
          <form onSubmit={onSubmit} className="mt-8 space-y-5" noValidate>
            <div>
              <label htmlFor="email" className="block text-sm font-medium">
                Email
              </label>
              <div className="relative mt-1">
                <input
                  id="email"
                  type="email"
                  autoComplete="email"
                  required
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@company.com"
                  name="email"
                  inputMode="email"
                  autoCapitalize="none"
                  spellCheck={false}
                  className="w-full rounded-lg border px-3 py-2.5 pr-10 outline-none transition focus:ring-2 focus:ring-blue-500"
                />
                <span
                  className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-neutral-400"
                  aria-hidden
                >
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                    <path d="M4 4h16v16H4z" fill="none" />
                    <path d="M4 7l8 5 8-5" stroke="currentColor" strokeWidth="1.8" />
                  </svg>
                </span>
              </div>
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium">
                Password
              </label>
              <div className="relative mt-1">
                <input
                  id="password"
                  type={showPw ? 'text' : 'password'}
                  autoComplete="current-password"
                  required
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  name="password"
                  className="w-full rounded-lg border px-3 py-2.5 pr-10 outline-none transition focus:ring-2 focus:ring-blue-500"
                />
                <button
                  type="button"
                  onClick={() => setShowPw((v) => !v)}
                  className="absolute right-2 top-1/2 -translate-y-1/2 rounded p-1 text-neutral-500 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  aria-label={showPw ? 'Hide password' : 'Show password'}
                >
                  {showPw ? (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path d="M3 3l18 18" stroke="currentColor" strokeWidth="1.8" />
                      <path
                        d="M10.6 10.6a2 2 0 1 0 2.8 2.8"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <path
                        d="M2 12s4-7 10-7 10 7 10 7a18.8 18.8 0 0 1-3.09 3.66"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                    </svg>
                  ) : (
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 7c6 0 10 7 10 7s-4 7-10 7S2 14 2 14s4-7 10-7Z"
                        stroke="currentColor"
                        strokeWidth="1.8"
                      />
                      <circle cx="12" cy="14" r="3" stroke="currentColor" strokeWidth="1.8" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="inline-flex items-center gap-2 text-sm text-neutral-600">
                <input
                  type="checkbox"
                  className="h-4 w-4 rounded border"
                  checked={remember}
                  onChange={(e) => setRemember(e.target.checked)}
                />
                Remember me
              </label>
              <a
                href={`/${locale}/admin/forgot-password`}
                className="text-sm text-blue-600 hover:underline"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              disabled={submitting}
              className="mt-2 w-full rounded-lg bg-blue-600 px-4 py-2.5 text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 disabled:opacity-60"
            >
              {submitting ? 'Signing in…' : 'Sign in'}
            </button>
            {error && (
              <div
                className="rounded-md border border-red-200 bg-red-50 px-3 py-2 text-sm text-red-700"
                role="status"
                aria-live="polite"
                id="form-error"
              >
                {error}
              </div>
            )}
          </form>
          <p className="mt-4 text-xs text-neutral-500">
            By continuing, you agree to our{' '}
            <Link href="/legal/terms" className="underline">
              Terms
            </Link>{' '}
            and{' '}
            <Link href="/legal/privacy" className="underline">
              Privacy Policy
            </Link>
            .
          </p>
        </section>

        {/* Illustration / aesthetic panel */}
        <section className="relative hidden overflow-hidden rounded-xl border bg-white lg:block">
          {/* Aurora gradient blobs */}
          <div className="pointer-events-none absolute -top-24 -left-24 h-72 w-72 rounded-full bg-blue-400/30 blur-2xl animate-blob" />
          <div className="pointer-events-none absolute top-10 -right-24 h-80 w-80 rounded-full bg-violet-400/30 blur-2xl animate-blob animation-delay-2000" />
          <div className="pointer-events-none absolute bottom-0 left-1/3 h-72 w-72 rounded-full bg-rose-400/30 blur-2xl animate-blob animation-delay-4000" />

          {/* Glass card with message */}
          <div className="relative z-10 flex h-full items-center justify-center p-10">
            <div className="max-w-md rounded-2xl border border-white/30 bg-white/60 p-8 shadow-xl backdrop-blur">
              <div className="flex items-center gap-3">
                <img src="/images/logo.svg" alt="Broadway Corporation" className="h-6 w-6" />
                <span className="text-sm font-semibold text-blue-700">Broadway Corporation</span>
              </div>
              <h2 className="mt-4 text-3xl font-extrabold tracking-tight">Build. Serve. Grow.</h2>
              <p className="mt-3 text-sm leading-6 text-neutral-700">
                We build with integrity, serve with empathy, and grow together. Every change you
                ship improves experiences for our customers and teammates. Thank you for bringing
                your craft and curiosity.
              </p>
            </div>
          </div>
        </section>
      </div>
    </main>
  );
}
