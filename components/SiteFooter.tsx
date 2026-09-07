// SiteFooter — the shared NAP block. Hours are rendered by iterating business.hoursRules,
// so BOTH rules appear: Sunday–Friday on one line and Saturday, with its earlier 5:00 PM
// close, on its own. There is no single hours string in this component that could quietly
// lose the shorter Saturday.
import Link from 'next/link';
import { Phone, MapPin, Mail, Clock } from 'lucide-react';
import { ROUTES } from '@/lib/routes';
import { business, directionsHref } from '@/lib/business';

export default function SiteFooter() {
  return (
    <footer className="bg-bronze text-sand-pale">
      <div className="mx-auto grid max-w-(--container-max) gap-12 px-5 py-16 sm:grid-cols-2 lg:grid-cols-4 lg:px-8 lg:py-20">
        <div className="flex flex-col gap-4">
          <span className="font-display text-2xl font-semibold tracking-tight text-sand-pale">
            {business.name}
          </span>
          <p className="text-sm leading-relaxed text-sand-deep/80">
            A garage door shop working out of Fountain Hills, on the doors the Sonoran sun
            has been working on all year.
          </p>
          <p className="text-sm text-sand-deep/80">{business.serviceArea}</p>
        </div>

        <nav aria-label="Footer" className="flex flex-col gap-1">
          <span className="mb-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Site
          </span>
          {ROUTES.map((r) => (
            <Link key={r.href} href={r.href} className="flex min-h-10 items-center text-sm hover:text-terracotta">
              {r.label}
            </Link>
          ))}
        </nav>

        <div className="flex flex-col gap-3">
          <span className="mb-1 font-display text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            Contact
          </span>
          <a href={business.phoneHref} className="flex items-center gap-2 font-display text-base font-semibold">
            <Phone size={16} aria-hidden="true" />
            {business.phone}
          </a>
          <a href={business.emailHref} className="flex items-start gap-2 break-all text-sm hover:text-terracotta">
            <Mail size={16} aria-hidden="true" className="mt-1 shrink-0" />
            {business.email}
          </a>
          <span className="flex items-start gap-2 text-sm">
            <MapPin size={16} aria-hidden="true" className="mt-1 shrink-0" />
            {business.addressLine}
          </span>
          <a
            href={directionsHref}
            className="flex min-h-10 items-center text-sm underline underline-offset-4 hover:text-terracotta"
          >
            Get directions
          </a>
        </div>

        <div className="flex flex-col gap-3">
          <span className="mb-1 flex items-center gap-2 font-display text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            <Clock size={14} aria-hidden="true" />
            Hours
          </span>
          <dl className="flex flex-col gap-2 text-sm">
            {business.hoursRules.map((rule) => (
              <div key={rule.label} className="flex flex-col">
                <dt className="font-display font-medium text-sand-pale">{rule.label}</dt>
                <dd className="text-sand-deep/85">{rule.display}</dd>
              </div>
            ))}
          </dl>
          <p className="text-xs leading-relaxed text-sand-deep/70">
            Saturday closes earlier than the rest of the week. If a door fails after hours,
            leave a message and it is answered when the phone opens the next morning.
          </p>
        </div>
      </div>

      <div className="border-t border-bronze-soft/40 px-5 py-5 text-center text-xs text-sand-deep/70 lg:px-8">
        &copy; 2026 {business.name}. All rights reserved.
      </div>
    </footer>
  );
}
