// MobileCallBar — sticky tel: bar below the lg breakpoint, where the header's own call
// button is hidden. body carries pb-16 lg:pb-0 so it never covers footer content.
import { Phone } from 'lucide-react';
import { business } from '@/lib/business';

export default function MobileCallBar() {
  return (
    <a
      href={business.phoneHref}
      className="fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-terracotta py-4 font-display text-base font-semibold text-sand-pale lg:hidden"
    >
      <Phone size={18} aria-hidden="true" />
      Call {business.phone}
    </a>
  );
}
