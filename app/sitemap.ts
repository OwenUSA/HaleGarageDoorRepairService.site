// The sitemap generates from lib/routes.ts so an entry can never drift from a real route.
import type { MetadataRoute } from 'next';
import { ROUTES } from '@/lib/routes';
import { SITE_URL } from '@/lib/business';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();
  return ROUTES.map((r) => ({
    // trailingSlash: true, so every served URL and every canonical tag ends in "/".
    // Match that exactly here — a sitemap entry that disagrees with the canonical for the
    // same page is precisely the drift a generated sitemap exists to prevent.
    url: new URL(r.href === '/' ? '/' : `${r.href}/`, SITE_URL).toString(),
    lastModified: now,
    changeFrequency: r.href === '/' ? ('weekly' as const) : ('monthly' as const),
    priority: r.href === '/' ? 1 : 0.7,
  }));
}

export const dynamic = 'force-static';
