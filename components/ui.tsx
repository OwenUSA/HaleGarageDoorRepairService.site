// components/ui.tsx — the small shared pieces of the desert-editorial layout.
// Alternating split rows, pull quotes, page banners, section headings and the CTA band.
// Everything here is a server component; nothing holds state.
import Link from 'next/link';
import { Phone, ArrowRight } from 'lucide-react';
import { business } from '@/lib/business';
import type { Photo } from '@/lib/images';

export function Section({
  children,
  className = '',
  id,
}: {
  children: React.ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`px-5 py-16 lg:px-8 lg:py-24 ${className}`}>
      <div className="mx-auto max-w-(--container-max)">{children}</div>
    </section>
  );
}

export function SectionHead({
  eyebrow,
  title,
  lead,
  align = 'left',
}: {
  eyebrow: string;
  title: string;
  lead?: string;
  align?: 'left' | 'center';
}) {
  const centred = align === 'center';
  return (
    <div className={centred ? 'mx-auto max-w-2xl text-center' : 'max-w-3xl'}>
      <p className="eyebrow">{eyebrow}</p>
      <h2 className="mt-4 text-3xl lg:text-4xl">{title}</h2>
      {lead ? (
        <p className={`mt-5 text-lg leading-relaxed text-bronze-soft ${centred ? '' : 'measure'}`}>{lead}</p>
      ) : null}
    </div>
  );
}

/** The alternating editorial row: image on one side, prose on the other, wide gutter. */
export function SplitRow({
  photo,
  eyebrow,
  title,
  children,
  flip = false,
  priority = false,
}: {
  photo: Photo;
  eyebrow: string;
  title: string;
  children: React.ReactNode;
  flip?: boolean;
  priority?: boolean;
}) {
  return (
    <div className="grid items-center gap-10 lg:grid-cols-12 lg:gap-20">
      <div className={`lg:col-span-6 ${flip ? 'lg:order-2' : ''}`}>
        <div className="overflow-hidden rounded-card bg-sand-deep shadow-[var(--shadow-lift)]">
          <img
            src={photo.src}
            alt={photo.alt}
            width={photo.width}
            height={photo.height}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
            className="h-full w-full object-cover"
          />
        </div>
      </div>
      <div className={`lg:col-span-6 ${flip ? 'lg:order-1' : ''}`}>
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="mt-4 text-3xl lg:text-4xl">{title}</h2>
        <div className="mt-6 flex flex-col gap-4 text-lg leading-relaxed text-bronze-soft">{children}</div>
      </div>
    </div>
  );
}

/** Pull quote between sections — a bronze rule, a large display line, an attribution. */
export function PullQuote({ children, source }: { children: React.ReactNode; source: string }) {
  return (
    <section className="px-5 lg:px-8">
      <div className="mx-auto max-w-(--container-max)">
        <figure className="border-y border-line py-14 lg:py-20">
          <blockquote className="mx-auto max-w-4xl text-center font-display text-2xl font-medium leading-snug tracking-tight text-bronze lg:text-4xl">
            {children}
          </blockquote>
          <figcaption className="mt-8 text-center font-display text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
            {source}
          </figcaption>
        </figure>
      </div>
    </section>
  );
}

/** Interior page banner — a wide photo behind a bronze scrim with the page title. */
export function PageBanner({
  photo,
  eyebrow,
  title,
  lead,
}: {
  photo: Photo;
  eyebrow: string;
  title: string;
  lead: string;
}) {
  return (
    <section className="relative isolate overflow-hidden bg-bronze">
      <img
        src={photo.src}
        alt={photo.alt}
        width={photo.width}
        height={photo.height}
        decoding="async"
        className="absolute inset-0 h-full w-full object-cover opacity-25"
      />
      {/* Scrim. The photo alone left the heading on an unpredictable ground — a
          bright patch of sky behind the text dropped it to ~3.6:1. This bronze
          wash is fully opaque where the heading starts and never thinner than
          62%, which floors the heading at 7.8:1 and holds ~10:1 across the
          measure the H1 actually occupies. */}
      <div
        aria-hidden="true"
        className="absolute inset-0"
        style={{
          background:
            'linear-gradient(90deg, var(--color-bronze) 0%, color-mix(in oklab, var(--color-bronze) 90%, transparent) 55%, color-mix(in oklab, var(--color-bronze) 62%, transparent) 100%)',
        }}
      />
      {/* relative, and last in the DOM, so it paints over both layers above. */}
      <div className="relative mx-auto max-w-(--container-max) px-5 py-20 lg:px-8 lg:py-28">
        <p className="font-display text-xs font-semibold uppercase tracking-[0.18em] text-sand-deep">
          {eyebrow}
        </p>
        <h1 className="mt-4 max-w-3xl text-4xl text-ink-inverse lg:text-6xl">{title}</h1>
        <p className="measure mt-6 text-lg leading-relaxed text-sand-deep">{lead}</p>
      </div>
    </section>
  );
}

export function CtaBand({
  title,
  body,
}: {
  title: string;
  body: string;
}) {
  return (
    <section className="px-5 pb-20 lg:px-8 lg:pb-28">
      <div className="mx-auto max-w-(--container-max) rounded-card bg-terracotta px-6 py-14 text-sand-pale shadow-[var(--shadow-plate)] lg:px-16 lg:py-20">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-7">
            <h2 className="text-3xl text-sand-pale lg:text-4xl">{title}</h2>
            <p className="mt-5 max-w-xl text-lg leading-relaxed text-sand-pale/90">{body}</p>
          </div>
          <div className="flex flex-col gap-3 lg:col-span-5 lg:items-end">
            <a
              href={business.phoneHref}
              className="inline-flex items-center justify-center gap-2 rounded-pill bg-bronze px-7 py-4 font-display text-base font-semibold text-sand-pale transition-colors hover:bg-bronze-deep"
            >
              <Phone size={18} aria-hidden="true" />
              {business.phone}
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 rounded-pill border border-sand-pale/60 px-7 py-4 font-display text-base font-semibold text-sand-pale transition-colors hover:bg-sand-pale/10"
            >
              Send a message
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <p className="text-sm text-sand-pale/80 lg:text-right">
              {business.hoursRules[0].label} {business.hoursRules[0].display}
              <br />
              {business.hoursRules[1].label} {business.hoursRules[1].display}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Gallery band — a row of photographs with real captions, lazy loaded. */
export function GalleryBand({
  eyebrow,
  title,
  lead,
  items,
}: {
  eyebrow: string;
  title: string;
  lead: string;
  items: readonly { photo: Photo; caption: string }[];
}) {
  return (
    <Section className="bg-sand-pale">
      <SectionHead eyebrow={eyebrow} title={title} lead={lead} />
      <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <li key={item.photo.src} className="flex flex-col">
            <div className="overflow-hidden rounded-card bg-sand-deep">
              <img
                src={item.photo.src}
                alt={item.photo.alt}
                width={item.photo.width}
                height={item.photo.height}
                loading="lazy"
                decoding="async"
                className="h-64 w-full object-cover lg:h-72"
              />
            </div>
            <p className="mt-4 text-sm leading-relaxed text-bronze-soft">{item.caption}</p>
          </li>
        ))}
      </ul>
    </Section>
  );
}
