import type { Metadata } from "next";
import Script from "next/script";
import { Cormorant_Garamond, Inter } from "next/font/google";
import { site } from "@/lib/site";
import "./globals.css";

const serif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-serif",
  display: "swap",
});

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default:
      "Melukat Bali | Authentic Water Purification Ritual with a Balinese Priest — Taksu Healing",
    template: "%s — Taksu Healing",
  },
  description:
    "Experience Melukat, a sacred Balinese-Hindu water purification ritual guided by a traditional priest near Ubud. Cleansing & blessing ceremonies for body, mind & spirit. Request on WhatsApp.",
  applicationName: site.name,
  authors: [{ name: site.name }],
  icons: {
    icon: [{ url: "/favicon.svg", type: "image/svg+xml" }],
    apple: [{ url: "/logo-mark-256.png" }],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const ga = site.gaMeasurementId;

  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        {children}

        {ga ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${ga}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${ga}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
