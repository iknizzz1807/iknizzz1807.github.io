document.addEventListener("DOMContentLoaded", () => {
  // --- Theme Management ---
  const themeToggle = document.querySelector(".theme-toggle");
  const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

  const setTheme = (theme) => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
    const themeIcon = document.querySelector(".theme-icon");
    if (themeIcon) {
      themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
    }
  };

  const savedTheme =
    localStorage.getItem("theme") ||
    (prefersDarkScheme.matches ? "dark" : "light");
  setTheme(savedTheme);

  themeToggle.addEventListener("click", () => {
    const currentTheme = document.documentElement.getAttribute("data-theme");
    setTheme(currentTheme === "dark" ? "light" : "dark");
  });

  // --- Project Rendering and Filtering ---
  const filterButtons = document.querySelectorAll(".filter-btn");
  const projectListContainer = document.getElementById("project-list");

  const renderProjects = (filter = "all") => {
    if (!projectListContainer || typeof allProjects === "undefined") return;

    const projectsToRender =
      filter === "all"
        ? allProjects
        : allProjects.filter((p) => p.categories.includes(filter));

    let html = "";
    projectsToRender.forEach((project) => {
      const linksHtml = Object.entries(project.links)
        .map(([key, url]) => {
          const text =
            key === "code" ? "Code" : key === "play" ? "Play Game" : "View";
          return `<a href="${url}" target="_blank" class="special-link">${text}</a>`;
        })
        .join("");

      html += `
        <article class="project-entry" data-category="${project.categories.join(
          " "
        )}">
          <div class="project-details">
            <h2 class="project-title">${project.title}</h2>
            <span class="project-category">${project.type}</span>
            <p class="project-description">${project.description}</p>
            <h3>Key Features:</h3>
            <ul>
              ${project.features.map((f) => `<li>${f}</li>`).join("")}
            </ul>
            <h3>Tech Stack:</h3>
            <div class="project-tech">
              ${project.tech.map((t) => `<span>${t}</span>`).join("")}
            </div>
          </div>
          <div class="project-visuals">
            <img src="../${project.image}" alt="${project.title} Screenshot" />
            <div class="project-links">
              ${linksHtml}
            </div>
          </div>
        </article>
      `;
    });

    projectListContainer.innerHTML = html;

    // Animate new entries
    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            obs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    document
      .querySelectorAll(".project-entry")
      .forEach((entry) => observer.observe(entry));
  };

  filterButtons.forEach((button) => {
    button.addEventListener("click", () => {
      filterButtons.forEach((btn) => btn.classList.remove("active"));
      button.classList.add("active");
      const filter = button.dataset.filter;
      renderProjects(filter);
    });
  });

  // Initial render
  renderProjects("all");
});
