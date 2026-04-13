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
    <a href="cases/${cs.slug}.html" class="b2b-case-card reveal" style="display:block; text-decoration:none; color:inherit;">
      <div class="b2b-case-glow"></div>
      <div class="b2b-case-content" style="padding-bottom: 2rem;">
        <div class="b2b-case-header">
          <span class="b2b-case-type">${cs.type}</span>
          <h3 class="b2b-case-title" style="color:var(--text); margin-bottom: 1rem; transition: color 0.3s;">${cs.title}</h3>
          <p class="b2b-case-tagline" style="color:var(--text-dim); font-size:1.05rem; margin-bottom: 2rem;">${cs.tagline}</p>
        </div>
        
        <div class="b2b-case-metrics" style="border-bottom:none; margin-bottom:0; padding-bottom:1rem;">
          ${cs.metrics.map(m => `
            <div class="b2b-metric" style="flex:1;">
              <span class="b2b-metric-val" style="font-size:1.5rem;">${m.value}</span>
              <span class="b2b-metric-lbl">${m.label}</span>
            </div>
          `).join("")}
        </div>

        <div class="b2b-case-footer" style="margin-top: 1rem; padding-top: 1.5rem; border-top: 1px solid var(--border);">
          <div class="b2b-tech-stack">
            ${cs.tech.slice(0, 4).map(t => `<span class="b2b-tech-badge">${t}</span>`).join("")}
            ${cs.tech.length > 4 ? `<span class="b2b-tech-badge" style="background:transparent; border-color:transparent; padding-left:0;">+${cs.tech.length - 4}</span>` : ''}
          </div>
          <span class="b2b-link-btn" style="color:var(--accent-light); margin-top: 1rem; display:inline-block;">Read Engineering Deep-Dive &rarr;</span>
        </div>
      </div>
    </a>
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
  
  revealElements.forEach((el) => {
    el.classList.add("reveal");
    observer.observe(el);
  });
}
