<?php 

    include_once "../../../Backend/app.php";
    include '../../../Backend/connect.php';
    
    if(isset($_COOKIE['codigo_verif'])){
        $cookie_verif_code = $_COOKIE['codigo_verif'];
        setcookie('codigo_verif', '', time() - 3600, '/');
        $verif_code = $_GET['verif_code'];
        $password_usuario_hashed = $_GET['pswd_hash'];
        session_start();
        $correo_usuario = $_SESSION['email_usuario']; // Filtrar y sanitizar el correo electrónico
        
        if($verif_code == $cookie_verif_code){
            $sql_insertar = "UPDATE usuario SET Contraseña_Usu = :password WHERE Correo_Usu = :correo";
            $stmt_insertar = $conn->prepare($sql_insertar);
            $stmt_insertar->bindParam(':correo', $correo_usuario);
            $stmt_insertar->bindParam(':password', $password_usuario_hashed);
            $stmt_insertar->execute();
            echo "<script>fetch('../../../Backend/logout.php').then(function (response) {}).then(function (data) {}).catch(function (error) {console.error('Error:', error);});</script>";
        }
    }else if(isset($_COOKIE['codigo_verif_signup'])){
        $verif_code_signup = $_GET['verif_code_signup'];
        $cookie_verif_code_signup = $_COOKIE['codigo_verif_signup'];
        $get_nombre_signup = $_GET['nombre_signup'];
        $get_password_signup = $_GET['password_signup'];
        $get_correo_signup = $_GET['correo_signup'];
        $get_telefono_signup = $_GET['telefono_signup'];
        
        if($verif_code_signup == $cookie_verif_code_signup){
            setcookie('codigo_verif_signup', '', time() - 3600, '/');   
            $sql_insertar = "INSERT INTO usuario (ID_Rol, Nombre_Usu, Contraseña_Usu, Correo_Usu, Telefono_Usu) VALUES (1, :nombre, :password, :correo, :telefono)";
            $stmt_insertar = $conn->prepare($sql_insertar);
            $stmt_insertar->bindParam(':nombre', $get_nombre_signup);
            $stmt_insertar->bindParam(':password', $get_password_signup);
            $stmt_insertar->bindParam(':correo', $get_correo_signup);
            $stmt_insertar->bindParam(':telefono', $get_telefono_signup, PDO::PARAM_STR);
            
            $stmt_insertar->execute();
        }
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>
       <!-- Enlace a estilos -->
       <link rel="stylesheet" href="./verifyComplete.css">

    <!-- Logica predeterminada -->
    <script src="../../Components/Scripts/default.js" defer></script>

    <!-- Enlace para traducir -->
    <script src="../../Components/Scripts/Translate/VerifyComplete/translateVerifyComplete.js" ></script>
    
    <!-- Dependencia para archivos manejar archivos csv -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
</head>
<body>
    <!-- Cargando -->
    <script src="../../Components/Scripts/loading.js"></script>
    <div class="container">
        <img height="100px" src="../../Resources/viauyLogoNoBack.png" alt="">
        <h1 class="Trad2"></h1>
        <p class="Trad3"></p>
    </div>
</body>
</html>