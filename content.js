/**
 * ╔══════════════════════════════════════════════════════════════════╗
 * ║              JADEN'S SITE — CONTENT FILE                        ║
 * ║                                                                  ║
 * ║  This is the ONLY file you need to edit to update your site.    ║
 * ║  Change stuff here → push to GitHub → site updates in 20 sec.  ║
 * ╚══════════════════════════════════════════════════════════════════╝
 */

const SITE = {

  // ════════════════════════════════════════════════
  //  PERSONAL INFO
  // ════════════════════════════════════════════════

  name:          "Jaden Jirasevijinda",
  nameShort:     "Jaden",
  initials:      "JJ",
  tagline:       "Student. Creator. Community leader.",
  bio:           "I'm a high schooler at Livermore High School in California with a lot of interests and even more energy. I'm a student in the Green Engineering Academy and serve on the board of Pillars of Tech — a nonprofit dedicated to making STEM education accessible to everyone.",
  bioExtra:      "Outside of school and leadership, I'm constantly creating — whether it's shooting aerial drone footage, editing a short film, building a website, or experimenting with new gear. I'm fluent in English and Thai, and conversational in Chinese.",
  location:      "Livermore, CA",
  school:        "Livermore High School",
  email:         "jadenjirasevijinda@gmail.com",
  available:     true,
  availableText: "Student at Livermore High School",

  // ════════════════════════════════════════════════
  //  ACCENT COLOR
  //  Change this hex to update the color everywhere.
  //  "#2997ff" = blue  |  "#30d158" = green
  //  "#bf5af2" = purple  |  "#ff9f0a" = orange
  // ════════════════════════════════════════════════

  accentColor: "#2997ff",

  // ════════════════════════════════════════════════
  //  SOCIAL LINKS
  //  Remove a block or add more as needed.
  // ════════════════════════════════════════════════

  socials: [
    {
      label:    "LinkedIn",
      icon:     "💼",
      sublabel: "Professional",
      url:      "https://www.linkedin.com/in/jadenjirasevijinda",
    },
    {
      label:    "Instagram",
      icon:     "📷",
      sublabel: "Photography & Creative",
      url:      "https://instagram.com/thereal_jasian",
    },
  ],

  // ════════════════════════════════════════════════
  //  SKILLS
  // ════════════════════════════════════════════════

  skills: [
    "Photography", "Videography", "Video Editing", "Drone",
    "Web Dev", "HTML/CSS", "JavaScript",
    "English", "Thai", "Chinese",
    "Leadership", "STEM Education",
  ],

  // ════════════════════════════════════════════════
  //  HERO CHIPS  (badges shown under your name)
  //  style options: "accent" | "green" | "purple" | "dim"
  // ════════════════════════════════════════════════

  roles: [
    { text: "Green Engineering Academy",      style: "accent"  },
    { text: "Board Member @ Pillars of Tech", style: "green"   },
    { text: "Photographer",                   style: "dim"     },
    { text: "Videographer",                   style: "dim"     },
    { text: "Drone Pilot",                    style: "dim"     },
    { text: "Video Editor",                   style: "purple"  },
    { text: "Web Dev",                        style: "dim"     },
  ],

  // ════════════════════════════════════════════════
  //  STATS BAR
  // ════════════════════════════════════════════════

  stats: [
    { value: "3",    label: "Languages spoken",      color: "accent"  },
    { value: "∞",    label: "Photos taken",           color: "green"   },
    { value: "100%", label: "Passion for the craft",  color: "purple"  },
  ],

  // ════════════════════════════════════════════════
  //  EXPERIENCE / LEADERSHIP
  // ════════════════════════════════════════════════

  experience: [
    {
      period: "2024 — Present",
      role:   "Student",
      org:    "Green Engineering Academy — Livermore High School",
      desc:   "The Green Engineering Academy is a California Partnership Academy at Livermore High School that integrates academic and career technical education with business partnerships, mentoring, and internships. The academy prepares students for engineering careers and technical fields, teaching engineering and architecture software and tools, and readying students for 2-year, 4-year college degrees, or apprenticeship programs.",
      icon:   "⚙️",
    },
    {
      period: "2024 — Present",
      role:   "Board Member",
      org:    "Pillars of Tech — Nonprofit",
      desc:   "Serving on the board of Pillars of Tech, a nonprofit focused on making STEM education accessible to all students regardless of background.",
      icon:   "🏛️",
    },
  ],

  // ════════════════════════════════════════════════
  //  INTERESTS
  // ════════════════════════════════════════════════

  interests: [
    { icon: "📷", color: "rgba(41,151,255,0.12)",  name: "Photography",       desc: "Capturing moments and perspectives that tell a story. From candid shots to carefully composed frames."        },
    { icon: "🎬", color: "rgba(191,90,242,0.12)",  name: "Videography",       desc: "Bringing stories to life through motion. Planning shots, capturing footage, and crafting a narrative."        },
    { icon: "🚁", color: "rgba(255,159,10,0.12)",  name: "Drone Photography", desc: "There's nothing like a bird's-eye view. Aerial footage gives a perspective that never gets old."            },
    { icon: "🎞️", color: "rgba(48,209,88,0.12)",   name: "Video Editing",     desc: "Color grading, cutting to the beat, motion graphics — transforming raw clips into something worth watching." },
    { icon: "🌐", color: "rgba(41,151,255,0.12)",  name: "Web Development",   desc: "Building things for the internet that actually work and look great. Design meets logic."                      },
    { icon: "🌏", color: "rgba(255,159,10,0.12)",  name: "Languages",         desc: "Fluent in English and Thai, conversational in Chinese. Language opens doors to people and places."           },
  ],

  // ════════════════════════════════════════════════
  //  PROJECTS
  //  Add a real URL once you have one, replace "#"
  // ════════════════════════════════════════════════

  projects: [
    {
      id:       "pillars",
      title:    "Pillars of Tech",
      type:     "Nonprofit / Community",
      desc:     "Serving on the board of Pillars of Tech, a nonprofit focused on making STEM education accessible to all students regardless of background.",
      status:   "active",   // "active" | "wip" | "complete"
      tags:     ["Nonprofit", "STEM Education", "Leadership"],
      emoji:    "🏛️",
      bg:       "linear-gradient(135deg, #0a1628 0%, #0d2137 40%, #0a192f 100%)",
      url:      "#",        // ← replace with Pillars of Tech website when available
      featured: true,
    },
    {
      id:       "gea",
      title:    "Green Engineering Academy",
      type:     "Academy / Education",
      desc:     "A California Partnership Academy at Livermore High School integrating academic and career technical education with real-world engineering experience, business partnerships, and internships.",
      status:   "active",
      tags:     ["Engineering", "CTE", "California Partnership Academy"],
      emoji:    "⚙️",
      bg:       "linear-gradient(135deg, #0a1628 0%, #1a2a0a 100%)",
      url:      "#",
      featured: false,
    },
    {
      id:       "visuals",
      title:    "Visual Projects & Edits",
      type:     "Creative",
      desc:     "Photography, videography, and drone footage — capturing stories from around Livermore and beyond.",
      status:   "wip",
      tags:     ["Drone", "Photo", "Video Editing"],
      emoji:    "🎬",
      bg:       "linear-gradient(135deg, #1a0d2e 0%, #2d1b69 100%)",
      url:      "photos.html",
      featured: false,
    },
    {
      id:       "portfolio",
      title:    "This Portfolio",
      type:     "Web Dev",
      desc:     "Built from scratch with pure HTML, CSS, and JS. No frameworks, no build tools — just clean code deployed on Vercel.",
      status:   "active",
      tags:     ["HTML/CSS", "JavaScript", "Vercel"],
      emoji:    "🌐",
      bg:       "linear-gradient(135deg, #0d1b2a 0%, #1a3a5c 100%)",
      url:      "#",
      featured: false,
    },
  ],

  // ════════════════════════════════════════════════
  //  QUOTE  — set to null to hide it
  // ════════════════════════════════════════════════

  quote: null,

  // ════════════════════════════════════════════════
  //  HEADSHOT
  //
  //  OPTION A — local file (recommended):
  //    1. Put your photo in the images/ folder as "headshot.jpg"
  //    2. Set: headshot: "images/headshot.jpg"
  //
  //  OPTION B — any image URL:
  //    Set: headshot: "https://..."
  //
  //  OPTION C — no photo yet:
  //    Leave as: headshot: null
  // ════════════════════════════════════════════════

  headshot: null,  // ← e.g. "images/headshot.jpg"

  // ════════════════════════════════════════════════
  //  INSTAGRAM
  // ════════════════════════════════════════════════

  instagramUrl:    "https://instagram.com/thereal_jasian",
  instagramHandle: "@thereal_jasian",

  // ════════════════════════════════════════════════
  //  PHOTOS
  //
  //  HOW TO ADD A PHOTO:
  //    Option A — local file:
  //      1. Compress at squoosh.app (80% quality, save as JPG)
  //      2. Drop into the images/ folder
  //      3. Set src: "images/your-file.jpg"
  //
  //    Option B — Cloudinary (best for lots of photos, free):
  //      1. Upload at cloudinary.com → copy URL → paste as src
  //
  //    Option C — any direct image URL ending in .jpg/.png/.webp
  //
  //  CATEGORIES: "photography" | "drone" | "other"
  //  featured: true → also shows on the homepage bento card
  // ════════════════════════════════════════════════

  photos: [
    {
      src:      null,   // ← replace null with "images/photo1.jpg" or a URL
      alt:      "Golden hour at Del Valle",
      caption:  "Golden hour at Del Valle",
      category: "photography",
      featured: true,
    },
    {
      src:      null,
      alt:      "Aerial view of Livermore",
      caption:  "Livermore from above",
      category: "drone",
      featured: true,
    },
    {
      src:      null,
      alt:      "Pillars of Tech event",
      caption:  "Pillars of Tech event",
      category: "photography",
      featured: false,
    },
    {
      src:      null,
      alt:      "Bay Area aerial",
      caption:  "Bay Area aerial",
      category: "drone",
      featured: false,
    },
    {
      src:      null,
      alt:      "Downtown Livermore",
      caption:  "Downtown Livermore",
      category: "photography",
      featured: false,
    },
    {
      src:      null,
      alt:      "Sunset",
      caption:  "Sunset",
      category: "photography",
      featured: false,
    },
  ],

  // ════════════════════════════════════════════════
  //  VIDEOS
  //
  //  HOW TO ADD A VIDEO:
  //    1. Upload to YouTube — Unlisted is fine if you want it semi-private
  //    2. Copy the URL from your browser (youtube.com/watch?v=XXXXXXXXX)
  //    3. Paste into the "url" field below
  //    4. Leave thumbnail: null — it auto-pulls from YouTube
  //
  //  category: "drone" | "film" | "edit" | "event" | "other"
  // ════════════════════════════════════════════════

  videos: [
    {
      title:     "Livermore Aerial",
      url:       "https://youtube.com/watch?v=REPLACE_WITH_YOUR_VIDEO_ID",
      thumbnail: null,   // auto-loads from YouTube when null
      caption:   "Drone footage over Livermore",
      category:  "drone",
      featured:  true,
    },
    {
      title:     "Short Film",
      url:       "https://youtube.com/watch?v=REPLACE_WITH_YOUR_VIDEO_ID",
      thumbnail: null,
      caption:   "A short film I directed and edited",
      category:  "film",
      featured:  false,
    },
    {
      title:     "Edit Reel",
      url:       "https://youtube.com/watch?v=REPLACE_WITH_YOUR_VIDEO_ID",
      thumbnail: null,
      caption:   "Compilation of edits",
      category:  "edit",
      featured:  false,
    },
  ],

  // ════════════════════════════════════════════════
  //  NAV
  // ════════════════════════════════════════════════

  nav: [
    { label: "About",    href: "index.html"    },
    { label: "Photos",   href: "photos.html"   },
    { label: "Projects", href: "projects.html" },
    { label: "Contact",  href: "contact.html"  },
  ],

};

if (typeof module !== "undefined") module.exports = SITE;