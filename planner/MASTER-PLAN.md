# PIQI Group Website — Master Plan

---

## Using This Template

This instance is filled in for **PIQI Group** — see `notes.md` for any re-templating steps and the running decisions log.

The generic reusable template this was derived from used `{{PLACEHOLDER}}` tokens for brand, services, and infra details. If you re-template for another project:

- **Find & replace placeholders:** every `{{TOKEN_NAME}}` needs a real value. Use find-in-folder against `planner/`.
- **Customize phase contents to scope:** phases are a framework — add, remove, retitle tasks to match the site.
- **Swap the tech stack if desired:** tech defaults are opinionated, not load-bearing. For this project the stack is **Next.js 14 App Router + React 18 + TypeScript + Tailwind + Vercel + Resend** (NOT Astro — the template's original default). Phase docs translate Astro patterns to Next.js equivalents inline.
- **Delete phases you don't need:** brochureware sites can drop Phase 4 (content infra) and trim Phase 6.
- **Keep the generic guidance:** JSON-LD lists, Lighthouse/WCAG targets, hub-and-spoke / octopus concept, CI patterns, exit-criteria formats — reusable.

---

## Placeholder Glossary (filled for this project)

| Placeholder | Value for PIQI |
|-------------|----------------|
| `{{BRAND_NAME}}` | PIQI Group |
| `{{BRAND_NAME_SHORT}}` | PIQI |
| `{{DOMAIN}}` | piqigroup.com |
| `{{DOMAIN_URL}}` | https://piqigroup.com |
| `{{BUSINESS_DESCRIPTION}}` | a South African group, founded 2016, serving clients internationally — operating an advisory practice and a portfolio of asset-based businesses across consulting, property management, fashion, yacht charters, auto, and coaching |
| `{{TARGET_AUDIENCE}}` | Per-vertical — see `reference/audience.md` |
| `{{PRIMARY_FONT}}` | Montserrat (display, 400/500/700) + Hind (body, 400/500/700) — confirmed from existing `app/globals.css` |
| `{{BRAND_COLORS}}` | Confirmed from `app/globals.css`: `--brand: #bb181d` (signature red), `--brand-deep: #7e000a`, `--brand-navy: #1d1624`. Light theme `--bg: #ffffff`; dark theme `--bg: #09070d`. Dark theme is default; white logo on dark |
| `{{PRIMARY_EMAIL}}` | info@piqi.co.za |
| `{{TEAM_MEMBER_*}}` | TBD (blocker — see Dependencies) |
| `{{DEVELOPER_GIT_HOST}}` | stephencruzwright's GitHub (private repo) |
| `{{HOSTING_ACCOUNT}}` | Stephen's Vercel |
| `{{COMPANY_GIT_ORG}}` | TBD (blocker) |
| `{{COMPANY_HOSTING_ACCOUNT}}` | TBD (blocker) |
| `{{DNS_PROVIDER}}` | TBD — currently hosted on WordPress via Crowberry Media (investigate) |
| `{{EMAIL_PROVIDER}}` | TBD — info@piqi.co.za routing needs confirmation (MX stays vs moves) |
| `{{GA4_ID}}` | TBD |
| `{{COOKIE_CONSENT_ID}}` | TBD |
| `{{BRAND_ASSET_REFERENCE}}` | `/public/brand/` in this Next.js repo |

---

## What We're Building

A ~16-page Virgin-style group-shell marketing website for **PIQI Group**, a South African group operating an advisory practice and a portfolio of asset-based businesses across consulting, property management, fashion, yacht charters, auto, and coaching.

The site is structured as an **octopus sitemap**: a thin umbrella (Home, About, Contact) routing visitors to six heterogeneous vertical hubs, each with its own tone and imagery. Only the Consulting vertical has sub-service spoke pages in v1.

**Domain:** piqigroup.com
**Tech:** Next.js 14 (App Router, RSC) / React 18 / TypeScript / plain CSS with CSS custom properties (design tokens in `app/globals.css`) / Vercel / Resend (email).

> **Note on CSS approach:** The existing repo does NOT use Tailwind. Design tokens live as CSS custom properties in `app/globals.css` (`--brand`, `--bg`, `--text`, `--radius-*`, etc.) with light/dark themes keyed on `html[data-theme=...]`. Phase 1 preserves this pattern rather than introducing Tailwind — the token system is already clean.

**Group facts (confirmed 2026-04-14):**
- Founded **2016**
- Headquartered in South Africa (PO Box 751615, Gardenview 2047)
- Serves clients **internationally**
- Contact: info@piqi.co.za · +27 (0)10 007 3358 · +27 (0)86 671 7958

---

## Team

| Name | Role |
|------|------|
| Stephen Cruz-Wright | Developer / Lead |
| TBD | PIQI Group client stakeholder |
| TBD | Content / copy lead |

---

## Team Workflow

### Build Phase (current)
- **Git:** stephencruzwright's GitHub private repo. Developer builds independently.
- **CI:** GitHub Actions runs `tsc --noEmit` + `next lint` + `next build` on every PR. Must pass before merge.
- **Preview:** Stephen's Vercel creates automatic preview deployments per PR branch.
- **Production:** Merges to `main` auto-deploy to Stephen's Vercel.
- **Quality gate:** CI pipeline is the primary quality gate.

### Transfer Phase (when site is ready)
- Transfer repo to PIQI's GitHub org (TBD).
- Transfer or recreate Vercel project on PIQI's Vercel account (TBD).
- DNS migration (Phase 5 runbook) happens against the company Vercel project.

### Content Preview
- `NEXT_PUBLIC_SHOW_DRAFTS` env var: `true` in Preview only.
- Content rendering logic: skip if `draft === true && process.env.NEXT_PUBLIC_SHOW_DRAFTS !== 'true'`.
- Non-technical team members can push content via GitHub web editor / GitHub Desktop.

---

## Site Structure at a Glance — The Octopus

PIQI Group is a Virgin-style umbrella. Every vertical reports directly to Group — no nesting between verticals. Group pages never mix vertical imagery.

```
PIQI Group (umbrella)
├── Home                           /
├── About (Group)                  /about
├── Contact                        /contact
├── Consulting (hub)               /consulting
│   ├── Business Process           /consulting/business-process
│   ├── Strategy                   /consulting/strategy
│   ├── Project Management         /consulting/project-management
│   ├── Supply Chain               /consulting/supply-chain
│   └── Commercial Services        /consulting/commercial-services
├── Property Management (hub)      /property
├── Fashion — Downtown Fashion     /fashion
├── Yacht Charters                 /yachts
├── Auto — Piqi Auto               /auto
└── Coaching                       /coaching
```

Banking (crossed out on source chart) is **DEFERRED** — not v1.

| Section | Pages | Purpose |
|---------|-------|---------|
| Group chrome | 3 (Home, About, Contact) | Umbrella intro, trust, lead capture |
| Consulting arm | 1 hub + 5 spokes | Advisory revenue engine |
| Other verticals | 5 hubs (Property, Fashion, Yachts, Auto, Coaching) | Self-contained sub-brand landing pages |
| Utility | 3 (404, privacy, terms) | UX recovery, legal |

**Total v1:** ~16 pages.

> **URL convention:** No trailing slash (`trailingSlash: false` in `next.config.mjs`). All route references use no trailing slash.

---

## Phases & Deliverables

### Phase 1A: Audit & Standardize Scaffold + Design System + Core Chrome
> *Detailed tasks: [phase-1-foundation.md](phase-1-foundation.md)*

Next.js 14 scaffold already exists in the repo. Phase 1A audits what's there, standardizes tokens and chrome, and builds the group-shell nav.

| Deliverable | Description |
|-------------|-------------|
| Scaffold audit | Confirm Next.js 14 App Router, TS strict, Tailwind pipeline, Vercel adapter; fill gaps |
| Developer tooling | ESLint, Prettier, `tsc --noEmit`, `next lint`, GitHub Actions CI |
| Design system | Brand colors, typography (Montserrat + Hind), focus styles, spacing — pulled from existing `app/globals.css` and promoted to Tailwind `@theme` tokens |
| Content structure | Typed data files under `content/` or `src/data/` (MDX or TS), read via `fs`/`contentlayer`/`next-mdx-remote` |
| UI component library | Buttons, cards, inputs, containers, badges |
| Group chrome | Header with 6 vertical nav items + About + Contact, mobile nav, footer |
| Root layout | `app/layout.tsx` — HTML shell, Organization JSON-LD, fonts |

**Exit criteria:** Dev server runs, group nav routes to placeholder vertical pages, design tokens applied.

---

### Phase 1B: Section Components, Brand Motifs, JSON-LD Builders
> *Detailed tasks: [phase-1-foundation.md](phase-1-foundation.md)*

| Deliverable | Description |
|-------------|-------------|
| Section components | Hero, UVP, CTABanner, VerticalGrid (the six-arm router), ClientLogos stub |
| Per-vertical layout | Reusable `VerticalHubLayout` for the five non-consulting arms |
| Consulting layouts | `ConsultingHubLayout` + `ConsultingServiceLayout` (5 spokes) |
| Brand motifs | Abstract/architectural SVGs for group pages only (no vertical imagery on chrome) |
| JSON-LD builders | Organization (Group), WebSite, BreadcrumbList, LocalBusiness (SA ops), Service (for consulting sub-services) |

**Exit criteria:** All layouts render, JSON-LD validates.

---

### Phase 2: Homepage + Consulting Arm
> *Detailed tasks: [phase-2-core-pages.md](phase-2-core-pages.md)*

Build the thin umbrella homepage and the only arm with sub-service depth.

| Deliverable | Description |
|-------------|-------------|
| Homepage | Hero, six-vertical router grid, positioning blurb, contact CTA |
| Consulting hub | `/consulting` — brief intro + grid of 5 sub-services |
| 5 Consulting spokes | Business Process, Strategy, Project Management, Supply Chain, Commercial Services |

**Exit criteria:** Homepage routes correctly to all six vertical slots; consulting tree renders with valid Service + BreadcrumbList schema.

---

### Phase 3: Five Vertical Hubs + About + Contact
> *Detailed tasks: [phase-3-expansion.md](phase-3-expansion.md)*

Each vertical hub is self-contained — own hero, own tone, own CTA, own imagery. No interlinking between verticals (users return via group nav).

| Deliverable | Description |
|-------------|-------------|
| Property hub | `/property` — inspections, maintenance, tenant/lease, marketing, construction |
| Fashion hub | `/fashion` — Downtown Fashion — bespoke, weddings, matric, uniforms, embroidery |
| Yachts hub | `/yachts` — self-catering catamaran, 4 double cabins (vessel name/port/pricing TBD) |
| Auto hub | `/auto` — Piqi Auto — panel beating + tyre supply (flag fitment-gap copy issue) |
| Coaching hub | `/coaching` — leadership, communication, work-life balance |
| About (Group) | `/about` — group story, positioning, values — group voice |
| Contact | `/contact` — form, SA address, phones, info@piqi.co.za |
| API route | `app/api/contact/route.ts` — Resend + Zod + honeypot + rate limit |

**Exit criteria:** Contact form sends email (verified not in spam). All five vertical hubs render self-contained.

---

### Phase 4: Content Infrastructure (lightweight)
> *Detailed tasks: [phase-4-content.md](phase-4-content.md)*

Live site has no blog/guides/testimonials. v1 has no content pipeline. This phase is demoted.

| Deliverable | Description |
|-------------|-------------|
| FAQ page (optional) | Only if content is provided |
| RSS stub (optional) | Infrastructure for future blog |
| Resources hub | **DEFERRED** post-launch |
| Blog | **DEFERRED** post-launch |
| Guides | **DEFERRED** post-launch |

**Exit criteria:** Either a working FAQ page exists with valid FAQPage schema, or the phase is explicitly skipped with a post-launch task logged.

---

### Phase 5: Polish & Launch (DNS cutover from WordPress)
> *Detailed tasks: [phase-5-launch.md](phase-5-launch.md)*

| Deliverable | Description |
|-------------|-------------|
| Analytics | GA4 (TBD ID) + cookie consent (TBD) |
| Legal pages | Privacy, Terms |
| SEO validation | JSON-LD, sitemap, 16-page test matrix |
| Performance | Lighthouse 95+ |
| Accessibility | WCAG 2.1 AA |
| Email setup | Resend domain verification for piqi.co.za (SPF/DKIM). Preserve existing MX for info@piqi.co.za. |
| DNS migration | Cut piqigroup.com FROM WordPress (Crowberry Media) TO Vercel |
| Rollback plan | Keep WP site reachable via staging subdomain for 7 days |
| Production deploy | Live at piqigroup.com |

**Exit criteria:** Live at piqigroup.com. Email working. Rollback tested.

---

### Phase 6: Post-Launch
> *Detailed tasks: [phase-6-post-launch.md](phase-6-post-launch.md)*

| Deliverable | Description |
|-------------|-------------|
| Search Console | Verify, submit sitemap |
| GA4 review | Baseline metrics |
| Vercel analytics | Real-user Core Web Vitals |
| Expansion backlog | Blog infra, case studies, team/leadership page (once people are named), Banking vertical if un-deferred |

**Exit criteria:** Site indexed, monitored, expansion backlog prioritized.

---

## Dependencies & Blockers

| Dependency | Status | Blocks |
|------------|--------|--------|
| Brand palette / token confirmation from existing `app/globals.css` | Open | Phase 1A design system |
| Team member names & bios | Blocker | Any future leadership/team page (not in v1) |
| Yacht vessel name + home port + pricing | Blocker | Phase 3 Yachts hub copy |
| Case studies / testimonials / client logos | Blocker | Social proof across all hubs (not in v1) |
| Group founded year + SA regions served + any publicly-shareable scale metric | Blocker | Homepage group-at-a-glance strip + About Group Facts block (trust substitute while team/case studies blocked) |
| 1-2 page group profile PDF (assembled from six vertical blurbs + contact block) | Blocker | About page "Download PIQI Group Profile" link — near-universal SA/UK corporate-group idiom (Bidvest, Richemont, Remgro, Naspers) |
| Physical address (currently only PO Box 751615 Gardenview 2047) | Blocker | LocalBusiness schema geo precision |
| Auto "sells tyres but cannot fit them" copy/ops decision | Blocker | Phase 3 Auto hub — recommend external fitment or add fitment partner |
| Banking vertical — confirm DEFERRED for v1 | Assumed deferred | Sitemap/nav lock |
| Resend API key | Open | Phase 3 API route |
| DNS provider (investigate Crowberry Media current WP setup) | Blocker | Phase 5 cutover |
| Email provider for info@piqi.co.za (keep MX vs migrate) | Blocker | Phase 5 Resend setup |
| GA4 measurement ID | Open | Phase 5 analytics |
| Cookie consent platform ID | Open | Phase 5 consent |
| Company GitHub org for repo transfer | Open | Handoff |
| Company Vercel account | Open | Handoff |
| Resend API key (account under Stephen or PIQI) | Open | Phase 3 |

---

## Success Criteria

| Metric | Target |
|--------|--------|
| Page speed | LCP < 2.5s, FCP < 1.5s, CLS < 0.1, TBT < 200ms, INP < 200ms |
| Lighthouse | 95+ Performance / Accessibility / SEO |
| Responsive | 375px, 768px, 1280px |
| Accessibility | WCAG 2.1 AA, keyboard navigable |
| Search readiness | All 16 pages indexed, structured data validated |
| Internal linking | Group nav → 6 verticals verified; Consulting hub ↔ spokes verified; no cross-vertical leakage |
| Lead capture | Contact form functional via Resend |
| Email delivery | Resend verified on piqi.co.za, not in spam |
| Zero broken links | All internal nav verified |

---

## Technical Decisions Log

| Decision | Rationale |
|----------|-----------|
| Next.js 14 App Router (not Astro) | Existing repo is already Next.js; RSC default keeps client JS minimal |
| Octopus sitemap (not hub-and-spoke) | PIQI is a Virgin-style group over heterogeneous verticals; no shared narrative between arms |
| Virgin-style dual register | Corporate-neutral voice on group chrome; distinct voice per vertical |
| Only Consulting has sub-services in v1 | Other verticals are single landing pages until content justifies deeper trees |
| Industries concept removed entirely | Replaced by the six-vertical octopus — PIQI doesn't sell into industries, it operates them |
| `trailingSlash: false` | Consistent canonical URLs |
| Dark theme + white logo | Existing precedent in repo (do not change without client sign-off) |
| i18n deferred | Single-language for now; SA English |
| Banking deferred | Per source sitemap chart (crossed out) |

---

## Documentation Map

```
planner/
  MASTER-PLAN.md               You are here
  phase-1-foundation.md        Audit + standardize Next.js scaffold, design system, chrome, JSON-LD
  phase-2-core-pages.md        Homepage + Consulting hub + 5 consulting spokes
  phase-3-expansion.md         5 vertical hubs (Property, Fashion, Yachts, Auto, Coaching), About, Contact, /api/contact
  phase-4-content.md           Optional FAQ, RSS stub. Blog/guides/resources deferred.
  phase-5-launch.md            QA, analytics, DNS cutover FROM WordPress TO Vercel, Resend, rollback
  phase-6-post-launch.md       Monitoring, expansion backlog (blog, case studies, team page, Banking)
  notes.md                     Running decisions log (seeded 2026-04-14)
  reference/
    audience.md                Six per-vertical audiences + cross-vertical group visitor
    branding-tone.md           Virgin-style dual register; per-vertical tone matrix
    services.md                Six-arm octopus with per-arm positioning; Consulting sub-services detail
    mood-board.md              Imagery constraints: never mix vertical imagery on group pages
  SETUP-BLUEPRINT-AUDIT.md     Template meta (keep as-is unless brand leakage)
  SETUP-BLUEPRINT-CLAUDE.md    Template meta
  SETUP-BLUEPRINT-CODEX.md     Template meta
```
