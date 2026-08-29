/* ==========================================================================
   script.js
   Reads everything from CONFIG (config.js) and renders it into the page.
   You should not need to edit this file to personalize your info —
   edit config.js instead. This file only needs edits if you want to
   change *behavior* (e.g. how the contact form submits).
   ========================================================================== */

document.addEventListener("DOMContentLoaded", () => {
  renderIdentity();
  renderHero();
  renderStats();
  renderProjects();
  renderSkills();
  renderTools();
  renderServices();
  renderContact();
  renderSocial();
  renderFooter();
  initNavToggle();
  initTimecode();
  initSkillBarReveal();
  initContactForm();
});

/* ---------- helpers ---------- */
function initials(name){
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map(w => w[0].toUpperCase())
    .join("");
}

function el(tag, className, content){
  const node = document.createElement(tag);
  if (className) node.className = className;
  if (content !== undefined) node.innerHTML = content;
  return node;
}

/* ---------- header / logo / meta ---------- */
function renderIdentity(){
  document.title = `${CONFIG.myName} — ${CONFIG.professionalTitle}`;
  const desc = document.querySelector('meta[name="description"]');
  if (desc) desc.setAttribute("content", `${CONFIG.myName} — ${CONFIG.professionalTitle}. ${CONFIG.shortBio}`);

  const mark = initials(CONFIG.myName);
  document.getElementById("logoMark").textContent = mark;
  document.getElementById("footerLogo").textContent = mark;
}

/* ---------- hero ---------- */
function renderHero(){
  document.getElementById("heroName").textContent = CONFIG.myName;
  document.getElementById("heroTitle").textContent = CONFIG.professionalTitle;
  document.getElementById("heroBio").textContent = CONFIG.shortBio;

  const resumeLink = document.getElementById("resumeLink");
  if (CONFIG.resumeURL){
    resumeLink.href = CONFIG.resumeURL;
  } else {
    resumeLink.remove();
  }
}

/* ---------- stats ---------- */
function renderStats(){
  const wrap = document.getElementById("statsStrip");
  (CONFIG.stats || []).forEach(stat => {
    const item = el("div", "stat-item");
    item.appendChild(el("div", "stat-value", stat.value));
    item.appendChild(el("div", "stat-label", stat.label));
    wrap.appendChild(item);
  });
}

/* ---------- projects ---------- */
function renderProjects(){
  const wrap = document.getElementById("projectGallery");
  (CONFIG.projects || []).forEach(project => {
    const card = el("article", "clip-card");

    const thumb = el("div", "clip-thumb");
    const img = el("img");
    img.src = project.image;
    img.alt = project.title;
    thumb.appendChild(img);

    if (project.duration){
      thumb.appendChild(el("span", "clip-duration", project.duration));
    }

    const playOverlay = el("div", "clip-play");
    playOverlay.appendChild(el("span", null, "▶"));
    thumb.appendChild(playOverlay);

    card.appendChild(thumb);

    const body = el("div", "clip-body");
    if (project.category) body.appendChild(el("p", "clip-category", `// ${project.category}`));

    const titleEl = project.link && project.link !== "#"
      ? el("a", null, project.title)
      : el("span", null, project.title);
    if (project.link && project.link !== "#") titleEl.href = project.link;
    const titleWrap = el("h3", "clip-title");
    titleWrap.appendChild(titleEl);
    body.appendChild(titleWrap);

    body.appendChild(el("p", "clip-desc", project.description || ""));

    if (project.tools && project.tools.length){
      const toolsRow = el("div", "clip-tools");
      project.tools.forEach(tool => toolsRow.appendChild(el("span", null, tool)));
      body.appendChild(toolsRow);
    }

    card.appendChild(body);
    wrap.appendChild(card);
  });
}

