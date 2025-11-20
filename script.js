const siteConfig = {
  // Update these to your actual profiles.
  githubUsername: "",
  resumeUrl: "#",
  email: "jonathon.skeen@ohio.edu",
  linkedIn: "https://www.linkedin.com/in/",
  nextSteps: [
    "Open to summer internships (backend, full-stack, or ML foundations).",
    "Happy to collaborate on open-source student tools or visualizations.",
    "Pair-programming sessions welcome—especially on algorithms and systems."
  ]
};

const featuredProjects = [
  {
    title: "Pathfinder Studio",
    summary: "Interactive visualizer for BFS, DFS, and A* with speed controls, maze generation, and path comparisons.",
    tech: ["TypeScript", "React", "Canvas"],
    link: "https://github.com/your-github-handle/pathfinder-studio",
    highlight: "Built to make algorithm intuition click during study sessions."
  },
  {
    title: "Campus Transit ETA",
    summary: "Predicts shuttle arrival times by combining real-time GTFS feeds with a lightweight Python inference service.",
    tech: ["Python", "FastAPI", "PostgreSQL"],
    link: "https://github.com/your-github-handle/campus-transit-eta",
    highlight: "Reduced ETA jitter with a simple Kalman filter and route clustering."
  },
  {
    title: "StudyBuddy Notes",
    summary: "A notebook web app that pairs markdown with spaced-repetition prompts and exportable study decks.",
    tech: ["TypeScript", "SolidJS", "SQLite"],
    link: "https://github.com/your-github-handle/studybuddy-notes",
    highlight: "Optimized for low-latency typing and offline-first sync."
  },
  {
    title: "Personal Website v2",
    summary: "This site—crafted to highlight projects, coursework, and contact info in one place.",
    tech: ["HTML", "CSS", "JavaScript"],
    link: "https://github.com/your-github-handle/personal-website",
    highlight: "Lightweight, accessible, and easy to update."
  }
];

const coursework = [
  {
    term: "Core CS",
    items: [
      "Data Structures & Algorithms",
      "Systems Programming",
      "Discrete Structures",
      "Computer Architecture"
    ],
    note: "Grounding in performance, memory, and correct-by-construction code."
  },
  {
    term: "Software & Data",
    items: [
      "Database Systems",
      "Software Engineering",
      "Probability & Statistics",
      "Operating Systems (in progress)"
    ],
    note: "Building intuition for state management, consistency, and team workflows."
  },
  {
    term: "Creative Electives",
    items: [
      "Human-Computer Interaction",
      "Computer Graphics basics",
      "Technical Communication"
    ],
    note: "Balancing systems thinking with design and storytelling."
  }
];

const timelineItems = [
  {
    title: "Sophomore year momentum",
    period: "2024–2025 · Ohio University",
    detail: "Deepening systems knowledge while keeping a regular cadence of personal builds and code reviews with peers.",
    badge: "Campus"
  },
  {
    title: "Project-driven learning",
    period: "Weekly sprints",
    detail: "Shipping small, focused tools (visualizers, dashboards, study aids) to stay sharp with TypeScript, Python, and C/C++ fundamentals.",
    badge: "Projects"
  },
  {
    title: "Community & collaboration",
    period: "Study groups and hack nights",
    detail: "Pairing on tough problems, sharing write-ups, and contributing fixes to open-source when I can reproduce a bug.",
    badge: "Collab"
  }
];

const skills = [
  {
    title: "Languages",
    items: ["TypeScript", "Python", "C/C++", "SQL", "HTML/CSS"]
  },
  {
    title: "Frameworks & Libraries",
    items: ["React", "Node.js/Express", "FastAPI", "Vite", "pytest"]
  },
  {
    title: "Tools & Practices",
    items: ["Git/GitHub", "Linux", "PostgreSQL", "Figma", "Tests & profiling"]
  }
];

function renderFeaturedProjects() {
  const container = document.getElementById("featured-projects");
  container.innerHTML = featuredProjects
    .map(
      (project) => `
      <article class="project-card">
        <span class="pill">Featured</span>
        <h3>${project.title}</h3>
        <p>${project.summary}</p>
        <div class="tag-row">
          ${project.tech.map((tag) => `<span class="tag">${tag}</span>`).join("")}
        </div>
        <footer>
          <small class="muted">${project.highlight}</small>
          <a class="ghost-button" href="${project.link}" target="_blank" rel="noopener">View repo</a>
        </footer>
      </article>
    `
    )
    .join("");
}

function renderCoursework() {
  const container = document.getElementById("coursework-list");
  container.innerHTML = coursework
    .map(
      (course) => `
      <article class="course-card">
        <span class="pill">${course.term}</span>
        <h4>${course.note}</h4>
        <ul>
          ${course.items.map((item) => `<li>${item}</li>`).join("")}
        </ul>
      </article>
    `
    )
    .join("");
}

