"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

/**
 * A lightweight, accessible styled native <select>.
 * Native keeps mobile UX excellent (system wheel picker) and avoids extra JS.
 */
export interface SelectProps
  extends React.SelectHTMLAttributes<HTMLSelectElement> {}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, children, ...props }, ref) => (
    <div className="relative">
      <select
        ref={ref}
        className={cn(
          "h-11 w-full appearance-none rounded-xl border border-sage/50 bg-cream px-4 pr-10 text-sm text-ink outline-none transition focus:border-forest focus:ring-2 focus:ring-forest/20",
          className,
        )}
        {...props}
      >
        {children}
      </select>
      <ChevronDown className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-ink/50" />
    </div>
  ),
);
Select.displayName = "Select";

export { Select };
