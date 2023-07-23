<?php

    // Verificar si existe la cookie con el nombre de usuario
    if(isset($_COOKIE['nombre_usuario'])) 
    {
        $nombre_usuario = $_COOKIE['nombre_usuario']; // Asignar el valor de la cookie a la variable $nombre_usuario
    } 
    else 
    {
        $nombre_usuario = "Guest"; // Valor por defecto si no se encuentra la cookie
    }

    // Se guarda la cookie para mostrarla cuando se llame al archivo
    echo $nombre_usuario;


?>