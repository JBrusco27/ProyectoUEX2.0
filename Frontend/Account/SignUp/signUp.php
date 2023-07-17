<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>

    <!-- Enlace a estilos -->
    <link rel="stylesheet" href="signUp.css">
    
    <!-- Logica de validación -->
    <script src="signUp.js"></script>
    
    <!-- Enlace para mostrar contraseñas -->
    <script src="../../Components/Scripts/showPswd.js"></script>
    
    <!-- Enlace para traducir sign up -->
    <script src="../../Components/Scripts/Translate/SignUp/translateSignup.js"></script>

    <!-- Dependencia para archivos manejar archivos csv -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

    <!-- Dependencia para iconos (MaterialIcons) -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
</head>
<body>
    <!-- Container -->
    <div class="container">
        <h3 class="Trad2"></h3>
        <!-- Contariner de restricciones -->
        <div class="warning-container">
            
            <div class="name-warning-content warning">
                <div class="warning-content">
                    <p class="warning-title">Nombre & Apellido</p>
                    &#9679 Debe tener entre 10 y 40 caracteres.
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-name">close</span>
            </div>

            <div class="email-warning-content warning">
                <div>
                    <p class="warning-title">Email</p>
                    &#9679 Ingrese un correo electronico valido.
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-email">close</span>
            </div>
            
            <div class="phone-warning-content warning">
                <div>
                    <p class="warning-title">Phone Number</p>
                    &#9679 Ingrese un número de telefono válido de 9 dígitos.
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-phone">close</span>
            </div>

            <div class="pswd-warning-content warning">
                <div>
                    <p class="warning-title">Password</p>
                    &#9679 Las dos contraseñas deben ser iguales.<br>
                    &#9679 Entre 8 y 30 caracteres.<br>
                    &#9679 Al menos un carácter especial.<br>
                    &#9679 Al menos una letra minúscula.<br>
                    &#9679 Al menos una letra mayúscula.<br>
                    &#9679 Al menos un número.
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-pswd">close</span>
            </div>
        </div>
        <!-- Contariner de restricciones -->
        <!-- Formulario -->
        <form id="form" action="consulta_sign_up.php" method="post">
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">person</span>
                <div class="label-input-div">
                    <label for="form-name" class="form-label Trad3"></label>
                    <input id="form-name" class="form-input" name="formName" type="text" maxlength="40" required>
                </div>
            </div>
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">phone</span>
                <div class="label-input-div">
                    <label for="form-phone" class="form-label Trad4"></label>
                    <input id="form-phone" class="form-input" name="formPhone" type="text" maxlength="11" required>
                </div>
            </div>
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">email</span>
                <div class="label-input-div">
                    <label for="form-email" class="form-label Trad5"></label>
                    <input style="text-transform:initial !important;" id="form-email" class="form-input" name="formEmail" type="email" maxlength="100" required>
                </div>
            </div>
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">lock</span>
                <div class="label-input-div">
                    <label for="form-pswd" class="form-label Trad6"></label>
                    <div class="input-show-pswd-div">
                        <input style="text-transform:initial !important;" id="form-pswd" class="form-input" name="formPswd" type="password" maxlength="32" required>
                        <div class="show-pswd" id="show-pswd">
                            <span class="material-symbols-rounded show-pswd-icon" id='show-pswd-icon'>visibility</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">lock</span>
                <div class="label-input-div">
                    <label for="form-confP  swd" class="form-label Trad7"></label>
                    <div class="input-show-pswd-div">
                        <input style="text-transform:initial !important;" id="form-confPswd" class="form-input" name="formConfPswd" type="password" maxlength="32" required>
                        <div class="show-pswd" id="show-pswd2">
                            <span class="material-symbols-rounded show-pswd-icon" id='show-pswd-icon2'>visibility</span>
                        </div>
                    </div>
                </div>
            </div>
            <button id="submit" class="submitBtn Trad8" type="submit"><span class="material-symbols-rounded form-button-icon">play_arrow</span></button>
        </form>
        <!-- Formulario -->
        <p class="alreadyAMember Trad9">
            <a href="../LogIn/logIn.php" class="Trad10"></a>
        </p>
    </div>
    <!-- Container -->
</body>
</html>