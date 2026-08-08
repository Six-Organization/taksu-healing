"use client";

import Image from "next/image";
import { MessageCircle, Mail, Instagram, MapPin } from "lucide-react";
import { LanguageToggle } from "@/components/LanguageToggle";
import { content } from "@/lib/content";
import { site } from "@/lib/site";
import { quickWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import type { Locale } from "@/lib/types";

export function Footer({ locale }: { locale: Locale }) {
  const t = content[locale].footer;
  const year = 2026; // static build year; update on redeploy

  return (
    <footer className="border-t border-sage/25 bg-forest text-cream">
      <div className="container py-16">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <Image
              src="/logo-mark.png"
              alt="Taksu Healing lotus emblem"
              width={56}
              height={65}
              className="mb-4 h-16 w-auto"
            />
            <p className="font-serif text-2xl text-gold">{t.greeting}</p>
            <p className="mt-3 max-w-sm text-sm leading-relaxed text-cream/70">
              {t.tagline}
            </p>
            <div className="mt-6">
              <LanguageToggle locale={locale} className="border-cream/20 bg-cream/5" />
            </div>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              {t.contactHeading}
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={quickWhatsAppLink(locale)}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() =>
                    trackWhatsAppClick({
                      ritual: "quick",
                      participants: 1,
                      source: "footer",
                      locale,
                    })
                  }
                  className="inline-flex items-center gap-2 text-cream/80 transition hover:text-gold"
                >
                  <MessageCircle className="h-4 w-4" />
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="inline-flex items-center gap-2 text-cream/80 transition hover:text-gold"
                >
                  <Mail className="h-4 w-4" />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-cream/80 transition hover:text-gold"
                >
                  <Instagram className="h-4 w-4" />
                  Instagram
                </a>
              </li>
            </ul>
          </div>

          {/* Location */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gold">
              {t.locationHeading}
            </h3>
            <p className="mt-4 flex items-start gap-2 text-sm text-cream/80">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0" />
              {t.location}
            </p>
            <a
              href={site.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 inline-block text-sm text-gold underline-offset-4 hover:underline"
            >
              {t.mapsLabel} →
            </a>
          </div>
        </div>

        <div className="mt-12 border-t border-cream/15 pt-6 text-center text-xs text-cream/50">
          © {year} {site.name}. {t.rights}
        </div>
      </div>
    </footer>
  );
}
