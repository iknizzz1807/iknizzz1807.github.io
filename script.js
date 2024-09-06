document.addEventListener("DOMContentLoaded", (event) => {
  const title = document.querySelector(".title");
  const nav = document.querySelector(".navigations");

  // Calculate the duration of the typing animation
  const textLength = title.textContent.length;
  const typingDuration = textLength * 0.75 * 50; // 50ms per character

  // Show navigation after typing animation
  setTimeout(() => {
    nav.classList.remove("hidden");
    nav.classList.add("fade-in");
  }, typingDuration);
});
