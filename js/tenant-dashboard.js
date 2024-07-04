// JavaScript for handling form submission
document.getElementById('property-search-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Fetch form data
    var formData = new FormData(this);

    // Example: Log form data to console
    for (var pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    // Example: Redirect to tenant-payment.html
    // Replace with your actual redirection logic
    window.location.href = this.action;
});

// JavaScript for search button functionality (optional)
document.getElementById('search-button').addEventListener('click', function() {
    var searchLocation = document.getElementById('search-location').value;
    // Implement your search functionality here
    console.log('Searching for location:', searchLocation);
    // Example: Display search results or handle further actions
});

// Simulate loading process
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const loginForm = document.getElementById('tenant');
        
        // Fade out loader
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            // Fade in login form
            loginForm.style.display = 'flex';
            setTimeout(() => {
                loginForm.classList.add('show');
            }, 20); // Slight delay to trigger transition
        }, 500); // Match this with the transition duration of loader
    }, 1000); // 3 seconds delay for loading spinner
});