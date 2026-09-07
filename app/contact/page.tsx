import type { Metadata } from 'next';
import { Phone, Mail, MapPin } from 'lucide-react';
import { pageMeta } from '@/content/meta';
import { photos } from '@/lib/images';
import { business, directionsHref } from '@/lib/business';
import HoursTable from '@/components/HoursTable';
import ContactForm from '@/components/ContactForm';
import BusinessMap from '@/components/BusinessMap';
import { Section, PageBanner } from '@/components/ui';

const meta = pageMeta['/contact'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: '/contact' },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: '/contact',
    siteName: business.name,
    type: 'website',
    images: [{ url: photos.whiteCarriageDoorExterior.src }],
  },
};

export default function ContactPage() {
  return (
    <main id="main">
      <PageBanner
        photo={photos.whiteCarriageDoorExterior}
        eyebrow="Contact"
        title="One number, one address, and hours we actually keep."
        lead="Call for anything urgent. The form below composes an email in your own mail app — this site is static and nothing is submitted from the page itself."
      />

      <Section>
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* ---- NAP + hours ---- */}
          <div className="lg:col-span-5">
            <p className="eyebrow">Where to reach us</p>
            <h2 className="mt-4 text-3xl lg:text-4xl">{business.name}</h2>

            <dl className="mt-8 flex flex-col gap-6">
              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-chip bg-terracotta/12 text-terracotta">
                  <Phone size={20} />
                </span>
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-bronze-soft">
                    Phone
                  </dt>
                  <dd className="mt-1">
                    <a href={business.phoneHref} className="font-display text-xl font-semibold text-bronze hover:text-terracotta">
                      {business.phone}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-chip bg-terracotta/12 text-terracotta">
                  <Mail size={20} />
                </span>
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-bronze-soft">
                    Email
                  </dt>
                  <dd className="mt-1">
                    <a href={business.emailHref} className="break-all text-base text-bronze underline underline-offset-4 hover:text-terracotta">
                      {business.email}
                    </a>
                  </dd>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <span aria-hidden="true" className="grid h-11 w-11 shrink-0 place-items-center rounded-chip bg-terracotta/12 text-terracotta">
                  <MapPin size={20} />
                </span>
                <div>
                  <dt className="font-display text-xs font-semibold uppercase tracking-[0.16em] text-bronze-soft">
                    Address
                  </dt>
                  <dd className="mt-1 text-base text-bronze">
                    {business.addressLine}
                    <br />
                    <a href={directionsHref} className="text-sm underline underline-offset-4 hover:text-terracotta">
                      Get directions
                    </a>
                  </dd>
                </div>
              </div>
            </dl>

            <div className="mt-10">
              <h3 className="font-display text-xl font-semibold text-bronze">Opening hours</h3>
              <p className="mt-3 text-base leading-relaxed text-bronze-soft">
                Sunday through Friday we are open 7:00 AM – 8:00 PM. Saturday is a shorter
                day: 8:00 AM – 5:00 PM.
              </p>
              <div className="mt-5">
                <HoursTable />
              </div>
            </div>

            <div className="mt-10 rounded-card border border-line bg-sand-pale p-6">
              <h3 className="font-display text-lg font-semibold text-bronze">Service area</h3>
              <p className="mt-3 text-base leading-relaxed text-bronze-soft">{business.serviceArea}.</p>
            </div>
          </div>

          {/* ---- Form ---- */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>
        </div>
      </Section>

      <Section className="bg-sand-pale">
        <BusinessMap zoom={15} />
      </Section>
    </main>
  );
}
