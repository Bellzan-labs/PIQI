# PIQI Group — Decisions Log & Iteration Notes

Running log for the project. Newest entries on top.

---

## 2026-06-19 — Redesign R0–R5 executed + audited

Shipped the full award-tier redesign on `dev` in six gated commits (R0–R5), each verified with `npm run build && lint && typecheck && validate-schema`. Throughout: all 16 routes stayed `○ Static` (consulting spokes `● SSG`), schema count held at **76 across 16 routes**, zero new real copy. A dedicated audit subagent then reviewed the whole diff and found **no high/medium defects** — only three low/cosmetic items (one fixed: the contact focus-glow now transitions `box-shadow`; two left as intentional forward-hooks/kept components).

What shipped:

- **R0 — token foundation** (`globals.css`): elevation ladder, hairlines, PIQI red ramp via `color-mix(oklab)`, fluid type + spacing scales, easing/duration/transition tokens, glow/grain/glass/shadow/z-index tokens; applied `feTurbulence` grain (`body::after`, behind content), custom `::selection`, thin scrollbar, tokenized focus ring, and a global reduced-motion strategy. Migration-safe aliasing shim re-points every legacy token name — no component churn.
- **R1 — chrome + homepage**: pure-CSS scroll reveals via `animation-timeline: view()` (rise + opacity-only `fade` variants, `@supports` + reduced-motion gated so content is never hidden), staggered hero entrance, a slow "living" red bloom on the signature overlay, widened section rhythm (`--section-y`), token-tuned header/nav transitions, nav-pill `view-transition-name` hook.
- **R2 — vertical hubs**: lateral "More from PIQI Group" `SiblingStrip` (links sideways + up only, never down) on all 5 hubs via the shared `VerticalHub`; reveals across hub sections.
- **R3 — consulting mini-hub**: Consulting-only sticky local nav rail (`ConsultingNav`) on the hub + all 5 spokes; 5 spokes nested under Consulting in the footer (full-sitemap IA); sibling strip on the consulting hub; section reveals.
- **R4 — about/contact + polish**: magnetic CTA (`Magnetic` wrapper on the site-wide CTABanner button; touch + reduced-motion gated), group-page motif scroll parallax, contact-form focus glow, About/Contact reveals. Fixed the latent `revolver-heading` bug (dead Tailwind + a red-rule-violating `text-blue-400`) and gated `scramble-text` under reduced-motion.
- **R5 — perf/a11y**: self-hosted Montserrat + Hind from `/public/fonts` (killed the external `piqigroup.com` `@font-face` fetch — also survives the planned DNS cutover); tightened the homepage hero-collage `sizes`.

As-built deviations from `redesign/01-REDESIGN-PLAN.md` (all deliberate, lower-risk choices):

- **Scroll reveals** delivered as pure CSS (`view()` timelines), not a JS `IntersectionObserver` island — zero added JS, better fallback story.
- **VerticalGrid asymmetry**: kept the clean auto-fit grid + staggered reveal rather than a 2-column Consulting span (6 tiles tile unevenly with a span). Consulting's mini-hub asymmetry is instead made visible by its unique local rail + footer sub-nav.
- **GroupNav Consulting flyout**: skipped — a dropdown would be clipped by the `overflow-x: auto` pill bar; the sticky local rail + footer expose the 5 spokes instead.
- **Route-transition curtain** (`next-view-transitions`): deferred — it adds an npm dependency; the nav-pill `view-transition-name` hook is already in place for when it's added.
- **GroupFacts count-up**: dropped (values include non-numeric text e.g. "International"); a reveal is used instead.
- **Custom cursor**: skipped (polarizing / a11y risk on a corporate umbrella); the magnetic CTA carries the micro-delight tier.

Approval-gated items remain **not built** (per the plan): any WebGL/3D/canvas-shader hero, typeface-family swap (still Montserrat/Hind), any second hue, UI sound, a permanent preloader.

Process note: the repo has a hook that auto-commits and auto-pushes to `origin/dev` after edits (it generated messages for R2/R4/R5 and earlier swept untracked `research/*` files into the docs commit). Flagged for the user — it bypasses the usual commit/push-on-request rule.

---

## 2026-06-19 — Whole-site award-tier redesign planned + documentation refresh

