---
target: homepage
total_score: 20
p0_count: 3
p1_count: 4
timestamp: 2026-06-08T19-46-18Z
slug: src-app-page-tsx
---
# Design Critique: Giriraaj Textiles Landing Page

## Design Health Score

| # | Heuristic | Score | Key Issue |
|---|-----------|-------|-----------|
| 1 | Visibility of System Status | 2/4 | Contact form submits to browser alert — no real confirmation; no loading states |
| 2 | Match System / Real World | 2/4 | Unicode icons (⚙, ⚚, ⚛) and emoji (🏩 for cement?) don't map to industrial yarn manufacturing |
| 3 | User Control and Freedom | 4/4 | Smooth scrolling, mobile menu closes on nav, no traps |
| 4 | Consistency and Standards | 2/4 | Page violates its own DESIGN.md (banned eyebrows + numbered markers). Three different icon visual languages |
| 5 | Error Prevention | 1/4 | No email validation, no max lengths, no phone field, form doesn't actually submit |
| 6 | Recognition Rather Than Recall | 3/4 | Clear section labels, logical buyer journey. Sections visually blur together |
| 7 | Flexibility and Efficiency of Use | 2/4 | No quick-reference, no spec sheets, no downloadable assets for power users |
| 8 | Aesthetic and Minimalist Design | 3/4 | Strong palette and typography, but identical section structures ×5 feel templated |
| 9 | Error Recovery | 0/4 | Zero error handling. No inline validation, no API error states |
| 10 | Help and Documentation | 1/4 | No FAQ, no MOQ, no shipping info, no certifications mentioned |
| **Total** | | **20/40** | **Acceptable — significant improvements needed** |

## Anti-Patterns Verdict

**LLM assessment:** A skilled observer would say "AI scaffolded this, then someone wrote the copy." The page avoids the loudest tells (gradient text, glassmorphism) but the structural rhythm gives it away: five sections, each with the same pattern (eyebrow → heading → paragraph → card grid), all with identical scroll-reveal animations. The strongest tells are the uppercase tracked eyebrows on every section (banned by DESIGN.md), numbered "01/02/03" process badges (also banned), and emoji representing industrial sectors in the Industries section.

**Deterministic scan:** The side-tab detector found 1 issue: `border-l-3` on WhyUs cards at `src/components/WhyUs.tsx:45`. Additionally, contrast analysis found 5 WCAG AA failures, the `bg-paper` class resolves to an undefined token, and there is no `prefers-reduced-motion` check in ScrollReveal.

## Overall Impression

