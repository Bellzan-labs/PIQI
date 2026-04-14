# Phase 3: Five Vertical Hubs + About + Contact (PIQI Group)

> Split into **Phase 3A** (forms/API/contact infrastructure) and **Phase 3B** (the five non-consulting vertical hubs + About).
>
> After this phase: all 16 pages exist and render. Contact form sends email.

**Depends on:** Phase 2 complete
**Reference docs:** [audience](reference/audience.md) | [branding-tone](reference/branding-tone.md) | [services](reference/services.md)

> **Scope change vs. template:** Industries Hub and Portfolio sections are removed. Leadership page is removed from v1 (no team members named — blocker). Each vertical hub is self-contained and owns its own voice/imagery.

---

# Phase 3A: Infrastructure (Forms, API, Contact)

> After 3A: contact form sends email; /contact page shell exists.

---

## 0. Deferred Components & Deps

- [ ] `npm install resend zod`

### Section Components
- [ ] **FAQ** — accordion. Keyboard accessible (Enter/Space toggle), `aria-expanded`, `aria-controls`. Emits FAQPage JSON-LD. Only used if Phase 4 delivers FAQ content.
- [ ] **MapEmbed** — embedded location map. `loading="lazy"`. PIQI only has a PO Box today (blocker on precise address) — consider omitting map in v1 or showing a regional marker.

### Form Client Components
- [ ] **`components/contact-form.tsx`** (already exists — audit against Zod+Resend flow). Zod validation. Submits to `/api/contact`. Fields: name, email, company (optional), message, vertical-of-interest dropdown (Consulting / Property / Fashion / Yachts / Auto / Coaching / Other). `aria-describedby` for errors, `aria-live="polite"` for submission.

  **State machine:** `idle` → `validating` → `submitting` → `success` | `error`
  - `idle`: "Send message"
  - `submitting`: "Sending..." disabled
  - `success`: "Sent!" auto-reset 5s
  - `validation_error`: field-level via `aria-describedby`
  - `server_error`: "Something went wrong. Please try again." with retry
  - `network_error`: "You appear to be offline."

  Top-of-file `"use client"`.

### API Route
- [ ] **`app/api/contact/route.ts`** — exports `POST`. Uses Node runtime (Resend). CSRF: validate `Origin` header matches `https://piqigroup.com` (reject cross-origin). Zod validation. Honeypot check. Rate limit. Resend to info@piqi.co.za.

**Response format:**
```ts
// Success: { success: true, message: "Thanks, we'll be in touch within 48 hours." }
// Validation error: { success: false, errors: [{ field: "email", message: "Invalid email address" }] }
// Rate limited: { success: false, errors: [{ field: "_form", message: "Too many submissions. Please try again later." }] }
// Server error: { success: false, errors: [{ field: "_form", message: "Something went wrong. Please try again." }] }
```

### Spam Defense (Layered)
Honeypot + Zod + CSRF Origin + IP rate limiting.

### Rate Limiting
- [ ] In-memory Map with TTL (resets on cold start — acceptable for spam defense). Upgrade to Upstash KV post-launch if needed.
- [ ] 5 submissions per IP per hour
- [ ] Return `429` with standardized error format

