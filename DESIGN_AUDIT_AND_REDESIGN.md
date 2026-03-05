# 🏗️ CRIC AFRIkA SARL — Design Audit & Corporate Redesign Proposal

**Author:** Senior Product Designer + Frontend Architect
**Date:** 2026-02-10
**Scope:** Full UI/UX audit from codebase + corporate-grade redesign specification
**Status:** Ready for Review

---

## TABLE OF CONTENTS

1. [Executive Summary](#1-executive-summary)
2. [Design Audit Report](#2-design-audit-report)
3. [New Corporate Design Direction](#3-new-corporate-design-direction)
4. [Color System Application Rules](#4-color-system-application-rules)
5. [Typography System](#5-typography-system)
6. [Grid & Spacing Strategy](#6-grid--spacing-strategy)
7. [Component Redesign Specification](#7-component-redesign-specification)
8. [Section-by-Section Layout Proposal](#8-section-by-section-layout-proposal)
9. [CTA Hierarchy & Funnel Logic](#9-cta-hierarchy--funnel-logic)
10. [Micro-Interaction Strategy](#10-micro-interaction-strategy)
11. [Accessibility & Performance Rules](#11-accessibility--performance-rules)
12. [Scalability for Future Modules](#12-scalability-for-future-modules)

---

## 1. EXECUTIVE SUMMARY

### What the site IS
CRIC AFRIkA SARL is a Cameroonian B2B industrial import company (generators, compressors, pumps, motors). The site serves as their primary digital presence for lead generation, product catalog, and corporate credibility.

### What the site NEEDS to feel
**Trustworthy · Competent · Established · Conversion-ready**

### Critical finding
The codebase reveals a site caught between **three conflicting design identities** — remnants of a "startup-style" initial design, a mid-stage "Solid & Industrial" pivot, and the latest "High-Precision Technical Corporate" overhaul. This has created a **fragmented visual language** that undermines trust and conversions.

### Top-line recommendation
**Strip everything back to one clean, professional corporate identity.** Eliminate the accumulated design debt, establish a single system of record, and rebuild with a conversion-driven corporate hierarchy.

---

## 2. DESIGN AUDIT REPORT

### 2.1 What Works ✅

| Area | Finding | Keep/Evolve |
|------|---------|-------------|
| **Tech stack** | React 19 + Vite + Tailwind 4 + Framer Motion is excellent, modern, and performant | **Keep** |
| **i18n architecture** | Clean `TranslationContext` with `fr.json` / `en.json` is production-grade | **Keep** |
| **SEO foundation** | `react-helmet-async`, structured JSON-LD, canonical URLs, OG tags — all solid | **Keep & extend** |
| **Route architecture** | Clear page routes in `constants/routes.jsx`, `ScrollToTopOnRoute` utility | **Keep** |
| **Content constants** | All data separated from presentation in `constants/*.js` | **Keep** |
| **Media error handling** | `handleImageError` fallback pattern is a good resilience measure | **Keep** |
| **Brand colors** | `#ff8c42` (Orange) and `#a8d05f` (Green) are distinctive, memorable, and appropriate for the sector | **Keep as anchors** |
| **WhatsApp integration** | Direct CTA to actual business communication channel | **Keep, redesign** |

### 2.2 What Fails ❌

#### **2.2.1 — Identity Crisis (CRITICAL)**
The codebase contains **three coexisting, conflicting design systems**:

| File | System | Evidence |
|------|--------|----------|
| `tailwind.css` | System B — "Corporate Industrial" | `--radius-corporate: 12px`, `--font-family-heading: 'Sora'`, `btn-primary/secondary/outline` |
| `global.css` | System A — "Startup Gradients" | `.btn-orange`, `.btn-green`, `.btn-outline-accent`, `rounded-full`, `rounded-3xl`, radial gradient body blobs |
| Pages (About, Service, Products, etc.) | System A (dominant) | Hardcoded hex values `text-[#222222]`, `text-[#6f6f6f]`, `rounded-2xl`, `rounded-3xl`, pill-shaped buttons |
| Home page | System B (partially applied) | Uses `btn-primary`, `btn-outline`, `rounded-corporate`, `text-ink`, semantic tokens |
| KI records | System C — "High-Precision Technical" | References `btn-tech-primary`, `tech-card`, `Space Grotesk`, `2px/4px/6px radii`, `1440px grid` — **but none of this is in the actual CSS** |

**Verdict:** System C was documented but never fully implemented. System A dominates the codebase. System B is partial. The result is visual incoherence.

#### **2.2.2 — Hardcoded Values Everywhere**
Pages use **raw hex values** instead of design tokens:

```jsx
// Found in About.jsx, Service.jsx, Products.jsx, Contact.jsx, Realisations.jsx, NotFound.jsx:
className="text-[#222222]"    // Instead of text-ink
className="text-[#6f6f6f]"    // Instead of text-ink-muted
className="text-[#4b4b4b]"    // No token exists for this
className="text-[#ff8c42]"    // Instead of text-primary
className="bg-[#f9faf3]"      // No token exists — ad-hoc green tint
className="bg-[#e7efd5]"      // No token — ad-hoc green background
className="bg-[#fff2e9]"      // No token — ad-hoc orange tint
className="bg-[#fefcf8]"      // No token — ad-hoc warm white
className="bg-[#fffdf6]"      // No token — ad-hoc off-white
```

**Impact:** Any brand change requires editing 100+ locations instead of updating one token. Maintenance nightmare.

#### **2.2.3 — Ghost Color: Corporate Blue `#1b365d`**
Defined in `tailwind.css` as `--color-corporate-blue`, used in `Home.jsx` (footer-like dark sections) and `Footer.jsx` (`bg-corporate-blue`). But the KI system documents this color being **replaced** with `--color-base-dark: #0a0c10`.

**The blue has no clear role:** It's not the primary, not the secondary, not in the brand palette. It adds visual noise.

#### **2.2.4 — Third "Accent" Color: `#386fd5` (Blue)**
Found in `Products.jsx`, `global.css` (`.btn-outline-accent`, `.mesh-overlay`), and product badge styling. This blue was **never defined as a design token** and appears to be a rogue color that drifted in.

**Verdict:** This must be eliminated from a controlled corporate palette.

#### **2.2.5 — Radius Inconsistency**
The codebase uses **at least 8 different radius values**:

| Radius | Usage |
|--------|-------|
| `rounded-full` (9999px) | Buttons, badges, avatars (old system) |
| `rounded-3xl` (24px) | Cards, images (old system) |
| `rounded-[32px]` | Product image wrappers |
| `rounded-[26px]` | Benefit cards |
| `rounded-[28px]` | Inner product images |
| `rounded-2xl` (16px) | Various cards |
| `rounded-corporate` (12px) | New system cards, header |
| `rounded-button` (8px) | New system buttons |
| `rounded-xl` (12px) | Form inputs |

**Verdict:** A corporate site needs a maximum of 3–4 radius values. The current state is chaotic.

#### **2.2.6 — Duplicate & Conflicting Button Systems**
The codebase has **three sets of button utilities** in two different files:

| File | Buttons | Shape |
|------|---------|-------|
| `tailwind.css` | `btn-primary`, `btn-secondary`, `btn-outline` | `rounded-button` (8px) |
| `global.css` | `.btn-orange`, `.btn-green`, `.btn-outline-accent` | `rounded-full` (pill) |
| Inline in pages | Custom one-off `className` strings | Varies per instance |

Pages predominantly use `.btn-orange` + inline styles, making the newer system dead code.

#### **2.2.7 — Typography Confusion**

| Layer | Heading Font | Body Font |
|-------|-------------|-----------|
| `tailwind.css` `@theme` | `'Sora'` | `'Inter'` |
| `global.css` base layer | `'Space Grotesk', 'Inter'` for headings | `'Inter'` |
| Google Fonts import | `Inter` + `Space Grotesk` | — |
| KI documentation | `Space Grotesk` for headings | `Inter` for body |

`Sora` is referenced in `tailwind.css` but **never loaded via Google Fonts**. It will silently fallback. Meanwhile, `Space Grotesk` is loaded but overridden by the `@theme` declaration.

#### **2.2.8 — Body Background Creates Visual Noise**
```css
body {
    background-color: #f4f5f0;
    background-image:
        radial-gradient(circle at 5% 10%, rgba(168, 208, 95, 0.18), transparent 40%),
        radial-gradient(circle at 85% 5%, rgba(56, 111, 213, 0.12), transparent 45%),
        radial-gradient(circle at 50% 95%, rgba(255, 140, 66, 0.16), transparent 40%);
    background-attachment: fixed;
}
```
Three colored blobs on the body background — one of which uses the **rogue blue** `#386fd5` — create a "playful" impression inconsistent with corporate aspirations. The `background-attachment: fixed` also causes scroll performance issues on mobile.

#### **2.2.9 — `.mesh-overlay` is Overused**
This utility injects two colored radial gradients as a `::before` pseudo-element. Used on `PageHeader`, `About.jsx`, `Contact.jsx`, `NotFound.jsx`, product images. It's decorative noise that dilutes content focus.

#### **2.2.10 — No Container Max-Width**
```css
@utility container {
    margin-inline: auto;
    padding-inline: 2rem;
    /* max-width: 1280px; */  ← COMMENTED OUT
}
```
The container has **no max-width**. On large screens, content will stretch edge-to-edge. This is a fundamental layout failure.

#### **2.2.11 — Framer Motion Overuse**
Every page wraps nearly every element in `<motion.div>` with `whileInView` animations. On the Home page alone: **10+ independently animated blocks**. This:
- Creates a "popcorn effect" where content pops in everywhere
- Reduces perceived load speed
- Feels amateur rather than premium
- Causes layout shift

#### **2.2.12 — Missing Focus/Active States**
The only `:focus-visible` styles are on `.btn-orange`/`.btn-green`/`.btn-outline-accent` in `global.css`. The newer `btn-primary`/`btn-secondary`/`btn-outline` in `tailwind.css` have **no focus styles**. Navigation links, form inputs, and the language switcher lack consistent focus indicators.

#### **2.2.13 — `next` in Dependencies**
```json
"next": "16.0.7"
```
Next.js is listed as a dependency but **not used anywhere** in the codebase. Dead weight.

### 2.3 What to Discard 🗑️

| Item | Rationale |
|------|-----------|
| `global.css` button classes (`.btn-orange`, `.btn-green`, `.btn-outline-accent`) | Replaced by token-based system |
| `global.css` gradient utilities (`.bg-warm-gradient`, `.bg-lemon-blend`, `.bg-hero-gradient`) | Replace with 2–3 controlled tokens |
| `.mesh-overlay` pseudo-element | Noisy, uncontrolled decoration |
| Body radial gradients | Replace with clean solid or minimal gradient |
| All hardcoded hex color values in JSX | Replace with semantic tokens |
| `rounded-full` on buttons | Not corporate-appropriate, use controlled radius |
| `rounded-3xl` / `rounded-[32px]` / `rounded-[26px]` etc. | Consolidate to max 3 radii |
| `#386fd5` blue color anywhere | Off-brand, undeclared |
| `#1b365d` corporate blue | Unnecessary third brand color |
| `Sora` font reference | Never loaded, dead reference |
| `.card-accent` class | Unused in any component |
| `.stats-counter` class | Unused in any component |
| `next` dependency | Not used in project |
| `.language-switcher`, `.language-dropdown`, `.language-option` | Not used; component uses Tailwind classes |

---

## 3. NEW CORPORATE DESIGN DIRECTION

### 3.1 Design Philosophy

**"Precision Industrielle"** — Precise, assertive, clean. The design should communicate:

> *We are a serious, established industrial partner. We move heavy machines, not pixels.*

| Principle | Expression |
|-----------|------------|
| **Authority** | Generous whitespace, controlled typography, restrained color |
| **Trust** | Consistent patterns, professional imagery, structured data |
| **Precision** | Defined grid, controlled spacing scale, aligned elements |
| **Warmth** | Orange accents humanize without being playful |
| **Action** | Clear CTA hierarchy, conversion-oriented flow |

### 3.2 Visual Identity Keywords

```
Corporate  ·  Industrial  ·  Precise  ·  Warm  ·  Confident
```

**NOT:** Technical blueprint · Experimental · Playful · Dark-mode techy · Startup

### 3.3 Reference Aesthetic

Think: **Caterpillar corporate website** meets **Schneider Electric** meets **Siemens Energy** — stripped of German coldness, infused with African warmth through the orange.

---

## 4. COLOR SYSTEM APPLICATION RULES

### 4.1 Core Palette

```css
@theme {
    /* ── Brand Anchors ── */
    --color-primary:         #ff8c42;     /* Orange — brand hero, CTAs, key accents */
    --color-primary-hover:   #e67a35;     /* Darkened for hover states */
    --color-primary-light:   #fff4ec;     /* Tinted background surfaces */
    --color-primary-muted:   rgba(255, 140, 66, 0.12); /* Subtle fills */

    --color-secondary:       #a8d05f;     /* Green — success, functional, support CTAs */
    --color-secondary-hover: #96bb53;     /* Darkened for hover states */
    --color-secondary-light: #f4f8ec;     /* Tinted background surfaces */
    --color-secondary-muted: rgba(168, 208, 95, 0.12); /* Subtle fills */

    /* ── Neutral System ── */
    --color-ink:             #1a1d21;     /* Headlines, primary text */
    --color-ink-secondary:   #4a4f57;     /* Body text, descriptions */
    --color-ink-muted:       #6b7280;     /* Captions, labels, meta */
    --color-ink-ghost:       #9ca3af;     /* Placeholders, disabled */

    --color-surface:         #ffffff;     /* Primary background */
    --color-surface-warm:    #fafaf8;     /* Alternate section bg */
    --color-surface-muted:   #f5f5f3;     /* Card backgrounds, form fields */

    --color-border:          #e5e7eb;     /* Default borders */
    --color-border-strong:   #d1d5db;     /* Emphasized borders */

    /* ── Semantic Colors ── */
    --color-success:         #16a34a;
    --color-error:           #dc2626;
    --color-warning:         #f59e0b;
    --color-info:            #2563eb;

    /* ── Dark Surface (Footer, CTA blocks) ── */
    --color-dark:            #1a1d21;
    --color-dark-elevated:   #252830;
}
```

### 4.2 Application Rules

| Context | Color Rule |
|---------|-----------|
| **Hero CTAs** | Primary orange only. One primary CTA per hero. |
| **Secondary CTAs** | White bg + border, or `--color-secondary` for "success" actions |
| **Text on white** | `--color-ink` for headings, `--color-ink-secondary` for body, `--color-ink-muted` for meta |
| **Text on dark** | White for headings, `white/80` for body, `white/50` for meta |
| **Section badges/labels** | `--color-primary` text + `--color-primary-muted` background |
| **Icon accent fills** | Alternate between `--color-primary` and `--color-secondary` |
| **Borders** | `--color-border` default. Never use white or colored borders on white. |
| **Hover states** | Darken by ~10% (use `*-hover` tokens). Never change hue. |
| **Alternating sections** | `surface` → `surface-warm` → `surface` → `dark` → repeat |
| **No rogue blues** | Remove ALL instances of `#386fd5`, `#1b365d`, `#2b2f33` |
| **Gradient CTAs** | Instead of rainbow gradients, use `primary → primary-hover` with subtle angle |

### 4.3 Forbidden

- ❌ No radial gradient body backgrounds
- ❌ No rainbow gradients (`from-orange via-green to-teal`)
- ❌ No `blur-3xl` decorative blobs on production
- ❌ No hardcoded hex in JSX — always use tokens
- ❌ No `.mesh-overlay` or similar pseudo-element decorations
- ❌ No blue anywhere (unless for `--color-info` contextual alerts)

---

## 5. TYPOGRAPHY SYSTEM

### 5.1 Font Stack

```css
@theme {
    --font-sans:    'Inter', system-ui, -apple-system, sans-serif;
    --font-heading: 'Inter', system-ui, -apple-system, sans-serif;
}
```

**Decision: Use Inter for everything.**

Rationale:
- Inter is already loaded and is a top-tier corporate typeface (used by Linear, Vercel, Stripe)
- Having one font reduces HTTP requests and simplifies the system
- Differentiation is achieved through **weight and tracking**, not font-family switches
- `Space Grotesk` and `Sora` add complexity with minimal differentiation at body sizes

If a display font is desired later, keep `Space Grotesk` for `<h1>` only (hero titles).

### 5.2 Type Scale

| Level | Size | Weight | Tracking | Line Height | Use Case |
|-------|------|--------|----------|-------------|----------|
| **Display** | `3.5rem` (56px) | 700 | `-0.025em` | 1.1 | Hero `<h1>` only |
| **H1** | `2.5rem` (40px) | 700 | `-0.02em` | 1.2 | Page titles |
| **H2** | `2rem` (32px) | 700 | `-0.02em` | 1.25 | Section headings |
| **H3** | `1.5rem` (24px) | 600 | `-0.01em` | 1.3 | Card titles, sub-sections |
| **H4** | `1.25rem` (20px) | 600 | `0` | 1.4 | Small section titles |
| **Body Large** | `1.125rem` (18px) | 400 | `0` | 1.7 | Hero subtitles |
| **Body** | `1rem` (16px) | 400 | `0` | 1.7 | Primary body text |
| **Body Small** | `0.875rem` (14px) | 400 | `0` | 1.6 | Secondary text, descriptions |
| **Caption** | `0.75rem` (12px) | 500 | `0.05em` | 1.5 | Labels, badges, meta |
| **Overline** | `0.6875rem` (11px) | 700 | `0.15em` | 1.5 | Section tags, uppercase labels |

### 5.3 Rules

- **Headings:** Always `--color-ink`, never colored (except first word in hero for brand emphasis)
- **Body:** Always `--color-ink-secondary`
- **Meta/captions:** Always `--color-ink-muted`
- **Section overlines:** Always uppercase, always `Overline` size, primary or secondary color
- **No `font-extrabold` (800)** — max weight is `font-bold` (700)
- **No `text-7xl` or larger** outside hero sections
- **Line height must always be ≥ 1.5** for body text (accessibility)

---

## 6. GRID & SPACING STRATEGY

### 6.1 Container

```css
@utility container {
    margin-inline: auto;
    padding-inline: 1.5rem;         /* 24px mobile */
    max-width: 1200px;              /* Content limit */
}

@media (min-width: 768px) {
    @utility container {
        padding-inline: 2rem;       /* 32px tablet */
    }
}

@media (min-width: 1024px) {
    @utility container {
        padding-inline: 2.5rem;     /* 40px desktop */
    }
}
```

**Why 1200px and not 1440px:** For a B2B industrial site, content readability is more important than edge-to-edge layouts. 1200px creates comfortable line lengths. Hero sections can break out with `max-w-7xl` (1280px) when needed.

### 6.2 Spacing Scale

Use only these increments (Tailwind `spacing` scale):

| Token | Value | Use Case |
|-------|-------|----------|
| `4` | 16px | Inline spacing, icon gaps |
| `6` | 24px | Component internal padding |
| `8` | 32px | Card padding, small gaps |
| `10` | 40px | Section internal spacing |
| `12` | 48px | Between card groups |
| `16` | 64px | Between major content blocks |
| `20` | 80px | Section `padding-block` (standard) |
| `24` | 96px | Section `padding-block` (hero/emphasis) |

### 6.3 Section Rhythm

```
Section:    py-20 (80px vertical)
Section (hero): py-24 (96px vertical)
Section heading → content: mb-12 (48px)
Content groups gap: gap-8 (32px)
Card internal: p-8 (32px)
```

### 6.4 Grid Patterns

| Pattern | Grid | Use Case |
|---------|------|----------|
| **4-column feature** | `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` | Service cards, benefits, stats |
| **3-column content** | `grid-cols-1 md:grid-cols-2 lg:grid-cols-3` | Products, testimonials, projects |
| **2-column split** | `grid-cols-1 lg:grid-cols-2` | Content + image, Content + form |
| **4-column footer** | `grid-cols-1 md:grid-cols-2 lg:grid-cols-4` | Footer layout |

### 6.5 Border Radius (Consolidated)

```css
@theme {
    --radius-sm:    6px;     /* Small elements: badges, tags, chips */
    --radius-md:    10px;    /* Cards, buttons, inputs, dropdowns */
    --radius-lg:    16px;    /* Hero images, modal containers, large cards */
}
```

**Rules:**
- Buttons → `--radius-md` (10px)
- Cards → `--radius-md` (10px) or `--radius-lg` (16px) for hero cards
- Badges/tags → `--radius-sm` (6px)
- Avatars → `rounded-full` (only exception for full radius)
- **No `rounded-3xl`, `rounded-[32px]`, `rounded-full` on buttons/cards**

---

## 7. COMPONENT REDESIGN SPECIFICATION

### 7.1 Header

**Current issues:**
- Good bones but `container` has no max-width
- Navigation icons add clutter for a 6-item nav
- Logo container has unnecessary border/shadow mechanics

**Proposed:**
```
┌─────────────────────────────────────────────────────┐
│  [Logo + "CRIC Africa"]         Nav Items    [FR ▾] [Contact →] │
└─────────────────────────────────────────────────────┘
```

- **Remove icons from nav items** — text-only navigation is cleaner for 6 items
- **Contact CTA**: `btn-primary` (orange), small, right-aligned
- **Language switcher**: Compact text toggle, no globe icon
- **Scroll behavior**: Transparent → white with `border-bottom: 1px solid var(--color-border)`
- **Mobile**: Full-screen overlay (not floating card), nav items centered and large
- **Logo**: Remove the decorative container box; logo + text directly

### 7.2 Footer

**Current issues:**
- `bg-corporate-blue` background is an off-brand color
- Layout is functional but typography is too small

**Proposed:**
- Background: `--color-dark` (#1a1d21) — clean dark, brand-neutral
- Structure: 4-column grid maintained
- Add: subtle top border using `--color-primary` (1px orange line at top of footer as brand accent)
- Typography: Increase to `text-sm` minimum, `leading-relaxed`
- Bottom bar: Clean single-line copyright + legal links

### 7.3 Buttons (Unified System)

**Discard:** `.btn-orange`, `.btn-green`, `.btn-outline-accent`, all inline button styles.

**New system:**

```css
@utility btn-primary {
    background-color: var(--color-primary);
    color: white;
    padding: 0.75rem 1.75rem;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-size: 0.875rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: background-color 200ms, transform 150ms;
    &:hover { background-color: var(--color-primary-hover); }
    &:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
    &:active { transform: scale(0.98); }
}

@utility btn-secondary {
    background-color: transparent;
    color: var(--color-ink);
    padding: 0.75rem 1.75rem;
    border: 1.5px solid var(--color-border-strong);
    border-radius: var(--radius-md);
    font-weight: 600;
    font-size: 0.875rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: all 200ms;
    &:hover { border-color: var(--color-ink); background-color: var(--color-surface-muted); }
    &:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
}

@utility btn-dark {
    /* For use on light backgrounds, dark prominent CTA */
    background-color: var(--color-dark);
    color: white;
    padding: 0.75rem 1.75rem;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-size: 0.875rem;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: background-color 200ms;
    &:hover { background-color: var(--color-dark-elevated); }
    &:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
}

@utility btn-ghost {
    /* Text-like button for tertiary actions */
    background-color: transparent;
    color: var(--color-primary);
    padding: 0.5rem 1rem;
    border-radius: var(--radius-md);
    font-weight: 600;
    font-size: 0.875rem;
    display: inline-flex;
    align-items: center;
    gap: 0.5rem;
    transition: color 200ms, background-color 200ms;
    &:hover { background-color: var(--color-primary-muted); }
    &:focus-visible { outline: 2px solid var(--color-primary); outline-offset: 2px; }
}
```

**Hierarchy:** `btn-primary` (orange) → `btn-dark` (dark) → `btn-secondary` (outline) → `btn-ghost` (text)

### 7.4 Cards

**One reusable card pattern:**

```css
@utility card {
    background-color: var(--color-surface);
    border: 1px solid var(--color-border);
    border-radius: var(--radius-md);
    padding: 2rem;
    transition: box-shadow 200ms, border-color 200ms;
    &:hover {
        box-shadow: 0 8px 30px rgba(0, 0, 0, 0.06);
        border-color: var(--color-border-strong);
    }
}
```

**Variants:**
- `card + elevated`: Add base `box-shadow: 0 1px 3px rgba(0,0,0,0.04)`
- `card + accent-top`: 3px `border-top` in `--color-primary`
- `card + accent-left`: 3px `border-left` in `--color-secondary`

**Discard:** all `backdrop-blur`, `bg-white/85`, `shadow-[0_25px_60px_...]` custom shadows. These are visual excess.

### 7.5 Section Headers (Overline Pattern)

**Standardize all section introductions:**

```jsx
<div className="text-center max-w-2xl mx-auto mb-12">
    <span className="inline-block text-overline font-bold uppercase tracking-[0.15em] text-primary mb-3">
        {t('section.badge')}
    </span>
    <h2 className="text-h2 font-bold text-ink mb-4">
        {t('section.title')}
    </h2>
    <p className="text-body text-ink-secondary leading-relaxed">
        {t('section.subtitle')}
    </p>
</div>
```

**Rules:**
- Always same structure: Overline → H2 → Subtitle
- Always centered for standalone sections
- Left-aligned only when paired with a CTA on the right

### 7.6 PageHeader (Subpage Banner)

**Current:** Uses `.mesh-overlay`, blurred colored blobs, and hero gradient. Feels decorated and noisy.

**Proposed:** Clean, minimal top banner:

```jsx
<section className="pt-36 pb-16 bg-surface-warm border-b border-border">
    <div className="container mx-auto text-center">
        <h1 className="text-h1 font-bold text-ink mb-3">{title}</h1>
        <p className="text-body-lg text-ink-secondary max-w-2xl mx-auto mb-6">{subtitle}</p>
        <nav aria-label="Breadcrumb" className="text-caption text-ink-muted">
            <Link to="/">Accueil</Link> <ChevronRight /> <span className="text-ink">{current}</span>
        </nav>
    </div>
</section>
```

- No decorative blobs
- No mesh overlays
- Subtle warm background
- Clean border separation

### 7.7 CTA Component

**Current:** Over-parameterized with `gradient`, `backgroundClass`, `textColor`, `icon`, `iconAnimation`. Each page calls it with completely different props creating visual inconsistency.

**Proposed:** Reduce to 2 variants:

**Variant A — Dark Block (most common):**
```
┌─────────────────────────────────────────────────────┐
│                    bg: --color-dark                  │
│     [Overline]                                       │
│     H2 Title (white)                                │
│     Subtitle (white/70)                             │
│     [Primary CTA]  [Secondary CTA]                  │
└─────────────────────────────────────────────────────┘
```

**Variant B — Brand Block (for final page CTA):**
```
┌─────────────────────────────────────────────────────┐
│                    bg: --color-primary               │
│     H2 Title (white)                                │
│     Subtitle (white/80)                             │
│     [Dark CTA]  [White Outline CTA]                 │
└─────────────────────────────────────────────────────┘
```

**Remove:** floating icon, `iconAnimation`, rainbow gradients, arbitrary `backgroundClass` props.

### 7.8 Contact Form

**Current issues:**
- Uses `rounded-xl` (not matching system)
- Uses `border-2` (too thick, inconsistent)
- Focus color references non-existent `primary-orange` token
- Submit uses `.btn-orange` (legacy) + `rounded-full` (legacy shape)

**Proposed:**
- All inputs: `border border-border rounded-md` → focus: `border-primary ring-2 ring-primary-muted`
- Labels: `text-caption font-semibold text-ink-secondary uppercase tracking-wide`
- Submit button: `btn-primary w-full py-3.5` — standard system button
- Success/error: Use `--color-success` / `--color-error` with proper accessible contrast

---

## 8. SECTION-BY-SECTION LAYOUT PROPOSAL

### 8.1 HOME PAGE

#### Hero Section
```
┌──────────────────────────────────────────────────────┐
│  [badge: "Votre partenaire industriel"]              │
│                                                       │
│  H1: Équipements                                     │
│  Industriels de                                       │
│  Qualité Supérieure            [Hero Image]          │
│                                                       │
│  Subtitle text (2 lines max)    Rounded-lg, border   │
│                                 Clean shadow          │
│  [Get Quote →]  [See Products]   No blob overlays    │
│                                                       │
│  ┌──────┐ ┌──────┐ ┌──────┐                          │
│  │ 500+ │ │ 15+  │ │ 98%  │   Stats strip           │
│  │Clients│ │ Ans  │ │Satis.│                         │
│  └──────┘ └──────┘ └──────┘                          │
└──────────────────────────────────────────────────────┘
```
- **Remove:** Dot-pattern background, decorative blurred blobs
- **Keep:** Stats counter, two CTAs
- **Image treatment:** Simple `rounded-lg`, subtle shadow, no inner overlay card

#### Services Grid
- **4-column grid** (as current)
- **Card treatment:** Clean `card` utility, icon in `--color-primary` circle, hover elevates shadow
- **Remove:** `whileHover={{ y: -8 }}` (too exaggerated), replace with CSS `hover:translate-y-[-2px]`

#### Products Section
- Background: `--color-dark` (replaces `bg-corporate-blue`)
- **3-column grid** (as current)
- Cards: `bg-white/5 border border-white/10`, clean on dark
- **Remove:** skewed white stripe overlay

#### Why Choose Us
- Background: `--color-surface-warm`
- **Maintain** 2-column layout with benefits grid
- **Clean up:** Remove CheckCircle icons with alternating colors — use single `--color-secondary` checkmark
- Process steps: Clean numbered list with `--color-primary` numbers

#### Testimonials
- **3-column grid** (as current)
- **Simplify card:** Remove floating quote circle, keep text + author + stars
- Stars: Use `--color-primary` fill, consistent

#### Bottom CTA
- **Dark variant** — `--color-dark` background
- Two buttons: Orange primary + white outline

### 8.2 ABOUT PAGE

| Section | Background | Notes |
|---------|-----------|-------|
| PageHeader | `surface-warm` | Clean banner, no mesh overlay |
| Company Story | `surface` | 2-col: text left, image grid right |
| Mission/Vision/Values | `surface-warm` | 3-col cards, then 4-col values grid inside single card |
| Timeline | `surface` | Left-side timeline with green dot markers |
| Team | `surface-warm` | 4-col grid, avatar placeholder → initial letter circle |
| Certifications & Partners | `surface` | 2-col split |
| CTA | `dark` | Standard dark CTA block |

**Key changes:**
- Remove `.btn-orange` / `.btn-green` usage → use `btn-primary` / `btn-secondary`
- Remove all `rounded-3xl` → use `rounded-lg`
- Replace `bg-warm-gradient`, `bg-lemon-blend` → use `bg-surface-warm`

### 8.3 SERVICES PAGE

- Service cards: Alternate left/right layout (keep)
- **Simplify:** Remove color-coded icons, use single `--color-secondary` for all service icons
- Feature checkmarks: Use single `--color-secondary` for all
- Process steps: Clean numbered circles, horizontal on desktop
- Guarantees: 3-col card grid on `surface-warm`

### 8.4 PRODUCTS PAGE

- Products: Alternating image/content layout (keep)
- **Remove:** `mesh-overlay` on product images
- **Remove:** `rounded-[32px]` shapes → `rounded-lg`
- **Remove:** Blue badge styling (`#386fd5`) → use `--color-primary-light` bg + `--color-primary` text
- Additional products grid: 3-col clean cards
- Benefits: 4-col grid on `surface-warm`
- **CTA:** Remove rainbow gradient (`from-orange via-green to-teal`), use dark variant

### 8.5 CONTACT PAGE

- Contact info cards: 4-col grid, use `card` utility
- Form: Clean left side, Quick contact + FAQ right side
- Quick contact: `--color-dark` card (keep, but remove `.mesh-overlay`)
- FAQ: Use `border-left` accent with `--color-primary` consistently
- Map: Clean `rounded-lg` wrapper, remove `shadow-[0_25px_60px_...]`

### 8.6 REALISATIONS PAGE

- Stats strip: 4-col, use `card` utility
- Filter buttons: Pill-shaped is acceptable for filter UI (exception to radius rule)
- Project cards: `rounded-lg`, colored top-border → `--color-primary` only
- Remove rainbow gradient on top border
- Testimonials: Reuse same pattern as Home testimonials
- Process & Industries: Follow standard section patterns

### 8.7 NOT FOUND PAGE

- Simplify dramatically
- Big "404", subtitle, two buttons, quick links grid
- Remove all decorative blurs and mesh overlays

---

## 9. CTA HIERARCHY & FUNNEL LOGIC

### 9.1 Conversion Funnel

```
Awareness        →    Interest         →    Consideration    →    Action
(Hero, About)    →    (Services,       →    (Products,       →    (Contact,
                       Benefits)             Realisations)         WhatsApp)
```

### 9.2 CTA Hierarchy Per Page

| Page | Primary CTA | Secondary CTA | Tertiary CTA |
|------|------------|---------------|--------------|
| **Home Hero** | "Demander un devis" (orange) | "Voir nos produits" (outline) | — |
| **Home Services** | "En savoir plus →" (ghost link per card) | — | — |
| **Home Products** | "Découvrir nos produits" (orange on dark) | — | — |
| **Home Bottom** | "Contactez-nous" (orange) | "Nos services" (outline-white) | — |
| **Services** | "Obtenir un devis" per service (orange) | — | — |
| **Products** | "Demander un devis" per product (orange) | "Télécharger le catalogue" (dark) | — |
| **About** | "Devenir partenaire" (orange) | "Nos réalisations" (outline) | Careers (ghost) |
| **Realisations** | "Démarrer un projet" (orange) | "Nos produits" (outline) | — |
| **Contact** | Form submit (orange) | WhatsApp (green accent) | Phone (outline) |

### 9.3 CTA Design Rules

1. **Max 2 CTAs side-by-side.** Never 3.
2. **Always one orange (`btn-primary`) per viewport.** Don't compete with yourself.
3. **Contact form is the conversion goal.** Everything should funnel there.
4. **WhatsApp button:** Keep as fixed FAB, but style it as `--color-secondary` (green) with proper corporate radius (`--radius-md`), not `rounded-full`.
5. **Phone numbers are CTAs.** Always linkable, always visually prominent.

---

## 10. MICRO-INTERACTION STRATEGY

### 10.1 Philosophy

> *Fewer, better animations. Every animation should REDUCE perceived wait time, not add spectacle.*

### 10.2 What to Keep

| Animation | Where | How |
|-----------|-------|-----|
| **Section fade-in** | All sections | `opacity: 0 → 1`, `translateY: 12px → 0`, 400ms, `ease-out`, `once: true` |
| **Nav underline** | Active nav item | `layoutId="underline"` (Framer Motion shared layout) |
| **Counter scroll-in** | Stats on home | Keep existing `Counter` component logic |
| **Stagger children** | Card grids | 100ms stagger between grid items, max 400ms total |

### 10.3 What to Change

| Current | Problem | Proposed |
|---------|---------|----------|
| `whileHover={{ y: -8 }}` | 8px lift is too dramatic | `hover:translate-y-[-2px]` CSS only |
| `whileHover={{ scale: 1.02 }}` on images | Causes layout shift in cards | Remove entirely or use CSS `transform` |
| `whileHover={{ y: -10 }}` on testimonials | Identical problem | `hover:translate-y-[-2px]` |
| Floating icon `y: [0, -10, 0]` loop | Distracting on CTA sections | Remove |
| Multiple `whileInView` per card | Popcorn effect | Animate the grid container, stagger children |
| `animate-pulse` on hero badge dot | Calls excessive attention | Remove or reduce to `opacity` pulse only |

### 10.4 What to Add

| Interaction | Specification |
|-------------|---------------|
| **Button press** | `active:scale-[0.98]` — 50ms, gives tactile feel |
| **Link hover** | Underline grows from left to right, 200ms |
| **Page transition** | Framer Motion `<AnimatePresence>` on route change, simple cross-fade |
| **Form field focus** | Border color transitions 200ms to `--color-primary` |
| **Mobile menu** | Slide down + overlay fade, 250ms |
| **Scroll-to-top** | Fade in at 400px scroll, 200ms transition |

### 10.5 Performance Rules

- **No `whileInView` on elements above the fold** — they're already visible
- **All animations: `once: true`** — never replay on scroll-back
- **Max total animation time per section: 500ms** including stagger
- **Prefer CSS transitions over Framer Motion** for hover/focus states
- **Use `will-change: transform` sparingly** — only on actually-animating elements

---

## 11. ACCESSIBILITY & PERFORMANCE RULES

### 11.1 Accessibility (WCAG 2.1 AA)

| Rule | Implementation |
|------|---------------|
| **Color contrast** | All text must meet 4.5:1 ratio. `#ff8c42` on white fails for small text — use only for large text, icons, or as background with white text |
| **Focus indicators** | Every interactive element must have `:focus-visible` with `outline: 2px solid var(--color-primary); outline-offset: 2px` |
| **Touch targets** | All buttons/links: minimum 44×44px touch area |
| **Skip navigation** | Add invisible "Skip to content" link at top of page |
| **Alt text** | All images must have descriptive alt text (currently using generic "CRIC Africa operations") |
| **Form labels** | All inputs must have associated `<label>` elements (currently ✅) |
| **ARIA landmarks** | Use `<main>`, `<nav>`, `<footer>`, `<aside>` (partially done) |
| **Motion reduction** | Respect `prefers-reduced-motion: reduce` — disable all animations |
| **Heading hierarchy** | Ensure single `<h1>` per page, sequential heading levels |
| **Language declaration** | `<html lang="fr">` (currently ✅) — dynamically update with language context |

### 11.2 Performance

| Rule | Implementation |
|------|---------------|
| **Remove body gradients** | Current 3 radial gradients on body cause constant GPU composite |
| **Remove `background-attachment: fixed`** | Causes full-page repaint on scroll on mobile |
| **Lazy-load below-fold images** | Currently using `loading="lazy"` (✅) |
| **Reduce Framer Motion imports** | Tree-shake: import only `motion`, `AnimatePresence`, `useInView` |
| **Remove `next` dependency** | Dead weight — remove from `package.json` |
| **Font loading** | Use `font-display: swap` (current Google Fonts URL doesn't specify) |
| **CSS specificity** | Consolidate `global.css` and `tailwind.css` — eliminate duplicate styles |
| **Image formats** | Use `.webp` for all product images (partially done) |
| **Preload hero image** | Add `<link rel="preload">` for the hero product image |

---

## 12. SCALABILITY FOR FUTURE MODULES

### 12.1 Architecture Readiness

The current architecture is **well-prepared** for scaling:

| Feature | Status | Notes |
|---------|--------|-------|
| Component-based architecture | ✅ Ready | Clear separation of concerns |
| Constants/data separation | ✅ Ready | Easy to add new products/services |
| i18n system | ✅ Ready | Two languages, expandable |
| Route configuration | ✅ Ready | Centralized in `routes.jsx` |
| Media management | ✅ Ready | Centralized in `utils/media.js` |

### 12.2 Future Module Considerations

| Module | Design System Requirement |
|--------|--------------------------|
| **Product detail pages** | Card + image gallery + specification table components |
| **Blog/News** | Article card variant, rich text rendering system |
| **Customer portal** | Authentication layout, dashboard grid, data table component |
| **E-commerce** | Cart component, pricing table, quantity selector |
| **Portfolio detail** | Lightbox/gallery, project specification list |
| **Careers page** | Job listing card, application form extension |

### 12.3 Component Library Gaps to Fill

The following components should be built alongside the redesign to future-proof:

| Component | Priority |
|-----------|----------|
| `<Badge>` — status/tag indicator | High |
| `<Table>` — data display for specs | High |
| `<Accordion>` — expandable FAQ sections | Medium |
| `<Modal>` — for image galleries, confirmations | Medium |
| `<Toast>` — notification feedback system | Medium |
| `<Tabs>` — for tabbed content areas | Low |
| `<Tooltip>` — contextual information | Low |

### 12.4 Design Token Export Strategy

When scaling, consider extracting the design tokens to a shared package:

```
design-tokens/
├── colors.json        (brand, semantic, neutral)
├── typography.json    (scale, weights, tracking)
├── spacing.json       (spacing scale)
├── radii.json         (border radius values)
└── shadows.json       (elevation levels)
```

This allows the same tokens to drive:
- The marketing site (this project)
- A future mobile app
- Email template styling
- Print/PDF styling

---

## 📋 IMPLEMENTATION PRIORITY

### Phase 1 — Foundation (Estimated: 1 session)
1. Clean up `tailwind.css` — new token system, remove dead tokens
2. Merge relevant `global.css` into `tailwind.css`, delete duplicates
3. Fix container max-width
4. Consolidate button system
5. Fix body background
6. Remove `next` dependency

### Phase 2 — Global Layout (Estimated: 1 session)
1. Redesign Header
2. Redesign Footer
3. Redesign PageHeader
4. Redesign CTA component

### Phase 3 — Home Page (Estimated: 1 session)
1. Apply new system to Hero, Services, Products, Why Us, Testimonials, CTA
2. Reduce animations
3. Migrate all hardcoded colors to tokens

### Phase 4 — Subpages (Estimated: 2 sessions)
1. About
2. Services
3. Products
4. Realisations
5. Contact
6. NotFound

### Phase 5 — Polish & QA (Estimated: 1 session)
1. Accessibility audit (contrast, focus, ARIA)
2. Performance audit (remove unused CSS, optimize images)
3. Responsive testing (320px → 1920px)
4. Cross-browser check
5. Lighthouse score target: 90+ on all categories

---

*This document serves as the single source of truth for the CRIC AFRIkA SARL redesign. All implementation should reference this spec rather than any previous design system documentation.*

**Ready to proceed with implementation? Let me know which phase to start with.**
