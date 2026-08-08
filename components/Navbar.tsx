"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { LanguageToggle } from "./LanguageToggle";
import { useBooking } from "./BookingProvider";
import { content } from "@/lib/content";
import { quickWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import { cn } from "@/lib/utils";
import type { Locale } from "@/lib/types";

export function Navbar({ locale }: { locale: Locale }) {
  const t = content[locale];
  const { openBooking } = useBooking();
  const [scrolled, setScrolled] = React.useState(false);
  const [menuOpen, setMenuOpen] = React.useState(false);

  React.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const homeHref = locale === "id" ? "/id" : "/";

  const solid = scrolled || menuOpen;

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-40 transition-all duration-300",
        solid
          ? "border-b border-sage/25 bg-cream/90 backdrop-blur-md"
          : "border-b border-transparent bg-transparent",
      )}
    >
      <nav className="container flex h-16 items-center justify-between gap-4 md:h-20">
        {/* Logo */}
        <Link
          href={homeHref}
          className="flex items-center gap-2.5"
          aria-label="Taksu Healing — home"
        >
          <Image
            src="/logo-mark.png"
            alt="Taksu Healing lotus emblem"
            width={38}
            height={44}
            priority
            className="h-10 w-auto"
          />
          <span className="font-serif text-lg font-medium tracking-wide text-forest">
            Taksu Healing
          </span>
        </Link>

        {/* Center links (desktop) */}
        <div className="hidden items-center gap-7 md:flex">
          {t.nav.links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-ink/70 transition-colors hover:text-forest"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Right actions (desktop) */}
        <div className="hidden items-center gap-3 md:flex">
          <LanguageToggle locale={locale} />
          <a
            href={quickWhatsAppLink(locale)}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() =>
              trackWhatsAppClick({
                ritual: "quick",
                participants: 1,
                source: "navbar",
                locale,
              })
            }
          >
            <Button variant="forest" size="sm">
              <MessageCircle />
              {t.nav.waButton}
            </Button>
          </a>
        </div>

        {/* Mobile controls */}
        <div className="flex items-center gap-2 md:hidden">
          <LanguageToggle locale={locale} />
          <button
            type="button"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
            className="rounded-full p-2 text-forest transition hover:bg-forest/5"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="border-t border-sage/25 bg-cream/95 backdrop-blur-md md:hidden">
          <div className="container flex flex-col gap-1 py-4">
            {t.nav.links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="rounded-lg px-2 py-3 text-base font-medium text-ink/80 transition hover:bg-forest/5 hover:text-forest"
              >
                {link.label}
              </a>
            ))}
            <Button
              variant="primary"
              className="mt-3 w-full"
              onClick={() => {
                setMenuOpen(false);
                openBooking();
              }}
            >
              {t.hero.primaryCta}
            </Button>
          </div>
        </div>
      )}
    </header>
  );
}
