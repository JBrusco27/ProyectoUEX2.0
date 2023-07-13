<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "pe3uruguayexpress";

try 
{
    $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
    $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

    $correo_usuario = filter_var($_POST['formEmail'], FILTER_SANITIZE_EMAIL);
    $password_usuario = $_POST['formPswd'];

    // Obtener la contraseña encriptada almacenada en la base de datos
    $sql_obtener_contraseña = "SELECT Contraseña_Usu FROM usuario WHERE Correo_Usu = :correo";
    $stmt_obtener_contraseña = $conn->prepare($sql_obtener_contraseña);
    $stmt_obtener_contraseña->bindParam(':correo', $correo_usuario);
    $stmt_obtener_contraseña->execute();

    $resultado = $stmt_obtener_contraseña->fetch(PDO::FETCH_ASSOC);

    if($resultado) 
    {
        $contraseña_hash = $resultado['Contraseña_Usu'];

        // Verificar si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos.
        if(password_verify($password_usuario, $contraseña_hash)) 
        {
            echo "Inicio de sesión exitoso";
        } 
        else 
        {
            echo "Correo electrónico o contraseña incorrectos";
        }
    } 
    else 
    {
        echo "Correo electrónico no encontrado";
    }
} 
catch(PDOException $e) 
{
    echo "Error en la consulta: " . $e->getMessage();
    echo "Código de error: " . $e->getCode();
}
$conn = null;
?>