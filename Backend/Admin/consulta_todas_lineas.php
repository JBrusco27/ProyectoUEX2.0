<?php
include_once "../app.php";
include_once "../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Inicializa un array para almacenar los datos de las líneas
    $lineas = array();

    // Realiza la consulta SELECT en la tabla "linea" para obtener todos los datos de las líneas
    $sql_select_linea = "SELECT ID_Linea, Num_Linea, Origen_Linea, Destino_Linea FROM linea";
    $stmt_linea = $conn->prepare($sql_select_linea);
    $stmt_linea->execute();

    while ($linea = $stmt_linea->fetch(PDO::FETCH_ASSOC)) {
        // Obtén los trayectos de esta línea
        $trayectos = obtenerTrayectos($conn, $linea['ID_Linea']);

        // Agrega los datos de la línea y los trayectos al array
        $lineaData = array(
            "idLinea" => $linea['ID_Linea'],
            "nomLinea" => $linea['Num_Linea'],
            "origenLinea" => $linea['Origen_Linea'],
            "destinoLinea" => $linea['Destino_Linea'],
            "trayectoLinea" => $trayectos
        );

        $lineas[] = $lineaData;
    }

    // Enviar los datos de las líneas en formato JSON
    echo json_encode($lineas);
} else {
    $response = array("success" => false, "message" => "Acceso no permitido");
    echo json_encode($response);
}

// Función para obtener los trayectos de una línea
function obtenerTrayectos($conn, $idLinea) {
    $trayectos = array();

    // Realiza una consulta para obtener los trayectos asociados a la línea
    $sql_select_trayectos = "SELECT Origen_Parada.Nombre_Parada AS Origen, Destino_Parada.Nombre_Parada AS Destino
                            FROM trayecto
                            INNER JOIN parada AS Origen_Parada ON trayecto.ID_Parada_Origen = Origen_Parada.ID_Parada
                            INNER JOIN parada AS Destino_Parada ON trayecto.ID_Parada_Destino = Destino_Parada.ID_Parada
                            WHERE trayecto.ID_Linea = :idLinea";
    $stmt_trayectos = $conn->prepare($sql_select_trayectos);
    $stmt_trayectos->bindParam(":idLinea", $idLinea, PDO::PARAM_INT);
    $stmt_trayectos->execute();

    while ($trayectoUpdate = $stmt_trayectos->fetch(PDO::FETCH_ASSOC)) {
        $trayectos[] = array(
            $trayectoUpdate['Origen'],
            $trayectoUpdate['Destino']
        );
    }
    return $trayectos;
}
?>