# Mirai Design - Product Requirements Document

## Original Problem Statement
Build a premium landing page for "Mirai Design" - a web design agency offering subscription-based websites for appointment-based businesses worldwide.

## Tech Stack
- **Frontend**: Vite + React 18 + TailwindCSS
- **Internationalization**: i18next (6 languages: EN, PL, DE, FR, ZH, JA)
- **Styling**: TailwindCSS with CSS variables for dark theme
- **Animation**: Framer Motion
- **Package Manager**: npm
- **Deployment Target**: Cloudflare Pages (frontend-only)

## Core Requirements
1. Premium dark-mode design system ("Mirai Design" aesthetic)
2. Full internationalization supporting 6 languages
3. Conversion-focused pricing page with currency switcher
4. Mobile-first responsive design
5. Fast loading with optimized assets
6. Real high-quality images throughout (no placeholder blocks)
7. No blur/fog/haze effects - crisp gradients only
8. Correct CTA links (Calendly, WhatsApp)
9. **Unified Background System** - consistent grid + orbs across entire site

## User Personas
- Small business owners (beauty salons, physio clinics, barber shops)
- Service-based businesses needing online presence
- Global clients (hence 6-language support)

## What's Been Implemented

### January 2025 - Unified Background System ✅

**Premium Background Overhaul:**
- [x] Ultra-subtle checkerboard grid (64px, 1.8% opacity) fixed across entire site
- [x] Soft circular gradient orbs as recurring background motif
- [x] Orbs appear in: Hero, Trust, What We Build, Before/After, Process, Featured Demos, FAQ, CTA, Footer, all inner pages
- [x] Orb system uses CSS variables: --orb-blue, --orb-blue-soft, --orb-neutral, --orb-cool
- [x] Orbs vary in size (250px-800px), position, and opacity per section
- [x] Muted brand-aligned tones (cool blues, subtle neutrals)
- [x] Grid remains constant; atmosphere changes through orb placement
- [x] No harsh lines, heavy contrast, or visual noise
- [x] No glassmorphism or blur effects
- [x] Modern 2026 flat-design aesthetic maintained
- [x] Background feels intentional, calm, and premium

**Technical Implementation:**
- `.orb-container` class for sections needing orbs
- `.orb` base class with positioned variants (orb-hero-primary, orb-feature-left, etc.)
- Size utilities: orb-sm, orb-md, orb-lg, orb-xl
- Color utilities: orb-blue, orb-blue-soft, orb-neutral, orb-cool
- All sections use `.section-base` with transparent background
- Grid via fixed `.grid-global` element in App.jsx

### January 2025 - Process Images & FAQ Fix ✅

**Process Section Images Updated:**
- [x] Step 02 "We build a demo" - User's uploaded graphic (demobuilding.png)
- [x] Step 03 "You send materials" - User's uploaded graphic (uploadmaterials.png)
- [x] Step 04 "We launch" - User's uploaded graphic (launch.png)
- [x] Step 01 "Quick call" - Retains previous uploaded graphic

**FAQ Section Fixed:**
- [x] Added filter to prevent raw translation keys from rendering
- [x] Only renders FAQs with valid question AND answer translations
- [x] faq.q8 and any missing keys are now impossible to display
- [x] Filter validates: `!faq.q.startsWith('faq.')` && `!faq.a.startsWith('faq.')`

**English Headline Updated:**
- [x] Changed from "Fast, high quality websites that turn visitors into customers."
- [x] To: "Websites that make people click."

**Pricing & Content Alignment:**

**Pro Plan Fixed (Standard + Monthly Growth bundled):**
- [x] Pro subtitle: "Standard + Monthly Growth (bundled)"
- [x] Pro setup fee: €29 (same as Standard, not €49)
- [x] Pro term: 24 months (same as Standard, not 12)
- [x] Pro updates: 45 min/month (30 Standard + 15 Monthly Growth, not 60)
- [x] Pro price: €128/month (€49 Standard + €79 Monthly Growth)
- [x] Added breakdown note: "Includes Standard plan + Monthly Growth add-on"

**Hourly Pricing Card:**
- [x] Reduced visual prominence (opacity-80, smaller text)
- [x] Added clarifier: "Used only for requests outside plans and listed add-ons"