The page has a solid foundation — a distinctive color palette (terracotta/ochre/warm-ink), clean DM Sans typography, and logically ordered sections that follow a buyer's research journey. It's being held back by templated layout decisions that read as AI-generated, a critical lack of product imagery (violating the brand's #1 principle "Show the work"), and a non-functional contact form that makes the primary conversion path a dead end.

## What's Working

**1. Color palette is consistent and distinctive.** Terracotta (#c24b3a), ochre (#d4a853), warm ink (#3d2c1f) create an identity that survives the templated layout. Implementation is uniform across all sections.

**2. Section ordering follows the real buyer journey.** Hero → Products → Industries → Process → Why Us → Contact maps logically to procurement evaluation. The copy in each section answers the question a buyer would have at that stage.

**3. Typographic scale is well-calibrated.** DM Sans with weight contrast (700→600→500→400), clamp-based sizing, `text-balance` on headings, and 70ch max body width make for genuinely comfortable reading.

## Priority Issues

### P0 — Zero imagery on an imagery-implying brief

**Where:** Entire page. `public/` contains only Next.js boilerplate SVGs. No image imports in any component.

**Why it matters:** PRODUCT.md principle #1: "Show the work. Reveal the process, the materials, the supply chain." A procurement manager evaluating a yarn supplier needs to see the yarn — texture, thickness, color, spooling. Icons and text cannot substitute.

**Fix:** Add hero-quality product shot (yarn spools/thread close-up), 2-3 factory shots (workshop, warehouse, machinery), and process imagery. Industrial authenticity beats stock perfection.

**Suggested command:** `$impeccable craft visual-assets`

### P0 — Contact form submits to browser alert only

**Where:** `Contact.tsx:79-84`

**Why it matters:** A B2B procurement manager enters company, email, and detailed specs, clicks "Send Enquiry" — and the data goes nowhere. This is the primary conversion path. The page's entire business case is broken if the form does not reach the company.

**Fix:** Hook to a real endpoint (server action, Formspree, webhook).

**Suggested command:** `$impeccable harden contact-form`

### P0 — `bg-paper` class defined in components but missing from theme

**Where:** `globals.css` has no `--color-paper`. Components use `bg-paper` (Products, Process, Contact).

**Why it matters:** Tailwind v4 generates no utility for an undefined token. Cards that expect a white background (`--color-paper: #ffffff`) get transparent, which on white background is invisible but on surface backgrounds would be invisible. This is a silent rendering bug.

**Fix:** Add `--color-paper: #ffffff` to `@theme` in `globals.css`.

### P1 — Repeated uppercase tracked eyebrow above every section (banned by DESIGN.md)

**Where:** Every component — "What We Make", "Where It Goes", "How We Work", "Why Giriraaj", "Get in Touch"

**Why it matters:** DESIGN.md explicitly bans this: "Don't use uppercase eyebrows above every section." Five identical section intros make the page feel machine-generated.

**Fix:** Vary entry patterns. Drop the eyebrow on 2-3 sections. Lead with the heading directly on self-explanatory sections.

**Suggested command:** `$impeccable quieter section-headers`

### P1 — Numbered step markers in Process section (banned by DESIGN.md)

**Where:** `Process.tsx` lines with "01", "02", "03" in circular badges.

**Why it matters:** Directly violates DESIGN.md: "Don't use numbered section markers (01/02/03) as default scaffolding." Strongest AI-template signal on the page.

**Fix:** Remove numbers. Use descriptive verb headings only. Or redesign as a timeline with spatial relationship.

**Suggested command:** `$impeccable shape process-section`

### P1 — 5 WCAG AA contrast failures

**Where:** Primary red (#c24b3a) and muted (#8c7b6e) against white, surface, and primary-light backgrounds all fail 4.5:1.

**Why it matters:** Body text on the hero badge (primary on primary-light) fails at ~2.3:1. The muted text used for body/description copy on white fails at ~3.8:1. PRODUCT.md requires WCAG AA.

**Fix:** Darken muted to meet 4.5:1 (e.g., #6b5d52). Adjust primary-light to darker shade for badges.

**Suggested command:** `$impeccable colorize contrast-fix`

### P2 — Emoji icons in Industries section

**Where:** `Industries.tsx` — 🏩🌾🏬🌱👕📦

**Why it matters:** Renders inconsistently across platforms. Hotel emoji for "Cement & Building Materials"? Reads as "no assets available."

**Fix:** Replace with simple inline SVGs or drop icons entirely. Use the same icon container pattern from Products for consistency.

**Suggested command:** `$impeccable craft industry-icons`

### P2 — No reduced-motion support

**Where:** `ScrollReveal.tsx` sets inline opacity/transform/transition with no `prefers-reduced-motion` media query.

**Why it matters:** DESIGN.md requires reduced-motion support. Users with motion sensitivity get full animation regardless of preference.

**Fix:** Check `window.matchMedia("(prefers-reduced-motion: reduce)")` and skip animation or use crossfade.

**Suggested command:** `$impeccable animate reduce-motion`

## Persona Red Flags

**Jordan (First-Timer):** No product imagery → can't verify what the yarn looks like. No MOQ → can't self-qualify. Placeholder phone number → won't call.

**Riley (Stress Tester):** Form submits to alert → data loss. No inline validation → no feedback. No spec sheets → can't evaluate without contacting.

**Casey (Mobile User):** Industry emoji tiny in 2-column grid on mobile. Process section wastes vertical space. `backdrop-blur-[12px]` may stutter on mid-range Android.

**Prakash (Procurement Manager — project-specific):** No quantitative specs (denier range, breaking strength). No factory photos or equipment details. No certifications (BIS, ISO). No logistics information (lead time, delivery regions). Placeholder phone number kills trust immediately.

## Minor Observations

1. `Navbar.tsx:41` — `duration-400` may not be a valid Tailwind v4 duration class (scale is 75/100/150/200/300/500/700/1000).
2. Contact.tsx phone number is placeholder `+91 99999 99999` — actively damages credibility for B2B.
3. Products "Custom Specifications" card is weaker — generic copy, no specifics.
4. Footer minimal — no nav links, no social proof, no "back to top."
5. No favicon beyond the Next.js default.

## Questions to Consider

- "What would this page look like if each section had its own visual personality instead of the same card-grid rhythm?"
- "Does showing zero product photography align with a brand whose first principle is 'show the work'?"
- "What would Prakash decide in 30 seconds if he landed here — call a competitor?"
