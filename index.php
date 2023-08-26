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
    <script src="./Frontend/Components/Scripts/default.js" defer></script>
    
    <!-- Logica de header -->
    <script src="./Frontend/Components/HeaderComp/header_comp.js" defer></script>

    <!-- Logica de footer -->
    <script src="./Frontend/Components/FooterComp/footer_comp.js" defer></script>
    
    <!-- Logica de menu -->
    <script src="./Frontend/Components/MenuComp/menu_comp.js" defer></script>
    
    <!-- Estilos ( dependencias ) -->
    <link rel="stylesheet" href="./Frontend/Components/ProfileComp/profile_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/ConfigComp/config_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/HeaderComp/header_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/FooterComp/footer_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/MenuComp/menu_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/BannerComp/banner_comp.css">
</head>
<body>
    <!-- Sección configuración -->
    <?php include "./Frontend/Components/ConfigComp/config_comp.php" ?>

    <!-- Sección perfil -->
    <?php include "./Frontend/Components/ProfileComp/profile_comp.php" ?>

    <!-- Sección menu mobile -->
    <?php include "./Frontend/Components/MenuComp/menu_comp.php" ?>

    <!-- Container -->
    <section id="wrap-container" class="wrap-container">
        <!-- Header -->
        <?php include "./Frontend/Components/HeaderComp/header_comp.php" ?>
        <!-- Banner -->
        <?php include "./Frontend/Components/BannerComp/banner_comp.php" ?>

        <section class="container">
            <div class="container-content">
                <img class="container-content-img" src="./Frontend/Resources/viauyLogoNoBack.png" alt="">
                <h2 class="Trad2"></h2>
                <!-- Formulario -->
                <form action="" class="home-form">
                    <div class="form-input-container">
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">home</span>
                            <div class="label-input-div">
                                <label for="form-from-div" class="form-label Trad3"></label>
                            <select id="form-from-div" class="form-input" name="formFromDep">
                                <option disabled selected hidden class="Trad4"></option>
                                <option class="Trad5"></option>
                                <option class="Trad6"></option>
                                <option class="Trad7"></option>
                                <option class="Trad8"></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-cont-div">
                        <span class="material-symbols-rounded form-icon">home</span>
                        <div class="label-input-div">
                            <label for="form-from-div" class="form-label Trad9"></label>
                            <select id="form-from-div" class="form-input" name="formFromDep">
                                <option disabled selected hidden class="Trad10"></option>
                                <option class="Trad11"></option>
                                <option class="Trad12"></option>
                                <option class="Trad13"></option>
                                <option class="Trad14"></option>
                            </select>
                        </div>
                    </div>
                    <div class="form-cont-div">
                        <span class="material-symbols-rounded form-icon">home_pin</span>
                        <div class="label-input-div">
                            <label for="form-from-div" class="form-label Trad15"></label>
                            <select id="form-from-div" class="form-input" name="formFromDep">
                                <option disabled selected hidden class="Trad16"></option>
                                <option class="Trad17"></option>
                                <option class="Trad18"></option>
                                <option class="Trad19"></option>
                                <option class="Trad20"></option>
                            </select>
                            </div>
                        </div>
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">home_pin</span>
                            <div class="label-input-div">
                                <label for="form-from-div" class="form-label Trad21"></label>
                                <select id="form-from-div" class="form-input" name="formFromDep">
                                    <option disabled selected hidden class="Trad22"></option>
                                    <option class="Trad23"></option>
                                    <option class="Trad24"></option>
                                    <option class="Trad25"></option>
                                    <option class="Trad26"></option>
                                </select>
                            </div>
                        </div>
                        
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">calendar_month</span>
                            <div class="label-input-div">
                                <label for="form-from-div" class="form-label Trad27"></label>
                                <input id="form-from-div" class="form-input" name="formFromDep" type="date">
                            </div>
                        </div>
                        
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">calendar_month</span>
                            <div class="label-input-div">
                                <label for="form-from-div" class="form-label Trad28"></label>
                                <input id="form-from-div" class="form-input" name="formFromDep" type="date">
                            </div>
                        </div>
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">airline_seat_recline_extra</span>
                            <div class="label-input-div">
                                <label for="form-from-div" class="form-label Trad29"></label>
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
                                <input id="form-from-div" class="form-input-button Trad30" name="formFromDep" type="button" value="">
                            </div>
                            <div class="label-input-div label-input-div-button">
                                <input id="form-from-div" class="form-input-button Trad31" name="formFromDep" type="button" value="">
                            </div>
                        </div>
                    </div>
                    <button type="submit" class="submitBtn"><span class="Trad32"></span></button>
                </form>
                <!-- Formulario -->
                <section class="section-benefits">
                    <div class="section-benefits-item">
                        <img class="section-image" src="./Frontend/Resources/Marketing/section-image-1.svg" alt="">
                        <h3 class="section-subtitle Trad33"></h3>
                        <p class="section-text Trad34"></p>
                    </div>
                    <div class="section-benefits-item">
                        <img class="section-image" src="./Frontend/Resources/Marketing/section-image-2.svg" alt="">
                        <h3 class="section-subtitle Trad35"></h3>
                        <p class="section-text Trad36"></p>
                    </div>
                    <div class="section-benefits-item">
                        <img class="section-image" src="./Frontend/Resources/Marketing/section-image-3.svg" alt="">
                        <h3 class="section-subtitle Trad37"></h3>
                        <p class="section-text Trad38"></p>
                    </div>
                </section>
                <!-- <section class="section-how-to-buy">
                    <div class="section-how-to-buy-item section-how-to-buy-item-1">
                        <img class="section-image" src="./Frontend/Resources/Marketing/section-image-1.svg" alt="">
                        <h3 class="section-subtitle">Compare cheap flights and train tickets with buses</h3>
                        <p class="section-text">With Omio, you can compare airline tickets with train tickets and Greyhound bus tickets.</p>
                    </div>
                    <div class="section-how-to-buy-item section-how-to-buy-item-1">
                        <img class="section-image" src="./Frontend/Resources/Marketing/section-image-1.svg" alt="">
                        <h3 class="section-subtitle">Compare cheap flights and train tickets with buses</h3>
                        <p class="section-text">With Omio, you can compare airline tickets with train tickets and Greyhound bus tickets.</p>
                    </div>
                    <div class="section-how-to-buy-item section-how-to-buy-item-1">
                        <img class="section-image" src="./Frontend/Resources/Marketing/section-image-1.svg" alt="">
                        <h3 class="section-subtitle">Compare cheap flights and train tickets with buses</h3>
                        <p class="section-text">With Omio, you can compare airline tickets with train tickets and Greyhound bus tickets.</p>
                    </div>
                </section> -->
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