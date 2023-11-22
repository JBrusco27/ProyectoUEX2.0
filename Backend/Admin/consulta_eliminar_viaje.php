<?php
include_once "../app.php";
include_once "../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $idViaje = $_POST['idViaje'];

    // Elimina en la tabla 'trayecto'
    $sql_delete_trayecto = "DELETE FROM `medio_pago` WHERE ID_Reserva = (SELECT ID_Reserva FROM existe WHERE ID_Horario = :idviaje);";
    $stmt_trayecto = $conn->prepare($sql_delete_trayecto);
    $stmt_trayecto->bindParam(':idviaje', $idViaje, PDO::PARAM_INT);

    if ($stmt_trayecto->execute()) {

        // Elimina en la tabla 'pertenece_a'
        $sql_delete_pertenece = "DELETE FROM `reserva` WHERE ID_Reserva = (SELECT ID_Reserva FROM existe WHERE ID_Horario = :idViaje);";
        $stmt_pertenece = $conn->prepare($sql_delete_pertenece);
        $stmt_pertenece->bindParam(':idViaje', $idViaje, PDO::PARAM_INT);

        if($stmt_pertenece->execute()){

            // Elimina en la tabla 'pertenece_a'
            $sql_delete_linea = "DELETE FROM `existe` WHERE ID_Horario = :idViaje";
            $stmt_linea = $conn->prepare($sql_delete_linea);
            $stmt_linea->bindParam(':idViaje', $idViaje, PDO::PARAM_INT);


            if($stmt_linea->execute()){

                // Elimina en la tabla 'pertenece_a'
                $sql_delete_viaje = "DELETE FROM `pertenece_a` WHERE ID_Horario = :idViaje";
                $stmt_viaje = $conn->prepare($sql_delete_viaje);
                $stmt_viaje->bindParam(':idViaje', $idViaje, PDO::PARAM_INT);

                if($stmt_viaje->execute()){
                    echo json_encode(true);
                }else{
                    echo json_encode(false);
                    exit; // Termina el script
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