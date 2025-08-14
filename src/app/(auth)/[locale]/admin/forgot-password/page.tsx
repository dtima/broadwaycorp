'use client';
import { useState } from 'react';
import { useParams } from 'next/navigation';
import { firebaseAuth } from '@/lib/firebase/client';
import { sendPasswordResetEmail } from 'firebase/auth';

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'sent' | 'error'>('idle');
  const [message, setMessage] = useState('');
  const params = useParams<{ locale: string }>();
  const locale = params?.locale || 'en';

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setStatus('idle');
    setMessage('');
    try {
      await sendPasswordResetEmail(firebaseAuth(), email);
      setStatus('sent');
      setMessage('Password reset email sent. Please check your inbox.');
    } catch (err: any) {
      setStatus('error');
      setMessage(err?.message || 'Unable to send reset email.');
    }
  }

  return (
    <main className="mx-auto min-h-[calc(100vh-56px)] w-full px-4 py-8 sm:px-6">
      <div className="mx-auto w-full max-w-md">
        <h1 className="text-2xl font-semibold">Reset your password</h1>
        <p className="mt-2 text-sm text-neutral-600">
          Enter the email associated with your account. We&apos;ll send you a password reset link.
        </p>
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium">
              Email
            </label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-md border px-3 py-2 outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="you@company.com"
            />
          </div>
          <button
            type="submit"
            className="w-full rounded-md bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
          >
            Send reset link
          </button>
        </form>
        {message && (
          <div
            className={`mt-4 rounded-md border px-3 py-2 text-sm ${status === 'sent' ? 'border-green-200 bg-green-50 text-green-700' : 'border-red-200 bg-red-50 text-red-700'}`}
          >
            {message}
          </div>
        )}
        <p className="mt-4 text-sm">
          <a className="text-blue-600 underline" href={`/${locale}/admin/sign-in`}>
            Back to sign in
          </a>
        </p>
      </div>
    </main>
  );
}
