# Phase 2: Homepage + Consulting Arm (PIQI Group)

> Thin umbrella homepage + the only arm with sub-service depth. After this phase: homepage routes to all six verticals, consulting tree is fully navigable.

**Depends on:** Phase 1 (1A + 1B) complete
**Reference docs:** [services](reference/services.md) | [audience](reference/audience.md) | [branding-tone](reference/branding-tone.md)

> **Scope change vs. the template this was derived from:** The generic "services grid + industries grid" homepage is gone. PIQI's homepage is a Virgin-style thin umbrella — hero, six-vertical router, group positioning, contact CTA. The only sub-service tree is Consulting.

---

## 1. Homepage (`/`)

Build `app/page.tsx` (already exists — audit and refactor against the octopus model). Keep it intentionally thin. The homepage does not try to sell any single vertical — it routes.

Sections in order:

- [ ] **Hero** — group voice. Headline conveying "PIQI is a South African group operating across advisory and asset-based businesses." Subhead: one-line positioning. Primary CTA: "Contact us". Secondary CTA: "Explore the group" → scrolls to VerticalGrid. Background: abstract/architectural imagery only — **never** a specific vertical's photography.
- [ ] **VerticalGrid** — the six arms as a router. Each tile: label + the vertical's own thumbnail + link to its hub. **Critical constraint:** each tile shows only that vertical's imagery — do not blend or reuse images across tiles.
  - Consulting → `/consulting`
  - Property Management → `/property`
  - Fashion (Downtown Fashion) → `/fashion`
  - Yacht Charters → `/yachts`
  - Auto (Piqi Auto) → `/auto`
  - Coaching → `/coaching`
- [ ] **Group Positioning Blurb** — 1-2 short paragraphs (group voice): what ties the arms together (common ownership, South African operations, service ethos). Do **not** force a single narrative or pretend verticals overlap operationally. **Competitor pattern (Remgro, Richemont):** honest "diversified group" framing beats manufactured synergy copy — Remgro positions itself explicitly as "a diversified investment holding company" without pretending healthcare, financial services, and consumer products share an operational story. Borrow that register.
- [ ] **Group-at-a-glance strip** — a single horizontal row of 3-5 factual scale/reach/heritage stats (e.g., "6 verticals · South Africa-based · [founded year TBD] · [SA regions served TBD]"). **Why this section exists:** competitor audit (Bidvest "37 years of consistent trading profit outperformance"; Richemont heritage/craftsmanship lines; Caudwell press-mention wall) shows SA and luxury-adjacent groups universally front-load heritage/scale facts as trust substitutes when individual client logos and testimonials are not publicly listed. PIQI has no case studies, testimonials, or team bios in v1 — this strip is the cheapest trust artifact available. Stats must be real; omit the strip rather than fabricate. Blockers: founded year, SA regions served, any publicly-shareable scale metric.
- [ ] **Contact CTA** — full-width CTABanner linking to `/contact`.

> Removed from the generic template: Services Grid (moved to `/consulting`), Industries Grid (concept removed entirely), Portfolio Showcase (no case studies today — blocker), Testimonials (none — blocker), Client Logos (none — blocker).

### Homepage Schema
- [ ] WebPage JSON-LD
- [ ] Organization + WebSite via root layout (already present)

### Homepage SEO
- [ ] Title: `PIQI Group — Consulting, Property, Fashion, Yachts, Auto, Coaching` (or shorter group line once client signs off)
- [ ] Meta description < 160 chars, mentions SA and the group nature
- [ ] OG image: custom group OG (1200x630)
- [ ] Exactly one H1 in Hero

---

## 2. Consulting Hub (`/consulting`)

Build `app/consulting/page.tsx` using ConsultingHubLayout.

- [ ] **Hero** — Consulting-voice (precise / credentialed / outcome-focused). Headline positioning consulting as the advisory practice of PIQI Group.
- [ ] **Intro** — one paragraph framing the 5 sub-services and the single conversion path (contact).
- [ ] **Sub-service Grid** — 5 cards. Each: icon + service name + one-line description + link to spoke.
- [ ] **CTABanner** → `/contact`

