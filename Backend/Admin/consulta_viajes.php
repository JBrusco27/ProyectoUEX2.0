<?php
include_once "../app.php";
include_once "../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Inicializa un array para almacenar los datos de las unidades
    $viajes = [];

    // Realiza la consulta SELECT en la tabla "unidad" para obtener todos los datos de las unidades
    $sql_select_linea = "SELECT * FROM pertenece_a";
    $stmt_linea = $conn->prepare($sql_select_linea);
    $stmt_linea->execute();

    while ($linea = $stmt_linea->fetch(PDO::FETCH_ASSOC)) {

        // Agrega los datos de la unidad
        $lineaData = array(
            "idLinea" => $linea['ID_Linea'],
            "idHorario" => $linea['ID_Horario'],
            "sentido" => $linea['Sentido'],
            "fechaSalida" => $linea['Dia_Salida'],
            "horaSalida" => $linea['Hora_Salida'],
            "matricula" => $linea['Matricula_Unidad']
        );

        $viajes[] = $lineaData;
    }

    // Enviar los datos de las unidades en formato JSON
    echo json_encode($viajes);
} else {
    $response = array("success" => false, "message" => "Acceso no permitido");
    echo json_encode($response);
}
?>