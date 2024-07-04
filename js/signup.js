// Simulate loading process
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const loginForm = document.getElementById('signup-form');

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

document.getElementById('signupForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'signin.html'; // Redirect to the landlord dashboard
});
