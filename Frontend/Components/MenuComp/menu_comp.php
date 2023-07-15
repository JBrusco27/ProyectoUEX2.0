<?php include "../Components/HeaderComp/user_cookie.php"?>
<section class="menu-container">
    <div class="menu-content">
        <div class="menu-nav-close" id="nav-close-icon"><span class="material-symbols-rounded menu-nav-close-icon">close</span></div>
        <h3 class="welcome-text menuTrad1"><?php echo $nombre_usuario; ?><h3>
        <nav class="menu-nav-container">
            <div class="menu-nav-content" id="menu-nav-home"><span class="material-symbols-rounded menu-nav-icon">home</span><a href="../Home/index.php" class="menuTrad2"></a></div>
            <div class="menu-nav-content" id="menu-nav-contact"><span class="material-symbols-rounded menu-nav-icon">phone</span><a href="../Contact/contact.php" class="menuTrad3"></a></div>
            <div class="menu-nav-content" id="menu-nav-schedules"><span class="material-symbols-rounded menu-nav-icon">calendar_month</span><a href="../Schedules/schedules.php" class="menuTrad4"></a></div>
        </nav>
    </div>
    <script src="../Components/Scripts/Translate/Menu/translateMenu.js"></script>
</section>