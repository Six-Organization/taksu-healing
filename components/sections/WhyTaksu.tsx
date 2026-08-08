import { UserCheck, Waves, HandHeart, Flame } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";

const icons = [UserCheck, Waves, HandHeart, Flame];

export function WhyTaksu({ locale }: { locale: Locale }) {
  const t = content[locale].why;

  return (
    <section className="bg-forest py-20 text-cream sm:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
          <div className="mx-auto mt-5 h-px w-16 bg-gold/60" />
          <p className="mt-5 text-lg leading-relaxed text-cream/80">
            {t.intro}
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.points.map((point, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal
                key={i}
                delay={i * 90}
                className="rounded-2xl border border-cream/10 bg-cream/[0.04] p-6 backdrop-blur-sm"
              >
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-cream/5 text-gold">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="mt-5 font-serif text-xl font-medium text-cream">
                  {point.title}
                </h3>
                <p className="mt-2 text-[15px] leading-relaxed text-cream/70">
                  {point.description}
                </p>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
