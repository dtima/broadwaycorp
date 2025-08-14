'use client';
import { useMemo } from 'react';

export default function WhatsAppChat({ phone = '+237677181487' }: { phone?: string }) {
  const href = useMemo(() => {
    const normalized = phone.replace(/[^\d]/g, '');
    const msg = encodeURIComponent('Hello Broadway Corporation Support 👋');
    return `https://wa.me/${normalized}?text=${msg}`;
  }, [phone]);

  return (
    <div className="pointer-events-none fixed bottom-4 right-4 z-50 sm:bottom-6 sm:right-6">
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with us on WhatsApp"
        className="pointer-events-auto group inline-flex items-center gap-2 rounded-full bg-[#25D366] px-4 py-2 text-sm font-medium text-white shadow-lg ring-1 ring-black/5 transition hover:brightness-110 focus:outline-none focus:ring-2 focus:ring-white/80"
        data-analytics="click_whatsapp_chat"
      >
        <svg
          aria-hidden
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 32 32"
          width="18"
          height="18"
          className="shrink-0"
        >
          <path
            fill="currentColor"
            d="M19.11 17.24a6.8 6.8 0 0 1-3.37-3.37l-.15-.34a.9.9 0 0 1 .2-.96l.77-.77a1.02 1.02 0 0 0 0-1.44l-1.18-1.18a1.02 1.02 0 0 0-1.44 0l-.92.92c-.92.92-1.13 2.33-.51 3.5c1.74 3.26 4.19 5.7 7.45 7.45c1.17.62 2.58.41 3.5-.51l.92-.92a1.02 1.02 0 0 0 0-1.44l-1.18-1.18a1.02 1.02 0 0 0-1.44 0l-.77.77a.9.9 0 0 1-.96.2zM16 3C9.38 3 4 8.38 4 15c0 2.18.59 4.22 1.62 5.98L4 29l8.14-1.59A11.9 11.9 0 0 0 16 27c6.62 0 12-5.38 12-12S22.62 3 16 3z"
          />
        </svg>
        <span className="hidden sm:inline">Chat on WhatsApp</span>
      </a>
    </div>
  );
}
