const basePath = document.querySelector('script[src$="script.js"]')?.src.replace(/script\.js$/, '') || './';
const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
const yearNode = document.getElementById("year");
const experienceYearsNodes = document.querySelectorAll("[data-professional-years]");
const projectsTrack = document.getElementById("projects-track");
const carouselWindow = document.querySelector(".carousel-window");
const prevButton = document.getElementById("carousel-prev");
const nextButton = document.getElementById("carousel-next");
const filterButtons = document.querySelectorAll(".filter-btn");
const ghReposNode = document.getElementById("gh-repos");
const ghStarsNode = document.getElementById("gh-stars");
const ghFollowersNode = document.getElementById("gh-followers");
const PROFESSIONAL_START_YEAR = 2018;
const professionalYears = Math.max(0, new Date().getFullYear() - PROFESSIONAL_START_YEAR);
const professionalYearsLabel = `${professionalYears}+`;

const projects = [
  {
    name: "InaanApp",
    description: "Relationship memory app for Filipino families to organize godparent connections — track ninong, ninang, and inaanak relationships with birthday reminders and Pamasko mode.",
    technologies: ["Flutter", "Dart", "Supabase", "Vercel"],
    type: "webapp",
    image: basePath + "images/inaanapp-homepage.png",
    platform: ["Web", "Mobile-Android", "Mobile-iOS"],
    live: "https://inaanapp.vercel.app/",
    github: ""
  },
  {
    name: "Yes Honey",
    description: "Couples app that turns household asks into visible promises — one tap to ask, one tap to commit. No nagging, just a calm, shared rhythm.",
    technologies: ["Flutter", "Dart", "Supabase", "Vercel"],
    type: "webapp",
    image: basePath + "images/yes-honey-app-homepage.png",
    platform: ["Web", "Mobile-Android", "Mobile-iOS"],
    live: "https://yes-honey-app.vercel.app/",
    github: ""
  },
  {
    name: "Reynalyn Grace Professional Website",
    description: "Professional portfolio website for a virtual assistant — showcasing services like administrative support, outreach coordination, data management, and social media assistance.",
    technologies: ["Wix"],
    type: "website",
    image: basePath + "images/wix-reynalyn-grace-professional-website-homepage.png",
    platform: ["Web"],
    live: "https://ryanvincecastillo.wixsite.com/reynalyn-grace",
    github: ""
  },
  {
    name: "Ressa Noise Detector",
    description: "Desktop noise detection app built with Electron and Vite, packaged for macOS and Windows.",
    technologies: ["Electron", "Vite"],
    type: "desktop",
    image: basePath + "images/ressa-homepage.png",
    platform: ["Desktop-macOS", "Desktop-Windows"],
    live: "https://ressa-noise-detector-app.vercel.app/",
    github: ""
  }
];

function createTags(tags, className) {
  return `<div class="${className}">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`;
}

async function loadGithubStats() {
  if (!ghReposNode || !ghStarsNode || !ghFollowersNode) {
    return;
  }
  try {
    const [userResponse, reposResponse] = await Promise.all([
      fetch("https://api.github.com/users/ryanvincecastillo"),
      fetch("https://api.github.com/users/ryanvincecastillo/repos?per_page=100")
    ]);
    if (!userResponse.ok) {
      return;
    }
    const userPayload = await userResponse.json();
    ghReposNode.textContent = String(userPayload.public_repos ?? "--");
    ghFollowersNode.textContent = String(userPayload.followers ?? "--");

    if (reposResponse.ok) {
      const reposPayload = await reposResponse.json();
      const totalStars = reposPayload.reduce(
        (sum, repo) => sum + (repo?.stargazers_count || 0),
        0
      );
      ghStarsNode.textContent = String(totalStars);
    }
  } catch {
    // Keep fallback placeholders when request fails.
  }
}

/* ── Project carousel ── */

let activeFilter = "all";
let visibleProjects = [...projects];

function getProjectType(project) {
  const projectType = (project.type || "").toLowerCase();
  const supportsWeb = project.platform.some((item) => item.startsWith("Web"));
  const supportsMobile = project.platform.some((item) => item.startsWith("Mobile"));
  const supportsDesktop = project.platform.some((item) => item.startsWith("Desktop"));

  return {
    website: supportsWeb && projectType === "website",
    webapp: supportsWeb && projectType === "webapp",
    mobile: supportsMobile,
    desktop: supportsDesktop
  };
}

function applyProjectFilter(type) {
  if (type === "all") {
    visibleProjects = [...projects];
    return;
  }
  visibleProjects = projects.filter((project) => getProjectType(project)[type]);
}