function renderTimeline() {
  const container = document.getElementById("timeline-items");
  container.innerHTML = timelineItems
    .map(
      (item) => `
      <article class="timeline-card">
        <span class="pill">${item.badge}</span>
        <h3>${item.title}</h3>
        <p class="muted">${item.period}</p>
        <p>${item.detail}</p>
      </article>
    `
    )
    .join("");
}

function renderSkills() {
  const container = document.getElementById("skills-grid");
  container.innerHTML = skills
    .map(
      (group) => `
      <article class="skill-card">
        <h3>${group.title}</h3>
        <div class="skill-chips">
          ${group.items.map((item) => `<span class="chip">${item}</span>`).join("")}
        </div>
      </article>
    `
    )
    .join("");
}

function renderContacts() {
  const emailLink = document.getElementById("email-link");
  const githubLink = document.getElementById("github-link");
  const linkedinLink = document.getElementById("linkedin-link");
  const resumeLink = document.getElementById("resume-link");

  if (siteConfig.email && siteConfig.email !== "#") {
    emailLink.href = `mailto:${siteConfig.email}`;
    emailLink.textContent = siteConfig.email;
  }

  if (siteConfig.githubUsername) {
    githubLink.href = `https://github.com/${siteConfig.githubUsername}`;
  } else {
    githubLink.href = "https://github.com";
  }

  if (siteConfig.linkedIn && siteConfig.linkedIn !== "#") {
    linkedinLink.href = siteConfig.linkedIn;
  }

  if (siteConfig.resumeUrl && siteConfig.resumeUrl !== "#") {
    resumeLink.href = siteConfig.resumeUrl;
  }

  const nextSteps = document.getElementById("next-steps");
  nextSteps.innerHTML = siteConfig.nextSteps
    .map((step) => `<li>${step}</li>`)
    .join("");
}

async function loadGitHubRepos() {
  const summary = document.getElementById("github-summary");
  const grid = document.getElementById("github-projects");

  if (!siteConfig.githubUsername) {
    summary.textContent = "Add your GitHub username in script.js to pull live repos.";
    grid.innerHTML = "";
    return;
  }

  summary.textContent = "Loading repositories...";
  grid.innerHTML = "";

  try {
    const response = await fetch(
      `https://api.github.com/users/${siteConfig.githubUsername}/repos?per_page=100&sort=updated`
    );

    if (!response.ok) {
      throw new Error("GitHub request failed");
    }

    const data = await response.json();
    const ordered = data
      .filter((repo) => !repo.fork)
      .sort(
        (a, b) =>
          b.stargazers_count - a.stargazers_count ||
          new Date(b.pushed_at) - new Date(a.pushed_at)
      )
      .slice(0, 6);

    if (!ordered.length) {
      summary.textContent = "No repositories found—double-check the username.";
      return;
    }

    summary.textContent = `Top ${ordered.length} repos by stars and recent updates.`;
    grid.innerHTML = ordered
      .map(
        (repo) => `
        <article class="project-card">
          <span class="pill">GitHub</span>
          <h3>${repo.name}</h3>
          <p>${repo.description || "No description added yet."}</p>
          <div class="tag-row">
            <span class="tag">★ ${repo.stargazers_count}</span>
            <span class="tag">Forks ${repo.forks_count}</span>
            <span class="tag">${repo.language || "Language"}</span>
          </div>
          <footer>
            <small class="muted">Updated ${new Date(repo.pushed_at).toLocaleDateString()}</small>
            <a class="ghost-button" href="${repo.html_url}" target="_blank" rel="noopener">Open</a>
          </footer>
        </article>
      `
      )
      .join("");
  } catch (error) {
    summary.textContent = "GitHub fetch failed. You can still highlight featured projects above.";
    grid.innerHTML = "";
  }
}

function setupTabs() {
  const tabs = document.querySelectorAll(".tab");
  tabs.forEach((tab) =>
    tab.addEventListener("click", () => {
      const target = tab.getAttribute("data-tab-target");
      document.querySelectorAll(".tab").forEach((button) => {
        button.classList.toggle("active", button === tab);
        button.setAttribute("aria-selected", button === tab ? "true" : "false");
      });
      document.querySelectorAll(".tab-content").forEach((content) => {
        content.classList.toggle("active", content.id === `tab-${target}`);
      });
    })
  );
}

document.addEventListener("DOMContentLoaded", () => {
  renderFeaturedProjects();
  renderCoursework();
  renderTimeline();
  renderSkills();
  renderContacts();
  setupTabs();
  loadGitHubRepos();
});
