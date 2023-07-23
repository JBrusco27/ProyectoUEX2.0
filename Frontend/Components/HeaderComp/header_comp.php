<!-- Enlace para traducir header -->
<script src="/Frontend/Components/Scripts/Translate/Header/translateHeader.js"></script>

<!-- Logica de configuración -->
<script src="/Frontend/Components/ConfigComp/config_comp.js"></script>

<!-- Enlace para cerrar sesión -->
<script src="/Frontend/Components/HeaderComp/del_cookie.js"></script>

<!-- Header -->
<header>
    <!-- Navegación -->
    <nav class="nav-container">
        <span class="material-symbols-rounded menu-icon">menu</span>
        <div class="nav-elements"><a href="/index.php" class="HeadTrad1"></a></div>
        <div class="nav-elements"><a href="/Frontend/Contact/contact.php" class="HeadTrad2"></a></div>
        <div class="nav-elements"><a href="/Frontend/Schedules/schedules.php" class="HeadTrad3"></a></div>
        <div class="nav-elements"><a href="/Frontend/AboutUs/aboutUs.php" class="HeadTrad4"></a></div>
    </nav>
    <!-- Navegación -->
    <!-- Menu de preferencias y usuario -->
    <section class="preferences-dropdown-container">
        <div class="preferences-dropdown-content" id="preferences-dropdown-content">
            <div class="preferences-dropdown-content-view" id="preferences-dropdown-content-view">
                <img class="preferences-dropdown-profile-img" src="/Frontend/Resources/guest.png" alt="">
                <p class="preferences-dropdown-profile-name"><span class="HeadTrad5 header-name-meeting"></span><span class="user-name-span">
                    <?php 
                    if(isset($raiz)){
                        include ($raiz . "/Backend/user_cookie.php");
                        }else{
                        include ("../../Backend/user_cookie.php");
                        }
                    ?>
                    </span></p>
                <span class="material-symbols-rounded arrow-icon">navigate_next</span>
            </div>
            <div class="preferences-dropdown-content-action" id="preferences-dropdown-content-action">
                <div class="HeadTrad6" id="header-profile-action"><span class="material-symbols-rounded action-icon">person</span></div>
                <div class="HeadTrad7" id="header-myTickets-action"><span class="material-symbols-rounded action-icon">local_activity</span></div>
                <div class="HeadTrad8" id="header-config-action"><span class="material-symbols-rounded action-icon">settings</span></div>
                <a href="/Frontend/Account/LogIn/logIn.php" id="header-login-action"><div class="HeadTrad9 a-preferences-item"><span class="material-symbols-rounded action-icon">login</span></div></a> 
                <div class="HeadTrad10" id="header-logout-action"><span class="material-symbols-rounded action-icon">power_settings_new</span></div>
            </div>
        </div>
        <div class="preferences-dropdown-container-decoration"></div>
    </section>
    <!-- Menu de preferencias y usuario -->
</header> 
<!-- Header -->