import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/MediaFrame";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";

export function WhatIsMelukat({ locale }: { locale: Locale }) {
  const t = content[locale].whatIs;

  return (
    <section id="what-is-melukat" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
        <Reveal className="order-2 lg:order-1">
          <p className="section-eyebrow">
            <span className="h-px w-6 bg-gold/70" />
            Melukat
          </p>
          <h2 className="mt-4 font-serif text-3xl font-medium text-forest sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-ink/80">
            {t.paragraphs.map((p, i) => (
              <p key={i} className={i === t.paragraphs.length - 1 ? "text-forest" : undefined}>
                {p}
              </p>
            ))}
          </div>
        </Reveal>

        <Reveal delay={120} className="order-1 lg:order-2">
          <MediaFrame
            aspect="aspect-[4/5]"
            alt="Holy spring water flowing over a guest during a melukat purification ritual near Ubud, Bali"
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="mx-auto max-w-md lg:max-w-none"
          />
        </Reveal>
      </div>
    </section>
  );
}
