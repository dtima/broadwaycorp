'use client';
import { useEffect } from 'react';

export default function ClickTracker() {
  useEffect(() => {
    function handler(e: MouseEvent) {
      const target = (e.target as HTMLElement)?.closest('[data-analytics]') as HTMLElement | null;
      if (!target) return;
      const name = target.getAttribute('data-analytics') || 'click';
      const meta = target.getAttribute('data-analytics-meta') || '';
      // Replace with your analytics provider call
      // e.g., window.gtag('event', name, {meta})
      if (process.env.NODE_ENV !== 'production') {
        // eslint-disable-next-line no-console
        console.log('[analytics] click', name, meta);
      }
    }
    document.addEventListener('click', handler);
    return () => document.removeEventListener('click', handler);
  }, []);
  return null;
}
