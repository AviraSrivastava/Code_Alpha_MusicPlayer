// Selecting elements
const audioPlayer = document.getElementById("audio-player");
const playPauseBtn = document.getElementById("play-pause-btn");
const stopBtn = document.getElementById("stop-btn");
const statusDisplay = document.getElementById("status");

// Function to toggle play/pause
function togglePlayPause() {
    if (audioPlayer.paused) {
        audioPlayer.play();
        playPauseBtn.textContent = "Pause";
        statusDisplay.textContent = "Playing...";
    } else {
        audioPlayer.pause();
        playPauseBtn.textContent = "Play";
        statusDisplay.textContent = "Paused";
    }
}

// Function to stop the audio
function stopAudio() {
    audioPlayer.pause();
    audioPlayer.currentTime = 0; // Reset to the beginning
    playPauseBtn.textContent = "Play";
    statusDisplay.textContent = "Stopped";
}

// Event listeners for buttons
playPauseBtn.addEventListener("click", togglePlayPause);
stopBtn.addEventListener("click", stopAudio);

// Update song title if needed (optional, if loading dynamically)
// document.getElementById('song-title').textContent = 'New Song Title';
