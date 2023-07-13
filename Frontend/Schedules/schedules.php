<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>
    <link rel="stylesheet" href="schedules.css">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />

    <script src="../Components/HeaderComp/header_comp.js"></script>
    <script src="../Components/MenuComp/menu_comp.js"></script>
    
    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>
    

    <link rel="stylesheet" href="../Components/ConfigComp/config_comp.css">
    <link rel="stylesheet" href="../Components/HeaderComp/header_comp.css">
    <link rel="stylesheet" href="../Components/FooterComp/footer_comp.css">
    <link rel="stylesheet" href="../Components/MenuComp/menu_comp.css">
</head>
<body>
    <?php include "../Components/ConfigComp/config_comp.php" ?>
    <?php include "../Components/MenuComp/menu_comp.php" ?>
    <section class="wrap-container" id="wrap-container">
        <?php include "../Components/HeaderComp/header_comp.php" ?>
        <h3 class="page-title Trad2"></h3>
        <div class="container">
            <div class="container-content">
                <form action="">
                    <div class="schedules-form-div"> 
                        <div class="form-div">
                            <div class="label-input-div">
                                <label for="form-from-dep" class="form-label Trad3"></label>
                                <select id="form-from-div" class="form-input" name="formFromDep">
                                    <option disabled selected hidden class="Trad4"></option>
                                    <option class="Trad5"></option>
                                    <option class="Trad6"></option>
                                    <option class="Trad7"></option>
                                    <option class="Trad8"></option>
                                </select>
                            </div>
                            <div class="label-input-div">
                                <label for="form-from-dep" class="form-label Trad9"></label>
                                <select id="form-from-div" class="form-input" name="formFromDep">
                                    <option disabled selected hidden class="Trad10"></option>
                                    <option class="Trad11"></option>
                                    <option class="Trad12"></option>
                                    <option class="Trad13"></option>
                                    <option class="Trad14"></option>
                                </select>
                            </div>
                        </div>
                        <button type="submit" class="submitBtn"><span class="material-symbols-rounded form-button-icon action-icon">play_arrow</span></button>
                    </div>
                        <div class="schedules-container">
                            <div class="departament-container">
                                <div class="departament">
                                    <h3 class="departament-title departament-orange dep-left Trad15"></h3>
                                    <p class="departament-title departament-complete-text dep-left Trad16"></p>
                                    <p class="dep-left Trad17"></p>
                                </div>
                                <div class="departament">
                                    <h3 class="departament-title departament-orange dep-right Trad18"></h3>
                                    <p class="departament-title departament-complete-text dep-right Trad19"></p>
                                    <p class="dep-right Trad20"></p>
                                </div>
                            </div>
                            <div class="schedules-content">
                                <div class="">
                                    <div class="schedule">
                                        <p>1:00</p>
                                        <p>2:00</p>
                                    </div>
                                    <div class="schedule">
                                        <p>1:00</p>
                                        <p>2:00</p>
                                    </div>
                                    <div class="schedule">
                                        <p>1:00</p>
                                        <p>2:00</p>
                                    </div>
                                    <div class="schedule">
                                        <p>1:00</p>
                                        <p>2:00</p>
                                    </div>
                                    <div class="schedule">
                                        <p>1:00</p>
                                        <p>2:00</p>
                                    </div>
                                    <div class="schedule">
                                        <p>1:00</p>
                                        <p>2:00</p>
                                    </div>
                                    <div class="schedule">
                                        <p>1:00</p>
                                        <p>2:00</p>
                                    </div>
                                </div>                             
                            </div>
                        </div>
                </form>
            </div>
            <?php include "../Components/FooterComp/footer_comp.php" ?>
        </div>
    </section>
    <script src="../Components/Scripts/Translate/Schedules/translateSchedules.js"></script>
    <script src="../Components/ConfigComp/config_comp.js"></script>
</body>
</html>