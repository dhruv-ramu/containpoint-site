/**
 * Dynamic date helpers so the site always shows dates relative to "today"
 * when viewed. All dates adapt as time passes.
 */

export const MONTHS = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
const MONTHS_FULL = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function addDays(d: Date, n: number): Date {
  const out = new Date(d);
  out.setDate(out.getDate() + n);
  return out;
}

function addMonths(d: Date, n: number): Date {
  const out = new Date(d);
  out.setMonth(out.getMonth() + n);
  return out;
}

/** Format as "Mar 15" */
export function fmtShort(d: Date): string {
  return `${MONTHS[d.getMonth()]} ${d.getDate()}`;
}

/** Format as "March 23, 2026" */
export function fmtLong(d: Date): string {
  return `${MONTHS_FULL[d.getMonth()]} ${d.getDate()}, ${d.getFullYear()}`;
}

/** Format as "Apr 03, 2025" (month day, year) */
export function fmtShortWithYear(d: Date): string {
  const day = String(d.getDate()).padStart(2, "0");
  return `${MONTHS[d.getMonth()]} ${day}, ${d.getFullYear()}`;
}

/** Today plus N days */
export function daysFromNow(n: number): Date {
  return addDays(new Date(), n);
}

/** Today minus N days */
export function daysAgo(n: number): Date {
  return addDays(new Date(), -n);
}

/** Today plus N months */
export function monthsFromNow(n: number): Date {
  return addMonths(new Date(), n);
}

/** Today minus N months */
export function monthsAgo(n: number): Date {
  return addMonths(new Date(), -n);
}

/** Last 6 calendar months for trend charts: [{ month: "Oct", ... }, ...] */
export function last6MonthsTrend(): { month: string; scheduled: number; completed: number }[] {
  const now = new Date();
  return [5, 4, 3, 2, 1, 0].map((i) => {
    const d = addMonths(now, -i);
    return {
      month: MONTHS[d.getMonth()],
      scheduled: 14,
      completed: i === 0 ? 12 : i === 1 ? 13 : i === 2 ? 14 : i === 3 ? 13 : i === 4 ? 14 : 13,
    };
  });
}

/** Current date as long format for generated-at timestamps */
export function generatedDateLong(): string {
  return fmtLong(new Date());
}