/* ---------- skills ---------- */
function renderSkills(){
  const wrap = document.getElementById("skillsList");
  (CONFIG.skills || []).forEach(skill => {
    const row = el("div", "skill-row");
    const top = el("div", "skill-top");
    top.appendChild(el("span", "skill-name", skill.name));
    top.appendChild(el("span", "skill-value", `${skill.level}%`));
    row.appendChild(top);

    const bar = el("div", "skill-bar");
    const fill = el("div", "skill-bar-fill");
    fill.dataset.level = skill.level;
    bar.appendChild(fill);
    row.appendChild(bar);

    wrap.appendChild(row);
  });
}

function initSkillBarReveal(){
  const bars = document.querySelectorAll(".skill-bar-fill");
  if (!bars.length) return;

  if (!("IntersectionObserver" in window)){
    bars.forEach(bar => { bar.style.width = `${bar.dataset.level}%`; });
    return;
  }

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting){
        entry.target.style.width = `${entry.target.dataset.level}%`;
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.4 });

  bars.forEach(bar => observer.observe(bar));
}

/* ---------- tools ---------- */
function renderTools(){
  const wrap = document.getElementById("toolsList");
  (CONFIG.tools || []).forEach(tool => wrap.appendChild(el("span", null, tool)));
}

/* ---------- services ---------- */
function renderServices(){
  const wrap = document.getElementById("servicesList");
  (CONFIG.services || []).forEach((service, index) => {
    const row = el("div", "service-row");
    row.appendChild(el("div", "service-num", String(index + 1).padStart(2, "0")));

    const content = el("div");
    content.appendChild(el("h3", "service-title", service.title));
    content.appendChild(el("p", "service-desc", service.description));
    row.appendChild(content);

    wrap.appendChild(row);
  });
}

/* ---------- contact info + form options ---------- */
function renderContact(){
  const list = document.getElementById("contactDetails");
  const rows = [
    ["Email", CONFIG.myEmail, `mailto:${CONFIG.myEmail}`],
    ["Phone", CONFIG.myPhone, `tel:${(CONFIG.myPhone || "").replace(/[^+\d]/g, "")}`],
    ["Location", CONFIG.myLocation, null]
  ];
  rows.forEach(([label, value, href]) => {
    if (!value) return;
    const li = el("li");
    const content = href ? el("a", null, `${label}: ${value}`) : null;
    if (content){
      content.href = href;
      li.appendChild(content);
    } else {
      li.textContent = `${label}: ${value}`;
    }
    list.appendChild(li);
  });

  const select = document.getElementById("fieldProjectType");
  const placeholder = el("option", null, "Select a project type…");
  placeholder.value = "";
  placeholder.disabled = true;
  placeholder.selected = true;
  select.appendChild(placeholder);
  (CONFIG.contactFormProjectTypes || []).forEach(type => {
    const opt = el("option", null, type);
    opt.value = type;
    select.appendChild(opt);
  });
}

/* ---------- social links ---------- */
function renderSocial(){
  const platforms = [
    ["facebook", "FB"],
    ["instagram", "IG"],
    ["linkedin", "IN"],
    ["github", "GH"],
    ["youtube", "YT"]
  ];

  [document.getElementById("socialRow"), document.getElementById("footerSocialRow")].forEach(wrap => {
    if (!wrap) return;
    platforms.forEach(([key, label]) => {
      const url = CONFIG.social && CONFIG.social[key];
      if (!url) return; // hide icons with no URL configured
      const link = el("a", null, label);
      link.href = url;
      link.target = "_blank";
      link.rel = "noopener";
      link.setAttribute("aria-label", key);
      wrap.appendChild(link);
    });
  });
}

/* ---------- footer ---------- */
function renderFooter(){
  const year = new Date().getFullYear();
  document.getElementById("footerCopy").textContent =
    `© ${year} ${CONFIG.myName}. All rights reserved.`;
}

/* ---------- nav toggle (mobile) ---------- */
function initNavToggle(){
  const toggle = document.getElementById("navToggle");
  const nav = document.getElementById("mainNav");
  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.setAttribute("aria-expanded", String(isOpen));
  });
  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

