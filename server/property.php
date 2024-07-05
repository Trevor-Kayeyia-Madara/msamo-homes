<?php
$hostname = "localhost"; // your server name
$username = "root"; // your database username
$password = "RX3cttemQk5NVHU8"; // your database password
$dbname = "property_db"; // your database name

// Create connection
$conn = new mysqli($hostname, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Get the form data
$address = $_POST['address'];
$type = $_POST['type'];
$price = $_POST['price'];

// Prepare and bind
$stmt = $conn->prepare("INSERT INTO properties (address, type, price) VALUES (?, ?, ?)");
$stmt->bind_param("ssi", $address, $type, $price);

// Execute the statement and check if it was successful
if ($stmt->execute()) {
    // Redirect to the dashboard after successful insertion
    header("Location: /dashboard.html");
    exit();
} else {
    echo "Error: " . $stmt->error;
}

// Close the connection
$stmt->close();
$conn->close();
?>
