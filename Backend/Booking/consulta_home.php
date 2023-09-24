<?php

include_once  "../connect.php";

try{

    $sql = "SELECT Nombre_Parada, ID_Parada FROM parada;";

    $stmt = $conn->prepare($sql);

    $stmt->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);

    $arrParadas = [];

    foreach ($results as $row){
        array_push($arrParadas, [$row['ID_Parada'], $row['Nombre_Parada']]);
    }

    echo json_encode($arrParadas);
    
}catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

?>