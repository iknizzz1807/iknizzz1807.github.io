// Theme management
const themeToggle = document.querySelector(".theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
  updateThemeIcon(theme);
}

function updateThemeIcon(theme) {
  const themeIcon = document.querySelector(".theme-icon");
  themeIcon.textContent = theme === "dark" ? "☀️" : "🌙";
}

// Initialize theme
const savedTheme =
  localStorage.getItem("theme") ||
  (prefersDarkScheme.matches ? "dark" : "light");
setTheme(savedTheme);

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

// Mobile navigation
const navToggle = document.querySelector(".nav-toggle");
const navMenu = document.querySelector(".nav-menu");

navToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
  navToggle.classList.toggle("active");
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute("href"));
    if (target) {
      target.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
    // Close mobile menu if open
    navMenu.classList.remove("active");
    navToggle.classList.remove("active");
  });
});

// Typing animation with syntax highlighting
const codeElement = document.getElementById("typed-code");
const rawCode = `const developer = {
  name: "Nguyen My Thong",
  role: "Full Stack Developer", 
  location: "Vietnam",
  passion: ["Web Dev", "AI/ML", "Game Dev"],
  
  getCurrentStatus() {
    return "Learning so hard!";
  }
};`;

function typeWriterWithHighlight(text, element, speed = 50) {
  let i = 0;
  element.innerHTML = "";

  function type() {
    if (i < text.length) {
      // Add next character
      i++;
      const currentText = text.substring(0, i);

      // Apply syntax highlighting to current text
      const highlighted = applySyntaxHighlighting(currentText);

      element.innerHTML = highlighted;
      setTimeout(type, speed);
    }
  }

  type();
}

function applySyntaxHighlighting(code) {
  // Escape HTML characters first
  let highlighted = code
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;");

  // Apply syntax highlighting in the correct order
  highlighted = highlighted
    // Comments first (to avoid highlighting keywords inside comments)
    .replace(/\/\/.*$/gm, '<span class="comment">$&</span>')

    // Strings (to avoid highlighting keywords inside strings)
    .replace(/"([^"\\]*(\\.[^"\\]*)*)"/g, '<span class="string">"$1"</span>')

    // Keywords (avoid replacing inside already tagged content)
    .replace(
      /\b(const|let|var|function|return|class|new|if|else|for|while|do|break|continue|try|catch|finally|throw|import|export|default)\b(?![^<]*>)/g,
      '<span class="keyword">$1</span>'
    )

    // Function names (word followed by opening parenthesis)
    .replace(
      /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=\()(?![^<]*>)/g,
      '<span class="function">$1</span>'
    )

    // Object properties (word followed by colon)
    .replace(
      /\b([a-zA-Z_$][a-zA-Z0-9_$]*)\s*(?=:)(?![^<]*>)/g,
      '<span class="property">$1</span>'
    )

    // Numbers
    .replace(/\b(\d+\.?\d*)\b(?![^<]*>)/g, '<span class="number">$1</span>')

    // Punctuation
    .replace(
      /([{}()\[\],;])(?![^<]*>)/g,
      '<span class="punctuation">$1</span>'
    );

  return highlighted;
}

// Start typing animation when page loads
window.addEventListener("load", () => {
  setTimeout(() => {
    if (codeElement) {
      typeWriterWithHighlight(rawCode, codeElement, 20);
    }
  }, 500);
});

// Intersection Observer for animations
const observerOptions = {
  threshold: 0.1,
  rootMargin: "0px 0px -50px 0px",
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.style.opacity = "1";
      entry.target.style.transform = "translateY(0)";
    }
  });
}, observerOptions);

// Observe elements for animation
document
  .querySelectorAll(
    ".skill-category, .project-card, .contact-method, .highlight-item, .timeline-item"
  )
  .forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });

