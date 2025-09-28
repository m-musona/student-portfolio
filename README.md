# 🚀 Student Portfolio Website

A modern, interactive portfolio website showcasing academic achievements, projects, and skills. Built with pure HTML, CSS, and JavaScript featuring dark/light mode, animated elements, and responsive design.

![Portfolio Preview](https://img.shields.io/badge/Status-Live-brightgreen) ![Tech](https://img.shields.io/badge/HTML-CSS--JS-orange) ![Responsive](https://img.shields.io/badge/Design-Fully%20Responsive-blue)

## ✨ Features

### 🎨 Visual & Interactive
- **Dark/Light Mode Toggle** - Smooth theme switching with persistent preferences
- **Floating Particle System** - Interactive background particles that follow cursor
- **Mouse Trail Effects** - Elegant circle trail following mouse movements
- **Smooth Animations** - Scroll-triggered animations and transitions
- **Custom Video Player** - Full-featured video controls with loading indicators
- **Interactive Slideshows** - Multiple image galleries with smooth transitions

### 📱 Responsive Design
- **Mobile-First Approach** - Optimized for all screen sizes
- **Hamburger Menu** - Collapsible navigation for mobile devices
- **Flexible Layouts** - Adaptive containers, grids, and flexbox systems
- **Touch-Friendly** - Optimized for mobile touch interactions

### 📊 Academic Showcase
- **Year-by-Year Results** - Detailed academic performance breakdown
- **Interactive GPA Visualizations** - Animated charts and progress bars
- **Course Progress Tracking** - Visual representation of marks and grades
- **Class Comparison** - Performance metrics vs class averages

### 🎯 Portfolio Sections
- **Professional Profile** - Skills, languages, and achievements with contact links
- **Project Demos** - Showcase of technical projects with GitHub links
- **Hobbies & Interests** - Interactive slideshow galleries with categories
- **Career Goals** - Skill progression visualizations with animated bars

## 🛠️ Technology Stack

- **Frontend**: HTML5, CSS3, JavaScript (ES6+)
- **Styling**: Custom CSS with CSS Variables for theming
- **Animations**: CSS Transitions & JavaScript Intersection Observer API
- **Icons**: Custom favicon sets for both themes
- **Media**: Custom video player with full controls
- **Layout**: CSS Grid, Flexbox, and responsive design principles

## 📁 Project Structure

```
portfolio/
├── index.html              # Login page with form validation
├── home.html               # Landing page with introduction & slideshow
├── profile.html            # Main profile overview with contact info
├── year1.html - year4.html # Academic results by year
├── page1.html              # Hobbies & interests with image galleries
├── page2.html              # Career goals & projects showcase
├── styles/
│   ├── style.css           # Global styles, themes, and animations
│   ├── home.css            # Homepage specific styles and slideshow
│   ├── profile.css         # Profile page styles and contact grid
│   ├── year.css            # Academic results styles with GPA circles
│   ├── hobbies.css         # Hobbies page styles with slideshow grids
│   ├── career.css          # Career page styles with skill bars
│   ├── login.css           # Login page styles with floating labels
│   └── video.css           # Custom video player styles
├── scripts/
│   ├── script.js           # Global functionality (theme, particles, navigation)
│   ├── home.js             # Homepage animations, typing effect & slideshow
│   ├── profile.js          # Profile page interactions and animations
│   ├── year.js             # Academic results animations and calculations
│   ├── hobbies.js          # Hobbies slideshow functionality
│   ├── career.js           # Career page animations and skill bars
│   └── video.js            # Custom video player logic
├── images/                 # Portfolio images and assets
│   ├── hobbies/            # Hobbies category images
│   ├── career/             # Project demonstration images
│   └── portfolio_image_*.{jpg,png} # Main portfolio images
├── videos/                 # Project demo videos
└── favicon/               # Theme-specific favicons
    ├── light/             # Light theme icons
    └── dark/              # Dark theme icons
```

## 🎨 CSS Architecture

### Core Styling System
- **style.css** - Global styles, theme variables, and reusable components
- **Component-based** - Modular CSS files for each page section
- **CSS Variables** - Dynamic theming with light/dark mode support
- **BEM Methodology** - Block Element Modifier naming convention

### Key Style Features
```css
/* Theme Variables Example */
body.light-mode {
    --primary-color: #47a6ff;
    --background-gradient: linear-gradient(135deg, #fff, #eee);
}

body.dark-mode {
    --primary-color: #9d0bf1;
    --background-gradient: linear-gradient(135deg, #141414, #272727);
}
```

### Animation System
- **Scroll-triggered animations** using Intersection Observer
- **CSS Transitions** for smooth state changes
- **Keyframe animations** for complex effects
- **Transform-based** animations for performance

## 🚀 Quick Start

### Prerequisites
- Modern web browser with JavaScript enabled
- Local server recommended for full functionality (CORS for videos)

### Installation
1. Clone the repository:
```bash
git clone https://github.com/m-musona/student-portfolio.git
```

2. Navigate to the project directory:
```bash
cd student-portfolio
```

3. Open `index.html` in your browser or use a local server:
```bash
# Using Python 3
python -m http.server 8000

# Using Node.js
npx http-server

# Using PHP
php -S localhost:8000
```

## 🎮 How to Use

### Navigation
- **Start** at `index.html` for login (demo credentials not required)
- **Explore** academic results through the dropdown menu
- **Toggle Theme** using the button in the top-right corner
- **Mobile Navigation** uses hamburger menu with smooth animations

### Interactive Elements
- **Hover** over skills to see animated progress bars
- **Click** through image slideshows in hobbies section (4 categories)
- **Scroll** to trigger entrance animations on elements
- **Play** project demo videos with custom control system
- **Move Mouse** to interact with background particles and trail effects

### Special Features
- **Typing Effect** on homepage with deleting/rewriting animation
- **GPA Visualization** with animated circular progress indicators
- **Skill Level Bars** with smooth loading animations
- **Responsive Image Galleries** with touch-friendly navigation

## 🎨 Customization Guide

### Adding New Academic Results
Edit the respective year HTML files (`year1.html` - `year4.html`):
```html
<tr>
    <td>Course Name</td>
    <td>
        85
        <div class="progress-bar"><div class="progress-fill" data-width="85%"></div></div>
    </td>
    <td>A</td>
</tr>
```

### Modifying Themes
Update CSS variables in `styles/style.css`:
```css
body.light-mode {
    --primary-color: #47a6ff;      /* Change light theme primary color */
    --background-gradient: linear-gradient(135deg, #fff, #eee);
}

body.dark-mode {
    --primary-color: #9d0bf1;      /* Change dark theme primary color */
    --background-gradient: linear-gradient(135deg, #141414, #272727);
}
```

### Adding New Projects
Update `page2.html` with new project entries:
```html
<div class="project-container container left show-cursor">
    <img src="images/project.jpg" alt="Project Name">
    <h3>Project Title</h3>
    <p>Project description</p>
    <a class="link" href="https://github.com/username/repo">View Code</a>
</div>
```

### Adding New Hobbies Categories
Update `page1.html` with new slideshow containers:
```html
<div class="slideshow-container" data-slideshow="new-category">
    <h3>New Category</h3>
    <div class="slides-wrapper">
        <div class="slide">
            <img src="images/hobbies/new-image.jpg" alt="Description">
            <p>Image description</p>
        </div>
    </div>
    <div class="btn-container">
        <button class="btn" onclick="plusSlides(-1, 'new-category')">Previous</button>
        <button class="btn" onclick="plusSlides(1, 'new-category')">Next</button>
    </div>
</div>
```

## 🌟 JavaScript Features

### Particle System
```javascript
class Particle {
    constructor(canvas, ctx) {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Advanced particle physics with mouse attraction
    }
}
```

### Theme Management
```javascript
// Persistent theme storage with favicon switching
localStorage.setItem("theme", "dark-mode");
document.body.classList.add(localStorage.getItem("theme"));
```

### Scroll Animations
```javascript
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('show');
        }
    });
}, { threshold: 0.2 });
```

### Advanced Slideshow System
```javascript
// Multiple independent slideshows with unique IDs
const slideIndices = {};
function showSlides(n, slideshowId) {
    // Smooth slide transitions with CSS transforms
}
```

## 📱 Responsive Breakpoints

- **Desktop**: 1120px and above (full navigation, multi-column layouts)
- **Tablet**: 768px - 1119px (adaptive grids, stacked sections)
- **Mobile**: Below 768px (hamburger menu, single column, touch-optimized)

### Mobile-First Features
- **Touch-friendly** buttons and controls
- **Optimized images** with appropriate sizing
- **Collapsible navigation** with smooth animations
- **Readable typography** scaling

## 🛡️ Browser Compatibility

- ✅ Chrome 60+ (Full support)
- ✅ Firefox 55+ (Full support) 
- ✅ Safari 12+ (Full support)
- ✅ Edge 79+ (Full support)
- ✅ Mobile browsers (iOS Safari, Chrome Mobile)

## 🛠️ Development Scripts

### File Purpose Overview
- **script.js** - Core functionality (theme, particles, navigation)
- **home.js** - Homepage specific features (typing, slideshow)
- **year.js** - Academic results calculations and animations
- **profile.js** - Profile page animations and interactions
- **hobbies.js** - Multi-category slideshow management
- **career.js** - Skill bar animations and project displays
- **video.js** - Custom video player with full controls

## 🛡️ License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 👨‍💻 Developer

**Mutale Musona**
- 🎓 Information Systems and Technology Student at University of Lusaka
- 💻 Passionate about AI, Web Development, and Computer Graphics
- 🚀 Skills: Python, JavaScript, C++, AI/ML, Web Development
- 📧 Email: musonamutale@gmail.com
- 🔗 GitHub: [m-musona](https://github.com/m-musona)
- 💼 LinkedIn: [Mutale Musona](https://linkedin.com/in/mutale-musona-3567a62a9)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check [issues page](https://github.com/m-musona/student-portfolio/issues).

### Development Setup
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📞 Support

If you have any questions or need help with setup:
- 📧 Email: musonamutale@gmail.com
- 🐛 Create an [Issue](https://github.com/m-musona/student-portfolio/issues)
- 💬 Check the existing issues for solutions

---

<div align="center">

### ⭐️ Don't forget to star this repository if you find it helpful!

**Built with ❤️ using pure HTML, CSS, and JavaScript**

</div>
