function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    sidebar.classList.toggle('active');
    main.classList.toggle('active');
}
// Listen for form submission
document.getElementById('propertyForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Prepare form data
    const formData = new FormData(this);

    // Send form data via AJAX (assuming using fetch API)
    fetch('server/property.php', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        // Assuming data.success is true if insertion was successful
        if (data.success) {
            // Increment listed properties count in dashboard
            incrementListedProperties();
        } else {
            console.error('Error adding property');
        }
    })
    .catch(error => console.error('Error:', error));
});
$(document).ready(function() {
    // Function to fetch data from dashboard.php using AJAX
    function fetchData() {
        $.ajax({
            url: 'server/dashboard.php', // Adjust path as needed
            type: 'GET',
            dataType: 'json',
            success: function(data) {
                // Update HTML elements with fetched data
                $('#listed-count').text(data.listedPropertiesCount);
                $('#remaining-tokens').text(data.remainingTokensSum);
            },
            error: function(xhr, status, error) {
                console.error('Error fetching data:', error);
            }
        });
    }

    // Initial fetch on page load
    fetchData();

    // Optionally, set interval to refresh data periodically
    setInterval(fetchData, 5000); // Refresh every 5 seconds (adjust as needed)
});