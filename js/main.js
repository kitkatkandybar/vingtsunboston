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
