# Ving Tsun Boston Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a complete, SEO-optimized single-page marketing website for Sifu Wong Kin Wai's Ving Tsun school in Quincy, MA (branded "Ving Tsun Boston").

**Architecture:** Three files — `index.html` (all markup), `css/styles.css` (all styles), `js/main.js` (mobile nav, gallery marquee, lightbox, scroll effects). No build tools, no frameworks, no dependencies. Open `index.html` directly in a browser to verify each task.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, grid, keyframe animations), vanilla ES6 JS.

---

## File Map

| File | Responsibility |
|---|---|
| `index.html` | All page markup — 10 sections, SEO meta, Schema.org JSON-LD |
| `css/styles.css` | CSS reset, variables, all section styles, responsive breakpoints |
| `js/main.js` | Mobile nav toggle, sticky nav shadow, gallery infinite scroll, lightbox |

---

## Color & Asset Reference (used throughout)

```
--color-bg:       #0a0a0a
--color-bg-alt:   #111111
--color-gold:     #c9a84c
--color-gold-dim: rgba(201,168,76,0.2)
--color-text:     #ffffff
--color-muted:    #bbbbbb
--color-faint:    #555555

Assets:
  assets/logo.jpeg       → nav, hero ring, footer
  assets/dummy.jpeg      → hero background, about section
  assets/lineage.jpeg    → lineage section, about section
  assets/lineage2.jpeg   → lineage section
  assets/certificate.jpeg→ credentials
  images/1.jpeg–41.jpeg  → gallery strip
```

---

## Task 1: Project Scaffold

**Files:**
- Create: `index.html`
- Create: `css/styles.css`
- Create: `js/main.js`

- [ ] **Create `css/styles.css` with reset and CSS variables**

```css
/* ── Reset & Variables ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

:root {
  --bg:        #0a0a0a;
  --bg-alt:    #111111;
  --gold:      #c9a84c;
  --gold-dim:  rgba(201,168,76,0.2);
  --gold-faint:rgba(201,168,76,0.08);
  --text:      #ffffff;
  --muted:     #bbbbbb;
  --faint:     #555555;
  --max-width: 1100px;
  --nav-h:     64px;
  --transition: 0.3s ease;
}

html { scroll-behavior: smooth; font-size: 16px; }

body {
  background: var(--bg);
  color: var(--text);
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
  line-height: 1.6;
  overflow-x: hidden;
}

img { display: block; max-width: 100%; height: auto; }
a { color: inherit; text-decoration: none; }
ul { list-style: none; }

.container {
  max-width: var(--max-width);
  margin: 0 auto;
  padding: 0 24px;
}

.section { padding: 96px 0; }
.section-alt { background: var(--bg-alt); }

.gold-label {
  display: inline-block;
  color: var(--gold);
  font-size: 0.7rem;
  letter-spacing: 0.3em;
  text-transform: uppercase;
  margin-bottom: 12px;
}

.btn {
  display: inline-block;
  background: var(--gold);
  color: #000;
  padding: 14px 32px;
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  cursor: pointer;
  border: none;
  transition: opacity var(--transition);
}
.btn:hover { opacity: 0.85; }

.btn-outline {
  background: transparent;
  color: var(--gold);
  border: 1px solid var(--gold);
}
.btn-outline:hover { background: var(--gold-faint); }
```

- [ ] **Create empty `js/main.js`**

```js
// main.js — populated in later tasks
```

- [ ] **Create `index.html` with document shell**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <meta name="description" content="Ving Tsun Boston — authentic Wing Chun martial arts classes in Boston (Quincy, MA). Shun Mo Scientific Ving Tsun, Wong Shun Leung lineage. Fridays & Sundays. Same lineage as Bruce Lee."/>
  <meta name="keywords" content="Ving Tsun Boston, Wing Chun Boston, martial arts Boston, Ving Tsun classes, Wing Chun Quincy MA, Wong Shun Leung lineage, Shun Mo Ving Tsun, self defense Boston"/>
  <title>Ving Tsun Boston | Wing Chun Classes in Boston | Shun Mo Scientific Ving Tsun</title>

  <!-- Open Graph -->
  <meta property="og:title" content="Ving Tsun Boston — Authentic Wing Chun"/>
  <meta property="og:description" content="Train in the combat-proven Wong Shun Leung lineage. Boston's only Shun Mo Scientific Ving Tsun school."/>
  <meta property="og:type" content="website"/>

  <!-- Schema.org structured data -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "SportsActivityLocation",
    "name": "Ving Tsun Boston",
    "description": "Authentic Shun Mo Scientific Ving Tsun — Wong Shun Leung lineage. Boston's only Shun Mo school.",
    "url": "",
    "email": "kw.vingtsun.info@gmail.com",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "392 Hancock St",
      "addressLocality": "Quincy",
      "addressRegion": "MA",
      "postalCode": "02171",
      "addressCountry": "US"
    },
    "openingHours": ["Fr 18:00-19:30", "Su 10:30-12:00"],
    "sport": "Ving Tsun (Wing Chun)"
  }
  </script>

  <link rel="stylesheet" href="css/styles.css"/>
</head>
<body>

  <!-- sections inserted in tasks 2–11 -->

  <script src="js/main.js"></script>
</body>
</html>
```

- [ ] **Open `index.html` in browser — verify black page loads with no console errors**

- [ ] **Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: scaffold Ving Tsun Boston website"
```

---

## Task 2: Navigation

**Files:**
- Modify: `index.html` — add `<nav>` inside `<body>` before sections
- Modify: `css/styles.css` — append nav styles
- Modify: `js/main.js` — add mobile nav toggle + scroll shadow

- [ ] **Add nav HTML inside `<body>`, before the sections comment**

