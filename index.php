<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>
    
    <?php $raiz = __DIR__; ?>

    <!-- Enlace a estilos -->
    <link rel="stylesheet" href="./Frontend/Home/home.css">

    <!-- Dependencia para manejar archivos csv -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

    <!-- Dependencia para iconos (MaterialIcons) -->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
    
    <!-- Logica predeterminada -->
    <script src="./Frontend/Components/Scripts/default.js"></script>
    
    <!-- Logica de header -->
    <script src="./Frontend/Components/HeaderComp/header_comp.js"></script>
    
    <!-- Logica de menu -->
    <script src="./Frontend/Components/MenuComp/menu_comp.js"></script>
    
    <!-- Estilos ( dependencias ) -->
    <link rel="stylesheet" href="./Frontend/Components/ConfigComp/config_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/HeaderComp/header_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/FooterComp/footer_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/MenuComp/menu_comp.css">
</head>
<body>

    <!-- Sección configuración -->
    <?php include "./Frontend/Components/ConfigComp/config_comp.php" ?>

    <!-- Sección menu mobile -->
    <?php include "./Frontend/Components/MenuComp/menu_comp.php" ?>

    <!-- Container -->
    <section id="wrap-container" class="wrap-container">
        <!-- Header -->
        <?php include "./Frontend/Components/HeaderComp/header_comp.php" ?>
        <h3 class="page-title Trad2"></h3>
        <section class="container">
            <div class="container-content">
                <img class="container-content-img" src="./Frontend/Resources/viauyLogoNoBack.png" alt="">
                <h2 class="Trad3"></h2>
                <!-- Formulario -->
                <form action="">
                    <div class="form-input-container">
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">home</span>
                            <div class="label-input-div">
                                <label for="form-from-dep" class="form-label Trad4"></label>
                            <select id="form-from-div" class="form-input" name="formFromDep">
                                <option disabled selected hidden class="Trad5"></option>
                                <option class="Trad6"></option>
                                <option class="Trad7"></option>
                                <option class="Trad8"></option>
                                <option class="Trad9"></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-cont-div">
                        <span class="material-symbols-rounded form-icon">home</span>
                        <div class="label-input-div">
                            <label for="form-from-dep" class="form-label Trad10"></label>
                            <select id="form-from-div" class="form-input" name="formFromDep">
                                <option disabled selected hidden class="Trad11"></option>
                                <option class="Trad12"></option>
                                <option class="Trad13"></option>
                                <option class="Trad14"></option>
                                <option class="Trad15"></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-cont-div">
                        <span class="material-symbols-rounded form-icon">home_pin</span>
                        <div class="label-input-div">
                            <label for="form-from-dep" class="form-label Trad16"></label>
                            <select id="form-from-div" class="form-input" name="formFromDep">
                                <option disabled selected hidden class="Trad17"></option>
                                <option class="Trad18"></option>
                                <option class="Trad19"></option>
                                <option class="Trad20"></option>
                                <option class="Trad21"></option>
                            </select>
                            </div>
                        </div>
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">home_pin</span>
                            <div class="label-input-div">
                                <label for="form-from-dep" class="form-label Trad22"></label>
                                <select id="form-from-div" class="form-input" name="formFromDep">
                                    <option disabled selected hidden class="Trad23"></option>
                                    <option class="Trad24"></option>
                                    <option class="Trad25"></option>
                                    <option class="Trad26"></option>
                                    <option class="Trad27"></option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">calendar_month</span>
                            <div class="label-input-div">
                                <label for="form-from-dep" class="form-label Trad28"></label>
                                <input id="form-from-div" class="form-input" name="formFromDep" type="date">
                            </div>
                        </div>
                        
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">calendar_month</span>
                            <div class="label-input-div">
                                <label for="form-from-dep" class="form-label Trad29"></label>
                                <input id="form-from-div" class="form-input" name="formFromDep" type="date">
                            </div>
                        </div>
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">airline_seat_recline_extra</span>
                            <div class="label-input-div">
                                <label for="form-from-dep" class="form-label Trad30"></label>
                                <select id="form-from-div" class="form-input" name="formFromDep">
                                    <option disabled selected>1</option>
                                    <option>2</option>
                                    <option>3</option>
                                    <option>4</option>
                                    <option>5</option>
                                </select>
                            </div>
                        </div>
                        <div class="form-cont-div form-cont-div-button">
                            <div class="label-input-div label-input-div-button">
                                <input id="form-from-div" class="form-input-button Trad31" name="formFromDep" type="button" value="">
                            </div>
                            <div class="label-input-div label-input-div-button">
                                <input id="form-from-div" class="form-input-button Trad32" name="formFromDep" type="button" value="">
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="submitBtn"><span class="Trad33"></span></button>
                </form>
                <!-- Formulario -->
            </div>
            <!-- Footer -->
            <?php include "./Frontend/Components/FooterComp/footer_comp.php" ?>
        </section>
    </section>
    <!-- Container -->
    
    <!-- Logica de Configuración -->
    <script src="./Frontend/Components/ConfigComp/config_comp.js"></script>
    
    <!-- Enlace para traducir home -->
    <script src="./Frontend/Components/Scripts/Translate/Home/translateHome.js"></script>

</body>
</html>