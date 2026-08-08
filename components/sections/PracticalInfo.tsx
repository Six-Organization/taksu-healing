import { Shirt, Users, Info, Car, Sunrise } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";

const icons = [Shirt, Users, Info, Car, Sunrise];

export function PracticalInfo({ locale }: { locale: Locale }) {
  const t = content[locale].practical;

  return (
    <section className="py-20 sm:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium text-forest sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
          <div className="gold-rule mt-5" />
          <p className="prose-lead mt-5 text-ink/75">{t.intro}</p>
        </Reveal>

        <div className="mx-auto mt-14 grid max-w-4xl gap-4 sm:grid-cols-2">
          {t.items.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal
                key={i}
                delay={i * 70}
                className="flex gap-4 rounded-2xl border border-gold/20 bg-cream p-5 shadow-sm"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-gold/40 bg-forest/5 text-clay">
                  <Icon className="h-5 w-5" />
                </span>
                <div>
                  <h3 className="font-medium text-forest">{item.label}</h3>
                  <p className="mt-1 text-[15px] leading-relaxed text-ink/75">
                    {item.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
