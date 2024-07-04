document.addEventListener('DOMContentLoaded', () => {
    const signupForm = document.getElementById('signup-form');
    signupForm.style.display = 'flex';
    signupForm.classList.add('show');
});

// Handle form submission
document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'login.html'; // Redirect to the landlord dashboard
});
