const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
const yearNode = document.getElementById("year");
const projectsTrack = document.getElementById("projects-track");
const carouselWindow = document.querySelector(".carousel-window");
const prevButton = document.getElementById("carousel-prev");
const nextButton = document.getElementById("carousel-next");
const filterButtons = document.querySelectorAll(".filter-btn");

const projects = [
  {
    name: "Atlas ERP Suite",
    description: "Enterprise resource planning portal with role-based modules for operations, HR, and finance.",
    technologies: ["ASP.NET Core", "Angular", "MSSQL", "Docker"],
    type: "webapp",
    platform: ["Web", "Desktop-Windows", "Desktop-macOS", "Desktop-Linux"],
    live: "https://example.com/atlas-erp",
    github: "https://github.com/example/atlas-erp"
  },
  {
    name: "Freight Flow Monitor",
    description: "Logistics dashboard for real-time container tracking, route events, and shipment status alerts.",
    technologies: ["Node.js", "NestJS", "PostgreSQL", "Azure"],
    type: "webapp",
    platform: ["Web", "Desktop-Windows", "Desktop-macOS"],
    live: "",
    github: "https://github.com/example/freight-flow-monitor"
  },
  {
    name: "PayBridge POS",
    description: "Payment gateway integration layer for POS devices with resilient retry and audit trails.",
    technologies: ["C#", ".NET", "gRPC", "SQL Server"],
    platform: ["Desktop-Windows", "Desktop-Linux"],
    live: "",
    github: "https://github.com/example/paybridge-pos"
  },
  {
    name: "PulseOps Admin",
    description: "Operational command center for SaaS metrics, environment health, and incident responses.",
    technologies: ["Next.js", "TypeScript", "Tailwind", "MongoDB"],
    type: "webapp",
    platform: ["Web", "Mobile-Android", "Mobile-iOS"],
    live: "https://example.com/pulseops",
    github: "https://github.com/example/pulseops-admin"
  },
  {
    name: "Clinic Queue Mobile",
    description: "Patient queuing and consultation booking app with push notifications and digital triage forms.",
    technologies: ["Flutter", "Firebase", "Cloud Functions", "Dart"],
    type: "webapp",
    platform: ["Mobile-Android", "Mobile-iOS", "Web"],
    live: "https://example.com/clinic-queue",
    github: "https://github.com/example/clinic-queue-mobile"
  },
  {
    name: "Vendor Portal X",
    description: "B2B vendor onboarding and document compliance portal with e-sign and verification workflow.",
    technologies: ["Angular", ".NET API", "Azure Blob", "Redis"],
    type: "webapp",
    platform: ["Web", "Desktop-Windows", "Desktop-macOS", "Desktop-Linux"],
    live: "https://example.com/vendor-portal-x",
    github: "https://github.com/example/vendor-portal-x"
  },
  {
    name: "StockSense Inventory",
    description: "Inventory and purchase order system with reorder thresholds and analytics for warehouse teams.",
    technologies: ["C#", "WPF", "SQL Server", "REST API"],
    platform: ["Desktop-Windows", "Desktop-macOS"],
    live: "",
    github: "https://github.com/example/stocksense-inventory"
  },
  {
    name: "EventGrid Microservices",
    description: "Event-driven microservices stack implementing CQRS for scalable transaction processing.",
    technologies: ["Go", "gRPC", "Kafka", "Kubernetes"],
    type: "webapp",
    platform: ["Web", "Desktop-Linux"],
    live: "",
    github: "https://github.com/example/eventgrid-microservices"
  },
  {
    name: "DevTrack Pipeline",
    description: "CI/CD observability app aggregating pipeline performance and deployment reliability trends.",
    technologies: ["TypeScript", "Node.js", "PostgreSQL", "Chart.js"],
    type: "webapp",
    platform: ["Web", "Desktop-Windows", "Desktop-macOS"],
    live: "https://example.com/devtrack",
    github: "https://github.com/example/devtrack-pipeline"
  },
  {
    name: "ClientHub Portfolio CMS",
    description: "Headless CMS and personalization layer powering marketing sites and content localization.",
    technologies: ["Next.js", "NestJS", "MongoDB", "Docker"],
    type: "website",
    platform: ["Web", "Mobile-Android", "Mobile-iOS", "Desktop-Windows"],
    live: "https://example.com/clienthub",
    github: "https://github.com/example/clienthub-cms"
  },
  {
    name: "Casa Luntian Villas",
    description: "Boutique resort website with gallery-driven storytelling, room highlights, and inquiry forms built in Wix.",
    technologies: ["Wix", "Velo", "Wix Forms", "SEO"],
    type: "website",
    platform: ["Web", "Mobile-iOS", "Mobile-Android"],
    live: "https://example.com/casa-luntian-villas",
    github: ""
  },
  {
    name: "Northline Dental Care",
    description: "Clinic website on Wix featuring service pages, appointment request flow, and location-focused local SEO.",
    technologies: ["Wix", "Wix Bookings", "Wix CMS", "SEO"],
    type: "website",
    platform: ["Web", "Mobile-iOS", "Mobile-Android"],
    live: "https://example.com/northline-dental-care",
    github: ""
  },
  {
    name: "Evercraft Interiors",
    description: "Wix-powered portfolio website for an interior design studio with project showcases and lead capture.",
    technologies: ["Wix", "Wix Studio", "Wix Forms", "Analytics"],
    type: "website",
    platform: ["Web", "Mobile-iOS", "Mobile-Android"],
    live: "https://example.com/evercraft-interiors",
    github: ""
  }
];

