/* ======================================================================
   PORTFOLIO CONFIGURATION
   ======================================================================
   This is the ONLY file you should need to edit to personalize the
   website. Every value below is pulled automatically into the page by
   script.js — change it here once, and it updates everywhere
   (the header, hero, footer, contact section, meta tags, etc).

   Do NOT edit index.html or script.js to change your personal info,
   projects, skills, or services. Just edit the values in this file.
   ====================================================================== */

const CONFIG = {

  // ----------------------------------------------------------------------
  // 1. PERSONAL INFORMATION — edit these values
  // ----------------------------------------------------------------------
  myName: "Mariechu Nazareth I. Daños",
  professionalTitle: "Video Editor & Digital Creative",

  // Short bio — shown in the hero section. Keep it to 2-3 sentences.
  shortBio: "Ityo boy, tomboy. Kaya ko i editt lahat yan, basta may bayad",

  myEmail: "itsyourboyyomboymrchd@gmail.com",
  myPhone: "+63 9121095575",
  myLocation: "Angeles City, Philippines",

  // Path or URL to your profile picture. Put an image file next to this
  // one (e.g. "profile.jpg") and reference it here, or use a full URL.
  profilePicture: "pfp1.jpg",

  // Link to your resume/CV — can be a PDF hosted anywhere (Google Drive,
  // Dropbox, GitHub, your own server, etc).
  resumeURL: "#",

  // ----------------------------------------------------------------------
  // 2. SOCIAL / PROFILE LINKS — edit these values
  //    Leave a value as "" (empty string) to automatically hide that
  //    icon/link from the page instead of showing a broken link.
  // ----------------------------------------------------------------------
  social: {
    facebook: "https://facebook.com/mariechu.danos25",
    instagram: "https://instagram.com/realmscmrch",
    youtube: "https://youtube.com/@akosimariechu"
  },

  // ----------------------------------------------------------------------
  // 3. STATS STRIP — small credibility numbers shown under the hero.
  //    Add, remove, or edit as many as you like.
  // ----------------------------------------------------------------------
  stats: [
    { value: "5+", label: "Years editing" },
    { value: "10+", label: "Projects delivered" },
    { value: "5+", label: "Clients worked with" },
    { value: "4K/HDR", label: "Delivery formats" }
  ],

  // ----------------------------------------------------------------------
  // 4. PORTFOLIO PROJECTS — edit, add, or remove project entries.
  //    Each project becomes one "clip" card in the Work section.
  //    - title:       project name
  //    - category:    short tag (e.g. "Brand Film", "Music Video")
  //    - description: 1-3 sentence summary of the project
  //    - image:       thumbnail image URL or local file path
  //    - tools:       array of software/tools used on this project
  //    - duration:    displayed like a clip length, e.g. "02:14"
  //    - link:        URL to the finished video/case study (optional)
  // ----------------------------------------------------------------------
  projects: [
    {
      title: "School Project // Shorty Story",
      category: "Graphic Edit",
      description: "A 90-second brand story for an outdoor apparel launch, cut for pace and built around a single tracking shot.",
      image: "https://placehold.co/640x360/17181B/FF6A3D?text=Project+01",
      tools: ["Capcut Pro"],
      duration: "06:30",
      link: "#"
    },
    {
      title: "Night Signals // Music Video",
      category: "Music Video",
      description: "Performance and narrative intercut for an independent artist's debut single, graded for a neon-noir look.",
      image: "https://placehold.co/640x360/17181B/3DDC97?text=Project+02",
      tools: ["Premiere Pro", "DaVinci Resolve"],
      duration: "03:42",
      link: "#"
    },
    {
      title: "Founders // Documentary Series",
      category: "Documentary",
      description: "Episode two of a four-part interview series profiling early-stage founders, edited from 14 hours of raw footage.",
      image: "https://placehold.co/640x360/17181B/8A8D93?text=Project+03",
      tools: ["Premiere Pro", "Audition"],
      duration: "08:15",
      link: "#"
    },
    {
      title: "Launch Day // Social Campaign",
      category: "Social / Ads",
      description: "A set of six vertical cutdowns for a product launch, optimized for the first three seconds of scroll.",
      image: "https://placehold.co/640x360/17181B/FF6A3D?text=Project+04",
      tools: ["Premiere Pro", "After Effects"],
      duration: "00:15",
      link: "#"
    }
  ],

  // ----------------------------------------------------------------------
  // 5. SKILLS — shown as a proficiency bar list.
  //    "level" is a number from 0-100.
  // ----------------------------------------------------------------------
  skills: [
    { name: "Narrative Editing", level: 95 },
    { name: "Color Grading", level: 85 },
    { name: "Sound Design & Mixing", level: 75 },
    { name: "Motion Graphics", level: 65 },
    { name: "Story Structure & Pacing", level: 90 }
  ],

  // ----------------------------------------------------------------------
  // 6. SOFTWARE / TOOLS — shown as a simple tag row.
  // ----------------------------------------------------------------------
  tools: [
    "Capcut Pro",
    "Picsart",
    "Alight Motion"
  ],

  // ----------------------------------------------------------------------
  // 7. SERVICES — shown as a numbered shot list.
  //    - title:       service name
  //    - description: what's included / what it's for
  // ----------------------------------------------------------------------
  services: [
    {
      title: "Narrative & Brand Editing",
      description: "Full-service editing for short films, brand stories, and commercials — from assembly cut to final grade."
    },
    {
      title: "Social & Ad Cutdowns",
      description: "Fast-turnaround vertical and square edits built for retention on Instagram, TikTok, and YouTube Shorts."
    },
    {
      title: "Color Grading",
      description: "Scene-to-scene color correction and creative grading to give your footage a consistent, intentional look."
    },
    {
      title: "Sound Design & Mix",
      description: "Dialogue cleanup, music placement, and a final mix so your video sounds as polished as it looks."
    }
  ],

  // ----------------------------------------------------------------------
  // 8. CONTACT FORM SETTINGS
  //    "Subject/Project Type" dropdown options shown in the contact form.
  //    The form itself has no backend — see script.js for how submissions
  //    are handled (currently opens the visitor's email client via
  //    mailto: pre-filled with their message; swap in your own form
  //    backend/API if you'd rather collect submissions directly).
  // ----------------------------------------------------------------------
  contactFormProjectTypes: [
    "Brand Film",
    "Music Video",
    "Documentary",
    "Social / Ad Campaign",
    "Other"
  ]
};
