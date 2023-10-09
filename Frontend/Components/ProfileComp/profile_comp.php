<!-- profile Container -->
<div class="profile-container">
    <div class="close-profile">
        <span class="material-symbols-outlined icon-close-profile">close</span>
    </div>
    <div class="profile-content">
        <!-- Sección Account -->
        <div class="account-right-side right-side-item">
            <h1 class="right-side-title profileTrad1"></h1>
            <div class="profile-section">
                <!-- Contariner de restricciones -->
                <div class="warning-container">   
                    <div class="valid-name-warning-content warning">
                        <div class="profileTrad5">
                            <p class="warning-title profileTrad6"></p>      
                        </div>
                        <span class="material-symbols-rounded form-button-icon close-warning" id="valid-name-warning-name">close</span>
                    </div>
                    <div class="valid-phone-warning-content warning">
                        <div class="profileTrad7">
                            <p class="warning-title profileTrad8"></p>      
                        </div>
                        <span class="material-symbols-rounded form-button-icon close-warning" id="valid-phone-warning-name">close</span>
                    </div>
                </div>
                <!-- Contariner de restricciones -->
                <form class="profile-form">
                    <div class="profile-input-section">
                        <label for="profile-email-input"></label>
                        <input class="profile-form-input" type="email" id="profile-email-input" name="profileFormEmail" required>
                    </div>
                    <div class="profile-form-input-container">
                        <div class="profile-input-section">
                            <label for="profile-nameLastname-input"></label>
                            <input class="profile-form-input" type="text" id="profile-nameLastname-input" name="profileFormNameLastname" required>
                        </div>
                        <div class="profile-input-section">
                            <label for="profile-phone-input"></label>
                            <input class="profile-form-input" type="text" id="profile-phone-input" name="profileFormPhone" required>
                        </div>
                    </div>
                </form>
                <div class="profile-btn-section">
                    <div class="log-message">
                        <p class="profileTrad2"></p>
                        <a href="<?php echo $raiz; ?>Frontend/Account/LogIn/logIn.php" class="log-message-account-btn profileTrad3"></a>
                    </div>
                    <div class="account-item">
                        <div class="account-item-content">
                            <a href="<?php echo $raiz; ?>Frontend/Account/Change_Password/changePswd.php" class="account-btn profileTrad4"></a>
                            <button class="save-account-btn" disabled>Guardar</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Sección Account -->
    </div>
</div>
<!-- profile Container -->

<!-- Enlace para traducir Config -->
<script src="<?php echo $raiz; ?>Frontend/Components/Scripts/Translate/Profile/translateProfile.js"></script>