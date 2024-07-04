// Simulate loading process
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const loginForm = document.getElementById('login-form');
        
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

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'dashboard.html'; // Redirect to the  dashboard
});

function selectUserType(userType) {
    if (userType === 'Landlord' || userType === 'Property Owner') {
        window.location.href = 'signin.html'; // Navigate to login for Landlord or Property Owner
    } else if (userType === 'Tenant') {
        window.location.href = 'tenant.html'; // Navigate to tenant_dashboard.html for Tenant
    } else {
        alert(`Selected User Type: ${userType}`); // Default alert for other types (optional)
    }
}
