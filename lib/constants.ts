export const SITE = {
  name: "PIQI Group",
  shortName: "PIQI",
  url: "https://piqigroup.com",
  email: "info@piqi.co.za",
  phonePrimary: "+27 (0)10 007 3358",
  phoneSecondary: "+27 (0)86 671 7958",
  phonePrimaryE164: "+27100073358",
  phoneSecondaryE164: "+27866717958",
  poBox: "PO Box 751615, Gardenview 2047",
  founded: 2016,
  areaServed: "International",
  country: "South Africa",
  description:
    "PIQI Group is a multi-vertical South African business serving clients internationally across consulting, property management, fashion, yacht charters, auto, and coaching.",
  logo: "/brand/logo/new-piqi-logo-white.png"
} as const;

export type NavItem = { label: string; href: string };

export const GROUP_NAV: readonly NavItem[] = [
  { label: "Consulting", href: "/consulting" },
  { label: "Property", href: "/property" },
  { label: "Fashion", href: "/fashion" },
  { label: "Yachts", href: "/yachts" },
  { label: "Auto", href: "/auto" },
  { label: "Coaching", href: "/coaching" },
  { label: "About", href: "/about" },
  { label: "Contact", href: "/contact" }
] as const;

export const FOOTER_LINKS = {
  group: [
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
    { label: "Privacy", href: "/privacy" },
    { label: "Terms", href: "/terms" }
  ],
  verticals: [
    { label: "Consulting", href: "/consulting" },
    { label: "Property Management", href: "/property" },
    { label: "Downtown Fashion", href: "/fashion" },
    { label: "Yacht Charters", href: "/yachts" },
    { label: "Piqi Auto", href: "/auto" },
    { label: "Coaching", href: "/coaching" }
  ]
} as const;
