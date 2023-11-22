<?php

include_once "../app.php";
include_once "../connect.php";

session_start();

$correoUser = $_SESSION['email_usuario'];

try {
    //$sql = "SELECT * FROM asiento WHERE Matricula_Unidad = :matricula";


    $sqlReservas1 = "SELECT e.Num_Asiento, e.ID_Horario, r.ID_Reserva, r.Costo_Reserva, r.Estado_Reserva FROM existe e JOIN reserva r ON e.ID_Reserva = r.ID_Reserva WHERE r.Correo_Usu = :correoUser AND (r.Estado_Reserva = 'Confirmado' OR r.Estado_Reserva = 'Pendiente')";
    $stmtReservas1 = $conn->prepare($sqlReservas1);
    $stmtReservas1->bindParam(':correoUser', $correoUser, PDO::PARAM_STR);
    $stmtReservas1->execute();

    $resultsReservas1 = $stmtReservas1->fetchAll(PDO::FETCH_ASSOC);




    $reservasTotal = [];

foreach ($resultsReservas1 as $row) {

    $sqlReservas2 = "SELECT l.Origen_Linea, l.Destino_Linea, l.Num_Linea, p.Hora_Salida, p.Dia_Salida, p.Matricula_Unidad FROM linea l JOIN pertenece_a p ON p.ID_Horario = :idhorario And l.ID_Linea = p.ID_Linea;";
    $stmtReservas2 = $conn->prepare($sqlReservas2);
    $stmtReservas2->bindParam(':idhorario', $row['ID_Horario'], PDO::PARAM_INT);
    $stmtReservas2->execute();
    $resultsReservas2 = $stmtReservas2->fetch(PDO::FETCH_ASSOC);
    
    $sqlReservas3 = "SELECT * FROM `caracteristica` WHERE Matricula_Unidad = :matricula;";
    $stmtReservas3 = $conn->prepare($sqlReservas3);
    $stmtReservas3->bindParam(':matricula', $resultsReservas2['Matricula_Unidad'], PDO::PARAM_STR);
    $stmtReservas3->execute();
    $resultsReservas3 = $stmtReservas3->fetchAll(PDO::FETCH_ASSOC);

    $reservaArr = [
            'costoReserva' => 0,
            'estadoInfo' => '',
            'ID_Reserva' => 0,
            'ID_Horario' => 0,
            'nomLinea' => '',
            'origenLinea' => '',
            'destinoLinea' => '',
            'caracteristicasUnidad' => [],
            'matriculaUnidad' => '',
            'horaSalida' => '',
            'fechaSalida' => '',
            'asiento' => 0,
    ];

    foreach ($resultsReservas3 as $row2) {
        $reservaArr['caracteristicasUnidad'][] = $row2['Nombre_Carac'];
    }

    // Llenar $reservaArr con los datos actuales
    $reservaArr['costoReserva'] = $row['Costo_Reserva'];
    $reservaArr['estadoInfo'] = $row['Estado_Reserva'];
    $reservaArr['ID_Reserva'] = $row['ID_Reserva'];
    $reservaArr['asiento'] = $row['Num_Asiento'];
    $reservaArr['ID_Horario'] = $row['ID_Horario'];
    $reservaArr['matriculaUnidad'] = $resultsReservas2['Matricula_Unidad'];
    $reservaArr['fechaSalida'] = $resultsReservas2['Dia_Salida'];
    $reservaArr['horaSalida'] = '1900-01-01T'.$resultsReservas2['Hora_Salida'];
    $reservaArr['nomLinea'] = $resultsReservas2['Num_Linea'];
    $reservaArr['origenLinea'] = $resultsReservas2['Origen_Linea'];
    $reservaArr['destinoLinea'] = $resultsReservas2['Destino_Linea'];



    // Agregar $reservaArr al array total
    $reservasTotal[] = $reservaArr;
}

echo json_encode($reservasTotal);

} catch (PDOException $e) {
    echo "Error: " . $e->getMessage();
}

?>
