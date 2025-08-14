'use client';
import { useEffect, useMemo, useState } from 'react';
import { useTranslations } from 'next-intl';
import Hero from '@/components/home/Hero';
import FeatureTiles from '@/components/home/FeatureTiles';
import Latest from '@/components/home/Latest';
import Presentation from '@/components/home/Presentation';
import NewsletterCTA from '@/components/home/NewsletterCTA';
import WhatsAppChat from '@/components/common/WhatsAppChat';
import type { FeatureTile, LatestContent } from '@/lib/types/content';
import { fetchHomeFeatureTiles, fetchLatest } from '@/lib/data/home';
import { useParams } from 'next/navigation';

export default function Home() {
  const t = useTranslations('home.hero');
  const { locale } = useParams<{ locale: string }>();
  const slides = useMemo(
    () => [
      {
        id: 'broadway',
        title: t('slides.broadway.title'),
        subtitle: t('slides.broadway.subtitle'),
        imageUrl: '/images/hero-placeholder.jpg',
        ctaPrimary: { label: t('slides.broadway.cta'), href: `/${locale}` },
        ctaSecondary: { label: 'Contact', href: `/${locale}/contact` },
      },
      {
        id: 'farmhouse',
        title: t('slides.farmhouse.title'),
        subtitle: t('slides.farmhouse.subtitle'),
        imageUrl: '/images/hero-placeholder.jpg',
        ctaPrimary: { label: t('slides.farmhouse.cta'), href: `/${locale}/farmhouse` },
        ctaSecondary: { label: 'Contact', href: `/${locale}/contact` },
      },
      {
        id: 'enterprise',
        title: t('slides.enterprise.title'),
        subtitle: t('slides.enterprise.subtitle'),
        imageUrl: '/images/hero-placeholder.jpg',
        ctaPrimary: { label: t('slides.enterprise.cta'), href: `/${locale}/enterprise` },
        ctaSecondary: { label: 'Contact', href: `/${locale}/contact` },
      },
      {
        id: 'intelligence',
        title: t('slides.intelligence.title'),
        subtitle: t('slides.intelligence.subtitle'),
        imageUrl: '/images/hero-placeholder.jpg',
        ctaPrimary: { label: t('slides.intelligence.cta'), href: `/${locale}/intelligence` },
        ctaSecondary: { label: 'Contact', href: `/${locale}/contact` },
      },
      {
        id: 'resorts',
        title: t('slides.resorts.title'),
        subtitle: t('slides.resorts.subtitle'),
        imageUrl: '/images/hero-placeholder.jpg',
        ctaPrimary: { label: t('slides.resorts.cta'), href: `/${locale}/resorts` },
        ctaSecondary: { label: 'Contact', href: `/${locale}/contact` },
      },
    ],
    [t, locale]
  );
  const [tiles, setTiles] = useState<FeatureTile[] | null>(null);
  const [latest, setLatest] = useState<LatestContent>({ events: [], blogPosts: [] });

  useEffect(() => {
    fetchHomeFeatureTiles().then(setTiles);
    fetchLatest()
      .then(setLatest)
      .catch(() => {
        // If emulator isn't running, show a minimal placeholder
        setLatest({
          events: [
            { id: 'e0', title: 'Sample Event', startAt: new Date().toISOString(), href: '/events' },
          ],
          blogPosts: [
            {
              id: 'b0',
              title: 'Sample Post',
              publishedAt: new Date().toISOString(),
              href: '/blog',
            },
          ],
        });
      });
  }, []);

  return (
    <main className="min-h-screen">
      <Hero slides={slides} />
      <Presentation locale={locale} />
      <FeatureTiles tiles={tiles ?? []} locale={locale} />
      <Latest data={latest} locale={locale} />
      <NewsletterCTA />
      <WhatsAppChat phone="+237 677 181 487" />
    </main>
  );
}
