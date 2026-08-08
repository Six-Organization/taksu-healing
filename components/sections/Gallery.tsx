import { Reveal } from "@/components/Reveal";
import { MediaFrame } from "@/components/MediaFrame";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";

// Varied aspect ratios create a gentle masonry rhythm.
const aspects = [
  "aspect-[4/5]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/5]",
  "aspect-[4/3]",
];

export function Gallery({ locale }: { locale: Locale }) {
  const t = content[locale].gallery;

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

        <div className="mt-14 columns-1 gap-5 sm:columns-2 lg:columns-3">
          {t.items.map((item, i) => (
            <Reveal key={i} delay={(i % 3) * 90} className="mb-5 break-inside-avoid">
              <MediaFrame
                src={item.image}
                alt={item.alt}
                aspect={aspects[i % aspects.length]}
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
