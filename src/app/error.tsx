'use client';
import { useEffect } from 'react';

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error('Global error', error?.message);
  }, [error]);
  return (
    <html>
      <body>
        <div className="mx-auto max-w-screen-md p-6 text-center">
          <h1 className="mb-2 text-2xl font-semibold">Unexpected error</h1>
          <p className="mb-4 text-sm text-neutral-600">
            Please try again. The incident has been logged.
          </p>
          <button
            onClick={() => reset()}
            className="rounded border px-3 py-1 text-sm hover:bg-neutral-50"
          >
            Reload
          </button>
        </div>
      </body>
    </html>
  );
}