User goal: research the world's best websites and interactive experiences, document all of it, and plan one big redesign incorporating the best parts across the entire site — with **no real copy** (lorem placeholders only), and a docs read/update pass first. Planning + documentation only; **zero production code changed.**

What landed:

- **New `planner/redesign/` folder** with four artifacts from an 8-lens research workflow (award craft, product/brand taste, immersive/interactive technique, motion systems, dark-theme type/color, house-of-brands IA, perf/a11y/modern CSS, premium dark aesthetics) → synthesis → repo-grounded plan + design-system spec:
  - `00-RESEARCH-DOSSIER.md` — the research, 15 distilled principles, full reconciliation against every locked decision.
  - `01-REDESIGN-PLAN.md` — phased R0–R5 plan, page-by-page (all 16 routes) + component-by-component direction, tiered interactive systems, risks/gates/rollback.
  - `02-DESIGN-SYSTEM-SPEC.md` — evolved `globals.css` token system (elevation ladder, red ramp via `color-mix()`, fluid type scale, spacing, motion, effects) with a migration-safe aliasing shim so nothing breaks.
  - `README.md` — index, thesis, status.
- **Thesis:** "layered-light dark editorial system where the red is the only voice raised." Signature = a branded red→navy→ink route-transition wipe + a living `@property`-animated hero overlay, pure-CSS-first, with `feTurbulence` grain. Award-tier craft by perfecting what PIQI already owns — no 3D scene.
- **Documentation hygiene:** fixed stale references that contradicted the locked decisions — `phase-1-foundation.md`, `phase-5-launch.md`, `mood-board.md`, and `MASTER-PLAN.md` still cited Tailwind / `@theme` / a light theme / `ThemeToggle`. Corrected to plain-CSS + dark-only. `CLAUDE.md` phase status updated (Phases 2–3 shipped, FAQ shipped) + a redesign-initiative section added. Mood-board "Design References" (was TBD) populated. `SETUP-BLUEPRINT-*.md` left as-is — they are meta-docs of the original Astro/Tailwind/Decap template, not PIQI's stack.
- **Real bug surfaced by the plan:** `components/revolver-heading.tsx` ships Tailwind utility classes (`text-4xl md:text-6xl`, `text-blue-400`) that do nothing in this no-Tailwind repo, plus a blue that violates the red-only rule. Flagged for R4 (remove or rewrite) — not yet touched.

Quarantined under "REQUIRES USER APPROVAL" (must not build without sign-off): any WebGL/3D/canvas-shader hero, typeface-family swap (Montserrat/Hind → Bricolage/Inter is the research suggestion), any second hue, UI sound, permanent preloader.

Decisions made: redesign respects all locked decisions by default; execution gated on explicit user go-ahead; R0 is a purely additive token layer.

Open: user to confirm whether to proceed to execution (and from which phase), and to rule on the approval-gated items + the font-family question.

---

## 2026-04-15 — Second content-migration pass (from source-content corpus)

Applied the README's top-ranked [NEW]/[PARTIAL] items from `planner/source-content/`:

- **5 yacht photographs** downloaded from piqigroup.com CDN to `public/brand/yachts/` — the "on-water" shot becomes the new yacht hero; the remaining 4 (ocean, deck-1, deck-2, interior) render as a gallery between MediaSplit and how-we-engage on `/yachts`
- **New ImageGallery component** at `components/sections/ImageGallery.tsx` — server, native `<figure>`/`<figcaption>`, red-hover overlay, auto-fit grid
- **VerticalHub** grew an optional `extraAfterMediaSplit?: ReactNode` slot — yachts uses it for the gallery; cleaner than adding `gallery` to the data layer with a one-vertical flag
- **Strategy spoke** — new second body paragraph ("strategy work that delivers growth, protects margin…")
- **Supply-chain spoke** — 2 new features (Inventory management, Supplier relationships) — grows from 3 → 5 features
- **Coaching** — 1 new FAQ on measuring whether coaching is working
- **Auto** — empathetic "Accidents happen…" opener replacing the previous auto bodyParagraphs[0]; tyre lane description gains the "traction, durability, fuel efficiency" phrasing
- **Property** — `Callout` component (built previously, never placed) now runs on `/property` as a closing pull-quote: "Minimize downtime. Maximize the longevity of your assets."
- **Consulting hub** — `.section-lead` paragraph lands above the spoke grid with the "distinct practice, most draw on more than one" line
- Source-content corpus tags updated: ~10 items flipped from [NEW]/[PARTIAL] → [MIGRATED]

