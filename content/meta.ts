// content/meta.ts — one title and one description per route, written once so no two
// pages can share either. No title.template in layout.tsx appends the brand a second
// time; each title below is the FULL title as it appears in the tab.
import type { RouteHref } from '@/lib/routes';

export const pageMeta: Record<RouteHref, { title: string; description: string }> = {
  '/': {
    title: 'Hale Garage Door Repair Service | Fountain Hills, AZ',
    description:
      'Garage door repair in Fountain Hills and north-east Maricopa County: broken springs, opener faults, frayed cables, off-track doors and sun-damaged panels. Call (602) 899-2451.',
  },
  '/about': {
    title: 'About Hale Garage Door Repair Service | Fountain Hills',
    description:
      'Who works on your door, how a Hale visit runs from the phone call to the balance test, and why desert heat is the thing we plan every repair around.',
  },
  '/services': {
    title: 'Garage Door Services in Fountain Hills | Hale Garage Door Repair Service',
    description:
      'Spring replacement, opener repair and install, cable and drum work, off-track realignment, panel replacement and weather-seal tune-ups across Fountain Hills and Scottsdale.',
  },
  '/contact': {
    title: 'Contact Hale Garage Door Repair Service | 16815 E Shea Blvd',
    description:
      'Call (602) 899-2451 or write to us. Open Sunday to Friday 7:00 AM to 8:00 PM and Saturday 8:00 AM to 5:00 PM, at 16815 E Shea Blvd, Fountain Hills, AZ 85268.',
  },
  '/privacy': {
    title: 'Privacy Policy | Hale Garage Door Repair Service',
    description:
      'What Hale Garage Door Repair Service does and does not collect from visitors to this website, and how to reach us about it.',
  },
};
