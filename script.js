document.addEventListener("DOMContentLoaded", () => {
  setupNavLoading();
  setupScrollFade();
  setupFadeInBlocks();
});

function setupNavLoading() {
  const overlay = document.getElementById("loading-overlay");
  const shutters = overlay.querySelectorAll(".shutter");
  const navLinks = document.querySelectorAll("[data-nav-link]");

  navLinks.forEach(link => {
    link.addEventListener("click", e => {
      e.preventDefault();
      const href = link.getAttribute("href");
      overlay.classList.add("active");
      shutters.forEach(s => s.classList.add("close"));
      setTimeout(() => {
        shutters.forEach(s => s.classList.remove("close"));
        shutters.forEach(s => s.classList.add("open"));
      }, 600);
      setTimeout(() => {
        window.location.href = href;
      }, 1100);
    });
  });
}

function setupFadeInBlocks() {
  const blocks = document.querySelectorAll(".fade-in-block");
  blocks.forEach((block, i) => {
    setTimeout(() => block.classList.add("visible"), 200 + i * 150);
  });
}

function setupScrollFade() {
  const elements = document.querySelectorAll(".scroll-fade");
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("visible");
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.2 });
  elements.forEach(el => observer.observe(el));
}
