<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>
    
    <script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
    <?php $raiz2 = __DIR__?>
    <?php $raiz = './'?>
    <script>
        const raiz = "<?php echo $raiz; ?>";
    </script>

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

    <!-- Logica de home -->
    <script src="./Frontend/Home/home.js" defer></script>

    <!-- Logica de booking -->
    <script src="./Frontend/Components/BookingComp/booking_comp.js" defer></script>

    <script src="https://unpkg.com/sweetalert/dist/sweetalert.min.js"></script>
    
    <!-- Estilos ( dependencias ) -->
    <link rel="stylesheet" href="./Frontend/Components/ProfileComp/profile_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/ConfigComp/config_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/HeaderComp/header_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/FooterComp/footer_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/MenuComp/menu_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/BannerComp/banner_comp.css">
    <link rel="stylesheet" href="./Frontend/Components/BookingComp/booking_comp.css">
</head>
<body>
    <!-- Reserva horarios -->
    <?php include "./Frontend/Components/BookingComp/booking_comp.php" ?>

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
                    <div class="form-input-container"/>
                        <!--  -->
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">home</span>
                            <div class="label-input-div">
                                <label for="form-from-div" class="form-label Trad3"></label>
                                <select id="form-from-div" class="form-input" name="formFromDep" required>
                                    <option disabled selected hidden class="Trad4" ></option>
                                </select>
                            </div>
                        </div>
                        <!--  -->
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">home_pin</span>
                            <div class="label-input-div">
                                <label for="form-to-div" class="form-label Trad5"></label>
                                <select id="form-to-div" class="form-input" name="formToDep" required>
                                    <option disabled selected hidden class="Trad6"></option>
                                </select>
                            </div>
                        </div>
                        <!--  -->
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">airline_seat_recline_extra</span>
                            <div class="label-input-div">
                                <label for="form-trav-div" class="form-label Trad9"></label>
                                <input id="form-trav-div" class="form-input" type="number" min="1" max="5" value="1" name="formTravDep" required>
                            </div>
                        </div>
                        <!--  -->
                        <div class="form-cont-div">
                            <span class="material-symbols-rounded form-icon">calendar_month</span>
                            <div class="label-input-div">
                                <label for="form-calIda-div" class="form-label Trad7"></label>
                                <input id="form-calIda-div" class="form-input" name="formCalIdaDep" type="date" min='' required>
                            </div>
                        </div>
                        <!--  -->
                        <div class="form-cont-div" id="form-cont-div-calVenida">
                            <span class="material-symbols-rounded form-icon">calendar_month</span>
                            <div class="label-input-div">
                                <label for="form-calVenida-div" class="form-label Trad8"></label>
                                <input id="form-calVenida-div" class="form-input" name="formCalVenidaDep" type="date" min='' required>
                            </div>
                        </div>
                        <!--  -->
                        <div class="form-cont-div form-cont-div-button">
                            <div class="label-input-div label-input-div-button">
                                <input id="form-ida-div" class="form-input-button Trad10" name="formIdaDep" type="button" value="1">
                            </div>
                            <div class="label-input-div label-input-div-button">
                                <input id="form-idavenida-div" class="form-input-button Trad11" name="formIdaVenidaDep" type="button" value="0  ">
                            </div>
                        </div>
                        <!--  -->
                    </div>
                    <p class="submitBtn"><span class="Trad12"></span></p>
                </form>
                <!-- Formulario -->
                <section class="section-benefits">
                    <div class="section-benefits-item">
                        <img class="section-image" src="./Frontend/Resources/Marketing/section-image-1.svg" alt="">
                        <h3 class="section-subtitle Trad13"></h3>
                        <p class="section-text Trad14"></p>
                    </div>
                    <div class="section-benefits-item">
                        <img class="section-image" src="./Frontend/Resources/Marketing/section-image-2.svg" alt="">
                        <h3 class="section-subtitle Trad15"></h3>
                        <p class="section-text Trad16"></p>
                    </div>
                    <div class="section-benefits-item">
                        <img class="section-image" src="./Frontend/Resources/Marketing/section-image-3.svg" alt="">
                        <h3 class="section-subtitle Trad17"></h3>
                        <p class="section-text Trad18"></p>
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