```html
<nav class="nav" id="nav">
  <div class="container nav__inner">
    <a href="#hero" class="nav__logo">
      <img src="assets/logo.jpeg" alt="Ving Tsun Boston logo" class="nav__logo-img"/>
      <span class="nav__logo-text">VING TSUN BOSTON</span>
    </a>
    <ul class="nav__links">
      <li><a href="#about">About</a></li>
      <li><a href="#lineage">Lineage</a></li>
      <li><a href="#training">Training</a></li>
      <li><a href="#classes">Classes</a></li>
      <li><a href="#gallery">Gallery</a></li>
      <li><a href="#contact" class="btn btn-outline nav__cta">Join</a></li>
    </ul>
    <button class="nav__burger" id="navBurger" aria-label="Toggle menu">
      <span></span><span></span><span></span>
    </button>
  </div>
  <!-- mobile drawer -->
  <div class="nav__drawer" id="navDrawer">
    <ul>
      <li><a href="#about" class="nav__drawer-link">About</a></li>
      <li><a href="#lineage" class="nav__drawer-link">Lineage</a></li>
      <li><a href="#training" class="nav__drawer-link">Training</a></li>
      <li><a href="#classes" class="nav__drawer-link">Classes</a></li>
      <li><a href="#gallery" class="nav__drawer-link">Gallery</a></li>
      <li><a href="#contact" class="nav__drawer-link">Contact</a></li>
    </ul>
  </div>
</nav>
```

- [ ] **Append nav CSS to `css/styles.css`**

```css
/* ── Navigation ── */
.nav {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 100;
  background: rgba(10,10,10,0.92);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid var(--gold-dim);
  height: var(--nav-h);
  transition: box-shadow var(--transition);
}
.nav.scrolled { box-shadow: 0 2px 24px rgba(0,0,0,0.6); }

.nav__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: var(--nav-h);
}

.nav__logo {
  display: flex;
  align-items: center;
  gap: 10px;
}
.nav__logo-img {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--gold-dim);
}
.nav__logo-text {
  color: var(--gold);
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}

.nav__links {
  display: flex;
  align-items: center;
  gap: 32px;
}
.nav__links a:not(.btn) {
  color: var(--muted);
  font-size: 0.8rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color var(--transition);
}
.nav__links a:not(.btn):hover { color: var(--gold); }
.nav__cta { padding: 8px 18px; font-size: 0.7rem; }

.nav__burger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  border: none;
  cursor: pointer;
  padding: 4px;
}
.nav__burger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--gold);
  transition: var(--transition);
}

/* Mobile drawer */
.nav__drawer {
  display: none;
  background: var(--bg-alt);
  border-top: 1px solid var(--gold-dim);
  padding: 16px 0;
}
.nav__drawer.open { display: block; }
.nav__drawer-link {
  display: block;
  padding: 14px 24px;
  color: var(--muted);
  font-size: 0.9rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  transition: color var(--transition);
}
.nav__drawer-link:hover { color: var(--gold); }

@media (max-width: 768px) {
  .nav__links { display: none; }
  .nav__burger { display: flex; }
  .nav { height: auto; min-height: var(--nav-h); }
}
```

- [ ] **Add nav JS to `js/main.js`**

```js
// ── Nav: scroll shadow + mobile drawer ──
const nav = document.getElementById('nav');
const burger = document.getElementById('navBurger');
const drawer = document.getElementById('navDrawer');

window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 10);
});

burger.addEventListener('click', () => {
  drawer.classList.toggle('open');
});

// Close drawer when a link is clicked
document.querySelectorAll('.nav__drawer-link').forEach(link => {
  link.addEventListener('click', () => drawer.classList.remove('open'));
});
```

- [ ] **Open browser — verify: sticky gold nav, links visible on desktop, hamburger on mobile (resize window)**

- [ ] **Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: add sticky navigation with mobile drawer"
```

---

## Task 3: Hero Section

**Files:**
- Modify: `index.html` — add hero section after `</nav>`
- Modify: `css/styles.css` — append hero styles

- [ ] **Add hero HTML after `</nav>`**

```html
<section class="hero" id="hero">
  <div class="hero__bg">
    <img src="assets/dummy.jpeg" alt="" aria-hidden="true" class="hero__bg-img"/>
    <div class="hero__overlay"></div>
  </div>
  <div class="hero__content">
    <div class="hero__logo-ring">
      <img src="assets/logo.jpeg" alt="Shun Mo Scientific Ving Tsun"/>
    </div>
    <p class="gold-label">Shun Mo · Boston · USA</p>
    <h1 class="hero__title">Ving Tsun</h1>
    <h2 class="hero__subtitle">Boston</h2>
    <div class="hero__divider"></div>
    <p class="gold-label">Wong Shun Leung Lineage · Boston</p>
    <p class="hero__body">Scientific street fighting refined through generations.<br>Train under a direct lineage master — right here in Boston.</p>
    <a href="#contact" class="btn hero__cta">Begin Training →</a>
  </div>
  <a href="#stats" class="hero__scroll" aria-label="Scroll down">▼ Scroll</a>
</section>

<section class="stats" id="stats">
  <div class="container stats__grid">
    <div class="stats__item">
      <strong>Bruce Lee's Lineage</strong>
      <span>Same Sifu · Ip Man</span>
    </div>
    <div class="stats__item">
      <strong>300 Years of History</strong>
      <span>Southern China Origins</span>
    </div>
    <div class="stats__item">
      <strong>Only School in the USA</strong>
      <span>Shun Mo Lineage</span>
    </div>
  </div>
</section>
```

- [ ] **Append hero + stats CSS**

```css
/* ── Hero ── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: calc(var(--nav-h) + 48px) 24px 80px;
}

.hero__bg {
  position: absolute;
  inset: 0;
  z-index: 0;
}
.hero__bg-img {
  width: 100%; height: 100%;
  object-fit: cover;
  object-position: center top;
  opacity: 0.18;
  filter: grayscale(40%);
}
.hero__overlay {
  position: absolute;
  inset: 0;
  background: radial-gradient(ellipse at center, rgba(26,20,8,0.55) 0%, rgba(10,10,10,0.96) 72%);
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 600px;
}

.hero__logo-ring {
  width: 88px; height: 88px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  overflow: hidden;
  margin: 0 auto 20px;
  box-shadow: 0 0 0 6px var(--gold-faint);
}
.hero__logo-ring img {
  width: 100%; height: 100%;
  object-fit: cover;
}

.hero__title {
  font-size: clamp(3rem, 8vw, 5.5rem);
  font-weight: 900;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  line-height: 1;
  margin-bottom: 4px;
}
.hero__subtitle {
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 400;
  color: var(--gold);
  letter-spacing: 0.45em;
  text-transform: uppercase;
  margin-bottom: 28px;
}
.hero__divider {
  width: 48px; height: 1px;
  background: var(--gold);
  margin: 0 auto 24px;
  opacity: 0.5;
}
.hero__body {
  color: var(--muted);
  font-size: 1rem;
  line-height: 1.8;
  margin-bottom: 32px;
}
.hero__cta { font-size: 0.8rem; padding: 16px 40px; }

.hero__scroll {
  position: absolute;
  bottom: 24px; left: 50%;
  transform: translateX(-50%);
  z-index: 1;
  color: var(--faint);
  font-size: 0.7rem;
  letter-spacing: 0.25em;
  animation: bounce 2s infinite;
}
@keyframes bounce {
  0%, 100% { transform: translateX(-50%) translateY(0); }
  50%       { transform: translateX(-50%) translateY(6px); }
}

/* ── Stats bar ── */
.stats {
  background: var(--bg-alt);
  border-top: 2px solid var(--gold);
  border-bottom: 1px solid #1a1a1a;
}
.stats__grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
  padding: 28px 24px;
}
.stats__item {
  padding: 8px 16px;
  border-right: 1px solid #222;
}
.stats__item:last-child { border-right: none; }
.stats__item strong {
  display: block;
  color: var(--gold);
  font-size: 0.95rem;
  font-weight: 900;
  line-height: 1.3;
  margin-bottom: 4px;
}
.stats__item span {
  color: var(--faint);
  font-size: 0.7rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
}

