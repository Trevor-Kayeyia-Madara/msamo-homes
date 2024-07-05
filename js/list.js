function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const main = document.querySelector('main');
    sidebar.classList.toggle('active');
    main.classList.toggle('active');
}
document.addEventListener("DOMContentLoaded", function() {
    const tableBody = document.querySelector('tbody');

    function fetchProperties() {
        fetch('server/fetch_properties.php')
            .then(response => response.json())
            .then(data => {
                tableBody.innerHTML = ''; // Clear any existing rows
                data.forEach(property => {
                    const row = document.createElement('tr');
                    row.innerHTML = `
                        <td>${property.id}</td>
                        <td>${property.address}</td>
                        <td>${property.type}</td>
                        <td>${property.price}</td>
                        <td>
                            <button class='edit-btn' data-id='${property.id}'>Edit</button>
                            <button class='delete-btn' data-id='${property.id}'>Delete</button>
                        </td>
                    `;
                    tableBody.appendChild(row);
                });
            })
            .catch(error => console.error('Error fetching properties:', error));
    }

    fetchProperties(); // Fetch properties initially

    // Event listener for Edit button
    tableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('edit-btn')) {
            const id = event.target.getAttribute('data-id');
            // Example: Prompt for new values, you may use a form or other UI here
            const address = prompt("Enter new address:");
            const type = prompt("Enter new type:");
            const price = prompt("Enter new price:");
            
            // Perform PATCH request to update property
            fetch(`server/fetch_properties.php`, {
                method: 'PATCH',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded',
                },
                body: `id=${id}&address=${address}&type=${type}&price=${price}`
            })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                fetchProperties(); // Refresh table after update
            })
            .catch(error => console.error('Error updating property:', error));
        }
    });

    // Event listener for Delete button
    tableBody.addEventListener('click', function(event) {
        if (event.target.classList.contains('delete-btn')) {
            const id = event.target.getAttribute('data-id');
            
            // Confirm deletion
            if (confirm("Are you sure you want to delete this property?")) {
                // Perform DELETE request to delete property
                fetch(`server/fetch_properties.php?id=${id}`, {
                    method: 'DELETE'
                })
                .then(response => response.json())
                .then(data => {
                    console.log(data);
                    fetchProperties(); // Refresh table after deletion
                })
                .catch(error => console.error('Error deleting property:', error));
            }
        }
    });
});
