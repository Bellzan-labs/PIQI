# PIQI Group — Working Rules for Claude

Read this before any non-trivial change. The planner docs (`planner/MASTER-PLAN.md` + phase docs) are the project spec. This file is the set of non-negotiable rules that govern *how* the work gets done.

## Project at a glance

- **PIQI Group** — South African multi-vertical group, founded 2016, serves clients internationally.
- **Site model:** Virgin-style thin-umbrella group shell. **Octopus sitemap** — six verticals (Consulting, Property Management, Fashion, Yacht Charters, Auto, Coaching) are siblings under PIQI Group. Never nest one under another. Only Consulting has sub-service spokes (5) in v1.
- **v1 scope:** ~16 pages.
- **Domain:** piqigroup.com (migration to Vercel scheduled for Phase 5).

## Locked tech decisions (do not change without user approval)

- **Next.js 14 App Router + React 18 + TypeScript strict + plain CSS with CSS custom properties.** Design tokens live in `app/globals.css`.
- **No Tailwind.** Extend `globals.css` in the same token-driven style. No CSS-in-JS. No per-component `.module.css` unless a rule is genuinely scope-specific.
- **Dark theme only.** `[data-theme="light"]` and `ThemeToggle` were removed on purpose. Don't reintroduce them.
- **PIQI red `#bb181d` is a statement color.** Use it editorially: full-bleed hero + red→navy→ink `--overlay` gradient, red pill for active nav (`.group-nav-link-active`), oversized red stat numbers, red left-bar accents. Never make it timid.
- **Header:** `position: fixed`, transparent at scrollY ≤ 12, solid dark-glass above. `Main { padding-top: var(--header-height) }`; full-bleed heroes cancel with negative margin-top. Don't revert.
- **Favicon:** PIQI white logo via `app/icon.png` + `app/apple-icon.png` (Next.js file conventions). Manifest at `public/site.webmanifest` points to the same logo path.
- **Never mix vertical imagery on group pages** (Home, About, Contact). Group pages = abstract / architectural / brand motifs only.
- **Each vertical owns its own Unsplash hero image** with the red overlay. No fallback tiles remaining as of the reimagining pass.

## Quality gate (run before reporting a task done)

```bash
npm run build
npm run lint
npm run typecheck
npm run validate-schema
```

All four must pass. All 16 routes should remain `○ (Static)` in the build output (consulting spokes are `● (SSG)`). If any route flips to `ƒ (Dynamic)`, that's a regression — something in the render tree added a server-only primitive like `headers()` or `cookies()`. Fix the root cause; don't accept the regression.

`validate-schema` should report exactly **66 schemas across 16 routes** (or more if new schemas have been added).

## Commit discipline

- Commit after each logical unit of work, not at the end of the session.
- Use clear, imperative commit messages. The existing repo style (see `git log`) is `<type>: <short summary>` — match it.
- Never skip hooks (`--no-verify`).
- Never amend merged or pushed commits.
- Destructive git operations (`reset --hard`, `push --force`, `checkout .`, branch deletes) require explicit user approval each time — do NOT batch them under general session approval.

## Content & copy rules

- **Never fabricate facts.** Team names, case studies, testimonials, yacht vessel name/port/pricing, physical address beyond the PO box — if the client hasn't provided it, use a TBD or TODO and add a blocker to `planner/MASTER-PLAN.md` Dependencies table.
- **No emoji** anywhere — not in code, not in UI copy, not in final replies.
- Brand strings (`"PIQI Group"`, contact details, founded year) live in `lib/constants.ts` as the single source of truth.
- Vertical copy lives in `lib/data/verticals.ts`; consulting sub-service copy in `lib/data/consulting-services.ts`.

## Workflow patterns that work here

- **Ship then audit:** after shipping a phase or feature, run a dedicated audit subagent before calling it done. The audit looks for regressions, missing metadata, a11y issues, content gaps, and applies bounded fixes.
- **Subagents for bulk work:** phase builds, competitor audits, templatization passes, audit+fix cycles. Give the subagent a comprehensive brief including rules and exit criteria — don't just hand off a one-liner.
- **User prefers terse replies.** End-of-turn summary: 2–3 bullets. No long recaps.

## What to check when a subagent reports done

Subagent summaries describe intent, not always reality. Spot-check:
- `npm run build` actually passes (rerun yourself).
- Files the agent claims to have changed exist and contain the described changes.
- Any photo IDs or external URLs the agent picked are real (not hallucinated).
- The active-nav pill + transparent header + static generation still work.

## What lives where

```
app/                     Routes + layouts + icon/favicon files + sitemap.ts + robots.ts
components/
  global/                Header, GroupNav, MobileNav, Footer, JsonLd, Breadcrumbs
  sections/              Hero, VerticalGrid, VerticalHub, UVP, CTABanner, GroupFacts, ClientLogos
  brand/                 Motif1, Motif2, Motif3 (group-page SVG decoration)
  ui/                    Button, Container, Card, SectionHeading
  (root)                 contact-form, revolver-heading, scramble-text, lottie-panel
lib/
  constants.ts           Site meta, nav, footer links
  data/                  verticals.ts + consulting-services.ts
  schema.ts              JSON-LD builders
public/
  brand/                 Logos, icons, hero images, video, Lottie animations
  site.webmanifest + robots (handled by app/robots.ts) + sitemap (handled by app/sitemap.ts)
scripts/
  validate-schema.js     Post-build JSON-LD crawler
planner/                 Project spec — MASTER-PLAN + phase docs + reference/ + notes.md
```

## Phase status (update as phases ship)

- **Phase 1A — Foundation (audit + scaffold + chrome):** shipped
- **Phase 1B — Section components + brand motifs + schema validator:** shipped
- **Phase 2 — Homepage polish + Consulting hub + spokes content pass:** next
- **Phase 3 — 5 remaining vertical hubs + About + Contact + Resend API:** pending
- **Phase 4 — Content infra (FAQ + RSS stub only for v1):** scoped
- **Phase 5 — DNS cutover + Resend + self-host fonts + legal copy:** scoped
- **Phase 6 — Post-launch monitoring + content growth:** scoped