@media (max-width: 600px) {
  .stats__grid { grid-template-columns: 1fr; }
  .stats__item { border-right: none; border-bottom: 1px solid #222; padding: 16px; }
  .stats__item:last-child { border-bottom: none; }
}
```

- [ ] **Open browser — verify: full-viewport dark hero with faded action photo bg, logo ring, gold title, BEGIN TRAINING button, stats bar with 3 columns**

- [ ] **Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add hero section and stats bar"
```

---

## Task 4: What is Ving Tsun Section

**Files:**
- Modify: `index.html` — add section after `</section>` (stats)
- Modify: `css/styles.css` — append styles

- [ ] **Add HTML after stats section**

```html
<section class="section" id="what-is">
  <div class="container what__grid">
    <div class="what__text">
      <p class="gold-label">The Art</p>
      <h2 class="section-title">What is Ving Tsun?</h2>
      <p>Ving Tsun (also spelled Wing Chun) is a Chinese martial art developed approximately 300 years ago in southern China. According to legend, it was created by the Buddhist nun Ng Mui, one of the survivors of the destroyed Shaolin Temple, who distilled Shaolin fighting principles into a compact, efficient system that could be learned quickly and applied regardless of size or strength.</p>
      <p>The system was brought to international attention by Grandmaster <strong>Ip Man</strong>, who taught in Hong Kong from 1949. His most celebrated student, <strong>Wong Shun Leung</strong> — nicknamed <em>"Gong Sau Wong"</em> (King of Talking Hands) — refined the art through over 100 bare-knuckle challenge fights against practitioners of every style, remaining undefeated throughout. Wong Shun Leung also trained and sparred extensively with a young <strong>Bruce Lee</strong>, who credited his teachers within the Ip Man lineage for his foundational martial arts development.</p>
      <p>Unlike styles that prioritize ceremony, Ving Tsun is built on proof. Every technique, every principle, was tested in real fighting conditions — making it one of the most practical and direct martial arts systems in the world.</p>
    </div>
    <div class="what__principles">
      <p class="gold-label">Core Principles</p>
      <div class="principle-card">
        <h4>Centerline Theory</h4>
        <p>Control the direct line to your opponent's vital targets. Simultaneous attack and defense through the center.</p>
      </div>
      <div class="principle-card">
        <h4>Economy of Motion</h4>
        <p>Minimum force for maximum effect. No wasted movement, no telegraphing — direct and immediate.</p>
      </div>
      <div class="principle-card">
        <h4>Chi Sao (Sticky Hands)</h4>
        <p>The heart of Ving Tsun training. Partners maintain contact and develop tactile sensitivity, reflexes, and adaptive response in real time.</p>
      </div>
      <div class="principle-card">
        <h4>Concepts Over Techniques</h4>
        <p>No fixed moves. Principles govern every situation — Ving Tsun teaches you how to think, not just what to do.</p>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Append CSS**

```css
/* ── What is Ving Tsun ── */
.section-title {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  font-weight: 900;
  letter-spacing: 0.05em;
  margin-bottom: 24px;
  line-height: 1.15;
}

.what__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}
.what__text p {
  color: var(--muted);
  margin-bottom: 18px;
  line-height: 1.8;
}
.what__text strong { color: var(--text); }
.what__text em { color: var(--gold); font-style: normal; }

.principle-card {
  border-left: 3px solid var(--gold);
  padding: 14px 18px;
  margin-bottom: 16px;
  background: var(--gold-faint);
}
.principle-card h4 {
  color: var(--gold);
  font-size: 0.85rem;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  margin-bottom: 6px;
}
.principle-card p {
  color: var(--muted);
  font-size: 0.9rem;
  line-height: 1.6;
}

@media (max-width: 768px) {
  .what__grid { grid-template-columns: 1fr; gap: 40px; }
}
```

- [ ] **Open browser — verify: two-column text + principle cards, gold left-border cards, responsive single column on mobile**

- [ ] **Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add What is Ving Tsun section"
```

---

## Task 5: Lineage Section

**Files:**
- Modify: `index.html`
- Modify: `css/styles.css`

- [ ] **Add HTML after What is Ving Tsun section**

