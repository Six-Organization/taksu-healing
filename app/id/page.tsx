import type { Metadata } from "next";
import { LandingPage } from "@/components/LandingPage";
import { SetHtmlLang } from "@/components/SetHtmlLang";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title:
    "Melukat Bali | Ritual Penyucian Diri Sakral Dipandu Pemangku — Taksu Healing",
  description:
    "Rasakan Melukat, ritual penyucian air Hindu-Bali yang dipandu pemangku tradisional dekat Ubud. Upacara pembersihan & pemberkatan untuk tubuh, pikiran & jiwa. Mohon jadwal via WhatsApp.",
  alternates: {
    canonical: `${site.url}/id`,
    languages: {
      en: `${site.url}/`,
      id: `${site.url}/id`,
      "x-default": `${site.url}/`,
    },
  },
  openGraph: {
    title:
      "Melukat Bali — Ritual Penyucian Diri Sakral Khas Bali | Taksu Healing",
    description:
      "Upacara penyucian air Hindu-Bali yang dipandu pemangku tradisional dekat Ubud.",
    url: `${site.url}/id`,
    siteName: site.name,
    locale: "id_ID",
    type: "website",
  },
};

export default function Page() {
  return (
    <>
      <SetHtmlLang lang="id" />
      <LandingPage locale="id" />
    </>
  );
}
