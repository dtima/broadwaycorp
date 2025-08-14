'use client';
import { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';

export interface CommandItem {
  label: string;
  href: string;
}

export default function CommandPalette({
  items,
  open,
  onClose,
}: {
  items: CommandItem[];
  open: boolean;
  onClose: () => void;
}) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      const isCmdK = (e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k';
      if (isCmdK) {
        e.preventDefault();
        if (!open) onOpen();
        else onClose();
      } else if (e.key === 'Escape' && open) {
        onClose();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  useEffect(() => {
    if (open) {
      setQuery('');
      setTimeout(() => inputRef.current?.focus(), 0);
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.documentElement.style.overflow = '';
    }
  }, [open]);

  function onOpen() {
    // managed by parent; noop here
  }

  const results = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items.slice(0, 7);
    return items.filter((i) => i.label.toLowerCase().includes(q)).slice(0, 10);
  }, [items, query]);

  if (!open) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      className="fixed inset-0 z-[999] flex items-start justify-center bg-black/30 p-4 pt-24"
    >
      <div className="w-full max-w-xl overflow-hidden rounded-xl border bg-white shadow-2xl">
        <div className="flex items-center gap-2 border-b px-3 py-2">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
            <circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.8" />
            <path d="M16.65 16.65 21 21" stroke="currentColor" strokeWidth="1.8" />
          </svg>
          <input
            ref={inputRef}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search pages…"
            className="w-full bg-transparent py-2 text-sm outline-none placeholder:text-neutral-400"
          />
          <kbd className="rounded border bg-neutral-50 px-1.5 py-0.5 text-xs text-neutral-600">
            Esc
          </kbd>
        </div>
        <ul className="max-h-80 overflow-y-auto p-2">
          {results.length === 0 && (
            <li className="px-3 py-2 text-sm text-neutral-500">No results</li>
          )}
          {results.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="block rounded-md px-3 py-2 text-sm hover:bg-neutral-50 focus:bg-neutral-50 focus:outline-none"
                onClick={onClose}
              >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
