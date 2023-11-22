<?php
include_once "../../app.php";
include_once "../../connect.php";

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Inicializa un array para almacenar los datos de los usuarios y sus reservas
    $usuarios = [];

    // Realiza la consulta SELECT en la tabla "usuario" para obtener todos los datos de los usuarios
    $sql_select_usuario = "SELECT * FROM usuario WHERE ID_Rol = 1";
    $stmt_usuario = $conn->prepare($sql_select_usuario);
    $stmt_usuario->execute();

    while ($usuario = $stmt_usuario->fetch(PDO::FETCH_ASSOC)) {
        // Agrega los datos del usuario al array
        $usuarioData = [
            'nombreApellido' => $usuario['Nombre_Usu'],
            'correo' => $usuario['Correo_Usu'],
            'telefono' => $usuario['Telefono_Usu'],
            'idUsuario' => $usuario['ID_Usu'],
            'reservas' => [] // Inicializa un array para almacenar las reservas del usuario
        ];

        // Realiza la consulta SELECT en la tabla "reserva" para obtener las reservas del usuario
        $sql_select_reserva = "SELECT * FROM reserva WHERE Correo_Usu = ?;";
        $stmt_reserva = $conn->prepare($sql_select_reserva);
        $stmt_reserva->bindParam(1, $usuario['Correo_Usu'], PDO::PARAM_STR);
        $stmt_reserva->execute();

        while ($reserva = $stmt_reserva->fetch(PDO::FETCH_ASSOC)) {
        // Agrega los datos de la reserva al array de reservas del usuario
        $reservaData = [
            'idReserva' => $reserva['ID_Reserva'],
            'fechaReserva' => $reserva['Fecha_Reserva'],
            'horaReserva' => $reserva['Horario_Reserva'],
            'estadoReserva' => $reserva['Estado_Reserva'],
            'asientoReserva' => null,  // Inicializa la información adicional con un valor predeterminado
            'idHorario' => null, // Inicializa la información adicional con un valor predeterminado
            'fechaSalida' => null,
            'horaSalida' => null,
            'origenViaje' => null,
            'destinoViaje' => null,
        ];

        $sql_select_existe = "SELECT * FROM existe WHERE ID_Reserva = ?;";
        $stmt_existe = $conn->prepare($sql_select_existe);
        $stmt_existe->bindParam(1, $reserva['ID_Reserva'], PDO::PARAM_INT);
        $stmt_existe->execute();

        while ($existe = $stmt_existe->fetch(PDO::FETCH_ASSOC)) {
            // Actualiza la información adicional si existe
            $reservaData['asientoReserva'] = $existe['Num_Asiento'];
            $reservaData['idHorario'] = $existe['ID_Horario'];

            $sql_select_pertenece = "SELECT * FROM pertenece_a WHERE ID_Horario = ?;";
            $stmt_pertenece = $conn->prepare($sql_select_pertenece);
            $stmt_pertenece->bindParam(1, $existe['ID_Horario'], PDO::PARAM_INT);
            $stmt_pertenece->execute();

            while ($pertenece = $stmt_pertenece->fetch(PDO::FETCH_ASSOC)) {
                // Actualiza la información adicional si existe
                $reservaData['fechaSalida'] = $pertenece['Dia_Salida'];
                $reservaData['horaSalida'] = $pertenece['Hora_Salida'];

                $sql_select_linea = "SELECT * FROM linea WHERE ID_Linea = ?;";
                $stmt_linea = $conn->prepare($sql_select_linea);
                $stmt_linea->bindParam(1, $pertenece['ID_Linea'], PDO::PARAM_INT);
                $stmt_linea->execute();

                while ($linea = $stmt_linea->fetch(PDO::FETCH_ASSOC)) {
                    // Actualiza la información adicional si existe
                    $reservaData['origenViaje'] = $linea['Origen_Linea'];
                    $reservaData['destinoViaje'] = $linea['Destino_Linea'];

                }
            }
        }

        // Agrega los datos de la reserva al array de reservas del usuario
        $usuarioData['reservas'][] = $reservaData;
    }

    // Agrega los datos del usuario (incluyendo las reservas) al array principal
    $usuarios[] = $usuarioData;


    }

    // Enviar los datos de los usuarios en formato JSON
    echo json_encode($usuarios);
} else {
    $response = array("success" => false, "message" => "Acceso no permitido");
    echo json_encode($response);
}
?>
