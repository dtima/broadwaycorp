import Link from 'next/link';

export default function Footer({ locale }: { locale: string }) {
  const withLocale = (href: string) => `/${locale}${href === '/' ? '' : href}`;
  const year = new Date().getFullYear();
  return (
    <footer className="mt-16 border-t bg-white/70 py-10 dark:bg-[var(--background)]/70">
      <div className="mx-auto grid max-w-screen-xl gap-8 px-4 sm:px-6 md:grid-cols-4 lg:px-8">
        <div>
          <div className="text-lg font-semibold">Broadway Corporation</div>
          <p className="mt-2 text-sm text-neutral-600 dark:text-[var(--muted)]">
            Farmhouse, Enterprise, Intelligence, Resorts.
          </p>
        </div>
        <div>
          <div className="text-sm font-medium">Company</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href={withLocale('/')} className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link href={withLocale('/team')} className="hover:underline">
                Our Team
              </Link>
            </li>
            <li>
              <Link href={withLocale('/events')} className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link href={withLocale('/career')} className="hover:underline">
                Career
              </Link>
            </li>
            <li>
              <Link href={withLocale('/contact')} className="hover:underline">
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium">Legal</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <Link href={withLocale('/legal/privacy')} className="hover:underline">
                Privacy
              </Link>
            </li>
            <li>
              <Link href={withLocale('/legal/terms')} className="hover:underline">
                Terms
              </Link>
            </li>
          </ul>
        </div>
        <div>
          <div className="text-sm font-medium">Follow</div>
          <ul className="mt-3 space-y-2 text-sm">
            <li>
              <a href="#" className="hover:underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                LinkedIn
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline">
                Facebook
              </a>
            </li>
          </ul>
        </div>
      </div>
      <div className="mx-auto mt-8 max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs text-neutral-500">
          © {year} Broadway Corporation. All rights reserved.
        </p>
      </div>
    </footer>
  );
}

// removed legacy duplicate implementation
