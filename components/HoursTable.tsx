// HoursTable — one row per calendar day, built from lib/business.ts's hoursByDay, which
// is itself derived from the hours RULES. Saturday therefore shows its own 8:00 AM –
// 5:00 PM rather than inheriting the Sunday–Friday block, and it is marked so a reader
// scanning the table cannot miss that it differs.
import { business } from '@/lib/business';

const SHORTER_DAY = 'Saturday';

export default function HoursTable() {
  return (
    <div className="overflow-hidden rounded-card border border-line bg-paper">
      <table className="w-full border-collapse text-left">
        <caption className="sr-only">
          Opening hours for {business.name}. Saturday closes earlier than the rest of the week.
        </caption>
        <thead>
          <tr className="bg-sand-deep/60">
            <th scope="col" className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-bronze-soft">
              Day
            </th>
            <th scope="col" className="px-5 py-3 font-display text-xs font-semibold uppercase tracking-[0.16em] text-bronze-soft">
              Open
            </th>
          </tr>
        </thead>
        <tbody>
          {business.hoursByDay.map((row) => {
            const shorter = row.day === SHORTER_DAY;
            return (
              <tr key={row.day} className="border-t border-line">
                <th
                  scope="row"
                  className={`px-5 py-3.5 font-display text-base font-medium ${
                    shorter ? 'text-terracotta' : 'text-bronze'
                  }`}
                >
                  {row.day}
                </th>
                <td className={`px-5 py-3.5 text-base ${shorter ? 'font-semibold text-terracotta' : 'text-bronze-soft'}`}>
                  {row.display}
                  {shorter ? <span className="ml-2 text-xs font-normal uppercase tracking-wide">shorter day</span> : null}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <p className="border-t border-line px-5 py-4 text-sm leading-relaxed text-bronze-soft">
        Saturday runs 8:00 AM – 5:00 PM. Every other day, Sunday through Friday, the phone
        is answered from 7:00 AM to 8:00 PM.
      </p>
    </div>
  );
}
