const body = document.body;
const themeToggle = document.getElementById("theme-toggle");
const themeIcon = document.querySelector(".theme-icon");
const themeLabel = document.querySelector(".theme-label");
const yearNode = document.getElementById("year");
const experienceYearsNodes = document.querySelectorAll("[data-professional-years]");
const aiFocusTextNode = document.getElementById("ai-focus-text");
const projectsTrack = document.getElementById("projects-track");
const carouselWindow = document.querySelector(".carousel-window");
const prevButton = document.getElementById("carousel-prev");
const nextButton = document.getElementById("carousel-next");
const filterButtons = document.querySelectorAll(".filter-btn");
const resumeChatLog = document.getElementById("resume-chat-log");
const resumeChatForm = document.getElementById("resume-chat-form");
const resumeChatInput = document.getElementById("resume-chat-input");
const promptButtons = document.querySelectorAll(".prompt-btn");
const chatTyping = document.querySelector(".chat-typing");
const spotlightTrack = document.getElementById("spotlight-track");
const spotlightSlides = Array.from(document.querySelectorAll(".spotlight-slide"));
const spotlightDots = Array.from(document.querySelectorAll(".spotlight-dot"));
const spotlightPrevButton = document.getElementById("spotlight-prev");
const spotlightNextButton = document.getElementById("spotlight-next");
const ghReposNode = document.getElementById("gh-repos");
const ghStarsNode = document.getElementById("gh-stars");
const ghFollowersNode = document.getElementById("gh-followers");
const aiPromptButtons = Array.from(document.querySelectorAll(".ai-prompt-btn"));
const aiPreviewOutputNode = document.getElementById("ai-preview-output");
const snakeCanvas = document.getElementById("snake-canvas");
const snakeScoreNode = document.getElementById("snake-score");
const snakeDirectionButtons = Array.from(document.querySelectorAll("[data-snake-dir]"));
const snakeResetButton = document.getElementById("snake-reset");
const RESUME_AGENT_ENDPOINT = window.RESUME_AGENT_ENDPOINT || "";
const PROFESSIONAL_START_YEAR = 2018;
const professionalYears = Math.max(0, new Date().getFullYear() - PROFESSIONAL_START_YEAR);
const professionalYearsLabel = `${professionalYears}+`;
const AI_FOCUS_ROTATION = [
  "MCP workflow orchestration",
  "LLM-assisted delivery pipelines",
  "AI code review and validation",
  "Developer automation tooling"
];
const AI_PREVIEW_RESPONSES = {
  "What stack does Ryan use?": "Core stack: .NET and Node.js for backend, Azure and Docker for cloud delivery, with TypeScript across modern web apps.",
  "How does Ryan use AI in delivery?": "I use AI for prototype acceleration, code review support, and workflow orchestration, then validate outputs with tests and architecture checks.",
  "What kind of systems does Ryan build?": "Mostly enterprise-grade backend services, integrations, developer tooling, and scalable web platforms with practical DevOps automation."
};

const projects = [
  {
    name: "MCP Integration Server",
    description: "Python-based MCP server for tool orchestration, secure context passing, and AI workflow automation across local and cloud environments.",
    technologies: ["Python", "MCP", "REST API", "Docker"],
    type: "webapp",
    platform: ["Web", "Desktop-Linux", "Desktop-macOS", "Desktop-Windows"],
    live: "",
    github: "https://github.com/example/mcp-integration-server"
  },
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

function appendChatMessage(role, message) {
  if (!resumeChatLog) {
    return;
  }
  const article = document.createElement("article");
  article.className = `chat-msg ${role}`;
  
  const bubble = document.createElement("div");
  bubble.className = "chat-msg-bubble";

  const content = document.createElement("p");
  content.textContent = message;
  
  bubble.appendChild(content);
  article.appendChild(bubble);
  resumeChatLog.appendChild(article);
  resumeChatLog.scrollTop = resumeChatLog.scrollHeight;
}

function showTypingIndicator() {
  if (chatTyping) {
    chatTyping.style.display = 'flex';
    resumeChatLog.scrollTop = resumeChatLog.scrollHeight;
  }
}

function hideTypingIndicator() {
  if (chatTyping) {
    chatTyping.style.display = 'none';
  }
}

function getLocalResumeReply(question) {
  const prompt = question.toLowerCase();

  if (prompt.includes("stack") || prompt.includes("tech")) {
    return "Core stack: .NET, Node.js/NestJS, TypeScript, SQL Server/PostgreSQL, Docker, Azure, plus AI tooling with ChatGPT, Codex, Claude Code, Ollama, and LM Studio.";
  }
  if (prompt.includes("ai") || prompt.includes("llm")) {
    return "I use AI to accelerate coding, reviews, and prototyping, then I validate outputs with tests and architecture checks before shipping.";
  }
  if (prompt.includes("mcp")) {
    return "I build MCP servers in Python to orchestrate tools, pass context safely, and integrate AI workflows into practical developer operations.";
  }
  if (prompt.includes("python") && prompt.includes("joke")) {
    return "Python joke: I had a joke about indentation... but it kept shifting to the right.";
  }
  if (prompt.includes("experience") || prompt.includes("years")) {
    return `I have ${professionalYearsLabel} years of software development experience across enterprise systems, backend services, cloud deployments, and web platforms.`;
  }
  if (prompt.includes("cms") || prompt.includes("wix") || prompt.includes("wordpress") || prompt.includes("framer")) {
    return "I have production CMS experience with Wix and can quickly adapt to WordPress, Framer, and other site builders based on project requirements.";
  }

  return "Great question. I focus on scalable backend systems, practical AI workflows, and fast iterative delivery. Try asking about stack, MCP, or AI workflow.";
}

async function getResumeReply(question) {
  if (!RESUME_AGENT_ENDPOINT) {
    return getLocalResumeReply(question);
  }

  try {
    const response = await fetch(RESUME_AGENT_ENDPOINT, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ question })
    });
    if (!response.ok) {
      return getLocalResumeReply(question);
    }
    const payload = await response.json();
    return typeof payload.reply === "string" && payload.reply.trim()
      ? payload.reply.trim()
      : getLocalResumeReply(question);
  } catch {
    return getLocalResumeReply(question);
  }
}

