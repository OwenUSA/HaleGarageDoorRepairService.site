import type { Metadata } from 'next';
import Link from 'next/link';
import { Phone, Clock, ShieldCheck, MapPin, ArrowRight } from 'lucide-react';
import { pageMeta } from '@/content/meta';
import { services } from '@/content/services';
import { photos } from '@/lib/images';
import { business } from '@/lib/business';
import BusinessMap from '@/components/BusinessMap';
import { Section, SectionHead, SplitRow, PullQuote, CtaBand, GalleryBand } from '@/components/ui';

const meta = pageMeta['/'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: '/' },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: '/',
    siteName: business.name,
    type: 'website',
    images: [{ url: photos.sunlitOpenGarage.src }],
  },
};

const trust = [
  {
    icon: Clock,
    title: 'Open seven days',
    body: 'Sunday to Friday, 7:00 AM – 8:00 PM. Saturday, 8:00 AM – 5:00 PM.',
  },
  {
    icon: ShieldCheck,
    title: 'Quoted before we start',
    body: 'A price for the repair in front of us, given before a spanner comes out of the van.',
  },
  {
    icon: MapPin,
    title: 'Fountain Hills based',
    body: 'On East Shea Boulevard, working out across Scottsdale, Rio Verde and Cave Creek.',
  },
];

