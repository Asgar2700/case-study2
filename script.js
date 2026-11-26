
// Select all Explore buttons
const exploreButtons = document.querySelectorAll(".card a");

// Add click event to each button
exploreButtons.forEach(function(button) {

    button.addEventListener("click", function(event) {

        // Prevent default link behavior
        event.preventDefault();

        // Get service name
        const serviceName = this.parentElement.querySelector("h3").textContent;

        // Display service message
        alert("Welcome to " + serviceName + " Services!");

    });

});
