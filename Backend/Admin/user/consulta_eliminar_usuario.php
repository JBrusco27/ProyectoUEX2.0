<?php
include_once "../../app.php";
include_once "../../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $iduser = $_POST['email'];
    $tipouser = $_POST['tipo_user'];



    // Eliminar datos de la tabla 'medio_pago'
    $sql_delete_medio_pago = "
        DELETE FROM medio_pago
        WHERE ID_Reserva IN (
            SELECT reserva.ID_Reserva
            FROM reserva
            JOIN usuario ON reserva.Correo_Usu = usuario.Correo_Usu
            WHERE usuario.ID_Usu = :iduser AND usuario.ID_Rol = :tipo_user
        )
    ";

    $stmt_medio_pago = $conn->prepare($sql_delete_medio_pago);
    $stmt_medio_pago->bindParam(':iduser', $iduser, PDO::PARAM_INT);
    $stmt_medio_pago->bindParam(':tipo_user', $tipouser, PDO::PARAM_INT);

    // Eliminar datos de la tabla 'existe'
    $sql_delete_existe = "
        DELETE FROM existe
        WHERE ID_Reserva IN (
            SELECT reserva.ID_Reserva
            FROM reserva
            JOIN usuario ON reserva.Correo_Usu = usuario.Correo_Usu
            WHERE usuario.ID_Usu = :iduser AND usuario.ID_Rol = :tipo_user
        )
    ";

    $stmt_existe = $conn->prepare($sql_delete_existe);
    $stmt_existe->bindParam(':iduser', $iduser, PDO::PARAM_INT);
    $stmt_existe->bindParam(':tipo_user', $tipouser, PDO::PARAM_INT);

    // Eliminar datos de la tabla 'reserva'
    $sql_delete_reserva = "
        DELETE FROM reserva
        WHERE ID_Reserva IN (
            SELECT reserva.ID_Reserva
            FROM reserva
            JOIN usuario ON reserva.Correo_Usu = usuario.Correo_Usu
            WHERE usuario.ID_Usu = :iduser AND usuario.ID_Rol = :tipo_user
        )
    ";

    $stmt_reserva = $conn->prepare($sql_delete_reserva);
    $stmt_reserva->bindParam(':iduser', $iduser, PDO::PARAM_INT);
    $stmt_reserva->bindParam(':tipo_user', $tipouser, PDO::PARAM_INT);

    // Eliminar datos de la tabla 'usuario'
    $sql_delete_usuario = "DELETE FROM usuario WHERE ID_Usu = :iduser AND ID_Rol = :tipo_user";

    $stmt_usuario = $conn->prepare($sql_delete_usuario);
    $stmt_usuario->bindParam(':iduser', $iduser, PDO::PARAM_INT);
    $stmt_usuario->bindParam(':tipo_user', $tipouser, PDO::PARAM_INT);


    if($stmt_medio_pago->execute()){
        if($stmt_existe->execute()){
            if($stmt_reserva->execute()){
                if($stmt_usuario->execute()){
                    echo json_encode(true);
                }else{
                    echo json_encode(false);
                }
            }else{
                echo json_encode(false);
            }
        }else{
            echo json_encode(false);
        }
    }else{
        echo json_encode(false);
    }

}


?>