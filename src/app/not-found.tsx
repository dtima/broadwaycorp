import Link from 'next/link';
import { Button } from '@/components/ui/Button';

export default function NotFound() {
  return (
    <div className="flex min-h-screen items-center justify-center px-4">
      <div className="text-center">
        <h1 className="mb-4 text-9xl font-bold text-primary-500">404</h1>
        <h2 className="mb-4 text-3xl font-bold text-neutral-900">
          Page Not Found
        </h2>
        <p className="mb-8 text-neutral-600">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild>
          <Link href="/en">Go Home</Link>
        </Button>
      </div>
    </div>
  );
}