### Honeypot
- [ ] Hidden field named `website`
- [ ] CSS: `position: absolute; left: -9999px; opacity: 0;` (NOT `display: none`)
- [ ] `tabindex="-1"`, `autocomplete="off"`
- [ ] Server: if populated, return fake `200 OK` success (don't reveal the trap)

---

---

# Phase 3B: Five Vertical Hubs + About (Group)

> After 3B: all five non-consulting hubs live, each self-contained with its own voice. About (Group) live.

Each vertical hub is a **single self-contained landing page** with its own hero, imagery, tone, CTA. No interlinking between verticals except via group nav. No forced narrative connecting arms.

---

## 1. Property Management Hub (`/property`)

Tone: reliable / local / responsive.

- [ ] **Hero** — property-specific imagery (existing at `/public/brand/brands/Property.png` etc.). Headline about handling the burden of property ownership.
- [ ] **Core Offerings** — list from live site: inspections, preventive maintenance, emergency response, tenant screening, lease management, rent collection, marketing, renovations, remodeling, new construction.
- [ ] **Who it's for** — SA property owners + tenants.
- [ ] **CTA** → `/contact` with vertical preselected to Property.

---

## 2. Fashion Hub — Downtown Fashion (`/fashion`)

Tone: celebratory / bespoke / warm.

- [ ] **Hero** — fashion-specific imagery.
- [ ] **Offerings** — wedding attire (bridal, bridesmaids, flower girls, groomsmen); matric dance outfits; bespoke high-fashion; school uniforms; tracksuits; safety clothing; embroidery / printing / branded apparel.
- [ ] **Who it's for** — local SA retail customers, schools, corporate uniform clients.
- [ ] **CTA** → `/contact` with vertical preselected to Fashion.

---

## 3. Yacht Charters Hub (`/yachts`)

Tone: aspirational / experiential.

- [ ] **Hero** — yacht imagery (existing at `/public/brand/brands/Yatch.png`).
- [ ] **The Offer** — self-catering catamaran charter, 4 double cabins, fuel for short shore trips included, guests supply food and drink.
- [ ] **Vessel details** — vessel name, home port, pricing — **TBD (blocker)**. Use placeholder copy until supplied.
- [ ] **Who it's for** — charter customers looking for private group catamaran experience.
- [ ] **CTA** → `/contact` with vertical preselected to Yachts.

---

## 4. Auto Hub — Piqi Auto (`/auto`)

Tone: practical / transparent.

- [ ] **Hero** — auto imagery (placeholder fallback exists — no dedicated Auto image in `/public/brand/brands/` currently).
- [ ] **Offerings** — panel beating (dents, scratches, major repairs); tyre supply.
- [ ] **Fitment note** — Piqi Auto sells tyres but does **not** fit them. Copy must either (a) recommend an external fitment partner, or (b) be rewritten once a partnership exists. **This is a blocker for copy sign-off** — log in Dependencies.
- [ ] **Who it's for** — local SA retail customers needing body repair or tyres.
- [ ] **CTA** → `/contact` with vertical preselected to Auto.

---

## 5. Coaching Hub (`/coaching`)

Tone: encouraging / direct / confidential.

- [ ] **Hero** — coaching imagery (abstract/aspirational — no dedicated photo today).
- [ ] **Offerings** — leadership enhancement, communication skills, work-life balance.
- [ ] **Who it's for** — individuals and executives.
- [ ] **CTA** → `/contact` with vertical preselected to Coaching.

---

## 6. About (Group) (`/about`)

Group voice (corporate-neutral). Abstract/architectural imagery only — no vertical-specific photos.

- [ ] **Hero** — "About PIQI Group" headline.
- [ ] **Our Story** — who the group is, what ties the verticals together (common ownership, SA operations, service ethos). Keep it factual — do not overclaim synergy between arms.
- [ ] **Positioning** — Virgin-style umbrella: separate verticals, shared principles.
- [ ] **Values** — 3-4 values (TBD with client; draft placeholders acceptable).
- [ ] **Team** — **DEFERRED to post-launch** (no team members named yet — blocker). Do not render an empty team section in v1.
- [ ] **Group Facts block** — factual heritage / reach / structure panel as a trust substitute while team + case studies are blocked. Fields (all TBD — render only what's confirmed): founded year, SA regions served, number of verticals (6), any regulatory/BEE registration reference, group-level professional accreditations. **Rationale:** Bidvest, Remgro, Richemont, Caudwell all place heritage/scale/leadership facts in prominent About real estate; without them, PIQI's About page reads as thin brochureware.
- [ ] **Group Profile PDF (download)** — link to a 1-2 page PDF group profile ("Download PIQI Group Profile"). **Rationale:** Bidvest ("Products and Services" brochure), Richemont ("Richemont Group Presentation"), Remgro + Naspers + Prosus (integrated annual reports) all offer a downloadable group document. It is a near-universal SA/UK corporate-group idiom and doubles as an email-attachable artifact for the Consulting arm's B2B sales motion. **v1 scope:** a single PDF assembled from the six vertical blurbs + contact block; does not require annual-report-grade content. **Blocker:** PDF source file — flag as a v1 content deliverable; if not ready at launch, hide the link rather than ship a placeholder.
- [ ] **CTABanner** → `/contact`.

### Schema
- [ ] AboutPage JSON-LD
- [ ] BreadcrumbList: Home > About

---

## 7. Contact (`/contact`)

- [ ] **Hero** — "Let's talk" or equivalent group-voice headline.
- [ ] **Contact Form** (client component, hydrates on load — form is the page's purpose):
  - Fields: name, email, company (optional), message, vertical-of-interest dropdown (6 options + "Other")
  - Zod validation client + server
  - Submits to `/api/contact` → Resend
  - Success state: "Thanks, we'll be in touch within 48 hours"
- [ ] **Company Info Sidebar** — address (PO Box 751615 Gardenview 2047, South Africa), email (`mailto:info@piqi.co.za`), phones (+27 (0)10 007 3358, +27 (0)86 671 7958).
- [ ] **Map Embed** — optional in v1. Current only address is a PO Box, so geo map may mislead. Defer or use a regional marker of Johannesburg.
- [ ] **Alt contact** — direct email + phone `tel:` links.

### Schema
- [ ] ContactPage JSON-LD
- [ ] LocalBusiness JSON-LD (name, address, telephone, email, areaServed: South Africa)
- [ ] BreadcrumbList: Home > Contact

### API
- [ ] Verify `/api/contact` end-to-end (form → Zod → Resend → email received at info@piqi.co.za)
- [ ] `RESEND_API_KEY` env set in Vercel

---

## 8. Interlinking Verification (scoped)

PIQI's octopus restricts interlinking. Verify:

- [ ] Every vertical hub has CTA → `/contact`
- [ ] No vertical hub links to another vertical hub body-inline
- [ ] Group nav is the only cross-vertical path
- [ ] About → Contact via CTABanner
- [ ] Contact → Home via breadcrumb / logo

---

## Phase 3 Checklist (Done When...)

- [ ] `/property`, `/fashion`, `/yachts`, `/auto`, `/coaching` all render self-contained
- [ ] Each hub uses its own tone + imagery (no cross-contamination)
- [ ] `/about` renders with group voice, no team section
- [ ] `/contact` form submits and sends email via Resend (verified delivered, not in spam)
- [ ] **LocalBusiness JSON-LD validates** on `/contact`
- [ ] **AboutPage JSON-LD validates** on `/about`
- [ ] **ContactPage JSON-LD validates** on `/contact`
- [ ] Honeypot + rate limit + Origin-check spam protection live
- [ ] API route returns standardized error shapes
- [ ] All pages responsive at 375 / 768 / 1280
- [ ] BreadcrumbList valid on all new pages
