import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { site } from "@/lib/site";
import { expertise } from "@/lib/data";

const sans = localFont({
  src: [
    { path: "./fonts/Inter-Regular.woff2", weight: "400", style: "normal" },
    { path: "./fonts/Inter-Medium.woff2", weight: "500", style: "normal" },
    { path: "./fonts/Inter-SemiBold.woff2", weight: "600", style: "normal" },
  ],
  variable: "--font-sans",
  display: "swap",
});

const display = localFont({
  src: [
    { path: "./fonts/InterDisplay-SemiBold.woff2", weight: "600", style: "normal" },
    { path: "./fonts/InterDisplay-Bold.woff2", weight: "700", style: "normal" },
    { path: "./fonts/InterDisplay-ExtraBold.woff2", weight: "800", style: "normal" },
  ],
  variable: "--font-display",
  display: "swap",
});

const pageTitle = `${site.name} — Senior SEO Specialist & Social Media Manager`;

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: pageTitle, template: `%s | ${site.name}` },
  description: site.description,
  applicationName: `${site.name} — Portfolio`,
  authors: [{ name: site.name }],
  creator: site.name,
  keywords: [
    "Syed Afnan Ahmed",
    "Senior SEO Specialist",
    "Technical SEO",
    "GEO",
    "Generative Engine Optimization",
    "AEO",
    "Answer Engine Optimization",
    "LLM optimization",
    "Social Media Manager",
    "Digital Marketing Specialist",
    "Islamabad",
    "Pakistan",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: "/",
    title: pageTitle,
    description: site.description,
    siteName: site.name,
    locale: "en_US",
  },
  twitter: { card: "summary_large_image", title: pageTitle, description: site.description },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#09090b",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: site.name,
  jobTitle: "Senior SEO Specialist",
  description: site.description,
  url: site.url,
  email: site.email,
  telephone: site.phone,
  address: { "@type": "PostalAddress", addressLocality: "Islamabad", addressCountry: "PK" },
  worksFor: { "@type": "Organization", name: "Comtanix" },
  knowsAbout: expertise.map((e) => e.title),
  sameAs: site.links.map((l) => l.href),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${sans.variable} ${display.variable}`}>
      <body>
        <a
          href="#main"
          className="sr-only z-[100] rounded-md bg-brand px-4 py-2 font-semibold text-ink focus:not-sr-only focus:fixed focus:left-4 focus:top-4"
        >
          Skip to content
        </a>
        {children}
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </body>
    </html>
  );
}
