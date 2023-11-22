2<?php
include_once "../app.php";
include_once "../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $matricula = $_POST['matricula'];
    $cantAsientos = $_POST['cantAsientos'];

    $sql_last_id = "SELECT MAX(Num_Unidad) AS last_id FROM `unidad`";
    $stmt_last_id = $conn->prepare($sql_last_id);
    $stmt_last_id->execute();
    $row = $stmt_last_id->fetch(PDO::FETCH_ASSOC);
    $linea_last_id = $row['last_id'];
    
    $new_id_linea = $linea_last_id + 1;

    $sql_insert_linea = "INSERT INTO unidad (Matricula_Unidad, Num_Unidad) VALUES (?, ?)";
    $stmt_linea = $conn->prepare($sql_insert_linea);
    $stmt_linea->bindParam(1, $matricula, PDO::PARAM_STR);
    $stmt_linea->bindParam(2, $new_id_linea, PDO::PARAM_INT);

    if ($stmt_linea->execute()) {
        
        for ($i = 1; $i < $cantAsientos + 1; $i++){
        echo $matricula;
        echo $i;
        $sql_insert_asiento = "INSERT INTO asiento (Num_Asiento, Matricula_Unidad) VALUES (?, ?)";
        $stmt_asiento = $conn->prepare($sql_insert_asiento);
        $stmt_asiento->bindParam(1, $i, PDO::PARAM_INT);
        $stmt_asiento->bindParam(2, $matricula, PDO::PARAM_STR);
        

        if($stmt_asiento->execute()){
            echo json_encode(true);
        }

        }
    }

} else {
    echo json_encode(false);
}
?>