export default function HomePage() {
  return (
    <main id="main">
      {/* ---- Hero: editorial split with the photo overlapping the sand ground ---- */}
      <section className="relative overflow-hidden px-5 pb-20 pt-14 lg:px-8 lg:pb-32 lg:pt-20">
        <div className="mx-auto grid max-w-(--container-max) gap-12 lg:grid-cols-12 lg:items-center lg:gap-16">
          <div className="lg:col-span-6">
            <p className="eyebrow">Fountain Hills, Arizona</p>
            <h1 className="mt-5 text-4xl leading-[1.04] lg:text-6xl">
              The door is heavy, the sun is relentless, and something finally gave.
            </h1>
            <p className="measure mt-7 text-lg leading-relaxed text-bronze-soft lg:text-xl">
              Hale Garage Door Repair Service works on residential doors across Fountain
              Hills and the north-east Valley — broken springs, tired openers, frayed
              cables, doors off their track, and panels the Sonoran sun has been chalking
              since the day they went up.
            </p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <a
                href={business.phoneHref}
                className="inline-flex items-center justify-center gap-2 rounded-pill bg-terracotta px-7 py-4 font-display text-base font-semibold text-sand-pale transition-colors hover:bg-terracotta-deep"
              >
                <Phone size={18} aria-hidden="true" />
                {business.phone}
              </a>
              <Link
                href="/services"
                className="inline-flex items-center justify-center gap-2 rounded-pill border border-bronze/25 px-7 py-4 font-display text-base font-semibold text-bronze transition-colors hover:bg-sand-deep"
              >
                What we work on
                <ArrowRight size={18} aria-hidden="true" />
              </Link>
            </div>
            <p className="mt-6 text-sm text-bronze-soft">
              {business.hoursRules[0].label} {business.hoursRules[0].display}
              <span className="mx-2 text-line">|</span>
              {business.hoursRules[1].label} {business.hoursRules[1].display}
            </p>
          </div>

          <div className="lg:col-span-6">
            <div className="relative">
              <div
                aria-hidden="true"
                className="absolute -left-4 -top-4 hidden h-full w-full rounded-card border border-sage/50 lg:block"
              />
              <div className="relative overflow-hidden rounded-card bg-sand-deep shadow-[var(--shadow-plate)]">
                <img
                  src={photos.sunlitOpenGarage.src}
                  alt={photos.sunlitOpenGarage.alt}
                  width={photos.sunlitOpenGarage.width}
                  height={photos.sunlitOpenGarage.height}
                  fetchPriority="high"
                  decoding="async"
                  className="h-[320px] w-full object-cover sm:h-[420px] lg:h-[520px]"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---- Trust strip ---- */}
      <section className="border-y border-line bg-sand-pale px-5 py-10 lg:px-8">
        <ul className="mx-auto grid max-w-(--container-max) gap-8 md:grid-cols-3">
          {trust.map((item) => (
            <li key={item.title} className="flex items-start gap-4">
              <span
                aria-hidden="true"
                className="grid h-11 w-11 shrink-0 place-items-center rounded-chip bg-terracotta/12 text-terracotta"
              >
                <item.icon size={20} />
              </span>
              <div>
                <h2 className="font-display text-base font-semibold text-bronze">{item.title}</h2>
                <p className="mt-1 text-sm leading-relaxed text-bronze-soft">{item.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      {/* ---- Services grid ---- */}
      <Section>
        <SectionHead
          eyebrow="What we fix"
          title="Six repairs that cover most of what goes wrong out here"
          lead="Nearly every call in Fountain Hills lands in one of these six. If yours does not, say what the door is doing and we will tell you honestly whether it is ours to fix."
        />
        <ul className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => (
            <li key={service.slug} className="flex flex-col overflow-hidden rounded-card bg-sand-pale">
              <img
                src={service.photo.src}
                alt={service.photo.alt}
                width={service.photo.width}
                height={service.photo.height}
                loading="lazy"
                decoding="async"
                className="h-52 w-full object-cover"
              />
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-display text-xl font-semibold text-bronze">{service.name}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-bronze-soft">{service.short}</p>
                <ul className="mt-5 flex flex-col gap-1.5 border-t border-line pt-5 text-sm text-bronze-soft">
                  {service.symptoms.map((s) => (
                    <li key={s} className="flex gap-2">
                      <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-terracotta" />
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </li>
          ))}
        </ul>
        <div className="mt-12">
          <Link
            href="/services"
            className="inline-flex items-center gap-2 font-display text-base font-semibold text-terracotta underline underline-offset-8 hover:text-terracotta-deep"
          >
            Read what each repair involves
            <ArrowRight size={18} aria-hidden="true" />
          </Link>
        </div>
      </Section>

      <PullQuote source="Why we test by hand before we touch the opener">
        A garage door that is properly balanced will sit still halfway up with the opener
        disconnected. If it drops, the springs are the problem — not the motor everyone
        wants to replace.
      </PullQuote>

      {/* ---- Why Hale: alternating editorial rows ---- */}
      <Section className="flex flex-col gap-20 lg:gap-28">
        <SplitRow photo={photos.doorStrutAndArm} eyebrow="Why Hale" title="We diagnose the door, not the symptom">
          <p>
            A door that reverses on the way down sends most people shopping for an opener.
            More often than not it is a roller with a seized bearing, a jamb bracket that
            has walked loose, or safety eyes knocked half a degree out of line by a bin.
            Replacing the motor makes the fault disappear for a fortnight and then it comes
            back with a new receipt attached.
          </p>
          <p>
            So the first thing we do on any visit is pull the release cord and run the door
            by hand. It takes two minutes and it tells us whether we are looking at a
            spring, a track, or a motor before anything gets quoted.
          </p>
        </SplitRow>

        <SplitRow flip photo={photos.openerUnderCeiling} eyebrow="Built for this climate" title="Heat is the thing we plan around">
          <p>
            Doors here do not wear out from being used. They wear out from sitting in
            110-degree afternoons with a west face and an attic above them. Bottom seals go
            hard and split. Opener boards cook in ceilings that hold heat long after
            sundown. Steel skins expand and contract every single day and quietly back the
            hardware off.
          </p>
          <p>
            That shapes what we carry and what we check. Seal by the roll, nylon rollers
            instead of steel, and a hardware re-torque on every visit whether it was the
            reason we came or not.
          </p>
        </SplitRow>

        <SplitRow photo={photos.creamDoorOnBrick} eyebrow="Straight answers" title="If replacing beats repairing, we say so">
          <p>
            There is a point where a section swap on a twenty-year-old door stops being
            good value, and a point on the other side where a homeowner is being talked
            into a whole door they do not need. We will tell you which side of that line
            your door is on, with the reasoning, and we are content to be told no.
          </p>
          <p>
            The quote comes before the work, it covers the repair in front of us, and it
            does not grow once the van doors are open.
          </p>
        </SplitRow>
      </Section>

      <GalleryBand
        eyebrow="Recent work"
        title="Doors, openers and the hardware behind them"
        lead="A few of the things a Fountain Hills garage looks like once the panel is up and the cover is off."
        items={[
          {
            photo: photos.springAndPulleyOnBrick,
            caption: 'An extension spring and its pulley on an older brick-walled garage. The hook and the sheave wear out long before the spring loses its temper.',
          },
          {
            photo: photos.liftmasterMyQBelow,
            caption: 'An opener head that has spent years in a ceiling that holds heat well past sundown. The board and the capacitor give up long before the motor does.',
          },
          {
            photo: photos.drumCablesAndBracket,
            caption: 'Drum and cables at the top corner of a door. Both sides have to be wound to the same length or the door hangs low on one end.',
          },
          {
            photo: photos.horizontalTrackHangers,
            caption: 'Horizontal track running back on its hangers. A bolt that has walked loose here is a common reason a door starts to bind.',
          },
        ]}
      />

      {/* ---- Map ---- */}
      <Section>
        <BusinessMap />
      </Section>

      <CtaBand
        title="Tell us what the door is doing."
        body="A description of the noise and when it started usually narrows it to one of three things before we leave the shop. Call, or send a message and we will come back to you."
      />
    </main>
  );
}
