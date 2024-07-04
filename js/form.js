function formatPhoneNumber(input) {
    const inputField = input.target;
    let formattedInputValue = inputField.value.replace(/\D/g, '');
    
    if (formattedInputValue.startsWith('254')) {
        formattedInputValue = formattedInputValue.slice(3);
    }

    const maxLength = 9;
    const finalInputValue = formattedInputValue.slice(0, maxLength);
    
    inputField.value = `254${finalInputValue}`;
}

// Function to handle form submission
function handleFormSubmission(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    let formData = new FormData(event.target);

    // Example: Log form data to console
    for (let pair of formData.entries()) {
        console.log(pair[0] + ': ' + pair[1]);
    }

    // Example: Redirect to dashboard.html after form submission
    window.location.href = 'dashboard.html'; // Replace with your actual redirect URL
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('buy').addEventListener('submit', handleFormSubmission);
});