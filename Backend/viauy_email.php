<?php

include_once "./app.php";

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
    
    // Configuracion del envio del email
    $mail->isSMTP();
    $mail->Host = $_ENV['SMTP_HOST'];
    $mail->SMTPAuth   = $_ENV['SMTP_AUTH'];
    $mail->Username   = $_ENV['SMTP_USERNAME'];
    $mail->Password = $_ENV['SMTP_PASSWORD'];
    $mail->SMTPSecure = $_ENV['SMTP_SECURE'];
    $mail->Port = $_ENV['SMTP_PORT'];
    $mail->setFrom($_ENV['SMTP_FROM_EMAIL'], $user_name);
    $mail->addAddress($_ENV['SMTP_USERNAME']);
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