"use client";

import * as React from "react";
import { BookingDialog } from "./BookingDialog";
import type { Locale, RitualSlug } from "@/lib/types";

interface BookingContextValue {
  /** Open the booking dialog, optionally pre-selecting a ritual. */
  openBooking: (ritual?: RitualSlug) => void;
}

const BookingContext = React.createContext<BookingContextValue | null>(null);

export function useBooking(): BookingContextValue {
  const ctx = React.useContext(BookingContext);
  if (!ctx) {
    throw new Error("useBooking must be used within a BookingProvider");
  }
  return ctx;
}

export function BookingProvider({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const [open, setOpen] = React.useState(false);
  const [ritual, setRitual] = React.useState<RitualSlug>("melukat");

  const openBooking = React.useCallback((r?: RitualSlug) => {
    if (r) setRitual(r);
    setOpen(true);
  }, []);

  const value = React.useMemo(() => ({ openBooking }), [openBooking]);

  return (
    <BookingContext.Provider value={value}>
      {children}
      <BookingDialog
        locale={locale}
        open={open}
        onOpenChange={setOpen}
        initialRitual={ritual}
      />
    </BookingContext.Provider>
  );
}
