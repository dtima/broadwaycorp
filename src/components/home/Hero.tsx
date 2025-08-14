'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { useTranslations } from 'next-intl';

interface Slide {
  id: string;
  title: string;
  subtitle: string;
  ctaPrimary: { label: string; href: string };
  ctaSecondary?: { label: string; href: string };
  imageUrl?: string;
}

export default function Hero({ slides }: { slides: Slide[] }) {
  const t = useTranslations('home.hero');
  const [index, setIndex] = useState(0);
  const active = slides[index];

  return (
    <section
      aria-label={t('title')}
      className="relative overflow-hidden bg-gradient-to-b from-white to-neutral-50 dark:from-[var(--background)] dark:to-neutral-900/40"
    >
      <div className="mx-auto max-w-screen-xl px-4 py-10 sm:px-6 md:py-16 lg:px-8">
        <p className="text-xs font-medium uppercase tracking-wide text-blue-700 sm:text-sm">
          {t('subtitle')}
        </p>
        <motion.h1
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mt-2 text-4xl font-extrabold leading-tight tracking-tight sm:text-5xl md:text-6xl"
        >
          {active.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mt-3 max-w-2xl text-base leading-relaxed text-neutral-600 dark:text-[var(--muted)] sm:text-lg"
        >
          {active.subtitle}
        </motion.p>
        <motion.div
          className="mt-6 flex flex-wrap gap-3"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          <a
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm transition hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            href={active.ctaPrimary.href}
          >
            {active.ctaPrimary.label}
          </a>
          {active.ctaSecondary && (
            <a
              className="inline-flex items-center justify-center rounded-md border px-5 py-2.5 text-sm font-medium shadow-sm transition hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              href={active.ctaSecondary.href}
            >
              {active.ctaSecondary.label}
            </a>
          )}
        </motion.div>

        <div className="mt-8 flex gap-2" role="tablist" aria-label="Hero carousel">
          {slides.map((s, i) => (
            <button
              key={s.id}
              role="tab"
              aria-selected={i === index}
              className={`h-1.5 w-6 rounded-full transition ${i === index ? 'bg-blue-600' : 'bg-neutral-300'}`}
              onClick={() => setIndex(i)}
            />
          ))}
        </div>
      </div>
      {active.imageUrl && (
        <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 select-none items-center justify-center overflow-hidden md:flex">
          <img
            src={active.imageUrl}
            alt=""
            className="translate-y-6 scale-110 transform opacity-70"
            aria-hidden
          />
        </div>
      )}
    </section>
  );
}