async function handleResumeChatQuestion(rawQuestion) {
  const question = rawQuestion.trim();
  if (!question) {
    return;
  }

  appendChatMessage("user", question);
  showTypingIndicator();

  // Simulate bot thinking time
  await new Promise(resolve => setTimeout(resolve, 800));

  const reply = await getResumeReply(question);
  hideTypingIndicator();
  appendChatMessage("bot", reply);
}

let activeSpotlightIndex = 0;
let spotlightTimer = null;

function setSpotlightSlide(index) {
  if (!spotlightSlides.length) {
    return;
  }
  activeSpotlightIndex = (index + spotlightSlides.length) % spotlightSlides.length;
  spotlightSlides.forEach((slide, idx) => {
    const isActive = idx === activeSpotlightIndex;
    slide.classList.toggle("is-active", isActive);
    slide.setAttribute("aria-hidden", String(!isActive));
  });
  spotlightDots.forEach((dot, idx) => {
    dot.classList.toggle("is-active", idx === activeSpotlightIndex);
  });
}

function nextSpotlight() {
  setSpotlightSlide(activeSpotlightIndex + 1);
}

function prevSpotlight() {
  setSpotlightSlide(activeSpotlightIndex - 1);
}

function startSpotlightAutoRotate() {
  if (!spotlightSlides.length) {
    return;
  }
  if (spotlightTimer) {
    clearInterval(spotlightTimer);
  }
  spotlightTimer = window.setInterval(nextSpotlight, 6200);
}

