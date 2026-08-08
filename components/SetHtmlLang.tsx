"use client";

import { useEffect } from "react";

/**
 * Sets <html lang> for the current route. The root layout renders lang="en"
 * by default; the ID page uses this to correct it for screen readers.
 */
export function SetHtmlLang({ lang }: { lang: string }) {
  useEffect(() => {
    const prev = document.documentElement.lang;
    document.documentElement.lang = lang;
    return () => {
      document.documentElement.lang = prev;
    };
  }, [lang]);

  return null;
}