```html
<section class="section section-alt" id="lineage">
  <div class="container">
    <div style="text-align:center; margin-bottom: 56px;">
      <p class="gold-label">The Lineage</p>
      <h2 class="section-title">Where We Come From</h2>
      <p style="color:var(--muted); max-width:600px; margin:0 auto; line-height:1.8;">Every Ving Tsun school traces its knowledge through a direct chain of masters. This lineage determines not just technique, but philosophy — how the art is understood, applied, and passed on.</p>
    </div>

    <!-- Lineage chain -->
    <div class="lineage-chain">
      <div class="lineage-node">
        <div class="lineage-node__circle">Ip</div>
        <h4>Ip Man</h4>
        <p>Grandmaster who brought Ving Tsun from Foshan to Hong Kong in 1949, making it a global art. Teacher of Wong Shun Leung, Bruce Lee, and many others.</p>
      </div>
      <div class="lineage-arrow">→</div>
      <div class="lineage-node lineage-node--highlight">
        <div class="lineage-node__circle">WSL</div>
        <h4>Wong Shun Leung</h4>
        <p>"Gong Sau Wong" — King of Talking Hands. Undefeated in 100+ challenge fights across every style. Trained Bruce Lee. Refined Ving Tsun as a scientific combat system.</p>
      </div>
      <div class="lineage-arrow">→</div>
      <div class="lineage-node">
        <div class="lineage-node__circle">CKM</div>
        <h4>Sifu Chan Kim Man</h4>
        <p>Trained under Wong Shun Leung from 1978 until his death in 1997 — 19 years. Founded Shun Mo Scientific Ving Tsun with schools in Hong Kong, China, Germany, and the USA.</p>
      </div>
      <div class="lineage-arrow">→</div>
      <div class="lineage-node lineage-node--you">
        <div class="lineage-node__circle">KW</div>
        <h4>Sifu Wong Kin Wai</h4>
        <p>Direct student of Sifu Chan Kim Man. The first and only Shun Mo Scientific Ving Tsun instructor in the United States — teaching in Boston.</p>
      </div>
    </div>

    <!-- Quote -->
    <blockquote class="lineage-quote">
      <p>"For me, Wing Chun is a skill. If you describe it as an art, there is no way to determine if it is effective or not... In combat, the fighter left standing is the winner."</p>
      <cite>— Grandmaster Wong Shun Leung</cite>
    </blockquote>

    <!-- Photos -->
    <div class="lineage-photos">
      <figure>
        <img src="assets/lineage2.jpeg" alt="Sifu Wong Kin Wai with Sifu Chan Kim Man at the school in China"/>
        <figcaption>Sifu Wong Kin Wai with his master, Sifu Chan Kim Man, at the Shun Mo school in China</figcaption>
      </figure>
      <figure>
        <img src="assets/lineage.jpeg" alt="Sifu Wong Kin Wai with Sifu Chan Kim Man"/>
        <figcaption>Sifu Wong Kin Wai and Sifu Chan Kim Man — student and teacher</figcaption>
      </figure>
    </div>
  </div>
</section>
```

- [ ] **Append CSS**

```css
/* ── Lineage ── */
.lineage-chain {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  gap: 0;
  margin-bottom: 56px;
  flex-wrap: wrap;
}

.lineage-node {
  flex: 1;
  min-width: 180px;
  max-width: 220px;
  text-align: center;
  padding: 24px 16px;
  border: 1px solid #1e1e1e;
  background: var(--bg);
}
.lineage-node--highlight { border-color: var(--gold-dim); background: var(--gold-faint); }
.lineage-node--you { border-color: var(--gold); background: var(--gold-faint); }

.lineage-node__circle {
  width: 52px; height: 52px;
  border-radius: 50%;
  border: 2px solid var(--gold);
  display: flex; align-items: center; justify-content: center;
  margin: 0 auto 12px;
  color: var(--gold);
  font-weight: 900;
  font-size: 0.75rem;
  letter-spacing: 0.05em;
}
.lineage-node h4 {
  font-size: 0.85rem;
  color: var(--text);
  margin-bottom: 8px;
  letter-spacing: 0.05em;
  text-transform: uppercase;
}
.lineage-node p {
  font-size: 0.78rem;
  color: var(--muted);
  line-height: 1.6;
}

.lineage-arrow {
  display: flex;
  align-items: center;
  padding: 0 8px;
  color: var(--gold);
  font-size: 1.5rem;
  margin-top: 40px;
  opacity: 0.5;
}

.lineage-quote {
  border-left: 4px solid var(--gold);
  padding: 24px 32px;
  margin: 48px auto;
  max-width: 700px;
  background: var(--gold-faint);
}
.lineage-quote p {
  color: var(--muted);
  font-size: 1.1rem;
  line-height: 1.8;
  font-style: italic;
  margin-bottom: 12px;
}
.lineage-quote cite {
  color: var(--gold);
  font-size: 0.8rem;
  letter-spacing: 0.15em;
  text-transform: uppercase;
  font-style: normal;
}

.lineage-photos {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 24px;
  margin-top: 48px;
}
.lineage-photos figure img {
  width: 100%;
  height: 340px;
  object-fit: cover;
  object-position: top;
  border: 1px solid #1e1e1e;
}
.lineage-photos figcaption {
  color: var(--faint);
  font-size: 0.75rem;
  margin-top: 8px;
  text-align: center;
  font-style: italic;
}

@media (max-width: 900px) {
  .lineage-chain { flex-direction: column; align-items: center; gap: 0; }
  .lineage-arrow { margin: 0; transform: rotate(90deg); padding: 8px 0; }
  .lineage-photos { grid-template-columns: 1fr; }
  .lineage-photos figure img { height: 260px; }
}
```

- [ ] **Open browser — verify: 4-node lineage chain with arrows, gold highlight on Wong Shun Leung and Sifu Wong nodes, quote block, two photos**

- [ ] **Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add lineage section with chain, quote, and photos"
```

---

## Task 6: About Sifu Wong Section

**Files:**
- Modify: `index.html`
- Modify: `css/styles.css`

- [ ] **Add HTML after lineage section**

```html
<section class="section" id="about">
  <div class="container about__grid">
    <div class="about__media">
      <div class="about__photo-wrap">
        <img src="assets/dummy.jpeg" alt="Sifu Wong Kin Wai training on the wooden dummy"/>
      </div>
      <div class="about__cert">
        <img src="assets/certificate.jpeg" alt="Ving Tsun Athletic Association instructor certificate — Sifu Wong Kin Wai"/>
        <p class="about__cert-caption">Certified by the Ving Tsun Athletic Association (HK-02200)</p>
      </div>
    </div>
    <div class="about__text">
      <p class="gold-label">About Your Instructor</p>
      <h2 class="section-title">Sifu Wong Kin Wai</h2>
      <p>Sifu Wong Kin Wai is a certified Ving Tsun instructor and the first representative of the Shun Mo Scientific Ving Tsun lineage in the United States. He holds certification from the Ving Tsun Athletic Association and is a direct student of Sifu Chan Kim Man — one of the most respected masters of the Wong Shun Leung system, who trained under Grandmaster Wong Shun Leung for nearly two decades.</p>
      <p>Through years of dedicated study, Sifu Wong developed a deep command of Ving Tsun's core principles: centerline theory, economy of motion, and tactile sensitivity through Chi Sao. His training was shaped not only by technical drilling but by a thorough understanding of the concepts that make the system effective against fully resisting opponents.</p>
      <p>As an instructor, Sifu Wong is known for his clear, patient, and methodical approach. He emphasizes hands-on learning — guiding each student through structured drills and progressive partner work to build real skill, not just choreography. His goal is to give every student a genuine foundation: practical self-defense ability, improved physical fitness, and the confidence that comes from testing yourself in a safe, supportive environment.</p>
      <p>Bringing an authentic line of one of Ving Tsun's most battle-tested lineages to Boston, Sifu Wong teaches the art as both a highly effective combat system and a practice of ongoing personal development.</p>
      <a href="#contact" class="btn" style="margin-top: 16px;">Train with Sifu Wong →</a>
    </div>
  </div>
