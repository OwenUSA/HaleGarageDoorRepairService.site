// FaqAccordion — native <details>/<summary>, so it works with no JavaScript at all and
// the answers are in the static HTML for anything that reads the page without running it.
import { Plus } from 'lucide-react';
import { faqs } from '@/content/services';

export default function FaqAccordion() {
  return (
    <div className="mt-12 flex flex-col divide-y divide-line border-y border-line">
      {faqs.map((item) => (
        <details key={item.q} className="group py-2">
          <summary className="flex items-start justify-between gap-6 py-5">
            <h3 className="font-display text-lg font-medium text-bronze lg:text-xl">{item.q}</h3>
            <span
              aria-hidden="true"
              className="mt-1 grid h-8 w-8 shrink-0 place-items-center rounded-chip bg-sand-deep text-terracotta transition-transform group-open:rotate-45"
            >
              <Plus size={18} />
            </span>
          </summary>
          <p className="measure pb-6 text-base leading-relaxed text-bronze-soft">{item.a}</p>
        </details>
      ))}
    </div>
  );
}
