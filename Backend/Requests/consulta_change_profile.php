<?php
include_once "../app.php";
include_once "../connect.php";
session_start();

$phone_user = $_POST['phoneUser'];
$correo_usuario = $_SESSION['email_usuario'];
$namelastname_user = $_POST['nameLastnameUser'];

// Obtener la contraseña encriptada almacenada en la base de datos
$sql_obtener_contraseña = "SELECT Contraseña_Usu, Nombre_Usu, Correo_Usu , Telefono_Usu FROM usuario WHERE Correo_Usu = :correo";
$stmt_obtener_contraseña = $conn->prepare($sql_obtener_contraseña);
$stmt_obtener_contraseña->bindParam(':correo', $correo_usuario);
$stmt_obtener_contraseña->execute();

$resultado = $stmt_obtener_contraseña->fetch(PDO::FETCH_ASSOC);
$contraseña_no_hash = $resultado['Contraseña_Usu'];

$telefono_valido = false;
$nombre_valido = false;

if(preg_match('/^[A-Za-záéíóúÁÉÍÓÚ]{2,20}\s[A-Za-záéíóúÁÉÍÓÚ]{2,20}$/',$namelastname_user)){
    $nombre_valido = true;
}
if(preg_match('/^[0-9]{9}$/', $phone_user)){
    $telefono_valido = true;
}
if(!$telefono_valido || !$nombre_valido){
    echo json_encode(['telefono_valido'=>$telefono_valido,'nombre_valido'=>$nombre_valido]);
    exit;
}

if(isset($_SESSION['nombre_usuario'])){
    if($phone_user != $_SESSION['telefono_usuario'] && $namelastname_user != $_SESSION['nombre_usuario']){
        $sql_insertar = "UPDATE usuario SET Telefono_Usu = :telefono , Nombre_Usu = :nameLastname WHERE Correo_Usu = :correo";
        $stmt_insertar = $conn->prepare($sql_insertar);
        $stmt_insertar->bindParam(':correo', $correo_usuario);
        $stmt_insertar->bindParam(':nameLastname', $namelastname_user);
        $stmt_insertar->bindParam(':telefono', $phone_user, PDO::PARAM_STR);
        $stmt_insertar->execute();
        $_SESSION['telefono_usuario'] = $phone_user;
        $_SESSION['nombre_usuario'] = $namelastname_user;
        echo json_encode(['telefono_valido'=>$telefono_valido,'nombre_valido'=>$nombre_valido]);
        exit;
    }else if($phone_user != $_SESSION['telefono_usuario'] && $namelastname_user == $_SESSION['nombre_usuario']){
        $sql_insertar = "UPDATE usuario SET Telefono_Usu = :telefono  WHERE Correo_Usu = :correo";
        $stmt_insertar = $conn->prepare($sql_insertar);
        $stmt_insertar->bindParam(':correo', $correo_usuario);
        $stmt_insertar->bindParam(':telefono', $phone_user, PDO::PARAM_STR);
        $stmt_insertar->execute();
        $_SESSION['telefono_usuario'] = $phone_user;
        echo json_encode(['telefono_valido'=>$telefono_valido,'nombre_valido'=>$nombre_valido]);
        exit;
    }else if($phone_user == $_SESSION['telefono_usuario'] && $namelastname_user != $_SESSION['nombre_usuario']){
        $sql_insertar = "UPDATE usuario SET Nombre_Usu = :nameLastname  WHERE Correo_Usu = :correo";
        $stmt_insertar = $conn->prepare($sql_insertar);
        $stmt_insertar->bindParam(':correo', $correo_usuario);
        $stmt_insertar->bindParam(':nameLastname', $namelastname_user, PDO::PARAM_STR);
        $stmt_insertar->execute();
        $_SESSION['nombre_usuario'] = $namelastname_user;
        echo json_encode(['telefono_valido'=>$telefono_valido,'nombre_valido'=>$nombre_valido]);
        exit;
    }
}

$conn = null;

?>