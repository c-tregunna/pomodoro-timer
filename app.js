const closeBtn = document.getElementById('close-btn');
const introModal = document.getElementById('intro-modal');
const loadingSpinner = document.getElementById("spinner");
const focusStartMinutes = 25;
let focusStartMinutesTotal = focusStartMinutes * 60;
const focusTimer = document.getElementById('timer');
let timerInterval; // Store the setInterval ID
let isTimerRunning = false; // Track the timer state
const startPauseBtn = document.getElementById('start-pause-btn'); // Start/Pause button

// Function to hide the overlay when clicking the close button
function hideOverlay() {
    introModal.style.height = 0;
    introModal.style.overflow = 'hidden';
    setTimeout(() => { 
        introModal.style.border = 'none';
    }, 900);
}

// Function to show a loading spinner after overlay closes, then display the timer
function hideLoadingSpinner() {
    setTimeout(() => {
        loadingSpinner.style.visibility = "hidden";
    }, 2000);
    setTimeout(() => {
        document.getElementById("time").style.visibility = "visible";
    }, 2200);
}

// Function to update the timer every second
function updateTimer() {
    const minutes = Math.floor(focusStartMinutesTotal / 60);
    let seconds = focusStartMinutesTotal % 60;

    // Format seconds to always show two digits
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the timer display
    focusTimer.innerHTML = `${minutes}:${seconds}`;

    // Decrement the time left
    if (focusStartMinutesTotal > 0) {
        focusStartMinutesTotal--;
    } else {
        // When the timer reaches 0, stop the timer
        clearInterval(timerInterval);
        startPauseBtn.textContent = "Start"; // Reset button to "Start"
        isTimerRunning = false;
    }
}

// Start/Pause button click event handler
startPauseBtn.addEventListener('click', function() {
    if (isTimerRunning) {
        // If the timer is running, pause it
        clearInterval(timerInterval);
        startPauseBtn.textContent = "Resume"; // Change button to "Resume"
    } else {
        // If the timer is paused, start/resume it
        timerInterval = setInterval(updateTimer, 1000);
        startPauseBtn.textContent = "Pause"; // Change button to "Pause"
    }

    // Toggle the timer state
    isTimerRunning = !isTimerRunning;
});

// Close button event listener
closeBtn.addEventListener('click', function() {
    hideOverlay();
    loadingSpinner.style.visibility = "visible";
    hideLoadingSpinner();

    // Start the countdown timer after the spinner hides
    setTimeout(() => {
        // Initially set the button to "Start" when page loads
        startPauseBtn.textContent = "Start";
    }, 2200);

    console.log('clicked');
});
