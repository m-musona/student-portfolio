const languages = document.querySelectorAll('.language');

const profileObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        entry.target.classList.add('show');
        profileObserver.unobserve(entry.target);
    }
    });
}, { threshold: 0.2 });

languages.forEach((language, i) => {
    language.style.transitionDelay = `${i * 0.2}s`; // staggered follow effect
    observer.observe(language);
});