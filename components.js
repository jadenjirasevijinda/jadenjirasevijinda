/**
 * components.js
 * Injects shared nav, footer, cursor glow, and scroll animations
 * into every page automatically. Just include this script + content.js.
 */

(function () {

  // ── Apply accent color from SITE config ─────────────────────────
  function applyAccent() {
    if (!window.SITE?.accentColor) return;
    const hex = SITE.accentColor;
    // Convert hex to rgb for rgba() usage
    const r = parseInt(hex.slice(1,3),16);
    const g = parseInt(hex.slice(3,5),16);
    const b = parseInt(hex.slice(5,7),16);
    document.documentElement.style.setProperty('--accent', hex);
    document.documentElement.style.setProperty('--accent-rgb', `${r},${g},${b}`);
  }

  // ── Build nav ───────────────────────────────────────────────────
  function buildNav() {
    const nav = document.getElementById('site-nav');
    if (!nav || !window.SITE) return;

    const currentPage = window.location.pathname.split('/').pop() || 'index.html';

    const links = SITE.nav.map(l => {
      const isActive = currentPage === l.href || (currentPage === '' && l.href === 'index.html');
      return `<li><a href="${l.href}" class="${isActive ? 'active' : ''}">${l.label}</a></li>`;
    }).join('');

    nav.innerHTML = `
      <div class="nav-inner">
        <a href="index.html" class="nav-logo">${SITE.nameShort}<em>.</em></a>
        <ul class="nav-links">
          ${links}
          <li><a href="contact.html" class="nav-cta">Say Hello</a></li>
        </ul>
        <button class="nav-mobile-btn" id="nav-mobile-btn" aria-label="Menu">
          <span></span><span></span><span></span>
        </button>
      </div>
    `;

    // Mobile menu (simple)
    const mobileBtn = document.getElementById('nav-mobile-btn');
    if (mobileBtn) {
      mobileBtn.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
      });
    }
  }

  // ── Build footer ────────────────────────────────────────────────
  function buildFooter() {
    const footer = document.getElementById('site-footer');
    if (!footer || !window.SITE) return;

    footer.innerHTML = `
      <div class="container">
        <div class="footer-inner">
          <div class="footer-left">© ${new Date().getFullYear()} ${SITE.name} — ${SITE.location}</div>
          <div class="footer-right">Built with <em>♥</em> & curiosity</div>
        </div>
      </div>
    `;
  }

  // ── Cursor glow ─────────────────────────────────────────────────
  function buildCursor() {
    const el = document.createElement('div');
    el.id = 'cursor-glow';
    document.body.prepend(el);

    let raf;
    document.addEventListener('mousemove', e => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        el.style.left = e.clientX + 'px';
        el.style.top  = e.clientY + 'px';
      });
    });
    document.addEventListener('mouseleave', () => el.style.opacity = '0');
    document.addEventListener('mouseenter', () => el.style.opacity = '1');
  }

  // ── Scroll animations ───────────────────────────────────────────
  function buildObserver() {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.dataset.delay) || 0;
          setTimeout(() => entry.target.classList.add('visible'), delay);
          io.unobserve(entry.target);
        }
      });
    }, { threshold: 0.08 });

    // Observe anything with .animate or .animate-x
    document.querySelectorAll('.animate, .animate-x').forEach((el, i) => {
      // Auto-stagger siblings inside same parent
      if (!el.dataset.delay) {
        const siblings = [...el.parentElement.children].filter(c =>
          c.classList.contains('animate') || c.classList.contains('animate-x')
        );
        el.dataset.delay = siblings.indexOf(el) * 80;
      }
      io.observe(el);
    });
  }

  // ── Active nav on scroll ────────────────────────────────────────
  function buildScrollSpy() {
    const links = document.querySelectorAll('.nav-links a');
    if (!links.length) return;

    const sections = document.querySelectorAll('section[id]');
    if (!sections.length) return;

    window.addEventListener('scroll', () => {
      let current = '';
      sections.forEach(s => {
        if (window.scrollY >= s.offsetTop - 100) current = s.id;
      });
      links.forEach(a => {
        const href = a.getAttribute('href');
        a.classList.toggle('active', href === '#' + current);
      });
    }, { passive: true });
  }

  // ── Mobile nav styles (injected) ───────────────────────────────
  function injectMobileStyles() {
    const style = document.createElement('style');
    style.textContent = `
      .nav-mobile-btn {
        display: none;
        flex-direction: column;
        gap: 5px;
        padding: 6px;
        cursor: pointer;
      }
      .nav-mobile-btn span {
        width: 22px; height: 1.5px;
        background: var(--text-muted);
        border-radius: 2px;
        transition: all 0.3s;
        display: block;
      }
      .mobile-nav-drawer {
        display: none;
        position: fixed;
        top: var(--nav-h); left: 0; right: 0;
        background: rgba(6,6,8,0.97);
        backdrop-filter: blur(24px);
        border-bottom: 1px solid var(--border);
        padding: 20px 24px 28px;
        z-index: 199;
        flex-direction: column;
        gap: 4px;
      }
      .mobile-nav-drawer a {
        display: block;
        padding: 12px 0;
        font-size: 18px;
        font-weight: 500;
        color: var(--text-muted);
        text-decoration: none;
        border-bottom: 1px solid var(--border);
      }
      .mobile-nav-drawer a:last-child { border-bottom: none; }
      .mobile-nav-drawer a:hover { color: var(--text); }
      body.nav-open .mobile-nav-drawer { display: flex; }
      body.nav-open .nav-mobile-btn span:nth-child(1) { transform: translateY(6.5px) rotate(45deg); }
      body.nav-open .nav-mobile-btn span:nth-child(2) { opacity: 0; }
      body.nav-open .nav-mobile-btn span:nth-child(3) { transform: translateY(-6.5px) rotate(-45deg); }
      @media (max-width: 960px) {
        .nav-mobile-btn { display: flex; }
      }
    `;
    document.head.appendChild(style);

    // Build mobile drawer
    if (!window.SITE) return;
    const drawer = document.createElement('div');
    drawer.className = 'mobile-nav-drawer';
    drawer.innerHTML = SITE.nav.map(l =>
      `<a href="${l.href}">${l.label}</a>`
    ).join('') + `<a href="contact.html" style="color:var(--accent)">Say Hello →</a>`;
    document.body.appendChild(drawer);

    // Close on link click
    drawer.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', () => document.body.classList.remove('nav-open'));
    });
  }

  // ── Init ────────────────────────────────────────────────────────
  function init() {
    applyAccent();
    buildNav();
    buildFooter();
    buildCursor();
    injectMobileStyles();

    // Observer + scroll spy after DOM is ready
    requestAnimationFrame(() => {
      buildObserver();
      buildScrollSpy();
    });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }

})();
