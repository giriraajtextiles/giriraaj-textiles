---
target: homepage
total_score: 20
p0_count: 3
p1_count: 4
timestamp: 2026-06-08T20-11-21Z
slug: src-app-page-tsx
---
# Design Critique: Giriraaj Textiles Landing Page

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | Form has pending/success states, but no scroll indicator on hero, no active nav state, no section progress |
| 2 | Match System / Real World | 2/4 | Straightforward language, but "finest packaging" doesn't fit cement bags, fake phone number, "repurposed" is wrong word for yarn manufacturing |
| 3 | User Control and Freedom | 3/4 | Nav links work, back-to-top exists, but mobile menu doesn't close on outside click or Escape |
| 4 | Consistency and Standards | 2/4 | Color + typography consistent; but WhyUs has unique decorative bar, Contact has different bar pattern, Process has width-varying bars, `bg-[#e8e2dc]` hardcoded when `--color-border` exists |
| 5 | Error Prevention | 2/4 | Inline validation added; no phone validation, company field unvalidated, no spam protection (TODO in contact.ts:23), no confirmation after submit |
| 6 | Recognition Rather Than Recall | 2/4 | Clear sections; Process bar widths aren't self-explanatory, no sticky headers, no drill-down |
| 7 | Flexibility and Efficiency | 1/4 | No downloadable spec sheets, no quick-quote, no skip-to-key-info, no keyboard shortcuts |
| 8 | Aesthetic and Minimalist Design | 3/4 | Clean palette, good whitespace; Industries 6-column grid is too cramped, WhyUs cards content-thin |
| 9 | Error Recovery | 3/4 | Inline errors with red borders, but errors use `text-red-500` (not on-brand), form values may not persist on error |
| 10 | Help and Documentation | 0/4 | No FAQ, no tooltips, no about section, no certification info, no product selector guide |
| **Total** | | **20/40** | **Acceptable — significant improvements needed** |

## Anti-Patterns Verdict

**LLM assessment:** A skilled observer would say "AI made this with real copy." The page has been improved since the last critique — contact form now works, reduced-motion is supported, emoji icons replaced with SVGs, eyebrows removed from sections. But the core structural rhythm still reads as templated: seven sections with the same scroll-reveal pattern, three "Source → Process → Deliver" steps (the most generic process framework in existence), generic Unsplash photos where real factory photos should be, and a fake phone number that any Indian B2B buyer will spot instantly. The headline is the default AI "inspiring" approach ("The thread behind India's finest packaging") rather than a specific, credible claim that a procurement manager would trust.

**Deterministic scan:** The side-tab detector found 1 issue: `border-t-2` (border accent on rounded element) in `WhyUs.tsx:46` — this is the top-border-only accent bar on cards, which is a listed absolute ban. No other violations detected.

**Visual overlays:** Skipped — browser automation unavailable in this session.

## Overall Impression

The page has improved meaningfully since the last critique (20/40). The contact form now has real server-side validation with inline errors, reduced-motion support is implemented, emoji icons are gone. However, the site still does not achieve its stated product purpose: PRODUCT.md says first calls should skip the basics and go straight to pricing, volumes, and logistics — but there is zero quantitative specification data, no MOQ, no pricing brackets, no certifications, no delivery timelines. The fake phone number is a P0 trust killer. The seven Unsplash photos (one hidden at 7% opacity!) contradict the brand's #1 principle: "Show the work." The page is a well-designed scaffold waiting for real content.

## What's Working

