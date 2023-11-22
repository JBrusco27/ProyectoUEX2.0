<?php
include_once "../app.php";
include_once "../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Inicializa un array para almacenar los datos de las unidades
    $lineas = array();

    // Realiza la consulta SELECT en la tabla "unidad" para obtener todos los datos de las unidades
    $sql_select_linea = "SELECT Matricula_Unidad FROM unidad";
    $stmt_linea = $conn->prepare($sql_select_linea);
    $stmt_linea->execute();

    while ($linea = $stmt_linea->fetch(PDO::FETCH_ASSOC)) {

        // Agrega los datos de la unidad
        $lineaData = array(
            "matriculaUnidad" => $linea['Matricula_Unidad']
        );

        $lineas[] = $lineaData;
    }

    // Enviar los datos de las unidades en formato JSON
    echo json_encode($lineas);
} else {
    $response = array("success" => false, "message" => "Acceso no permitido");
    echo json_encode($response);
}
?>