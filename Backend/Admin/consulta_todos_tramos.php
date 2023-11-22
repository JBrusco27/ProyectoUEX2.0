
<?php
include_once "../app.php";
include_once "../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Inicializa un array para almacenar los datos de las líneas
    $nomLinea = $_POST['nomLinea'];
    $ordenTramo = $_POST['ordenTramo'];

    // Realiza la consulta SELECT en la tabla "linea" para obtener todos los datos de las líneas
    $sql_select_linea = "SELECT * FROM tramo WHERE ID_Tra IN (SELECT ID_Tra FROM trayecto WHERE Orden_Tramo = :ordenTramo AND ID_Linea = (SELECT ID_Linea FROM linea WHERE Num_Linea = :nomLinea));";
    $stmt_linea = $conn->prepare($sql_select_linea);
    $stmt_linea->bindParam(':nomLinea', $nomLinea, PDO::PARAM_STR);
    $stmt_linea->bindParam(':ordenTramo', $ordenTramo, PDO::PARAM_INT);
    $stmt_linea->execute();

    $results_data_tramos = $stmt_linea->fetchAll(PDO::FETCH_ASSOC);
    
    $datosTramosArr = [$results_data_tramos[0]['Tiempo_Tra'], $results_data_tramos[0]['Distancia_Tra'], $results_data_tramos[0]['Comentario_Tra'], $results_data_tramos[0]  ['Tipo_Tra']];
   
    // Enviar los datos de las líneas en formato JSON
    echo json_encode($datosTramosArr);
} else {
    $response = array("success" => false, "message" => "Acceso no permitido");
    echo json_encode($response);
}

?>