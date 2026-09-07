import type { Metadata } from 'next';
import { Outfit, Karla } from 'next/font/google';
import './globals.css';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import MobileCallBar from '@/components/MobileCallBar';
import { localBusinessSchema } from '@/lib/schema';
import { SITE_URL } from '@/lib/business';
import { pageMeta } from '@/content/meta';

// Desert editorial: Outfit is the geometric display face, Karla the body face. Both are
// SIL OFL and self-hosted by next/font at build time, so there is no runtime font request.
const outfit = Outfit({
  subsets: ['latin'],
  weight: ['500', '600', '700'],
  variable: '--font-outfit',
  display: 'swap',
});

const karla = Karla({
  subsets: ['latin'],
  weight: ['400', '500'],
  variable: '--font-karla',
  display: 'swap',
});

// NO title.template. Every route sets its own full title from content/meta.ts; a template
// that appended the brand would serve it twice on pages whose titles already name it.
export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: pageMeta['/'].title,
  description: pageMeta['/'].description,
  alternates: { canonical: '/' },
  icons: { icon: '/favicon.svg' },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${outfit.variable} ${karla.variable}`}>
      <body className="min-h-screen bg-sand pb-16 lg:pb-0">
        {/* LocalBusiness structured data, derived from lib/business.ts. The
            openingHoursSpecification is an array of two rules — Sunday–Friday and the
            shorter Saturday. No aggregateRating and no review: there are none to report. */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
        />
        <SiteHeader />
        {children}
        <SiteFooter />
        <MobileCallBar />
      </body>
    </html>
  );
}
