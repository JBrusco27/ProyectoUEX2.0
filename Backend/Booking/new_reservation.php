<?php
include_once "../app.php";
include_once "../connect.php";

session_start();

$horario_reserva = $_POST['horario_reserva']; 
$fecha = $_POST['fecha']; 
$precio = $_POST['precio']; 
$correo = $_SESSION['email_usuario']; 

$metodo_pago = $_POST['metodo_pago'];
$idhorario = $_POST['id_horario'];
$num_asiento = $elementos = explode(',', $_POST['num_asiento']);
$estado_reserva = 'Pendiente';

if($metodo_pago == 'Credito' || $metodo_pago == 'Debito'){
    $estado_reserva = 'Confirmado';
}
try {
    foreach($num_asiento as $num_asientoValue){
    // Consulta para obtener el último valor de ID_Reserva
    $sql_last_id = "SELECT MAX(ID_Reserva) AS last_id FROM `reserva`";
    $stmt_last_id = $conn->prepare($sql_last_id);
    $stmt_last_id->execute();
    $row = $stmt_last_id->fetch(PDO::FETCH_ASSOC);
    $last_id = $row['last_id'];
    
    // Incrementa el último valor de ID_Reserva en uno
    $new_id_reserva = $last_id + 1;
    
    // Inserta el nuevo valor de ID_Reserva en ambas inserciones
    $sql = "INSERT INTO `reserva` (`ID_Reserva`, `Horario_Reserva`, `Fecha_Reserva`, `Estado_Reserva`, `Correo_Usu`, `Costo_Reserva`) VALUES (:id_reserva, :Horario_Reserva, :fecha, :estado, :correo, :precio)";
    
    $stmt = $conn->prepare($sql);
    $stmt->bindParam(':id_reserva', $new_id_reserva, PDO::PARAM_INT);
    $stmt->bindParam(':Horario_Reserva', $horario_reserva, PDO::PARAM_STR);
    $stmt->bindParam(':fecha', $fecha, PDO::PARAM_STR);
    $stmt->bindParam(':correo', $correo, PDO::PARAM_STR);
    $stmt->bindParam(':estado', $estado_reserva, PDO::PARAM_STR);
    $stmt->bindParam(':precio', $precio, PDO::PARAM_INT);
    
    $stmt->execute();

    $sql_last_id = "SELECT MAX(ID_Pago) AS last_id FROM `medio_pago`";
    $stmt_last_id = $conn->prepare($sql_last_id);
    $stmt_last_id->execute();
    $row = $stmt_last_id->fetch(PDO::FETCH_ASSOC);
    $last_id = $row['last_id'];
    
    // Incrementa el último valor de ID_Reserva en uno
    $new_id_mediop = $last_id + 1;
    
    $sql_existe = "INSERT INTO `existe` (`ID_Horario`, `ID_Reserva`, `Num_Asiento`) VALUES (:id_horario, :id_reserva, :num_asiento); INSERT INTO `medio_pago` (`ID_Pago`, `ID_Reserva`, `Nombre_Pago`) VALUES (:idpago, :id_reserva, :Metodo_Pago)";
    
    $stmt_existe = $conn->prepare($sql_existe);
    $stmt_existe->bindParam(':idpago', $new_id_mediop, PDO::PARAM_INT);
    $stmt_existe->bindParam(':id_horario', $idhorario, PDO::PARAM_INT);
    $stmt_existe->bindParam(':id_reserva', $new_id_reserva, PDO::PARAM_INT);
    $stmt_existe->bindParam(':num_asiento', $num_asientoValue, PDO::PARAM_INT);
    $stmt_existe->bindParam(':Metodo_Pago', $metodo_pago, PDO::PARAM_STR);

    $stmt_existe->execute();
    
}
    
    echo json_encode(['estado_compra' => true]);
} catch (PDOException $e) {
    echo json_encode(['estado_compra' => false]);
}

?>