document.documentElement.classList.add('js');

// Scroll reveal — only runs if IntersectionObserver is available
const reveals = document.querySelectorAll('.reveal');
if (window.IntersectionObserver) {
  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.08 }
  );
  reveals.forEach((el) => revealObserver.observe(el));
} else {
  reveals.forEach((el) => el.classList.add('visible'));
}

// Mobile nav toggle
const nav       = document.getElementById('nav');
const navToggle = document.getElementById('navToggle');

function closeNav() {
  nav.classList.remove('nav--open');
  navToggle.setAttribute('aria-expanded', 'false');
}

navToggle.addEventListener('click', () => {
  const isOpen = nav.classList.toggle('nav--open');
  navToggle.setAttribute('aria-expanded', isOpen);
});

// Close on Escape key, return focus to toggle button
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && nav.classList.contains('nav--open')) {
    closeNav();
    navToggle.focus();
  }
});

// Close mobile nav when a link is tapped
document.querySelectorAll('.nav__menu a').forEach((link) => {
  link.addEventListener('click', closeNav);
});

// Pause autoplay demo video for users who prefer reduced motion
const demoVideo = document.querySelector('.demo-video');
if (demoVideo && window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
  demoVideo.removeAttribute('autoplay');
  demoVideo.pause();
  demoVideo.controls = true;
}
