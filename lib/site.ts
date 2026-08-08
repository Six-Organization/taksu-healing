/**
 * Central place for real-world values the owner should fill in.
 * Everything marked TODO is a placeholder — swap with authentic data before launch.
 */
export const site = {
  name: "Taksu Healing",
  url: "https://taksuhealing.com", // TODO: set your production domain

  // Booking / contact ------------------------------------------------------
  // Business WhatsApp number, international format WITHOUT "+" or spaces.
  waNumber: "6281237765878", // from the Taksu Healing logo (+62 812-3776-5878)
  email: "hello@taksuhealing.com", // TODO
  instagram: "https://instagram.com/taksuhealing", // TODO
  // Google Maps place / directions link:
  mapsUrl: "https://maps.google.com/?q=Ubud,+Bali", // TODO: pin your meeting point

  // Location shown in the footer ------------------------------------------
  locationLine: "Ubud, Bali, Indonesia",

  // Analytics --------------------------------------------------------------
  // Optional Google Analytics 4 Measurement ID (e.g. "G-XXXXXXXXXX").
  // Leave empty to disable analytics entirely.
  gaMeasurementId: "",
};

export type Site = typeof site;
