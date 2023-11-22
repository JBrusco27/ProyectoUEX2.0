<?php

include_once "../app.php";
include_once "../connect.php";

$matricula_unidad = $_POST['Matricula_Unidad'];
$idhorario = $_POST['ID_Horario'];

try {
    $sql = "SELECT Num_Asiento FROM asiento WHERE Matricula_Unidad = :matricula";
    $sqlReservas = "SELECT e.Num_Asiento, r.Estado_Reserva FROM existe e JOIN reserva r ON e.ID_Reserva = r.ID_Reserva WHERE e.ID_Horario = :idhorario;";

    $stmt = $conn->prepare($sql);
    $stmtReservas = $conn->prepare($sqlReservas);

    $stmt->bindParam(':matricula', $matricula_unidad, PDO::PARAM_STR);
    $stmtReservas->bindParam(':idhorario', $idhorario, PDO::PARAM_STR);

    $stmt->execute();
    $stmtReservas->execute();

    $results = $stmt->fetchAll(PDO::FETCH_ASSOC);
    $resultsReservas = $stmtReservas->fetchAll(PDO::FETCH_ASSOC);

    $resultReservasAsientos = [];    

    foreach ($resultsReservas as $row) {
        
        if($row['Estado_Reserva'] != 'Cancelado'){
            Array_push($resultReservasAsientos, $row['Num_Asiento']);
        }
    }

    $asientosLinea = array();

    foreach ($results as $row) {
        $numAsiento = $row['Num_Asiento'];

        $disponibilidad = 0;

        if(in_array($numAsiento, $resultReservasAsientos)){
            $disponibilidad = 0;
        }else{
            $disponibilidad = 1;
        }

        $asientosLinea[] = array('Num_Asiento' => $numAsiento, 'Disponibilidad_Asiento' => $disponibilidad);
    }

    // Función de comparación personalizada para ordenar por 'Num_Asiento'
    function compararAsientos($a, $b) {
        return $a['Num_Asiento'] - $b['Num_Asiento'];
    }

    // Ordena el arreglo usando la función de comparación personalizada
    usort($asientosLinea, 'compararAsientos');

    echo json_encode($asientosLinea);

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

?>
