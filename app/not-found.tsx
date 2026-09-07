// Rendered to out/404.html by the export. nginx serves it for any path that misses.
import Link from 'next/link';
import { Phone } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import { business } from '@/lib/business';

export default function NotFound() {
  return (
    <main id="main" className="px-5 py-24 lg:px-8 lg:py-32">
      <div className="mx-auto max-w-2xl text-center">
        <p className="eyebrow">404</p>
        <h1 className="mt-5 text-4xl lg:text-5xl">That page is not here.</h1>
        <p className="mt-6 text-lg leading-relaxed text-bronze-soft">
          The link may be old, or the address mistyped. Everything on this site is one of
          the five pages below, and the phone works either way.
        </p>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {ROUTES.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="inline-flex rounded-pill border border-line bg-sand-pale px-5 py-2.5 font-display text-sm font-medium text-bronze hover:border-terracotta hover:text-terracotta"
              >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
        <a
          href={business.phoneHref}
          className="mt-10 inline-flex items-center justify-center gap-2 rounded-pill bg-terracotta px-7 py-4 font-display text-base font-semibold text-sand-pale hover:bg-terracotta-deep"
        >
          <Phone size={18} aria-hidden="true" />
          {business.phone}
        </a>
      </div>
    </main>
  );
}
