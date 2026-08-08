/**
 * Fire the primary conversion event when a WhatsApp booking link is opened.
 * Safe to call even when no analytics provider is configured.
 */
export function trackWhatsAppClick(payload: {
  ritual: string;
  participants: number;
  source: string; // e.g. "dialog" | "navbar" | "hero" | "ritual-card"
  locale: string;
}) {
  if (typeof window === "undefined") return;

  // Google Analytics 4 (gtag) — no-op if gtag isn't loaded.
  const w = window as unknown as {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
  };

  try {
    w.gtag?.("event", "whatsapp_request", {
      ritual: payload.ritual,
      participants: payload.participants,
      source: payload.source,
      locale: payload.locale,
    });
    // Also push to dataLayer for GTM setups.
    w.dataLayer?.push({ event: "whatsapp_request", ...payload });
  } catch {
    /* swallow — analytics must never break the booking flow */
  }
}
