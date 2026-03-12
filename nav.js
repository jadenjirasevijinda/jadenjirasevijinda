// ════════════════════════════════════════════════
//  nav.js — shared nav + More sidebar
//  Edit THIS file to change nav/sidebar on every page at once.
// ════════════════════════════════════════════════
(function () {

  // ── Which page are we on? ──────────────────────
  const page = location.pathname.split('/').pop() || 'index.html';
  const navLinks = [
    { href: 'index.html',    label: '01_HOME' },
    { href: 'about.html',    label: '02_ABOUT' },
    { href: 'projects.html', label: '03_WORKS' },
    { href: 'photos.html',   label: '04_GALLERY' },
    { href: 'contact.html',  label: '05_CONNECT' },
  ];

  // index.html uses "#" as its own href
  const isHome = (page === 'index.html' || page === '');

  const linksHTML = navLinks.map(l => {
    const href   = (isHome && l.href === 'index.html') ? '#' : l.href;
    const active = (page === l.href) || (isHome && l.href === 'index.html');
    return `<li><a href="${href}"${active ? ' class="active"' : ''}>${l.label}</a></li>`;
  }).join('');

  // ── Inject nav ─────────────────────────────────
  const nav = document.querySelector('nav');
  if (nav) {
    nav.innerHTML = `
      <a class="nav-logo" href="index.html">JADEN JIRASEVIJINDA</a>
      <ul class="nav-links">${linksHTML}</ul>
      <div class="nav-right">
        <div class="nav-time" id="clock">00:00:00</div>
      </div>
    `;
  }

  // ── Inject More sidebar ────────────────────────
  const wrap = document.createElement('div');
  wrap.innerHTML = `
    <div class="more-overlay" id="more-overlay">
      <div class="more-backdrop"></div>
      <div class="more-sidebar" id="more-sidebar">
        <div class="more-header">
          <span class="more-header-title">More</span>
          <button class="more-close" id="more-close">✕</button>
        </div>
        <div class="more-section">
          <div class="more-section-label">Equipment</div>
          <a class="more-item" href="equipment.html">
            <div class="more-item-icon">⚡</div>
            <div class="more-item-body">
              <div class="more-item-title">Quickstart + Usage</div>
              <div class="more-item-sub">Jump right in — what you need to get started</div>
            </div>
            <span class="more-item-arrow">→</span>
          </a>
        </div>
        <div class="more-divider"></div>
        <div class="more-section" style="padding-top:20px;">
          <div class="more-section-label">Learning</div>
          <a class="more-item" href="tutorials.html">
            <div class="more-item-icon">📖</div>
            <div class="more-item-body">
              <div class="more-item-title">Tutorials</div>
              <div class="more-item-sub">Step-by-step guides for video &amp; audio</div>
            </div>
            <span class="more-item-arrow">→</span>
          </a>
          <a class="more-item" href="resources.html">
            <div class="more-item-icon">🔗</div>
            <div class="more-item-body">
              <div class="more-item-title">Resources</div>
              <div class="more-item-sub">Tools, apps, and gear links I use</div>
            </div>
            <span class="more-item-arrow">→</span>
          </a>
        </div>
        <div class="more-divider"></div>
        <div class="more-section" style="padding-top:20px;">
          <div class="more-section-label">Other</div>
          <a class="more-item" href="https://github.com/jadenjirasevijinda/jadenjirasevijinda" target="_blank" rel="noopener">
            <div class="more-item-icon">
              <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.374 0 0 5.373 0 12c0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23A11.509 11.509 0 0 1 12 5.803c1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576C20.566 21.797 24 17.3 24 12c0-6.627-5.373-12-12-12z"/></svg>
            </div>
            <div class="more-item-body">
              <div class="more-item-title">Source Code</div>
              <div class="more-item-sub">This site on GitHub</div>
            </div>
            <span class="more-item-arrow">↗</span>
          </a>
        </div>
        <div class="more-footer">
          <div class="more-footer-text">Built with Claude AI · Hosted on Vercel</div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(wrap.firstElementChild);

  // ── Open / close logic ─────────────────────────
  function openMore()  { document.getElementById('more-overlay').classList.add('open'); }
  function closeMore() { document.getElementById('more-overlay').classList.remove('open'); }

  document.getElementById('more-close').addEventListener('click', closeMore);
  document.getElementById('more-overlay').addEventListener('click', function (e) {
    if (e.target === this || e.target.classList.contains('more-backdrop')) closeMore();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMore(); });

  // Expose globally so any page can call openMore() if needed
  window.openMore  = openMore;
  window.closeMore = closeMore;

  // ── Clock ──────────────────────────────────────
  function tick() {
    const el = document.getElementById('clock');
    if (el) el.textContent = new Date().toLocaleTimeString('en-US', { hour12: false });
  }
  tick();
  setInterval(tick, 1000);

})();