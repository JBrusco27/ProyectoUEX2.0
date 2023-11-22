<?php
include_once "../../app.php";
include_once "../../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $idReserva = $_POST['idReserva'];
    $estado = 'Cancelado';      

    $sql_update_estado = "UPDATE reserva SET Estado_Reserva = :estado WHERE ID_Reserva = :idreserva;";
    $stmt_update_estado = $conn->prepare($sql_update_estado);
    $stmt_update_estado->bindParam(":idreserva", $idReserva, PDO::PARAM_INT);
    $stmt_update_estado->bindParam(":estado", $estado, PDO::PARAM_STR);
        
    if($estado == 'Cancelado'){  
        if($stmt_update_estado->execute()){
            echo json_encode(true);
        }else{
            echo json_encode(false);
        }
    }else{
        echo json_encode(false);
    }    

}
?>