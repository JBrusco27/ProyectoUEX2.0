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
    <link rel="stylesheet" href="resetPswd.css">

    <!-- Logica -->
    <script src="resetPswd.js"></script>

    <!-- Logica predeterminada -->
    <script src="../../Components/Scripts/default.js" defer></script>
    
    <!-- Enlace para mostrar contraseñas -->
    <script src="../../Components/Scripts/showPswd.js"></script>

    <!-- Enlace para traducir -->
    <script src="../../Components/Scripts/Translate/Reset_Pswd/translateResetPswd.js" ></script>

    <!-- Dependencia para manejar archivos csv -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

    <!-- Dependencia para iconos (MaterialIcons) -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
</head>
<body>
    <!-- Cargando -->
    <script src="../../Components/Scripts/loading.js"></script>
    <!-- Container -->
    <div class="container">
        <h3 class="Trad2"></h3>
        <!-- Contariner de restricciones -->
        <div class="warning-container">
            <div class="pswd-warning-content warning">
                <div class="Trad3">
                    <p class="warning-title Trad4"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-pswd">close</span>
            </div>
            <div class="pswd-are-same-warning-content warning">
                <div class="Trad8">
                    <p class="warning-title Trad9"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-pswd-arent-same">close</span>
            </div>
            <div class="pswd-bd-valid-warning-content warning">
                <div class="Trad10">
                    <p class="warning-title Trad11"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-pswd-bd-valid">close</span>
            </div>
            <div class="pswd-are-same-bd-warning-content warning">
                <div class="Trad12">
                    <p class="warning-title Trad13"></p>
                </div>
                <span class="material-symbols-rounded form-button-icon close-warning" id="close-warning-pswd-are-same-bd">close</span>
            </div>
        </div>
        <!-- Contariner de restricciones --> 
        <!-- Formulario -->
        <form id="form">
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">lock</span>
                <div class="label-input-div">
                    <label for="form-pswd" class="form-label Trad5"></label>
                    <div class="input-show-pswd-div">
                        <input style="text-transform:initial !important;" id="form-pswd" class="form-input" name="formPswd" type="password" required>
                        <div class="show-pswd" id="show-pswd">
                            <span class="material-symbols-rounded show-pswd-icon" id='show-pswd-icon' >visibility</span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">lock</span>
                <div class="label-input-div">
                    <label for="form-confPswd" class="form-label Trad6"></label>
                    <div class="input-show-pswd-div">
                        <input style="text-transform:initial !important;" id="form-confPswd" class="form-input" name="formConfPswd" type="password" maxlength="32" required>
                        <div class="show-pswd" id="show-pswd2">
                            <span class="material-symbols-rounded show-pswd-icon" id='show-pswd-icon2'>visibility</span>
                        </div>
                    </div>
                </div>
            </div>
            <p id="submit" class="submitBtn Trad7"><span class="material-symbols-rounded form-button-icon">play_arrow</span></p>
        </form>
        <!-- Formulario -->
    </div>
    <!-- Container -->
</body>
</html>