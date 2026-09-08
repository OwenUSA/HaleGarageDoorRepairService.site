'use client';

// SiteHeader — nav reads lib/routes.ts, so an entry here cannot drift from a real route.
import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X, Phone } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import { business } from '@/lib/business';

export default function SiteHeader() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-sand/95 backdrop-blur">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-chip focus:bg-bronze focus:px-4 focus:py-2 focus:text-sand"
      >
        Skip to content
      </a>

      <div className="mx-auto flex h-[76px] max-w-(--container-max) items-center justify-between gap-6 px-5 lg:h-[92px] lg:px-8">
        <Link href="/" className="flex min-h-11 shrink-0 items-center gap-3" aria-label={business.name}>
          {/* The sun mark lifted off hale-logo.jpg. Only the mark, not the full
              lockup: the lockup's tagline is illegible mush at header height, and
              the wordmark beside it already says the name. */}
          <Image
            src="/images/hale-mark.png"
            alt=""
            aria-hidden="true"
            width={386}
            height={213}
            priority
            className="h-auto w-[46px] shrink-0"
          />
          <span className="flex flex-col leading-none">
            <span className="font-display text-lg font-bold tracking-tight text-bronze lg:text-xl">Hale</span>
            <span className="mt-1 font-display text-[10px] font-medium uppercase tracking-[0.2em] text-bronze-soft">
              Garage Door Repair
            </span>
          </span>
        </Link>

        <nav aria-label="Primary" className="hidden items-center gap-8 lg:flex">
          {ROUTES.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              className="font-display text-sm font-medium tracking-wide text-bronze transition-colors hover:text-terracotta-ink"
            >
              {r.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <a
            href={business.phoneHref}
            // on-accent: light ink on a bronze fill (10.4:1). Hover darkens to
            // terracotta-ink rather than the bright terracotta, which cannot
            // carry 14px text at 4.5:1 against any light ink.
            className="on-accent hidden items-center gap-2 rounded-pill bg-bronze px-5 py-3 font-display text-sm font-semibold text-ink-inverse transition-colors hover:bg-terracotta-ink hover:text-ink-inverse lg:flex"
          >
            <Phone size={16} aria-hidden="true" />
            {business.phone}
          </a>

          <button
            type="button"
            aria-controls="mobile-nav"
            aria-expanded={open}
            aria-label={open ? 'Close menu' : 'Open menu'}
            onClick={() => setOpen((v) => !v)}
            className="grid h-11 w-11 shrink-0 place-items-center rounded-chip border border-line text-bronze lg:hidden"
          >
            {open ? <X size={22} aria-hidden="true" /> : <Menu size={22} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-nav" hidden={!open} className="border-t border-line bg-sand px-5 pb-6 pt-3 lg:hidden">
        <nav aria-label="Primary mobile" className="flex flex-col">
          {ROUTES.map((r) => (
            <Link
              key={r.href}
              href={r.href}
              onClick={() => setOpen(false)}
              className="border-b border-line/60 py-3.5 font-display text-base font-medium text-bronze last:border-0"
            >
              {r.label}
            </Link>
          ))}
          <a
            href={business.phoneHref}
            className="on-accent mt-4 flex items-center justify-center gap-2 rounded-pill bg-terracotta-ink px-5 py-3.5 font-display text-sm font-semibold text-ink-inverse"
          >
            <Phone size={16} aria-hidden="true" />
            Call {business.phone}
          </a>
        </nav>
      </div>
    </header>
  );
}
