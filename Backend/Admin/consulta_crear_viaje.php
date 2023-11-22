<?php
include_once "../app.php";
include_once "../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $lineaViaje = $_POST['lineaViaje'];
    $unidadViaje = $_POST['unidadViaje'];
    $sentidoViaje = $_POST['sentidoViaje'];
    $fechaViaje = $_POST['fechaViaje'];
    $horaViaje = $_POST['horaViaje'];

    // Consulta para obtener el último valor de ID_Tra
    $sql_last_id = "SELECT MAX(ID_Horario) AS last_id FROM `pertenece_a`";
    $stmt_last_id = $conn->prepare($sql_last_id);
    $stmt_last_id->execute();
    $row = $stmt_last_id->fetch(PDO::FETCH_ASSOC);
    $linea_last_id = $row['last_id'];
    
    // Incrementa el último valor de ID_Reserva en uno
    $new_id_linea = $linea_last_id + 1;

    // Realiza el INSERT en la tabla "pertenece_A"
    $sql_insert_linea = "INSERT INTO pertenece_a (ID_Horario, ID_Linea, Matricula_Unidad, Hora_Salida, Dia_Salida, Sentido) VALUES (?, ?, ?, ?, ?, ?)";
    $stmt_linea = $conn->prepare($sql_insert_linea);
    $stmt_linea->bindParam(1, $new_id_linea, PDO::PARAM_INT);
    $stmt_linea->bindParam(2, $lineaViaje, PDO::PARAM_INT);
    $stmt_linea->bindParam(3, $unidadViaje, PDO::PARAM_STR);
    $stmt_linea->bindParam(4, $horaViaje, PDO::PARAM_STR);
    $stmt_linea->bindParam(5, $fechaViaje, PDO::PARAM_STR);
    $stmt_linea->bindParam(6, $sentidoViaje, PDO::PARAM_STR);

    if ($stmt_linea->execute()) {
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }
} else {
    echo json_encode(false);
}
?>
