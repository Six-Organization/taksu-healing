import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";

export function TrustBar({ locale }: { locale: Locale }) {
  const items = content[locale].trustBar;

  return (
    <section className="border-y border-sage/25 bg-forest text-cream">
      <div className="container py-5">
        <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-center text-sm text-cream/85 sm:gap-x-8">
          {items.map((item, i) => (
            <li key={i} className="flex items-center gap-6 sm:gap-8">
              {i > 0 && (
                <span
                  aria-hidden
                  className="h-1 w-1 rounded-full bg-gold/70"
                />
              )}
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
