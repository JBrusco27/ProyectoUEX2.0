<?php
include_once "../app.php";
include_once "../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $idLinea = $_POST['idLineaDelete'];

    // Elimina en la tabla 'trayecto'
    $sql_delete_trayecto = "DELETE FROM `trayecto` WHERE ID_Linea = :idLinea;";
    $stmt_trayecto = $conn->prepare($sql_delete_trayecto);
    $stmt_trayecto->bindParam(':idLinea', $idLinea, PDO::PARAM_INT);

    if ($stmt_trayecto->execute()) {

        // Elimina en la tabla 'pertenece_a'
        $sql_delete_pertenece = "DELETE FROM `pertenece_a` WHERE ID_Linea = :idLinea;";
        $stmt_pertenece = $conn->prepare($sql_delete_pertenece);
        $stmt_pertenece->bindParam(':idLinea', $idLinea, PDO::PARAM_INT);

        if($stmt_pertenece->execute()){

            // Elimina en la tabla 'pertenece_a'
            $sql_delete_linea = "DELETE FROM `linea` WHERE ID_Linea = :idLinea;";
            $stmt_linea = $conn->prepare($sql_delete_linea);
            $stmt_linea->bindParam(':idLinea', $idLinea, PDO::PARAM_INT);

            if($stmt_linea->execute()){
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
}


?>