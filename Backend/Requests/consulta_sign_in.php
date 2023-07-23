<?php
include_once "../connect.php";

try {
    // Obtener los valores del formulario de inicio de sesión
    $correo_usuario = filter_var($_POST['formEmail'], FILTER_SANITIZE_EMAIL); // Filtrar y sanitizar el correo electrónico
    $password_usuario = $_POST['formPswd']; // Obtener la contraseña sin procesar

    // Obtener la contraseña encriptada almacenada en la base de datos
    $sql_obtener_contraseña = "SELECT Contraseña_Usu, Nombre_Usu FROM usuario WHERE Correo_Usu = :correo";
    $stmt_obtener_contraseña = $conn->prepare($sql_obtener_contraseña);
    $stmt_obtener_contraseña->bindParam(':correo', $correo_usuario);
    $stmt_obtener_contraseña->execute();

    $resultado = $stmt_obtener_contraseña->fetch(PDO::FETCH_ASSOC);

    if ($resultado) {
        $contraseña_hash = $resultado['Contraseña_Usu'];

        // Verificar si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos.
        if (password_verify($password_usuario, $contraseña_hash)) {
            $nombre_usuario = $resultado['Nombre_Usu']; // Obtener el nombre de usuario desde la base de datos
            $expiry = time() + (30 * 24 * 60 * 60); // Calcula la fecha y hora de expiración en 1 mes (30 días)
            setcookie('nombre_usuario', $nombre_usuario, $expiry, '/');
            header("Location: /index.php"); // Redirigir al usuario a la página de inicio
            exit; // Finalizar la ejecución del script
        } else {
            header("Location: /Frontend/Account/LogIn/logIn.php");
            exit; // Finalizar la ejecución del script
            $pswd_valid = false;
            echo json_encode($pswd_valid);
            // Solucion provisoria
        }
    } else {
        // Solucion provisoria
        header("Location: /Frontend/Account/LogIn/logIn.php");
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