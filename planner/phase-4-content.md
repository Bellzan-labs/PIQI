# Phase 4: Content Infrastructure (PIQI Group — Lightweight)

> v1 has no content pipeline. Live site has no blog, no guides, no case studies, no testimonials. This phase is **demoted** — most of the original template's scope is deferred to post-launch.

**Depends on:** Phase 2 complete
**Reference docs:** [branding-tone](reference/branding-tone.md) | [audience](reference/audience.md)

---

## What's in v1

Only two things — both optional:

1. **FAQ page** — only if PIQI provides Q&A content. Skip if not.
2. **RSS stub** — optional infrastructure placeholder for the future blog. Zero content cost.

## What's deferred to Phase 6

| Item | Why deferred |
|------|--------------|
| Resources hub (`/resources`) | No content to populate it |
| Blog listing + posts | No editorial pipeline today |
| Guides | No long-form content today |
| Case studies / portfolio | None exist (blocker) |
| Speakable schema rollout | Depends on Article content existing first |

---

## 1. FAQ Page (`/faqs`) — optional

Only build if PIQI provides at least 8-10 Q&A entries that span verticals OR are clearly group-level. If only one vertical has FAQs, instead embed them inline on that vertical's hub.

- [ ] **Hero** — "Frequently asked questions" (group voice).
- [ ] **Accordion** — grouped by category (e.g., "About PIQI", "Consulting", "Property", per-vertical as needed).
- [ ] Keyboard accessible: Enter/Space toggle, `aria-expanded`, `aria-controls`, `role="region"`.
- [ ] **CTABanner** → `/contact`.

### Schema
- [ ] FAQPage JSON-LD (`mainEntity` array of Question/acceptedAnswer)
- [ ] BreadcrumbList: Home > FAQs

### Content guidelines
- Concise (2-3 sentences for simple, short paragraph for complex)
- Optimized for voice / AI extraction
- Link to vertical hubs where natural
- Include "Where are you based?" / "How do I work with PIQI?" / "Which verticals are you actively taking on new clients in?" types

---

## 2. RSS Stub — optional

If a blog ships post-launch, having the RSS pipe wired now saves later work.

- [ ] Install a Next.js RSS helper (e.g., write a small `app/rss.xml/route.ts` handler)
- [ ] Generate from a `lib/data/blog.ts` array (empty in v1)
- [ ] Add `<link rel="alternate" type="application/rss+xml" href="/rss.xml">` to root layout `<head>`
- [ ] Validate at validator.w3.org/feed/ when seeded

Skip entirely if blog isn't on the post-launch roadmap.

---

## Phase 4 Checklist (Done When...)

- [ ] FAQ page exists and validates **OR** is explicitly skipped with a Phase 6 task logged
- [ ] RSS stub exists **OR** is explicitly skipped
- [ ] Phase 6 backlog has entries for: Resources hub, Blog infrastructure, Case studies, Guides