</section>
```

- [ ] **Append CSS**

```css
/* ── About ── */
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1.4fr;
  gap: 64px;
  align-items: start;
}
.about__photo-wrap {
  position: relative;
  margin-bottom: 20px;
}
.about__photo-wrap img {
  width: 100%;
  height: 440px;
  object-fit: cover;
  object-position: top;
  border: 1px solid #1e1e1e;
}
.about__cert img {
  width: 100%;
  border: 1px solid #1e1e1e;
  opacity: 0.9;
}
.about__cert-caption {
  color: var(--faint);
  font-size: 0.72rem;
  text-align: center;
  margin-top: 8px;
  font-style: italic;
}
.about__text p {
  color: var(--muted);
  line-height: 1.8;
  margin-bottom: 18px;
}

@media (max-width: 900px) {
  .about__grid { grid-template-columns: 1fr; gap: 40px; }
  .about__photo-wrap img { height: 320px; }
}
```

- [ ] **Open browser — verify: photo + certificate left, bio text right, responsive stacking on mobile**

- [ ] **Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add about Sifu Wong section with certificate"
```

---

## Task 7: Training Section

**Files:**
- Modify: `index.html`
- Modify: `css/styles.css`

- [ ] **Add HTML after about section**

```html
<section class="section section-alt" id="training">
  <div class="container">
    <div style="text-align:center; margin-bottom: 56px;">
      <p class="gold-label">What You'll Learn</p>
      <h2 class="section-title">The Training</h2>
      <p style="color:var(--muted); max-width:600px; margin:0 auto; line-height:1.8;">Ving Tsun is a complete system — three empty-hand forms, sensitivity drills, wooden dummy, and weapons. Every element serves a specific purpose in developing a well-rounded fighter.</p>
    </div>
    <div class="training-grid">
      <div class="training-card">
        <div class="training-card__num">01</div>
        <h4>The Three Forms</h4>
        <p><strong>Siu Nim Tao</strong> (Little Idea) — foundation: structure, stance, basic hand positions.</p>
        <p><strong>Chum Kiu</strong> (Seeking the Bridge) — footwork, closing distance, waist power generation.</p>
        <p><strong>Biu Jee</strong> (Thrusting Fingers) — advanced emergency techniques, circle stepping, elbow strikes.</p>
      </div>
      <div class="training-card">
        <div class="training-card__num">02</div>
        <h4>Chi Sao (Sticky Hands)</h4>
        <p>The defining drill of Ving Tsun. Partners maintain continuous arm contact and develop tactile sensitivity — learning to read and react to an opponent's energy in real time.</p>
        <p>Chi Sao is not sparring. It is a laboratory for building the reflexes, timing, and adaptive responses that make Ving Tsun effective under pressure.</p>
      </div>
      <div class="training-card">
        <div class="training-card__num">03</div>
        <h4>Wooden Dummy &amp; Weapons</h4>
        <p>The <strong>Muk Yan Jong</strong> (Wooden Dummy) trains distancing, angles, and flow between techniques against a stationary opponent.</p>
        <p>Weapons training includes the <strong>Butterfly Knives</strong> (double knife principles) and the <strong>Long Pole</strong> (single long-range weapon) — both extend the open-hand system into weaponry.</p>
      </div>
    </div>

    <div class="training-benefits">
      <p class="gold-label" style="text-align:center; display:block; margin-bottom:24px;">Benefits of Training</p>
      <div class="benefits-grid">
        <div class="benefit-item">💪 Strength, balance &amp; coordination</div>
        <div class="benefit-item">🧠 Mental clarity &amp; stress resilience</div>
        <div class="benefit-item">🛡️ Practical self-defense skills</div>
        <div class="benefit-item">🤝 Welcoming community of all backgrounds</div>
        <div class="benefit-item">⚡ Measurable results in weeks</div>
        <div class="benefit-item">🎯 No prior martial arts experience needed</div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Append CSS**

```css
/* ── Training ── */
.training-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 24px;
  margin-bottom: 56px;
}
.training-card {
  background: var(--bg);
  border: 1px solid #1e1e1e;
  border-top: 3px solid var(--gold);
  padding: 32px 24px;
}
.training-card__num {
  font-size: 2.5rem;
  font-weight: 900;
  color: var(--gold);
  opacity: 0.25;
  line-height: 1;
  margin-bottom: 12px;
}
.training-card h4 {
  color: var(--text);
  font-size: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 14px;
}
.training-card p {
  color: var(--muted);
  font-size: 0.875rem;
  line-height: 1.7;
  margin-bottom: 10px;
}
.training-card strong { color: var(--text); }

.benefits-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
}
.benefit-item {
  background: var(--bg);
  border: 1px solid #1e1e1e;
  padding: 16px 20px;
  color: var(--muted);
  font-size: 0.875rem;
  border-left: 3px solid var(--gold-dim);
}

@media (max-width: 900px) {
  .training-grid { grid-template-columns: 1fr; }
  .benefits-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 480px) {
  .benefits-grid { grid-template-columns: 1fr; }
}
```

- [ ] **Open browser — verify: 3 training cards with gold top border, numbered 01/02/03, benefits grid below**

- [ ] **Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add training section with cards and benefits"
```

---

## Task 8: Classes & Contact Section

**Files:**
- Modify: `index.html`
- Modify: `css/styles.css`

- [ ] **Add HTML after training section**

