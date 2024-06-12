// Set the date and time we're counting down to
const countdownDate = new Date("Jun 12, 2024 23:35:00").getTime();

// Update the countdown every 1 second
const x = setInterval(function() {
    // Get today's date and time
    const now = new Date().getTime();
    
    // Find the distance between now and the countdown date
    const distance = countdownDate - now;
    
    // Time calculations for days, hours, minutes, and seconds
    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Display the result in the element with id="countdown"
    document.getElementById("countdown").innerHTML = days + "d " + hours + "h "
    + minutes + "m " + seconds + "s ";
    
    // If the countdown is finished, write some text
    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").style.display = "none";
        document.getElementById("message").style.display = "block";
    }
}, 1000);

// Function to handle fullscreen image display
function showFullscreenImage(src) {
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    const fullscreenImage = document.getElementById('fullscreenImage');
    fullscreenImage.src = src;
    fullscreenContainer.style.display = 'flex';
}

// Function to hide fullscreen image
function hideFullscreenImage() {
    const fullscreenContainer = document.getElementById('fullscreenContainer');
    fullscreenContainer.style.display = 'none';
}

// Add event listeners to images
document.querySelectorAll('.photo').forEach(photo => {
    photo.addEventListener('click', () => {
        showFullscreenImage(photo.src);
    });
});

// Add event listener to fullscreen container to hide on click
document.getElementById('fullscreenContainer').addEventListener('click', hideFullscreenImage);
