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

// SQL query to count listed properties and sum remaining tokens
$sql = "SELECT 
            COUNT(p.id) AS listed_properties_count,
            SUM(s.remaining_tokens) AS remaining_tokens_sum
        FROM 
            properties p
        INNER JOIN 
            summary s ON 1=1";

$result = $conn->query($sql);

if ($result->num_rows > 0) {
    // Fetch result as associative array
    $row = $result->fetch_assoc();
    $listedPropertiesCount = $row['listed_properties_count'];
    $remainingTokensSum = $row['remaining_tokens_sum'];
} else {
    $listedPropertiesCount = 0;
    $remainingTokensSum = 0;
}

$conn->close();
?>