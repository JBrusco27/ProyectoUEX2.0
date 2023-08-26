<?php
    session_start();
    // Verificar si existe la cookie con el nombre de usuario
    if(isset($_SESSION['nombre_usuario'])) 
    {
        $log = true;// El usuario esta logeado
    } 
    else 
    {
        $log = false;// El usuario no esta logeado
    }

    echo json_encode(['log' => $log]);
?>