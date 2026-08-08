import { Quote } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";

export function Testimonials({ locale }: { locale: Locale }) {
  const t = content[locale].testimonials;

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

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {t.items.map((item, i) => (
            <Reveal
              as="article"
              key={i}
              delay={i * 90}
              className="flex flex-col rounded-2xl border border-gold/20 bg-cream p-7 shadow-sm"
            >
              <Quote className="h-7 w-7 text-gold/60" />
              <blockquote className="mt-4 flex-1 text-lg leading-relaxed text-ink/85">
                “{item.quote}”
              </blockquote>
              <figcaption className="mt-6 flex items-center gap-3 border-t border-sage/25 pt-5">
                <span className="flex h-10 w-10 items-center justify-center rounded-full bg-sage/25 font-serif text-lg text-forest">
                  {item.name.charAt(0)}
                </span>
                <span className="text-sm">
                  <span className="block font-medium text-ink">
                    {item.name}
                  </span>
                  <span className="block text-ink/55">{item.origin}</span>
                </span>
              </figcaption>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