### Hub Schema
- [ ] CollectionPage JSON-LD (name, description, hasPart → the 5 sub-service pages)
- [ ] BreadcrumbList: Home > Consulting

---

## 3. Consulting Sub-Service Pages (`/consulting/[service]`)

Build `app/consulting/[service]/page.tsx` using ConsultingServiceLayout. Dynamic route reading from `lib/data/consulting-services.ts`.

### Sub-services in v1

| # | Slug | Display Name | Source copy reference (live site) |
|---|------|-------------|------------------------------------|
| 1 | `business-process` | Business Process | "Process Consulting" + "Operational Performance" |
| 2 | `strategy` | Strategy | "Business Strategy" + "Strategic Business Planning" |
| 3 | `project-management` | Project Management | "Project Management" + "Product/Service Lifecycle" |
| 4 | `supply-chain` | Supply Chain | "Supply Chain Support" |
| 5 | `commercial-services` | Commercial Services | "Project Commercial Services" (Procurement, Contracts, Claims, Negotiation, Cost Control, Planning Development, Risk Management, FEL "Set-up for success") |

### Each sub-service page sections

- [ ] **Hero** — service-specific headline + tagline from data. Dark bg with brand motif (no vertical-specific photography).
- [ ] **Problem Statement** — lead with the pain point.
- [ ] **What We Deliver** — specific deliverables as a features list. For `commercial-services`: enumerate the 8 sub-deliverables (Procurement, Contracts Management, Claims Management, Negotiation, Cost Control, Planning Development, Risk Management, FEL).
- [ ] **CTABanner** → `/contact`.

> **Deferred:** Pricing (not disclosed today), Social Proof (no case studies/testimonials — blocker), Related Services grid (optional — within consulting only; no cross-vertical linking allowed).

### Per-page checklist

- [ ] Service JSON-LD validates (name, serviceType, provider → PIQI Group Organization, areaServed: South Africa)
- [ ] BreadcrumbList: Home > Consulting > [Service]
- [ ] Title < 60 chars, meta description < 160 chars
- [ ] Exactly one H1
- [ ] CTA to `/contact`
- [ ] Responsive 375 / 768 / 1280
- [ ] Copy follows Consulting tone: precise / credentialed / outcome-focused

---

## 4. Content Integration

- [ ] Populate `lib/data/consulting-services.ts` with 5 typed entries sourced from live-site copy research (see Master Plan for source list)
- [ ] Verify slugs match filesystem: `business-process`, `strategy`, `project-management`, `supply-chain`, `commercial-services`
- [ ] Set `published: true` on all five
- [ ] Review copy against Consulting tone guidelines

---

## 5. Interlinking Verification (scoped)

PIQI's octopus model restricts interlinking to within the Consulting arm. There is **no cross-vertical linking** except via the top group nav.

- [ ] Consulting hub links to all 5 spokes
- [ ] Each spoke breadcrumb returns to Consulting hub
- [ ] Each spoke CTA links to `/contact`
- [ ] Homepage VerticalGrid links to `/consulting` hub (not directly to spokes)
- [ ] No spoke links outward to Property / Fashion / Yachts / Auto / Coaching

---

## Phase 2 Checklist (Done When...)

- [ ] Homepage renders hero + VerticalGrid + positioning + CTABanner
- [ ] All six VerticalGrid tiles link to their hub URLs
- [ ] `/consulting` hub renders with 5-card grid
- [ ] All 5 consulting spoke pages render
- [ ] **Service JSON-LD validates** on every spoke
- [ ] **CollectionPage JSON-LD validates** on `/consulting`
- [ ] **WebPage JSON-LD validates** on homepage
- [ ] Group nav links match all 16 routes
- [ ] All pages have valid BreadcrumbList JSON-LD
- [ ] Responsive at 375 / 768 / 1280
- [ ] No broken internal links in the consulting tree
