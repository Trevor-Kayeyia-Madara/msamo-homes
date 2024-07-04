// Simulate loading process
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const loginForm = document.getElementById('signup-form');
        
        // Fade out loader
        loader.style.opacity = '0';
        setTimeout(() => {
            loader.style.display = 'none';
            // Fade in login form
            loginForm.style.display = 'flex';
            setTimeout(() => {
                loginForm.classList.add('show');
            }, 50); // Slight delay to trigger transition
        }, 1000); // Match this with the transition duration of loader
    }, 3000); // 3 seconds delay for loading spinner
});
document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'signin.html'; // Redirect to the landlord dashboard
});
