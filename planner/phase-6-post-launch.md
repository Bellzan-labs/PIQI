# Phase 6: Post-Launch (PIQI Group)

> Monitoring, indexing, and the expansion backlog after go-live.

**Depends on:** Phase 5 complete (live at piqigroup.com)

---

## 1. Search Console (Week 1)

- [ ] Verify ownership of piqigroup.com (DNS TXT or HTML)
- [ ] Submit `sitemap.xml`
- [ ] Request indexing for priority pages: homepage, /consulting, each consulting spoke, /contact
- [ ] Monitor Coverage report — fix "Discovered / Crawled — not indexed"
- [ ] Verify structured data shows no errors in Enhancements

---

## 2. Analytics Baseline (Week 1-2)

- [ ] Confirm GA4 collecting
- [ ] Set up reports:
  - Traffic by page (which verticals get the most visits — informs investment)
  - Conversion funnel: page view → contact form submit (segmented by `vertical-of-interest` field)
  - CTA click breakdown
  - Top organic landing pages
- [ ] Document baseline metrics:
  - Monthly sessions
  - Bounce rate by section
  - Average session duration
  - Form submission rate (overall + per vertical)

---

## 3. Vercel Analytics

- [ ] Vercel Analytics enabled (free tier) — real-user Core Web Vitals
- [ ] Monitor Vercel logs for `/api/contact` errors (Resend failures, validation errors)
- [ ] Optional: Sentry for runtime errors after 1 month if needed
- [ ] Resend dashboard weekly check — bounce / complaint rates

---

## 4. Performance Monitoring (Monthly)

- [ ] Lighthouse monthly on: `/`, `/consulting/strategy`, `/contact`, one vertical hub
- [ ] Search Console Core Web Vitals: LCP < 2.5s, INP < 200ms, CLS < 0.1
- [ ] Investigate regressions immediately
- [ ] Page weight check — flag any over 500KB excluding images

---

## 5. SEO Monitoring (Monthly)

- [ ] Search Console:
  - New crawl errors
  - Structured data errors
  - Manual actions
  - Top queries + CTR
- [ ] Track keyword rankings:
  - Brand: "PIQI", "PIQI Group", "Piqi consulting"
  - Per vertical: "Downtown Fashion", "Piqi Auto", "PIQI yacht charter"
  - Consulting: "project commercial services South Africa", "supply chain consulting Johannesburg" (refine after first month)
- [ ] Update meta titles/descriptions where CTR is low against high impressions
- [ ] Quarterly broken-link sweep

---

## 6. Expansion Backlog (priority order)

This is the agreed list of post-launch additions, ordered.

1. **Team / Leadership page** — once team members are named (currently a blocker). Adds Person JSON-LD per member. New route: `/about/team` or expand `/about`.
2. **Case studies / testimonials** — across all verticals as content arrives. Without these, social proof is missing site-wide.
3. **Blog infrastructure** — MDX under `content/blog/`, `app/blog/page.tsx` listing, `app/blog/[slug]/page.tsx` post pages, BlogLayout with TOC + author + Article schema, RSS wired to real posts. Cadence target: 2 posts/month.
4. **Resources hub** (`/resources`) — once blog + any guides exist.
5. **Per-vertical FAQ sections** — embed inline on hub pages once questions are gathered.
6. **Banking vertical** — only if PIQI un-defers it. New route `/banking` + nav slot. Re-evaluate the octopus to confirm it's still siblings-only.
7. **Yachts vessel detail page** — once vessel name + port + pricing are confirmed. Possibly `/yachts/[vessel-slug]`.
8. **Consulting case study spokes** — once content arrives. Each spoke gets a "Recent work" section.
9. **Search** (Pagefind or similar) — only worth it once page count > ~30.
10. **Auto fitment partnership copy fix** — once partner identified.

---

## 7. Iteration

Based on data:

- [ ] A/B test homepage hero copy if vertical click-through is unbalanced (e.g., one vertical absorbs all traffic and others starve)
- [ ] Refine per-vertical CTAs based on conversion data
- [ ] Add real testimonials as they arrive
- [ ] Reconsider whether all six verticals stay on the homepage if one is being wound down

---

## Phase 6 Ongoing Checklist

- [ ] Search Console verified, sitemap submitted
- [ ] GA4 baseline documented
- [ ] Lighthouse maintained at 95+
- [ ] No unresolved Search Console errors
- [ ] Expansion backlog reviewed quarterly with PIQI stakeholder
- [ ] Team page shipped once team is named
- [ ] Banking vertical decision logged (un-defer or kill)
