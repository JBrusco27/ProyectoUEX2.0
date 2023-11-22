<?php
include_once "../../app.php";
include_once "../../connect.php";
session_start();

$phone_user = $_POST['phoneUser'];
$correo_usuario = $_POST['email'];
$namelastname_user = $_POST['nameLastnameUser'];

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
}else{
    $sql_insertar = "UPDATE usuario SET Telefono_Usu = :telefono , Nombre_Usu = :nameLastname WHERE Correo_Usu = :correo";
    $stmt_insertar = $conn->prepare($sql_insertar);
    $stmt_insertar->bindParam(':correo', $correo_usuario);
    $stmt_insertar->bindParam(':nameLastname', $namelastname_user);
    $stmt_insertar->bindParam(':telefono', $phone_user, PDO::PARAM_STR);
    $stmt_insertar->execute();
    echo json_encode(['telefono_valido'=>$telefono_valido,'nombre_valido'=>$nombre_valido]);
    exit;
}


?>