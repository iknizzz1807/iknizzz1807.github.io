document.addEventListener("DOMContentLoaded", () => {
  renderCaseStudies();
  initAnimations();

  const toggle = document.querySelector(".nav-toggle");
  const links = document.querySelector(".nav-links");
  if (toggle && links) {
    toggle.addEventListener("click", () => {
      links.classList.toggle("active");
      toggle.classList.toggle("active");
    });
  }
});

function renderCaseStudies() {
  const container = document.getElementById("case-studies-container");
  if (!container || typeof caseStudies === "undefined") return;

  container.innerHTML = caseStudies
    .map(
      (cs) => `
    <article class="b2b-case-card reveal">
      <div class="b2b-case-glow"></div>
      <div class="b2b-case-content">
        <div class="b2b-case-header">
          <span class="b2b-case-type">${cs.type}</span>
          <h3 class="b2b-case-title">${cs.title}</h3>
          <p class="b2b-case-tagline">${cs.tagline}</p>
        </div>
        
        <div class="b2b-case-metrics">
          ${cs.metrics.map(m => `
            <div class="b2b-metric">
              <span class="b2b-metric-val">${m.value}</span>
              <span class="b2b-metric-lbl">${m.label}</span>
            </div>
          `).join("")}
        </div>

        <div class="b2b-case-body">
          <div class="b2b-body-section">
            <h4>The Problem</h4>
            <p>${cs.problem}</p>
          </div>
          <div class="b2b-body-section">
            <h4>The Architecture</h4>
            <p>${cs.solution}</p>
          </div>
          <div class="b2b-body-section b2b-outcome">
            <h4>Business Outcome</h4>
            <p>${cs.outcome}</p>
          </div>
        </div>

        <div class="b2b-case-footer">
          <div class="b2b-tech-stack">
            ${cs.tech.map(t => `<span class="b2b-tech-badge">${t}</span>`).join("")}
          </div>
          ${cs.links && cs.links.code ? `<a href="${cs.links.code}" target="_blank" class="b2b-link-btn">View Architecture &rarr;</a>` : ''}
        </div>
      </div>
    </article>
    `
    )
    .join("");
}

function initAnimations() {
  const observerOptions = {
    root: null,
    rootMargin: "0px",
    threshold: 0.1,
  };

  const observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target); // Only animate once
      }
    });
  }, observerOptions);

  const revealElements = document.querySelectorAll(".reveal, .hero-title, .hero-sub, .hero-actions, .metric, .service-card, .process-step");
  
  revealElements.forEach((el, index) => {
    el.classList.add("reveal"); // Ensure they have the base class
    // Reset any hardcoded style transitions if exist
    observer.observe(el);
  });
}
