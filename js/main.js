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

document.querySelectorAll('.nav__drawer-link').forEach(link => {
  link.addEventListener('click', () => drawer.classList.remove('open'));
});

// ── Ig photo pool (shared by polaroid cycling + lightbox) ──
const DELETED = new Set(['assets/gallery/ig_023.jpg']);
const IG_IMAGES = Array.from({ length: 73 }, (_, i) => {
  const n = String(i + 1).padStart(3, '0');
  return `assets/gallery/ig_${n}.jpg`;
}).filter(src => !DELETED.has(src));

// ── Gallery Lightbox ──
const allGalleryImgs = Array.from(document.querySelectorAll('.gallery-track__inner img'));
const uniqueSrcs = [...new Set(allGalleryImgs.map(i => i.src))];
const lightbox    = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightboxImg');
let lightboxPool = [];
let currentIdx = 0;

function openLightbox(src, pool) {
  lightboxPool = pool;
  currentIdx = pool.indexOf(src);
  if (currentIdx === -1) currentIdx = 0;
  lightboxImg.src = lightboxPool[currentIdx];
  lightboxImg.alt = `Gallery image ${currentIdx + 1}`;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
}
function closeLightbox() {
  lightbox.classList.remove('open');
  document.body.style.overflow = '';
}
function showNext() {
  currentIdx = (currentIdx + 1) % lightboxPool.length;
  lightboxImg.src = lightboxPool[currentIdx];
}
function showPrev() {
  currentIdx = (currentIdx - 1 + lightboxPool.length) % lightboxPool.length;
  lightboxImg.src = lightboxPool[currentIdx];
}

allGalleryImgs.forEach(img => {
  img.addEventListener('click', () => openLightbox(img.src, uniqueSrcs));
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

// ── Classes polaroid cycling ──
(function () {
  const SWEEP_MS = 800;

  const panels = Array.from(document.querySelectorAll('.classes-photo-band .polaroid-frame')).map(frame => ({
    img:     frame.querySelector('img'),
    curtain: frame.querySelector('.polaroid-curtain'),
    bar:     frame.querySelector('.polaroid-bar'),
    polaroid: frame.querySelector('.polaroid'),
    current: frame.querySelector('img').getAttribute('src'),
  }));

  function pickNext(current) {
    const pool = IG_IMAGES.filter(src => src !== current);
    return pool[Math.floor(Math.random() * pool.length)];
  }

  function revealPanel(panel) {
    const { img, curtain, bar } = panel;
    const next  = pickNext(panel.current);
    const imgH  = curtain.parentElement.offsetHeight;

    curtain.style.transition = 'none';
    curtain.style.clipPath   = 'inset(0 0 0 0)';
    bar.style.transition     = 'none';
    bar.style.top            = '0px';
    bar.style.opacity        = '0';

    setTimeout(() => {
      img.setAttribute('src', next);
      panel.current = next;
      setTimeout(() => {
        bar.style.opacity = '1';
        requestAnimationFrame(() => requestAnimationFrame(() => {
          bar.style.transition     = `top ${SWEEP_MS}ms cubic-bezier(.4,0,.6,1)`;
          bar.style.top            = imgH + 'px';
          curtain.style.transition = `clip-path ${SWEEP_MS}ms cubic-bezier(.4,0,.6,1)`;
          curtain.style.clipPath   = 'inset(100% 0 0 0)';
          setTimeout(() => {
            bar.style.transition = 'opacity 0.3s';
            bar.style.opacity    = '0';
          }, SWEEP_MS - 80);
          scheduleNext(panel);
        }));
      }, 120);
    }, 80);
  }

  function scheduleNext(panel) {
    setTimeout(() => revealPanel(panel), 3500 + Math.floor(Math.random() * 5500));
  }

  panels.forEach((panel, i) => {
    panel.polaroid.addEventListener('click', () => {
      // IG_IMAGES and panel.current are both relative paths — indexOf is reliable
      const idx = IG_IMAGES.indexOf(panel.current);
      lightboxPool = IG_IMAGES;
      currentIdx   = idx >= 0 ? idx : 0;
      lightboxImg.src = panel.img.src; // use browser-resolved absolute URL
      lightbox.classList.add('open');
      document.body.style.overflow = 'hidden';
    });
    setTimeout(() => scheduleNext(panel), i * 1500 + Math.floor(Math.random() * 800));
  });
})();

// ── Footer year ──
const yearEl = document.getElementById('footerYear');
if (yearEl) yearEl.textContent = new Date().getFullYear();

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
