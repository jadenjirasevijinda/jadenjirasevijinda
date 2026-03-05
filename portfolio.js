/* ── Live clock ──────────────────────────────── */
function tick() {
  const el = document.getElementById('clock');
  if (!el) return;
  const now = new Date();
  el.textContent =
    now.getHours().toString().padStart(2, '0') + ':' +
    now.getMinutes().toString().padStart(2, '0') + ':' +
    now.getSeconds().toString().padStart(2, '0');
}
setInterval(tick, 1000);
tick();

/* ── Drifting + mouse-reactive dots ─────────── */
(function () {
  const canvas = document.getElementById('dot-canvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const DOT_COLOR    = 'rgba(255,255,255,0.18)';
  const DOT_RADIUS   = 1;
  const SPACING      = 40;
  const MOUSE_RADIUS = 100;
  const MOUSE_FORCE  = 1.8;

  let dots = [];
  let W, H;
  let mx = -9999, my = -9999;

  window.addEventListener('mousemove', e => { mx = e.clientX; my = e.clientY; });
  window.addEventListener('mouseleave', () => { mx = -9999; my = -9999; });

  function resize() {
    W = canvas.width  = window.innerWidth;
    H = canvas.height = window.innerHeight;
    initDots();
  }

  function initDots() {
    dots = [];
    const cols = Math.ceil(W / SPACING) + 1;
    const rows = Math.ceil(H / SPACING) + 1;
    for (let r = 0; r < rows; r++) {
      for (let c = 0; c < cols; c++) {
        dots.push({
          ox: c * SPACING,
          oy: r * SPACING,
          x:  c * SPACING,
          y:  r * SPACING,
          vx: (Math.random() - 0.5) * 0.18,
          vy: (Math.random() - 0.5) * 0.18,
          range: 6 + Math.random() * 6,
        });
      }
    }
  }

  function update() {
    for (const d of dots) {
      // Mouse repulsion
      const mdx   = d.x - mx;
      const mdy   = d.y - my;
      const mdist = Math.sqrt(mdx * mdx + mdy * mdy);
      if (mdist < MOUSE_RADIUS && mdist > 0) {
        const strength = (1 - mdist / MOUSE_RADIUS) * MOUSE_FORCE;
        d.vx += (mdx / mdist) * strength;
        d.vy += (mdy / mdist) * strength;
      }

      d.x += d.vx;
      d.y += d.vy;

      // Spring back to origin
      const dx   = d.ox - d.x;
      const dy   = d.oy - d.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist > d.range) {
        d.vx += dx * 0.003;
        d.vy += dy * 0.003;
      }

      // Random drift + damping
      d.vx += (Math.random() - 0.5) * 0.012;
      d.vy += (Math.random() - 0.5) * 0.012;
      d.vx *= 0.97;
      d.vy *= 0.97;
    }
  }

  function draw() {
    ctx.clearRect(0, 0, W, H);
    ctx.fillStyle = DOT_COLOR;
    for (const d of dots) {
      ctx.beginPath();
      ctx.arc(d.x, d.y, DOT_RADIUS, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function loop() {
    update();
    draw();
    requestAnimationFrame(loop);
  }

  window.addEventListener('resize', resize);
  resize();
  loop();
})();
