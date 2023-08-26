<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>

    <!-- Enlace a estilos -->
    <link rel="stylesheet" href="schedules.css">

    <!-- Dependencia para manejar archivos csv -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

    <!-- Dependencia para iconos (MaterialIcons) -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />

    <!-- Logica predeterminada -->
    <script src="../Components/Scripts/default.js" defer></script>

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

        <div class="container">
            <div class="container-content">
                <div class="title-description-div">
                    <h2 class="title Trad20"></h2>
                    <p class="title-description Trad21"></p>
                </div>
                <!-- Formulario -->
                <form action="">
                    <div class="schedules-form-div"> 
                        <div class="form-div">
                            <div class="label-input-div">
                                <label for="form-from-dep" class="form-label Trad2"></label>
                                <select id="form-from-div" class="form-input" name="formFromDep">
                                    <option disabled selected hidden class="Trad3"></option>
                                    <option class="Trad4"></option>
                                    <option class="Trad5"></option>
                                    <option class="Trad6"></option>
                                    <option class="Trad7"></option>
                                </select>
                            </div>
                            <div class="label-input-div">
                                <label for="form-from-dep" class="form-label Trad8"></label>
                                <select id="form-from-div" class="form-input" name="formFromDep">
                                    <option disabled selected hidden class="Trad9"></option>
                                    <option class="Trad10"></option>
                                    <option class="Trad11"></option>
                                    <option class="Trad12"></option>
                                    <option class="Trad13"></option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" class="submitBtn"><span class="material-symbols-rounded form-button-icon action-icon">send</span></button>
                    </div>
                </form>
                <!-- Formulario -->
                <div class="schedules-content">
                    <div class="schedules-container">
                        <div class="departament-container">
                            <div class="departament">
                                <h3 class="departament-title departament-orange dep-left Trad14"></h3>
                                <p class="departament-title departament-complete-text dep-left Trad15"></p>
                                <p class="dep-left Trad16"></p>
                            </div>
                            <div class="departament">
                                <h3 class="departament-title departament-orange dep-right Trad17"></h3>
                                <p class="departament-title departament-complete-text dep-right Trad18"></p>
                                <p class="dep-right Trad19"></p>
                            </div>
                        </div>
                    </div>
                    <div class="">
                        <div class="schedule">
                            <p>11:00</p>
                            <p>13:00</p>
                        </div>
                        <div class="schedule">
                            <p>12:00</p>
                            <p>14:00</p>
                        </div>
                        <div class="schedule">
                            <p>13:00</p>
                            <p>15:00</p>
                        </div>
                        <div class="schedule">
                            <p>14:00</p>
                            <p>16:00</p>
                        </div>
                        <div class="schedule">
                            <p>15:00</p>
                            <p>17:00</p>
                        </div>
                        <div class="schedule">
                            <p>16:00</p>
                            <p>18:00</p>
                        </div>
                        <div class="schedule">
                            <p>17:00</p>
                            <p>20:00</p>
                        </div>
                    </div>                             
                </div>
            </div>
            <!-- Footer -->
            <?php include "../Components/FooterComp/footer_comp.php" ?>
        </div>
    </section>
    <!-- Container -->
    
    <!-- Logica de Configuración -->
    <script src="../Components/ConfigComp/config_comp.js"></script>

    <!-- Enlace para traducir schedules -->
    <script src="../Components/Scripts/Translate/Schedules/translateSchedules.js"></script>

</body>
</html>