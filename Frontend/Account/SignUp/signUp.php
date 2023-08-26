<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>

    <!-- Enlace a estilos -->
    <link rel="stylesheet" href="signUp.css">

    <!-- Estilos ( dependencias ) -->
    <link rel="stylesheet" href="/Frontend/Components/VerifyWasSend/verifyWasSend.css">
    
    <!-- Logica de validación -->
    <script src="signUp.js"></script>

    <!-- Logica predeterminada -->
    <script src="../../Components/Scripts/default.j" defer></script>
    
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
<?php include "../../Components/VerifyWasSend/verifyWasSend.php" ?>
    <!-- Container -->
    <div class="container">
        <a href="/" class="login-logo-div"><img src="/Frontend/Resources/viauyLogoNoBack.png" href='/' class="login-logo" alt="logo"></a>
        <h3 class="Trad2"></h3>
        <!-- Contariner de restricciones -->
        <div class="warning-container">   
            <div class="name-warning-content warning">
                <div class="Trad3">
                    <p class="warning-title Trad4"></p>      
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-name">close</span>
            </div>
            <div class="email-warning-content warning">
                <div class="Trad5">
                    <p class="warning-title Trad6"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-email">close</span>
            </div> 
            <div class="phone-warning-content warning">
                <div class="Trad7">
                    <p class="warning-title Trad8"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-phone">close</span>
            </div>
            <div class="pswd-warning-content warning">
                <div class="Trad9">
                    <p class="warning-title Trad10"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-pswd">close</span>
            </div>
            <div class="difPswds-warning-content warning">
                <div class="Trad11">
                    <p class="warning-title Trad12"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-dif-pswd">close</span>
            </div>
            <div class="emailExists-warning-content warning">
                <div class="Trad13">
                    <p class="warning-title Trad14"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-email-exists">close</span>
            </div>
        </div>
        <!-- Contariner de restricciones -->
        <!-- Formulario -->
        <form id="form">
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">person</span>
                <div class="label-input-div">
                    <label for="form-name" class="form-label Trad15"></label>
                    <input id="form-name" class="form-input" name="formName" type="text" maxlength="40" required>
                </div>
            </div>
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">phone</span>
                <div class="label-input-div">
                    <label for="form-phone" class="form-label Trad16"></label>
                    <input id="form-phone" class="form-input" name="formPhone" type="text" maxlength="11" required>
                </div>
            </div>
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">email</span>
                <div class="label-input-div">
                    <label for="form-email" class="form-label Trad17"></label>
                    <input style="text-transform:initial !important;" id="form-email" class="form-input" name="formEmail" type="email" maxlength="100" required>
                </div>
            </div>
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">lock</span>
                <div class="label-input-div">
                    <label for="form-pswd" class="form-label Trad18"></label>
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
                    <label for="form-confPswd" class="form-label Trad19"></label>
                    <div class="input-show-pswd-div">
                        <input style="text-transform:initial !important;" id="form-confPswd" class="form-input" name="formConfPswd" type="password" maxlength="32" required>
                        <div class="show-pswd" id="show-pswd2">
                            <span class="material-symbols-rounded show-pswd-icon" id='show-pswd-icon2'>visibility</span>
                        </div>
                    </div>
                </div>
            </div>
            <p id="submit" class="submitBtn Trad20"><span class="material-symbols-rounded form-button-icon">play_arrow</span></p>
        </form>
        <!-- Formulario -->
        <p class="alreadyAMember Trad21">
            <a href="../LogIn/logIn.php" class="Trad22"></a>
        </p>
    </div>
    <!-- Container -->
</body>
</html>