// content/nap.ts — the ONE place the business facts are typed. Everything else in the
// codebase (lib/business.ts, lib/schema.ts, the footer, the contact page) derives from
// this object. Nothing below is a placeholder: the phone rings, the address is real, the
// mailbox exists. There is no 555-01XX number and no pre-launch robots guard here.
//
// HOURS ARE AN ARRAY OF RULES, NOT A SINGLE BLOCK. Hale closes earlier on Saturday than
// on the other six days. A single opens/closes pair would render Saturday wrong in the
// footer, the contact table and the JSON-LD at once, and nothing would visibly fail.

export const WEEKDAYS = [
  'Sunday',
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
] as const;

export type Weekday = (typeof WEEKDAYS)[number];

/** One opening rule: the days it covers and the 12-hour clock times as written. */
export type HoursSource = {
  readonly days: readonly Weekday[];
  readonly label: string;
  readonly opens: string;
  readonly closes: string;
};

export const nap = {
  business: 'Hale Garage Door Repair Service',
  tagline:
    'Garage door repair for Fountain Hills and the north-east Valley — springs, openers, cables and sun-beaten panels.',
  phone: '(602) 899-2451',
  phoneHref: 'tel:+16028992451',
  email: 'contact@halegaragedoorrepairservice.site',
  emailHref: 'mailto:contact@halegaragedoorrepairservice.site',
  address: '16815 E Shea Blvd, Fountain Hills, AZ 85268',
  serviceArea:
    'Fountain Hills, Scottsdale, Rio Verde, Cave Creek and the rest of north-east Maricopa County, Arizona',
  serviceAreaList: [
    'Fountain Hills',
    'Scottsdale',
    'Rio Verde',
    'Cave Creek',
    'Carefree',
    'North-east Maricopa County',
  ],
  hours: [
    {
      days: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
      label: 'Sunday – Friday',
      opens: '7:00 AM',
      closes: '8:00 PM',
    },
    {
      days: ['Saturday'],
      label: 'Saturday',
      opens: '8:00 AM',
      closes: '5:00 PM',
    },
  ] as const satisfies readonly HoursSource[],
} as const;