function renderProjects() {
  if (!projectsTrack) return;
  projectsTrack.innerHTML = visibleProjects
    .map((project, idx) => {
      const hasLive = !!project.live;
      const safeLive = (project.live || "").replace(/"/g, "&quot;");
      return `
        <article
          class="project-card${hasLive ? " is-clickable" : ""}"
          ${hasLive ? `data-live-url="${safeLive}" tabindex="0" role="link" aria-label="Open ${project.name} live site"` : ""}
        >
          <div class="project-shot">${project.image ? `<img src="${project.image}" alt="${project.name} screenshot" loading="lazy">` : `<span>Preview coming soon</span>`}</div>
          <div class="project-title">
            <h3>${project.name}</h3>
          </div>
          <p>${project.description}</p>
          <p class="meta">Platform Support</p>
          ${createTags(project.platform, "platform-tags")}
          <p class="meta">Technology Used</p>
          ${createTags(project.technologies, "tech-tags")}
        </article>
      `;
    })
    .join("");

  if (!visibleProjects.length) {
    projectsTrack.innerHTML = '<p class="empty-projects">No projects found for this type.</p>';
  }

  window.requestAnimationFrame(() => {
    updateCardsPerView();
    syncCardWidth();
    updateCarouselButtons();
  });

  const clickableCards = projectsTrack.querySelectorAll(".project-card[data-live-url]");
  clickableCards.forEach((card) => {
    const openLiveSite = () => {
      const url = card.getAttribute("data-live-url");
      if (!url) return;
      window.open(url, "_blank", "noopener,noreferrer");
    };
    card.addEventListener("click", openLiveSite);
    card.addEventListener("keydown", (event) => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openLiveSite();
      }
    });
  });
}

let cardsPerView = 3;
let currentIndex = 0;
let autoSlideTimer = null;
let manualScrollResumeTimer = null;
let isManualScrollActive = false;
let isCarouselHovered = false;
let isCarouselFocused = false;

function updateCardsPerView() {
  if (window.matchMedia("(max-width: 760px)").matches) {
    cardsPerView = 1;
    return;
  }
  if (window.matchMedia("(max-width: 1080px)").matches) {
    cardsPerView = 2;
    return;
  }
  cardsPerView = 3;
}

function maxIndex() {
  return Math.max(0, visibleProjects.length - cardsPerView);
}

function syncCardWidth() {
  if (!projectsTrack) return;
  const firstCard = projectsTrack.querySelector(".project-card");
  if (!firstCard) {
    projectsTrack.style.removeProperty("--project-card-width");
    return;
  }
  const gap = parseFloat(window.getComputedStyle(projectsTrack).columnGap || window.getComputedStyle(projectsTrack).gap || "0");
  const availableWidth = carouselWindow ? carouselWindow.clientWidth : 0;
  if (!availableWidth) {
    return;
  }
  const cardWidth = Math.max(220, (availableWidth - gap * (cardsPerView - 1)) / cardsPerView);
  projectsTrack.style.setProperty("--project-card-width", `${cardWidth}px`);
}

function getScrollStep() {
  if (!projectsTrack) return 0;
  const firstCard = projectsTrack.querySelector(".project-card");
  if (!firstCard) {
    return 0;
  }
  const gap = parseFloat(window.getComputedStyle(projectsTrack).columnGap || window.getComputedStyle(projectsTrack).gap || "0");
  return firstCard.getBoundingClientRect().width + gap;
}

function updateCarouselButtons() {
  if (!projectsTrack || !prevButton || !nextButton) return;
  const firstCard = projectsTrack.querySelector(".project-card");
  if (!firstCard || !carouselWindow) {
    prevButton.disabled = true;
    nextButton.disabled = true;
    return;
  }

  const maxScrollLeft = Math.max(0, carouselWindow.scrollWidth - carouselWindow.clientWidth);
  const nearStart = carouselWindow.scrollLeft <= 4;
  const nearEnd = carouselWindow.scrollLeft >= maxScrollLeft - 4;
  const cannotScroll = maxScrollLeft <= 4;

  prevButton.disabled = cannotScroll || nearStart;
  nextButton.disabled = cannotScroll || nearEnd;
}

function updateIndexFromScroll() {
  if (!carouselWindow) {
    return;
  }
  const step = getScrollStep();
  if (!step) {
    currentIndex = 0;
    return;
  }
  currentIndex = Math.round(carouselWindow.scrollLeft / step);
}

function goTo(index, behavior = "smooth") {
  if (!carouselWindow) {
    return;
  }
  const step = getScrollStep();
  if (!step) {
    return;
  }
  currentIndex = Math.max(0, Math.min(index, maxIndex()));
  carouselWindow.scrollTo({ left: currentIndex * step, behavior });
}

function next() {
  updateIndexFromScroll();
  if (currentIndex >= maxIndex()) {
    goTo(0);
    return;
  }
  goTo(currentIndex + 1);
}

function prev() {
  updateIndexFromScroll();
  if (currentIndex <= 0) {
    goTo(maxIndex());
    return;
  }
  goTo(currentIndex - 1);
}

function startAutoSlide() {
  stopAutoSlide();
  autoSlideTimer = window.setInterval(next, 4200);
}

function stopAutoSlide() {
  if (autoSlideTimer) {
    clearInterval(autoSlideTimer);
    autoSlideTimer = null;
  }
}

function clearManualScrollResumeTimer() {
  if (manualScrollResumeTimer) {
    clearTimeout(manualScrollResumeTimer);
    manualScrollResumeTimer = null;
  }
}

