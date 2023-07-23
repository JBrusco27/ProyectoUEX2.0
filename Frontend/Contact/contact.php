<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>
        
    <!-- Enlace a estilos -->
    <link rel="stylesheet" href="contact.css">

    <!-- Dependencia para manejar archivos csv -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
    
    <!-- Dependencia para iconos (MaterialIcons) -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
    
    <!-- Logica predeterminada -->
    <script src="../Components/Scripts/default.js"></script>

    <!-- Logica de contact -->
    <script src="./contact.js"></script>
        
    <!-- Logica de header -->
    <script src="../Components/HeaderComp/header_comp.js"></script>
    
    <!-- Logica de menu -->
    <script src="../Components/MenuComp/menu_comp.js"></script>
    
    <!-- Estilos ( dependencias ) -->
    <link rel="stylesheet" href="../Components/ConfigComp/config_comp.css">
    <link rel="stylesheet" href="../Components/HeaderComp/header_comp.css">
    <link rel="stylesheet" href="../Components/FooterComp/footer_comp.css">
    <link rel="stylesheet" href="../Components/MenuComp/menu_comp.css">
</head>
<body>
    <!-- Sección configuración -->
    <?php include "../Components/ConfigComp/config_comp.php" ?>

    <!-- Sección menu mobile -->
    <?php include "../Components/MenuComp/menu_comp.php" ?>

    <!-- Container -->
    <section class="wrap-container" id="wrap-container">
        <!-- Header -->
        <?php include "../Components/HeaderComp/header_comp.php" ?>
        <h3 class="page-title Trad2"></h3>
        <section class="container">
            <div class="container-content">
                <!-- Formulario -->
                <form action="">
                    <div class="form-top">
                        <div class="form-left">
                            <div class="form-left-div">
                                <span class="material-symbols-rounded form-icon">person</span>
                                <div class="label-input-div">
                                    <label for="form-name" class="form-label form-label-left Trad3"></label>
                                    <input id="form-name" class="form-input form-input-right" name="formName" type="text" required>
                                </div>
                            </div>
                            <div class="form-left-div">
                                <span class="material-symbols-rounded form-icon">mail</span>
                                <div class="label-input-div">
                                    <label for="form-email" class="form-label form-label-left Trad4"></label>
                                    <input id="form-email" class="form-input form-input-right" name="formEmail" type="text" required>
                                </div>
                            </div>
                            <div class="form-left-div">
                                <span class="material-symbols-rounded form-icon">phone</span>
                                <div class="label-input-div">
                                    <label for="form-name" class="form-label form-label-left Trad5"></label>
                                    <input id="form-name" class="form-input form-input-right" name="formName" type="text" required>
                                </div>
                            </div>
                        </div>
                        <div class="form-right">
                            <div class="form-right-div">
                                <span class="material-symbols-rounded form-icon">chat</span>
                                <div class="right-label-input-div">
                                    <label for="form-from-dep" class="form-label Trad6"></label>
                                    <textarea id="form-message" class="form-input message-text-area" name="formFromDep" type="text"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button id="submit" class="submitBtn" type="submit"><span class="material-symbols-rounded form-button-icon">send</span></button>
                </form>
                <!-- Formulario -->
            </div>
            <!-- Footer -->
            <?php include "../Components/FooterComp/footer_comp.php" ?>
        </section>
    </section>
    <!-- Container -->
    
    <!-- Logica de Configuración -->
    <script src="../Components/ConfigComp/config_comp.js"></script>

    <!-- Enlace para traducir contact -->
    <script src="../Components/Scripts/Translate/Contact/translateContact.js"></script>

</body>
</html>