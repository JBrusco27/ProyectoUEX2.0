<?php

$servername = "localhost"; // Dirección del servidor de la base de datos
$username = "id21055752_myuser"; // Nombre de usuario de la base de datos
$password = "Password1234_"; // Contraseña de la base de datos
$dbname = "id21055752_pe3uruguayexpress"; // Nombre de la base de datos

$conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
$conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

?>