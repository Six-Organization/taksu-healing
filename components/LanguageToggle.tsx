"use client";

import Link from "next/link";
import { cn } from "@/lib/utils";
import { content } from "@/lib/content";
import type { Locale } from "@/lib/types";

export function LanguageToggle({
  locale,
  className,
}: {
  locale: Locale;
  className?: string;
}) {
  const t = content[locale].langToggle;

  return (
    <div
      className={cn(
        "inline-flex items-center rounded-full border border-sage/50 bg-cream/70 p-0.5 text-xs font-medium backdrop-blur",
        className,
      )}
      role="group"
      aria-label={t.label}
    >
      <Link
        href="/"
        hrefLang="en"
        aria-current={locale === "en" ? "true" : undefined}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          locale === "en"
            ? "bg-forest text-cream"
            : "text-ink/60 hover:text-ink",
        )}
      >
        {t.en}
      </Link>
      <Link
        href="/id"
        hrefLang="id"
        aria-current={locale === "id" ? "true" : undefined}
        className={cn(
          "rounded-full px-3 py-1 transition-colors",
          locale === "id"
            ? "bg-forest text-cream"
            : "text-ink/60 hover:text-ink",
        )}
      >
        {t.id}
      </Link>
    </div>
  );
}
