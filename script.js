/* ============================================
   MAIN JAVASCRIPT - script.js
   Contains: Mobile menu, Dark mode, Portfolio filter, Form handler, Lightbox
   Fixed: All categories (graphic, uiux, web) show cover images correctly
   ============================================ */

// ========== MOBILE MENU TOGGLE ==========
const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

if (hamburger) {
  hamburger.addEventListener("click", mobileMenu);
}

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}

const navLink = document.querySelectorAll(".nav-link");
navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  if (hamburger) hamburger.classList.remove("active");
  if (navMenu) navMenu.classList.remove("active");
}

// ========== DARK MODE THEME TOGGLE ==========
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
  if (e.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

if (toggleSwitch) {
  toggleSwitch.addEventListener("change", switchTheme, false);
}

const currentTheme = localStorage.getItem("theme");
if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark" && toggleSwitch) {
    toggleSwitch.checked = true;
  }
}

// ========== SET CURRENT YEAR IN FOOTER ==========
const dateElement = document.querySelector("#datee");
if (dateElement) {
  dateElement.innerHTML = new Date().getFullYear();
}

// ========== PORTFOLIO DYNAMIC GALLERY ==========
const portfolioData = [
  {
    title: "Spotify Clone",
    category: "uiux",
    bg: "linear-gradient(135deg,#667eea,#764ba2)",
    desc: "UX research & high-fidelity prototype for modern banking",
    link: "https://www.figma.com/proto/PjfehLADtoZxizoDmKheJh/Untitled?node-id=188-3530&t=mQO3GckbrG4ZpVaB-1",
    image: "assets/graphics/spotify1.jpg"
  },
  {
    title: "Organic Skincare Brand",
    category: "graphic",
    bg: "linear-gradient(135deg,#f093fb,#f5576c)",
    desc: "Complete brand identity, logo design, packaging system",
    image: "assets/graphics/so-1.jpg"
  },
  {
    title: "Organic Skincare Brand",
    category: "graphic",
    bg: "linear-gradient(135deg,#f093fb,#f5576c)",
    desc: "Complete brand identity, logo design, packaging system",
    image: "assets/graphics/so-2.jpg"
  },
  {
    title: "Organic Skincare Brand",
    category: "graphic",
    bg: "linear-gradient(135deg,#f093fb,#f5576c)",
    desc: "Complete brand identity, logo design, packaging system",
    image: "assets/graphics/.jpg"
  },
  {
    title: "Organic Skincare Brand",
    category: "graphic",
    bg: "linear-gradient(135deg,#f093fb,#f5576c)",
    desc: "Complete brand identity, logo design, packaging system",
    image: "assets/graphics/bro-1.png"
  },
  {
    title: "Organic Skincare Brand",
    category: "graphic",
    bg: "linear-gradient(135deg,#f093fb,#f5576c)",
    desc: "Complete brand identity, logo design, packaging system",
    image: "assets/graphics/"
  },
  {
    title: "Organic Skincare Brand",
    category: "graphic",
    bg: "linear-gradient(135deg,#f093fb,#f5576c)",
    desc: "Complete brand identity, logo design, packaging system",
    image: "assets/graphics/"
  },
  {
    title: "Organic Skincare Brand",
    category: "graphic",
    bg: "linear-gradient(135deg,#f093fb,#f5576c)",
    desc: "Complete brand identity, logo design, packaging system",
    image: "assets/graphics/"
  },
  {
    title: "Botanical Essence",
    category: "graphic",
    bg: "linear-gradient(135deg,#f093fb,#f5576c)",
    desc: "Eco-friendly visual identity, packaging & label design",
    image: "assets/graphics/img-14.jpg"
  },
  {
    title: "Portfolio Website",
    category: "web",
    bg: "linear-gradient(135deg,#4facfe,#00f2fe)",
    desc: "Custom animations, responsive layout, CMS integration",
    link: "https://github.com",
    image: "https://images.unsplash.com/photo-1547658719-da2b51169166?w=800&h=600&fit=crop"
  },
  {
    title: "Arena Animation Clone",
    category: "uiux",
    bg: "linear-gradient(135deg,#43e97b,#38f9d7)",
    desc: "UX research, user flows, increased conversion by 35%",
    link: "https://www.figma.com/proto/G1VrtNWHKOGeXwOhb6kjWr/Untitled?node-id=5-2&t=tGK5a4AUFIGsGRPF-1",
    image: "assets/graphics/arena.jpg"
  },
  {
    title: "Concert Posters Series",
    category: "graphic",
    bg: "linear-gradient(135deg,#fa709a,#fee140)",
    desc: "3-poster music festival campaign, typography focus",
    image: "assets/graphics/bro-1.png"
  },
  {
    title: "Corporate Website",
    category: "web",
    bg: "linear-gradient(135deg,#a18cd1,#fbc2eb)",
    desc: "Business website with modern design and CMS",
    link: "https://github.com",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop"
  },
  {
    title: "Dashboard Analytics",
    category: "uiux",
    bg: "linear-gradient(135deg,#ff9a9e,#fecfef)",
    desc: "Data visualization dashboard for business metrics",
    link: "https://dribbble.com",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop"
  },
  {
    title: "Social Media Kit",
    category: "graphic",
    bg: "linear-gradient(135deg,#a1c4fd,#c2e9fb)",
    desc: "Complete Instagram templates, brand assets, story designs",
    image: "https://images.unsplash.com/photo-1611162616475-46b635cb6868?w=800&h=600&fit=crop"
  },
  {
    title: "Restaurant Landing Page",
    category: "web",
    bg: "linear-gradient(135deg,#ffecd2,#fcb69f)",
    desc: "Hero animations, online reservation system, menu showcase",
    link: "https://github.com",
    image: "https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?w=800&h=600&fit=crop"
  },
  {
    title: "Minimalist Logo Collection",
    category: "graphic",
    bg: "linear-gradient(135deg,#667eea,#764ba2)",
    desc: "Set of 10 minimalist logos for various brands",
    image: "https://images.unsplash.com/photo-1586717791821-3f44a563fa4c?w=800&h=600&fit=crop"
  },
  {
    title: "Brand Guideline Book",
    category: "graphic",
    bg: "linear-gradient(135deg,#f093fb,#f5576c)",
    desc: "60-page brand guideline document with visual systems",
    image: "https://images.unsplash.com/photo-1545235617-7a424c1a60cc?w=800&h=600&fit=crop"
  }
];

