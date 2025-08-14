'use client';
import { useEffect } from 'react';

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Minimal client-side log without PII

    console.error('Public layout error', error?.message);
  }, [error]);
  return (
    <div className="mx-auto max-w-screen-md p-6 text-center">
      <h1 className="mb-2 text-2xl font-semibold">Something went wrong</h1>
      <p className="mb-4 text-sm text-neutral-600">
        An unexpected error occurred while rendering this page.
      </p>
      <button
        onClick={() => reset()}
        className="rounded border px-3 py-1 text-sm hover:bg-neutral-50"
      >
        Try again
      </button>
    </div>
  );
}
