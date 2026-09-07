// lib/routes.ts — the five routes, declared ONCE. The header nav, the footer nav and
// app/sitemap.ts all read this array, so a nav entry can never point at a route that
// does not exist and the sitemap can never list one that was removed.
export const ROUTES = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/contact', label: 'Contact' },
  { href: '/privacy', label: 'Privacy' },
] as const;

export type RouteHref = (typeof ROUTES)[number]['href'];