function createTags(tags, className) {
  return `<div class="${className}">${tags.map((tag) => `<span>${tag}</span>`).join("")}</div>`;
}

function createLinks(live, github) {
  const liveNode = live ? `<a href="${live}" target="_blank" rel="noopener noreferrer">Live Site</a>` : "<span>Live: N/A</span>";
  const repoNode = github
    ? `<a href="${github}" target="_blank" rel="noopener noreferrer">GitHub Repo</a>`
    : "<span>Repo: N/A</span>";
  return `<div class="project-links">${liveNode}${repoNode}</div>`;
}

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
  projectsTrack.innerHTML = visibleProjects
    .map((project, idx) => {
      return `
        <article class="project-card">
          <div class="project-shot"><span>Screenshot Placeholder ${idx + 1}</span></div>
          <div class="project-title">
            <h3>${project.name}</h3>
          </div>
          <p>${project.description}</p>
          <p class="meta">Platform Support</p>
          ${createTags(project.platform, "platform-tags")}
          <p class="meta">Technology Used</p>
          ${createTags(project.technologies, "tech-tags")}
          ${createLinks(project.live, project.github)}
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
}

let cardsPerView = 3;
let currentIndex = 0;
let autoSlideTimer = null;

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
  const firstCard = projectsTrack.querySelector(".project-card");
  if (!firstCard) {
    return 0;
  }
  const gap = parseFloat(window.getComputedStyle(projectsTrack).columnGap || window.getComputedStyle(projectsTrack).gap || "0");
  return firstCard.getBoundingClientRect().width + gap;
}

function updateCarouselButtons() {
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

function applyTheme(theme) {
  const isDark = theme === "dark";
  body.classList.toggle("dark", isDark);
  themeIcon.textContent = isDark ? "☾" : "☀";
  themeLabel.textContent = isDark ? "Dark" : "Light";
  themeToggle.setAttribute("aria-pressed", String(isDark));
}

const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
const savedTheme = localStorage.getItem("theme");
const initialTheme = savedTheme || (prefersDark ? "dark" : "light");

renderProjects();
updateCardsPerView();
applyTheme(initialTheme);
startAutoSlide();

themeToggle.addEventListener("click", () => {
  const nextTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
});

nextButton.addEventListener("click", () => {
  next();
  startAutoSlide();
});

prevButton.addEventListener("click", () => {
  prev();
  startAutoSlide();
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
    startAutoSlide();

    filterButtons.forEach((filterButton) => {
      const isActive = filterButton.dataset.filter === activeFilter;
      filterButton.classList.toggle("is-active", isActive);
      filterButton.setAttribute("aria-pressed", String(isActive));
    });
  });
});

carouselWindow?.addEventListener("mouseenter", stopAutoSlide);
carouselWindow?.addEventListener("mouseleave", startAutoSlide);
carouselWindow?.addEventListener("focusin", stopAutoSlide);
carouselWindow?.addEventListener("focusout", startAutoSlide);
carouselWindow?.addEventListener("scroll", () => {
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
});

yearNode.textContent = String(new Date().getFullYear());

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
