<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title class="Trad1"></title>
    <link rel="stylesheet" href="logIn.css">
    <script src="logIn.js"></script>
    <script src="../../Components/Scripts/showPswd.js"></script>

    <script src="https://cdnjs.cloudflare.com/ajax/libs/PapaParse/5.3.0/papaparse.min.js"></script>

    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0" />
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Rounded:opsz,wght,FILL,GRAD@48,400,1,0" />
    
</head>
<body>
    <div class="container">
        <h3 class="Trad2"></h3> 
        <form id="form" action="consulta_sign_in.php" method="post">
            <div class="form-div">
                <span class="material-symbols-rounded form-icon">email</span>
                <div class="label-input-div">
                    <label for="form-email" class="form-label Trad3"></label>
                    <input style="text-transform:initial !important;" id="form-email" class="form-input" name="formEmail" type="email" required>
                </div>
            </div>
            <div class="form-div">
            <span class="material-symbols-rounded show-pswd-icon" id='show-pswd-icon'>lock</span>
                <div class="label-input-div">
                    <label for="form-pswd" class="form-label Trad4"></label>
                    <div class="input-show-pswd-div">
                        <input style="text-transform:initial !important;" id="form-pswd" class="form-input" name="formPswd" type="password" required>
                        <div class="show-pswd" id="show-pswd">
                            <span class="material-symbols-rounded show-pswd-icon" id='show-pswd-icon' >visibility</span>
                        </div>
                    </div>
                </div>
            </div>
            <button id="submit" class="submitBtn Trad5" type="submit"><span class="material-symbols-rounded form-button-icon">play_arrow</span></button>
        </form>
        <div class="login-bottom-info">
            <p class="notAMember Trad6"><a href="../SignUp/signUp.php" class="Trad7"></a></p>
            <a class="forgotPaswd Trad8" href=""></a>
        </div>
    </div>
    <script src="../../Components/Scripts/Translate/LogIn/translateLogin.js"></script>
</body>
</html>