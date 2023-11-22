<?php
include_once "../app.php";
include_once "../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nombreLinea = $_POST['nomLinea'];
    $origenLinea = $_POST['origenLinea'];
    $destinoLinea = $_POST['destinoLinea'];

    $tramoDatosUpdate = json_decode($_POST['tramoDatos'], true);
    $trayectoUpdate = json_decode($_POST['trayectoLinea'], true);

    // Consulta para obtener el último valor de ID_Tra
    $sql_last_id = "SELECT MAX(ID_Linea) AS last_id FROM `linea`";
    $stmt_last_id = $conn->prepare($sql_last_id);
    $stmt_last_id->execute();
    $row = $stmt_last_id->fetch(PDO::FETCH_ASSOC);
    $linea_last_id = $row['last_id'];
    
    // Incrementa el último valor de ID_Reserva en uno
    $new_id_linea = $linea_last_id + 1;

    // Realiza el INSERT en la tabla "linea"
    $sql_insert_linea = "INSERT INTO linea (ID_Linea,Origen_Linea, Destino_Linea, Num_Linea) VALUES (?, ?, ?, ?)";
    $stmt_linea = $conn->prepare($sql_insert_linea);
    $stmt_linea->bindParam(1, $new_id_linea, PDO::PARAM_STR);
    $stmt_linea->bindParam(2, $origenLinea, PDO::PARAM_STR);
    $stmt_linea->bindParam(3, $destinoLinea, PDO::PARAM_STR);
    $stmt_linea->bindParam(4, $nombreLinea, PDO::PARAM_STR);

    if ($stmt_linea->execute()) {

        $numero_del_tramo = 1; // Inicializa el número de tramo
        
        foreach ($trayectoUpdate as $tramo) {
            $paradaOrigen = $tramo[0];
            $paradaDestino = $tramo[1];

                // Consulta para obtener el último valor de ID_Tra
                $sql_last_id = "SELECT MAX(ID_Tra) AS last_id FROM `tramo`";
                $stmt_last_id = $conn->prepare($sql_last_id);
                $stmt_last_id->execute();
                $row = $stmt_last_id->fetch(PDO::FETCH_ASSOC);
                $tramo_last_id = $row['last_id'];
                
                // Incrementa el último valor de ID_Reserva en uno
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
            $stmt_tramo = $conn->prepare($sql_insert_tramo);
            $stmt_tramo->bindParam(1, $new_id_tramo, PDO::PARAM_STR);
            $stmt_tramo->bindParam(2, $paradaOrigen, PDO::PARAM_STR);
            $stmt_tramo->bindParam(3, $paradaDestino, PDO::PARAM_STR);

            $stmt_tramo->bindParam(4, $tramoDatosUpdate[$numero_del_tramo - 1][1], PDO::PARAM_INT);
            $stmt_tramo->bindParam(5, $tramoDatosUpdate[$numero_del_tramo - 1][0], PDO::PARAM_INT);
            $stmt_tramo->bindParam(6, $tramoDatosUpdate[$numero_del_tramo - 1][2], PDO::PARAM_STR);
            $stmt_tramo->bindParam(7, $tramoDatosUpdate[$numero_del_tramo - 1][3], PDO::PARAM_INT);

            if ($stmt_tramo->execute()) {

                // Consulta para obtener el último valor de ID_Trayecto
                $sql_last_id = "SELECT MAX(ID_Trayecto) AS last_id FROM `trayecto`";
                $stmt_last_id = $conn->prepare($sql_last_id);
                $stmt_last_id->execute();
                $row = $stmt_last_id->fetch(PDO::FETCH_ASSOC);
                $trayecto_last_id = $row['last_id'];
                
                // Incrementa el último valor de ID_Reserva en uno
                $new_id_trayecto = $trayecto_last_id + 1;
                    
                // Insertar datos en la tabla "trayecto"
                $sql_insert_trayecto = "INSERT INTO trayecto (ID_Linea, ID_Tra, Orden_Tramo, ID_Parada_Origen, ID_Parada_Destino, ID_Trayecto) VALUES (?, ?, ?, (SELECT ID_Parada FROM parada WHERE Nombre_Parada = ?), (SELECT ID_Parada FROM parada WHERE Nombre_Parada = ?), ?)";
                $stmt_trayecto = $conn->prepare($sql_insert_trayecto);
                $stmt_trayecto->bindParam(1, $new_id_linea, PDO::PARAM_INT);
                $stmt_trayecto->bindParam(2, $new_id_tramo, PDO::PARAM_INT);
                $stmt_trayecto->bindParam(3, $numero_del_tramo, PDO::PARAM_INT);
                $stmt_trayecto->bindParam(4, $paradaOrigen, PDO::PARAM_STR);
                $stmt_trayecto->bindParam(5, $paradaDestino, PDO::PARAM_STR);
                $stmt_trayecto->bindParam(6, $new_id_trayecto, PDO::PARAM_STR);

                $stmt_trayecto->execute();
                $numero_del_tramo += 1;
            }
        }
        // Enviar el objeto línea como respuesta en formato JSON
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }
} else {
    echo json_encode(false);
}
?>
