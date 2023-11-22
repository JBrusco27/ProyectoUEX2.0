<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>

    <?php $raiz = '../../../'?>
    <script>
        const raiz = "<?php echo $raiz; ?>";
    </script>

    <!-- Enlace a estilos -->
    <link rel="stylesheet" href="forgotPswd.css">

    <!-- Estilos ( dependencias ) -->
    <link rel="stylesheet" href="../../Components/VerifyWasSend/verifyWasSend.css">

    <!-- Logica -->
    <script src="forgotPswd.js"></script>

    <!-- Logica predeterminada -->
    <script src="../../Components/Scripts/default.js" defer></script>

    <!-- Enlace para traducir -->
    <script src="../../Components/Scripts/Translate/Forgot_Pswd/translateForgotPswd.js" ></script>

    <!-- Dependencia para manejar archivos csv -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

    <!-- Dependencia para iconos (MaterialIcons) -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
</head>
<body>

    <?php include "../../Components/VerifyWasSend/verifyWasSend.php" ?>

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
            <div class="email-exists-warning-content warning">
                <div class="Trad7">
                    <p class="warning-title Trad8"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-email-exists">close</span>
            </div>
        </div>
        <!-- Contariner de restricciones --> 
        <!-- Formulario -->
        <form id="form">
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">email</span>
                <div class="label-input-div">
                    <label for="form-email" class="form-label Trad5"></label>
                    <input style="text-transform:initial !important;" id="form-email" class="form-input" name="formEmail" type="email" required>
                </div>
            </div>
            <p id="submit" class="submitBtn Trad6"><span class="material-symbols-rounded form-button-icon">play_arrow</span></p>
        </form>
        <!-- Formulario -->
    </div>
    <!-- Container -->
</body>
</html>