```html
<section class="section" id="classes">
  <div class="container">
    <div style="text-align:center; margin-bottom:56px;">
      <p class="gold-label">Join Us</p>
      <h2 class="section-title">Classes &amp; Contact</h2>
    </div>
    <div class="classes-grid" id="contact">
      <div class="classes-info">
        <div class="info-block">
          <h4>Class Schedule</h4>
          <div class="schedule-item">
            <span class="schedule-day">Friday</span>
            <span class="schedule-time">6:00 PM – 7:30 PM</span>
          </div>
          <div class="schedule-item">
            <span class="schedule-day">Sunday</span>
            <span class="schedule-time">10:30 AM – 12:00 PM</span>
          </div>
        </div>
        <div class="info-block">
          <h4>Location</h4>
          <p style="color:var(--muted); line-height:1.7;">
            392 Hancock St<br/>
            Quincy, MA 02171<br/>
            United States
          </p>
          <a href="https://maps.google.com/?q=392+Hancock+St,+Quincy,+MA+02171" target="_blank" rel="noopener" class="btn btn-outline" style="margin-top:16px; font-size:0.7rem; padding:10px 20px;">Open in Maps →</a>
        </div>
        <div class="info-block">
          <h4>Pricing</h4>
          <p style="color:var(--muted);">Contact us for current pricing and trial class options.</p>
        </div>
        <div class="info-block">
          <h4>Get in Touch</h4>
          <div class="contact-links">
            <a href="mailto:kw.vingtsun.info@gmail.com" class="contact-link">
              <span class="contact-link__icon">✉</span>
              kw.vingtsun.info@gmail.com
            </a>
            <a href="https://www.instagram.com/usa_boston_shun_mo_ving_tsun/" target="_blank" rel="noopener" class="contact-link">
              <span class="contact-link__icon">◈</span>
              @usa_boston_shun_mo_ving_tsun
            </a>
          </div>
        </div>
      </div>
      <div class="classes-cta">
        <div class="cta-box">
          <p class="gold-label">Ready to start?</p>
          <h3>Begin Your Training</h3>
          <p>Whether you're completely new to martial arts or have prior experience, Ving Tsun has something to offer you. Send us a message and we'll get you started.</p>
          <a href="mailto:kw.vingtsun.info@gmail.com" class="btn" style="width:100%; text-align:center; margin-top:8px;">Email Sifu Wong →</a>
          <a href="https://www.instagram.com/usa_boston_shun_mo_ving_tsun/" target="_blank" rel="noopener" class="btn btn-outline" style="width:100%; text-align:center; margin-top:12px;">Follow on Instagram →</a>
          <p style="color:var(--faint); font-size:0.75rem; margin-top:20px; line-height:1.6;">All levels welcome. No prior experience required. First class available — contact for details.</p>
        </div>
        <!-- Google Maps embed -->
        <div class="map-embed">
          <iframe
            title="Ving Tsun Boston location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2951.4!2d-71.0!3d42.27!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDLCsDE2JzA2LjAiTiA3McKwMDAnMzYuMCJX!5e0!3m2!1sen!2sus!4v1"
            width="100%" height="220"
            style="border:0; filter:grayscale(80%) invert(90%) contrast(90%);"
            allowfullscreen="" loading="lazy"
            referrerpolicy="no-referrer-when-downgrade">
          </iframe>
        </div>
      </div>
    </div>
  </div>
</section>
```

- [ ] **Append CSS**

```css
/* ── Classes & Contact ── */
.classes-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}

.info-block {
  margin-bottom: 36px;
}
.info-block h4 {
  color: var(--gold);
  font-size: 0.75rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
  margin-bottom: 14px;
  border-bottom: 1px solid #1e1e1e;
  padding-bottom: 8px;
}

.schedule-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #1a1a1a;
}
.schedule-day {
  color: var(--text);
  font-weight: 700;
  font-size: 0.95rem;
}
.schedule-time {
  color: var(--gold);
  font-size: 0.9rem;
}

.contact-links { display: flex; flex-direction: column; gap: 12px; }
.contact-link {
  display: flex;
  align-items: center;
  gap: 12px;
  color: var(--muted);
  font-size: 0.85rem;
  transition: color var(--transition);
  word-break: break-all;
}
.contact-link:hover { color: var(--gold); }
.contact-link__icon {
  color: var(--gold);
  font-size: 1rem;
  flex-shrink: 0;
}

.cta-box {
  background: var(--bg-alt);
  border: 1px solid #1e1e1e;
  border-top: 3px solid var(--gold);
  padding: 32px;
  margin-bottom: 24px;
}
.cta-box h3 {
  font-size: 1.4rem;
  margin-bottom: 14px;
}
.cta-box p { color: var(--muted); line-height: 1.7; }
.cta-box .btn { display: block; }

.map-embed {
  border: 1px solid #1e1e1e;
  overflow: hidden;
}

@media (max-width: 900px) {
  .classes-grid { grid-template-columns: 1fr; gap: 40px; }
}
```

- [ ] **Open browser — verify: schedule days/times, location, email + Instagram links, CTA box, map embed (may show placeholder)**

- [ ] **Commit**

```bash
git add index.html css/styles.css
git commit -m "feat: add classes and contact section"
```

---

## Task 9: Gallery Section

**Files:**
- Modify: `index.html`
- Modify: `css/styles.css`
- Modify: `js/main.js`

- [ ] **Add gallery HTML after classes section**

The gallery uses two rows of images scrolling in opposite directions using CSS animation. Images 1–21 go in row 1, images 22–41 go in row 2. Each row's content is duplicated to create seamless looping.

