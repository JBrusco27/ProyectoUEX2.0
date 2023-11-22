<?php
include_once "../app.php";
include_once "../connect.php";

try {
    // Obtener los valores del formulario de inicio de sesión
    $correo_usuario = filter_var($_POST['formEmail'], FILTER_SANITIZE_EMAIL); // Filtrar y sanitizar el correo electrónico
    $password_usuario = $_POST['formPswd']; // Obtener la contraseña sin procesar

    // Obtener la contraseña encriptada almacenada en la base de datos
    $sql_obtener_contraseña = "SELECT Contraseña_Usu, Nombre_Usu, Correo_Usu , Telefono_Usu, ID_Rol FROM usuario WHERE Correo_Usu = :correo";
    $stmt_obtener_contraseña = $conn->prepare($sql_obtener_contraseña);
    $stmt_obtener_contraseña->bindParam(':correo', $correo_usuario);
    $stmt_obtener_contraseña->execute();

    $resultado = $stmt_obtener_contraseña->fetch(PDO::FETCH_ASSOC);

    if ($resultado) {
        $contraseña_hash = $resultado['Contraseña_Usu'];

        // Verificar si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos.
        if (password_verify($password_usuario, $contraseña_hash)) {
            $pswd_valid = true;
            $tipo_usuario = $resultado['ID_Rol']; // Obtener el nombre de usuario desde la base de datos
            $telefono_usuario = $resultado['Telefono_Usu']; // Obtener el nombre de usuario desde la base de datos
            $nombre_usuario =$resultado['Nombre_Usu']; // Obtener el nombre de usuario desde la base de datos
            $email_usuario = $resultado['Correo_Usu']; // Obtener el email de usuario desde la base de datos
            session_start();
            setcookie('jk5KJv34nm4bj3', $tipo_usuario, strtotime('+10 years'), '/', false, true);
            $_SESSION['tipo_usuario'] = $tipo_usuario;
            $_SESSION['telefono_usuario'] = $telefono_usuario;
            $_SESSION['email_usuario'] = $email_usuario;
            $_SESSION['nombre_usuario'] = $nombre_usuario;
            echo json_encode($pswd_valid);
            exit; // Finalizar la ejecución del script
        } else {
            $pswd_valid = false;
            echo json_encode($pswd_valid);
            exit; // Finalizar la ejecución del script
        }
    } else {
        $pswd_valid = false;
        echo json_encode($pswd_valid);
        exit; // Finalizar la ejecución del script
    }
} catch (PDOException $e) {
    //echo "Error en la consulta: " . $e->getMessage();
    //echo "Código de error: " . $e->getCode();
}
$conn = null;
?>