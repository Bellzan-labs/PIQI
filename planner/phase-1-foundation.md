# Phase 1: Foundation (PIQI Group)

> Audit and standardize the existing Next.js 14 scaffold, lock design tokens, build group-shell chrome, define JSON-LD.
> Split into **Phase 1A** (audit + design system + chrome) and **Phase 1B** (layouts, sections, JSON-LD builders).

**Reference docs:** [audience](reference/audience.md) | [branding-tone](reference/branding-tone.md) | [mood-board](reference/mood-board.md) | [services](reference/services.md)

> **Framing:** The repo already has Next.js 14, React 18, TypeScript, Tailwind, and a working homepage at `app/page.tsx`. Phase 1 here is **"audit and standardize the existing scaffold"**, not "create from scratch". Do not touch `app/` or `components/` during planner work — implementation happens later.

---

# Phase 1A: Audit + Design System + Core Chrome

> After 1A: group nav routes to placeholder vertical pages, tokens extracted, dev server clean.

---

## 1. Scaffold Audit

The following are already in place (verify, don't re-create):
- [x] Next.js 14 App Router (`app/layout.tsx`, `app/page.tsx`)
- [x] React 18, TypeScript strict
- [x] Plain CSS with CSS custom properties in `app/globals.css` (**no Tailwind** — don't add it; the token system works)
- [x] Vercel deployment (built-in, no adapter needed — Next.js on Vercel is native)
- [x] `public/brand/` asset tree (logo, icons, brand images, video, animations)
- [x] Existing components: `ContactForm`, `LottiePanel`, `RevolverHeading`, `ScrambleText`, `ThemeToggle` (in `components/` — reuse, don't recreate)

Gaps to fill:
- [ ] Confirm `next.config.mjs` has `trailingSlash: false`
- [ ] `.env.example` with `RESEND_API_KEY`, `NEXT_PUBLIC_GA4_ID`, `NEXT_PUBLIC_COOKIE_CONSENT_ID`, `NEXT_PUBLIC_SHOW_DRAFTS`
- [ ] `.nvmrc` pinned to Node 22
- [ ] `robots.txt` in `public/`:
  ```
  User-agent: *
  Allow: /
  Disallow: /api/
  Sitemap: https://piqigroup.com/sitemap.xml
  ```
- [ ] Favicon set (favicon.ico, apple-touch-icon.png, favicon-32x32.png, favicon-16x16.png) derived from PIQI logo
- [ ] `public/site.webmanifest`:
  ```json
  {
    "name": "PIQI Group",
    "short_name": "PIQI",
    "icons": [
      { "src": "/favicon-32x32.png", "sizes": "32x32", "type": "image/png" },
      { "src": "/apple-touch-icon.png", "sizes": "180x180", "type": "image/png" }
    ],
    "theme_color": "#TBD",
    "background_color": "#TBD",
    "display": "standalone"
  }
  ```

---

## 2. Developer Tooling

- [ ] ESLint (`next lint`) + Prettier with the project's style
- [ ] `package.json` scripts:
  ```json
  {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "check": "tsc --noEmit",
    "lint": "next lint",
    "format": "prettier --write ."
  }
  ```
- [ ] GitHub Actions CI (`.github/workflows/ci.yml`):
  ```yaml
  on: [pull_request]
  jobs:
    build:
      runs-on: ubuntu-latest
      steps:
        - uses: actions/checkout@v4
        - uses: actions/setup-node@v4
          with: { node-version: 22 }
        - run: npm ci
        - run: npm run check
        - run: npm run lint
        - run: npm run build
        - run: node scripts/validate-schema.js  # JSON-LD validation (Phase 1B § 13)
        - run: npx @lhci/cli autorun  # Lighthouse CI, fail if Performance < 90
  ```

> Vercel creates preview deployments per PR branch automatically.

---

## 3. Design System (Tailwind tokens)

The existing `app/globals.css` already defines a working token system. Montserrat (display) + Hind (body). Light + dark themes. Dark is default; white PIQI logo is the precedent.

### Tokens already present in `globals.css` (don't re-invent)
| Token | Value (light) | Value (dark) | Usage |
|-------|---------------|--------------|-------|
| `--bg` | `#ffffff` | `#09070d` | Primary background |
| `--bg-soft` | `#f7f3ee` | `#12101a` | Alternate surface |
| `--surface` | `#ffffff` | `#11101a` | Card surface |
| `--surface-strong` | `#fffdfb` | `#171421` | Elevated surface |
| `--line` | `#e9ddd6` | `rgba(255,255,255,0.09)` | Dividers, borders |
| `--text` | `#1c1b1a` | `#f7f2ec` | Body text |
| `--muted` | `#6d625d` | `#bbb1aa` | Secondary text |
| `--brand` | `#bb181d` | `#bb181d` | Signature red — CTAs, accents |
| `--brand-deep` | `#7e000a` | `#7e000a` | Gradient stops |
| `--brand-navy` | `#1d1624` | `#1d1624` | Supporting accent |
| `--radius-xl / lg / md` | `30 / 22 / 16px` | same | Card radii |
| `--shadow` | `0 24px 60px rgba(56,35,25,0.08)` | `0 24px 60px rgba(0,0,0,0.35)` | Elevation |
| `--container` | `1180px` | same | Max content width |

### Actions for Phase 1A
- [ ] **Self-host fonts** — currently `@font-face` rules in `globals.css` point to `https://piqigroup.com/wp-content/...` (WordPress CDN). Download Montserrat 400/500/700 and Hind 400/500/700 `.woff2` files to `public/fonts/` and rewrite the `@font-face` src URLs.
- [ ] Preload the body 400 and display 700 files in `app/layout.tsx` via `<link rel="preload" as="font" crossOrigin="anonymous">`.
- [ ] Verify `font-display: swap` is on every `@font-face` (already is).
- [ ] Add `:focus-visible` outline rule in `globals.css`: `outline: 2px solid var(--brand); outline-offset: 2px`.
- [ ] Add skip-to-content link styles.
- [ ] Extract reusable CSS (buttons, containers, section rhythm, reveal animations) into logical sections within `globals.css` — don't split into per-component files unless a component truly needs scoped styles (CSS Modules via `.module.css`).

### Layout Principles (carry forward)
- Dark theme primary; white logo mark
- Generous whitespace
- Section rhythm via alternating surfaces
- Keyword color accents in body copy for emphasis (existing pattern)

---

## 4. Folder Structure (Next.js App Router)

```
PIQI/
  .github/workflows/ci.yml
  app/
    layout.tsx                   Root layout — HTML, <head>, Organization + WebSite JSON-LD
    page.tsx                     Homepage (group umbrella)
    about/page.tsx               About (Group)
    contact/page.tsx             Contact
    consulting/
      page.tsx                   Consulting hub
      [service]/page.tsx         5 consulting spokes (dynamic)
    property/page.tsx            Property Management hub
    fashion/page.tsx             Fashion (Downtown Fashion) hub
    yachts/page.tsx              Yacht Charters hub
    auto/page.tsx                Auto (Piqi Auto) hub
    coaching/page.tsx            Coaching hub
    privacy/page.tsx             Privacy
    terms/page.tsx               Terms
    not-found.tsx                Custom 404
    api/
      contact/route.ts           POST — Resend + Zod (Phase 3)
    globals.css                  Tailwind import + @theme tokens (existing)
  components/
    global/                      Header, GroupNav, MobileNav, Footer, SEO, Breadcrumbs
    sections/                    Hero, UVP, VerticalGrid, CTABanner
    ui/                          Button, Card, Container, Input, Textarea, Badge, Tag
    brand/                       Abstract/architectural SVG motifs (group pages only)
    schema/                      JSON-LD renderers
    verticals/                   Per-vertical layout components (one per arm)
  content/
    consulting/                  MDX per sub-service (5 files)
    verticals/                   MDX per vertical hub (6 files: consulting, property, fashion, yachts, auto, coaching)
  lib/
    constants.ts                 Nav, site meta, contact info
    schema.ts                    JSON-LD builders
    utils.ts                     Slug/date helpers
    env.ts                       Zod-validated process.env
  public/
    brand/                       (existing) logo, icons, images, video, animations
    fonts/                       Self-hosted Montserrat + Hind .woff2
    images/og/                   1200x630 OG images
    robots.txt
    site.webmanifest
    favicon.ico
```

> **Notes on Next.js conventions (vs. the Astro template this was derived from):**
> - Pages are `app/[segment]/page.tsx` React Server Components by default.
> - Client interactivity requires `"use client"` at the top of the file.
> - Images: use `next/image` `<Image>` (already in use on the homepage). Raw source images belong under `public/brand/` or a dedicated `public/images/` tree.
> - Layouts are `app/layout.tsx` (root) and optional per-segment `layout.tsx`.
> - `app/not-found.tsx` is the 404.
> - Metadata API (`export const metadata`) replaces a manual `<SEOHead>` component — but JSON-LD still ships via `<script type="application/ld+json">` rendered inside the layout tree.

### Asset rules
- All external links `target="_blank"` must include `rel="noopener noreferrer"`.
- Content images: use `next/image`. Raster sources keep at 2400px max on the longest side; hero video already in place at `/public/brand/video/`.
- OG images MUST be JPEG or PNG (not WebP/AVIF) for social platform compatibility.

---

## 5. Content Data (Next.js equivalent of Astro Content Layer)

Astro-specific detail from the original template replaced with a Next.js-appropriate approach.

Use one of:
- **MDX via `next-mdx-remote`** reading files under `content/` with `gray-matter` for frontmatter, OR
- **Typed TS data files** (simpler for v1 given volume) under `lib/data/`.

For v1, typed TS data files are likely sufficient (11 content entries total). Recommended approach:

- `lib/data/consulting-services.ts` — typed array of 5 sub-services
- `lib/data/verticals.ts` — typed array of 6 verticals (hub copy)
- `lib/data/faqs.ts` — optional FAQ data (Phase 4)

If/when blog ships post-launch, introduce MDX under `content/blog/`.

### Shape (draft — refine in implementation)
```ts
type ConsultingService = {
  slug: string;          // "business-process" | "strategy" | ...
  title: string;
  shortTitle: string;
  description: string;
  heroTagline: string;
  heroDescription: string;
  features: { title: string; description: string }[];
  seoKeywords: string[];
  order: number;
  published: boolean;
};

type Vertical = {
  slug: string;          // "consulting" | "property" | "fashion" | "yachts" | "auto" | "coaching"
  displayName: string;   // Consulting / Property Management / Downtown Fashion / Yacht Charters / Piqi Auto / Coaching
  tagline: string;
  toneAdjectives: string[];   // 2-3 per vertical, from reference/branding-tone.md
  description: string;
  heroImage?: string;
  published: boolean;
};
```

---

## 6. UI Atom Components

In `components/ui/`:

- [ ] **Button** — primary / secondary / ghost. Renders `<a>` (Next.js `<Link>`) or `<button>`. Sizes sm/md/lg.
- [ ] **Card** — image + title + description + link.
- [ ] **Container** — `max-w-7xl` wrapper; article variant `max-w-3xl`.
- [ ] **SectionHeading** — eyebrow + h2 + optional subtitle.
- [ ] **Badge / Tag**
- [ ] **Input / Textarea** — labels, error state, `aria-describedby`.
- [ ] **Logo** — full and icon variants. White (current), dark (reserve for future light theme).

---

## 7. Global Components (Group Shell)

In `components/global/`:

- [ ] **Header** — sticky. Logo (left) + group nav (center) + Contact CTA (right). Always uses the group voice — never vertical imagery.
- [ ] **GroupNav** — the six vertical links + About + Contact. Flat list (no nesting). Consulting can optionally reveal a dropdown of its 5 sub-services on desktop; mobile gets an accordion. No mega-menu — the Virgin-style umbrella doesn't need one because verticals are destinations, not categories.
  > **Considered and rejected — "What we do" / "Our Companies" dropdown consolidation:** Bidvest (6 divisions grouped into Business Services / Trading & Distribution) and Richemont (Maisons grouped into Jewellery / Specialist Watchmakers / Fashion & Accessories) both hide portfolio items behind a single grouped nav item. For PIQI at 6 verticals + 2 chrome items (About, Contact) = 8 items, top-level flat remains viable and gives each vertical equal surface area; grouping would force an artificial 2-way split of heterogeneous verticals that don't cluster cleanly. Revisit only if the group exceeds ~8 verticals or if mobile header becomes cramped.
- [ ] **MobileNav** — client component (`"use client"`). Hamburger, slide-out, close on route change + Escape. Use `inert` on `<main>` when open.
- [ ] **Footer** — columns:
  - Brand + tagline + white logo
  - Group: About, Contact, Privacy, Terms
  - Verticals: Consulting, Property, Fashion, Yachts, Auto, Coaching
  - Contact details: PO Box 751615 Gardenview 2047, info@piqi.co.za, +27 (0)10 007 3358, +27 (0)86 671 7958
  - Subfooter: copyright + "Powered By Bellzan" (currently present)
- [ ] **SEO / Metadata** — per-page `export const metadata` in Next.js. Shared helper to compose title, description, OG image, canonical URL, Twitter card. JSON-LD rendered via a small `<JsonLd>` component that emits `<script type="application/ld+json">`.
- [ ] **Breadcrumbs** — auto-generated from URL path. Emits `BreadcrumbList` JSON-LD.

---

## 8. Layouts

Next.js uses `app/layout.tsx` (root) and per-segment layouts instead of Astro's explicit layout components.

- [ ] **`app/layout.tsx`** (exists — audit only) — `<html lang="en">`, font preloads, global CSS, Organization + WebSite JSON-LD on every page, skip-to-content link, favicon links.
- [ ] **`app/consulting/layout.tsx`** — adds Consulting-specific breadcrumb context; can wrap all consulting pages with shared Consulting chrome.
- [ ] Per-vertical hubs do not need their own segment layout unless they share chrome (most don't — each owns its tone).

Skip-to-content:
```tsx
<a href="#main-content" className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 ...">Skip to main content</a>
```

---

## 9. Constants & Utilities

- [ ] **`lib/constants.ts`** — nav structure, site metadata, contact info (emails, phones, address), social links (TBD)
- [ ] **`lib/utils.ts`** — slug helpers, date formatting
- [ ] **`lib/env.ts`** — Zod-validated `process.env`:
  ```ts
  import { z } from 'zod';
  const envSchema = z.object({
    RESEND_API_KEY: z.string().min(1).optional(),         // Required from Phase 3
    NEXT_PUBLIC_GA4_ID: z.string().optional(),            // Required from Phase 5
    NEXT_PUBLIC_COOKIE_CONSENT_ID: z.string().optional(), // Required from Phase 5
  });
  export const env = envSchema.parse(process.env);
  ```

---

## Phase 1A Checklist (Done When...)

- [ ] `npm run dev` starts without errors
- [ ] `npm run check` + `npm run lint` pass
- [ ] Root layout renders with `<html lang="en">`, Montserrat + Hind load via `font-display: swap`
- [ ] Header with group nav (6 verticals + About + Contact) renders on desktop + mobile
- [ ] MobileNav works (toggle, Escape, close on route change)
- [ ] Footer renders with PIQI address, emails, phones
- [ ] Breadcrumbs auto-generate from URL path
- [ ] Placeholder routes exist for all 16 pages (even if just stubs)
- [ ] Organization JSON-LD present on every page
- [ ] Brand tokens match existing `app/globals.css` values
- [ ] `:focus-visible` ring on all interactive elements
- [ ] Responsive at 375 / 768 / 1280
- [ ] Skip-to-content works
- [ ] Favicon in tab
- [ ] `.env.example` committed, `.env` in `.gitignore`

---

# Phase 1B: Section Components, Brand Motifs, JSON-LD Builders

> After 1B: all layouts render with placeholder content, JSON-LD schemas valid.

---

## 10. Section Components

In `components/sections/`:

- [ ] **Hero** — full-viewport. Headline + subhead + CTA. Group hero uses abstract/architectural imagery; vertical hubs pass their own hero media.
- [ ] **UVP** — 3-4 value prop cards with icons (group "why PIQI" on homepage / About).
- [ ] **VerticalGrid** — the six-arm router component. Tile per vertical with label + thumbnail + link to its hub page. Used on Homepage and potentially Footer. **Critical:** each tile shows that vertical's own imagery — never a blended group image.
- [ ] **CTABanner** — full-width conversion banner linking to `/contact`. Present at the bottom of every page.
- [ ] **ClientLogos** — conditional: renders nothing if no logos exist (no logos live today — blocker).

---

## 11. Per-Vertical Layouts

One shared `VerticalHubLayout` for the five non-consulting arms, parameterized by vertical slug. Consulting gets its own two layouts because it has depth.

- [ ] **VerticalHubLayout** — hero, positioning paragraph, core offerings list, single CTA, footer. Each invocation pulls its own tone + imagery from `lib/data/verticals.ts`.
- [ ] **ConsultingHubLayout** — hero, intro, grid of 5 sub-services, CTA.
- [ ] **ConsultingServiceLayout** — hero, problem statement, what we deliver, CTA. No pricing, no related-services grid in v1 (single-arm tree).

> Original template's `IndustryLayout` / `PortfolioLayout` / `BlogLayout` — **removed**. Industries concept is gone; portfolio/blog are deferred.

---

## 12. Brand Motifs (Group pages only)

In `components/brand/` — abstract/architectural/typographic SVGs. **Never** use vertical-specific photography on group chrome (Home / About / Contact).

- [ ] Motif1 — geometric section divider
- [ ] Motif2 — concentric arcs for group hero decoration
- [ ] Motif3 — grid/dot pattern for card backgrounds
- [ ] Respect `prefers-reduced-motion`

---

## 13. JSON-LD Schema Builders

Create `lib/schema.ts`. Render via a `<JsonLd data={...}>` component that emits `<script type="application/ld+json" dangerouslySetInnerHTML={...}>`. Root layout emits Organization + WebSite; per-page layouts add page-specific schemas.

Schemas to build:

- [ ] `buildOrganization()` — **Organization** (PIQI Group): name, url, logo, contactPoint (email + phones), address (PO Box), sameAs (TBD — no social URLs yet). **Decision (from competitor audit):** emit a **single Organization** for PIQI Group — do **not** emit a separate Organization entity per vertical. Remgro, Richemont, Bidvest, Prosus all maintain one Organization schema at the group level and describe internal units as sections/pages rather than legally distinct entities. For PIQI, each vertical is represented in schema via `Service` entries (for the 5 consulting spokes) and `WebPage` / `CollectionPage` entries (for the 6 vertical hubs) — all with `provider` or `publisher` pointing back to the single Organization. Only promote a vertical to its own Organization schema if/when it becomes a separately-branded legal entity with its own domain.
- [ ] `buildWebSite()` — WebSite entity for `piqigroup.com`
- [ ] `buildLocalBusiness()` — LocalBusiness for the SA operations (used on `/contact`): name, address, telephone, email, areaServed (South Africa)
- [ ] `buildService(data)` — Service (name, serviceType, provider → Organization) — used on the 5 consulting spokes
- [ ] `buildBreadcrumbs(items)` — BreadcrumbList
- [ ] `buildWebPage(data)` — WebPage, with `AboutPage` / `ContactPage` subtypes for `/about` + `/contact`

> Deferred: Person (no team named), Article (no blog), FAQPage (unless Phase 4 delivers FAQ content), Blog.

---

## 14. Automated Schema Validation Script

- [ ] `scripts/validate-schema.js` — runs post-`next build`. Parses `.next/` or uses a crawl of `http://localhost:3000` during CI. Extracts `<script type="application/ld+json">` blocks. Validates required fields:
  - Organization: `name`, `url`, `logo`
  - LocalBusiness: `name`, `address`, `telephone`
  - Service: `name`, `serviceType`, `provider`
  - BreadcrumbList: `itemListElement` array
  - WebPage / WebSite: `@type`, `@context`
- [ ] Non-zero exit on failure (blocks CI)
- [ ] No external deps — Node `fs`, regex extraction, JSON.parse

> **Next.js note:** Because pages are server-rendered per route (including static ones at build time into `.next/server/app/`), the simplest approach is to `next start` on a port in CI, crawl the 16 known routes, and validate. Alternative: use `next build && next export`-style static HTML if the whole site stays SSG.

---

## Phase 1B Checklist (Done When...)

- [ ] Hero renders with group-voice placeholder content
- [ ] UVP renders 3-4 cards
- [ ] VerticalGrid renders six tiles with correct per-vertical imagery
- [ ] CTABanner renders with link to `/contact`
- [ ] VerticalHubLayout renders with placeholder for each of the 5 non-consulting arms
- [ ] ConsultingHubLayout + ConsultingServiceLayout render with placeholder data
- [ ] All JSON-LD builders produce valid output (validator.schema.org)
- [ ] Brand motifs render correctly on dark surfaces
- [ ] `prefers-reduced-motion` disables animations
- [ ] At least one consulting spoke renders with real Service schema populated from data
