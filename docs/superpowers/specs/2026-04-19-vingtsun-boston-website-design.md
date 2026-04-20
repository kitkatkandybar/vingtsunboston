# Ving Tsun Boston Website — Design Spec

## Overview

Single-page marketing website for Sifu Wong Kin Wai's Ving Tsun school in Quincy, MA. Goal: SEO-optimized lead generation to attract new students in the Boston metro area.

**Tech:** Pure HTML + CSS + vanilla JS. No frameworks. Mobile-first, cross-browser.

---

## Visual Design

- **Colors:** `#0a0a0a` black background, `#c9a84c` gold accent, `#ffffff` / `#bbbbbb` body text, `#111111` section backgrounds
- **Typography:** System sans-serif stack (`-apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif`). Headings bold/heavy, large letter-spacing, uppercase for labels
- **Style:** Dark martial arts aesthetic matching the Shun Mo school logo

---

## Page Sections (top to bottom)

### 1. Sticky Navigation
- Fixed top bar, semi-transparent black with gold border-bottom on scroll
- Left: "VING TSUN BOSTON" wordmark in gold
- Right: anchor links — About · Lineage · Classes · Gallery · Contact
- Hamburger menu on mobile

### 2. Hero
- Full-viewport height
- `assets/dummy.jpeg` as faded background (opacity ~0.18, grayscale ~40%)
- Radial dark gradient overlay
- Centered content:
  - Logo ring: `assets/logo.jpeg` in a gold-bordered circle
  - Tagline: "SHUN MO · BOSTON · USA" in small gold caps
  - H1: "VING TSUN" large white bold
  - H2: "BOSTON" gold, wide letter-spacing
  - Gold divider line
  - Subline: "WONG SHUN LEUNG LINEAGE · BOSTON" small gold caps
  - Body: "Scientific street fighting refined through generations. Train under a direct lineage master — right here in Boston."
  - CTA button: "BEGIN TRAINING →" gold filled, black text
- Scroll hint "▼ SCROLL" at bottom

### 3. Stats Bar
Three columns, gold top border:
- "Bruce Lee's Lineage" / "Same Sifu · Ip Man"
- "300 Years of History" / "Southern China Origins"
- "Only School in the USA" / "Shun Mo Lineage"

### 4. What is Ving Tsun?
Dark section. Two-column on desktop, single-column on mobile.
- Left: section heading + 2-3 paragraphs covering origins (Ng Mui legend), what makes it unique (scientific street fighting, Wong Shun Leung's 100+ undefeated challenge fights, Bruce Lee connection), core principles (centerline, economy of motion, Chi Sao)
- Right: callout boxes for key principles with gold left-border

### 5. The Lineage
Black section with gold accents. Visual lineage chain:
`Ip Man → Wong Shun Leung → Sifu Chan Kim Man → Sifu Wong Kin Wai`
- Each node: name, role, short description
- `assets/lineage.jpeg` (Sifu with his master) and `assets/lineage2.jpeg` (at kwoon in China)
- Quote: "For me, Wing Chun is a skill..." — Wong Shun Leung

### 6. About Sifu Wong
Split layout: photo left (`assets/dummy.jpeg` or `assets/lineage.jpeg`), bio right.
- Polished bio from plan.txt (certified instructor, direct lineage, methodical teaching style)
- `assets/certificate.jpeg` shown as credential badge below bio

### 7. Training — What You'll Learn
Dark section. Three cards:
- The Forms (Siu Nim Tao → Chum Kiu → Biu Jee)
- Chi Sao / Sticky Hands
- Wooden Dummy & Weapons
Each card: gold icon/number, title, short description.

### 8. Class Schedule & Location
Two-column: schedule left, location/contact right.
- **Schedule:** Fridays 6:00–7:30 PM | Sundays 10:30 AM–12:00 PM
- **Location:** 392 Hancock St, Quincy, MA 02171
- Embedded Google Maps iframe
- **Email:** kw.vingtsun.info@gmail.com
- **Instagram:** @usa_boston_shun_mo_ving_tsun (link out)
- **Pricing:** "Contact for pricing"
- CTA: "BEGIN TRAINING →" button

### 9. Gallery
Auto-scrolling horizontal strip using all 41 images from `/images/` folder.
- CSS marquee animation (no JS required)
- Two rows, scrolling opposite directions for visual interest
- Click image to open lightbox

### 10. Footer
- Logo + "VING TSUN BOSTON" wordmark
- Quick nav links
- "Part of the Shun Mo Scientific Ving Tsun global network" with link to shunmo-vingtsun.com
- Copyright

---

## SEO

- `<title>`: "Ving Tsun Boston | Wing Chun Classes in Boston | Shun Mo Scientific Ving Tsun"
- Meta description covering Ving Tsun, Wing Chun, Boston, Quincy, lineage
- H1/H2 structure targeting: "Ving Tsun Boston", "Wing Chun Boston", "martial arts Boston"
- Semantic HTML throughout (nav, main, section, article, footer)
- Alt text on all images
- Schema.org LocalBusiness + SportsActivityLocation structured data

---

## Responsive Breakpoints

- Mobile: < 768px (single column, hamburger nav, stacked sections)
- Tablet: 768–1024px
- Desktop: > 1024px

---

## Assets Map

| File | Used in |
|---|---|
| `assets/logo.jpeg` | Nav, hero ring, footer |
| `assets/dummy.jpeg` | Hero background, About section |
| `assets/lineage.jpeg` | Lineage section, About section |
| `assets/lineage2.jpeg` | Lineage section |
| `assets/certificate.jpeg` | About/credentials |
| `images/1–41.jpeg` | Gallery auto-scroll |
