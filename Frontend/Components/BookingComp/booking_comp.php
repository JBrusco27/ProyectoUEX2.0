
<div class="booking-container">
    <!-- Barra superior -->
    <div class="booking-guideBar">
        <div class="booking-pagesBar booking-guideBar-child">
            <p class="bookingTrad1"></p>
            <p class="bookingTrad2"></p>
            <p class="bookingTrad3"></p>
        </div>
        <div class="booking-guideBar-progressBar booking-guideBar-child">
            <hr>
            <div class="booking-guide-bar-point"></div>
        </div>
    </div>
    <!-- Barra superior -->
<div class="booking-secciones">
    <section class="booking-ida-section">
        <h2 class="reserva-title seleccion-horarios-sentido-text"></h2>
        <!-- Fecha | IDA -->
    
        <div class="booking-fechaIda">
            <div class="booking-fechaIda-item booking-fechaIda-item-dby">
                <p id="booking-fechaIda-item-dby-day" class="booking-fechaIda-item-day"></p>
                <p id="booking-fechaIda-item-dby-date" class="booking-fechaIda-item-date"></p>
            </div>
            <div class="booking-fechaIda-item booking-fechaIda-item-yesterday">
                <p id="booking-fechaIda-item-yesterday-day" class="booking-fechaIda-item-day"></p>
                <p id="booking-fechaIda-item-yesterday-date" class="booking-fechaIda-item-date"></p>
            </div>
            <div class="booking-fechaIda-item booking-fechaIda-item-today">
                <p id="booking-fechaIda-item-today-day" class="booking-fechaIda-item-day"></p>
                <p id="booking-fechaIda-item-today-date" class="booking-fechaIda-item-date"></p>
            </div>
            <div class="booking-fechaIda-item booking-fechaIda-item-tomorrow">
                <p id="booking-fechaIda-item-tomorrow-day" class="booking-fechaIda-item-day"></p>
                <p id="booking-fechaIda-item-tomorrow-date" class="booking-fechaIda-item-date"></p>
            </div>
            <div class="booking-fechaIda-item booking-fechaIda-item-tat">
                <p id="booking-fechaIda-item-tat-day" class="booking-fechaIda-item-day"></p>
                <p id="booking-fechaIda-item-tat-date" class="booking-fechaIda-item-date"></p>
            </div>
        </div>
    
        <!-- Fecha | IDA -->
        
        <!-- Lineas disponibles | IDA -->
    
        <div class="booking-cantidad-lineas">
            <p class="booking-cantidad-lineas-content bookingTrad4"><span class="booking-cantidad-lineas-num"></span></p>
            <p class="booking-origen-destino">
                <span class="bookingTrad6 booking-lineas-departamento-text"></span>
                <span id="booking-lineas-departamento-origen"></span>
                <span class="bookingTrad5 booking-lineas-departamento-text"></span>
                <span id="booking-lineas-departamento-destino"></span>
            </p>
            <p class="booking-lineas-tipo-pasaje"></p>
        </div>
        <div class="booking-lineas-disponibles"></div>

        <!-- Lineas disponibles | IDA -->
        <div class="booking-cambiar-seccion">
            <button class="booking-cambiar-seccion-anterior" id='booking-cambiar-seccion-anterior'><span class="material-symbols-outlined booking-lineas-icon">close</span></button>
            <button class="booking-cambiar-seccion-siguiente" id='booking-cambiar-seccion-siguiente' disabled><span class="material-symbols-rounded booking-lineas-icon">airline_seat_recline_extra</span><span class="material-symbols-rounded booking-lineas-icon">chevron_right</span></button>
        </div>
    </section>
    <section class="booking-asiento-seccion">
        <h2 class="reserva-title  seleccion-asientos-sentido-text"></h2>
        <div class='booking-asiento-seccion-info-seleccion'>
            <div class="booking-asiento-cambiar-seccion-info">
                <div class="booking-asiento-cambiar-seccion-info-cont booking-asiento-cambiar-seccion-info-origen">
                    <h3 class="booking-asiento-cambiar-seccion-info-origen-titleAb"></h3>
                    <p class="booking-asiento-cambiar-seccion-info-origen-title"></p>
                    <p class="booking-asiento-cambiar-seccion-info-origen-desc bookingTrad7"></p>
                </div>
                <div class="booking-asiento-cambiar-seccion-info-cont booking-asiento-cambiar-seccion-info-unidad">
                    <h3 class="booking-asiento-cambiar-seccion-info-unidad-titleAb"></h3>
                    <p class="booking-asiento-cambiar-seccion-info-unidad-title bookingTrad9"></p>
                </div>
                <div class="booking-asiento-cambiar-seccion-info-cont booking-asiento-cambiar-seccion-info-asiento">
                    <h3 class="booking-asiento-cambiar-seccion-info-asiento-titleAb"></h3>
                    <p class="booking-asiento-cambiar-seccion-info-asiento-title bookingTrad10"></p>
                </div>
                <div class="booking-asiento-cambiar-seccion-info-cont booking-asiento-cambiar-seccion-info-destino">
                    <h3 class="booking-asiento-cambiar-seccion-info-destino-titleAb"></h3>
                    <p class="booking-asiento-cambiar-seccion-info-destino-title"></p>
                    <p class="booking-asiento-cambiar-seccion-info-destino-desc bookingTrad8"></p>
                </div>
            </div>
            <div class="booking-asiento-seleccion-asiento-container">
                <div class="booking-asiento-seleccion-asiento-content">
                    <svg xmlns="http://www.w3.org/2000/svg" class="icon icon-tabler icon-tabler-steering-wheel booking-asiento-seleccion-asiento-content-drivericon" width="44" height="44" viewBox="0 0 24 24" stroke-width="1.5" stroke="var(--color-naranja)" fill="none" stroke-linecap="round" stroke-linejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M12 12m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" /><path d="M12 14l0 7" /><path d="M10 12l-6.75 -2" /><path d="M14 12l6.75 -2" /></svg>
                </div>
            </div>
        </div>
        <div class="booking-cambiar-seccion">
            <button class="booking-cambiar-seccion-anterior" id='booking-asiento-cambiar-seccion-anterior'><span class="material-symbols-outlined booking-lineas-icon">arrow_back</span></button>
            <button disabled class="booking-cambiar-seccion-siguiente" id='booking-asiento-cambiar-seccion-siguiente'><span class="material-symbols-rounded booking-lineas-icon">arrow_forward</span></button>
        </div>
    </section>
    <section class="booking-pago-seccion">
        <h2 class="reserva-title bookingTrad23"></h2>
        <hr class="viaje-vuelta-title">
        <div class="booking-pago-seccion-top">
            <div class="booking-pago-seccion-top-top">
                <div class="booking-asiento-cambiar-seccion-info-cont booking-asiento-cambiar-seccion-info-origen">
                    <h3 class="booking-asiento-cambiar-seccion-info-origen-titleAb" id="booking-pago-cambiar-seccion-info-origen-titleAb"></h3>
                    <p class="booking-asiento-cambiar-seccion-info-origen-title" id='booking-pago-cambiar-seccion-info-origen-title'></p>
                    <p class="booking-asiento-cambiar-seccion-info-origen-desc bookingTrad11"></p>
                </div>
                <div class="booking-asiento-cambiar-seccion-info-cont booking-asiento-cambiar-seccion-info-destino">
                    <h3 class="booking-asiento-cambiar-seccion-info-destino-titleAb" id="booking-pago-cambiar-seccion-info-destino-titleAb"></h3>
                    <p class="booking-asiento-cambiar-seccion-info-destino-title" id='booking-pago-cambiar-seccion-info-destino-title'></p>
                    <p class="booking-asiento-cambiar-seccion-info-destino-desc bookingTrad12"></p>
                </div>
            </div>
            <div class="booking-pago-seccion-top-cen">
                <div class="booking-pago-seccion-top-cen-asiento">
                    <div class="booking-pago-seccion-title bookingTrad13"></div>
                    <div class="booking-pago-seccion-value" id='booking-pago-seccion-top-cen-asiento'></div>
                </div>
                <div class="booking-pago-seccion-top-cen-date">
                    <div class="booking-pago-seccion-title bookingTrad14"></div>
                    <div class="booking-pago-seccion-value" id='booking-pago-seccion-top-cen-date'></div>
                    <div class="booking-pago-seccion-value"></div>
                </div>
            </div>
            <div class="booking-pago-seccion-top-bot">
                <div class="booking-pago-seccion-top-bot-coche">
                    <div class="booking-pago-seccion-title bookingTrad15"></div>
                    <div class="booking-pago-seccion-value" id='booking-pago-seccion-top-bot-coche'></div>
                </div>
                <div class="booking-pago-seccion-top-bot-duracion">
                    <div class="booking-pago-seccion-title bookingTrad16"></div>
                    <div class="booking-pago-seccion-value" id='booking-pago-seccion-top-bot-duracion'></div>
                </div>
            </div>
        </div>
        <hr class="viaje-vuelta-title">
        <hr class="viaje-vuelta-title">
        <div class="booking-pago-seccion-cen">
            <div class="booking-pago-seccion-cen-top">
                <div class="booking-asiento-cambiar-seccion-info-cont booking-asiento-cambiar-seccion-info-origen">
                    <h3 class="booking-asiento-cambiar-seccion-info-origen-titleAb" id="booking-pago-cambiar-seccion-info-origen-titleAb-vuelta"></h3>
                    <p class="booking-asiento-cambiar-seccion-info-origen-title" id='booking-pago-cambiar-seccion-info-origen-title-vuelta'></p>
                    <p class="booking-asiento-cambiar-seccion-info-origen-desc bookingTrad17"></p>
                </div>
                <div class="booking-asiento-cambiar-seccion-info-cont booking-asiento-cambiar-seccion-info-destino">
                    <h3 class="booking-asiento-cambiar-seccion-info-destino-titleAb" id="booking-pago-cambiar-seccion-info-destino-titleAb-vuelta"></h3>
                    <p class="booking-asiento-cambiar-seccion-info-destino-title" id='booking-pago-cambiar-seccion-info-destino-title-vuelta'></p>
                    <p class="booking-asiento-cambiar-seccion-info-destino-desc bookingTrad18"></p>
                </div>
            </div>
            <div class="booking-pago-seccion-cen-cen">
                <div class="booking-pago-seccion-cen-cen-asiento">
                    <div class="booking-pago-seccion-title bookingTrad19"></div>
                    <div class="booking-pago-seccion-value" id='booking-pago-seccion-cen-cen-asiento'></div>
                </div>
                <div class="booking-pago-seccion-cen-cen-date">
                    <div class="booking-pago-seccion-title bookingTrad20"></div>
                    <div class="booking-pago-seccion-value" id='booking-pago-seccion-cen-cen-date'></div>
                    <div class="booking-pago-seccion-value"></div>
                </div>
            </div>
            <div class="booking-pago-seccion-cen-bot">
                <div class="booking-pago-seccion-cen-bot-coche">
                    <div class="booking-pago-seccion-title bookingTrad21"></div>
                    <div class="booking-pago-seccion-value" id='booking-pago-seccion-cen-bot-coche'></div>
                </div>
                <div class="booking-pago-seccion-cen-bot-duracion">
                    <div class="booking-pago-seccion-title bookingTrad22"></div>
                    <div class="booking-pago-seccion-value" id='booking-pago-seccion-cen-bot-duracion'></div>
                </div>
            </div>
        </div>
        
        <hr>
        <div class="booking-pago-seccion-bot">
            <div class="booking-pago-seccion-bot-title bookingTrad24"></div>
            <div class="booking-pago-seccion-bot-total" id='booking-pago-seccion-bot-total'></div>
        </div>
        <div class="booking-cambiar-seccion">
            <button class="booking-cambiar-seccion-anterior" id='booking-pago-cambiar-seccion-anterior'><span class="material-symbols-outlined booking-lineas-icon">arrow_back</span></button>
            <button class="booking-cambiar-seccion-siguiente" id='booking-pago-cambiar-seccion-siguiente'><span class="material-symbols-rounded booking-lineas-icon">payments</span></button>
        </div>
    </section>
</div>
</div>
<!-- Enlace para traducir Config -->
<script src="/Frontend/Components/Scripts/Translate/Booking/translateBooking.js"></script>