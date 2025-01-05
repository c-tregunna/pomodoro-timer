const closeBtn = document.getElementById('close-btn');
const introModal = document.getElementById('intro-modal');
const alienImage = document.getElementById('alien')
const alienContainer = document.getElementById('alien-holder')
const checkbox = document.getElementById('check')
function isCheckboxChecked(event) {
    if (checkbox.checked) {
        event.preventDefault()
        document.documentElement.classList.add('dark')
        console.log("checked")
    } else {
        console.log("not checked")
        document.documentElement.classList.remove('dark')
    }
}
checkbox.addEventListener('change', isCheckboxChecked)
// variables for timers
let focusStartMinutes = 25;
let focusStartMinutesTotal = focusStartMinutes * 60
const focusTimer = document.getElementById('timer')
let timerInterval; // Store the setInterval ID
let isTimerRunning = false // Track the timer state
const startPauseBtn = document.getElementById('start-pause-btn') // Start/Pause button
const shortBreakButton = document.getElementById('short-break-btn') // Short break button
const longBreakButton = document.getElementById('long-break-btn') // Long break button
const focusTimeButton = document.getElementById('focus-btn') // Focus time button


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
        document.getElementById("time").style.visibility = "visible"
        alienImage.style.width = "90px"
        alienImage.style.height = "90px"
        document.getElementById('loading-text').style.display = "none"
        document.getElementById('alien-container').style.height = "120px"
    }, 6200);
}

function timerAmount(e) {
    if (isTimerRunning) {
        clearInterval(timerInterval);
        isTimerRunning = false;
        startPauseBtn.textContent = "Start Game" // Reset button to "Start"
        alienImage.classList.remove('animate-moveAlien')
        alienImage.style.left = '' // Reset left property
        alienImage.classList.add('animate-bounce')
        alienImage.classList.remove('absolute')
    }
    if(e.target.textContent === "Short Break") {
        timer.textContent = "5:00"
        focusStartMinutes = 5
    } 
    if(e.target.textContent === "Long Break") {
        timer.textContent = "15:00"
        focusStartMinutes = 15
    } 
    if(e.target.textContent === "Focus Time") {
        timer.textContent = "25:00"
        focusStartMinutes = 25
    } 
    focusStartMinutesTotal = focusStartMinutes * 60
}

shortBreakButton.addEventListener('click', timerAmount)
longBreakButton.addEventListener('click', timerAmount)
focusTimeButton.addEventListener('click', timerAmount)

// Function to update the timer every second
function updateTimer() {
    const minutes = Math.floor(focusStartMinutesTotal / 60);
    let seconds = focusStartMinutesTotal % 60;

    // Format seconds to always show two digits - ? of true to this, : is false do this
    seconds = seconds < 10 ? '0' + seconds : seconds;

    // Update the timer display
    focusTimer.innerHTML = `${minutes}:${seconds}`;

    // Decrement the time left
    if (focusStartMinutesTotal > 0) {
        focusStartMinutesTotal--;
    } else {
        // When the timer reaches 0, stop the timer
        clearInterval(timerInterval);
        startPauseBtn.textContent = "Start Game"; // Reset button to "Start"
        isTimerRunning = false;
    }
}

// Function to start the timer
function startTimer() {
    if (!isTimerRunning) {
        timerInterval = setInterval(updateTimer, 1000)
        startPauseBtn.textContent = "Pause"; // Change button to "Pause"
        isTimerRunning = true;
        alienImage.classList.remove('animate-bounce')
        alienImage.classList.add('animate-moveAlien')
        alienImage.classList.add('absolute')
    } else {
        // Pause the timer if already running
        clearInterval(timerInterval);
        startPauseBtn.textContent = "Start Game";
        isTimerRunning = false;
        alienImage.classList.remove('animate-moveAlien')
        alienImage.style.left = ''; // Reset left property
        alienImage.classList.add('animate-bounce')
        alienImage.classList.remove('absolute')
    }
}

startPauseBtn.addEventListener('click', startTimer);

// Close button event listener
closeBtn.addEventListener('click', function() {
    hideOverlay();
    hideLoadingSpinner();

    // Start the countdown timer after the spinner hides
    setTimeout(() => {
        // Initially set the button to "Start" when page loads
        startPauseBtn.textContent = "Start Game";
    }, 2200);
});
