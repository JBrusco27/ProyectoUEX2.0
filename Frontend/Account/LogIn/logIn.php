<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>

    <!-- Enlace a estilos -->
    <link rel="stylesheet" href="logIn.css">

    <!-- Logica de validación -->
    <script src="logIn.js"></script>

    <!-- Logica predeterminada -->
    <script src="../../Components/Scripts/default.js" defer></script>

    <!-- Enlace para mostrar contraseñas -->
    <script src="../../Components/Scripts/showPswd.js"></script>
    
    <!-- Enlace para traducir log in -->
    <script src="../../Components/Scripts/Translate/LogIn/translateLogin.js"></script>

    <!-- Dependencia para archivos manejar archivos csv -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

    <!-- Dependencia para iconos (MaterialIcons) -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
</head>
<body>
    <!-- Container -->
    <div class="container">
        <a href="../../../index.php" class="login-logo-div"><img src="../../Resources/viauyLogoNoBack.png" class="login-logo" alt="logo"></a>
        <h3 class="Trad2"></h3> 
        <!-- Contariner de restricciones -->
        <div class="warning-container">
            <div class="email-warning-content warning">
                <div class="Trad3">
                    <p class="warning-title Trad4"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-email">close</span>
            </div>
            <div class="pswd-warning-content warning">
                <div class="Trad5">
                    <p class="warning-title Trad6"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-pswd">close</span>
            </div>
            <div class="pswd-bd-valid-warning-content warning">
                <div class="Trad7">
                    <p class="warning-title Trad8"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-pswd-bd-valid">close</span>
            </div>
        </div>
        <!-- Contariner de restricciones -->
        <!-- Formulario -->
        <form id="form">
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">email</span>
                <div class="label-input-div">
                    <label for="form-email" class="form-label Trad9"></label>
                    <input style="text-transform:initial !important;" id="form-email" class="form-input" name="formEmail" type="email" required>
                </div>
            </div>
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">lock</span>
                <div class="label-input-div">
                    <label for="form-pswd" class="form-label Trad10"></label>
                    <div class="input-show-pswd-div">
                        <input style="text-transform:initial !important;" id="form-pswd" class="form-input" name="formPswd" type="password" required>
                        <div class="show-pswd" id="show-pswd">
                            <span class="material-symbols-rounded show-pswd-icon" id='show-pswd-icon' >visibility</span>
                        </div>
                    </div>
                </div>
            </div>
            <p id="submit" class="submitBtn Trad11"><span class="material-symbols-rounded form-button-icon">play_arrow</span></p>
        </form>
        <!-- Formulario -->
        <div class="login-bottom-info">
            <p class="notAMember Trad12"><a href="../SignUp/signUp.php" class="Trad13"></a></p>
            <a class="forgotPaswd Trad14" href="../ForgotPswd/forgotPswd.php"></a>
        </div>
    </div>
    <!-- Container -->
</body>
</html>