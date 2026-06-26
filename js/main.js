// ─── Fade-in on scroll ───────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  const fadeEls = document.querySelectorAll(
    '.skill-group, .project-card, .stat, .about-text, .contact-item, .about-stats'
  );

  fadeEls.forEach(el => el.classList.add('fade-in'));

  const observer = new IntersectionObserver(
    entries => entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); }),
    { threshold: 0.12, rootMargin: '0px 0px -40px 0px' }
  );

  fadeEls.forEach(el => observer.observe(el));

  // ── Floating FAB: appear after scrolling past hero ────────────────────
  const fab      = document.querySelector('.resume-fab');
  const heroEl   = document.getElementById('hero');

  const fabObserver = new IntersectionObserver(
    ([entry]) => fab.classList.toggle('show', !entry.isIntersecting),
    { threshold: 0.2 }
  );
  fabObserver.observe(heroEl);

  // ── Active nav link on scroll ──────────────────────────────────────────────
  const sections  = document.querySelectorAll('section[id]');
  const navLinks  = document.querySelectorAll('.nav-links a');

  window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(s => {
      if (window.scrollY >= s.offsetTop - 120) current = s.id;
    });
    navLinks.forEach(a => {
      a.classList.toggle('active', a.getAttribute('href') === `#${current}`);
    });
  }, { passive: true });

  // ── Cursor dot ────────────────────────────────────────────────────────────
  const dot = document.createElement('div');
  dot.id = 'cursor-dot';
  document.body.appendChild(dot);

  let cx = 0, cy = 0, tx = 0, ty = 0;

  document.addEventListener('mousemove', e => { tx = e.clientX; ty = e.clientY; });

  (function moveDot() {
    cx += (tx - cx) * 0.18;
    cy += (ty - cy) * 0.18;
    dot.style.transform = `translate(${cx - 5}px, ${cy - 5}px)`;
    requestAnimationFrame(moveDot);
  })();

  document.querySelectorAll('a, button, .project-card').forEach(el => {
    el.addEventListener('mouseenter', () => dot.classList.add('expand'));
    el.addEventListener('mouseleave', () => dot.classList.remove('expand'));
  });
});
