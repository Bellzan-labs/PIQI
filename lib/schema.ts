import { SITE } from "@/lib/constants";

const ORG_ID = `${SITE.url}/#organization`;
const SITE_ID = `${SITE.url}/#website`;

export function buildOrganization(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": ORG_ID,
    name: SITE.name,
    url: SITE.url,
    logo: `${SITE.url}${SITE.logo}`,
    foundingDate: String(SITE.founded),
    areaServed: SITE.areaServed,
    description: SITE.description,
    contactPoint: [
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        email: SITE.email,
        telephone: SITE.phonePrimary,
        areaServed: SITE.areaServed,
        availableLanguage: ["en"]
      },
      {
        "@type": "ContactPoint",
        contactType: "customer service",
        telephone: SITE.phoneSecondary,
        areaServed: SITE.areaServed,
        availableLanguage: ["en"]
      }
    ],
    address: {
      "@type": "PostalAddress",
      postOfficeBoxNumber: "751615",
      addressLocality: "Gardenview",
      postalCode: "2047",
      addressCountry: "ZA"
    },
    sameAs: []
  };
}

export function buildWebSite(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": SITE_ID,
    url: SITE.url,
    name: SITE.name,
    publisher: { "@id": ORG_ID }
  };
}

export function buildLocalBusiness(): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "@id": `${SITE.url}/#localbusiness`,
    name: SITE.name,
    url: SITE.url,
    image: `${SITE.url}${SITE.logo}`,
    email: SITE.email,
    telephone: SITE.phonePrimary,
    areaServed: SITE.areaServed,
    address: {
      "@type": "PostalAddress",
      postOfficeBoxNumber: "751615",
      addressLocality: "Gardenview",
      postalCode: "2047",
      addressCountry: "ZA"
    },
    parentOrganization: { "@id": ORG_ID }
  };
}

export type BreadcrumbItem = { name: string; url: string };

export function buildBreadcrumbs(items: BreadcrumbItem[]): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url
    }))
  };
}

export function buildService(args: {
  name: string;
  description: string;
  slug: string;
}): Record<string, unknown> {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: args.name,
    description: args.description,
    serviceType: args.name,
    url: `${SITE.url}/consulting/${args.slug}`,
    provider: { "@id": ORG_ID },
    areaServed: SITE.areaServed
  };
}

export type WebPageType = "WebPage" | "AboutPage" | "ContactPage" | "CollectionPage";

export function buildWebPage(args: {
  title: string;
  description: string;
  url: string;
  type?: WebPageType;
  hasPart?: readonly string[];
}): Record<string, unknown> {
  const base: Record<string, unknown> = {
    "@context": "https://schema.org",
    "@type": args.type ?? "WebPage",
    name: args.title,
    description: args.description,
    url: args.url,
    isPartOf: { "@id": SITE_ID },
    about: { "@id": ORG_ID }
  };
  if (args.hasPart && args.hasPart.length > 0) {
    base.hasPart = args.hasPart.map((partUrl) => ({
      "@type": "WebPage",
      "@id": partUrl
    }));
  }
  return base;
}
