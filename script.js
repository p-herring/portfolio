function openPopup() {
    document.getElementById("contactPopup").style.display = "block"; // Display the popup
}

function closePopup() {
    document.getElementById("contactPopup").style.display = "none"; // Hide the popup
}

document.addEventListener("DOMContentLoaded", function() {
    var aboutMeLink = document.querySelector(".about-me");
    aboutMeLink.addEventListener("click", function(event) {
        event.preventDefault(); // Prevent default link behavior
        openPopup(); // Open the popup when the link is clicked
    });
});