// ========== LIGHTBOX MODAL - WORKS FOR ALL CATEGORIES ==========
function createLightbox() {
  if (document.getElementById("portfolioLightbox")) return;

  const lightbox = document.createElement("div");
  lightbox.id = "portfolioLightbox";
  lightbox.innerHTML = `
    <div class="lightbox-overlay">
      <div class="lightbox-content">
        <button class="lightbox-close" aria-label="Close">&times;</button>
        <div class="lightbox-inner">
          <div class="lightbox-preview" id="lightboxPreview"></div>
          <div class="lightbox-details">
            <span class="lightbox-tag" id="lightboxTag"></span>
            <h3 id="lightboxTitle"></h3>
            <p id="lightboxDesc"></p>
            <div id="lightboxLinkWrap" style="margin-top:12px;display:none;">
              <a id="lightboxLink" href="#" target="_blank" rel="noopener noreferrer"
                style="display:inline-flex;align-items:center;gap:6px;padding:8px 18px;
                       background:var(--primary,#667eea);color:#fff;border-radius:6px;
                       text-decoration:none;font-size:0.9rem;font-weight:600;">
                <i class="fas fa-external-link-alt"></i> Open Link
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  `;
  document.body.appendChild(lightbox);

  lightbox.querySelector(".lightbox-overlay").addEventListener("click", function (e) {
    if (e.target === this) closeLightbox();
  });
  lightbox.querySelector(".lightbox-close").addEventListener("click", closeLightbox);

  document.addEventListener("keydown", function (e) {
    if (e.key === "Escape") closeLightbox();
  });
}

function openLightbox(item) {
  createLightbox();
  const lb = document.getElementById("portfolioLightbox");
  const preview = document.getElementById("lightboxPreview");

  // Clear previous content
  preview.innerHTML = "";
  preview.style.background = "";
  preview.style.display = "";

  if (item.image) {
    // Show image for all categories that have one
    const img = document.createElement("img");
    img.src = item.image;
    img.alt = item.title;
    img.style.cssText = "width:100%;height:100%;max-height:60vh;object-fit:contain;display:block;";

    // Fallback to gradient icon on image error
    img.onerror = function () {
      const icon = item.category === "graphic" ? "paint-brush"
                 : item.category === "uiux"    ? "mobile-alt"
                 :                               "code";
      preview.innerHTML = `<i class="fas fa-${icon}" style="font-size:4rem;color:white;"></i>`;
      preview.style.background = item.bg;
      preview.style.display = "flex";
      preview.style.alignItems = "center";
      preview.style.justifyContent = "center";
    };

    preview.appendChild(img);
    preview.style.background = "none";
    preview.style.display = "block";
  } else {
    // No image — gradient + icon fallback
    const icon = item.category === "graphic" ? "paint-brush"
               : item.category === "uiux"    ? "mobile-alt"
               :                               "code";
    preview.innerHTML = `<i class="fas fa-${icon}" style="font-size:4rem;color:white;"></i>`;
    preview.style.background = item.bg;
    preview.style.display = "flex";
    preview.style.alignItems = "center";
    preview.style.justifyContent = "center";
  }

  // Text content
  document.getElementById("lightboxTag").textContent   = item.category.toUpperCase();
  document.getElementById("lightboxTitle").textContent = item.title;
  document.getElementById("lightboxDesc").textContent  = item.desc;

  // Show "Open Link" button for uiux / web
  const linkWrap = document.getElementById("lightboxLinkWrap");
  const linkEl   = document.getElementById("lightboxLink");
  if (item.link && (item.category === "uiux" || item.category === "web")) {
    linkEl.href          = item.link;
    linkEl.innerHTML     = `<i class="fas fa-external-link-alt"></i> ${item.category === "uiux" ? "Open Prototype" : "Visit Site"}`;
    linkWrap.style.display = "block";
  } else {
    linkWrap.style.display = "none";
  }

  // Show lightbox
  lb.style.display = "flex";
  document.body.style.overflow = "hidden";
  setTimeout(() => lb.querySelector(".lightbox-overlay").classList.add("active"), 10);
}

