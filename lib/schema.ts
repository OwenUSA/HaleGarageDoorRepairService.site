// lib/schema.ts — LocalBusiness JSON-LD, derived entirely from lib/business.ts.
//
// NO aggregateRating and NO review. Hale has no reviews to publish; inventing them is
// both a lie to the reader and a Google structured-data penalty.
//
// openingHoursSpecification is an ARRAY, one entry per hours rule. It is generated from
// hoursRules, so the Saturday 08:00–17:00 entry cannot be dropped by an edit that only
// touches the visible copy.
import { SITE_URL, business, address, hoursRules } from '@/lib/business';
import { nap } from '@/content/nap';

export const localBusinessSchema = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  '@id': `${SITE_URL}/#business`,
  name: business.name,
  description: business.tagline,
  url: SITE_URL,
  telephone: business.phone,
  email: business.email,
  image: `${SITE_URL}/images/wide-07.webp`,
  address: {
    '@type': 'PostalAddress',
    streetAddress: address.street,
    addressLocality: address.locality,
    addressRegion: address.region,
    postalCode: address.postalCode,
    addressCountry: 'US',
  },
  openingHoursSpecification: hoursRules.map((rule) => ({
    '@type': 'OpeningHoursSpecification',
    dayOfWeek: rule.days.map((d) => `https://schema.org/${d}`),
    opens: rule.opens,
    closes: rule.closes,
  })),
  areaServed: nap.serviceAreaList.map((name) => ({
    '@type': 'AdministrativeArea',
    name,
  })),
} as const;
