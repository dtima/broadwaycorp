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
    console.error('Admin layout error', error?.message);
  }, [error]);
  return (
    <div className="mx-auto max-w-screen-md p-6 text-center">
      <h1 className="mb-2 text-2xl font-semibold">Admin error</h1>
      <p className="mb-4 text-sm text-neutral-600">
        An error occurred. If the problem persists, contact support.
      </p>
      <button
        onClick={() => reset()}
        className="rounded border px-3 py-1 text-sm hover:bg-neutral-50"
      >
        Retry
      </button>
    </div>
  );
}
