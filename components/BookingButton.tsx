"use client";

import { Button, type ButtonProps } from "@/components/ui/button";
import { useBooking } from "./BookingProvider";
import type { RitualSlug } from "@/lib/types";

interface BookingButtonProps extends ButtonProps {
  ritual?: RitualSlug;
}

/** A Button that opens the shared BookingDialog, optionally pre-selecting a ritual. */
export function BookingButton({
  ritual,
  children,
  ...props
}: BookingButtonProps) {
  const { openBooking } = useBooking();
  return (
    <Button type="button" onClick={() => openBooking(ritual)} {...props}>
      {children}
    </Button>
  );
}
