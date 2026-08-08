import { Clock } from "lucide-react";
import { Reveal } from "@/components/Reveal";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";

export function TheExperience({ locale }: { locale: Locale }) {
  const t = content[locale].experience;

  return (
    <section className="bg-sage/10 py-20 sm:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium text-forest sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
          <div className="gold-rule mt-5" />
          <p className="prose-lead mt-5 text-ink/75">{t.intro}</p>
        </Reveal>

        <ol className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.steps.map((step, i) => (
            <Reveal
              as="li"
              key={i}
              delay={i * 90}
              className="relative flex flex-col rounded-2xl border border-gold/20 bg-cream p-6 shadow-sm"
            >
              <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-forest/5 font-serif text-xl text-clay">
                {i + 1}
              </span>
              <h3 className="mt-5 font-serif text-xl font-medium text-forest">
                {step.title}
              </h3>
              <p className="mt-2 text-[15px] leading-relaxed text-ink/75">
                {step.description}
              </p>
            </Reveal>
          ))}
        </ol>

        <Reveal className="mt-10 flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-sage/40 bg-cream px-4 py-2 text-sm text-forest">
            <Clock className="h-4 w-4 text-clay" />
            {t.duration}
          </span>
        </Reveal>
      </div>
    </section>
  );
}
