<?php
include_once "../connect.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include __DIR__ . '/../../PHPMailer/PHPMailer.php';
include __DIR__ . '/../../PHPMailer/Exception.php';
include __DIR__ . '/../../PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try {
    session_start();
    // Obtener los valores del formulario
    $correo_usuario = $_SESSION['email_usuario'];
    $column_number = $_POST['columnNumber'];
    $old_password_usuario = $_POST['formOldPswd'];
    $new_password_usuario = $_POST['formNewPswd'];

    // Obtener la contraseña encriptada almacenada en la base de datos
    $sql_obtener_contraseña = "SELECT Contraseña_Usu, Nombre_Usu FROM usuario WHERE Correo_Usu = :correo";
    $stmt_obtener_contraseña = $conn->prepare($sql_obtener_contraseña);
    $stmt_obtener_contraseña->bindParam(':correo', $correo_usuario);
    $stmt_obtener_contraseña->execute();

    $resultado = $stmt_obtener_contraseña->fetch(PDO::FETCH_ASSOC);
    
    $pswd_valid = true;
    $pswd_are_dif = true;

    if ($resultado) {
        $contraseña_hash = $resultado['Contraseña_Usu'];

        if($old_password_usuario != $new_password_usuario){
        
        // Verificar si la contraseña proporcionada coincide con la contraseña almacenada en la base de datos.
        if (password_verify($old_password_usuario, $contraseña_hash) && 
        !(strlen($new_password_usuario) < 8) && 
        !(strlen($new_password_usuario) > 30) &&
        preg_match("/[!@#$%^&*()-_=+]/", $new_password_usuario) &&
        preg_match("/[a-z]/", $new_password_usuario) &&
        preg_match("/[A-Z]/", $new_password_usuario) &&
        preg_match("/[0-9]/", $new_password_usuario)) {

            $password_usuario_hashed = password_hash($new_password_usuario, PASSWORD_DEFAULT);
            
            // Crear codigo de verificación
            $caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
            $codigo = '';
            for ($i = 0; $i < 15; $i++) {
                $codigo .= $caracteres[rand(0, strlen($caracteres) - 1)];
            }
            $verifExpiry = time() + (1 * 60 * 60); // Calcula la fecha y hora de expiración en 1 hora
            setcookie('codigo_verif', $codigo, $verifExpiry, '/');

                try {
                // Configuracion del envio del email
                $mail->isSMTP();// Enviar usando SMTP
                $mail->Host       = 'smtp.gmail.com';
                $mail->SMTPAuth   = true;
                $mail->Username   = 'viauycontact@gmail.com'; // Email emisor
                $mail->Password   = 'zenkzesdnsgkiuqy'; // Contraseña de aplicacion del emisor
                $mail->SMTPSecure = 'tls';
                $mail->Port       = 587; // Puerto TCP al que se conecta para el envio
                $mail->setFrom('viauycontact@gmail.com', 'Via uy'); // Email emisor
                $mail->addAddress($correo_usuario); // Email receptor
                $mail->isHTML(true);

                //Enviar email segun el idioma
                switch($column_number){
                    case 0:
                        $mail->Subject = 'Change password | Viauy';
                        $mail->Body = '<html><head><style>.em-container{text-align:center; height:200px;} .em-container *{margin:40px; color:black;} </style></head><body class="em-container"><h1 style="color: black;">Verify to change password</h1><p>Click the link below to change your Viauy password:</p><a href="https://viauyprueba.000webhostapp/Frontend/Account/VerifyComplete/verifyComplete.php?verif_code='.$codigo.'&pswd_hash='.$password_usuario_hashed.'" style="background-color:black; border-radius:10px; color:white; padding:15px 30px; text-decoration:none; margin:25px; cursor:pointer;">Reset Password</a></body></html>';
                        $mail->send();
                        break;
                    case 1:
                        $mail->Subject = 'Cambiar contraseña | Viauy';
                        $mail->Body = '<html><head><style>.em-container{text-align:center; height:200px;} .em-container *{margin:40px; color:black;} </style></head><body class="em-container"><h1 style="color: black;">Verificar para cambiar la contraseña</h1><p>Haz click en el link de abajo para cambiar tu contraseña de Viauy:</p><a href="https://viauyprueba.000webhostapp.com/Frontend/Account/VerifyComplete/verifyComplete.php?verif_code='.$codigo.'&pswd_hash='.$password_usuario_hashed.'" style="background-color:black; border-radius:10px; color:white; padding:15px 30px; text-decoration:none; margin:25px; cursor:pointer;">Reset Password</a></body></html>';
                        $mail->send();
                        break;
                    case 2:
                        $mail->Subject = 'Alterar a senha | Viauy';
                        $mail->Body = '<html><head><style>.em-container{text-align:center; height:200px;} .em-container *{margin:40px; color:black;} </style></head><body class="em-container"><h1 style="color: black;">Verifique para alterar a senha </h1><p>Clique no link abaixo para alterar sua senha Viauy:</p><a href="https://viauyprueba.000webhostapp.com/Frontend/Account/VerifyComplete/verifyComplete.php?verif_code='.$codigo.'&pswd_hash='.$password_usuario_hashed.'" style="background-color:black; border-radius:10px; color:white; padding:15px 30px; text-decoration:none; margin:25px; cursor:pointer;">Reset Password</a></body></html>';
                        $mail->send();
                        break;
                }
                    $email_sended = true;
                } catch (Exception $e){
                    $email_sended = false;
                }
               
            $pswd_valid = true;
            $pswd_are_dif = true;
            echo json_encode(['pswd_are_dif' => $pswd_are_dif, 'pswd_valid' => $pswd_valid]);

            exit; // Finalizar la ejecución del script
        } else {
            $pswd_are_dif = true;
            $pswd_valid = false;
            echo json_encode(['pswd_are_dif' => $pswd_are_dif, 'pswd_valid' => $pswd_valid]);
            exit; // Finalizar la ejecución del script
        }

        }else{
            $pswd_are_dif = false;
            echo json_encode(['pswd_are_dif' => $pswd_are_dif, 'pswd_valid' => $pswd_valid]);
            exit; // Finalizar la ejecución del script
        }
        
    } else {
        $pswd_are_dif = false;
        $pswd_valid = false;
        echo $correo_usuario;
        echo json_encode(['pswd_are_dif' => $pswd_are_dif, 'pswd_valid' => $pswd_valid]);
        exit; // Finalizar la ejecución del script
    }
} catch (PDOException $e) {
    //echo "Error en la consulta: " . $e->getMessage();
    //echo "Código de error: " . $e->getCode();
}
$conn = null;
?>