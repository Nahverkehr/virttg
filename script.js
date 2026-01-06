// ===== SCROLL ANIMATION =====
const elements = document.querySelectorAll(".fade-in");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
    }
  });
}, { threshold: 0.2 });

elements.forEach(el => observer.observe(el));

// ===== THEME TOGGLE =====
const toggle = document.getElementById("themeToggle");
const body = document.body;

if (toggle) {
  if (localStorage.getItem("theme") === "light") {
    body.classList.add("light");
    toggle.textContent = "☀️";
  }

  toggle.addEventListener("click", () => {
    body.classList.toggle("light");

    if (body.classList.contains("light")) {
      localStorage.setItem("theme", "light");
      toggle.textContent = "☀️";
    } else {
      localStorage.setItem("theme", "dark");
      toggle.textContent = "🌙";
    }
  });
}
