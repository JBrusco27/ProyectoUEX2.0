<?php
include_once "../../app.php";
include_once "../../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $idreserva = $_POST['idReserva'];

    $sql_delete_existe = "DELETE FROM `existe` WHERE ID_Reserva = :idreserva;";
    $stmt_existe = $conn->prepare($sql_delete_existe);
    $stmt_existe->bindParam(':idreserva', $idreserva, PDO::PARAM_INT);

    if ($stmt_existe->execute()) {

        $sql_delete_medio = "DELETE FROM `medio_pago` WHERE ID_Reserva = :idreserva;";
        $stmt_medio = $conn->prepare($sql_delete_medio);
        $stmt_medio->bindParam(':idreserva', $idreserva, PDO::PARAM_INT);

        if ($stmt_medio->execute()) {
            $sql_delete_reserva = "DELETE FROM `reserva` WHERE ID_Reserva = :idreserva;";
            $stmt_reserva = $conn->prepare($sql_delete_reserva);
            $stmt_reserva->bindParam(':idreserva', $idreserva, PDO::PARAM_INT);

            if($stmt_reserva->execute()){
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

}


?>