---

## 2026-04-15 — Content migration pass from piqigroup.com

WebFetched every live page of piqigroup.com (home, `/consulting/`, `/property-management/`, `/auto/`, `/downtown-fashion/`, `/yacht-chartering/`; confirmed `/about/`, `/contact/`, `/coaching/`, `/privacy/`, `/terms/` all 404). Migrated the content worth keeping into the new site.

What landed:

- **25 FAQ pairs** across all 6 verticals, in a new `lib/data/faqs.ts`. Rendered via a new `components/sections/FAQ.tsx` server component using native `<details>`/`<summary>` (no client JS). Each vertical hub + the consulting hub gained a FAQ section.
- **Mike Wright testimonial** — the only piece of social proof on the live site — rendered as a `.pullquote` on `/consulting` with Review JSON-LD.
- **NW Yacht Chartering** surfaced as the operator brand on `/yachts` via a new optional `operatorBrand` field on the Vertical type.
- **Vertical hub body paragraphs** — 1–2 paragraphs per vertical, lightly tightened from the live site. New `bodyParagraphs?: readonly string[]` field on Vertical, rendered in VerticalHub.
- **Consulting spoke body paragraphs** — new `bodyParagraph?: string` field on ConsultingService, migrated from the live-site consulting copy (strategy "strategy-capture" language, commercial services "cradle-to-grave", supply chain "strategic sourcing", etc.). Rendered in the "Where we come in" section.
- **Three new commercial-services features** — Workshop facilitation & training, Knowledge Management, Project Auditing — growing the spoke from 8 to 11 features (the `.feature-grid` already handles this at 2×4 / 4×2 / 3-col / 2-col responsive breakpoints).
- **About page "How we operate as a group"** expanded from 1 generic paragraph to 2 paragraphs migrated from the live site ethos copy.
- **Refactor:** the hardcoded `offerings` + `body` strings in the 5 vertical hub page files moved into `lib/data/verticals.ts`. VerticalHub prop surface reduced from `{ vertical, offerings, body }` to `{ vertical }`.
- **Schema additions:** `buildFAQPage(items)` and `buildReview({ body, authorName })` in `lib/schema.ts`. Schema count rose from 67 → 74 (+6 FAQPage, +1 Review) across 16 routes.

Ambiguities flagged for user review:

- Consulting hub's new prose section uses "Cradle-to-grave project support." as the H2 (derived from the source paragraph). Swap if preferred.
- About page's second new paragraph ("We operate from South Africa...") partially duplicates the About hero subtitle. Kept verbatim per source; dedup if desired.

Dependencies table updated in MASTER-PLAN: vertical hub body copy, FAQ content, yacht operator brand, Auto tyres-honesty framing, and founded year + area served now marked **Resolved**. Remaining blockers unchanged (team bios, case studies, vessel name + pricing, Group Profile PDF, physical address, DNS/MX, GA4 + cookie consent, handoff accounts).

---

## 2026-04-14 — Competitor audit pass

WebFetched Bidvest, Remgro, Berkshire Hathaway, Prosus, Richemont, Caudwell Group, Naspers (Virgin.com and Imperial Logistics blocked — substituted Naspers + Wikipedia on Virgin). Synthesis applied to planner:

- **Homepage group-at-a-glance strip** added to Phase 2 homepage spec — trust substitute while team/testimonials/case studies are blocked. Driven by Bidvest heritage stats + Richemont heritage framing + Caudwell press wall.
- **About Group Facts block + downloadable Group Profile PDF** added to Phase 3 About spec. PDF idiom confirmed across Bidvest, Richemont, Remgro, Naspers, Prosus.
- **JSON-LD decision locked** in Phase 1B: single Organization at group level, Services/CollectionPages for verticals, no per-vertical Organization schema. All audited peers do this.
- **Flat GroupNav reaffirmed** with a "considered and rejected" note against the Bidvest/Richemont grouped-dropdown pattern — 6 verticals don't cluster cleanly.
- **Dependencies table** in MASTER-PLAN grew two entries: founded year / regions / scale metric, and the 1-2 page Group Profile PDF.