**1. Color palette and typography are genuinely distinctive.** Terracotta (#c24b3a), ochre (#d4a853), and warm ink (#3d2c1f) create an identity that survives the templated layout. DM Sans with the clamp-based scale and `text-balance` on headings is comfortable and brand-aligned.

**2. Form handling is now production-grade.** `useActionState` with pending state, inline validation per field, success screen, reduced-motion support — this is better than most landing page forms and shows real engineering maturity.

**3. Thematic consistency is strong.** Section ordering follows the B2B evaluation journey. Copy is direct and mostly jargon-free. Layout responsiveness is thoughtful across breakpoints. The brand personality ("reliable, direct, established") is readable in the palette and spacing.

## Priority Issues

### P0 — Fake phone number destroys B2B trust instantly

**Where:** `Contact.tsx:60`

**Why it matters:** `+91 98765 43210` is India's `555-1234`. Every B2B buyer in India will spot this. Combined with "Gujarat, India" as the only location detail (no city, no address), the credibility damage is severe. A procurement manager seeing this will close the tab.

**Fix:** Use actual contact details, or remove the phone number entirely. Add city (Ahmedabad/Surat/Vadodara/Ankleshwar) to location.

**Suggested command:** `$impeccable harden contact-details`

### P0 — No B2B decision-making data anywhere

**Where:** `Products.tsx`, `Process.tsx`, entire page

**Why it matters:** PRODUCT.md says the site should let "first calls skip the basics and go straight to pricing, volumes, and logistics." A procurement manager needs: MOQ, delivery timelines, technical specs with actual numbers (denier range, tensile strength in N, breaking strength), certification badges (BIS, ISO), lead time brackets. None of this exists. Every section is surface-level.

**Fix:** Add spec panels per product with quantitative data. Add certification section. Add downloadable spec sheets.

**Suggested command:** `$impeccable craft product-specs`

### P0 — No social proof or credibility markers

**Where:** `Hero.tsx:39` — "Trusted by packaging businesses across India" (with zero supporting evidence)

**Why it matters:** A badge with no logos, testimonials, or numbers is the opposite of confidence-building. DESIGN.md principle #3 says: "Information density respects the visitor. Give them what they need to make a decision." There is no decision-making evidence on this page.

**Fix:** Add client logos (even anonymized), 1-2 testimonials, concrete statistics ("500+ tons supplied annually," "10+ years in operation"). Replace the badge with something real or remove it.

**Suggested command:** `$impeccable craft social-proof`

### P1 — Generic stock photos where real product/factory photos should be

**Where:** `Hero.tsx:28`, `Products.tsx:19,37,56`, `Process.tsx:9,16,23`

**Why it matters:** DESIGN.md principle #1: "Show the work. Reveal the process, the materials, the supply chain." Seven Unsplash photos of generic industrial scenes do not reveal anything about Giriraaj Textiles. The hero image is hidden at 7% opacity — the site is literally hiding its own imagery. A phone photo of actual yarn spools in a Gujarat factory would communicate more trust than any headline.

**Fix:** Replace with actual product photography. Even mobile phone photos of inventory, machines, or packaging are more credible. If no assets exist, this is the #1 investment priority.

**Suggested command:** `$impeccable craft visual-assets`

### P1 — No depth or drill-down anywhere

**Where:** `Products.tsx`, `Industries.tsx`, `Process.tsx`

**Why it matters:** Every section is single-glance. Products shows 3 cards with teaser specs (3 bullet points each). Industries shows 6 cards with one-liners. A B2B buyer researching a supplier needs depth — spec sheets, application guides, case studies, or at minimum a "View details →" link. The stated purpose of the site is specifically to provide enough depth that calls skip the basics.

**Fix:** Link each product to a detail panel, modal, or page with full specifications, available variants, and inquiry shortcut.

**Suggested command:** `$impeccable harden product-depth`

### P1 — Contact form doesn't capture B2B procurement data

**Where:** `Contact.tsx:101-197`

**Why it matters:** The form asks for generic contact info but not the information a B2B buyer would naturally provide: product interest, monthly quantity range, timeline. Making procurement managers type all this into a plain textarea adds friction and reduces conversion.

**Fix:** Add dropdown fields: Product Interest (Synthetic Sewing Thread / PP Multifilament / Custom), Approximate Monthly Quantity (ranges), Timeline (Immediate / 1-3 months / 3-6 months / Just researching).

**Suggested command:** `$impeccable harden contact-form`

### P2 — WhyUs cards use banned side-stripe border pattern

**Where:** `WhyUs.tsx:46` — `border-t-2 border-primary`

**Why it matters:** This is listed in the impeccable absolute bans: "Side-stripe borders. border-left or border-right greater than 1px as a colored accent on cards." The detector confirms this violation. It also clashes with the 16px card radius.

**Fix:** Replace with full border, background tint, leading icon, or nothing. Use a solid bottom or full border instead.

**Suggested command:** `$impeccable quieter card-borders`

### P2 — Industries grid is too cramped at 6 columns

**Where:** `Industries.tsx:97` — `grid-cols-2 sm:grid-cols-3 lg:grid-cols-6`

**Why it matters:** Titles like "Cement & Building Materials" and "Pulses, Grains & Millets" wrap awkwardly in narrow cards. The content density is high but the cards are too small to be meaningful.

**Fix:** Use `grid-cols-2 sm:grid-cols-3` (max 3 columns) with larger, more readable cards. Or redesign the section entirely.

**Suggested command:** `$impeccable layout industry-grid`

## Persona Red Flags

**Jordan (First-Time Visitor):** No "who this company is" summary above the fold. Two CTAs in hero with equal visual weight. Unsplash photos don't convey authenticity — no real facility, no real yarn, no real team to trust. 7 sections with constant ScrollReveal animation is unnerving for a careful reader.

**Riley (Stress Tester):** No rate limiting on contact form (admitted in `contact.ts:23` TODO comment). No honeypot or CAPTCHA. Mobile menu doesn't close on Escape key. Custom smooth scroll intercepts native anchor behavior — a11y concern. Form doesn't actually send data anywhere (just logs to console).

**Casey (Mobile User):** Industry grid 2 columns with 32px SVG icons + multi-word titles = cramped. Hamburger icon has no animation differentiating open/closed state. Process bars lose width distinction at small sizes. `backdrop-blur-[12px]` on navbar may stutter on mid-range Android.

**Prakash (Procurement Manager — project-specific):** Cannot find MOQ, pricing, delivery timelines, technical specs with actual numbers, certifications. Fake phone number destroys trust. "Gujarat, India" is too vague — no city name signals "we don't actually have a facility." No company history, no manufacturing capacity data, no competitive differentiation vs. RSWM or other Gujarat thread suppliers. The "Source → Process → Deliver" process describes every manufacturer on earth.

## Minor Observations

1. `Contact.tsx:57-61` — Unicode ☎ ✉ ⚖ render differently across platforms; ⚖ is scales of justice, not location
2. `Products.tsx:57` — `bg-[#e8e2dc]` hardcoded where `--color-border` exists in theme
3. `Products.tsx:104` — Product card image at `h-28` (112px) is too small to be meaningful
4. `Hero.tsx:46` — `<em>` used for "packaging" with `not-italic` — use `<span>` instead
5. `Layout.tsx:23` — `lang="en"` should be `lang="en-IN"` for Gujarat-based Indian business
6. `Layout.tsx` — No favicon, no Open Graph image, no Twitter card metadata
7. `WhyUs.tsx:27-30` — Decorative bar pattern appears only in WhyUs with no explanation
8. `Process.tsx:59-62` — Width-varying bars are a new convention not seen elsewhere; unclear meaning
9. No section has `id` attributes that match nav links in a standard way
10. Rate limiting TODO in `contact.ts:23` — no spam protection on the production contact form

## Questions to Consider

1. **What if the headline answered the buyer's first question instead of being clever?** A procurement manager's question: "Can this thread hold my cement bags shut?" What if the headline was: *"Yarn tested to 48N tensile strength. Every batch. Every delivery."* The brand personality says "reliable, direct, established" — that headline is all three.

2. **What if you showed one real factory photo instead of seven Unsplash photos?** The design principle says "Show the work." Zero visual evidence that Giriraaj Textiles exists as a physical operation. What would it take to get one photo of actual yarn spools on an actual machine?

3. **What if the section order was Process → Products → Industries instead of Products → Industries → Process?** A buyer's evaluation flow: "How do you make it" → "What do you make" → "Who else uses it" → "Why you." The current order is a marketing order (sell, then justify). The product purpose is to replace the "tell me about your company" part of the sales call — lead with process to match the buyer's mental model.
