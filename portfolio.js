<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Works — Jaden Jirasevijinda</title>
  <link href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@300;400;500;600;700;800&family=Instrument+Serif:ital@1&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>
  <canvas id="dot-canvas"></canvas>
  <div class="glow"></div>

  <nav>
    <a class="nav-logo" href="index.html">JADEN JIRASEVIJINDA</a>
    <ul class="nav-links">
      <li><a href="index.html">01_HOME</a></li>
      <li><a href="about.html">02_ABOUT</a></li>
      <li><a href="projects.html" class="active">03_WORKS</a></li>
      <li><a href="photos.html">04_GALLERY</a></li>
      <li><a href="contact.html">05_CONNECT</a></li>
    </ul>
    <div class="nav-right">
      <button class="more-btn" id="more-btn" onclick="openMore()">More</button>
      <div class="nav-time" id="clock">00:00:00</div>
    </div>
  </nav>

  <div class="page-shell">
    <div class="works-left">
      <div class="ticker-wrap" aria-hidden="true">
        <div class="ticker">
          <span>BUILD LOG</span><span>BUILD LOG</span><span>BUILD LOG</span>
        </div>
      </div>
      <div>
        <div class="page-eyebrow">03 — Works</div>
        <h1 class="page-heading">BUILD<br><span class="ac">LOG.</span></h1>
      </div>
      <div class="works-count">3 projects — click any to explore</div>
    </div>

    <div class="works-right">
      <div class="right-label">Projects</div>

      <div class="project-card" onclick="openProject('brainless')">
        <span class="pc-num">01</span>
        <div class="pc-body">
          <div class="pc-title">Brainless Experts</div>
          <div class="pc-meta">
            <span class="pc-type">Vodcast</span>
            <span class="pc-status">· Archived</span>
          </div>
          <div class="pc-skills">
            <span class="pc-skill">DaVinci Resolve</span>
            <span class="pc-skill">Rodecaster Pro</span>
            <span class="pc-skill">Management</span>
          </div>
        </div>
        <span class="pc-arrow">→</span>
      </div>

      <div class="project-card" onclick="openProject('housing')">
        <span class="pc-num">02</span>
        <div class="pc-body">
          <div class="pc-title">Affordable Housing Project</div>
          <div class="pc-meta">
            <span class="pc-type">Architecture</span>
            <span class="pc-status">· Archived</span>
          </div>
          <div class="pc-skills">
            <span class="pc-skill">Revit</span>
            <span class="pc-skill">Leadership</span>
          </div>
        </div>
        <span class="pc-arrow">→</span>
      </div>

      <div class="project-card" onclick="openProject('portfolio')">
        <span class="pc-num">03</span>
        <div class="pc-body">
          <div class="pc-title">Portfolio Website</div>
          <div class="pc-meta">
            <span class="pc-type">Web Dev</span>
            <span class="pc-status">· Active</span>
          </div>
          <div class="pc-skills">
            <span class="pc-skill">Claude AI</span>
            <span class="pc-skill">Vibe Coding</span>
            <span class="pc-skill">Vercel</span>
            <span class="pc-skill">GitHub</span>
          </div>
        </div>
        <span class="pc-arrow">→</span>
      </div>
    </div>
  </div>

  <!-- Modal -->
  <div class="modal-overlay" id="modal-overlay" onclick="closeModal(event)">
    <div class="modal-box">
      <button class="modal-close" onclick="document.getElementById('modal-overlay').classList.remove('open')">✕</button>
      <div class="modal-tag" id="m-tag"></div>
      <div class="modal-title" id="m-title"></div>
      <p class="modal-desc" id="m-desc"></p>
      <div class="modal-section">
        <div class="modal-section-label">Skills Used</div>
        <div class="modal-skills" id="m-skills"></div>
      </div>
      <div class="modal-section">
        <div class="modal-section-label">Links</div>
        <div class="modal-links" id="m-links"></div>
      </div>
    </div>
  </div>

  <script src="portfolio.js"></script>
  <script>
    const projects = {
      brainless: {
        tag: 'Vodcast · Archived',
        title: 'Brainless Experts',
        desc: 'A video podcast interviewing students on their talents, interests, and more, with the hope that more people can learn as they listen. During my time at Brainless Experts I learned the importance of storytelling, videography, video editing, and research.',
        skills: ['DaVinci Resolve', 'Rodecaster Pro', 'Management', 'Storytelling'],
        links: [
          { label: 'Website', url: 'https://sites.google.com/view/brainless-experts-website/home' },
          { label: 'YouTube Channel', url: 'https://www.youtube.com/@brainlessexperts8626/videos' },
        ]
      },
      housing: {
        tag: 'Architecture · Archived',
        title: 'Affordable Housing Project',
        desc: 'Our team designed an affordable housing complex for the Leahy Square site in Livermore. As Project Manager I ensured the design met all codes and site constraints, managed budget and financing, delegated tasks, and was personally responsible for designing the two-bedroom unit.',
        skills: ['Revit', 'Leadership', 'Project Management', 'Architecture'],
        links: [
          { label: 'Final Presentation (PDF)', url: 'media/Affordable Housing Project Final Presentation.pdf', download: true },
          { label: 'Draft Site Plan (PDF)', url: 'media/Affordable Housing Project Draft Site Plan.pdf', download: true },
        ]
      },
      portfolio: {
        tag: 'Web Dev · Active',
        title: 'Portfolio Website',
        desc: 'Experimenting with Claude and AI vibe coding to create this personal portfolio website, hosted on Vercel with all files managed through GitHub.',
        skills: ['Claude AI', 'Vibe Coding', 'Vercel', 'GitHub', 'HTML/CSS/JS'],
        links: [
          { label: 'GitHub Repository', url: 'https://github.com/jadenjirasevijinda/jadenjirasevijinda' },
        ]
      }
    };

    function openProject(key) {
      const p = projects[key];
      document.getElementById('m-tag').textContent   = p.tag;
      document.getElementById('m-title').textContent = p.title;
      document.getElementById('m-desc').textContent  = p.desc;
      document.getElementById('m-skills').innerHTML  = p.skills.map(s =>
        `<span class="modal-skill">${s}</span>`).join('');
      document.getElementById('m-links').innerHTML   = p.links.map(l =>
        `<a class="modal-link" href="${l.url}" ${l.download ? 'download' : 'target="_blank" rel="noopener"'}>${l.label} →</a>`).join('');
      document.getElementById('modal-overlay').classList.add('open');
    }
    function closeModal(e) {
      if (e.target === document.getElementById('modal-overlay'))
        document.getElementById('modal-overlay').classList.remove('open');
    }
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') document.getElementById('modal-overlay').classList.remove('open');
    });
  </script>

  <!-- ── More Sidebar ── -->
  <div class="more-overlay" id="more-overlay" onclick="handleMoreOverlayClick(event)">
    <div class="more-backdrop"></div>
    <div class="more-sidebar" id="more-sidebar">
      <div class="more-header">
        <span class="more-header-title">More</span>
        <button class="more-close" onclick="closeMore()">✕</button>
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
  <script>
    function openMore()  {
      document.getElementById('more-overlay').classList.add('open');
      document.getElementById('more-btn').classList.add('open');
    }
    function closeMore() {
      document.getElementById('more-overlay').classList.remove('open');
      document.getElementById('more-btn').classList.remove('open');
    }
    function handleMoreOverlayClick(e) {
      if (e.target === document.getElementById('more-overlay') ||
          e.target.classList.contains('more-backdrop')) closeMore();
    }
    document.addEventListener('keydown', e => { if (e.key === 'Escape') closeMore(); });
  </script>

</body>
</html>
