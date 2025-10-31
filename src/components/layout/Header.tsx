'use client';

import Link from 'next/link';
import { useParams, usePathname } from 'next/navigation';
import { useTranslations } from 'next-intl';
import { useState } from 'react';

export function Header() {
  const params = useParams();
  const pathname = usePathname();
  const locale = params.locale as string;
  const t = useTranslations('nav');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Extract path without locale prefix for language switching
  const pathWithoutLocale = pathname.replace(/^\/(en|fr)/, '') || '';

  const navigation = [
    { name: t('home'), href: `/${locale}` },
    { name: t('farmhouse'), href: `/${locale}/farmhouse` },
    { name: t('enterprise'), href: `/${locale}/enterprise` },
    { name: t('intelligence'), href: `/${locale}/intelligence` },
    { name: t('resorts'), href: `/${locale}/resorts` },
    { name: t('blog'), href: `/${locale}/blog` },
    { name: t('events'), href: `/${locale}/events` },
    { name: t('jobs'), href: `/${locale}/jobs` },
    { name: t('contact'), href: `/${locale}/contact` },
  ];

  return (
    <header className="sticky top-0 z-50 w-full border-b border-neutral-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
      <nav className="container mx-auto flex items-center justify-between px-4 py-4 lg:px-8">
        {/* Logo */}
        <Link href={`/${locale}`} className="text-xl font-bold text-primary-500">
          Broadway Corp
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-neutral-700 transition-colors hover:text-primary-500"
            >
              {item.name}
            </Link>
          ))}

          {/* Language Switcher */}
          <div className="flex gap-2">
            <Link
              href={`/en${pathWithoutLocale}`}
              className={`rounded px-2 py-1 text-sm font-medium ${
                locale === 'en'
                  ? 'bg-primary-500 text-white'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              EN
            </Link>
            <Link
              href={`/fr${pathWithoutLocale}`}
              className={`rounded px-2 py-1 text-sm font-medium ${
                locale === 'fr'
                  ? 'bg-primary-500 text-white'
                  : 'text-neutral-700 hover:bg-neutral-100'
              }`}
            >
              FR
            </Link>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            {mobileMenuOpen ? (
              <path d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-t border-neutral-200 bg-white lg:hidden">
          <div className="container mx-auto space-y-1 px-4 py-4">
            {navigation.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="block rounded px-3 py-2 text-base font-medium text-neutral-700 hover:bg-neutral-100"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.name}
              </Link>
            ))}
            <div className="flex gap-2 px-3 py-2">
              <Link
                href={`/en${pathWithoutLocale}`}
                className={`rounded px-3 py-1 text-sm font-medium ${
                  locale === 'en'
                    ? 'bg-primary-500 text-white'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                EN
              </Link>
              <Link
                href={`/fr${pathWithoutLocale}`}
                className={`rounded px-3 py-1 text-sm font-medium ${
                  locale === 'fr'
                    ? 'bg-primary-500 text-white'
                    : 'text-neutral-700 hover:bg-neutral-100'
                }`}
              >
                FR
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
