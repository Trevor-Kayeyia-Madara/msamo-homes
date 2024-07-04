document.getElementById('add-property').addEventListener('click', function(event) {
    // Prevent default link behavior
    event.preventDefault();
    
    // Handle click for Add Property
    console.log('Add Property clicked');
    
    // Navigate to property-form.html
    window.location.href = 'property-form.html';
});

document.getElementById('modify-property').addEventListener('click', function(event) {
    // Prevent default link behavior
    event.preventDefault();
    
    // Handle click for Modify Property
    console.log('Modify Property clicked');
    
    // Navigate to property.html
    window.location.href = 'property.html';
});
// Simulate loading process
window.addEventListener('load', () => {
    setTimeout(() => {
        const loader = document.getElementById('loader');
        const loginForm = document.getElementById('dashboard-container');
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

