<?php
include_once "../app.php";
include_once "../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $nomParada = $_POST['nomParada'];
    $comParada = $_POST['comParada'];

    $sql_last_id = "SELECT MAX(ID_Parada) AS last_id FROM `parada`";
    $stmt_last_id = $conn->prepare($sql_last_id);
    $stmt_last_id->execute();
    $row = $stmt_last_id->fetch(PDO::FETCH_ASSOC);
    $linea_last_id = $row['last_id'];
    
    $new_id_linea = $linea_last_id + 1;

    $sql_insert_linea = "INSERT INTO parada (ID_Parada, Nombre_Parada, Comentario_Parada) VALUES (?, ?, ?)";
    $stmt_linea = $conn->prepare($sql_insert_linea);
    $stmt_linea->bindParam(1, $new_id_linea, PDO::PARAM_INT);
    $stmt_linea->bindParam(2, $nomParada, PDO::PARAM_STR);
    $stmt_linea->bindParam(3, $comParada, PDO::PARAM_STR);


    if ($stmt_linea->execute()) {
        echo json_encode(true);
    } else {
        echo json_encode(false);
    }
} else {
    echo json_encode(false);
}
?>
