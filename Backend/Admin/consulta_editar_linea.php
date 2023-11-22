<?php
include_once "../app.php";
include_once "../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombreLinea = $_POST['nomLineaUpdate'];
    $origenLinea = $_POST['origenLineaUpdate'];
    $destinoLinea = $_POST['destinoLineaUpdate'];
    $idLinea = $_POST['idLineaUpdate'];
    $tramoDatosUpdate = json_decode($_POST['tramoDatosUpdate'], true);
    $trayectoUpdate = json_decode($_POST['trayectoLinea'], true);

    // Comienza una transacción
    $conn->beginTransaction();

    // Actualiza la tabla 'linea'
    $sql_update_linea = "UPDATE linea SET Num_Linea = ?, Origen_Linea = ?, Destino_Linea = ? WHERE ID_Linea = ?";
    $stmt_linea = $conn->prepare($sql_update_linea);
    $stmt_linea->bindParam(1, $nombreLinea, PDO::PARAM_STR);
    $stmt_linea->bindParam(2, $origenLinea, PDO::PARAM_STR);
    $stmt_linea->bindParam(3, $destinoLinea, PDO::PARAM_STR);
    $stmt_linea->bindParam(4, $idLinea, PDO::PARAM_INT);

    if (!$stmt_linea->execute()) {
        // Si hay un error en la actualización de la línea, revierte la transacción
        $conn->rollBack();
        $response = array("success" => false, "message" => "Error al actualizar línea");
        echo json_encode($response);
        exit; // Termina el script
    }

    // Actualiza la tabla 'tramo' y 'trayecto' utilizando bucles para múltiples pares origen-destino
    try {
        $numero_del_tramo = 1;
        $idTra = null;

        // Luego, elimina la tupla en trayecto con el ID_Linea existente
        $sql_delete_trayecto = "DELETE FROM trayecto WHERE ID_Linea = ?";
        $stmt_delete_trayecto = $conn->prepare($sql_delete_trayecto);
        $stmt_delete_trayecto->bindParam(1, $idLinea, PDO::PARAM_INT);
        $stmt_delete_trayecto->execute();


        // Inserta nuevos registros en la tabla tramo
        foreach ($trayectoUpdate as $tramo) {
            $origenTramo = $tramo[0];
            $destinoTramo = $tramo[1];

            // Consulta para obtener el último valor de ID_Tra
            $sql_last_id = "SELECT MAX(ID_Tra) AS last_id FROM `tramo`";
            $stmt_last_id = $conn->prepare($sql_last_id);
            $stmt_last_id->execute();
            $row = $stmt_last_id->fetch(PDO::FETCH_ASSOC);
            $tramo_last_id = $row['last_id'];
            
            // Incrementa el último valor de ID_Tra en uno
            $new_id_tramo = $tramo_last_id + 1;
    
            // Insertar datos en la tabla "tramo"
            $sql_insert_tramo = "INSERT INTO tramo (ID_Tra, ID_Parada_Origen, ID_Parada_Destino, Tiempo_Tra, Distancia_Tra, Comentario_Tra, Tipo_Tra) VALUES (
                ?,
                (SELECT ID_Parada FROM parada WHERE Nombre_Parada = ?),
                (SELECT ID_Parada FROM parada WHERE Nombre_Parada = ?),
                ?,
                ?,
                ?,
                ?
            )";
            $stmt_insert_tramo = $conn->prepare($sql_insert_tramo);
            $stmt_insert_tramo->bindParam(1, $new_id_tramo, PDO::PARAM_INT);
            $stmt_insert_tramo->bindParam(2, $origenTramo, PDO::PARAM_STR);
            $stmt_insert_tramo->bindParam(3, $destinoTramo, PDO::PARAM_STR);

            $stmt_insert_tramo->bindParam(4, $tramoDatosUpdate[$numero_del_tramo - 1][1], PDO::PARAM_STR);
            $stmt_insert_tramo->bindParam(5, $tramoDatosUpdate[$numero_del_tramo - 1][0], PDO::PARAM_STR);
            $stmt_insert_tramo->bindParam(6, $tramoDatosUpdate[$numero_del_tramo - 1][2], PDO::PARAM_STR);
            $stmt_insert_tramo->bindParam(7, $tramoDatosUpdate[$numero_del_tramo - 1][3], PDO::PARAM_STR);
            $stmt_insert_tramo->execute();

            $idTra = $conn->lastInsertId();


            // Consulta para obtener el último valor de ID_Trayecto
            $sql_last_id = "SELECT MAX(ID_Trayecto) AS last_id FROM `trayecto`";
            $stmt_last_id = $conn->prepare($sql_last_id);
            $stmt_last_id->execute();
            $row = $stmt_last_id->fetch(PDO::FETCH_ASSOC);
            $trayecto_last_id = $row['last_id'];

            // Nuevo valor para ID_Trayecto
            $new_id_trayecto = $trayecto_last_id + 1;

            // Insertar datos en la tabla "trayecto"
            $sql_insert_trayecto = "INSERT INTO trayecto (ID_Linea, ID_Tra, Orden_Tramo, ID_Trayecto, ID_Parada_Origen, ID_Parada_Destino) VALUES (?, ?, ?, ?, (SELECT ID_Parada FROM parada WHERE Nombre_Parada = ?), (SELECT ID_Parada FROM parada WHERE Nombre_Parada = ?))";
            $stmt_trayecto = $conn->prepare($sql_insert_trayecto);
            $stmt_trayecto->bindParam(1, $idLinea, PDO::PARAM_INT);
            $stmt_trayecto->bindParam(2, $new_id_tramo, PDO::PARAM_INT);
            $stmt_trayecto->bindParam(3, $numero_del_tramo, PDO::PARAM_INT);
            $stmt_trayecto->bindParam(4, $new_id_trayecto, PDO::PARAM_INT);
            $stmt_trayecto->bindParam(5, $origenTramo, PDO::PARAM_STR);
            $stmt_trayecto->bindParam(6, $destinoTramo, PDO::PARAM_STR);
            $stmt_trayecto->execute();              
            
            $numero_del_tramo += 1;
        }      
      
        // Confirma la transacción
        $conn->commit();
    } catch (Exception $e) {
        // Si ocurre un error, revierte la transacción y maneja el error
        $conn->rollBack();
        echo "Error: " . $e->getMessage();
    }

    $lineaData = array(
        "nomLineaUpdate" => $nombreLinea,
        "origenLineaUpdate" => $origenLinea,
        "destinoLineaUpdate" => $destinoLinea,
        "idLineaUpdate" => $idLinea,
        "trayectoLinea" => $trayectoUpdate
    );
    echo json_encode($lineaData);
} else {
    // Crear un objeto JSON de respuesta si la solicitud no es POST
    $response = array("success" => false, "message" => "Acceso no permitido");
    echo json_encode($response);
}
?>