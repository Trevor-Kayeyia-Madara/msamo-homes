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
        loader.style.transition = 'opacity 0.25s'; // Reduced transition duration
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            // Fade in login form
            loginForm.style.display = 'flex';
            setTimeout(() => {
                loginForm.style.transition = 'opacity 0.25s'; // Reduced transition duration
                loginForm.classList.add('show');
            }, 10); // Slight delay to trigger transition
        }, 250); // Match this with the transition duration of loader
    }, 500); // Reduced delay for loading spinner
});
document.addEventListener('DOMContentLoaded', () => {
    fetch('./server/get-properties.php')
        .then(response => response.json())
        .then(properties => {
            const container = document.getElementById('properties-container');
            properties.forEach(property => {
                const card = document.createElement('div');
                card.className = 'property-card';
                card.innerHTML = `
                    <h3>${property.address}</h3>
                    <p>Type: ${property.type}</p>
                    <p>Price: $${property.price} per month</p>
                `;
                container.appendChild(card);
            });
        })
        .catch(error => console.error('Error fetching properties:', error));
});
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('property-search-form');
    const searchButton = document.getElementById('search-button');
    const propertiesContainer = document.getElementById('properties-container');

    // Function to fetch and display properties
    function fetchProperties() {
        fetch('./server/get-properties.php')
            .then(response => response.json())
            .then(properties => {
                displayProperties(properties);
            })
            .catch(error => console.error('Error fetching properties:', error));
    }

    // Function to display properties as cards
    function displayProperties(properties) {
        propertiesContainer.innerHTML = ''; // Clear previous content
        properties.forEach(property => {
            const card = document.createElement('div');
            card.className = 'property-card';
            card.innerHTML = `
                <h3>${property.address}</h3>
                <p>Type: ${property.type}</p>
                <p>Price: $${property.price} per month</p>
            `;
            propertiesContainer.appendChild(card);
        });
    }

    // Event listener for form submission (search)
    searchForm.addEventListener('submit', function(event) {
        event.preventDefault();
        const formData = new FormData(searchForm);
        const searchParams = new URLSearchParams(formData).toString();

        fetch(`./server/get-properties.php?${searchParams}`)
            .then(response => response.json())
            .then(properties => {
                displayProperties(properties);
            })
            .catch(error => console.error('Error searching properties:', error));
    });

    // Initial fetch of properties when the page loads
    fetchProperties();
});
