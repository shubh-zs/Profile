// Injects CONFIG data into the DOM. Static text lives in index.html.

document.addEventListener('DOMContentLoaded', () => {
  const c = CONFIG;

  // ── Resume links ─────────────────────────────────────────────────────────
  document.querySelectorAll('[data-resume]').forEach(el => {
    el.href = c.resumeFile;
  });

  // ── About stats ──────────────────────────────────────────────────────────
  document.querySelector('.about-stats').innerHTML =
    c.stats.map(s => `
      <div class="stat">
        <span class="stat-num">${s.num}</span>
        <span class="stat-label">${s.label}</span>
      </div>`).join('');

  // ── Skills ───────────────────────────────────────────────────────────────
  document.querySelector('.skills-grid').innerHTML =
    c.skills.map(g => `
      <div class="skill-group">
        <h3>${g.heading}</h3>
        <div class="tags">
          ${g.tags.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>`).join('');

  // ── Projects ─────────────────────────────────────────────────────────────
  document.querySelector('.projects-grid').innerHTML =
    c.projects.map(p => `
      <div class="project-card${p.featured ? ' featured' : ''}">
        <div class="project-tag">${p.tag}</div>
        <h3>${p.title}</h3>
        <p>${p.desc}</p>
        <div class="project-tech">
          ${p.tech.map(t => `<span>${t}</span>`).join('')}
        </div>
      </div>`).join('');

  // ── Contact links ────────────────────────────────────────────────────────
  document.querySelector('.contact-links').innerHTML =
    c.contact.map(l => `
      <a href="${l.href}" class="contact-item"
         ${l.external ? 'target="_blank" rel="noopener"' : ''}>
        <span class="contact-icon">${l.icon}</span>
        <span>${l.label}</span>
      </a>`).join('');
});
