"use client";

import { ArrowDown } from "lucide-react";
import { BookingButton } from "@/components/BookingButton";
import { Reveal } from "@/components/Reveal";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";

export function Hero({ locale }: { locale: Locale }) {
  const t = content[locale].hero;

  return (
    <section className="relative overflow-hidden">
      {/* Layered earthy background (photo can later replace this gradient) */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-sage/25 via-cream to-cream" />
      <WaterMotif />

      <div className="container flex min-h-[92svh] flex-col items-center justify-center pb-20 pt-32 text-center sm:pt-36">
        <Reveal>
          <p className="section-eyebrow">
            <span className="h-px w-6 bg-gold/70" />
            {t.eyebrow}
          </p>
        </Reveal>

        <Reveal delay={80}>
          <h1 className="mt-6 max-w-4xl text-balance font-serif text-4xl font-medium leading-[1.08] text-forest sm:text-6xl md:text-7xl">
            {t.headline}
          </h1>
        </Reveal>

        <Reveal delay={160}>
          <p className="prose-lead mt-6 max-w-2xl text-pretty">
            {t.subheadline}
          </p>
        </Reveal>

        <Reveal delay={240}>
          <div className="mt-9 flex flex-col items-center gap-3 sm:flex-row sm:gap-4">
            <BookingButton variant="primary" size="lg" className="w-full sm:w-auto">
              {t.primaryCta}
            </BookingButton>
            <a
              href="#what-is-melukat"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium text-forest transition hover:text-clay"
            >
              {t.secondaryCta}
              <ArrowDown className="h-4 w-4" />
            </a>
          </div>
        </Reveal>

        <Reveal delay={320}>
          <ul className="mt-12 flex flex-col items-center gap-2 text-sm text-ink/60 sm:flex-row sm:gap-5">
            {t.microTrust.map((item, i) => (
              <li key={i} className="flex items-center gap-2">
                {i > 0 && (
                  <span className="hidden h-1 w-1 rounded-full bg-gold/60 sm:inline-block" />
                )}
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}

/** Subtle concentric ripple motif evoking a sacred spring. */
function WaterMotif() {
  return (
    <div
      aria-hidden
      className="pointer-events-none absolute inset-x-0 bottom-0 -z-10 flex justify-center opacity-[0.5]"
    >
      <svg
        viewBox="0 0 1200 400"
        className="h-[400px] w-full max-w-6xl text-sage"
        fill="none"
        stroke="currentColor"
        strokeWidth="1"
      >
        {Array.from({ length: 7 }).map((_, i) => (
          <ellipse
            key={i}
            cx="600"
            cy="400"
            rx={120 + i * 90}
            ry={40 + i * 26}
            className={i % 2 === 0 ? "text-sage/40" : "text-gold/25"}
          />
        ))}
      </svg>
    </div>
  );
}
