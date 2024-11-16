// Theme toggle
const themeToggle = document.querySelector(".theme-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");

function setTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  localStorage.setItem("theme", theme);
}

themeToggle.addEventListener("click", () => {
  const currentTheme = document.documentElement.getAttribute("data-theme");
  setTheme(currentTheme === "dark" ? "light" : "dark");
});

// Set initial theme
const savedTheme =
  localStorage.getItem("theme") ||
  (prefersDarkScheme.matches ? "dark" : "light");
setTheme(savedTheme);

// Typewriter effect
const text = "Building digital experiences";
const heroSubtitle = document.querySelector(".hero-subtitle");
let index = 0;

function typeWriter() {
  if (index < text.length) {
    heroSubtitle.textContent += text.charAt(index);
    index++;
    setTimeout(typeWriter, 100);
  }
}

// Start typewriter effect when page loads
window.addEventListener("load", () => {
  heroSubtitle.textContent = "";
  setTimeout(typeWriter, 1000);
});

// Scroll indicator visibility
const scrollIndicator = document.querySelector(".scroll-indicator");
const footer = document.querySelector(".footer");

window.addEventListener("scroll", () => {
  const footerRect = footer.getBoundingClientRect();
  const isFooterVisible = footerRect.top <= window.innerHeight;

  scrollIndicator.style.opacity = isFooterVisible ? "0" : "1";
});

// Scroll to top button
const scrollTopBtn = document.querySelector(".scroll-top");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollTopBtn.classList.add("visible");
  } else {
    scrollTopBtn.classList.remove("visible");
  }
});

scrollTopBtn.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth",
    });
  });
});

// Move eyes to cusor
const pupils = document.querySelectorAll(".eye .pupil");
window.addEventListener("mousemove", (e) => {
  pupils.forEach((pupil) => {
    // get x and y postion of cursor
    var rect = pupil.getBoundingClientRect();
    var x = (e.pageX - rect.left) / 30 + "px";
    var y = (e.pageY - rect.top) / 30 + "px";
    pupil.style.transform = "translate3d(" + x + "," + y + ", 0px)";
  });
});
