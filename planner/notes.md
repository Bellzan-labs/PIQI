# PIQI Group — Decisions Log & Iteration Notes

Running log for the project. Newest entries on top.

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