function canAutoSlide() {
  const hasEnoughProjects = visibleProjects.length > cardsPerView;
  return hasEnoughProjects && !isManualScrollActive && !isCarouselHovered && !isCarouselFocused;
}

function startAutoSlideIfAllowed() {
  if (canAutoSlide()) {
    startAutoSlide();
    return;
  }
  stopAutoSlide();
}

function scheduleManualScrollResume() {
  clearManualScrollResumeTimer();
  manualScrollResumeTimer = window.setTimeout(() => {
    isManualScrollActive = false;
    startAutoSlideIfAllowed();
  }, 1100);
}

function markManualScrollInteraction() {
  isManualScrollActive = true;
  stopAutoSlide();
  scheduleManualScrollResume();
}

/* ── Theme ── */

function applyTheme(theme) {
  const isDark = theme === "dark";
  body.classList.toggle("dark", isDark);
  if (themeIcon) themeIcon.textContent = isDark ? "☾" : "☀";
  if (themeLabel) themeLabel.textContent = isDark ? "Dark" : "Light";
  if (themeToggle) themeToggle.setAttribute("aria-pressed", String(isDark));
}

const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme || "dark";

renderProjects();
updateCardsPerView();
applyTheme(initialTheme);
startAutoSlideIfAllowed();
loadGithubStats();

themeToggle?.addEventListener("click", () => {
  const nextTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
});

nextButton?.addEventListener("click", () => {
  next();
  startAutoSlideIfAllowed();
});

prevButton?.addEventListener("click", () => {
  prev();
  startAutoSlideIfAllowed();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedFilter = button.dataset.filter;
    if (!selectedFilter || selectedFilter === activeFilter) {
      return;
    }

    activeFilter = selectedFilter;
    applyProjectFilter(activeFilter);
    currentIndex = 0;
    renderProjects();
    if (carouselWindow) {
      carouselWindow.scrollTo({ left: 0, behavior: "auto" });
    }
    updateCarouselButtons();
    isManualScrollActive = false;
    clearManualScrollResumeTimer();
    startAutoSlideIfAllowed();

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton.dataset.filter === activeFilter;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
  });
});

carouselWindow?.addEventListener("mouseenter", () => {
  isCarouselHovered = true;
  stopAutoSlide();
});
carouselWindow?.addEventListener("mouseleave", () => {
  isCarouselHovered = false;
  startAutoSlideIfAllowed();
});
carouselWindow?.addEventListener("focusin", () => {
  isCarouselFocused = true;
  stopAutoSlide();
});
carouselWindow?.addEventListener("focusout", () => {
  isCarouselFocused = false;
  startAutoSlideIfAllowed();
});
carouselWindow?.addEventListener("wheel", markManualScrollInteraction, { passive: true });
carouselWindow?.addEventListener("touchstart", markManualScrollInteraction, { passive: true });
carouselWindow?.addEventListener("pointerdown", markManualScrollInteraction, { passive: true });
carouselWindow?.addEventListener("scroll", () => {
  if (isManualScrollActive) {
    scheduleManualScrollResume();
  }
  updateIndexFromScroll();
  updateCarouselButtons();
}, { passive: true });

window.addEventListener("resize", () => {
  const oldPerView = cardsPerView;
  updateCardsPerView();
  syncCardWidth();
  if (oldPerView !== cardsPerView) {
    goTo(Math.min(currentIndex, maxIndex()), "auto");
  }
  updateCarouselButtons();
  startAutoSlideIfAllowed();
});

if (yearNode) yearNode.textContent = String(new Date().getFullYear());
experienceYearsNodes.forEach((node) => {
  node.textContent = professionalYearsLabel;
});

/* ── Reveal animations ── */

const revealNodes = document.querySelectorAll(".reveal");
const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.16 }
);

revealNodes.forEach((node, idx) => {
  node.style.transitionDelay = `${Math.min(idx * 55, 260)}ms`;
  observer.observe(node);
});

/* ── Topbar scroll state ── */

const topbar = document.querySelector(".topbar");
if (topbar) {
  const updateTopbar = () => {
    topbar.classList.toggle("is-scrolled", window.scrollY > 10);
  };
  updateTopbar();
  window.addEventListener("scroll", updateTopbar, { passive: true });
}

/* ── Cursor spotlight ── */

const cursorSpotlight = document.querySelector(".cursor-spotlight");
if (cursorSpotlight) {
  let spotlightX = 0;
  let spotlightY = 0;
  let currentSpotX = 0;
  let currentSpotY = 0;

  document.addEventListener("mousemove", (event) => {
    spotlightX = event.clientX;
    spotlightY = event.clientY;
  });

  function updateSpotlight() {
    currentSpotX += (spotlightX - currentSpotX) * 0.08;
    currentSpotY += (spotlightY - currentSpotY) * 0.08;
    cursorSpotlight.style.left = `${currentSpotX}px`;
    cursorSpotlight.style.top = `${currentSpotY}px`;
    window.requestAnimationFrame(updateSpotlight);
  }

  window.requestAnimationFrame(updateSpotlight);
}
