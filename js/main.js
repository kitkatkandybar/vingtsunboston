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
