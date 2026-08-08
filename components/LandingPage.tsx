import { BookingProvider } from "./BookingProvider";
import { Navbar } from "./Navbar";
import { FloatingCta } from "./FloatingCta";
import { JsonLd } from "./JsonLd";
import { Hero } from "./sections/Hero";
import { TrustBar } from "./sections/TrustBar";
import { WhatIsMelukat } from "./sections/WhatIsMelukat";
import { TheExperience } from "./sections/TheExperience";
import { Rituals } from "./sections/Rituals";
import { WhyTaksu } from "./sections/WhyTaksu";
import { Testimonials } from "./sections/Testimonials";
import { MeetYourGuide } from "./sections/MeetYourGuide";
import { PracticalInfo } from "./sections/PracticalInfo";
import { Gallery } from "./sections/Gallery";
import { Faq } from "./sections/Faq";
import { BookingCta } from "./sections/BookingCta";
import { Footer } from "./sections/Footer";
import type { Locale } from "@/lib/types";

/** The full single-page landing, composed in the conversion-oriented order. */
export function LandingPage({ locale }: { locale: Locale }) {
  return (
    <BookingProvider locale={locale}>
      <JsonLd locale={locale} />
      <Navbar locale={locale} />
      <main>
        <Hero locale={locale} />
        <TrustBar locale={locale} />
        <WhatIsMelukat locale={locale} />
        <TheExperience locale={locale} />
        <Rituals locale={locale} />
        <WhyTaksu locale={locale} />
        <Testimonials locale={locale} />
        <MeetYourGuide locale={locale} />
        <PracticalInfo locale={locale} />
        <Gallery locale={locale} />
        <Faq locale={locale} />
        <BookingCta locale={locale} />
      </main>
      <Footer locale={locale} />
      <FloatingCta locale={locale} />
    </BookingProvider>
  );
}
