import { Particle } from './particle.js';

// --- Floating Circle Effect ---
const mouseEffect = document.getElementById("mouse-effect");
const circles = [];
const numCircles = 5;

for (let i = 0; i < numCircles; i++) {
    const circle = document.createElement("div");
    circle.classList.add("mouse-circle");
    circle.style.width = `${10 + Math.random() * 30}px`;
    circle.style.height = circle.style.width;
    circle.style.opacity = Math.random() * 0.5 + 0.2;
    mouseEffect.appendChild(circle);
    circles.push({el: circle, x: window.innerWidth/2, y: window.innerHeight/2, dx: 0, dy: 0});
}

document.addEventListener("mousemove", (e) => {
    circles.forEach((circle, index) => {
        // slightly delayed movement for trailing effect
        const speed = 0.1 + index * 0.05;
        circle.dx += (e.clientX - circle.x) * speed;
        circle.dy += (e.clientY - circle.y) * speed;
    });
});

function animateCircles() {
    circles.forEach(circle => {
        circle.x += circle.dx;
        circle.y += circle.dy;
        circle.dx *= 0.8; // friction
        circle.dy *= 0.8;
        circle.el.style.transform = `translate(${circle.x}px, ${circle.y}px)`;
    });
    requestAnimationFrame(animateCircles);
}
animateCircles();

// --- Particle effect ---
const canvas = document.getElementById("particle-canvas");
const ctx = canvas.getContext("2d");
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

const particleColors = {
    "light-mode": "rgba(0, 0, 0, 0.3)", // white/light particles
    "dark-mode": "rgba(255, 255, 255, 0.3)"   // purple-ish for dark mode
};

// create particles
const particles = [];
const numParticles = 80;
for(let i=0; i<numParticles; i++){
    particles.push(new Particle(canvas, ctx));
}

// animate particles
function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    particles.forEach(p => {
        p.update();
        p.draw();
    });
    requestAnimationFrame(animateParticles);
}
animateParticles();

// make particles slightly attracted to mouse
let mouse = { x: canvas.width/2, y: canvas.height/2 };
document.addEventListener("mousemove", (e) => {
    mouse.x = e.clientX;
    mouse.y = e.clientY;
});
setInterval(() => {
    particles.forEach(p => {
        const dx = mouse.x - p.x;
        const dy = mouse.y - p.y;
        p.x += dx * 0.002;
        p.y += dy * 0.002;
    });
}, 16);

// --- Theme ---
const toggleBtn = document.getElementById("theme-toggle");

// Set default mode based on localStorage or default to light
if (!localStorage.getItem("theme")) {
    localStorage.setItem("theme", "light-mode");
}
document.body.classList.add(localStorage.getItem("theme"));

// Update icon based on current theme
toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "Light Mode" : "Dark Mode";
if (document.body.classList.contains("dark-mode"))
{
    particles.forEach(p => p.color = particleColors["dark-mode"]);
}
else
{
    particles.forEach(p => p.color = particleColors["light-mode"]);
}
toggleBtn.addEventListener("click", () => {
    if (document.body.classList.contains("light-mode")) {
        document.body.classList.remove("light-mode");
        document.body.classList.add("dark-mode");
        toggleBtn.textContent = "Light Mode";
        localStorage.setItem("theme", "dark-mode");
        // Update particle colors
        particles.forEach(p => p.color = particleColors["dark-mode"]);
    } else {
        document.body.classList.remove("dark-mode");
        document.body.classList.add("light-mode");
        toggleBtn.textContent = "Dark Mode";
        localStorage.setItem("theme", "light-mode");

        // Update particle colors
        particles.forEach(p => p.color = particleColors["light-mode"]);
    }
});

const containers = document.querySelectorAll('.container');

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('show');
      observer.unobserve(entry.target); // animate only once
    }
  });
}, {
  threshold: 0.2
});

containers.forEach(container => observer.observe(container));