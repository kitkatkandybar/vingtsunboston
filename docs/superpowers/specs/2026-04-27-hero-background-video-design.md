# Hero Background Video — Design Spec

## Overview

Replace the static hero background image (`assets/hero-bg.jpeg`) with `assets/Promo.mp4` as a muted, looping background video. All existing hero content (logo ring, tagline, heading, CTAs) remains unchanged on top.

---

## Implementation

### HTML change (`index.html`)

Inside `.hero__bg`, replace:
```html
<img src="assets/hero-bg.jpeg" alt="" aria-hidden="true" class="hero__bg-img"/>
```
With:
```html
<video
  class="hero__bg-img"
  autoplay muted loop playsinline
  poster="assets/hero-bg.jpeg"
  aria-hidden="true">
  <source src="assets/Promo.mp4" type="video/mp4"/>
</video>
```

- `autoplay muted loop playsinline` — silent autoloop; `playsinline` enables autoplay on iOS
- `poster="assets/hero-bg.jpeg"` — static fallback while video loads or if browser blocks autoplay
- `aria-hidden="true"` — decorative, no accessibility impact

### CSS change (`css/styles.css`)

The existing `.hero__bg-img` rule uses `object-fit: cover` and `filter: grayscale(...)` — these apply to both `<img>` and `<video>`, so no selector change is needed. Confirm the rule covers the `<video>` element exactly as-is.

---

## Behaviour

| Scenario | Result |
|---|---|
| Modern desktop/mobile | Video autoplays silently on loop |
| Browser blocks autoplay | Poster image (`hero-bg.jpeg`) shown statically |
| Video file missing/slow | Poster image shown until video ready |
| Screen reader | `aria-hidden` — ignored entirely |

---

## Constraints

- Pure HTML/CSS/vanilla JS — no JS changes required
- No new section or nav link needed
- File already present: `assets/Promo.mp4`
