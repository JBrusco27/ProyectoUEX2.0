<?php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include __DIR__ . '/../PHPMailer/PHPMailer.php';
include __DIR__ . '/../PHPMailer/Exception.php';
include __DIR__ . '/../PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

// Obtener los valores del formulario
$user_email = $_POST['formEmail'];
$user_name = $_POST['formName'];
$user_phone = $_POST['formPhone'];
$user_message = $_POST['formMessage'];
$email_sended = false;

try{
    
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'viauycontact@gmail.com'; // Email emisor
    $mail->Password   = 'zenkzesdnsgkiuqy'; // Contraseña de aplicacion del emisor
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587; // Puerto TCP al que se conecta para el envio
    $mail->setFrom('viauycontact@gmail.com', $user_name); // Email emisor
    $mail->addAddress('viauycontact@gmail.com'); // Email receptor
    $mail->isHTML(true);    
    $mail->Subject = 'Contact message from '.$user_email.' | '.$user_phone;
    $mail->Body = '<html><head><style></style></head><body>'.$user_message.'</body></body></html>';
    $mail->send();
    $email_sended = true;
    echo json_encode($email_sended);
    exit;
}catch(Exception $e){
    $email_sended = false;
    echo json_encode($email_sended);
}
?>