```html
<section class="section section-alt" id="gallery">
  <div class="container" style="text-align:center; margin-bottom:40px;">
    <p class="gold-label">Gallery</p>
    <h2 class="section-title">Training &amp; Lineage</h2>
    <p style="color:var(--muted); max-width:560px; margin:0 auto;">A look inside the world of Shun Mo Ving Tsun — training sessions, lineage visits, and the global community.</p>
  </div>

  <div class="gallery-track-wrap">
    <!-- Row 1: images 1–21, scrolling left -->
    <div class="gallery-track gallery-track--left">
      <div class="gallery-track__inner" id="galleryRow1">
        <img src="images/1.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/2.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/3.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/4.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/5.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/6.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/7.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/8.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/9.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/10.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/11.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/12.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/13.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/14.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/15.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/16.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/17.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/18.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/19.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/20.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/21.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <!-- duplicated for seamless loop -->
        <img src="images/1.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/2.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/3.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/4.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/5.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/6.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/7.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/8.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/9.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/10.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/11.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/12.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/13.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/14.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/15.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/16.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/17.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/18.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/19.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/20.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/21.jpeg" alt="Ving Tsun training" loading="lazy"/>
      </div>
    </div>
    <!-- Row 2: images 22–41, scrolling right -->
    <div class="gallery-track gallery-track--right">
      <div class="gallery-track__inner" id="galleryRow2">
        <img src="images/22.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/23.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/24.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/25.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/26.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/27.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/28.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/29.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/30.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/31.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/32.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/33.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/34.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/35.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/36.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/37.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/38.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/39.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/40.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/41.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <!-- duplicated for seamless loop -->
        <img src="images/22.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/23.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/24.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/25.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/26.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/27.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/28.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/29.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/30.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/31.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/32.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/33.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/34.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/35.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/36.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/37.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/38.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/39.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/40.jpeg" alt="Ving Tsun training" loading="lazy"/>
        <img src="images/41.jpeg" alt="Ving Tsun training" loading="lazy"/>
      </div>
    </div>
  </div>

  <!-- Lightbox overlay (populated by JS) -->
  <div class="lightbox" id="lightbox" role="dialog" aria-modal="true" aria-label="Image viewer">
    <button class="lightbox__close" id="lightboxClose" aria-label="Close">✕</button>
    <img class="lightbox__img" id="lightboxImg" src="" alt=""/>
    <button class="lightbox__prev" id="lightboxPrev" aria-label="Previous">‹</button>
    <button class="lightbox__next" id="lightboxNext" aria-label="Next">›</button>
  </div>
</section>
```

- [ ] **Append gallery CSS**

```css
/* ── Gallery ── */
.gallery-track-wrap {
  display: flex;
  flex-direction: column;
  gap: 12px;
  overflow: hidden;
}

.gallery-track { overflow: hidden; }

.gallery-track__inner {
  display: flex;
  gap: 12px;
  width: max-content;
}

.gallery-track__inner img {
  height: 220px;
  width: auto;
  object-fit: cover;
  cursor: pointer;
  transition: opacity var(--transition);
  flex-shrink: 0;
}
.gallery-track__inner img:hover { opacity: 0.75; }

.gallery-track--left  .gallery-track__inner { animation: scrollLeft  40s linear infinite; }
.gallery-track--right .gallery-track__inner { animation: scrollRight 40s linear infinite; }

@keyframes scrollLeft  { from { transform: translateX(0); } to { transform: translateX(-50%); } }
@keyframes scrollRight { from { transform: translateX(-50%); } to { transform: translateX(0); } }

/* Pause on hover */
.gallery-track:hover .gallery-track__inner { animation-play-state: paused; }

/* Lightbox */
.lightbox {
  display: none;
  position: fixed;
  inset: 0;
  z-index: 200;
  background: rgba(0,0,0,0.95);
  align-items: center;
  justify-content: center;
}
.lightbox.open { display: flex; }
.lightbox__img {
  max-height: 90vh;
  max-width: 90vw;
  object-fit: contain;
}
.lightbox__close {
  position: absolute;
  top: 20px; right: 24px;
  background: none; border: none;
  color: var(--gold); font-size: 2rem;
  cursor: pointer; z-index: 201;
}
.lightbox__prev,
.lightbox__next {
  position: absolute;
  top: 50%; transform: translateY(-50%);
  background: none; border: none;
  color: var(--gold); font-size: 3rem;
  cursor: pointer; z-index: 201;
  padding: 0 20px;
}
.lightbox__prev { left: 0; }
.lightbox__next { right: 0; }

@media (max-width: 600px) {
  .gallery-track__inner img { height: 150px; }
}
```

- [ ] **Append lightbox JS to `js/main.js`**

```js
// ── Gallery Lightbox ──
const allGalleryImgs = Array.from(document.querySelectorAll('.gallery-track__inner img'));
// Deduplicate by src (rows are doubled for seamless loop)
const uniqueSrcs = [...new Set(allGalleryImgs.map(i => i.src))];
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
let currentIdx = 0;

function openLightbox(src) {
  currentIdx = uniqueSrcs.indexOf(src);
  lightboxImg.src = uniqueSrcs[currentIdx];
  lightboxImg.alt = `Gallery image ${currentIdx + 1}`;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
function showNext() {
  currentIdx = (currentIdx + 1) % uniqueSrcs.length;
  lightboxImg.src = uniqueSrcs[currentIdx];
}
function showPrev() {
  currentIdx = (currentIdx - 1 + uniqueSrcs.length) % uniqueSrcs.length;
  lightboxImg.src = uniqueSrcs[currentIdx];
}

allGalleryImgs.forEach(img => {
  img.addEventListener('click', () => openLightbox(img.src));
});
document.getElementById('lightboxClose').addEventListener('click', closeLightbox);
document.getElementById('lightboxNext').addEventListener('click', showNext);
document.getElementById('lightboxPrev').addEventListener('click', showPrev);
lightbox.addEventListener('click', e => { if (e.target === lightbox) closeLightbox(); });
document.addEventListener('keydown', e => {
  if (!lightbox.classList.contains('open')) return;
  if (e.key === 'Escape') closeLightbox();
  if (e.key === 'ArrowRight') showNext();
  if (e.key === 'ArrowLeft') showPrev();
});
```

- [ ] **Open browser — verify: two rows of images scroll in opposite directions, hovering pauses animation, clicking an image opens lightbox, Escape/arrows navigate, clicking outside closes lightbox**

- [ ] **Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: add gallery with infinite scroll and lightbox"
```

---

## Task 10: Footer

**Files:**
- Modify: `index.html`
- Modify: `css/styles.css`

- [ ] **Add footer HTML after gallery section, before `<script>`**

```html
<footer class="footer">
  <div class="container">
    <div class="footer__top">
      <div class="footer__brand">
        <img src="assets/logo.jpeg" alt="Ving Tsun Boston" class="footer__logo"/>
        <div>
          <p class="footer__name">VING TSUN BOSTON</p>
          <p class="footer__tagline">Shun Mo Scientific Ving Tsun</p>
        </div>
      </div>
      <nav class="footer__nav" aria-label="Footer navigation">
        <a href="#what-is">What is Ving Tsun</a>
        <a href="#lineage">Lineage</a>
        <a href="#about">About Sifu Wong</a>
        <a href="#training">Training</a>
        <a href="#classes">Classes</a>
        <a href="#gallery">Gallery</a>
        <a href="#contact">Contact</a>
      </nav>
    </div>
    <div class="footer__mid">
      <p>Part of the <a href="https://www.shunmo-vingtsun.com" target="_blank" rel="noopener" class="footer__link">Shun Mo Scientific Ving Tsun</a> global network — Hong Kong · China · Germany · USA</p>
    </div>
    <div class="footer__bottom">
      <p>© <span id="footerYear"></span> Ving Tsun Boston · 392 Hancock St, Quincy, MA 02171</p>
      <p>
        <a href="mailto:kw.vingtsun.info@gmail.com" class="footer__link">kw.vingtsun.info@gmail.com</a>
        ·
        <a href="https://www.instagram.com/usa_boston_shun_mo_ving_tsun/" target="_blank" rel="noopener" class="footer__link">Instagram</a>
      </p>
    </div>
  </div>
