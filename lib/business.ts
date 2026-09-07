// lib/business.ts — derived facts. Nothing here is retyped from content/nap.ts; every
// value is computed from it. The parsers THROW rather than fall back, because a silent
// fallback turns a copy edit into wrong structured data with no visible symptom.
import { nap, WEEKDAYS, type Weekday } from '@/content/nap';

/** Public origin. NEVER a localhost port — this string feeds metadataBase, every
 *  canonical tag, the JSON-LD, sitemap.xml and the Sitemap: line in robots.txt. */
export const SITE_URL = 'https://halegaragedoorrepairservice.site';

const ADDRESS_RE = /^(.+),\s*(.+),\s*([A-Z]{2})\s*(\d{5})$/;
const TIME_RE = /^(\d{1,2}):(\d{2})\s*(AM|PM)$/i;

function parseAddress(s: string) {
  const m = ADDRESS_RE.exec(s);
  if (!m) throw new Error(`business.ts: nap.address does not parse: ${s}`);
  return { street: m[1], locality: m[2], region: m[3], postalCode: m[4] };
}

/** "8:00 AM" -> "08:00". Throws on anything it cannot read. */
function to24(s: string): string {
  const m = TIME_RE.exec(s.trim());
  if (!m) throw new Error(`business.ts: time does not parse: ${s}`);
  const hour12 = Number(m[1]);
  if (hour12 < 1 || hour12 > 12) throw new Error(`business.ts: hour out of range: ${s}`);
  const h = /pm/i.test(m[3]) ? (hour12 % 12) + 12 : hour12 % 12;
  return `${String(h).padStart(2, '0')}:${m[2]}`;
}

export const address = parseAddress(nap.address);

export type HoursRule = {
  /** Days this rule covers, in Sunday-first order. */
  days: readonly Weekday[];
  /** Human label for the day range, e.g. "Sunday – Friday" or "Saturday". */
  label: string;
  /** As written, e.g. "7:00 AM – 8:00 PM". */
  display: string;
  /** ISO-8601 local time for schema.org, e.g. "07:00". */
  opens: string;
  /** ISO-8601 local time for schema.org, e.g. "20:00". */
  closes: string;
};

/** Two rules today: Sun–Fri 07:00–20:00 and Sat 08:00–17:00. */
export const hoursRules: readonly HoursRule[] = nap.hours.map((r) => ({
  days: r.days,
  label: r.label,
  display: `${r.opens} \u2013 ${r.closes}`,
  opens: to24(r.opens),
  closes: to24(r.closes),
}));

// Every day of the week must be covered by exactly one rule. If a rule is ever edited
// so a day is dropped or claimed twice, fail the build rather than render a hole.
{
  const seen = new Map<string, number>();
  for (const rule of hoursRules) {
    for (const day of rule.days) seen.set(day, (seen.get(day) ?? 0) + 1);
  }
  for (const day of WEEKDAYS) {
    const n = seen.get(day) ?? 0;
    if (n !== 1) throw new Error(`business.ts: ${day} is covered by ${n} hours rules, expected 1`);
  }
}

/** One row per calendar day, Sunday first — what the contact page table renders. */
export const hoursByDay: readonly { day: Weekday; display: string }[] = WEEKDAYS.map((day) => {
  const rule = hoursRules.find((r) => r.days.includes(day));
  if (!rule) throw new Error(`business.ts: no hours rule covers ${day}`);
  return { day, display: rule.display };
});

/** Compact one-line summary for tight spots. Both rules appear; Saturday is never lost. */
export const hoursLine = hoursRules.map((r) => `${r.label}: ${r.display}`).join(' \u00b7 ');

const addressQuery = encodeURIComponent(nap.address);

/** The address is real, so it is embedded by address query rather than by coordinates. */
export const mapEmbedSrc = (zoom: number) =>
  `https://www.google.com/maps?q=${addressQuery}&z=${zoom}&output=embed`;

export const directionsHref = `https://www.google.com/maps/dir/?api=1&destination=${addressQuery}`;

export const business = {
  name: nap.business,
  tagline: nap.tagline,
  phone: nap.phone,
  phoneHref: nap.phoneHref,
  email: nap.email,
  emailHref: nap.emailHref,
  addressLine: nap.address,
  serviceArea: nap.serviceArea,
  serviceAreaList: nap.serviceAreaList,
  address,
  hoursRules,
  hoursByDay,
  hoursLine,
} as const;

export default business;
