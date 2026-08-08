export type Locale = "en" | "id";

export type RitualSlug = "melukat" | "cleansing" | "blessing";

export interface RitualType {
  slug: RitualSlug;
  /** Short label used inside the WhatsApp template, e.g. "Melukat" */
  waLabel: string;
  name: string;
  tagline: string;
  description: string;
  duration: string;
}

export interface ExperienceStep {
  title: string;
  description: string;
}

export interface WhyPoint {
  title: string;
  description: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  origin: string;
  /** Optional path to a portrait in /public. */
  image?: string;
}

export interface FaqItem {
  question: string;
  answer: string;
}

export interface PracticalItem {
  label: string;
  description: string;
}

export interface GalleryItem {
  /** Descriptive, SEO-friendly caption. Doubles as image alt text. */
  alt: string;
  /** Optional path to a photo in /public; when absent a tasteful frame renders. */
  image?: string;
}

export interface NavLink {
  label: string;
  href: string;
}

export interface Content {
  locale: Locale;
  nav: {
    links: NavLink[];
    waButton: string;
  };
  hero: {
    eyebrow: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    secondaryCta: string;
    microTrust: string[];
  };
  trustBar: string[];
  whatIs: {
    heading: string;
    paragraphs: string[];
  };
  experience: {
    heading: string;
    intro: string;
    steps: ExperienceStep[];
    duration: string;
  };
  rituals: {
    heading: string;
    intro: string;
    cardCta: string;
    items: RitualType[];
  };
  why: {
    heading: string;
    intro: string;
    points: WhyPoint[];
  };
  testimonials: {
    heading: string;
    intro: string;
    items: Testimonial[];
  };
  guide: {
    heading: string;
    paragraphs: string[];
    badge: string;
  };
  practical: {
    heading: string;
    intro: string;
    items: PracticalItem[];
  };
  gallery: {
    heading: string;
    intro: string;
    items: GalleryItem[];
  };
  faq: {
    heading: string;
    intro: string;
    items: FaqItem[];
  };
  bookingCta: {
    heading: string;
    body: string;
    button: string;
  };
  footer: {
    greeting: string;
    tagline: string;
    contactHeading: string;
    followHeading: string;
    locationHeading: string;
    location: string;
    mapsLabel: string;
    rights: string;
  };
  dialog: {
    title: string;
    description: string;
    ritualLabel: string;
    participantsLabel: string;
    dateLabel: string;
    dateHint: string;
    nameLabel: string;
    namePlaceholder: string;
    submit: string;
    footnote: string;
  };
  langToggle: {
    label: string;
    en: string;
    id: string;
  };
}
