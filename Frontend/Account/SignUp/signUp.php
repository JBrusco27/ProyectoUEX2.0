<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="signUp.css">
    <script src="signUp.js"></script>
    <script src="../../Components/Scripts/showPswd.js"></script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
</head>
<body>
    <div class="container">
        <h3>Sign Up</h3>
        <form id="form" action="consulta_sign_up.php" method="post">
            <div class="form-div">
                <ion-icon class="form-icon" name="person"></ion-icon>
                <div class="label-input-div">
                    <label for="form-name" class="form-label">NAME & LASTNAME</label>
                    <input id="form-name" class="form-input" name="formName" type="text" maxlength="40" required>
                </div>
            </div>
            <div class="form-div">
                <ion-icon class="form-icon" name="call"></ion-icon>
                <div class="label-input-div">
                    <label for="form-phone" class="form-label">PHONE</label>
                    <input id="form-phone" class="form-input" name="formPhone" type="text" maxlength="14" required>
                </div>
            </div>
            <div class="form-div">
                <ion-icon class="form-icon" name="mail"></ion-icon>
                <div class="label-input-div">
                    <label for="form-email" class="form-label">EMAIL</label>
                    <input style="text-transform:initial !important;" id="form-email" class="form-input" name="formEmail" type="email" maxlength="100" required>
                </div>
            </div>
            <div class="form-div">
                <ion-icon class="form-icon" name="lock-closed"></ion-icon>
                <div class="label-input-div">
                    <label for="form-pswd" class="form-label">PASSWORD</label>
                    <div class="input-show-pswd-div">
                        <input style="text-transform:initial !important;" id="form-pswd" class="form-input" name="formPswd" type="password" maxlength="32" required>
                        <div class="show-pswd" id="show-pswd">
                            <ion-icon class="show-pswd-icon" id="show-pswd-icon" name="eye"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div class="form-div">
                <ion-icon class="form-icon" name="lock-closed"></ion-icon>
                <div class="label-input-div">
                    <label for="form-confP  swd" class="form-label">CONFIRM PASSWORD</label>
                    <div class="input-show-pswd-div">
                        <input style="text-transform:initial !important;" id="form-confPswd" class="form-input" name="formConfPswd" type="password" maxlength="32" required>
                        <div class="show-pswd" id="show-pswd2">
                            <ion-icon class="show-pswd-icon" id="show-pswd-icon2" name="eye"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
            <button id="submit" class="submitBtn" type="submit"><ion-icon class="form-button-icon" name="caret-forward"></ion-icon>Sign Up</button>
        </form>
        <p>Already a member? <a href="../LogIn/logIn.html">Log In</a></p>
    </div>
</body>
</html>