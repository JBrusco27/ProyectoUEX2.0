<?php
include_once "../../app.php";
include_once "../../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {

    $idHorario = $_POST['idHorario'];
    $idReserva = $_POST['idReserva'];
    $asiento = $_POST['asiento'];
    $estado = $_POST['estado'];


    $sqlAsientos = "SELECT Num_Asiento FROM existe WHERE ID_Horario = :idhorario AND Num_Asiento = :asiento";
    $stmt_asientos = $conn->prepare($sqlAsientos);
    $stmt_asientos->bindParam(":idhorario", $idHorario, PDO::PARAM_INT);
    $stmt_asientos->bindParam(":asiento", $asiento, PDO::PARAM_INT);
    $stmt_asientos->execute();
    $results_asientos = $stmt_asientos->fetch(PDO::FETCH_ASSOC);

    $sql_update_estado = "UPDATE reserva SET Estado_Reserva = :estado WHERE ID_Reserva = :idreserva;";
    $stmt_update_estado = $conn->prepare($sql_update_estado);
    $stmt_update_estado->bindParam(":idreserva", $idReserva, PDO::PARAM_INT);
    $stmt_update_estado->bindParam(":estado", $estado, PDO::PARAM_STR);

    $devolEstado = 0;
    $devolAsientos = 0;
        
    if($estado == 'Pendiente' || $estado == 'Cancelado' || $estado == 'Confirmado' ){  
        if($stmt_update_estado->execute()){
            $devolEstado = 1;
        }else{
            $devolEstado = 0;
        }
    }else{
        $devolEstado = 0;
    }

    if(!$results_asientos){

        $sql_update_asiento = "UPDATE existe SET Num_Asiento = :asiento WHERE ID_Reserva = :idreserva; ";
        $stmt_update_asiento = $conn->prepare($sql_update_asiento);
        $stmt_update_asiento->bindParam(":idreserva", $idReserva, PDO::PARAM_INT);
        $stmt_update_asiento->bindParam(":asiento", $asiento, PDO::PARAM_INT);

        if ($stmt_update_asiento->execute()) {
            $devolAsientos = 1;
        }else{
            $devolAsientos = 0;
        }

    }else{
        $devolAsientos = 2;
    }

    echo json_encode($devolAsientos . $devolEstado);
    

}
?>