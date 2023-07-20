<!-- Enlace para traducir header -->
<script src="../Components/Scripts/Translate/Header/translateHeader.js"></script>

<!-- Logica de configuración -->
<script src="../Components/ConfigComp/config_comp.js"></script>

<!-- Enlace para cerrar sesión -->
<script src="../Components/HeaderComp/del_cookie.js"></script>

<!-- Datos del usuario ( con Cookies ) -->
<?php include "../../Backend/user_cookie.php"?>

<!-- Header -->
<header>
    <!-- Navegación -->
    <nav class="nav-container">
        <span class="material-symbols-rounded menu-icon">menu</span>
        <div class="nav-elements"><a href="../Home/index.php" class="HeadTrad1"></a></div>
        <div class="nav-elements"><a href="../Contact/contact.php" class="HeadTrad2"></a></div>
        <div class="nav-elements"><a href="../Schedules/schedules.php" class="HeadTrad3"></a></div>
    </nav>
    <!-- Navegación -->
    <!-- Menu de preferencias y usuario -->
    <section class="preferences-dropdown-container">
        <div class="preferences-dropdown-content" id="preferences-dropdown-content">
            <div class="preferences-dropdown-content-view" id="preferences-dropdown-content-view">
                <img class="preferences-dropdown-profile-img" src="../Resources/importantphoto.jpg" alt="">
                <p class="preferences-dropdown-profile-name"><span class="HeadTrad4 header-name-meeting"></span><?php echo $nombre_usuario; ?></p>
                <span class="material-symbols-rounded arrow-icon">navigate_next</span>
            </div>
            <div class="preferences-dropdown-content-action" id="preferences-dropdown-content-action">
                <div class="HeadTrad5" id="header-profile-action"><span class="material-symbols-rounded action-icon">person</span></div>
                <div class="HeadTrad6" id="header-myTickets-action"><span class="material-symbols-rounded action-icon">local_activity</span></div>
                <div class="HeadTrad7" id="header-config-action"><span class="material-symbols-rounded action-icon">settings</span></div>
                <a href="../Account/LogIn/logIn.php" id="header-login-action"><div class="HeadTrad8 a-preferences-item"><span class="material-symbols-rounded action-icon">login</span></div></a> 
                <div class="HeadTrad9" id="header-logout-action"><span class="material-symbols-rounded action-icon">power_settings_new</span></div>
            </div>
        </div>
        <div class="preferences-dropdown-container-decoration"></div>
    </section>
    <!-- Menu de preferencias y usuario -->
</header> 
<!-- Header -->