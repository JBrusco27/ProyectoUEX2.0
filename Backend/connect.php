<?php



$servername = $_ENV['DB_HOST']; // Dirección del servidor de la base de datos
$username = $_ENV['DB_USER']; // Nombre de usuario de la base de datos
$password = $_ENV['DB_PASSWORD']; // Contraseña de la base de datos
$dbname = $_ENV['DB_NAME']; // Nombre de la base de datos

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>