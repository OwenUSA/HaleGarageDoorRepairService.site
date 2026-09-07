// Generated so it can never disagree with lib/business.ts's SITE_URL.
// Hale's business facts are real, so this ALLOWS indexing. There is no pre-launch
// Disallow guard on this site and no docs/PRE-LAUNCH.md to flip.
import type { MetadataRoute } from 'next';
import { SITE_URL } from '@/lib/business';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: '*', allow: '/' }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}

// output: "export" cannot infer this metadata route is static; say so explicitly.
export const dynamic = 'force-static';
