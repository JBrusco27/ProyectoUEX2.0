<?php

    // Verificar si existe la cookie con el nombre de usuario
    if(isset($_COOKIE['nombre_usuario'])) 
    {
        $log = true;
    } 
    else 
    {
        $log = false;
    }

    echo json_encode(['log' => $log]);

?>