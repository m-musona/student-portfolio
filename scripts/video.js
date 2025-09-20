const video = document.getElementById("myVideo");
const playPause = document.getElementById("playPause");
const progress = document.getElementById("progress");
const progressContainer = document.querySelector(".progress-container");
const timeDisplay = document.getElementById("time");
const volume = document.getElementById("volume");
const controls = document.getElementById("controls");
const videoPlayer = document.getElementById("videoPlayer");
const loadingIndicator = document.getElementById('loadingIndicator');

let hideControlsTimeout;

// Play / Pause
playPause.addEventListener("click", () => {
    if (video.paused) {
        video.play();
        playPause.textContent = "❚❚";
    } else {
        video.pause();
        playPause.textContent = "▶";
    }
});

// Update progress bar
video.addEventListener("timeupdate", () => {
    const percent = (video.currentTime / video.duration) * 100;
    progress.style.width = percent + "%";
    timeDisplay.textContent = formatTime(video.currentTime) + " / " + formatTime(video.duration);
});

// Seek video
progressContainer.addEventListener("click", (e) => {
    const rect = progressContainer.getBoundingClientRect();
    const clickX = e.clientX - rect.left;
    const width = rect.width;
    video.currentTime = (clickX / width) * video.duration;
});

// Volume control
volume.addEventListener("input", () => {
    video.volume = volume.value;
});

// Format seconds
function formatTime(seconds) {
    const minutes = Math.floor(seconds / 60) || 0;
    const secs = Math.floor(seconds % 60) || 0;
    return `${minutes}:${secs < 10 ? "0" : ""}${secs}`;
}

// Auto-hide controls
function showControls() {
    controls.classList.remove("hide");
    clearTimeout(hideControlsTimeout);
    if (!video.paused) {
        hideControlsTimeout = setTimeout(() => {
            controls.classList.add("hide");
        }, 3000);
    }
}

video.addEventListener('waiting', () => {
    loadingIndicator.style.display = 'block';
});
video.addEventListener('playing', () => {
    loadingIndicator.style.display = 'none';
});

// Show controls on mouse/touch interaction
videoPlayer.addEventListener("mousemove", showControls);
videoPlayer.addEventListener("click", showControls);
videoPlayer.addEventListener("touchstart", showControls);

// Show controls when paused
video.addEventListener("pause", () => {
    controls.classList.remove("hide");
    loadingIndicator.style.display = 'none';
});
video.addEventListener("play", showControls);

// Initialize
showControls();