</footer>
```

- [ ] **Append footer CSS**

```css
/* ── Footer ── */
.footer {
  background: #000;
  border-top: 1px solid var(--gold-dim);
  padding: 56px 0 32px;
}
.footer__top {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 40px;
  margin-bottom: 40px;
  flex-wrap: wrap;
}
.footer__brand {
  display: flex;
  align-items: center;
  gap: 14px;
}
.footer__logo {
  width: 48px; height: 48px;
  border-radius: 50%;
  object-fit: cover;
  border: 1px solid var(--gold-dim);
}
.footer__name {
  color: var(--gold);
  font-weight: 900;
  font-size: 0.8rem;
  letter-spacing: 0.2em;
  text-transform: uppercase;
}
.footer__tagline {
  color: var(--faint);
  font-size: 0.72rem;
  margin-top: 2px;
}
.footer__nav {
  display: flex;
  flex-wrap: wrap;
  gap: 8px 24px;
}
.footer__nav a {
  color: var(--faint);
  font-size: 0.78rem;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  transition: color var(--transition);
}
.footer__nav a:hover { color: var(--gold); }

.footer__mid {
  border-top: 1px solid #1a1a1a;
  border-bottom: 1px solid #1a1a1a;
  padding: 20px 0;
  margin-bottom: 20px;
  color: var(--faint);
  font-size: 0.8rem;
  text-align: center;
}
.footer__link {
  color: var(--gold);
  transition: opacity var(--transition);
}
.footer__link:hover { opacity: 0.75; }

.footer__bottom {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 8px;
  color: var(--faint);
  font-size: 0.75rem;
}

@media (max-width: 600px) {
  .footer__top { flex-direction: column; }
  .footer__bottom { flex-direction: column; text-align: center; }
}
```

- [ ] **Add footer year JS at end of `js/main.js`**

```js
// ── Footer year ──
const yearEl = document.getElementById('footerYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();
```

- [ ] **Open browser — verify: footer shows logo, nav links, global network line, email + Instagram, current year auto-populated**

- [ ] **Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: add footer"
```

---

## Task 11: Polish, Scroll Animations & Final Checks

**Files:**
- Modify: `css/styles.css` — scroll reveal utility + final tweaks
- Modify: `js/main.js` — IntersectionObserver for fade-in
- Modify: `index.html` — add `data-reveal` attributes to key elements

- [ ] **Add fade-in-on-scroll CSS to `css/styles.css`**

```css
/* ── Scroll reveal ── */
[data-reveal] {
  opacity: 0;
  transform: translateY(24px);
  transition: opacity 0.6s ease, transform 0.6s ease;
}
[data-reveal].revealed {
  opacity: 1;
  transform: translateY(0);
}
```

- [ ] **Add `data-reveal` attributes to section headings and key blocks in `index.html`**

Add `data-reveal` to these elements (find by their text/class):
- `.what__text`, `.what__principles`
- `.lineage-chain`, `.lineage-quote`, `.lineage-photos`
- `.about__media`, `.about__text`
- Each `.training-card`
- `.classes-info`, `.classes-cta`
- `.footer__top`

- [ ] **Add IntersectionObserver JS to `js/main.js`**

```js
// ── Scroll reveal ──
const revealEls = document.querySelectorAll('[data-reveal]');
const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('revealed');
      revealObserver.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

revealEls.forEach(el => revealObserver.observe(el));
```

- [ ] **Final browser checklist — open `index.html` and verify all of the following:**

```
Desktop (full width):
[ ] Nav sticks to top, logo + links visible
[ ] Hero: photo bg visible, logo ring, VING TSUN / BOSTON title, BEGIN TRAINING button
[ ] Stats bar: 3 columns, gold text
[ ] What is Ving Tsun: 2 columns, 4 principle cards
[ ] Lineage: 4-node chain, quote, 2 photos
[ ] About: photo + cert left, bio right
[ ] Training: 3 cards + benefits grid
[ ] Classes: schedule, location, contact links, CTA box, map
[ ] Gallery: 2 rows scroll in opposite directions, lightbox works
[ ] Footer: logo, nav, network line, year

Mobile (resize to 375px):
[ ] Hamburger nav opens/closes drawer
[ ] All sections stack single column
[ ] Hero text readable, button full-width
[ ] Gallery images smaller but still scroll
[ ] Footer stacks vertically

Scroll behavior:
[ ] Clicking nav links smooth-scrolls to section
[ ] Sections fade in on scroll
[ ] Nav gains shadow after scrolling

Links:
[ ] "Email Sifu Wong" opens mail client
[ ] "Follow on Instagram" opens in new tab
[ ] "Open in Maps" opens Google Maps
[ ] "Shun Mo Scientific Ving Tsun" footer link opens shunmo-vingtsun.com
```

- [ ] **Commit**

```bash
git add index.html css/styles.css js/main.js
git commit -m "feat: add scroll reveal animations and final polish"
```

---

## Spec Coverage Check

| Spec requirement | Task |
|---|---|
| Dark black/gold color scheme | Task 1 |
| Sticky nav with mobile hamburger | Task 2 |
| Hero: logo ring, centered title, BEGIN TRAINING | Task 3 |
| Stats bar: Bruce Lee lineage, 300yr history, only US school | Task 3 |
| What is Ving Tsun content | Task 4 |
| Lineage chain + quote + photos | Task 5 |
| About Sifu Wong + certificate | Task 6 |
| Training: 3 forms, Chi Sao, Dummy/Weapons | Task 7 |
| Class schedule (Fri/Sun) + location + contact | Task 8 |
| Gallery auto-scroll (41 images, 2 rows) + lightbox | Task 9 |
| Footer + links | Task 10 |
| SEO meta + Schema.org | Task 1 |
| Mobile-first responsive | All tasks |
| Scroll animations | Task 11 |
