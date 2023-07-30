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
    
    <!-- Logica de footer -->
    <script src="../Components/FooterComp/footer_comp.js"></script>
    
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
                <div class="title-description-div">
                    <h2 class="title Trad7"></h2>
                    <p class="title-description Trad8"></p>
                </div>
                <!-- Formulario -->
                <form action="">
                    <div class="form-top">
                        <div class="form-left">
                            <div class="form-left-div">
                                <span class="material-symbols-rounded form-icon">person</span>
                                <div class="label-input-div">
                                    <label for="form-name" class="form-label form-label-left Trad3"></label>
                                    <input id="form-name" class="form-input" name="formName" type="text" required>
                                </div>
                            </div>
                            <div class="form-left-div">
                                <span class="material-symbols-rounded form-icon">mail</span>
                                <div class="label-input-div">
                                    <label for="form-email" class="form-label form-label-left Trad4"></label>
                                    <input id="form-email" class="form-input" name="formEmail" type="text" required>
                                </div>
                            </div>
                            <div class="form-left-div">
                                <span class="material-symbols-rounded form-icon">phone</span>
                                <div class="label-input-div">
                                    <label for="form-phone" class="form-label form-label-left Trad5"></label>
                                    <input id="form-phone" class="form-input" name="formName" type="text" required>
                                </div>
                            </div>
                        </div>
                        <div class="form-right">
                            <div class="form-right-div">
                                <span class="material-symbols-rounded form-icon">chat</span>
                                <div class="right-label-input-div">
                                    <label for="form-message" class="form-label-right Trad6"></label>
                                    <textarea id="form-message" class="form-input-right message-text-area" name="formFromDep" type="text"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button id="submit" class="submitBtn" type="submit"><span class="material-symbols-rounded form-button-icon">send</span></button>
                </form>
                <!-- Formulario -->
                <!-- <section class="section-assistence">
                    <div class="assistence-item">
                        <img class="assistence-image" src="/Frontend/Resources/Marketing/help-center.svg" alt="">
                        <h3 class="assistence-item-title">Guidance Tailored for You</h3>
                        <p class="assistence-item-description">Personalized assistance at every step. Your satisfaction is our priority.</p>
                    </div>
                    <div class="assistence-item">
                        <img class="assistence-image" src="/Frontend/Resources/Marketing/help-center.svg" alt="">
                        <h3 class="assistence-item-title">Expert Tech Suppor</h3>
                        <p class="assistence-item-description">Tech experts ready to help. We've got you covered.</p>
                    </div>
                    <div class="assistence-item">
                        <img class="assistence-image" src="/Frontend/Resources/Marketing/help-center.svg" alt="">
                        <h3 class="assistence-item-title">Instant Answers</h3>
                        <p class="assistence-item-description">Common questions, clear solutions. Check our FAQ or contact us.</p>
                    </div>
                </section> -->
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