function stopSpotlightAutoRotate() {
  if (!spotlightTimer) {
    return;
  }
  clearInterval(spotlightTimer);
  spotlightTimer = null;
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

function updateAiPreview(prompt) {
  if (!aiPreviewOutputNode) {
    return;
  }
  const reply = AI_PREVIEW_RESPONSES[prompt];
  if (!reply) {
    return;
  }
  aiPreviewOutputNode.classList.add("signal-text-fade");
  window.setTimeout(() => {
    aiPreviewOutputNode.textContent = reply;
    aiPreviewOutputNode.classList.remove("signal-text-fade");
  }, 120);
}

function initSnakeGame() {
  if (!snakeCanvas || !snakeScoreNode) {
    return;
  }
  const context = snakeCanvas.getContext("2d");
  if (!context) {
    return;
  }

  const cols = 14;
  const rows = 9;
  const cell = 16;
  let snake = [{ x: 6, y: 4 }];
  let direction = { x: 1, y: 0 };
  let pendingDirection = { x: 1, y: 0 };
  let food = { x: 10, y: 5 };
  let score = 0;

  function randomFood() {
    const next = {
      x: Math.floor(Math.random() * cols),
      y: Math.floor(Math.random() * rows)
    };
    if (snake.some((part) => part.x === next.x && part.y === next.y)) {
      return randomFood();
    }
    return next;
  }

  function resetSnake() {
    snake = [{ x: 6, y: 4 }];
    direction = { x: 1, y: 0 };
    pendingDirection = { x: 1, y: 0 };
    food = randomFood();
    score = 0;
    snakeScoreNode.textContent = "0";
  }

  function setDirection(x, y) {
    if (direction.x === -x && direction.y === -y) {
      return;
    }
    pendingDirection = { x, y };
  }

  function stepSnake() {
    direction = pendingDirection;
    const head = snake[0];
    const nextHead = { x: head.x + direction.x, y: head.y + direction.y };

    if (
      nextHead.x < 0 ||
      nextHead.x >= cols ||
      nextHead.y < 0 ||
      nextHead.y >= rows ||
      snake.some((part) => part.x === nextHead.x && part.y === nextHead.y)
    ) {
      resetSnake();
      return;
    }

    snake.unshift(nextHead);
    if (nextHead.x === food.x && nextHead.y === food.y) {
      score += 1;
      snakeScoreNode.textContent = String(score);
      food = randomFood();
    } else {
      snake.pop();
    }
  }

  function drawSnake() {
    context.clearRect(0, 0, snakeCanvas.width, snakeCanvas.height);
    context.fillStyle = "#40ff9f";
    snake.forEach((part) => {
      context.fillRect(part.x * cell + 1, part.y * cell + 1, cell - 2, cell - 2);
    });
    context.fillStyle = "#ffe45f";
    context.fillRect(food.x * cell + 1, food.y * cell + 1, cell - 2, cell - 2);
  }

  snakeDirectionButtons.forEach((button) => {
    button.addEventListener("click", () => {
      const dir = button.dataset.snakeDir;
      if (dir === "up") setDirection(0, -1);
      if (dir === "down") setDirection(0, 1);
      if (dir === "left") setDirection(-1, 0);
      if (dir === "right") setDirection(1, 0);
    });
  });

  snakeResetButton?.addEventListener("click", resetSnake);
  window.addEventListener("keydown", (event) => {
    const target = event.target;
    if (target instanceof HTMLElement && /input|textarea/i.test(target.tagName)) {
      return;
    }
    if (event.key === "ArrowUp") {
      event.preventDefault();
      setDirection(0, -1);
    }
    if (event.key === "ArrowDown") {
      event.preventDefault();
      setDirection(0, 1);
    }
    if (event.key === "ArrowLeft") {
      event.preventDefault();
      setDirection(-1, 0);
    }
    if (event.key === "ArrowRight") {
      event.preventDefault();
      setDirection(1, 0);
    }
  });

  resetSnake();
  drawSnake();
  window.setInterval(() => {
    stepSnake();
    drawSnake();
  }, 145);
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
startAutoSlideIfAllowed();
setSpotlightSlide(0);
startSpotlightAutoRotate();
loadGithubStats();
initSnakeGame();

themeToggle.addEventListener("click", () => {
  const nextTheme = body.classList.contains("dark") ? "light" : "dark";
  applyTheme(nextTheme);
  localStorage.setItem("theme", nextTheme);
});

spotlightNextButton?.addEventListener("click", () => {
  nextSpotlight();
  startSpotlightAutoRotate();
});

spotlightPrevButton?.addEventListener("click", () => {
  prevSpotlight();
  startSpotlightAutoRotate();
});

spotlightDots.forEach((dot) => {
  dot.addEventListener("click", () => {
    const nextIndex = Number(dot.dataset.spotlightIndex);
    if (Number.isNaN(nextIndex)) {
      return;
    }
    setSpotlightSlide(nextIndex);
    startSpotlightAutoRotate();
  });
});

spotlightTrack?.addEventListener("mouseenter", stopSpotlightAutoRotate);
spotlightTrack?.addEventListener("mouseleave", startSpotlightAutoRotate);
spotlightTrack?.addEventListener("focusin", stopSpotlightAutoRotate);
spotlightTrack?.addEventListener("focusout", startSpotlightAutoRotate);

aiPromptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const prompt = button.dataset.aiPrompt || "";
    updateAiPreview(prompt);
  });
});

resumeChatForm?.addEventListener("submit", (event) => {
  event.preventDefault();
  const value = resumeChatInput?.value || "";
  handleResumeChatQuestion(value);
  if (resumeChatInput) {
    resumeChatInput.value = "";
    resumeChatInput.focus();
  }
});

promptButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const prompt = button.dataset.prompt || "";
    if (resumeChatInput) {
      resumeChatInput.value = prompt;
    }
    handleResumeChatQuestion(prompt);
  });
});

nextButton.addEventListener("click", () => {
  next();
  startAutoSlideIfAllowed();
});

prevButton.addEventListener("click", () => {
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

yearNode.textContent = String(new Date().getFullYear());
experienceYearsNodes.forEach((node) => {
  node.textContent = professionalYearsLabel;
});

if (aiFocusTextNode) {
  let aiFocusIdx = 0;
  window.setInterval(() => {
    aiFocusIdx = (aiFocusIdx + 1) % AI_FOCUS_ROTATION.length;
    aiFocusTextNode.classList.add("signal-text-fade");
    window.setTimeout(() => {
      aiFocusTextNode.textContent = AI_FOCUS_ROTATION[aiFocusIdx];
      aiFocusTextNode.classList.remove("signal-text-fade");
    }, 170);
  }, 2600);
}

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