Considered and rejected:
- **Featured-few + logo-grid-of-rest** (Bidvest / Remgro pattern): at only 6 verticals, the existing VerticalGrid already shows all of them; a separate logo grid would be redundant.
- **Per-vertical Organization JSON-LD**: no audited peer does this, inflates maintenance, splits entity graph for zero SEO gain at v1.
- **"Our Companies" dropdown consolidation in nav**: forces an artificial 2-way split of heterogeneous verticals; 8 items fits fine.
- **Homepage "selected portfolio items" hero carousel** (Prosus pattern): deliberately hides verticals — wrong for PIQI where every vertical needs equal discoverability in v1.
- **Founder-identity-as-trust signal** (Caudwell "John Caudwell" bio): PIQI has no named principal in v1 and leadership is explicitly a post-launch blocker.

---

## 2026-04-14 — Planner re-instantiated for PIQI Group

The generic website-planner template was filled in for PIQI Group. Three core decisions captured:

### Decision 1 — Tech stack: Next.js 14 (not Astro)

The template's default stack was Astro 6+. The existing PIQI repo is already on Next.js 14 App Router with React 18, TypeScript, Tailwind CSS. Phase docs translate Astro patterns to Next.js equivalents inline (App Router pages, RSC by default, `"use client"` for islands, `next/image`, Metadata API + JSON-LD scripts in place of `<SEOHead>`, `app/api/contact/route.ts` instead of `pages/api/contact.ts`). Tailwind uses Next.js's standard PostCSS pipeline. CI uses `tsc --noEmit` + `next lint` + `next build`.

### Decision 2 — Octopus sitemap (not hub-and-spoke)

PIQI is a Virgin-style group shell over six heterogeneous verticals — not a services agency selling into industries. Every vertical reports directly to PIQI Group as a sibling. No nesting between verticals. The original template's "Services Hub + Industries Hub + Portfolio Hub + Resources Hub" was scrapped. Industries concept removed entirely.

```
            PIQI Group (umbrella)
                  |
   +---+---+---+--+--+---+---+---+
   |   |   |   |     |   |   |   |
  Home About Cont. Cons.|  Prop Fash Yacht
                        |              Auto
            5 sub-services             Coach
            (only consulting           
             goes deeper)
```

ASCII octopus:
```
                    [ PIQI Group ]
                          |
        +---+---+---+-----+-----+---+---+
        |   |   |         |         |   |
      Cons Prop Fash    Yachts    Auto Coach
       |
       +-- Business Process
       +-- Strategy
       +-- Project Management
       +-- Supply Chain
       +-- Commercial Services
```

v1 page count: 16 = 1 home + 6 vertical hubs + 5 consulting spokes + About + Contact + 3 utility (404, privacy, terms).

Banking (crossed out on the source chart) is deferred. Logged in Phase 6 backlog.

### Decision 3 — Virgin-style positioning (dual voice register)

PIQI uses two voices, never mixed:
- **Group voice** (corporate-neutral, factual, restrained) on Home, About, Contact, 404, Privacy, Terms.
- **Per-vertical voice** on each of the six hubs — each arm owns its tone and imagery. Tone matrix in `reference/branding-tone.md`.

Imagery rule: never mix vertical imagery on group pages. Group pages use abstract/architectural/typographic imagery + the white PIQI logo only.

---

## Open blockers (cross-reference MASTER-PLAN Dependencies table)

- Brand color tokens — pull from `app/globals.css` and lock palette
- Team member names + bios (no team page in v1)
- Yacht vessel name + home port + pricing
- Case studies / testimonials / client logos (none today)
- Physical address beyond PO Box 751615 Gardenview 2047
- Auto "sells tyres but doesn't fit" copy/ops resolution
- Banking status — confirm DEFERRED
- DNS provider — investigate via Crowberry Media (current WP host)
- info@piqi.co.za email provider — keep MX vs migrate
- Company GitHub org + Vercel account for handoff
- GA4 ID + cookie consent platform choice

---

## Iteration template

Use the format below for future entries.

### Iteration N — YYYY-MM-DD — short title
1. What worked.
2. Visual / design issues.
3. Autonomy / safety observations.
4. Copy / structure tweaks.
5. New blockers surfaced.
6. Decisions made.