function closeLightbox() {
  const lb = document.getElementById("portfolioLightbox");
  if (!lb) return;
  lb.querySelector(".lightbox-overlay").classList.remove("active");
  setTimeout(() => {
    lb.style.display = "none";
    document.body.style.overflow = "";
    const preview = document.getElementById("lightboxPreview");
    if (preview) preview.innerHTML = "";
  }, 300);
}

// ========== RENDER PORTFOLIO ==========
function renderPortfolio(filter = "all") {
  const grid = document.getElementById("portfolioGrid");
  if (!grid) return;

  const filtered = filter === "all"
    ? portfolioData
    : portfolioData.filter(item => item.category === filter);

  grid.innerHTML = filtered.map((item, idx) => {
    let icon      = "code";
    let badgeIcon = "fas fa-external-link-alt";
    let badgeText = "View";

    if (item.category === "uiux") {
      icon      = "mobile-alt";
      badgeText = "Open Prototype";
    } else if (item.category === "graphic") {
      icon      = "paint-brush";
      badgeIcon = "fas fa-search-plus";
      badgeText = "View Image";
    } else if (item.category === "web") {
      badgeText = "Visit Site";
    }

    // Show thumbnail image if available, otherwise show icon
    let previewContent = "";
    if (item.image) {
      const escapedBg   = item.bg.replace(/'/g, "\\'");
      const escapedIcon = icon;
      previewContent = `
        <img
          src="${item.image}"
          alt="${escapeHtml(item.title)}"
          style="width:100%;height:100%;object-fit:cover;"
          onerror="this.parentElement.style.background='${escapedBg}';
                   this.remove();
                   this.parentElement.innerHTML='<i class=\\'fas fa-${escapedIcon}\\' style=\\'font-size:3rem;\\'></i>';"
        />`;
    } else {
      previewContent = `<i class="fas fa-${icon}" style="font-size:3rem;"></i>`;
    }

    return `
      <div class="portfolio-item" data-type="${item.category}" data-idx="${idx}" style="position:relative;cursor:pointer;">
        <div class="portfolio-img" style="background:${item.bg};">
          ${previewContent}
          <div class="portfolio-badge">
            <i class="${badgeIcon}" style="font-size:0.65rem;"></i> ${badgeText}
          </div>
        </div>
        <div class="portfolio-info">
          <h3>${escapeHtml(item.title)}</h3>
          <p>${escapeHtml(item.desc)}</p>
          <span class="skill-tag">${item.category.toUpperCase()}</span>
        </div>
      </div>
    `;
  }).join("");

  // Click handlers — all categories open lightbox; uiux/web also show link inside lightbox
  grid.querySelectorAll(".portfolio-item").forEach(el => {
    el.addEventListener("click", function () {
      const idx       = parseInt(this.dataset.idx);
      const filtered2 = filter === "all"
        ? portfolioData
        : portfolioData.filter(i => i.category === filter);
      const item = filtered2[idx];

      // Always open lightbox (shows image preview + optional link button)
      openLightbox(item);
    });
  });
}

// ========== HTML ESCAPE HELPER ==========
function escapeHtml(str) {
  if (!str) return "";
  return str.replace(/[&<>"']/g, function (m) {
    return { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[m];
  });
}

// ========== FILTER BUTTONS ==========
const filterBtns   = document.querySelectorAll(".filter-btn");
let   currentFilter = "all";

if (filterBtns.length) {
  filterBtns.forEach(btn => {
    btn.addEventListener("click", function () {
      filterBtns.forEach(b => b.classList.remove("active"));
      this.classList.add("active");
      currentFilter = this.getAttribute("data-filter");
      renderPortfolio(currentFilter);
    });
  });
  renderPortfolio("all");
}

// ========== CONTACT FORM HANDLER ==========
const contactForm = document.getElementById("contactForm");
if (contactForm) {
  contactForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const name = document.getElementById("contactName")?.value || "";
    alert(`Thank you ${name}! I'll get back to you soon.`);
    contactForm.reset();
  });
}

// ========== SMOOTH SCROLLING ==========
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    const targetId = this.getAttribute("href");
    if (targetId === "#" || targetId === "") return;
    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      e.preventDefault();
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});