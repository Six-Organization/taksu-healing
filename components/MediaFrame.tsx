import Image from "next/image";
import { ImageIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface MediaFrameProps {
  /** Path to a photo in /public. When absent, a tasteful placeholder renders. */
  src?: string;
  /** Descriptive, SEO-friendly alt text (required). */
  alt: string;
  className?: string;
  /** Tailwind aspect-ratio utility, e.g. "aspect-[4/5]". */
  aspect?: string;
  priority?: boolean;
  /** next/image sizes hint for responsive loading. */
  sizes?: string;
  rounded?: string;
}

/**
 * Renders a real photo via next/image when `src` is provided; otherwise a
 * calm branded placeholder so the layout looks intentional while photos are
 * still being gathered. Swap in real image paths in lib/content.ts later.
 */
export function MediaFrame({
  src,
  alt,
  className,
  aspect = "aspect-[4/3]",
  priority = false,
  sizes = "(max-width: 768px) 100vw, 33vw",
  rounded = "rounded-2xl",
}: MediaFrameProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden bg-sage/15 ring-1 ring-inset ring-gold/15",
        aspect,
        rounded,
        className,
      )}
    >
      {src ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          priority={priority}
          className="object-cover"
        />
      ) : (
        <Placeholder alt={alt} />
      )}
    </div>
  );
}

function Placeholder({ alt }: { alt: string }) {
  return (
    <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 bg-gradient-to-br from-sage/25 via-cream/40 to-forest/15 p-6 text-center">
      <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/40 bg-cream/70 text-forest">
        <ImageIcon className="h-5 w-5" aria-hidden />
      </span>
      <p className="max-w-[22ch] text-xs leading-relaxed text-forest/70">
        {alt}
      </p>
    </div>
  );
}
