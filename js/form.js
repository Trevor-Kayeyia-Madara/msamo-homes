// Function to update areas dropdown based on selected city
function updateAreas() {
    var citySelect = document.getElementById('city');
    var areaSelect = document.getElementById('area');
    var city = citySelect.value;

    // Clear existing options
    areaSelect.innerHTML = '';

    // Populate areas based on selected city
    switch (city) {
        case 'Nairobi':
            addOptions(areaSelect, ['Bahati, Nairobi', 'Buruburu', 'Dagoretti', /* Add other Nairobi areas */ ]);
            break;
        case 'Mombasa':
            addOptions(areaSelect, ['Mvita', 'Nyali', 'Changamwe', 'Jomvu', 'Kisauni', 'Likoni']);
            break;
        case 'Kisumu':
            addOptions(areaSelect, ['Mamboleo', 'Nyando', 'Bandani', 'Kisumu Central', 'Kondele', 'Lolwe Estate', 'Manyatta', 'Milimani', 'Muhoroni']);
            break;
        case 'Nakuru':
            addOptions(areaSelect, ['Naivasha', 'Molo', 'Gilgil', 'Njoro', 'Mai Mahiu', 'Subukia', 'Dundori', 'Salgaa', 'Mau Narok', 'Bahati', 'Rongai', 'Olenguruone']);
            break;
        case 'Kwale':
            addOptions(areaSelect, ['Gombato Bongwe', 'Ukunda', 'Kinondo', 'Ramisi', 'Pongwe', 'Kikoneni', 'Dzombo', 'Vanga', 'Mwereni', 'Tsimba Golini', 'Waa', 'Tiwi', 'Kubo South', 'Mkongani', 'Ndavaya', 'Puma', 'Kinango', 'Chengoni/Samburu', 'Mackinon Road', 'Mwavumbo', 'Kasemeni']);
            break;
        case 'Machakos':
            addOptions(areaSelect, ['Machakos Town', 'Mavoko', 'Masinga', 'Yatta', 'Kangundo', 'Kathiani', 'Matungulu', 'Mwala']);
            break;
        default:
            addOptions(areaSelect, []);
            break;
    }
}

// Function to add options to a dropdown
function addOptions(selectElement, options) {
    options.forEach(function(option) {
        var optionElement = document.createElement('option');
        optionElement.textContent = option;
        optionElement.value = option;
        selectElement.appendChild(optionElement);
    });
}

// Initialize areas dropdown based on initial city selection
updateAreas();

// Form submission handling
document.getElementById('property-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
    window.location.href = 'dashboard.html'; // Redirect to the landlord dashboard
});
