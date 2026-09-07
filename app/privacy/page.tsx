import type { Metadata } from 'next';
import { pageMeta } from '@/content/meta';
import { business } from '@/lib/business';

const meta = pageMeta['/privacy'];

export const metadata: Metadata = {
  title: meta.title,
  description: meta.description,
  alternates: { canonical: '/privacy' },
  openGraph: {
    title: meta.title,
    description: meta.description,
    url: '/privacy',
    siteName: business.name,
    type: 'website',
  },
};

function Para({ children }: { children: React.ReactNode }) {
  return <p className="mt-4 text-base leading-relaxed text-bronze-soft">{children}</p>;
}

function Heading({ children }: { children: React.ReactNode }) {
  return <h2 className="mt-12 text-2xl lg:text-3xl">{children}</h2>;
}

export default function PrivacyPage() {
  return (
    <main id="main">
      <section className="px-5 pb-20 pt-16 lg:px-8 lg:pb-28 lg:pt-24">
        <div className="mx-auto max-w-3xl">
          <p className="eyebrow">Privacy</p>
          <h1 className="mt-5 text-4xl lg:text-5xl">Privacy policy</h1>
          <Para>
            This policy explains what {business.name} does with information from visitors to{' '}
            <span className="whitespace-nowrap">halegaragedoorrepairservice.site</span>. It
            is written to be read rather than to be technically survivable, and it is short
            because the site does very little.
          </Para>

          <Heading>Who we are</Heading>
          <Para>
            {business.name} is a garage door repair business at {business.addressLine}. You
            can reach us by phone on {business.phone} or by email at {business.email}. If
            you want to ask about anything in this policy, either of those is the right
            place to start.
          </Para>

          <Heading>What this website collects</Heading>
          <Para>
            This site is a set of static pages. It has no accounts, no login, no shopping
            cart and no server-side code of its own. It does not set advertising cookies,
            it does not run an analytics tracker, and it does not build a profile of you as
            you move between pages.
          </Para>
          <Para>
            The contact form on the contact page does not submit anything to us over the
            web. It assembles what you have typed into a pre-addressed message and hands
            that to your own email application. Nothing you type into it is stored by this
            website, and if you close the page without sending, the text is simply gone.
          </Para>

          <Heading>Information you send us directly</Heading>
          <Para>
            When you call us or send us an email, we necessarily receive whatever you
            choose to tell us — typically a name, a phone number, an address for the visit
            and a description of the problem with the door. We use that to answer you, to
            find the property, to quote the work and to keep a record of what was done on
            the door in case you call again about the same repair.
          </Para>
          <Para>
            We do not sell that information, we do not rent it, and we do not pass it to
            anyone for marketing. We share it only where it is genuinely necessary to
            complete a job — for example, giving a supplier the model and section detail
            needed to order a matching panel — and only the part that is needed.
          </Para>

          <Heading>Third-party content on this site</Heading>
          <Para>
            The home, about and contact pages embed a Google Maps frame so you can see
            where we are. When that frame loads, Google receives the request in the normal
            way a request for a web resource is received, which includes your IP address
            and your browser details. That is Google&apos;s processing rather than ours,
            and it is governed by Google&apos;s own privacy policy. Nothing else on the
            site is loaded from a third party — the fonts and photographs are served from
            this domain.
          </Para>

          <Heading>How long we keep things</Heading>
          <Para>
            Job records and the correspondence attached to them are kept for as long as
            they are useful for warranty and follow-up questions, and for as long as
            Arizona record-keeping and tax obligations require. Enquiries that do not turn
            into work are cleared out once they are plainly stale.
          </Para>

          <Heading>Your choices</Heading>
          <Para>
            You can ask us what we hold about you, ask us to correct it, or ask us to
            delete it, and we will do so unless we are required to keep it. Write to{' '}
            {business.email} or call {business.phone} and say what you would like. There is
            no form to fill in and no charge for asking.
          </Para>

          <Heading>Children</Heading>
          <Para>
            This site is aimed at homeowners arranging repairs. It is not directed at
            children and we do not knowingly collect information from them.
          </Para>

          <Heading>Changes to this policy</Heading>
          <Para>
            If the way this site works changes — if, for instance, we ever add a form that
            genuinely submits to a server — this page will be updated to say so before that
            change goes live.
          </Para>

          <div className="mt-14 rounded-card border border-line bg-sand-pale p-6">
            <p className="text-base leading-relaxed text-bronze">
              Questions about this policy: {business.name}, {business.addressLine}. Phone{' '}
              <a href={business.phoneHref} className="underline underline-offset-4">
                {business.phone}
              </a>
              , email{' '}
              <a href={business.emailHref} className="break-all underline underline-offset-4">
                {business.email}
              </a>
              .
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}
