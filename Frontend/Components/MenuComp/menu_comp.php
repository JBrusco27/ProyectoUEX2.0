<!-- Datos del usuario ( con Cookies ) -->
<?php include "../Components/HeaderComp/user_cookie.php"?>
<!-- Menu container -->
<section class="menu-container">
    <div class="menu-content">
        <div class="menu-nav-close" id="nav-close-icon"><span class="material-symbols-rounded menu-nav-close-icon">close</span></div>
        <div class="xd">
            <h3 class="welcome-text menuTrad1"></h3>
            <h3><?php echo $nombre_usuario; ?></h3>
        </div>
        <nav class="menu-nav-container">
            <div class="menu-nav-content" id="menu-nav-home"><span class="material-symbols-rounded menu-nav-icon">home</span><a href="../Home/index.php" class="menuTrad2"></a></div>
            <div class="menu-nav-content" id="menu-nav-contact"><span class="material-symbols-rounded menu-nav-icon">phone</span><a href="../Contact/contact.php" class="menuTrad3"></a></div>
            <div class="menu-nav-content" id="menu-nav-schedules"><span class="material-symbols-rounded menu-nav-icon">calendar_month</span><a href="../Schedules/schedules.php" class="menuTrad4"></a></div>
        </nav>
    </div>
    <!-- Enlace para traducir menu mobile -->
    <script src="../Components/Scripts/Translate/Menu/translateMenu.js"></script>
</section>
<!-- Menu container -->