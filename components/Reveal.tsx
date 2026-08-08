"use client";

import * as React from "react";
import { cn } from "@/lib/utils";

interface RevealProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Delay in ms before the element fades in once in view. */
  delay?: number;
  as?: "div" | "section" | "li" | "article";
}

/**
 * Fades + lifts its children into view on scroll using IntersectionObserver.
 * Respects prefers-reduced-motion (handled in globals.css).
 */
export function Reveal({
  children,
  className,
  delay = 0,
  as = "div",
  ...props
}: RevealProps) {
  const ref = React.useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = React.useState(false);

  React.useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -40px 0px" },
    );

    observer.observe(node);
    return () => observer.disconnect();
  }, []);

  const Comp = as as React.ElementType;

  return (
    <Comp
      ref={ref}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      className={cn("reveal", visible && "is-visible", className)}
      {...props}
    >
      {children}
    </Comp>
  );
}
