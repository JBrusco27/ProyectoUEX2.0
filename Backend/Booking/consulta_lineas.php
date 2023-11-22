<?php

include_once "../app.php";
include_once "../connect.php";


    try {        
        // Valores de origen y destino ingresados por el usuario
        $origen = $_POST['fromValue'];
        $destino = $_POST['toValue'];
        $sentido = $_POST['Sentido'];
        $fecha = strval($_POST['calIdaValue']);

        $sql_tramos = 'SELECT ID_Tra, ID_Linea 
                    FROM trayecto 
                    WHERE ID_Linea = :linea AND (CASE WHEN :sentido = "Ida" THEN ID_Parada_Origen ELSE ID_Parada_Destino END) = :origen

                    UNION ALL      

                    SELECT ID_Tra, ID_Linea 
                    FROM trayecto 
                    WHERE ID_Linea = :linea AND (CASE WHEN :sentido = "Ida" THEN ID_Parada_Destino ELSE ID_Parada_Origen END) = :destino;';

        
        $stmtTramos = $conn->prepare($sql_tramos);

        // Consulta SQL
        $sqlLineas = "SELECT DISTINCT pertenece_a.*, 
                        caracteristica.Nombre_Carac, 
                        linea.Num_Linea, 
                        unidad.Num_Unidad,
                        linea.Origen_Linea, 
                        linea.Destino_Linea
                    FROM pertenece_a
                    JOIN trayecto AS t1 ON pertenece_a.ID_Linea = t1.ID_Linea
                    JOIN trayecto AS t2 ON pertenece_a.ID_Linea = t2.ID_Linea
                    JOIN caracteristica ON pertenece_a.Matricula_Unidad = caracteristica.Matricula_Unidad
                    JOIN linea ON pertenece_a.ID_Linea = linea.ID_Linea
                    JOIN unidad ON pertenece_a.Matricula_Unidad = unidad.Matricula_Unidad
                    WHERE (t1.ID_Parada_Origen = :origen OR t1.ID_Parada_Destino = :origen)
                    AND (t2.ID_Parada_Origen = :destino OR t2.ID_Parada_Destino = :destino)
                    AND pertenece_a.Dia_Salida = :dia_fecha
                    AND (
                        (t1.Orden_Tramo < t2.Orden_Tramo AND pertenece_a.Sentido = 'Ida')
                        OR
                        (t1.Orden_Tramo > t2.Orden_Tramo AND pertenece_a.Sentido = 'Vuelta')
                        OR
                        (t1.ID_Parada_Origen = :destino AND t2.ID_Parada_Destino = :origen AND pertenece_a.Sentido = 'Vuelta')
                        OR
                        (t1.ID_Parada_Destino = :destino AND t2.ID_Parada_Origen = :origen AND pertenece_a.Sentido = 'Ida')
                    );";

        $sql_duracion = "SELECT
                    tramo.ID_Tra,
                    tramo.Tiempo_Tra
                FROM
                    tramo
                JOIN
                    trayecto ON tramo.ID_Tra = trayecto.ID_Tra
                WHERE
                    trayecto.ID_Linea = :linea
                    AND trayecto.Orden_Tramo >= (SELECT MIN(Orden_Tramo) FROM trayecto WHERE ID_Tra IN (:tramo_origen, :tramo_destino))
                    AND trayecto.Orden_Tramo <= (SELECT MAX(Orden_Tramo) FROM trayecto WHERE ID_Tra IN (:tramo_origen, :tramo_destino))
                ORDER BY
                    trayecto.Orden_Tramo;";
                
        $stmtLineas = $conn->prepare($sqlLineas);
        $stmtDuracion = $conn->prepare($sql_duracion);
           

        $arrLineas = [];

        $stmtLineas->bindParam(':origen', $origen, PDO::PARAM_STR);
        $stmtLineas->bindParam(':destino', $destino, PDO::PARAM_STR);
        $stmtLineas->bindParam(':dia_fecha', $fecha, PDO::PARAM_STR);



        if( $stmtLineas->execute()){
            
            $resultsLineas = $stmtLineas->fetchAll(PDO::FETCH_ASSOC);
            
            foreach ($resultsLineas as $rowLineas){
                $idHorario = $rowLineas["ID_Horario"];
                
                $stmtTramos->bindParam(':origen', $origen, PDO::PARAM_STR);
                $stmtTramos->bindParam(':destino', $destino, PDO::PARAM_STR);
                $stmtTramos->bindParam(':sentido', $sentido, PDO::PARAM_STR);
                $stmtTramos->bindParam(':linea',  $rowLineas['ID_Linea'], PDO::PARAM_STR);




                if($stmtTramos->execute()){

                    $arr_tramos = [];

                    $resultsTramos = $stmtTramos->fetchAll(PDO::FETCH_ASSOC);

                    foreach($resultsTramos as $row_tramos){
                        array_push($arr_tramos, $row_tramos['ID_Tra']) ;
                    }
                    
                    
                    $stmtDuracion->bindParam(':tramo_origen', $arr_tramos[0], PDO::PARAM_STR);
                    $stmtDuracion->bindParam(':tramo_destino', $arr_tramos[1], PDO::PARAM_STR);
                    $stmtDuracion->bindParam(':linea', $rowLineas['ID_Linea'], PDO::PARAM_STR);
                    if($stmtDuracion->execute()){  

                        
                        $duracion_viaje = 0;

                        $resultsDuracion = $stmtDuracion->fetchAll(PDO::FETCH_ASSOC);

                        foreach($resultsDuracion as $rowDuracion){
                            $duracion_viaje += intval($rowDuracion['Tiempo_Tra']);
                        }

                    } 

                }


                    if (!isset($arrLineas[$idHorario])) {
                        // Si es la primera vez que vemos esta línea, inicializamos sus datos
                        $arrLineas[$idHorario] = [
                            'ID_Linea' => $rowLineas["ID_Linea"],
                            'Sentido' => $rowLineas["Sentido"],
                            'Id_Horario' => $rowLineas["ID_Horario"],
                            'Caracteristica' => [$rowLineas["Nombre_Carac"]],
                            'Hora_Salida' => substr($rowLineas["Hora_Salida"], 0, 5),
                            'Duracion' => $duracion_viaje,
                            'DestinoAb' => $rowLineas["Num_Linea"],
                            'OrigenAb' => $rowLineas["Num_Linea"],
                            'Num_Linea' => $rowLineas["Num_Linea"],
                            'Matricula_Unidad' => $rowLineas["Matricula_Unidad"],
                            'Num_Unidad' => substr($rowLineas["Matricula_Unidad"], -3),
                            'Fecha' => date('Y-m-d', strtotime($rowLineas["Dia_Salida"])),
                            'Origen' => $rowLineas["Origen_Linea"],
                            'Destino' => $rowLineas["Destino_Linea"]
                        ];
                    } else {
                        // Si ya hemos visto esta línea, simplemente agregamos la característica
                        $arrLineas[$idHorario]['Caracteristica'][] = $rowLineas["Nombre_Carac"];
                    }
                }
            }
            
            echo json_encode(array_values($arrLineas));

        // Cerrar la conexión
        $conn = null;
    } catch (PDOException $e) {
        echo "Error: " . $e->getMessage();
    }
?>