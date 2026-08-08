import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/MediaFrame";
import { Badge } from "@/components/ui/badge";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";

export function MeetYourGuide({ locale }: { locale: Locale }) {
  const t = content[locale].guide;

  return (
    <section id="guide" className="scroll-mt-24 bg-sage/10 py-20 sm:py-28">
      <div className="container grid items-center gap-12 lg:grid-cols-[0.85fr_1fr] lg:gap-16">
        <Reveal>
          <MediaFrame
            aspect="aspect-[4/5]"
            alt="Portrait of the traditional Balinese pemangku (priest) who guides the melukat purification ceremony near Ubud"
            sizes="(max-width: 1024px) 100vw, 40vw"
            className="mx-auto max-w-sm lg:max-w-none"
          />
        </Reveal>

        <Reveal delay={120}>
          <Badge>{t.badge}</Badge>
          <h2 className="mt-4 font-serif text-3xl font-medium text-forest sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
          <div className="mt-6 space-y-4 text-lg leading-relaxed text-ink/80">
            {t.paragraphs.map((p, i) => (
              <p
                key={i}
                className={
                  i === t.paragraphs.length - 1
                    ? "font-serif text-xl text-forest"
                    : undefined
                }
              >
                {p}
              </p>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
