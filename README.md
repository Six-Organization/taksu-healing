# Taksu Healing — Landing Page

Bilingual (EN/ID) landing page for authentic Balinese-Hindu **Melukat** water
purification, cleansing, and blessing ceremonies near Ubud. Built with
Next.js (App Router) + TypeScript + Tailwind CSS. Booking happens via a
WhatsApp deep link — no backend required.

## Stack

- **Next.js 14** (App Router, SSG) — deploys to Vercel with zero config
- **TypeScript** + **Tailwind CSS**
- **Radix UI** primitives (dialog, accordion) styled shadcn-style
- **lucide-react** icons
- Fonts via `next/font`: Cormorant Garamond (serif) + Inter (sans)

## Getting started

```bash
npm install
npm run dev
```

Open http://localhost:3000 (EN) and http://localhost:3000/id (ID).

```bash
npm run build   # production build
npm start       # serve the production build
```

## ⚙️ Before you launch — fill in real data

Everything below is a placeholder. Search the codebase for `TODO` too.

1. **`lib/site.ts`** — the single config file:
   - `url` — your production domain
   - `waNumber` — business WhatsApp number, international format **without** `+`
     (e.g. `6281234567890`)
   - `email`, `instagram`, `mapsUrl`
   - `gaMeasurementId` — optional Google Analytics 4 ID (leave empty to disable)
2. **`lib/content.ts`** — all copy for both languages. Replace bracketed
   placeholders: `[500+]` ceremony counts, and the guide bio (`[Name]`,
   `[village]`, `[X]` years, personal story). Swap the testimonials for **real**
   ones — never invent reviews.
3. **Photos** — add images to `public/` and set the `image` field on gallery /
   media items in `lib/content.ts`. Use descriptive filenames like
   `melukat-ceremony-ubud.jpg`. The `MediaFrame` component shows a tasteful
   placeholder until a real `src` is provided.

## Booking flow

Any CTA opens `BookingDialog` (ritual · participants · optional date · optional
name) and builds a pre-filled `wa.me` link via `lib/whatsapp.ts`. A WhatsApp
conversion event fires through `lib/analytics.ts` (`whatsapp_request`) — wired to
GA4 / GTM if configured.

## SEO

- Per-locale `metadata` + hreflang alternates (`app/page.tsx`, `app/id/page.tsx`)
- `LocalBusiness` + `FAQPage` JSON-LD (`components/JsonLd.tsx`)
- `app/sitemap.ts`, `app/robots.ts`
- Auto-generated OG image (`app/opengraph-image.tsx`)

## Deploy to Vercel

1. Push this repo to GitHub/GitLab.
2. Import into Vercel — it auto-detects Next.js; no settings needed.
3. Add your custom domain, then update `site.url` and redeploy.
4. Submit the sitemap in Google Search Console and set up a Google Business
   Profile with a Maps pin (often the biggest traffic source for local
   experiences).

---

_Om Swastiastu 🙏_