/* ---------- live timecode ticker (decorative signature element) ---------- */
function initTimecode(){
  const display = document.getElementById("timecodeValue");
  if (!display) return;
  const start = performance.now();

  function tick(now){
    const elapsedMs = now - start;
    const totalFrames = Math.floor(elapsedMs / (1000 / 24)); // 24fps
    const frames = totalFrames % 24;
    const totalSeconds = Math.floor(totalFrames / 24);
    const seconds = totalSeconds % 60;
    const totalMinutes = Math.floor(totalSeconds / 60);
    const minutes = totalMinutes % 60;
    const hours = Math.floor(totalMinutes / 60);

    const pad = n => String(n).padStart(2, "0");
    display.textContent = `${pad(hours)}:${pad(minutes)}:${pad(seconds)}:${pad(frames)}`;
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
}

/* ---------- contact form ----------
   No backend is wired up by default. On submit, the form validates the
   fields, then opens the visitor's email client with a pre-filled
   message addressed to CONFIG.myEmail via a mailto: link.

   TO CONNECT A REAL BACKEND (recommended for production):
   Replace the body of `sendMessage()` below with a fetch() call to your
   form endpoint (e.g. Formspree, Getform, your own API), for example:

     async function sendMessage(data) {
       await fetch("https://your-endpoint.example.com/submit", {
         method: "POST",
         headers: { "Content-Type": "application/json" },
         body: JSON.stringify(data)
       });
     }
------------------------------------------------------------------------- */
function initContactForm(){
  const form = document.getElementById("contactForm");
  const status = document.getElementById("formStatus");

  const fields = {
    name: document.getElementById("fieldName"),
    email: document.getElementById("fieldEmail"),
    projectType: document.getElementById("fieldProjectType"),
    message: document.getElementById("fieldMessage")
  };
  const errors = {
    name: document.getElementById("errorName"),
    email: document.getElementById("errorEmail"),
    projectType: document.getElementById("errorProjectType"),
    message: document.getElementById("errorMessage")
  };

  function validate(){
    let valid = true;

    Object.values(fields).forEach(f => f.closest(".field").classList.remove("invalid"));
    Object.values(errors).forEach(e => e.textContent = "");

    if (!fields.name.value.trim()){
      setError("name", "Please enter your name.");
      valid = false;
    }

    const emailVal = fields.email.value.trim();
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailVal){
      setError("email", "Please enter your email.");
      valid = false;
    } else if (!emailPattern.test(emailVal)){
      setError("email", "Please enter a valid email address.");
      valid = false;
    }

    if (!fields.projectType.value){
      setError("projectType", "Please select a project type.");
      valid = false;
    }

    if (!fields.message.value.trim()){
      setError("message", "Please enter a message.");
      valid = false;
    } else if (fields.message.value.trim().length < 10){
      setError("message", "Message seems short — add a few more details.");
      valid = false;
    }

    return valid;
  }

  function setError(key, msg){
    errors[key].textContent = msg;
    fields[key].closest(".field").classList.add("invalid");
  }

  function sendMessage(data){
    const subject = encodeURIComponent(`New inquiry: ${data.projectType} — from ${data.name}`);
    const body = encodeURIComponent(
      `Name: ${data.name}\nEmail: ${data.email}\nProject Type: ${data.projectType}\n\n${data.message}`
    );
    window.location.href = `mailto:${CONFIG.myEmail}?subject=${subject}&body=${body}`;
  }

  form.addEventListener("submit", (evt) => {
    evt.preventDefault();
    status.textContent = "";
    status.className = "form-status";

    if (!validate()){
      status.textContent = "Please fix the highlighted fields.";
      status.classList.add("error");
      return;
    }

    const data = {
      name: fields.name.value.trim(),
      email: fields.email.value.trim(),
      projectType: fields.projectType.value,
      message: fields.message.value.trim()
    };

    sendMessage(data);

    status.textContent = "Opening your email client to send this message…";
    status.classList.add("success");
    form.reset();
  });
}
