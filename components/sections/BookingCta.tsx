import { Reveal } from "@/components/Reveal";
import { BookingButton } from "@/components/BookingButton";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";

export function BookingCta({ locale }: { locale: Locale }) {
  const t = content[locale].bookingCta;

  return (
    <section className="relative overflow-hidden bg-clay py-20 text-cream sm:py-28">
      {/* soft ripple accents */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "radial-gradient(circle at 50% 120%, rgba(247,243,236,0.6), transparent 60%)",
        }}
      />
      <div className="container relative text-center">
        <Reveal className="mx-auto max-w-2xl">
          <h2 className="font-serif text-3xl font-medium sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-relaxed text-cream/85">
            {t.body}
          </p>
          <BookingButton variant="forest" size="lg" className="mt-8">
            {t.button}
          </BookingButton>
        </Reveal>
      </div>
    </section>
  );
}
