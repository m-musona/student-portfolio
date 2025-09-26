document.addEventListener("DOMContentLoaded", () => {
    // Process each semester separately
    processSemester("sem-1-table", "sem-1-overview");
    processSemester("sem-2-table", "sem-2-overview");
    
    function processSemester(tableId, overviewId) {
        // Calculate marks for this semester
        let marks = [];
        document.querySelectorAll(`#${tableId} tr td:nth-child(2)`).forEach(cell => {
            const text = cell.textContent.trim();
            const mark = parseFloat(text);
            if (!isNaN(mark)) marks.push(mark);
        });
        
        if (marks.length === 0) return;
        
        let total = marks.reduce((a, b) => a + b, 0);
        let average = total / marks.length;
        
        // Calculate GPA (assuming 100% = 4.0 GPA)
        let gpaValue = (average / 100) * 4;
        
        // Get elements for this semester
        const circle = document.querySelector(`#${overviewId} .circle`);
        const progressBars = document.querySelectorAll(`#${tableId} .progress-fill`);
        const myBar = document.querySelector(`#${overviewId} .my-average`);
        const classBar = document.querySelector(`#${overviewId} .class-average`);
        const myValue = document.querySelector(`#${overviewId} .my-value`);
        const classValue = document.querySelector(`#${overviewId} .class-value`);
        
        // Set class average (you can adjust this value)
        let classAverage = Number(classBar.getAttribute("data-average"));
        
        // Function to animate GPA circle
        function animateCircle() {
            let current = 0;
            const span = circle.querySelector("span");
            const animate = setInterval(() => {
                if (current >= average) {
                    clearInterval(animate);
                } else {
                    current++;
                    const degrees = (current / 100) * 360;
                    circle.style.background = `conic-gradient(var(--circle-color) ${degrees}deg, var(--circle-bg) ${degrees}deg 360deg)`;
                    span.textContent = (current / 25).toFixed(2);
                }
            }, 20);
        }
        
        // Set up Intersection Observer for animations
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // GPA circle
                    if (entry.target.classList.contains("circle")) {
                        animateCircle();
                        observer.unobserve(entry.target);
                    }
                    
                    // Progress bars
                    if (entry.target.classList.contains("progress-fill")) {
                        entry.target.style.width = entry.target.dataset.width;
                        observer.unobserve(entry.target);
                    }
                    
                    // Comparison chart
                    if (entry.target.closest(".chart-container")) {
                        myBar.style.width = average + "%";
                        classBar.style.width = classAverage + "%";
                        myValue.textContent = average.toFixed(1) + "%";
                        classValue.textContent = classAverage.toFixed(1) + "%";
                        observer.unobserve(entry.target.closest(".chart-container"));
                    }
                }
            });
        }, { threshold: 0.4 });
        
        // Watch elements
        observer.observe(circle);
        progressBars.forEach(bar => observer.observe(bar));
        observer.observe(document.querySelector(`#${overviewId} .chart-container`));
    }
});