// Active navigation link highlighting
window.addEventListener("scroll", () => {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.getBoundingClientRect().top;
    const sectionHeight = section.offsetHeight;

    if (sectionTop <= 100 && sectionTop + sectionHeight > 100) {
      current = section.getAttribute("id");
    }
  });

  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Project card hover effects
document.querySelectorAll(".project-card").forEach((card) => {
  card.addEventListener("mouseenter", () => {
    card.style.transform = "translateY(-8px) scale(1.02)";
  });

  card.addEventListener("mouseleave", () => {
    card.style.transform = "translateY(0) scale(1)";
  });
});

// Skill item hover effects
document.querySelectorAll(".skill-item").forEach((item) => {
  item.addEventListener("mouseenter", () => {
    item.style.background = "var(--primary)";
    item.style.color = "white";
    const span = item.querySelector("span");
    if (span) span.style.color = "white";
  });

  item.addEventListener("mouseleave", () => {
    item.style.background = "var(--background)";
    item.style.color = "var(--text-primary)";
    const span = item.querySelector("span");
    if (span) span.style.color = "var(--text-primary)";
  });
});

// Stats counter animation
function animateCounter(element, target, duration = 2000) {
  let start = 0;
  const increment = target / (duration / 16);

  function updateCounter() {
    start += increment;
    if (start < target) {
      element.textContent = Math.floor(start) + "+";
      requestAnimationFrame(updateCounter);
    } else {
      element.textContent = target + "+";
    }
  }

  updateCounter();
}

// Trigger counter animation when hero section is visible
const heroSection = document.querySelector(".hero");
const statsObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        const statNumbers = document.querySelectorAll(".stat-number");
        animateCounter(statNumbers[0], 5);
        animateCounter(statNumbers[1], 8);
        statsObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.5 }
);

statsObserver.observe(heroSection);

// Timeline animation on scroll
const timelineObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry, index) => {
      if (entry.isIntersecting) {
        setTimeout(() => {
          entry.target.style.opacity = "1";
          entry.target.style.transform = "translateX(0)";
        }, index * 200);
      }
    });
  },
  { threshold: 0.5 }
);

document.querySelectorAll(".timeline-item").forEach((item) => {
  item.style.opacity = "0";
  item.style.transform = "translateX(-20px)";
  item.style.transition = "opacity 0.6s ease, transform 0.6s ease";
  timelineObserver.observe(item);
});

// --- Render Featured Projects on Homepage ---
function renderFeaturedProjects() {
  const container = document.getElementById("featured-projects-grid");
  if (!container || typeof allProjects === "undefined") return;

  const featuredProjects = allProjects.filter((p) => p.isFeatured);

  let html = "";
  featuredProjects.forEach((project) => {
    html += `
      <article class="project-card">
        <div class="project-image">
          <img src="${project.image}" alt="${project.title}" />
          <div class="project-overlay">
            <div class="project-links">
              ${
                project.links.code
                  ? `<a href="${project.links.code}" target="_blank" class="project-link"><span>View Code</span></a>`
                  : ""
              }
              ${
                project.links.play
                  ? `<a href="${project.links.play}" target="_blank" class="project-link"><span>Play Game</span></a>`
                  : ""
              }
            </div>
          </div>
        </div>
        <div class="project-content">
          <div class="project-header">
            <h3>${project.title}</h3>
            <span class="project-type">${project.type}</span>
          </div>
          <p>${project.description}</p>
          <div class="project-tech">
            ${project.tech.map((t) => `<span>${t}</span>`).join("")}
          </div>
        </div>
      </article>
    `;
  });

  container.innerHTML = html;

  // Re-observe new project cards for animations
  document.querySelectorAll(".project-card").forEach((el) => {
    el.style.opacity = "0";
    el.style.transform = "translateY(20px)";
    el.style.transition = "opacity 0.6s ease, transform 0.6s ease";
    observer.observe(el);
  });
}

// Gọi hàm render khi DOM đã sẵn sàng
document.addEventListener("DOMContentLoaded", renderFeaturedProjects);
