<?php

include_once "../app.php";
include_once  "../connect.php";

$parada_origen = $_POST['parada_origen'];
$parada_destino = $_POST['parada_destino'];
$linea = $_POST['linea'];
$sentido = $_POST['sentido'];
$cant_trav = $_POST['cant_trav'];

try{

    $sql_tramos = 'SELECT ID_Tra, ID_Linea 
                    FROM trayecto 
                    WHERE ID_Linea = :linea AND (CASE WHEN :sentido = "Ida" THEN ID_Parada_Origen ELSE ID_Parada_Destino END) = :parada_origen

                    UNION ALL      

                    SELECT ID_Tra, ID_Linea 
                    FROM trayecto 
                    WHERE ID_Linea = :linea AND (CASE WHEN :sentido = "Ida" THEN ID_Parada_Destino ELSE ID_Parada_Origen END) = :parada_destino;';


    $sql = "SELECT
                tramo.ID_Tra,
                parametro.Int_Parametro,
                tramo.Distancia_Tra
            FROM
                tramo
            JOIN
                trayecto ON tramo.ID_Tra = trayecto.ID_Tra
            JOIN
                parametro ON tramo.Tipo_Tra = parametro.ID_Parametro
            WHERE
                trayecto.ID_Linea = :linea
                AND trayecto.Orden_Tramo >= (SELECT MIN(Orden_Tramo) FROM trayecto WHERE ID_Tra IN (:tramo_origen, :tramo_destino))
                AND trayecto.Orden_Tramo <= (SELECT MAX(Orden_Tramo) FROM trayecto WHERE ID_Tra IN (:tramo_origen, :tramo_destino))
            ORDER BY
                trayecto.Orden_Tramo;";

    $stmt = $conn->prepare($sql);
    $stmt_tramos = $conn->prepare($sql_tramos);

    $stmt_tramos->bindParam(':parada_origen', $parada_origen, PDO::PARAM_STR);
    $stmt_tramos->bindParam(':parada_destino', $parada_destino, PDO::PARAM_STR);
    $stmt_tramos->bindParam(':linea', $linea, PDO::PARAM_STR);
    $stmt_tramos->bindParam(':sentido', $sentido, PDO::PARAM_STR);
    $stmt_tramos->execute();

    $results_tramos = $stmt_tramos->fetchAll(PDO::FETCH_ASSOC);

    $arr_tramos = [];

    foreach($results_tramos as $row_tramos){
        array_push($arr_tramos, $row_tramos['ID_Tra']) ;
    }


    $stmt->bindParam(':tramo_origen', $arr_tramos[0], PDO::PARAM_STR);
    $stmt->bindParam(':tramo_destino', $arr_tramos[1], PDO::PARAM_STR);
    $stmt->bindParam(':linea', $linea, PDO::PARAM_STR);

    $stmt->execute();
    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $precio_total = 0;

    foreach($results as $row){
        $precio_total += intval($row['Distancia_Tra']) * floatval($row['Int_Parametro']);
    }

    $precio_total = $precio_total * intval($cant_trav);

    echo json_encode(['precioTotal' => $precio_total]);

}catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

?>