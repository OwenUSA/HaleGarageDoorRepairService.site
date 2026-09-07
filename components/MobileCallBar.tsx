// MobileCallBar — sticky tel: bar below the lg breakpoint, where the header's own call
// button is hidden. body carries pb-16 lg:pb-0 so it never covers footer content.
//
// Shares the header call button's --color-ink-inverse on a terracotta-ink fill (5.2:1).
// The brighter --color-terracotta tops out at 4.03:1 against pure white, so 17px
// semibold label text cannot reach 4.5:1 on it however light the ink is made.
import { Phone } from 'lucide-react';
import { business } from '@/lib/business';

export default function MobileCallBar() {
  return (
    <a
      href={business.phoneHref}
      className="on-accent fixed inset-x-0 bottom-0 z-50 flex items-center justify-center gap-2 bg-terracotta-ink py-4 font-display text-base font-semibold text-ink-inverse lg:hidden"
    >
      <Phone size={18} aria-hidden="true" />
      Call {business.phone}
    </a>
  );
}
