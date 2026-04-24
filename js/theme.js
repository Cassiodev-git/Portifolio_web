const root = document.documentElement;
const btn = document.querySelector(".btn-theme");

const savedTheme = localStorage.getItem("theme") || "dark";
root.setAttribute("data-theme", savedTheme);

btn.addEventListener("click", () => {
    const current = root.getAttribute("data-theme");
    const next = current === "light" ? "dark" : "light";

    root.setAttribute("data-theme", next);
    localStorage.setItem("theme", next);
});