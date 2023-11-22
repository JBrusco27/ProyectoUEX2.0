<?php
include_once "../app.php";
include_once "../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Inicializa un array para almacenar los datos de los usuarios
    $usuarios = [];

    // Realiza la consulta SELECT en la tabla "usuario" para obtener todos los datos de los usuarios
    $sql_select_usuario = "SELECT * FROM usuario WHERE ID_Rol = 2";
    $stmt_usuario = $conn->prepare($sql_select_usuario);
    $stmt_usuario->execute();

    while ($usuario = $stmt_usuario->fetch(PDO::FETCH_ASSOC)) {
        // Agrega los datos del usuario al array
        $usuarioData = [
            'nombreApellido' => $usuario['Nombre_Usu'],
            'correo' => $usuario['Correo_Usu'],
            'telefono' => $usuario['Telefono_Usu'],
            'idUsuario' => $usuario['ID_Usu'],
        ];

    // Agrega los datos del usuario (incluyendo las reservas) al array principal
    $usuarios[] = $usuarioData;


    }

    // Enviar los datos de los usuarios en formato JSON
    echo json_encode($usuarios);
} else {
    $response = array("success" => false, "message" => "Acceso no permitido");
    echo json_encode($response);
}
?>
