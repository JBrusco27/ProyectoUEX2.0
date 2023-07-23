<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>

    <!-- Enlace a estilos -->
    <link rel="stylesheet" href="aboutUs.css">
    
    <!-- Dependencia para manejar archivos csv -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
    
    <!-- Dependencia para iconos (MaterialIcons) -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
    
    <!-- Logica predeterminada -->
    <script src="../Components/Scripts/default.js"></script>
    
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
        <div class="container">
            <div class="container-content">
                <div>
                    <h2 class="Trad3 title-company"></h2>
                    <p class="company-text Trad4"></p>
                </div>
                <div>
                    <h3 class="Trad5 title"></h3>
                    <p class="company-text Trad6"></p>
                </div>
                <div>
                    <h3 class="Trad7 title"></h3>
                    <p class="company-text Trad8"></p>
                </div>
                <div>
                    <h3 class="Trad9 title"></h3>
                    <p class="company-text Trad10"></p>
                    <p class="company-text Trad11"></p>
                    <p class="company-text Trad12"></p>
                    <p class="company-text Trad13"></p>
                    <p class="company-text Trad14"></p>
                </div>
                <div>
                    <h3 class="Trad15 title"></h3>
                    <p class="company-text Trad16"></p>
                    <p class="company-text Trad17"></p>
                    <p class="company-text Trad18"></p>
                    <p class="company-text Trad19"></p>
                    <p class="company-text Trad20"></p>
                    <p class="company-text Trad21"></p>
                    <p class="company-text Trad22"></p>
                </div>
            </div>
            <!-- Footer -->
            <?php include "../Components/FooterComp/footer_comp.php" ?>
        </div>
    </section>
    <!-- Container -->

    <!-- Logica de Configuración -->
    <script src="../Components/ConfigComp/config_comp.js"></script>

    <!-- Enlace para traducir about us -->
    <script src="../Components/Scripts/Translate/AboutUs/translateAboutUs.js"></script>
</body>
</html>