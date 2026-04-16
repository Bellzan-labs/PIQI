import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/global/Header";
import { Footer } from "@/components/global/Footer";
import { Breadcrumbs } from "@/components/global/Breadcrumbs";
import { JsonLd } from "@/components/global/JsonLd";
import { buildOrganization, buildWebSite } from "@/lib/schema";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  metadataBase: new URL(SITE.url),
  title: {
    default: "PIQI Group | Consulting, Property, Fashion, Yachts, Auto, Coaching",
    template: "%s | PIQI Group"
  },
  description: SITE.description,
  manifest: "/site.webmanifest",
  openGraph: {
    title: "PIQI Group",
    description: SITE.description,
    url: SITE.url,
    siteName: SITE.name,
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "PIQI Group",
    description: SITE.description
  }
};

export const viewport: Viewport = {
  themeColor: "#bb181d",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" data-theme="dark">
      <body>
        <a href="#main-content" className="skip-link">
          Skip to main content
        </a>
        <JsonLd data={[buildOrganization(), buildWebSite()]} />
        <Header />
        <main id="main-content" className="page-shell">
          <Breadcrumbs />
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
