import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import Analytics from "@/components/Analytics";
import FloatingContact from "@/components/FloatingContact";
import JsonLd from "@/components/JsonLd";
import SiteEffects from "@/components/SiteEffects";
import { CLINIC, SITE_URL } from "@/lib/site";
import "./globals.css";

// Fonts are self-hosted (no request to Google at runtime): faster, private, works offline.
// Cormorant Garamond & Manrope, SIL Open Font License 1.1 (see app/fonts/OFL-LICENSE.txt).
const cormorant = localFont({
  src: [
    { path: "./fonts/cormorant-garamond-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/cormorant-garamond-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-serif",
  display: "swap",
});
// Italic is used only for one highlighted word, so it is loaded lazily (not preloaded).
const cormorantItalic = localFont({
  src: [{ path: "./fonts/cormorant-garamond-latin-600-italic.woff2", weight: "600", style: "italic" }],
  variable: "--font-serif-italic",
  display: "swap",
  preload: false,
});
const manrope = localFont({
  src: [
    { path: "./fonts/manrope-latin-400-normal.woff2", weight: "400", style: "normal" },
    { path: "./fonts/manrope-latin-600-normal.woff2", weight: "600", style: "normal" },
    { path: "./fonts/manrope-latin-700-normal.woff2", weight: "700", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Dr. Suraaj Clinic & Advanced Wellness Center | Wakad, Pune",
    template: "%s",
  },
  robots: { index: true, follow: true, "max-image-preview": "large" } as Metadata["robots"],
  applicationName: "Dr. Suraaj Clinic",
  openGraph: {
    siteName: "Dr. Suraaj Clinic & Advanced Wellness Center",
    locale: "en_IN",
    type: "website",
    images: [{ url: "/images/og-image.jpg", width: 1200, height: 630, alt: "Dr. Suraaj Clinic & Advanced Wellness Center, Wakad, Pune" }],
  },
  // Google Search Console: set NEXT_PUBLIC_GSC_VERIFICATION to the code from the "HTML tag" method
  // (or verify via DNS and leave it empty).
  verification: process.env.NEXT_PUBLIC_GSC_VERIFICATION ? { google: process.env.NEXT_PUBLIC_GSC_VERIFICATION } : undefined,
  twitter: { card: "summary_large_image" },
  other: { "geo.region": "IN-MH", "geo.placename": "Wakad, Pune" },
};

export const viewport: Viewport = { width: "device-width", initialScale: 1, themeColor: "#1b4535" };

// Site-wide structured data: tells Google the site's name (shown in search results) and owner.
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: `${SITE_URL}/`,
  name: CLINIC.name,
  alternateName: ["Dr. Suraaj Clinic", "Dr Suraj Clinic Wakad", "Dr. Suraaj Wellness"],
  inLanguage: "en-IN",
  publisher: { "@id": `${SITE_URL}/#clinic` },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${cormorant.variable} ${cormorantItalic.variable} ${manrope.variable}`}>
      <body>
        {/* If JavaScript is off, show everything that normally animates in. */}
        <noscript>
          <style>{`.reveal,.stagger>*,.creds .cred{opacity:1!important;transform:none!important}.hl{background-size:100% 38%!important}`}</style>
        </noscript>
        <JsonLd data={websiteSchema} />
        <SiteEffects />
        {children}
        <FloatingContact />
        <Analytics />
      </body>
    </html>
  );
}
