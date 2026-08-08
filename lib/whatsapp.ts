import { site } from "./site";
import type { Locale } from "./types";

export interface BookingInput {
  ritual: string; // "Melukat" | "Cleansing" | "Blessing"
  participants: number;
  date?: string;
  name?: string;
  locale: Locale;
}

/**
 * Build a wa.me deep link with a pre-filled, reverent booking template.
 */
export function buildWhatsAppLink(b: BookingInput): string {
  const t =
    b.locale === "id"
      ? `Om Swastiastu 🙏 Saya ingin memohon ritual ${b.ritual} di Taksu Healing.\n` +
        `Jumlah peserta: ${b.participants}\n` +
        (b.date ? `Tanggal yang diinginkan: ${b.date}\n` : "") +
        (b.name ? `Nama: ${b.name}\n` : "") +
        `Mohon informasi ketersediaannya. Terima kasih.`
      : `Om Swastiastu 🙏 I would like to request a ${b.ritual} ceremony at Taksu Healing.\n` +
        `Number of participants: ${b.participants}\n` +
        (b.date ? `Preferred date: ${b.date}\n` : "") +
        (b.name ? `Name: ${b.name}\n` : "") +
        `Please let me know your availability. Thank you.`;

  return `https://wa.me/${site.waNumber}?text=${encodeURIComponent(t)}`;
}

/**
 * A quick, no-dialog WhatsApp link (default 1 participant) for navbar/footer.
 */
export function quickWhatsAppLink(locale: Locale): string {
  const t =
    locale === "id"
      ? `Om Swastiastu 🙏 Saya ingin bertanya tentang ritual di Taksu Healing.`
      : `Om Swastiastu 🙏 I'd like to ask about the ceremonies at Taksu Healing.`;
  return `https://wa.me/${site.waNumber}?text=${encodeURIComponent(t)}`;
}
