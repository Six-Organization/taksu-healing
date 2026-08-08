import { Droplets, Wind, Sparkles, ArrowRight, Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/MediaFrame";
import { BookingButton } from "@/components/BookingButton";
import { content } from "@/lib/content";
import type { Locale, RitualSlug } from "@/lib/types";

const icons: Record<RitualSlug, typeof Droplets> = {
  melukat: Droplets,
  cleansing: Wind,
  blessing: Sparkles,
};

export function Rituals({ locale }: { locale: Locale }) {
  const t = content[locale].rituals;

  return (
    <section id="rituals" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium text-forest sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
          <div className="gold-rule mt-5" />
          <p className="prose-lead mt-5 text-ink/75">{t.intro}</p>
        </Reveal>

        <div className="mt-14 grid gap-7 md:grid-cols-3">
          {t.items.map((ritual, i) => {
            const Icon = icons[ritual.slug];
            return (
              <Reveal
                as="article"
                key={ritual.slug}
                delay={i * 90}
                className="group flex flex-col overflow-hidden rounded-2xl border border-gold/20 bg-cream shadow-sm transition-shadow hover:shadow-md"
              >
                <MediaFrame
                  aspect="aspect-[3/2]"
                  alt={`${ritual.name} — ${ritual.tagline} ceremony at a sacred spring near Ubud, Bali`}
                  rounded="rounded-none"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="flex flex-1 flex-col p-6">
                  <div className="flex items-center gap-3">
                    <span className="flex h-10 w-10 items-center justify-center rounded-full border border-gold/40 bg-forest/5 text-clay">
                      <Icon className="h-5 w-5" />
                    </span>
                    <div>
                      <h3 className="font-serif text-xl font-medium text-forest">
                        {ritual.name}
                      </h3>
                      <p className="text-xs uppercase tracking-wider text-clay">
                        {ritual.tagline}
                      </p>
                    </div>
                  </div>

                  <p className="mt-4 flex-1 text-[15px] leading-relaxed text-ink/75">
                    {ritual.description}
                  </p>

                  <div className="mt-5 flex items-center gap-2 text-sm text-ink/60">
                    <Clock className="h-4 w-4 text-sage" />
                    {ritual.duration}
                  </div>

                  <BookingButton
                    ritual={ritual.slug}
                    variant="outline"
                    className="mt-5 w-full"
                  >
                    {t.cardCta}
                    <ArrowRight className="transition-transform group-hover:translate-x-0.5" />
                  </BookingButton>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
