<?php

include_once "../connect.php";

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

include __DIR__ . '/../../PHPMailer/PHPMailer.php';
include __DIR__ . '/../../PHPMailer/Exception.php';
include __DIR__ . '/../../PHPMailer/SMTP.php';

$mail = new PHPMailer(true);

try 
{  
    // Obtener los valores del formulario de registro
    $column_number = $_POST['columnNumber'];
    $nombre_usuario = $_POST['formName'];
    $password_usuario = $_POST['formPswd'];
    $password_usuario_confirm = $_POST['formConfPswd'];
    $correo_usuario = filter_var($_POST['formEmail'], FILTER_SANITIZE_EMAIL);
    $telefono_usuario = filter_var($_POST['formPhone'], FILTER_SANITIZE_NUMBER_INT);

    // Encriptar la contraseña
    $password_usuario_hashed = password_hash($password_usuario, PASSWORD_DEFAULT);

    // Validación de nombre
    if(strlen($nombre_usuario) < 4 || strlen($nombre_usuario) > 40) 
    {
        //echo "El nombre debe tener entre 10 y 40 caracteres";
        exit;
    }
    // Validación de formato de correo electrónico
    if(!filter_var($correo_usuario, FILTER_VALIDATE_EMAIL)) 
    {
        //echo "Ingrese un correo electrónico válido";
        exit;
    }
    // Validación de número de teléfono
    $telefono_usuario = str_replace(" ", "", $telefono_usuario); // Eliminar guiones del número de teléfono

    if(!preg_match('/^[0-9]{9}$/', $telefono_usuario))
    {
        //echo "Ingrese un número de teléfono válido de 9 dígitos";
        exit;
    }
    // Validación de contraseña
    if(strlen($password_usuario) < 8 || strlen($password_usuario) > 30 ||
    !preg_match("/[!@#$%^&*()-_=+]/", $password_usuario) ||
    !preg_match("/[a-z]/", $password_usuario) ||
    !preg_match("/[A-Z]/", $password_usuario) ||
    !preg_match("/[0-9]/", $password_usuario)) 
    {
        //echo "La contraseña debe cumplir los siguientes requisitos:";
        //echo "- Tener entre 8 y 30 caracteres";
        //echo "- Contener al menos un carácter especial";
        //echo "- Contener al menos una letra minúscula";
        //echo "- Contener al menos una letra mayúscula";
        //echo "- Contener al menos un número";
        exit;
    }
    // Verificar si el correo electrónico ya existe en la base de datos
    $sql_verificar = "SELECT COUNT(*) AS count FROM usuario WHERE Correo_Usu = :correo";
    $stmt_verificar = $conn->prepare($sql_verificar);
    $stmt_verificar->bindParam(':correo', $correo_usuario);
    $stmt_verificar->execute();
    
    $resultado = $stmt_verificar->fetch(PDO::FETCH_ASSOC);
    
    if ($resultado['count'] > 0) {
        $email_exists = true;
        echo json_encode(["email_exists" => $email_exists]);
        exit;
    }else{
        // Crear codigo de verificación
        $caracteres = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
        $codigo = '';
        for ($i = 0; $i < 15; $i++) {
            $codigo .= $caracteres[rand(0, strlen($caracteres) - 1)];
        }
            
        $verifExpiry = time() + (1 * 60 * 60); // Calcula la fecha y hora de expiración en 1 hora
        setcookie('codigo_verif_signup', $codigo, $verifExpiry, '/');

        try {
        // Server settings
        $mail->isSMTP();                                            // Send using SMTP
        $mail->Host       = 'smtp.gmail.com';                    // Set the SMTP server to send through
        $mail->SMTPAuth   = true;                                   // Enable SMTP authentication
        $mail->Username   = 'viauycontact@gmail.com';                     // SMTP username
        $mail->Password   = 'zenkzesdnsgkiuqy';                               // SMTP password
        $mail->SMTPSecure = 'tls';         // Enable TLS encryption; `PHPMailer::ENCRYPTION_SMTPS` encouraged
        $mail->Port       = 587;                                    // TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
        // Recipients
        $mail->setFrom('viauycontact@gmail.com', 'Via uy');
        $mail->addAddress($correo_usuario);     // Add a recipient
        $mail->isHTML(true);    

        //Enviar email segun idioma
        switch($column_number){
            case 0:
                $mail->Subject = 'Create account | Viauy';
                $mail->Body = '<html><head><style>.em-container{text-align:center; height:200px;} .em-container *{margin:40px; color:black;} </style></head><body class="em-container"><h1 style="color: black;">Verify to create account</h1><p>Click the link below to create your Viauy account:</p><a href="http://localhost/Frontend/Account/VerifyComplete/verifyComplete.php?verif_code_signup='.$codigo.'&password_signup='.$password_usuario_hashed.'&nombre_signup='.$nombre_usuario.'&correo_signup='.$correo_usuario.'&telefono_signup='.$telefono_usuario.'" style="background-color:black; border-radius:10px; color:white; padding:15px 30px; text-decoration:none; margin:25px; cursor:pointer;">Create account</a></body></html>';
                $mail->send();
                break;
            case 1:
                $mail->Subject = 'Crear cuenta | Viauy';
                $mail->Body = '<html><head><style>.em-container{text-align:center; height:200px;} .em-container *{margin:40px; color:black;} </style></head><body class="em-container"><h1 style="color: black;">Verificar para crear cuenta</h1><p>Haz click en el link de abajo para crear tu cuenta de Viauy:</p><a href="http://localhost/Frontend/Account/VerifyComplete/verifyComplete.php?verif_code_signup='.$codigo.'&password_signup='.$password_usuario_hashed.'&nombre_signup='.$nombre_usuario.'&correo_signup='.$correo_usuario.'&telefono_signup='.$telefono_usuario.'" style="background-color:black; border-radius:10px; color:white; padding:15px 30px; text-decoration:none; margin:25px; cursor:pointer;">Crear cuenta</a></body></html>';
                $mail->send();
                break;
            case 2:
                $mail->Subject = 'Criar conta | Viauy';
                $mail->Body = '<html><head><style>.em-container{text-align:center; height:200px;} .em-container *{margin:40px; color:black;} </style></head><body class="em-container"><h1 style="color: black;">Verifique para criar conta</h1><p>Clique no link abaixo para criar sua conta Viauy:</p><a href="http://localhost/Frontend/Account/VerifyComplete/verifyComplete.php?verif_code_signup='.$codigo.'&password_signup='.$password_usuario_hashed.'&nombre_signup='.$nombre_usuario.'&correo_signup='.$correo_usuario.'&telefono_signup='.$telefono_usuario.'" style="background-color:black; border-radius:10px; color:white; padding:15px 30px; text-decoration:none; margin:25px; cursor:pointer;">Reset Password</a></body></html>';
                $mail->send();
                break;
        }
            $email_sended = true;
        } catch (Exception $e){
            $email_sended = false;
        }
        $email_exists = false;
        echo json_encode(["email_exists" => $email_exists, 'email_sended'=>$email_sended]);
        exit;
    }

} 
catch(PDOException $e) 
{
    //echo "Error en la consulta: " . $e->getMessage();
    //echo "Código de error: " . $e->getCode();
}
$conn = null;
?>