// Date & Time
function updateDateTime() {
    const now = new Date();
    document.getElementById("dateTime").textContent = 
        "Today is " + now.toDateString() + " " + now.toLocaleTimeString();
}
setInterval(updateDateTime, 1000);
updateDateTime();

// Slideshow
let slideIndex = 0;
let slideTimer;


// Add captions for each slide
const slideCaptions = [
    "These Are A Few Examples Of What I can do.",
    "I Have Knowledge In Creating AI Models With Machine Learning. <a href='https://github.com/m-musona/Simple-Sentiment-Analyzer-API' class='link'>See Github.</a>",
    "I Have Knowledge In Graphics Rendering In OpenGL, Vulkan and DirectX 11. <a href='https://github.com/m-musona/BasicShapeRenderingOpenGL' class='link'>See Github.</a>",
    "I Have Knowledge In Building Web Backends In C# with ASP.NET. <a href='#' class='link'>See Github.</a>",
    "I Have Knowledge In Building Apps With Flutter. <a href='#' class='link'>See Github.</a>"
];

function showSlides(n) {
    let slides = document.getElementsByClassName("slides");
    let dots = document.getElementsByClassName("dot");
    let caption = document.getElementById("slideCaption");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active", "prev-slide");
    }

    // Determine previous slide to slide out
    let prevIndex = slideIndex - 1 < 0 ? slides.length - 1 : slideIndex - 1;
    if (slides[prevIndex]) slides[prevIndex].classList.add("prev-slide");

    slides[slideIndex-1].classList.add("active");

    for (let i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    dots[slideIndex-1].className += " active";

    // Update caption
    caption.innerHTML = slideCaptions[slideIndex-1];

    clearTimeout(slideTimer);
    slideTimer = setTimeout(() => plusSlides(1), 4000); // Auto next every 4s
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

// Initialize slideshow
slideIndex = 1;
showSlides(slideIndex);

// Typing Animation
const texts = [
"Hello! My name is Mutale Musona. ", 
"An Information Systems and Technology student at the University Of Lusaka. ",
"I am passionate about web development, AI, and computer graphics programming. ",
"This portal showcases my results, extra projects, and more. "
];

const typingDiv = document.getElementById("typing");
let textIndex = 0;
let charIndex = 0;
let isDeleting = false;
let speed = 1; // typing speed in ms

function typeEffect() {
const currentText = texts[textIndex];

if (isDeleting) {
    typingDiv.textContent = currentText.substring(0, charIndex--);
    speed = 50; // faster delete
} else {
    typingDiv.textContent = currentText.substring(0, charIndex++);
    speed = 100; // normal typing speed
}

if (!isDeleting && charIndex === currentText.length) {
    speed = 1500; // pause before deleting
    isDeleting = true;
} else if (isDeleting && charIndex === 0) {
    isDeleting = false;
    textIndex = (textIndex + 1) % texts.length; // move to next text
    speed = 500; // pause before typing again
}

setTimeout(typeEffect, speed);
}

typeEffect();