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
    <script src="../Components/Scripts/default.js" defer></script>

    <!-- Logica de contact -->
    <script src="./contact.js"></script>
        
    <!-- Logica de header -->
    <script src="../Components/HeaderComp/header_comp.js" defer></script>
    
    <!-- Logica de footer -->
    <script src="../Components/FooterComp/footer_comp.js" defer></script>
    
    <!-- Logica de menu -->
    <script src="../Components/MenuComp/menu_comp.js" defer></script>
    
    <!-- Estilos ( dependencias ) -->
    <link rel="stylesheet" href="../Components/ProfileComp/profile_comp.css">
    <link rel="stylesheet" href="../Components/ConfigComp/config_comp.css">
    <link rel="stylesheet" href="../Components/HeaderComp/header_comp.css">
    <link rel="stylesheet" href="../Components/FooterComp/footer_comp.css">
    <link rel="stylesheet" href="../Components/MenuComp/menu_comp.css">
    <link rel="stylesheet" href="../Components/BannerComp/banner_comp.css">

    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
</head>
<body>
    <!-- Sección configuración -->
    <?php include "../Components/ConfigComp/config_comp.php" ?>
    
    <!-- Sección perfil -->
    <?php include "../Components/ProfileComp/profile_comp.php" ?>

    <!-- Sección menu mobile -->
    <?php include "../Components/MenuComp/menu_comp.php" ?>

    <!-- Container -->
    <section class="wrap-container" id="wrap-container">
        <!-- Header -->
        <?php include "../Components/HeaderComp/header_comp.php" ?>
        <!-- Banner -->
        <?php include "../Components/BannerComp/banner_comp.php" ?>

        <section class="container">
            <div class="container-content">
                <div class="title-description-div">
                    <h2 class="title Trad6"></h2>
                    <p class="title-description Trad7"></p>
                </div>
                <!-- Formulario -->
                <form action="">
                    <div class="form-top">
                        <div class="form-left">
                            <div class="form-left-div">
                                <span class="material-symbols-rounded form-icon form-icon-left">person</span>
                                <div class="label-input-div">
                                    <label for="form-name" class="form-label form-label-left Trad2"></label>
                                    <input id="form-name" class="form-input" name="formName" type="text" required maxlength="40">
                                </div>
                            </div>
                            <div class="form-left-div">
                                <span class="material-symbols-rounded form-icon form-icon-left">mail</span>
                                <div class="label-input-div">
                                    <label for="form-email" class="form-label form-label-left Trad3"></label>
                                    <input id="form-email" class="form-input" name="formEmail" type="text" required maxlength="50">
                                </div>
                            </div>
                            <div class="form-left-div">
                                <span class="material-symbols-rounded form-icon form-icon-left">phone</span>
                                <div class="label-input-div">
                                    <label for="form-phone" class="form-label form-label-left Trad4"></label>
                                    <input id="form-phone" class="form-input" name="formName" type="text" required maxlength="10">
                                </div>
                            </div>
                        </div>
                        <div class="form-right">
                            <div class="form-right-div">
                                <div class="right-label-input-div">
                                    <div>
                                        <span class="material-symbols-rounded form-icon">chat</span>
                                        <label for="form-message" class="form-label-right Trad5"></label>
                                    </div>
                                    <textarea id="form-message" class="form-input-right message-text-area" name="formFromDep" type="text" maxlength="1000"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <p id="submit" class="submitBtn" type="submit"><span class="material-symbols-rounded form-button-icon">send</span></p>
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