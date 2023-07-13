<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
    <link rel="stylesheet" href="logIn.css">
    <script src="logIn.js"></script>
    <script src="../../Components/Scripts/showPswd.js"></script>

    <script type="module" src="https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js"></script>
</head>
<body>
    <div class="container">
        <h3>log In</h3> 
        <form id="form" action="consulta_sign_in.php" method="post">
            <div class="form-div">
                <ion-icon class="form-icon" name="mail"></ion-icon>
                <div class="label-input-div">
                    <label for="form-email" class="form-label">EMAIL</label>
                    <input style="text-transform:initial !important;" id="form-email" class="form-input" name="formEmail" type="email" required>
                </div>
            </div>
            <div class="form-div">
                <ion-icon class="form-icon" name="lock-closed"></ion-icon>
                <div class="label-input-div">
                    <label for="form-pswd" class="form-label">PASSWORD</label>
                    <div class="input-show-pswd-div">
                        <input style="text-transform:initial !important;" id="form-pswd" class="form-input" name="formPswd" type="password" required>
                        <div class="show-pswd" id="show-pswd">
                            <ion-icon class="show-pswd-icon" id='show-pswd-icon' name="eye"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
            <button id="submit" class="submitBtn" type="submit"><ion-icon class="form-button-icon" name="caret-forward"></ion-icon>Log in</button>
        </form>
        <p>Not a member? <a href="../SignUp/signUp.php">Sign up</a></p>
    </div>
</body>
</html>