import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Melukat Bali | Authentic Water Purification Ritual with a Balinese Priest — Taksu Healing",
  description:
    "Experience Melukat, a sacred Balinese-Hindu water purification ritual guided by a traditional priest near Ubud. Cleansing & blessing ceremonies for body, mind & spirit. Request on WhatsApp.",
  alternates: {
    canonical: `${site.url}/`,
    languages: {
      en: `${site.url}/`,
      id: `${site.url}/id`,
      "x-default": `${site.url}/`,
    },
  },
  openGraph: {
    title:
      "Melukat Bali — Authentic Balinese Purification Ritual | Taksu Healing",
    description:
      "A sacred Hindu-Balinese water purification ceremony guided by a traditional priest near Ubud.",
    url: `${site.url}/`,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Melukat Bali — Authentic Balinese Purification Ritual",
    description:
      "A sacred Hindu-Balinese water purification ceremony guided by a traditional priest near Ubud.",
  },
};

export default function Page() {
  return <LandingPage locale="en" />;
}
