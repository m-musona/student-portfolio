const slideIndices = {};

function showSlides(n, slideshowId) {
    const container = document.querySelector(`[data-slideshow='${slideshowId}']`);
    const slides = container.getElementsByClassName("slide");

    if (!slideIndices[slideshowId]) slideIndices[slideshowId] = 1;

    if (n > slides.length) slideIndices[slideshowId] = 1;
    else if (n < 1) slideIndices[slideshowId] = slides.length;
    else slideIndices[slideshowId] = n;

    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }

    slides[slideIndices[slideshowId] - 1].classList.add("active");
}

function plusSlides(n, slideshowId) {
    showSlides((slideIndices[slideshowId] || 1) + n, slideshowId);
}

// Initialize all slideshows
document.querySelectorAll(".slideshow-container").forEach(container => {
    const id = container.getAttribute("data-slideshow");
    slideIndices[id] = 1;
    showSlides(1, id);
});