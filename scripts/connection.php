<?php
$host = getenv('IP');
$username = 'someuser';
$password = 'somepassword';
$dbname = 'bugmedb';

$conn = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8mb4", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

function closeConnection($conn) {
    $conn = null;
}

function query( $conn, $query, $many=false) {
    $stmt = $conn->query($query);
    if ( many ) {
        return $stmt->fetchAll(PDO::FETCH_ASSOC);
    } else {
        return $stmt->fetch();
    }
}
?>