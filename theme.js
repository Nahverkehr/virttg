const toggle = document.getElementById("themeToggle");
const body = document.body;

// gespeichertes Theme laden
if (localStorage.getItem("theme") === "light") {
  body.classList.add("light");
  toggle.textContent = "🌞";
}

toggle.addEventListener("click", () => {
  body.classList.toggle("light");

  if (body.classList.contains("light")) {
    localStorage.setItem("theme", "light");
    toggle.textContent = "🌞";
  } else {
    localStorage.setItem("theme", "dark");
    toggle.textContent = "🌙";
  }
});