**Terms Accordion Reordered:**
- [x] "No guarantees" renamed to "Results disclaimer" and moved to END
- [x] Softened wording: "Results depend on many factors. We follow proven best practices, but cannot guarantee specific outcomes."
- [x] Added "Third-party platforms" section with improved wording
- [x] Added "Setup fee applies once per site." note
- [x] Updated invoicing text (Estonia-registered company, no VAT details)

**Third-party Copy Improved:**
- [x] "Third-party platforms (e.g. booking tools, email providers) are managed by their providers. We assist with links and setup within scope."

**All 6 locales updated with these changes.**

### December 2025 - Initial Build
- [x] Complete Vite + React 18 project setup
- [x] 8-page static website
- [x] Full i18n system with 6 languages
- [x] Premium dark-mode theme
- [x] Currency switcher (PLN, EUR, CNY, JPY)
- [x] Responsive mobile-first design

## Architecture

```
/app/frontend/
├── src/
│   ├── components/
│   │   ├── home/
│   │   │   ├── HeroSection.jsx (orbs + rotating demo carousel)
│   │   │   ├── TrustSection.jsx (orbs)
│   │   │   ├── WhatWeBuild.jsx (orbs + real images)
│   │   │   ├── BeforeAfter.jsx (orbs + real images)
│   │   │   ├── ProcessSection.jsx (orbs + real images)
│   │   │   ├── FeaturedDemos.jsx (orbs + real images + labels)
│   │   │   ├── FAQSection.jsx (orbs)
│   │   │   └── FinalCTA.jsx (orbs + correct links)
│   │   ├── Header.jsx (solid bg, no blur)
│   │   └── Footer.jsx (orbs)
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Work.jsx (orbs + portfolio with real images)
│   │   ├── Packages.jsx (orbs + 3 plans, Calendly CTA)
│   │   ├── Process.jsx (orbs)
│   │   ├── About.jsx (orbs + 3 images)
│   │   ├── Contact.jsx (orbs + supporting image, correct links)
│   │   ├── Privacy.jsx (minimal orbs)
│   │   └── Terms.jsx (minimal orbs)
│   ├── content/
│   │   └── assets.js (centralized Unsplash URLs)
│   ├── locales/
│   │   └── {en,pl,de,fr,zh,ja}.json
│   └── index.css (unified background system, orb classes)
```

## Pricing Structure (Current)

| Plan | Monthly | Setup | Term | Updates |
|------|---------|-------|------|---------|
| Start | €39 | €29 | 30 months | 15 min/month |
| Standard | €49 | €29 | 24 months | 30 min/month |
| Pro | €128 | €29 | 24 months | 45 min/month |

*Pro = Standard + Monthly Growth bundled*
*Prices available in PLN, EUR, CNY, JPY*

## Prioritized Backlog

### P0 - Critical (None)
All critical features implemented and tested ✅

### P1 - High Priority
- [ ] Contact form integration (currently UI-only, consider Formspree/EmailJS)
- [ ] Add actual demo links for Featured Demos section
- [ ] SEO meta tags and Open Graph optimization

### P2 - Medium Priority
- [ ] Google Analytics integration
- [ ] Cookie consent banner
- [ ] Performance optimization (lazy loading, code splitting)
- [ ] Add testimonials section

### P3 - Low Priority / Future
- [ ] Dark/Light mode toggle
- [ ] Additional language support
- [ ] Blog/Resources section
- [ ] Newsletter signup

## Testing Status
- Frontend tests: ✅ 100% pass rate (iteration_2.json)
- All 23 images verified loading correctly
- All 6 languages working
- Currency switcher functional
- Mobile responsive verified
- CTA links verified (Calendly, WhatsApp)
- No blur/fog effects detected
- Unified background system verified across all pages

## QA Checklist (Completed)
- ✅ No blur/fog/haze visible anywhere
- ✅ All images load (no 404s)
- ✅ Images consistent style, properly cropped
- ✅ No fake claims
- ✅ No buyout prices shown
- ✅ CTAs work correctly
- ✅ Mobile clean and fast
- ✅ Unified background system (grid + orbs) consistent across site
