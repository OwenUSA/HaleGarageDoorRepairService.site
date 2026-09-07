// BusinessMap — the address is real, so the embed is built from an encoded address query
// rather than from coordinates. Lazy iframe, titled for screen readers, with a plain
// directions link beside it for anyone the embed does not work for.
import { MapPin, Navigation } from 'lucide-react';
import { business, mapEmbedSrc, directionsHref } from '@/lib/business';

export default function BusinessMap({ zoom = 15 }: { zoom?: number }) {
  return (
    <div className="grid gap-8 lg:grid-cols-12 lg:gap-14">
      <div className="lg:col-span-5">
        <p className="eyebrow">Where we are</p>
        <h2 className="mt-4 text-3xl lg:text-4xl">On Shea, in Fountain Hills</h2>
        <p className="measure mt-5 text-lg leading-relaxed text-bronze-soft">
          The shop sits on East Shea Boulevard, which is why most of Fountain Hills is a
          ten-minute run and Rio Verde, north Scottsdale and Cave Creek are all inside a
          comfortable morning. Parts for the common failures ride in the van.
        </p>
        <p className="mt-6 flex items-start gap-3 font-display text-base font-medium text-bronze">
          <MapPin size={20} aria-hidden="true" className="mt-1 shrink-0 text-terracotta" />
          {business.addressLine}
        </p>
        <a
          href={directionsHref}
          className="mt-6 inline-flex items-center gap-2 rounded-pill bg-bronze px-6 py-3.5 font-display text-sm font-semibold text-sand-pale transition-colors hover:bg-terracotta"
        >
          <Navigation size={16} aria-hidden="true" />
          Get directions
        </a>
      </div>
      <div className="lg:col-span-7">
        <div className="overflow-hidden rounded-card border border-line bg-sand-deep">
          <iframe
            src={mapEmbedSrc(zoom)}
            title={`Google map showing ${business.name} at ${business.addressLine}`}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="h-[340px] w-full border-0 lg:h-[420px]"
          />
        </div>
      </div>
    </div>
  );
}
