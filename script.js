function openPopup() {
    document.getElementById("contactPopup").style.display = "block"; // Display the popup
}

function closePopup() {
    document.getElementById("contactPopup").style.display = "none"; // Hide the popup
}

document.addEventListener("DOMContentLoaded", function() {
    var aboutMeLink = document.querySelector(".about-me");
    var contactLink = document.querySelector(".contact-link");

    aboutMeLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        openPopup(); // Open the popup when the "About Me" link is clicked
    });

    contactLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        openPopup(); // Open the same popup when the "Contact" link is clicked
    });
});

// JavaScript code to control the video loop (optional)
document.addEventListener("DOMContentLoaded", function() {
    var video = document.querySelector(".video-bg");
    video.play(); // Start playing the video
    video.loop = true; // Set the video to loop continuously
});
