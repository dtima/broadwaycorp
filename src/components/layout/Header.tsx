'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useCallback, useEffect, useRef, useState } from 'react';
import dynamic from 'next/dynamic';

const CommandPalette = dynamic(() => import('../command/CommandPalette'), { ssr: false });

const nav = [
  { href: '/', label: 'Home' },
  { href: '/team', label: 'Our Team' },
  { href: '/events', label: 'Events' },
  { href: '/career', label: 'Career' },
  { href: '/contact', label: 'Contact' },
];

export default function Header({ locale }: { locale: string }) {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const firstMobileLinkRef = useRef<HTMLAnchorElement | null>(null);
  const menuButtonRef = useRef<HTMLButtonElement | null>(null);
  const withLocale = useCallback(
    (href: string) => `/${locale}${href === '/' ? '' : href}`,
    [locale]
  );
  const isActive = useCallback(
    (href: string) => pathname?.startsWith(withLocale(href)),
    [pathname, withLocale]
  );
  const [cmdOpen, setCmdOpen] = useState(false);
  const navWrapRef = useRef<HTMLDivElement | null>(null);
  const underlineRef = useRef<HTMLSpanElement | null>(null);
  const linkRefs = useRef<Record<string, HTMLAnchorElement | null>>({});

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Persist mobile menu state with history
  const MENU_STATE = '__menuOpen';
  const closeMenu = useCallback(() => {
    if (!open) return;
    // If current history state is ours, go back; else just close
    if ((history.state && history.state[MENU_STATE]) || location.hash === '#menu') {
      history.back();
    } else {
      setOpen(false);
    }
  }, [open]);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMenu();
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [closeMenu]);

  useEffect(() => {
    if (open) {
      firstMobileLinkRef.current?.focus();
    } else {
      menuButtonRef.current?.focus();
    }
  }, [open]);

  // Animated underline helpers
  function moveUnderlineTo(el: HTMLElement | null) {
    const underline = underlineRef.current;
    const wrap = navWrapRef.current;
    if (!underline || !wrap || !el) return;
    const wrapRect = wrap.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    const left = rect.left - wrapRect.left;
    underline.style.transform = `translateX(${left}px)`;
    underline.style.width = `${rect.width}px`;
  }

  const setToActiveLink = useCallback(() => {
    const active = nav.find((n) => isActive(n.href));
    const el = active ? linkRefs.current[active.href] : null;
    moveUnderlineTo(el as HTMLElement | null);
  }, [isActive]);

  useEffect(() => {
    setToActiveLink();
    const onResize = () => setToActiveLink();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, [pathname, setToActiveLink]);

  function openMenu() {
    if (open) return;
    history.pushState({ [MENU_STATE]: true }, '');
    setOpen(true);
  }
  useEffect(() => {
    const onPop = () => {
      // When user presses back, close menu if open
      if (open) setOpen(false);
    };
    window.addEventListener('popstate', onPop);
    return () => window.removeEventListener('popstate', onPop);
  }, [open, closeMenu]);

  return (
    <header
      className={`sticky top-0 z-40 w-full bg-white/80 backdrop-blur dark:bg-[var(--background)]/80 ${scrolled ? 'border-b shadow-sm' : 'border-b'}`}
    >
      <div className="mx-auto flex max-w-screen-xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <Link
          href={withLocale('/')}
          className="font-semibold hover:opacity-90 focus:outline-none focus:ring-2 focus:ring-blue-500"
        >
          Broadway Corporation
        </Link>
        <nav
          className="relative hidden md:block"
          aria-label="Primary"
          ref={navWrapRef}
          onMouseLeave={setToActiveLink}
        >
          {/* Animated underline */}
          <span
            aria-hidden
            className="pointer-events-none absolute -bottom-1 left-0 h-0.5 w-full bg-transparent"
          >
            <span
              ref={underlineRef}
              className="absolute h-0.5 translate-x-0 rounded bg-blue-600 transition-[width,transform] duration-300 ease-out"
              style={{ width: '0' }}
            />
          </span>
          <ul className="flex items-center gap-5">
            {nav.map((item) => (
              <li key={item.href}>
                <Link
                  href={withLocale(item.href)}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  ref={(el) => {
                    linkRefs.current[item.href] = el;
                  }}
                  onMouseEnter={(e) => moveUnderlineTo(e.currentTarget)}
                  onFocus={(e) => moveUnderlineTo(e.currentTarget)}
                  className={`text-sm transition hover:text-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 ${isActive(item.href) ? 'text-blue-600 underline decoration-blue-600/40 underline-offset-4' : 'text-neutral-700 dark:text-[var(--muted)]'}`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
        <div className="hidden items-center gap-3 md:flex">
          <button
            type="button"
            onClick={() => setCmdOpen(true)}
            className="inline-flex items-center gap-2 rounded-md border px-2 py-1 text-sm text-neutral-700 hover:bg-neutral-50 focus:outline-none focus:ring-2 focus:ring-blue-500"
            aria-label="Search (Ctrl/⌘K)"
            title="Search (Ctrl/⌘K)"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
              <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
              <path d="M16.65 16.65 21 21" stroke="currentColor" strokeWidth="1.8" />
            </svg>
            <kbd className="rounded border bg-neutral-50 px-1.5 py-0.5 text-xs text-neutral-600">
              Ctrl/⌘K
            </kbd>
          </button>
          <Link
            href={withLocale('/admin/sign-in')}
            aria-label="Admin sign in"
            title="Admin sign in"
            className="inline-flex items-center rounded-md p-2 text-neutral-700 hover:bg-neutral-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 12a5 5 0 1 0-5-5 5 5 0 0 0 5 5Z"
                stroke="currentColor"
                strokeWidth="1.8"
              />
              <path d="M3 21a9 9 0 0 1 18 0" stroke="currentColor" strokeWidth="1.8" />
              <path
                d="M16.5 10.5 21 6M21 6h-3.5M21 6v3.5"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
              />
            </svg>
          </Link>
          <Link
            href={pathname?.replace(/^\/\w\w/, '/en') || '/en'}
            className="text-sm underline"
            aria-label="Switch to English"
          >
            EN
          </Link>
          <span className="text-neutral-400">/</span>
          <Link
            href={pathname?.replace(/^\/\w\w/, '/fr') || '/fr'}
            className="text-sm underline"
            aria-label="Passer en français"
          >
            FR
          </Link>
        </div>
        <button
          type="button"
          className="inline-flex items-center gap-2 rounded-md p-2 text-neutral-700 outline-none ring-blue-500 hover:bg-neutral-100 focus:ring-2 md:hidden"
          aria-label="Open menu"
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => (open ? closeMenu() : openMenu())}
          ref={menuButtonRef}
        >
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
            <path
              d="M4 6h16M4 12h16M4 18h16"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        </button>
      </div>
      {/* Mobile menu */}
      {open && (
        <div className="md:hidden" id="mobile-menu">
          <div className="border-t bg-white px-4 py-3 shadow-sm dark:bg-[var(--background)]">
            <nav className="flex flex-col gap-3" aria-label="Mobile">
              {nav.map((item, i) => (
                <Link
                  key={item.href}
                  href={withLocale(item.href)}
                  ref={i === 0 ? firstMobileLinkRef : null}
                  aria-current={isActive(item.href) ? 'page' : undefined}
                  className={`text-base focus:outline-none focus:ring-2 focus:ring-blue-500 ${isActive(item.href) ? 'text-blue-600 underline decoration-blue-600/40 underline-offset-4' : 'text-neutral-800 dark:text-[var(--muted)]'}`}
                  onClick={() => closeMenu()}
                >
                  {item.label}
                </Link>
              ))}
              <div className="mt-2 flex items-center gap-2">
                <Link
                  href={withLocale('/admin/sign-in')}
                  className="inline-flex items-center rounded-md px-2 py-1 text-sm hover:underline"
                  onClick={() => closeMenu()}
                >
                  Admin sign in
                </Link>
                <Link
                  href={pathname?.replace(/^\/\w\w/, '/en') || '/en'}
                  className="text-sm underline"
                  onClick={() => closeMenu()}
                >
                  EN
                </Link>
                <span className="text-neutral-400">/</span>
                <Link
                  href={pathname?.replace(/^\/\w\w/, '/fr') || '/fr'}
                  className="text-sm underline"
                  onClick={() => closeMenu()}
                >
                  FR
                </Link>
              </div>
            </nav>
          </div>
        </div>
      )}
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:rounded focus:bg-white focus:px-3 focus:py-1 focus:ring-2 focus:ring-blue-500"
      >
        Skip to main content
      </a>
      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        items={nav.map((n) => ({ label: n.label, href: withLocale(n.href) }))}
      />
    </header>
  );
}

// removed legacy duplicate implementation
