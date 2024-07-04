// Simulate loading process
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const loginForm = document.getElementById('dashboard-container');
        
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
document.getElementById('add-property').addEventListener('click', function() {
    // Handle click for Add Property
    console.log('Add Property clicked');
    // Navigate to property-form.html
    window.location.href = 'property-form.html';
});

document.getElementById('modify-property').addEventListener('click', function() {
    // Handle click for Modify Property
    console.log('Modify Property clicked');
    // Implement your logic here
    window.location.href = 'property.html'
});
