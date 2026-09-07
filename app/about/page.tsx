import type { Metadata } from 'next';
import { PhoneCall, Wrench, ClipboardCheck } from 'lucide-react';
import { pageMeta } from '@/content/meta';
import { photos } from '@/lib/images';
import { business } from '@/lib/business';
import { Section, SectionHead, SplitRow, PullQuote, CtaBand, GalleryBand, PageBanner } from '@/components/ui';

const meta = pageMeta['/about'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: '/about' },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: '/about',
    siteName: business.name,
    type: 'website',
    images: [{ url: photos.garageInteriorClosedDoor.src }],
  },
};

const approach = [
  {
    icon: PhoneCall,
    step: 'One',
    title: 'The call',
    body: 'We ask what the door is doing, not what you think is broken. The noise, when it started, whether it happened all at once or crept up over a month. That conversation narrows most faults to two or three possibilities and tells us what to load in the van.',
  },
  {
    icon: Wrench,
    step: 'Two',
    title: 'The look',
    body: 'Release cord pulled, door run by hand, balance checked at the halfway point. Springs, cables, drums, rollers, hinges, track and brackets all get eyes on them before the opener is even switched on. Then you get the price, before any work starts.',
  },
  {
    icon: ClipboardCheck,
    step: 'Three',
    title: 'The test',
    body: 'Nothing is finished until the door has run its full travel several times, reversed cleanly on the safety eyes and the contact reverse, and sat still by hand at the halfway mark. We tell you what we found, what we changed and what is worth watching next year.',
  },
];

export default function AboutPage() {
  return (
    <main id="main">
      <PageBanner
        photo={photos.garageInteriorClosedDoor}
        eyebrow="About Hale"
        title="A garage door shop that lives in the same heat your door does."
        lead="We are based on East Shea Boulevard in Fountain Hills and we work on residential doors across the north-east Valley. The desert is not a backdrop to the work here — it is most of the reason for it."
      />

      <Section className="flex flex-col gap-20 lg:gap-28">
        <SplitRow
          photo={photos.torsionSpringPlywoodHeader}
          eyebrow="The work"
          title="Most of what we do is undoing a summer"
          priority
        >
          <p>
            A garage door is the largest moving object on a house, and in this part of
            Arizona it spends its life on the hot side of the wall. The face takes direct
            afternoon sun for months. The ceiling above the opener holds heat well past
            dark. The concrete under the bottom seal stays warm enough to cook rubber long
            after the air has cooled.
          </p>
          <p>
            None of that is dramatic on any given day, which is why it surprises people
            when the spring finally goes or the opener stops answering the remote from the
            driveway. It has been coming for four summers. Our job is mostly finding the
            part of the system that has quietly aged out and putting it back before the
            rest of it takes the load.
          </p>
        </SplitRow>

        <SplitRow
          flip
          photo={photos.openerRailLookingOut}
          eyebrow="How we work"
          title="One door at a time, tested before we leave"
        >
          <p>
            We are a small operation and we like it that way. It means the person who takes
            the call is the person who looks at the door, and it means nobody is being
            pushed to turn a service call into a sale. We do not run a call centre, we do
            not sell maintenance subscriptions, and we do not quote a number over the phone
            that changes once we are standing in your garage.
          </p>
          <p>
            What we will do is tell you what we can see, what it will cost, and what is
            going to want attention next. If that is a job for somebody with a bigger crew
            and a bigger truck, we will say so rather than take it on badly.
          </p>
        </SplitRow>
      </Section>

      <PullQuote source="The rule we work to">
        Fix the thing that failed, find the thing that caused it, and leave with the door
        running by hand as easily as it runs on the motor.
      </PullQuote>

      <Section>
        <SectionHead
          eyebrow="Our approach"
          title="Three steps, every visit, in the same order"
          lead="It is not a script for its own sake. Doing it in this order is what stops an opener being replaced when the real fault was a five-dollar roller."
        />
        <ol className="mt-14 grid gap-6 lg:grid-cols-3">
          {approach.map((item) => (
            <li key={item.step} className="rounded-card bg-sand-pale p-8">
              <span
                aria-hidden="true"
                className="grid h-12 w-12 place-items-center rounded-chip bg-terracotta text-sand-pale"
              >
                <item.icon size={22} />
              </span>
              <p className="mt-6 font-display text-xs font-semibold uppercase tracking-[0.18em] text-terracotta">
                Step {item.step}
              </p>
              <h3 className="mt-2 font-display text-2xl font-semibold text-bronze">{item.title}</h3>
              <p className="mt-4 text-base leading-relaxed text-bronze-soft">{item.body}</p>
            </li>
          ))}
        </ol>
      </Section>

      <GalleryBand
        eyebrow="On the van"
        title="The parts of a door people never see"
        lead="Springs, cables, pulleys and opener heads — the hardware that carries the weight while the panels get all the attention."
        items={[
          {
            photo: photos.liftmasterMyQLabel,
            caption: 'The serial plate on an opener head. Model and date decide whether a board is still available or the unit is finished.',
          },
          {
            photo: photos.photoEyeOnJamb,
            caption: 'A safety photo eye on the jamb, showing green. Knocked half a degree out of line, it will reverse a door for no visible reason.',
          },
          {
            photo: photos.trackRadiusPulley,
            caption: 'The radius bend of an old track in rough timber framing. This is where a door binds first once the jamb moves.',
          },
          {
            photo: photos.bracketSpringAndDrum,
            caption: 'A hanger bracket carrying the track with the spring hooked into it. Everything above the door hangs off fixings like this one.',
          },
        ]}
      />

      <Section>
        <SectionHead
          eyebrow="Where we work"
          title="Fountain Hills first, then out across the north-east Valley"
          lead={business.serviceArea + '.'}
        />
        <ul className="mt-10 flex flex-wrap gap-3">
          {business.serviceAreaList.map((area) => (
            <li
              key={area}
              className="rounded-pill border border-line bg-sand-pale px-5 py-2.5 font-display text-sm font-medium text-bronze"
            >
              {area}
            </li>
          ))}
        </ul>
      </Section>

      <CtaBand
        title="Happy to look at it before it breaks."
        body="A tune-up on a noisy door is the cheapest visit we do, and it is a great deal cheaper than the same door after the cable lets go."
      />
    </main>
  );
}
