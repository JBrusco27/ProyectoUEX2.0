<?php

    // Verificar si existe la cookie con el nombre de usuario
    if(isset($_COOKIE['nombre_usuario'])) 
    {
        $nombre_usuario = $_COOKIE['nombre_usuario']; // Asignar el valor de la cookie a la variable $nombre_usuario
        $log = true; // Asignar el valor de la cookie a la variable $nombre_usuario
    } 
    else 
    {
        $nombre_usuario = "User"; // Valor por defecto si no se encuentra la cookie
        $log = false; // Asignar el valor de la cookie a la variable $nombre_usuario
    }

    echo json_encode(['log' => $log]);


?>