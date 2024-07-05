<?php
$hostname = "localhost";
$username = "invodtec_msamohomes";
$password = "xo5[~&yzIK32";
$dbname = "invodtec_property_db";

// Establish database connection
$conn = new mysqli($hostname, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

// Fetch data from properties table based on search parameters
$sql = "SELECT * FROM properties";
$whereClause = [];

if (!empty($_GET['search-location'])) {
    $location = $conn->real_escape_string($_GET['search-location']);
    $whereClause[] = "address LIKE '%$location%'";
}

if (!empty($_GET['price'])) {
    $price = floatval($_GET['price']);
    $whereClause[] = "price <= $price";
}

// Additional conditions can be added for other filters (type, etc.)

if (!empty($whereClause)) {
    $sql .= " WHERE " . implode(" AND ", $whereClause);
}

$result = $conn->query($sql);

$properties = [];

if ($result->num_rows > 0) {
    while($row = $result->fetch_assoc()) {
        $properties[] = $row;
    }
}

$conn->close();

header('Content-Type: application/json');
echo json_encode($properties);
?>