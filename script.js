Promise.all([
  document.fonts.ready,
  new Promise((resolve) => {
    if (document.readyState !== "loading") {
      resolve();
    } else {
      document.addEventListener("DOMContentLoaded", resolve);
    }
  }),
])
  .then(() => {
    console.log("Fonts loaded and DOM ready");
    const title = document.querySelector(".title");
    const nav = document.querySelector(".navigations");

    function calculateTypingDuration(text) {
      return text.length * 0.75 * 50; // 50ms per character
    }

    const typingDuration = calculateTypingDuration(title.textContent);

    // Show navigation after typing animation
    setTimeout(() => {
      requestAnimationFrame(() => {
        nav.classList.remove("hidden");
        nav.classList.add("fade-in");
      });
    }, typingDuration);
  })
  .catch((error) => {
    console.error("An error occurred:", error);
  });
