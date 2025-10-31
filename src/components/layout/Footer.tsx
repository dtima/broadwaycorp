'use client';

import Link from 'next/link';
import { useParams } from 'next/navigation';
import { useTranslations } from 'next-intl';

export function Footer() {
  const params = useParams();
  const locale = params.locale as string;
  const t = useTranslations('footer');
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-neutral-200 bg-neutral-50">
      <div className="container mx-auto px-4 py-12 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          {/* About */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              Broadway Corporation
            </h3>
            <p className="text-sm text-neutral-600">
              Systems That Power Africa&apos;s Future - Agriculture, Science, Technology and Hospitality
            </p>
          </div>

          {/* Divisions */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">
              {t('divisions')}
            </h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link
                  href={`/${locale}/farmhouse`}
                  className="text-neutral-600 hover:text-primary-500"
                >
                  Farmhouse
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/enterprise`}
                  className="text-neutral-600 hover:text-primary-500"
                >
                  Enterprise
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/intelligence`}
                  className="text-neutral-600 hover:text-primary-500"
                >
                  Intelligence
                </Link>
              </li>
              <li>
                <Link
                  href={`/${locale}/resorts`}
                  className="text-neutral-600 hover:text-primary-500"
                >
                  Resorts
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">Resources</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/blog`} className="text-neutral-600 hover:text-primary-500">
                  Blog
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/events`} className="text-neutral-600 hover:text-primary-500">
                  Events
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/jobs`} className="text-neutral-600 hover:text-primary-500">
                  Careers
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/contact`} className="text-neutral-600 hover:text-primary-500">
                  {t('contact')}
                </Link>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="mb-4 text-lg font-semibold text-neutral-900">{t('legal')}</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href={`/${locale}/privacy`} className="text-neutral-600 hover:text-primary-500">
                  {t('privacy')}
                </Link>
              </li>
              <li>
                <Link href={`/${locale}/terms`} className="text-neutral-600 hover:text-primary-500">
                  {t('terms')}
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 border-t border-neutral-200 pt-8 text-center text-sm text-neutral-600">
          <p>&copy; {currentYear} Broadway Corporation. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
