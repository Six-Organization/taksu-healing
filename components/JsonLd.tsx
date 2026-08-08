import { content } from "@/lib/content";
import { site } from "@/lib/site";
import type { Locale } from "@/lib/types";

/**
 * LocalBusiness + FAQPage structured data.
 * FAQ markup can surface rich results in Google and lift CTR.
 * NOTE: aggregateRating is intentionally omitted — only add it with real reviews.
 */
export function JsonLd({ locale }: { locale: Locale }) {
  const t = content[locale];

  const localBusiness = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    description:
      "Authentic Balinese-Hindu Melukat water purification, cleansing, and blessing ceremonies guided by a traditional priest near Ubud, Bali.",
    areaServed: "Ubud, Bali, Indonesia",
    url: site.url,
    image: `${site.url}/opengraph-image`,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Ubud",
      addressRegion: "Bali",
      addressCountry: "ID",
    },
    // telephone: "+62XXXXXXXXXX", // TODO: add real business phone
    sameAs: [site.instagram],
  };

  const faqPage = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: t.faq.items.map((item) => ({
      "@type": "Question",
      name: item.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: item.answer,
      },
    })),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPage) }}
      />
    </>
  );
}
