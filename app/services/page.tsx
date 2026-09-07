import type { Metadata } from 'next';
import { pageMeta } from '@/content/meta';
import { services } from '@/content/services';
import { photos } from '@/lib/images';
import { business } from '@/lib/business';
import FaqAccordion from '@/components/FaqAccordion';
import { Section, SectionHead, PullQuote, CtaBand, PageBanner } from '@/components/ui';

const meta = pageMeta['/services'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: '/services' },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: '/services',
    siteName: business.name,
    type: 'website',
    images: [{ url: photos.springShaftAcrossHeader.src }],
  },
};

export default function ServicesPage() {
  return (
    <main id="main">
      <PageBanner
        photo={photos.springShaftAcrossHeader}
        eyebrow="Services"
        title="Springs, openers, cables, track, panels and seals."
        lead="Six repairs cover almost every residential garage door call in Fountain Hills. Here is what each one actually involves, and the symptoms that point at it."
      />

      <Section>
        <SectionHead
          eyebrow="Before you read on"
          title="Two things worth knowing about a door that has stopped"
          lead="Neither of these is a sales line. They are the two mistakes that turn a modest repair into an expensive one, and both happen in the first ten minutes after a door fails."
        />
        <div className="mt-10 grid gap-6 lg:grid-cols-2">
          <div className="rounded-card bg-sand-pale p-8">
            <h3 className="font-display text-xl font-semibold text-bronze">
              Do not run an off-track door with the opener
            </h3>
            <p className="mt-4 text-base leading-relaxed text-bronze-soft">
              If a roller has left the channel or one side is hanging low, the opener will
              happily keep pulling. That is how a bent track becomes three creased panels
              and a cheap job becomes a new door. Pull the release cord, leave it where it
              is, and call.
            </p>
          </div>
          <div className="rounded-card bg-sand-pale p-8">
            <h3 className="font-display text-xl font-semibold text-bronze">
              Springs and bottom brackets are under load even when the door is down
            </h3>
            <p className="mt-4 text-base leading-relaxed text-bronze-soft">
              A torsion spring holds its energy whether the door is up, down or halfway.
              The bottom bracket at each corner is the anchor for that energy. Those two
              parts are the ones to leave alone; almost everything else on a door is
              genuinely approachable.
            </p>
          </div>
        </div>
      </Section>

      {/* ---- Six services, alternating editorial rows ---- */}
      <Section className="flex flex-col gap-20 lg:gap-28">
        {services.map((service, i) => (
          <article key={service.slug} id={service.slug} className="grid items-start gap-10 lg:grid-cols-12 lg:gap-20">
            <div className={`lg:col-span-5 ${i % 2 === 1 ? 'lg:order-2' : ''}`}>
              <div className="overflow-hidden rounded-card bg-sand-deep shadow-[var(--shadow-lift)]">
                <img
                  src={service.photo.src}
                  alt={service.photo.alt}
                  width={service.photo.width}
                  height={service.photo.height}
                  loading={i === 0 ? 'eager' : 'lazy'}
                  decoding="async"
                  className="h-72 w-full object-cover lg:h-[420px]"
                />
              </div>
            </div>
            <div className={`lg:col-span-7 ${i % 2 === 1 ? 'lg:order-1' : ''}`}>
              <p className="eyebrow">Service {String(i + 1).padStart(2, '0')}</p>
              <h2 className="mt-4 text-3xl lg:text-4xl">{service.name}</h2>
              <p className="mt-5 text-lg leading-relaxed text-bronze">{service.short}</p>
              <p className="mt-5 text-base leading-relaxed text-bronze-soft">{service.detail}</p>
              <div className="mt-7 rounded-card border border-line bg-sand-pale p-6">
                <h3 className="font-display text-sm font-semibold uppercase tracking-[0.16em] text-terracotta">
                  What you would notice
                </h3>
                <ul className="mt-4 flex flex-col gap-2 text-base text-bronze-soft">
                  {service.symptoms.map((s) => (
                    <li key={s} className="flex gap-3">
                      <span aria-hidden="true" className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sage" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </article>
        ))}
      </Section>

      <PullQuote source="On quoting">
        The number we give you on the driveway is the number on the invoice. If we find
        something else once the door is open, you hear about it before it is touched.
      </PullQuote>

      <Section>
        <SectionHead
          eyebrow="Questions"
          title="The six we are asked most"
          lead="If yours is not here, the phone is the fastest way to an answer — most of these take under a minute to settle."
        />
        <FaqAccordion />
      </Section>

      <CtaBand
        title="Not sure which of these it is?"
        body="Describe the noise and when it started. That alone usually narrows it to one of two, and it costs nothing to ask."
      />
    </main>
  );
}
