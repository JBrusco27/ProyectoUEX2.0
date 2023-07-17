<?php

include_once "../connect.php";

try 
{  
    // Obtener los valores del formulario de registro
    $nombre_usuario = $_POST['formName'];
    $password_usuario = $_POST['formPswd'];
    $password_usuario_confirm = $_POST['formConfPswd'];
    $correo_usuario = filter_var($_POST['formEmail'], FILTER_SANITIZE_EMAIL);
    $telefono_usuario = filter_var($_POST['formPhone'], FILTER_SANITIZE_NUMBER_INT);

    // Encriptar la contraseña
    $password_usuario_hashed = password_hash($password_usuario, PASSWORD_DEFAULT);

    // Validación de nombre
    if(strlen($nombre_usuario) < 4 || strlen($nombre_usuario) > 40) 
    {
        //echo "El nombre debe tener entre 10 y 40 caracteres";
        exit;
    }
    // Validación de formato de correo electrónico
    if(!filter_var($correo_usuario, FILTER_VALIDATE_EMAIL)) 
    {
        //echo "Ingrese un correo electrónico válido";
        exit;
    }
    // Validación de número de teléfono
    $telefono_usuario = str_replace(" ", "", $telefono_usuario); // Eliminar guiones del número de teléfono

    if(!preg_match('/^[0-9]{9}$/', $telefono_usuario))
    {
        //echo "Ingrese un número de teléfono válido de 9 dígitos";
        exit;
    }
    // Validación de contraseña
    if(strlen($password_usuario) < 8 || strlen($password_usuario) > 30 ||
    !preg_match("/[!@#$%^&*()-_=+]/", $password_usuario) ||
    !preg_match("/[a-z]/", $password_usuario) ||
    !preg_match("/[A-Z]/", $password_usuario) ||
    !preg_match("/[0-9]/", $password_usuario)) 
    {
        //echo "La contraseña debe cumplir los siguientes requisitos:";
        //echo "- Tener entre 8 y 30 caracteres";
        //echo "- Contener al menos un carácter especial";
        //echo "- Contener al menos una letra minúscula";
        //echo "- Contener al menos una letra mayúscula";
        //echo "- Contener al menos un número";
        exit;
    }
    // Verificar si el correo electrónico ya existe en la base de datos
    $sql_verificar = "SELECT COUNT(*) AS count FROM usuario WHERE Correo_Usu = :correo";
    $stmt_verificar = $conn->prepare($sql_verificar);
    $stmt_verificar->bindParam(':correo', $correo_usuario);
    $stmt_verificar->execute();

    $resultado = $stmt_verificar->fetch(PDO::FETCH_ASSOC);

    if ($resultado['count'] > 0) {
        $email_exists = true;
        header('Content-Type: application/json');
        echo json_encode(['email_exists' => $email_exists]);
        exit;
    } else {
        $email_exists = false;
        header('Content-Type: application/json');
        echo json_encode(['email_exists' => $email_exists]);
    }


    // Si el correo electrónico no existe, realizar la inserción en la base de datos
    $sql_insertar = "INSERT INTO usuario (ID_Rol, Nombre_Usu, Contraseña_Usu, Correo_Usu, Telefono_Usu) VALUES (1, :nombre, :password, :correo, :telefono)";
    $stmt_insertar = $conn->prepare($sql_insertar);
    $stmt_insertar->bindParam(':nombre', $nombre_usuario);
    $stmt_insertar->bindParam(':password', $password_usuario_hashed);
    $stmt_insertar->bindParam(':correo', $correo_usuario);
    $stmt_insertar->bindParam(':telefono', $telefono_usuario, PDO::PARAM_STR);

    $stmt_insertar->execute();

    include "./consulta_sign_in.php";
} 
catch(PDOException $e) 
{
    //echo "Error en la consulta: " . $e->getMessage();
    //echo "Código de error: " . $e->getCode();
}
$conn = null;
?>