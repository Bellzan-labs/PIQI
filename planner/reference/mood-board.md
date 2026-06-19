# PIQI Group — Visual Identity & Imagery Constraints

## Hard rule: never mix vertical imagery on group pages

**Group chrome pages — Home, About, Contact, 404, Privacy, Terms** — use only:
- Abstract / architectural imagery
- Typographic compositions
- Brand-mark motifs (geometric SVG)
- The white PIQI logo
- The hero video already in place at `/public/brand/video/consultants-office.mp4` (consultants office — neutral business setting, acceptable as group abstract context)

**Each vertical hub** owns its own photography. A property image never appears on the Auto hub. A yacht image never appears on the homepage hero. The VerticalGrid router on the homepage shows each vertical's own thumbnail in its own tile — no blended composites.

---

## Existing brand precedent (do not change without sign-off)

- **Theme:** dark
- **Logo:** white (`/public/brand/logo/new-piqi-logo-white.png`)
- **Display font:** Montserrat
- **Body font:** Hind
- **Existing brand assets:** `/public/brand/`
  - `logo/` — PIQI marks
  - `icons/` — service icons (Consultation, Stats, Management, Cube, Projects)
  - `brands/` — per-vertical thumbnails (Home, Property, Yatch — note misspelled filename)
  - `hero/` — Consulting hero (also misspelled "Consutling")
  - `video/` — `consultants-office.mp4`
  - `animations/` — Lottie JSON files

---

## Per-Vertical Imagery Direction

| Vertical | Imagery direction |
|----------|-------------------|
| Consulting | Office / boardroom / abstract data; the existing consulting hero asset works |
| Property Management | Real properties — exteriors, interiors, maintenance scenes |
| Fashion (Downtown Fashion) | Garments, fittings, finished pieces in context |
| Yacht Charters | The vessel, the cabins, the coastline |
| Auto (Piqi Auto) | Workshop, before/after panel work, tyre wall (no glamour-car stock photography) |
| Coaching | Restrained / suggestive — sessions, environments — never stock "two people pointing at a laptop" |

---

## Motifs & Animation

- Geometric SVG motifs at 10-20% opacity over dark sections (group + consulting only)
- Subtle motion: gentle fade-in on scroll, restrained Lottie use
- All motion must respect `prefers-reduced-motion`
- The existing reveal animations and `LottiePanel` component are acceptable but should be audited for performance impact during Phase 5

---

## Design References

The redesign research dossier ([`../redesign/00-RESEARCH-DOSSIER.md`](../redesign/00-RESEARCH-DOSSIER.md)) catalogues the full reference set. The most directly applicable to PIQI's dark, plain-CSS, house-of-brands shell:

- **Craft / taste benchmarks:** Linear, Vercel (Geist), Stripe, Apple — layered near-black, one editorial accent, strict spacing/type scales, glow-behind-content.
- **Premium dark / luxury verticals:** high-end yachting (Wajer, Burgess), automotive ("Range Rover" register), fashion editorial (oversized type, asymmetry, dramatic whitespace) — for the Yachts / Auto / Fashion hubs.
- **Interactive feel (cheap-but-premium tier):** Cuberto (magnetic cursor), Obys (scroll-pinned typography), Lenis smooth scroll — the 80%-wow moves that need no WebGL.
- **House-of-brands IA:** Virgin (manifesto-first umbrella), LVMH / Accor (distinct properties in identical chrome) — adapted to the octopus.

Virgin Group's umbrella site remains the conceptual reference for the group/vertical relationship; the visual language stays PIQI's own (dark theme + Montserrat/Hind, red statement accent), not Virgin red.

### Footer
Multi-column. Contains: brand mark, group nav, vertical list, contact details (PO Box, email, two phones), legal links, "Powered By Bellzan" subfooter (currently present).

### Fonts
- Display: Montserrat
- Body: Hind

### Colors
- See `/public/brand/` and `app/globals.css` for the working palette.
- Final palette tokens live as plain CSS custom properties in `app/globals.css` (no Tailwind, no `@theme`). The evolved redesign palette — layered dark elevation, the PIQI red ramp, glow/grain tokens — is specified in [`../redesign/02-DESIGN-SYSTEM-SPEC.md`](../redesign/02-DESIGN-SYSTEM-SPEC.md).
