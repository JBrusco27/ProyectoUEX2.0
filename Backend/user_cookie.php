<?php
session_start();
    // Verificar si existe la cookie con el nombre de usuario
    if(isset($_SESSION['nombre_usuario'])) 
    {
        $nombre_usuario = $_SESSION['nombre_usuario']; // Asignar el valor de la cookie a la variable $nombre_usuario
        $email_usuario = $_SESSION['email_usuario']; // Asignar el valor de la cookie a la variable $nombre_usuario
        $phone_usuario = $_SESSION['telefono_usuario']; // Asignar el valor de la cookie a la variable $nombre_usuario
    } 
    else 
    {
        $nombre_usuario = "Anonimo"; // Valor por defecto si no se encuentra la cookie
        $email_usuario = false; // Asignar el valor de la cookie a la variable $nombre_usuario
        $phone_usuario = false; // Asignar el valor de la cookie a la variable $nombre_usuario
    }
    
    // Se muestra el nombre del usuario
    echo json_encode(['nombre_usuario'=>$nombre_usuario, 'email_usuario'=>$email_usuario, 'phone_usuario'=>$phone_usuario]);


?>