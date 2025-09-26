window.addEventListener("DOMContentLoaded", () => {
    const skillLevels = document.querySelectorAll(".skill-level");
    skillLevels.forEach(el => {
        const width = el.getAttribute("data-width") || "100%";
        el.style.width = width;
    });
});