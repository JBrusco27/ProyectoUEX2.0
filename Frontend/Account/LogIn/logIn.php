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
        </div>
        <!-- Contariner de restricciones -->
        <!-- Formulario -->
        <form id="form" action="../../../Backend/Requests/consulta_sign_in.php" method="post">
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">email</span>
                <div class="label-input-div">
                    <label for="form-email" class="form-label Trad7"></label>
                    <input style="text-transform:initial !important;" id="form-email" class="form-input" name="formEmail" type="email" required>
                </div>
            </div>
            <div class="form-div">
                <span class="material-symbols-rounded show-pswd-icon">lock</span>
                <div class="label-input-div">
                    <label for="form-pswd" class="form-label Trad8"></label>
                    <div class="input-show-pswd-div">
                        <input style="text-transform:initial !important;" id="form-pswd" class="form-input" name="formPswd" type="password" required>
                        <div class="show-pswd" id="show-pswd">
                            <span class="material-symbols-rounded show-pswd-icon" id='show-pswd-icon' >visibility</span>
                        </div>
                    </div>
                </div>
            </div>
            <button id="submit" class="submitBtn Trad9" type="submit"><span class="material-symbols-rounded form-button-icon">play_arrow</span></button>
        </form>
        <!-- Formulario -->
        <div class="login-bottom-info">
            <p class="notAMember Trad10"><a href="../SignUp/signUp.php" class="Trad11"></a></p>
            <a class="forgotPaswd Trad12" href=""></a>
        </div>
    </div>
    <!-- Container -->
</body>
</html>