<?php

$servername = "db4free.net:3306"; // Dirección del servidor de la base de datos
$username = "uruguayexpress"; // Nombre de usuario de la base de datos
$password = "Password12"; // Contraseña de la base de datos
$dbname = "uruguayexpress"; // Nombre de la base de datos

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
?>