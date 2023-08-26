<?php
include_once "../connect.php";

try {
    // Obtener los valores del formulario de inicio de sesión
    $correo_usuario = $_POST['formEmail'];
    $password_usuario = $_POST['formPswd']; 
    $conf_password_usuario = $_POST['formConfPswd'];

    // Obtener la contraseña encriptada almacenada en la base de datos
    $sql_obtener_contraseña = "SELECT Contraseña_Usu, Nombre_Usu FROM usuario WHERE Correo_Usu = :correo";
    $stmt_obtener_contraseña = $conn->prepare($sql_obtener_contraseña);
    $stmt_obtener_contraseña->bindParam(':correo', $correo_usuario);
    $stmt_obtener_contraseña->execute();

    $resultado = $stmt_obtener_contraseña->fetch(PDO::FETCH_ASSOC);
    
    if ($resultado) {
        $contraseña_hash = $resultado['Contraseña_Usu'];
        $pswd_valid = true;
        $pswd_are_dif = true;
        if($conf_password_usuario == $password_usuario){
        
        // Verificar si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos.
        if (!password_verify($password_usuario, $contraseña_hash)) {

            setcookie('codigo_verif_reset', '', time() - 3600, '/');
            echo json_encode(['pswd_are_dif' => $pswd_are_dif, 'pswd_valid' => $pswd_valid]);
            $password_usuario_hashed = password_hash($password_usuario, PASSWORD_DEFAULT);

            // Se cambia la contraseña
            $sql_insertar = "UPDATE usuario SET Contraseña_Usu = :password WHERE Correo_Usu = :correo";
            $stmt_insertar = $conn->prepare($sql_insertar);
            $stmt_insertar->bindParam(':correo', $correo_usuario);
            $stmt_insertar->bindParam(':password', $password_usuario_hashed);
            $stmt_insertar->execute();
            exit; // Finalizar la ejecución del script
        } else {
            $pswd_are_dif = false;
            echo json_encode(['pswd_are_dif' => $pswd_are_dif, 'pswd_valid' => $pswd_valid]);
            exit; // Finalizar la ejecución del script
        }
    }else{
        $pswd_valid = false;
        echo json_encode(['pswd_are_dif' => $pswd_are_dif, 'pswd_valid' => $pswd_valid]);
        exit; // Finalizar la ejecución del script
    }
} else {
        $pswd_valid = false;
        $pswd_are_dif = false;
        echo json_encode(['pswd_are_dif' => $pswd_are_dif, 'pswd_valid' => $pswd_valid]);
        exit; // Finalizar la ejecución del script
    }
} catch (PDOException $e) {
    //echo "Error en la consulta: " . $e->getMessage();
    //echo "Código de error: " . $e->getCode();
}
$conn = null;
?>