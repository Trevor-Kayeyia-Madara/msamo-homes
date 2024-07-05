<?php
$hostname = "localhost";
$username = "invodtec_msamohomes";
$password = "xo5[~&yzIK32";
$dbname = "invodtec_property_db";

header('Content-Type: application/json');

// Create connection
$conn = new mysqli($hostname, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die(json_encode(['error' => 'Connection failed: ' . $conn->connect_error]));
}

// Fetch data from properties table
$sql = "SELECT * FROM properties";
$result = $conn->query($sql);

$properties = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $properties[] = $row;
    }
} 

$conn->close();

echo json_encode($properties);
?>
