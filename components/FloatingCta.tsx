"use client";

import * as React from "react";
import { MessageCircle } from "lucide-react";
import { useBooking } from "./BookingProvider";
import { content } from "@/lib/content";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/types";

/** A gentle floating request button that appears after the hero. */
export function FloatingCta({ locale }: { locale: Locale }) {
  const { openBooking } = useBooking();
  const [show, setShow] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 700);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const label = content[locale].hero.primaryCta;

  return (
    <button
      type="button"
      onClick={() => openBooking()}
      aria-label={label}
      className={cn(
        "fixed bottom-5 right-5 z-30 inline-flex items-center gap-2 rounded-full bg-clay px-5 py-3.5 text-sm font-medium text-cream shadow-lg transition-all duration-300 hover:bg-clay/90 hover:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-forest focus-visible:ring-offset-2",
        show
          ? "translate-y-0 opacity-100"
          : "pointer-events-none translate-y-4 opacity-0",
      )}
    >
      <MessageCircle className="h-5 w-5" />
      <span className="hidden sm:inline">{label}</span>
    </button>
  );
}
