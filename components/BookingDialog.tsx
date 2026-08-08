"use client";

import * as React from "react";
import { Minus, Plus, MessageCircle } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { Select } from "@/components/ui/select";
import { Input } from "@/components/ui/input";
import { content } from "@/lib/content";
import { buildWhatsAppLink } from "@/lib/whatsapp";
import { trackWhatsAppClick } from "@/lib/analytics";
import type { Locale, RitualSlug } from "@/lib/types";

interface BookingDialogProps {
  locale: Locale;
  open: boolean;
  onOpenChange: (open: boolean) => void;
  /** Pre-select a ritual when opened from a specific ritual card. */
  initialRitual?: RitualSlug;
}

const MAX_PARTICIPANTS = 12;

export function BookingDialog({
  locale,
  open,
  onOpenChange,
  initialRitual = "melukat",
}: BookingDialogProps) {
  const t = content[locale];
  const rituals = t.rituals.items;

  const [ritual, setRitual] = React.useState<RitualSlug>(initialRitual);
  const [participants, setParticipants] = React.useState(1);
  const [date, setDate] = React.useState("");
  const [name, setName] = React.useState("");

  // Sync the selected ritual whenever the dialog is (re)opened from a card.
  React.useEffect(() => {
    if (open) setRitual(initialRitual);
  }, [open, initialRitual]);

  const selected = rituals.find((r) => r.slug === ritual) ?? rituals[0];

  const handleSubmit = () => {
    const url = buildWhatsAppLink({
      ritual: selected.waLabel,
      participants,
      date: date || undefined,
      name: name || undefined,
      locale,
    });
    trackWhatsAppClick({
      ritual: selected.waLabel,
      participants,
      source: "dialog",
      locale,
    });
    window.open(url, "_blank", "noopener,noreferrer");
    onOpenChange(false);
  };

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>{t.dialog.title}</DialogTitle>
          <DialogDescription>{t.dialog.description}</DialogDescription>
        </DialogHeader>

        <div className="flex flex-col gap-5">
          {/* Ritual */}
          <div className="flex flex-col gap-2">
            <label
              htmlFor="ritual"
              className="text-sm font-medium text-ink/80"
            >
              {t.dialog.ritualLabel}
            </label>
            <Select
              id="ritual"
              value={ritual}
              onChange={(e) => setRitual(e.target.value as RitualSlug)}
            >
              {rituals.map((r) => (
                <option key={r.slug} value={r.slug}>
                  {r.name} · {r.tagline}
                </option>
              ))}
            </Select>
          </div>

          {/* Participants stepper */}
          <div className="flex flex-col gap-2">
            <label className="text-sm font-medium text-ink/80">
              {t.dialog.participantsLabel}
            </label>
            <div className="flex items-center gap-3">
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Decrease participants"
                disabled={participants <= 1}
                onClick={() => setParticipants((p) => Math.max(1, p - 1))}
              >
                <Minus />
              </Button>
              <span
                className="min-w-10 text-center font-serif text-2xl text-forest"
                aria-live="polite"
              >
                {participants}
              </span>
              <Button
                type="button"
                variant="outline"
                size="icon"
                aria-label="Increase participants"
                disabled={participants >= MAX_PARTICIPANTS}
                onClick={() =>
                  setParticipants((p) => Math.min(MAX_PARTICIPANTS, p + 1))
                }
              >
                <Plus />
              </Button>
            </div>
          </div>

          {/* Date (optional) */}
          <div className="flex flex-col gap-2">
            <label htmlFor="date" className="text-sm font-medium text-ink/80">
              {t.dialog.dateLabel}{" "}
              <span className="font-normal text-ink/40">
                · {t.dialog.dateHint}
              </span>
            </label>
            <Input
              id="date"
              type="date"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
          </div>

          {/* Name (optional) */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-ink/80">
              {t.dialog.nameLabel}
            </label>
            <Input
              id="name"
              type="text"
              value={name}
              placeholder={t.dialog.namePlaceholder}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <Button
            type="button"
            variant="primary"
            size="lg"
            className="mt-1 w-full"
            onClick={handleSubmit}
          >
            <MessageCircle />
            {t.dialog.submit}
          </Button>
          <p className="text-center text-xs text-ink/50">
            {t.dialog.footnote}
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
}
