document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('login-form');
    loginForm.style.display = 'flex';
    loginForm.classList.add('show');
});

// Handle form submission
document.getElementById('loginForm').addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'dashboard.html'; // Redirect to the dashboard
});

function selectUserType(userType) {
    if (userType === 'Landlord' || userType === 'Property Owner') {
        window.location.href = 'login.html'; // Navigate to login for Landlord or Property Owner
    } else if (userType === 'Tenant') {
        window.location.href = 'tenant.html'; // Navigate to tenant_dashboard.html for Tenant
    } else {
        alert(`Selected User Type: ${userType}`); // Default alert for other types (optional)
    }
}
