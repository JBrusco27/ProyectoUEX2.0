<link rel="stylesheet" href="<?php echo $raiz ?>Frontend/Components/BookingComp/booking_comp.css">
<!-- my tickets Container -->
<div class="mytickets-container">
    <div class="close-mytickets">
        <span class="material-symbols-outlined icon-close-mytickets">close</span>
    </div>
    <div class="mytickets-content">
        <h1 class="right-side-title ticketTrad1"></h1>
        <div class="tickets-items-view-container">
            <div class="tickets-items-content">
            </div>
            <div class="tickets-view-content">
                <div class="select-reservation-to-info  ticketTrad2">
                </div>
                <div class="tickets-view-content-cont">
                    <div class="tickets-view-content-top">
                        <div class="tickets-view-content-top-top">
                            <div class="tickets-view-content-top-top-left">
                                <img src="<?php echo $raiz ?>Frontend/Resources/viauyLogoNoBack.png">
                                <h3 class="ticketTrad3"></h3>
                                <h4 id="tickets-view-content-top-top-right-info-data1"></h4>
                            </div>
                            <div class="tickets-view-content-top-top-right">
                                <button class="tickets-view-content-top-top-right-cancelarBtn tickets-view-content-top-top-right-btn ticketTrad4"></button>
                                <button class="tickets-view-content-top-top-right-descargarBtn tickets-view-content-top-top-right-btn ticketTrad5"></button>
                            </div>
                        </div>
                        <div class="tickets-view-content-top-bot ">
                            <p class="ticketTrad6"></p>
                        </div>
                    </div>
                    <div class="tickets-view-content-separ">
                        <div></div>
                        <hr>
                        <div></div>
                    </div>
                    <div class="tickets-view-content-bot">
                        <div class="tickets-view-content-bot-ticket-cont">
                            <img src="<?php echo $raiz ?>Frontend/Resources/barcode.png" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    
    </div>
</div>
<!-- my tickets Container -->

<!-- Enlace para traducir Config -->
<script src="<?php echo $raiz; ?>Frontend/Components/Scripts/Translate/MyTickets/translateMyTickets.js"></script>