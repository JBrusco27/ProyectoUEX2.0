<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>
    <link rel="stylesheet" href="contact.css">

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />

    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

    <script src="../Components/HeaderComp/header_comp.js"></script>
    <script src="../Components/MenuComp/menu_comp.js"></script>
    
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
        <section class="container">
            <div class="container-content">
                <form action="">
                    <div class="form-top">
                        <div class="form-left">
                            <div class="form-left-div">
                            <span class="material-symbols-rounded form-icon">person</span>
                                <div class="label-input-div">
                                    <label for="form-name" class="form-label Trad3"></label>
                                    <input id="form-name" class="form-input" name="formName" type="text" required>
                                </div>
                            </div>
                            <div class="form-left-div">
                            <span class="material-symbols-rounded form-icon">mail</span>
                                <div class="label-input-div">
                                    <label for="form-email" class="form-label Trad4"></label>
                                    <input id="form-email" class="form-input" name="formEmail" type="text" required>
                                </div>
                            </div>
                            <div class="form-left-div">
                            <span class="material-symbols-rounded form-icon">phone</span>
                                <div class="label-input-div">
                                    <label for="form-name" class="form-label Trad5"></label>
                                    <input id="form-name" class="form-input" name="formName" type="text" required>
                                </div>
                            </div>
                        </div>
                        <div class="form-right">
                            <div class="form-right-div">
                            <span class="material-symbols-rounded form-icon">chat</span>
                                <div class="right-label-input-div">
                                    <label for="form-from-dep" class="form-label Trad6"></label>
                                    <textarea id="form-message" class="form-input" name="formFromDep" type="text"></textarea>
                                </div>
                            </div>
                        </div>
                    </div>
                    <button id="submit" class="submitBtn" type="submit"><span class="material-symbols-rounded form-button-icon">play_arrow</span></button>
                </form>
            </div>
            <?php include "../Components/FooterComp/footer_comp.php" ?>
        </section>
    </section>
    <script src="../Components/Scripts/Translate/Contact/translateContact.js"></script>
    <script src="../Components/ConfigComp/config_comp.js"></script>
</body>
</html>
<script src="../Contact/contact.js"></script>