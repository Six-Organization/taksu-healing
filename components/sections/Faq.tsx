import { Reveal } from "@/components/Reveal";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";

export function Faq({ locale }: { locale: Locale }) {
  const t = content[locale].faq;

  return (
    <section id="faq" className="scroll-mt-24 py-20 sm:py-28">
      <div className="container">
        <Reveal className="mx-auto max-w-2xl text-center">
          <h2 className="font-serif text-3xl font-medium text-forest sm:text-4xl md:text-5xl">
            {t.heading}
          </h2>
          <div className="gold-rule mt-5" />
          <p className="prose-lead mt-5 text-ink/75">{t.intro}</p>
        </Reveal>

        <Reveal className="mx-auto mt-12 max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {t.items.map((item, i) => (
              <AccordionItem key={i} value={`item-${i}`}>
                <AccordionTrigger>{item.question}</AccordionTrigger>
                <AccordionContent>{item.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>
    </section>
  );
}
