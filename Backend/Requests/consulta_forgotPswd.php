<?php

include "../connect.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include __DIR__ . '/../../PHPMailer/PHPMailer.php';
include __DIR__ . '/../../PHPMailer/Exception.php';
include __DIR__ . '/../../PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

// Obtener los valores del formulario
$email = $_POST['formEmail'];
$columnNumber = $_GET['columnNumber'];

// Verificar la cantidad de emails iguales al del formulario
$sql = "SELECT COUNT(*) AS count FROM usuario WHERE Correo_Usu = :correo";
$stmt = $conn->prepare($sql);
$stmt->bindParam(':correo', $email);
$stmt->execute();

$resultado = $stmt->fetch(PDO::FETCH_ASSOC);

if ($resultado['count'] == 0) {
    $email_sended = false;
    $email_exists = false;
    echo json_encode(['email_sended' => $email_sended, 'email_exists' => $email_exists]);
    exit;
}else{

try {
    // Crear codigo de verificación
    $caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $codigo = '';
    for ($i = 0; $i < 15; $i++) {
        $codigo .= $caracteres[rand(0, strlen($caracteres) - 1)];
    }
    $verifExpiry = time() + (1 * 60 * 60); // Calcula la fecha y hora de expiración en 1 hora
    setcookie('codigo_verif_reset', $codigo, $verifExpiry, '/');

    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'viauycontact@gmail.com'; // Email emisor
    $mail->Password   = 'zenkzesdnsgkiuqy'; // Contraseña de aplicacion del emisor
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587; // Puerto TCP al que se conecta para el envio
    $mail->setFrom('viauycontact@gmail.com', 'Via uy'); // Email emisor
    $mail->addAddress($email, ); // Email receptor
    $mail->isHTML(true);    
    $mail->Subject = 'Reset your password';
    
    //Enviar email segun el idioma
    switch($columnNumber){
        case 0:
            $mail->Subject = 'Reset your password';
            $mail->Body = '<html><head><style>.em-container{text-align:center; height:200px;} .em-container *{margin:40px; color:black;} </style></head><body class="em-container"><h1 style="color: black;">Reset your password</h1><p>Click the link below to reset your Viauy password:</p><a href="http://localhost/Frontend/Account/ResetPswd/resetPswd.php?codigo_verif_reset='.$codigo.'" style="background-color:black; border-radius:10px; color:white; padding:15px 30px; text-decoration:none; margin:25px; cursor:pointer;">Reset Password</a></body></html>';
            break;
            case 1:
            $mail->Subject = 'Restablece tu contraseña';
            $mail->Body = '<html><head><style>.em-container{text-align:center; height:200px;} .em-container *{margin:40px; color:black;}</style></head><body class="em-container"><h1 style="color: black;">Restablece tu contraseña</h1><p>Haz click en el siguiente enlace para restablecer tu contraseña de Viauy:</p><a href="http://localhost/Frontend/Account/ResetPswd/resetPswd.php?codigo_verif_reset='.$codigo.'" style="background-color:black; border-radius:10px; color:white; padding:15px 30px; text-decoration:none; margin:25px; cursor:pointer;">Reset Password</a></body></html>';
            break;
            case 2:
                $mail->Subject = 'Redefinir sua senha';
                $mail->Body = '<html><head><style>.em-container{text-align:center; height:200px;} .em-container *{margin:40px; color:black;}</style></head><body class="em-container"><h1 style="color: black;">Redefinir sua senha</h1><p>Clique no link a seguir para redefinir sua senha Viauy:</p><a href="http://localhost/Frontend/Account/ResetPswd/resetPswd.php?codigo_verif_reset='.$codigo.'" style="background-color:black; border-radius:10px; color:white; padding:15px 30px; text-decoration:none; margin:25px; cursor:pointer;">Reset Password</a></body></html>';
                break;
            }
            $mail->send();
            $email_sended = true;
            $email_exists = true;
        } catch (Exception $e){
            $email_exists = true;
            $email_sended = false;
        }
        echo json_encode(['email_sended' => $email_sended, 'email_exists' => $email_exists]);
        
        exit; // Finalizar la ejecución del script
}
