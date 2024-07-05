<?php
$hostname = "localhost";
$username = "root";
$password = "RX3cttemQk5NVHU8";
$dbname = "property_db";

// Create connection
$conn = new mysqli($hostname, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
// Handle PATCH request for editing a property
if ($_SERVER['REQUEST_METHOD'] === 'PATCH') {
    parse_str(file_get_contents("php://input"), $patchVars);
    $id = $patchVars['id'];
    $address = $patchVars['address'];
    $type = $patchVars['type'];
    $price = $patchVars['price'];

    $sql = "UPDATE properties SET address='$address', type='$type', price=$price WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Property updated successfully']);
    } else {
        echo json_encode(['error' => 'Error updating property: ' . $conn->error]);
    }
}

// Handle DELETE request for deleting a property
if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    $id = $_GET['id'];

    $sql = "DELETE FROM properties WHERE id=$id";

    if ($conn->query($sql) === TRUE) {
        echo json_encode(['message' => 'Property deleted successfully']);
    } else {
        echo json_encode(['error' => 'Error deleting property: ' . $conn->error]);
    }
}
// Fetch data from properties table
$sql = "SELECT * FROM properties";
$result = $conn->query($sql);

$properties = [];

if ($result->num_rows > 0) {
    // Output data of each row
    while($row = $result->fetch_assoc()) {
        $properties[] = $row;
    }
} 

$conn->close();

header('Content-Type: application/json');
echo json_encode($properties);
?>
