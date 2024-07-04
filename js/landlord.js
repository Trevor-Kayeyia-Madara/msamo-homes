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
