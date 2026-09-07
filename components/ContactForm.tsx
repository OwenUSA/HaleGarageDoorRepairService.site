'use client';

// ContactForm — this site is a static export with no server, no route handler and no
// action, so there is nothing to POST to. Rather than pretend, the form composes the
// message into a mailto: link and hands it to the visitor's mail client. The notice
// below says so plainly, and the phone number is offered first for anything urgent.
import { useState } from 'react';
import { Mail, Phone, Send } from 'lucide-react';
import { business } from '@/lib/business';
import { services } from '@/content/services';

const FIELD =
  'w-full rounded-chip border border-line bg-paper px-4 py-3 text-base text-bronze placeholder:text-bronze-soft/60 focus:border-terracotta focus:outline-none';
const LABEL = 'font-display text-sm font-medium text-bronze';

export default function ContactForm() {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [topic, setTopic] = useState(services[0].name);
  const [message, setMessage] = useState('');

  const subject = `Garage door enquiry — ${topic}`;
  const body = [
    `Name: ${name}`,
    `Phone: ${phone}`,
    `About: ${topic}`,
    '',
    message,
  ].join('\n');

  const mailtoHref = `${business.emailHref}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

  return (
    <div className="rounded-card bg-paper p-6 shadow-[var(--shadow-lift)] lg:p-9">
      <h2 className="text-2xl lg:text-3xl">Tell us what the door is doing</h2>
      <p className="mt-4 text-base leading-relaxed text-bronze-soft">
        The more specific the symptom, the better the answer. A bang followed by a door
        that will not lift is a different call from a door that reverses a foot off the
        floor.
      </p>

      <div
        role="note"
        className="mt-6 rounded-chip border border-terracotta/40 bg-terracotta/10 px-4 py-3 text-sm leading-relaxed text-bronze"
      >
        This form opens a pre-filled message in your own email app — nothing is sent from
        this page and nothing you type here is stored. If that is awkward, or the door is
        stuck right now, please call{' '}
        <a href={business.phoneHref} className="font-semibold underline underline-offset-4">
          {business.phone}
        </a>
        .
      </div>

      <form
        className="mt-7 flex flex-col gap-5"
        onSubmit={(e) => {
          e.preventDefault();
          window.location.href = mailtoHref;
        }}
      >
        <div className="grid gap-5 sm:grid-cols-2">
          <div className="flex flex-col gap-2">
            <label className={LABEL} htmlFor="cf-name">
              Your name
            </label>
            <input
              id="cf-name"
              name="name"
              type="text"
              autoComplete="name"
              className={FIELD}
              placeholder="Jane Alvarez"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div className="flex flex-col gap-2">
            <label className={LABEL} htmlFor="cf-phone">
              Phone
            </label>
            <input
              id="cf-phone"
              name="phone"
              type="tel"
              autoComplete="tel"
              className={FIELD}
              placeholder="(602) 555-0000"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label className={LABEL} htmlFor="cf-topic">
            What it is about
          </label>
          <select
            id="cf-topic"
            name="topic"
            className={FIELD}
            value={topic}
            onChange={(e) => setTopic(e.target.value)}
          >
            {services.map((s) => (
              <option key={s.slug} value={s.name}>
                {s.name}
              </option>
            ))}
            <option value="Something else">Something else</option>
          </select>
        </div>

        <div className="flex flex-col gap-2">
          <label className={LABEL} htmlFor="cf-message">
            What is happening
          </label>
          <textarea
            id="cf-message"
            name="message"
            rows={5}
            className={FIELD}
            placeholder="Two-car door, about eight years old. Loud bang on Tuesday morning and it has not lifted since."
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
        </div>

        <div className="flex flex-col gap-3 sm:flex-row">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 rounded-pill bg-terracotta px-7 py-4 font-display text-base font-semibold text-sand-pale transition-colors hover:bg-terracotta-deep"
          >
            <Send size={18} aria-hidden="true" />
            Open this in my email app
          </button>
          <a
            href={business.phoneHref}
            className="inline-flex items-center justify-center gap-2 rounded-pill border border-bronze/30 px-7 py-4 font-display text-base font-semibold text-bronze transition-colors hover:bg-sand-deep"
          >
            <Phone size={18} aria-hidden="true" />
            Call instead
          </a>
        </div>

        <p className="flex items-start gap-2 text-sm text-bronze-soft">
          <Mail size={16} aria-hidden="true" className="mt-1 shrink-0" />
          Or write to{' '}
          <a href={business.emailHref} className="break-all underline underline-offset-4">
            {business.email}
          </a>
        </p>
      </form>
    </div>
  );
}
