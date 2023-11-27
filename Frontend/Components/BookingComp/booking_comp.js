document.getElementById('booking-cambiar-seccion-anterior').addEventListener('click', ()=>{
    moveGuidePoint1();
    removeLines();
    document.querySelector('.booking-container').style.height="0";
    setTimeout(() => {
        document.querySelector('.booking-container').style.display="none";
    }, 100);

    
    datosLineaIda = {
        'calIdaInputValueDateFormat':null,
        'HoraSalidaLLegada':null,
        'OrigenAb':null,
        'DestinoAb':null,
        'Num_Unidad':null,
        'ID_Linea':null,
        'Sentido':null,
        'Matricula_Unidad':null,
        'Duracion':null,
        'ID_Horario':null,
        'ID_Parada_Origen':null,
        'ID_Parada_Destino':null,
        'Num_Asiento':null,
        'Dir_Viaje':'Ida'
    }
    
    datosLineaVuelta = {
        'calIdaInputValueDateFormat':null,
        'HoraSalidaLLegada':null,
        'OrigenAb':null,
        'DestinoAb':null,
        'Num_Unidad':null,
        'ID_Linea':null,
        'Sentido':null,
        'Matricula_Unidad':null,
        'Duracion':null,
        'ID_Horario':null,
        'ID_Parada_Origen':null,
        'ID_Parada_Destino':null,
        'Num_Asiento':null,
        'Dir_Viaje':'Vuelta'
    }
});

let currentMarginLeft;

// Move guide point

let guideBarPoint;

function moveGuidePoint1(){
    guideBarPoint = document.querySelector('.booking-guide-bar-point');
    // Se mueve el punto de la barra superior
    if(innerWidth<900){
        currentMarginLeft = 'calc(calc((100%/6)*1) - 15px)';
    }else{
        currentMarginLeft = 'calc(calc((100%/6)*1) - 10px)';
    }
    guideBarPoint.style.marginLeft = currentMarginLeft; 
}

function moveGuidePoint2(){
    // Se mueve el punto de la barra superior
    if(innerWidth<900){
        currentMarginLeft = 'calc(calc((100%/6)*3) - 15px)';
    }else{
        currentMarginLeft = 'calc(calc((100%/6)*3) - 10px)';

    }
    guideBarPoint.style.marginLeft = currentMarginLeft;    
}

function moveGuidePoint3(){

    guideBarPoint = document.querySelector('.booking-guide-bar-point');
    // Se mueve el punto de la barra superior
    if(innerWidth<900){
        currentMarginLeft = 'calc(calc((100%/6)*5) - 15px)';
    }else{
        currentMarginLeft = 'calc(calc((100%/6)*5) - 10px)';
    }
    guideBarPoint.style.marginLeft = currentMarginLeft;

}

// Move guide point

// Cambiar de seccion
function cambiarIdaSeccionSiguiente(){
    guideBarPoint = document.querySelector('.booking-guide-bar-point');

    // Desaparecemos la seccion de seleccionar linea
    document.querySelector('.booking-ida-section').style.transform="translateX(-200%)";
    setTimeout(() => {
        document.querySelector('.booking-ida-section').style.display="none";            
        document.querySelector('.booking-ida-section').style.transform="translateX(0%)";
    }, 700);

    moveGuidePoint2();

    // Aparece la seccion de seleccionar asiento
    document.querySelector('.booking-asiento-seccion').style.transform="translateX(200%)";
    document.querySelector('.booking-asiento-seccion').style.display="flex";            
    setTimeout(() => {
        document.querySelector('.booking-asiento-seccion').style.transform="translateX(0%)";
    }, 700);
}

function cambiarIdaAsientosSeccionAnterior(){
    // Aparece la seccion de seleccionar asiento
    document.querySelector('.booking-ida-section').style.display="flex";            
    document.querySelector('.booking-ida-section').style.transform="translateX(-200%)";
    setTimeout(() => {
        document.querySelector('.booking-ida-section').style.transform="translateX(0%)";
    }, 100);    
    
    moveGuidePoint1();

    // Desaparecemos la seccion de seleccionar linea
    document.querySelector('.booking-asiento-seccion').style.transform="translateX(200%)";
    setTimeout(() => {
        document.querySelector('.booking-asiento-seccion').style.display="none";            
        document.querySelector('.booking-asiento-seccion').style.transform="translateX(0%)";
        removeSeats();
    }, 700);
}

async function cambiarPagoSeccionAnterior() {

    let datosLinea;
    if(directInputValue == 0){
        datosLinea = datosLineaVuelta;
    }else if(directInputValue == 1){
        datosLinea = datosLineaIda;
    }
    
    // Ejecutamos findSeats y esperamos a que la promesa se resuelva
    try {
        findSeats(datosLinea);
        // Aparece la sección de seleccionar asiento
        document.querySelector('.booking-asiento-seccion').style.transform = "translateX(-200%)";
        document.querySelector('.booking-asiento-seccion').style.display = "flex";
        setTimeout(() => {
            document.querySelector('.booking-asiento-seccion').style.transform = "translateX(0%)";
        }, 100);

        moveGuidePoint2();

        // Desaparecemos la sección de seleccionar línea
        document.querySelector('.booking-pago-seccion').style.transform = "translateX(200%)";
        setTimeout(() => {
            document.querySelector('.booking-pago-seccion').style.display = "none";
            document.querySelector('.booking-pago-seccion').style.transform = "translateX(0%)";
            // removeSeats();/////////////////////////////////////
        }, 700);
    } catch (error) {
        console.error("Error en findSeats:", error);
    }

}

function cambiarIdaAsientosSeccionSiguiente(){
        // Desaparecemos la seccion de seleccionar asiento
        document.querySelector('.booking-asiento-seccion').style.transform="translateX(-200%)";
        setTimeout(() => {
            document.querySelector('.booking-asiento-seccion').style.display="none";            
            document.querySelector('.booking-asiento-seccion').style.transform="translateX(0%)";
            removeSeats();
        }, 700);

        moveGuidePoint3();

        // Aparece la seccion de pago
        document.querySelector('.booking-pago-seccion').style.display="flex";            
        document.querySelector('.booking-pago-seccion').style.transform="translateX(200%)";
        setTimeout(() => {
            document.querySelector('.booking-pago-seccion').style.transform="translateX(0%)";
            removeSeats();
        }, 700);
}

let asientoValue = [];
function controlarDisponibilidadAsientos(datosLinea){
    asientoValue = [];
    let leftSeats = parseInt(travInputValue);  
    let seatAlreadySelected;
    document.querySelectorAll('.booking-asiento-seleccion-asiento-content-asiento').forEach(element => {
        element.addEventListener('click', ()=>{
            if(asientoValue.includes(element.value)){
                seatAlreadySelected = false;
                leftSeats += 1;
                asientoValue.splice( asientoValue.indexOf(element.value), 1);
                seleccionAsiento(element, seatAlreadySelected, datosLinea);
            }else if(!asientoValue.includes(element.value) && (leftSeats > 0 || leftSeats == undefined) ){
                seatAlreadySelected = true;
                leftSeats -= 1;
                asientoValue.push(element.value);
                seleccionAsiento(element, seatAlreadySelected, datosLinea);
            }
            if(leftSeats == 0){
                document.getElementById('booking-asiento-cambiar-seccion-siguiente').disabled=false;
            }
        });
    });


    let formData = new FormData();
    formData.append('ID_Horario', datosLinea.ID_Horario);
    formData.append('Matricula_Unidad', datosLinea.Matricula_Unidad);


    let opciones = {
        method: 'POST',
        body: formData
      };
    
    showLoader();
    fetch(raiz+'/Backend/Booking/consulta_asientos.php', opciones)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }
    })
    .then((data)=>{
        hideLoader();
       let asientosLinea = data;
        let elementosAsientos = document.querySelectorAll('.booking-asiento-seleccion-asiento-content-asiento'); 

        elementosAsientos.forEach(element => {
            if(asientosLinea[parseInt(element.value) - 1].Disponibilidad_Asiento == 0){
                element.disabled=true;
                element.classList.add('booking-asiento-seleccion-asiento-content-asiento-ocupado');
            }

        });

    })
    .catch((err)=>{
        console.error(err)
    });
        
}

// Elimina los asientos que se estan mostrando
function removeSeats() {
    document.getElementById('booking-asiento-cambiar-seccion-siguiente').disabled=true;
    const parentElement = document.querySelector('.booking-asiento-seleccion-asiento-content');
    const divElements = parentElement.childNodes;
    
    const arrdivElements = Array.from(divElements);
    
    for (let r = 0; r < arrdivElements.length; r++) {
        if (arrdivElements[r].tagName === 'DIV') {
            parentElement.removeChild(arrdivElements[r]);
        }
    }
}

// Elimina las lineas que se estan mostrando
function removeLines() {
    document.querySelector('.booking-cambiar-seccion-siguiente').disabled=true;

    const parentElement = document.querySelector('.booking-lineas-disponibles');
    const divElements = parentElement.childNodes;
    
    const arrdivElements = Array.from(divElements);
    
    for (let r = 0; r < arrdivElements.length; r++) {
        if (arrdivElements[r].tagName === 'DIV') {
            parentElement.removeChild(arrdivElements[r]);
        }
    }
}

// Cambiar de seccion

function seleccionAsiento(element, seatAlreadySelected, datosLinea){

    document.querySelector('.booking-asiento-cambiar-seccion-info-asiento-titleAb').innerHTML = asientoValue.join(' | '); 
    
    if(seatAlreadySelected){
        element.classList.add('booking-asiento-seleccion-asiento-content-asiento-seleccionado');
        datosLinea.Num_Asiento = asientoValue;
    }else{
        element.classList.remove('booking-asiento-seleccion-asiento-content-asiento-seleccionado');
        datosLinea.Num_Asiento = null;
        if(asientoValue.length == 0){
            document.querySelector('.booking-asiento-cambiar-seccion-info-asiento-titleAb').innerHTML = '00';
        }
    }

}

// Funcion para mostrar la linea seleccionada y guardar sus datos
function lineSelected(datosLinea, consultaLineasData) {
    let ID_HorarioSelected;
    const elementoLineasRightList = document.querySelectorAll('.booking-lineas-disponibles-item-bot-right');
    const elementoLineasList = document.querySelectorAll('.booking-lineas-disponibles-item');
  
    elementoLineasRightList.forEach((elementoLineasRight, index) => {
      elementoLineasRight.addEventListener('click', () => {
        elementoLineasRightList.forEach((el, i) => {
          if (i !== index) {
            el.classList.remove('booking-lineas-disponibles-item-bot-right-action');
            elementoLineasList[i].classList.remove('booking-lineas-disponibles-item-action');
          }
        });
        
        if (!elementoLineasRight.classList.contains('booking-lineas-disponibles-item-bot-right-action')) {
            elementoLineasRight.classList.add('booking-lineas-disponibles-item-bot-right-action');
            elementoLineasList[index].classList.add('booking-lineas-disponibles-item-action');

            ID_HorarioSelected = parseInt(elementoLineasRight.value);
            document.querySelector('.booking-cambiar-seccion-siguiente').disabled=false;
        } else {
            elementoLineasRight.classList.remove('booking-lineas-disponibles-item-bot-right-action');
            elementoLineasList[index].classList.remove('booking-lineas-disponibles-item-action');          
            document.querySelector('.booking-cambiar-seccion-siguiente').disabled=true;
            ID_HorarioSelected = null;
        }

        let positionLinea = 0;
        console.log(consultaLineasData)
        while (consultaLineasData[positionLinea].ID_Horario != datosLinea.ID_Horario) {
            positionLinea+=1;
        }

        datosLinea.OrigenAb = consultaLineasData[positionLinea].OrigenAb
        datosLinea.DestinoAb = consultaLineasData[positionLinea].DestinoAb
        datosLinea.Num_Unidad = consultaLineasData[positionLinea].Num_Unidad
        datosLinea.ID_Linea = consultaLineasData[positionLinea].ID_Linea
        datosLinea.Sentido = consultaLineasData[positionLinea].Sentido
        datosLinea.Matricula_Unidad = consultaLineasData[positionLinea].Matricula_Unidad
        datosLinea.Duracion = consultaLineasData[positionLinea].Duracion
        datosLinea.HoraSalidaLLegada = consultaLineasData[positionLinea].Hora_Salida
        console.log(datosLinea.Sentido)
        if(datosLinea.Sentido == 'Ida'){
            datosLinea.ID_Parada_Origen = document.getElementById('form-from-div').options[document.getElementById('form-from-div').selectedIndex].textContent;
            datosLinea.ID_Parada_Destino = document.getElementById('form-to-div').options[document.getElementById('form-to-div').selectedIndex].textContent;
        }else if(datosLinea.Sentido == 'Vuelta'){
            datosLinea.ID_Parada_Origen = document.getElementById('form-to-div').options[document.getElementById('form-to-div').selectedIndex].textContent;
            datosLinea.ID_Parada_Destino = document.getElementById('form-from-div').options[document.getElementById('form-from-div').selectedIndex].textContent;
        }
        datosLinea.ID_Horario=ID_HorarioSelected;

      });
    });

}

let precioTotal = 0;
function seccionPago(){

    precioTotal = 0

     const horaSalidaDate = new Date(0)
    let tiempoString = datosLineaIda.HoraSalidaLLegada;
     let [horaSalida, minutosSalida] = tiempoString.split(':');
    horaSalidaDate.setHours(parseInt(horaSalida)+parseInt(datosLineaIda.Duracion/60))
    horaSalidaDate.setMinutes(parseInt(minutosSalida)+parseInt(datosLineaIda.Duracion%60))

    document.getElementById('booking-pago-cambiar-seccion-info-origen-title').textContent = datosLineaIda.ID_Parada_Origen;
    document.getElementById('booking-pago-cambiar-seccion-info-destino-title').textContent = datosLineaIda.ID_Parada_Destino;
    document.getElementById('booking-pago-seccion-top-cen-asiento').textContent = datosLineaIda.Num_Asiento.join(' | ');
    document.getElementById('booking-pago-seccion-top-cen-date').innerHTML = horaSalidaDate.getHours()+":"+((horaSalidaDate.getMinutes().toString().length == 1) ? "0" + horaSalidaDate.getMinutes() : horaSalidaDate.getMinutes()) + ' | ' + datosLineaIda.calIdaInputValueDateFormat;

    document.getElementById('booking-pago-cambiar-seccion-info-origen-titleAb').textContent = datosLineaIda.OrigenAb;
    document.getElementById('booking-pago-cambiar-seccion-info-destino-titleAb').textContent = datosLineaIda.DestinoAb;
    document.getElementById('booking-pago-seccion-top-bot-coche').textContent = datosLineaIda.Num_Unidad;
    document.getElementById('booking-pago-seccion-top-bot-duracion').textContent = parseInt(datosLineaIda.Duracion/60)+"H "+((datosLineaIda.Duracion%60) != 0 ? (datosLineaIda.Duracion%60) + "M" : '00M');;

    let formData = new FormData();
    formData.append('parada_origen', fromInputValue);
    formData.append('parada_destino', toInputValue);
    formData.append('linea', datosLineaIda.ID_Linea);
    formData.append('sentido', datosLineaIda.Sentido);
    formData.append('cant_trav', travInputValue);

    let opciones = {
      method: 'POST',
      body: formData
    };

    showLoader();
    fetch(raiz+'/Backend/Booking/consulta_pago.php', opciones)
    .then((response)=>{
        if(response.ok){
           return response.json();
        }
    })
    .then((data)=>{
        hideLoader();
        precioTotal += data.precioTotal;


        if(directInputValue == 0){

            document.querySelector('.booking-pago-seccion-cen').style.display='flex';
            document.querySelectorAll('.viaje-vuelta-title').forEach(element => {
                element.style.display='flex';
            });

            const horaSalidaDate = new Date(0)
            let tiempoString = datosLineaVuelta.HoraSalidaLLegada;
             let [horaSalida, minutosSalida] = tiempoString.split(':');
            horaSalidaDate.setHours(parseInt(horaSalida)+parseInt(datosLineaVuelta.Duracion/60))
            horaSalidaDate.setMinutes(parseInt(minutosSalida)+parseInt(datosLineaVuelta.Duracion%60))
    
            document.getElementById('booking-pago-cambiar-seccion-info-origen-title-vuelta').textContent = datosLineaVuelta.ID_Parada_Origen;
            document.getElementById('booking-pago-cambiar-seccion-info-destino-title-vuelta').textContent = datosLineaVuelta.ID_Parada_Destino;
            document.getElementById('booking-pago-seccion-cen-cen-asiento').textContent = datosLineaVuelta.Num_Asiento.join(' | ');
            document.getElementById('booking-pago-seccion-cen-cen-date').innerHTML = horaSalidaDate.getHours()+":"+((horaSalidaDate.getMinutes().toString().length == 1) ? "0" + horaSalidaDate.getMinutes() : horaSalidaDate.getMinutes()) + ' | ' + datosLineaVuelta.calIdaInputValueDateFormat;
    
            document.getElementById('booking-pago-cambiar-seccion-info-origen-titleAb-vuelta').textContent = datosLineaVuelta.OrigenAb;
            document.getElementById('booking-pago-cambiar-seccion-info-destino-titleAb-vuelta').textContent = datosLineaVuelta.DestinoAb;
            document.getElementById('booking-pago-seccion-cen-bot-coche').textContent = datosLineaVuelta.Num_Unidad;
            document.getElementById('booking-pago-seccion-cen-bot-duracion').textContent = parseInt(datosLineaVuelta.Duracion/60)+"H "+((datosLineaVuelta.Duracion%60) != 0 ? (datosLineaVuelta.Duracion%60) + "M" : '00M');;
        
            let formData = new FormData();
            formData.append('parada_origen', toInputValue);
            formData.append('parada_destino', fromInputValue);
            formData.append('linea', datosLineaVuelta.ID_Linea);
            formData.append('sentido', datosLineaVuelta.Sentido);
            formData.append('cant_trav', travInputValue);

        
            let opciones = {
              method: 'POST',
              body: formData
            };
    
            showLoader();
            fetch(raiz+'/Backend/Booking/consulta_pago.php', opciones)
            .then((response)=>{
                if(response.ok){
                   return response.json();
                }
            })
            .then((data)=>{
                precioTotal += data.precioTotal;
                document.getElementById('booking-pago-seccion-bot-total').textContent=`${precioTotal} UYU`;    
                hideLoader();
            }).catch((err)=>{
                console.error(err);
            })
        
        }else if(directInputValue == 1){
            document.getElementById('booking-pago-seccion-bot-total').textContent=`${precioTotal} UYU`;    
        }



    }).catch((err)=>{
        console.error(err);
    })

}

function mostrarReservaCompletada(valueBool){
    let columnNumber = localStorage.getItem('columnNumber');
    if(valueBool){
        switch ( parseInt(columnNumber)) {
            case 0:
                Swal.fire({
                    title: 'Reservation completed',
                    text: 'Thank you for booking at Viauy',
                    icon: 'success',
                    allowOutsideClick: false // Evita que el cuadro de diálogo se cierre al hacer clic fuera de él
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.reload();
                    }
                  });
                break;
            case 1:
                Swal.fire({
                    title: 'Reserva completada',
                    text: 'Gracias por reservar en Viauy',
                    icon: 'success',
                    allowOutsideClick: false // Evita que el cuadro de diálogo se cierre al hacer clic fuera de él
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.reload();
                    }
                  });
                break;
            case 2:
                Swal.fire({
                    title: 'Reserva concluída',
                    text: 'Obrigado por reservar na Viauy',
                    icon: 'success',
                    allowOutsideClick: false // Evita que el cuadro de diálogo se cierre al hacer clic fuera de él
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.reload();
                    }
                  });
                break;
            default:
                break;
        }
    }else{
        switch ( parseInt(columnNumber)) {
            case 0:
                Swal.fire({
                    title: 'Reservation Error',
                    text: 'There was an error while processing your reservation. Please try again later.',
                    icon: 'error',
                    allowOutsideClick: false
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.reload();
                    }
                  });
                break;
            case 1:
                Swal.fire({
                    title: 'Error en la reserva', 
                    text: 'Hubo un error al procesar tu reserva. Por favor, inténtalo de nuevo más tarde.',
                    icon: 'error',
                    allowOutsideClick: false
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.reload();
                    }
                  });
                break;
            case 2:
                Swal.fire({
                    title: 'Erro na reserva',
                    text: 'Houve um erro ao processar a sua reserva. Por favor, tente novamente mais tarde.',
                    icon: 'error',
                    allowOutsideClick: false
                  }).then((result) => {
                    if (result.isConfirmed) {
                      window.location.reload();
                    }
                  });
                break;
            default:
                break;
        }
    }
}

function pagarBtn(){

    document.getElementById('booking-pago-cambiar-seccion-siguiente').disabled=true;
    
    let dateReserva = new Date();
    let horarioReservaHours = String(dateReserva.getHours()).padStart(2, '0');
    let horarioReservaMinutes = String(dateReserva.getMinutes()).padStart(2, '0');
    let horarioReservaSeconds = String(dateReserva.getSeconds()).padStart(2, '0');
    
    let fechaReservaDate = dateReserva.getDate() + 1;
    let fechaReservaMonth = dateReserva.getMonth() + 1;
    let fechaReservaYear = dateReserva.getFullYear();
    
    let formDataIda = new FormData;
    
    formDataIda.append('horario_reserva', `${horarioReservaHours}:${horarioReservaMinutes}:${horarioReservaSeconds}`)
    formDataIda.append('fecha', `${fechaReservaYear}-${fechaReservaMonth}-${fechaReservaDate}`);
    formDataIda.append('id_horario', datosLineaIda.ID_Horario);
    formDataIda.append('num_asiento', datosLineaIda.Num_Asiento);
    formDataIda.append('precio', precioTotal);
    formDataIda.append('metodo_pago', document.getElementById('booking-metodo-pago-select').value);
    console.log(document.getElementById('booking-metodo-pago-select').value)
    
    let formDataVuelta = new FormData;
    
    formDataVuelta.append('horario_reserva', `${horarioReservaHours}:${horarioReservaMinutes}:${horarioReservaSeconds}`)
    formDataVuelta.append('fecha', `${fechaReservaYear}-${fechaReservaMonth}-${fechaReservaDate}`);
    formDataVuelta.append('id_horario', datosLineaVuelta.ID_Horario);
    formDataVuelta.append('num_asiento', datosLineaVuelta.Num_Asiento);
    formDataVuelta.append('metodo_pago', document.getElementById('booking-metodo-pago-select').value);
    formDataVuelta.append('precio', precioTotal);


    let optionsIda = {
        method:'POST',
        body: formDataIda
    }

    // Fetch 1
    showLoader();
    fetch(raiz+'/Backend/Booking/new_reservation.php',optionsIda)
    .then((response)=>{
        if(response.ok){
            return response.json();
        }
    })
    .then((data)=>{
        hideLoader();
        // Data 1
        let estadoReservaIda = data.estado_compra;
        let estadoReservaVuelta = false;

            let optionsVuelta = {
                method:'POST',
                body: formDataVuelta
            }

            // Condicional ida y vuelta
            if(directInputValue == 0){

                // Fetch 2
                showLoader();
                fetch(raiz+'/Backend/Booking/new_reservation.php',optionsVuelta)
                .then((response)=>{
                    if(response.ok){
                        return response.json();
                    }
                })
                .then((data)=>{
                    // Data 2
                    console.log('estado de reserva de vuelta cambio a: ' + data.estado_compra)
                    estadoReservaVuelta = data.estado_compra;
                    hideLoader();

                    if(estadoReservaIda && estadoReservaVuelta){
                        mostrarReservaCompletada(true);
                    }else{
                        mostrarReservaCompletada(false);
                    }

                })
                .catch((err)=>{
                    console.error(err)
                });
    
            }else{
                if(estadoReservaIda){
                    mostrarReservaCompletada(true);
                }else{
                    mostrarReservaCompletada(false);
                }
            }

            console.log(estadoReservaIda)
            console.log(estadoReservaVuelta)

    })
    .catch((err)=>{
        console.error(err)
    });
    
}

// Se buscan asientos disponibles
function findSeats(datosLinea){
    
    let formData = new FormData();
        formData.append('ID_Horario', datosLinea.ID_Horario);
        formData.append('Matricula_Unidad', datosLinea.Matricula_Unidad);

    let options = {
        method: 'POST',
        body: formData
    }

    // Se hace fetch para la busqueda de lineas
    showLoader();
    fetch(raiz+'/Backend/Booking/consulta_asientos.php',  options)
    .then((response)=>{
        hideLoader();
        if(response.ok){
            return response.json();
        }
    })
    .then((data)=>{

        let p1 = 1;
        let p2 = 2;
        let p3 = 3;
        let p4 = 4;
        for (let i1 = data.length; i1 > 0; i1-=4) {

            const divCont = document.createElement("div");
            divCont.className = "booking-asiento-seleccion-asiento-content-asiento-cont";
            if(i1 == 3){
                const divAsiento1 = document.createElement("button");
                divAsiento1.className = "booking-asiento-seleccion-asiento-content-asiento";
                const divAsiento2 = document.createElement("button");
                divAsiento2.className = "booking-asiento-seleccion-asiento-content-asiento";
                const divAsiento3 = document.createElement("button");
                divAsiento3.className = "booking-asiento-seleccion-asiento-content-asiento";
                const divAsiento4 = document.createElement("div");
                divAsiento4.className = "booking-asiento-seleccion-asiento-content-asiento-invisible";
                const divAsientoSep = document.createElement("span");
                divAsientoSep.className = "booking-asiento-seleccion-asiento-content-asiento-cont-separator";
                divAsiento1.textContent=p1;
                divAsiento2.textContent=p2;
                divAsiento3.textContent=p3;
                divAsiento1.value=p1;
                divAsiento2.value=p2;
                divAsiento3.value=p3;
                p1+=4;
                p2+=4;
                p3+=4;
                divCont.appendChild(divAsiento1);
                divCont.appendChild(divAsiento2);
                divCont.appendChild(divAsientoSep);
                divCont.appendChild(divAsiento3);
                divCont.appendChild(divAsiento4);
            }else if(i1 == 2){
                const divAsiento1 = document.createElement("button");
                divAsiento1.className = "booking-asiento-seleccion-asiento-content-asiento";
                const divAsiento2 = document.createElement("button");
                divAsiento2.className = "booking-asiento-seleccion-asiento-content-asiento";
                const divAsiento3 = document.createElement("div");
                divAsiento3.className = "booking-asiento-seleccion-asiento-content-asiento-invisible";
                const divAsiento4 = document.createElement("div");
                divAsiento4.className = "booking-asiento-seleccion-asiento-content-asiento-invisible";
                const divAsientoSep = document.createElement("span");
                divAsientoSep.className = "booking-asiento-seleccion-asiento-content-asiento-cont-separator";
                divAsiento1.textContent=p1;
                divAsiento2.textContent=p2;
                divAsiento1.value=p1;
                divAsiento2.value=p2;
                p1+=4;
                p2+=4;
                divCont.appendChild(divAsiento1);
                divCont.appendChild(divAsiento2);
                divCont.appendChild(divAsientoSep);
                divCont.appendChild(divAsiento3);
                divCont.appendChild(divAsiento4);
            }else if(i1 == 1){
                const divAsiento1 = document.createElement("button");
                divAsiento1.className = "booking-asiento-seleccion-asiento-content-asiento";
                const divAsiento2 = document.createElement("div");
                divAsiento2.className = "booking-asiento-seleccion-asiento-content-asiento-invisible";
                const divAsiento3 = document.createElement("div");
                divAsiento3.className = "booking-asiento-seleccion-asiento-content-asiento-invisible";
                const divAsiento4 = document.createElement("div");
                divAsiento4.className = "booking-asiento-seleccion-asiento-content-asiento-invisible";
                const divAsientoSep = document.createElement("span");
                divAsientoSep.className = "booking-asiento-seleccion-asiento-content-asiento-cont-separator";
                divAsiento1.textContent=p1;
                divAsiento1.value=p1;
                p1+=4;
                divCont.appendChild(divAsiento1);
                divCont.appendChild(divAsiento2);
                divCont.appendChild(divAsientoSep);
                divCont.appendChild(divAsiento3);
                divCont.appendChild(divAsiento4);
            }else{
                const divAsiento1 = document.createElement("button");
                divAsiento1.className = "booking-asiento-seleccion-asiento-content-asiento";
                const divAsiento2 = document.createElement("button");
                divAsiento2.className = "booking-asiento-seleccion-asiento-content-asiento";
                const divAsiento3 = document.createElement("button");
                divAsiento3.className = "booking-asiento-seleccion-asiento-content-asiento";
                const divAsiento4 = document.createElement("button");
                divAsiento4.className = "booking-asiento-seleccion-asiento-content-asiento";
                const divAsientoSep = document.createElement("span");
                divAsientoSep.className = "booking-asiento-seleccion-asiento-content-asiento-cont-separator";
                divAsiento1.textContent=p1;
                divAsiento2.textContent=p2;
                divAsiento3.textContent=p3;
                divAsiento4.textContent=p4;
                divAsiento1.value=p1;
                divAsiento2.value=p2;
                divAsiento3.value=p3;
                divAsiento4.value=p4;
                p1+=4;
                p2+=4;
                p3+=4;
                p4+=4;
                divCont.appendChild(divAsiento1);
                divCont.appendChild(divAsiento2);
                divCont.appendChild(divAsientoSep);
                divCont.appendChild(divAsiento3);
                divCont.appendChild(divAsiento4);
            }


            const contenedor = document.querySelector(".booking-asiento-seleccion-asiento-content");
            contenedor.appendChild(divCont);        
        }

        document.querySelector('.booking-asiento-cambiar-seccion-info-origen-title').textContent = datosLinea.ID_Parada_Origen;
        document.querySelector('.booking-asiento-cambiar-seccion-info-destino-title').textContent = datosLinea.ID_Parada_Destino;
        document.querySelector('.booking-asiento-cambiar-seccion-info-origen-titleAb').textContent = datosLinea.OrigenAb;
        document.querySelector('.booking-asiento-cambiar-seccion-info-destino-titleAb').textContent = datosLinea.DestinoAb;
        document.querySelector('.booking-asiento-cambiar-seccion-info-unidad-titleAb').textContent = datosLinea.Num_Unidad;
        document.querySelector('.booking-asiento-cambiar-seccion-info-asiento-titleAb').innerHTML = '00';


        controlarDisponibilidadAsientos(datosLinea);
    })
    .catch((err)=>{
        console.error(err);
    });
}

// Esta funcion busca lineas disponibles y las muestra
function searchRoutes(datosLinea){
    
    // Se eliminan lineas ya existentes mostrandose en la reserva
    let  childss = document.querySelector('.booking-lineas-disponibles').childNodes;
    for (let brm = 0; brm < childss.length; brm++) {
        document.querySelector('.booking-lineas-disponibles').removeChild(childss[brm]);
    }

    // Se muestra la cantidad de boletos
    let bookingColumnNumber = parseInt(localStorage.getItem('columnNumber'));
    switch (bookingColumnNumber) {
        case 0:
            if (travInputValue > 1) {
                document.querySelector('.booking-lineas-tipo-pasaje').textContent=travInputValue + (directInputValue === 1 ? " one-way tickets" : " round-trip tickets");
            }else{
                document.querySelector('.booking-lineas-tipo-pasaje').textContent=travInputValue + (directInputValue === 1 ? " one-way ticket" : " round-trip ticket");
            }
            break;
        case 1:
            if (travInputValue > 1) {
                document.querySelector('.booking-lineas-tipo-pasaje').textContent=travInputValue + " pasajes de " + (directInputValue === 1 ? "Ida" : "ida y vuelta");
            }else{
                document.querySelector('.booking-lineas-tipo-pasaje').textContent=travInputValue + " pasaje de " + (directInputValue === 1 ? "Ida" : "ida y vuelta");
            }
            break;
        case 2:
            case 1:
                if (travInputValue > 1) {
                    document.querySelector('.booking-lineas-tipo-pasaje').textContent=travInputValue + " passagens de" + (directInputValue === 1 ? "ida" : "ida e volta");
                }else{
                    document.querySelector('.booking-lineas-tipo-pasaje').textContent=travInputValue + " passagen de" + (directInputValue === 1 ? "ida" : "ida e volta");
                }
            break;
        default:
            break;
    }

    // Abreviacion de los dias de la semana segun idioma
    let nombresDias;    
    switch (bookingColumnNumber) {
        case 0:
            nombresDias = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
            break;
        case 1:
            nombresDias = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];
            break;
            case 2:
            nombresDias = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
            break;
        default:
            break;
    }

    var año = fechaIdaInput.getFullYear() ;
    var mes = fechaIdaInput.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, así que sumamos 1
    var dia = fechaIdaInput.getDate() + 1;

    var añoV = fechaVueltaInput.getFullYear() ;
    var mesV = fechaVueltaInput.getMonth() + 1; // Los meses en JavaScript van de 0 a 11, así que sumamos 1
    var diaV = fechaVueltaInput.getDate() + 1;

    // Asegurarnos de que el mes y el día tengan siempre dos dígitos
    if (mes < 10) {
        mes = "0" + (mes + 1);
    }

    if (dia < 10) {
        dia = "0" + dia;
    }
    // Asegurarnos de que el mes y el día tengan siempre dos dígitos
    if (mesV < 10) {
        mesV = "0" + (mesV + 1);
    }

    if (diaV < 10) {
        diaV = "0" + diaV;
    }

    // Crear la cadena en formato "yyyy-mm-dd"
    let fechaIdaInputFormated = año + "-" + mes + "-" + dia;
    let fechaVueltaInputFormated = añoV + "-" + mesV + "-" + diaV;

    if(datosLinea.Dir_Viaje == 'Ida'){
        // Se le agregan valores a las fechas en la pare superior de la reserva
        const diasParaMostrar = [-2,-1,0,1,2];
        for (let i = -2; i < diasParaMostrar.length; i++) {
            const date = new Date()
            date.setDate(fechaIdaInput.getDate() + diasParaMostrar[i]);
            
            const dayValue = nombresDias[date.getDay()];
            const dateValue = date.getDate() + 1;
            const elementId = `booking-fechaIda-item-${i === 2 ? 'today' : i === 0 ? 'dby' : i === 1 ? 'yesterday' : i === 3 ? 'tomorrow' : 'tat'}`;

            document.getElementById(`${elementId}-day`).innerHTML = dayValue;
            document.getElementById(`${elementId}-date`).innerHTML = dateValue;
        }

    }else if(datosLinea.Dir_Viaje == 'Vuelta'){
        // Se le agregan valores a las fechas en la pare superior de la reserva
        const diasParaMostrar = [-2,-1,0,1,2];
        for (let i = -2; i < diasParaMostrar.length; i++) {
            const date = new Date()
            date.setDate(fechaVueltaInput.getDate() + diasParaMostrar[i]);
            
            const dayValue = nombresDias[date.getDay()];
            const dateValue = date.getDate() + 1;
            const elementId = `booking-fechaIda-item-${i === 2 ? 'today' : i === 0 ? 'dby' : i === 1 ? 'yesterday' : i === 3 ? 'tomorrow' : 'tat'}`;

            document.getElementById(`${elementId}-day`).innerHTML = dayValue;
            document.getElementById(`${elementId}-date`).innerHTML = dateValue;
        }

    }

    if(datosLinea.Dir_Viaje == 'Ida'){
        // Se le agregan valores al origen y edstino en la visual de la reserva
        document.getElementById('booking-lineas-departamento-origen').textContent = document.getElementById('form-from-div').options[document.getElementById('form-from-div').selectedIndex].textContent;
        document.getElementById('booking-lineas-departamento-destino').textContent = document.getElementById('form-to-div').options[document.getElementById('form-to-div').selectedIndex].textContent;
    }else if(datosLinea.Dir_Viaje == 'Vuelta'){
        // Se le agregan valores al origen y edstino en la visual de la reserva
        document.getElementById('booking-lineas-departamento-destino').textContent = document.getElementById('form-from-div').options[document.getElementById('form-from-div').selectedIndex].textContent;
        document.getElementById('booking-lineas-departamento-origen').textContent = document.getElementById('form-to-div').options[document.getElementById('form-to-div').selectedIndex].textContent;
    }


    // Preparamos el fetch
    let formData = new FormData();
    if(datosLinea.Dir_Viaje == 'Vuelta'){
        formData.append('fromValue', toInputValue);
        formData.append('toValue', fromInputValue);
        formData.append('Sentido', 'Vuelta');
        formData.append('calIdaValue', fechaVueltaInputFormated);
    }else if(datosLinea.Dir_Viaje == 'Ida'){
        formData.append('fromValue', fromInputValue);
        formData.append('toValue', toInputValue);
        formData.append('Sentido', 'Ida');
        formData.append('calIdaValue', fechaIdaInputFormated);
    }

    let options = {
        method: 'POST',
        body: formData
    }

    // Se hace fetch para la busqueda de lineas
    showLoader();
    fetch(raiz+'/Backend/Booking/consulta_lineas.php',  options)
    .then((response)=>{
        hideLoader();
        if(response.ok){
            return response.json();
        }
    })
    .then((data)=>{

        LineasData = data;

        let lineasDisponibles = [];
    
        for (let o = 0; o < data.length; o++) {
            lineasDisponibles = data.map(obj => {
                const fechaFormateada = new Date(obj.Fecha);
                // Agregar la fecha formateada al objeto
                obj.Fecha = fechaFormateada;
                return obj;
              });
        }
        document.querySelector('.booking-cantidad-lineas-num').textContent=lineasDisponibles.length;
    
    // Se crean todas las lineas disponibles (estructura html)
    
    // El siguiente conjunto de código exhibe un estilo de programación que resulta altamente -
    // desafiante desde el punto de vista estético y estructural, generando -
    // una experiencia visual que puede resultar incómoda para quienes lo observan.
    
    for (let e = 0; e < lineasDisponibles.length; e++) {
    
    const bookingLineasDisponibles = document.querySelector('.booking-lineas-disponibles');
    
    const bookingLineasDisponiblesItem = document.createElement("div");
    bookingLineasDisponiblesItem.classList.add("booking-lineas-disponibles-item");
    
    const bookingLineasDisponiblesItemTop = document.createElement("div");
    bookingLineasDisponiblesItemTop.classList.add("booking-lineas-disponibles-item-top");
    
    const leftContent = document.createElement("div");
    leftContent.classList.add("booking-lineas-disponibles-item-top-content-left");
    
    const origen = document.createElement("div");
    origen.classList.add("booking-lineas-disponibles-item-top-content-left-origen", "booking-departament");
    const origenTitle = document.createElement("span");
    origenTitle.classList.add("booking-lineas-disponibles-item-top-content-left-origen-title", "booking-departament-title");
    origenTitle.textContent = lineasDisponibles[e].OrigenAb;
    origen.appendChild(origenTitle);
    origen.appendChild(document.createTextNode(lineasDisponibles[e].Origen));
    
    const fecha = document.createElement("div");
    fecha.classList.add("booking-lineas-disponibles-item-top-content-left-fecha");
    const fechaTitle = document.createElement("span");
    fechaTitle.classList.add("booking-lineas-disponibles-item-top-content-left-fecha-title");
    switch (bookingColumnNumber) {
        case 0:
            fechaTitle.textContent = 'Date';
            break;
        case 1:
            fechaTitle.textContent = 'Fecha';
            break;
        case 2:
            fechaTitle.textContent = 'Data';
            break;
            default:
                break;
            }
            fecha.appendChild(fechaTitle);
    
            let routeMonth =  lineasDisponibles[e].Fecha.getMonth();
            let diaMasUno;
            switch (bookingColumnNumber) {
                case 0:
                    const mesAbreviado0 = routeMonth === 0 ? 'JAN' :
                    routeMonth === 1 ? 'FEB' :
                    routeMonth === 2 ? 'MAR' :
                    routeMonth === 3 ? 'APR' :
                    routeMonth === 4 ? 'MAY' :
                    routeMonth === 5 ? 'JUN' :
                    routeMonth === 6 ? 'JUL' :
                    routeMonth === 7 ? 'AUG' :
                    routeMonth === 8 ? 'SEP' :
                    routeMonth === 9 ? 'OCT' :
                    routeMonth === 10 ? 'NOV' : 'DEC';
                    if(datosLinea.Dir_Viaje == 'Ida'){
                        diaMasUno = parseInt(fechaIdaInput.getDate()) + 1;
                        fecha.appendChild(document.createTextNode(mesAbreviado0+" "+ diaMasUno));
                        datosLinea.calIdaInputValueDateFormat = mesAbreviado0+" "+ diaMasUno;
                    }else if(datosLinea.Dir_Viaje == 'Vuelta'){
                        diaMasUno = parseInt(fechaVueltaInput.getDate()) + 1;
                        fecha.appendChild(document.createTextNode(mesAbreviado0+" "+ diaMasUno));
                        datosLinea.calIdaInputValueDateFormat = mesAbreviado0+" "+ diaMasUno;
                    }
                    break;
                case 1:
                    const mesAbreviado1 = routeMonth === 0 ? 'ENE' :
                    routeMonth === 1 ? 'FEB' :
                    routeMonth === 2 ? 'MAR' :
                    routeMonth === 3 ? 'ABR' :
                    routeMonth === 4 ? 'MAY' :
                    routeMonth === 5 ? 'JUN' :
                    routeMonth === 6 ? 'JUL' :
                    routeMonth === 7 ? 'AGO' :
                    routeMonth === 8 ? 'SEP' :
                    routeMonth === 9 ? 'OCT' :
                    routeMonth === 10 ? 'NOV' : 'DIC';
                    if(datosLinea.Dir_Viaje == 'Ida'){
                        diaMasUno = parseInt(fechaIdaInput.getDate()) + 1;
                        fecha.appendChild(document.createTextNode(mesAbreviado1+" "+ diaMasUno));
                        datosLinea.calIdaInputValueDateFormat = mesAbreviado1+" "+ diaMasUno;
                    }else if(datosLinea.Dir_Viaje == 'Vuelta'){
                        diaMasUno = parseInt(fechaVueltaInput.getDate()) + 1;
                        fecha.appendChild(document.createTextNode(mesAbreviado1+" "+ diaMasUno));
                        datosLinea.calIdaInputValueDateFormat = mesAbreviado1+" "+ diaMasUno;
                    }
                    break;
            case 2:
                    const mesAbreviado2 = routeMonth === 0 ? 'JAN' :
                    routeMonth === 1 ? 'FEV' :
                    routeMonth === 2 ? 'MAR' :
                    routeMonth === 3 ? 'ABR' :
                    routeMonth === 4 ? 'MAI' :
                    routeMonth === 5 ? 'JUN' :
                    routeMonth === 6 ? 'JUL' :
                    routeMonth === 7 ? 'AGO' :
                    routeMonth === 8 ? 'SET' :
                    routeMonth === 9 ? 'OUT' :
                    routeMonth === 10 ? 'NOV' : 'DEZ';
                    if(datosLinea.Dir_Viaje == 'Ida'){
                        diaMasUno = parseInt(fechaIdaInput.getDate()) + 1;
                        fecha.appendChild(document.createTextNode(mesAbreviado2+" "+ diaMasUno));
                        datosLinea.calIdaInputValueDateFormat = mesAbreviado2+" "+ diaMasUno;
                    }else if(datosLinea.Dir_Viaje == 'Vuelta'){
                        diaMasUno = parseInt(fechaVueltaInput.getDate()) + 1;
                        fecha.appendChild(document.createTextNode(mesAbreviado2+" "+ diaMasUno));
                        datosLinea.calIdaInputValueDateFormat = mesAbreviado2+" "+ diaMasUno;
                    }
                    break;
                default:
                    break;
            }
            
    leftContent.appendChild(origen);
    leftContent.appendChild(fecha);
    
    const centerContent = document.createElement("div");
    centerContent.classList.add("booking-lineas-disponibles-item-top-content-center");
    // const routeText = document.createElement('p');
    // routeText.textContent = lineasDisponibles[e].Num_Linea;
    // routeText.classList.add('booking-route-title');
    const busIcon = document.createElement("span");
    busIcon.classList.add("material-symbols-outlined", "booking-bus-icon");
    busIcon.textContent = "directions_bus";
    
    const hora = document.createElement("div");
    hora.classList.add("booking-lineas-disponibles-item-top-content-center-hora");
    const origenHora = document.createElement("div");
    origenHora.classList.add("booking-lineas-disponibles-item-top-content-center-hora-origen");
    origenHora.textContent = lineasDisponibles[e].Hora_Salida;
    const destinoHora = document.createElement("div");
    destinoHora.classList.add("booking-lineas-disponibles-item-top-content-center-hora-origen");
    let tiempoString = lineasDisponibles[e].Hora_Salida;
    let [horaSalida, minutosSalida] = tiempoString.split(':');
    const horaSalidaDate = new Date(0)
    horaSalidaDate.setHours(parseInt(horaSalida)+parseInt(lineasDisponibles[e].Duracion/60))
    horaSalidaDate.setMinutes(parseInt(minutosSalida)+parseInt(lineasDisponibles[e].Duracion%60))
    // datosLinea.HoraSalidaLLegada = lineasDisponibles[e].Hora_Salida;
    destinoHora.innerHTML ="&nbsp•&nbsp"+horaSalidaDate.getHours()+":"+((horaSalidaDate.getMinutes().toString().length <= 1) ? "0" + horaSalidaDate.getMinutes() : horaSalidaDate.getMinutes());
    
    
    hora.appendChild(origenHora);
    hora.appendChild(destinoHora);
    
    const duracion = document.createElement("div");
    duracion.classList.add("booking-lineas-disponibles-item-top-content-center-duracion");
    duracion.textContent = parseInt(lineasDisponibles[e].Duracion/60)+"H "+((lineasDisponibles[e].Duracion%60) != 0 ? (lineasDisponibles[e].Duracion%60) + "M" : '00M');
    
    // centerContent.appendChild(routeText);
    centerContent.appendChild(busIcon);
    centerContent.appendChild(hora);
    centerContent.appendChild(duracion);
    
    const rightContent = document.createElement("div");
    rightContent.classList.add("booking-lineas-disponibles-item-top-content-right");
    
    const destino = document.createElement("div");
    destino.classList.add("booking-lineas-disponibles-item-top-content-right-destino", "booking-departament");
    const destinoTitle = document.createElement("span");
    destinoTitle.classList.add("booking-lineas-disponibles-item-top-content-right-destino-title", "booking-departament-title");
    destinoTitle.textContent = lineasDisponibles[e].DestinoAb;
    destino.appendChild(destinoTitle);
    destino.appendChild(document.createTextNode(lineasDisponibles[e].Destino));
    
    const fechaDestino = document.createElement("div");
    fechaDestino.classList.add("booking-lineas-disponibles-item-top-content-right-fecha");
    const fechaDestinoTitle = document.createElement("span");
    fechaDestinoTitle.classList.add("booking-lineas-disponibles-item-top-content-right-fecha-title");
    switch (bookingColumnNumber) {
        case 0:
            fechaDestinoTitle.textContent = 'Car N°';
            break;
            case 1:
                fechaDestinoTitle.textContent = 'Coche N°';
                break;
        case 2:
            fechaDestinoTitle.textContent = 'Carro N°';
            break;
        default:
            break;
        }
        fechaDestino.appendChild(fechaDestinoTitle);
        fechaDestino.appendChild(document.createTextNode(lineasDisponibles[e].Num_Unidad));
        
        rightContent.appendChild(destino);
        rightContent.appendChild(fechaDestino);
        
        bookingLineasDisponiblesItemTop.appendChild(leftContent);
        bookingLineasDisponiblesItemTop.appendChild(centerContent);
        bookingLineasDisponiblesItemTop.appendChild(rightContent);
        
        const bookingLineasDisponiblesItemBot = document.createElement("div");
        bookingLineasDisponiblesItemBot.classList.add("booking-lineas-disponibles-item-bot");
        
        const botLeft = document.createElement("div");
        botLeft.classList.add("booking-lineas-disponibles-item-bot-left");
        for (let i = 0; i < lineasDisponibles[e].Caracteristica.length; i++) {
            const itemCaracteristica = document.createElement("span");
            itemCaracteristica.classList.add("booking-lineas-disponibles-item-bot-left-item", "material-symbols-outlined");
            switch (lineasDisponibles[e].Caracteristica[i]) {
                case 'Aire acondicionado':
                    itemCaracteristica.textContent="ac_unit";
                    break;
                case 'Baño':
                    itemCaracteristica.textContent="soap";
                    break;
                case 'Wifi':
                    itemCaracteristica.textContent="wifi";
                    break;
                default:
                    break;
            }
        botLeft.appendChild(itemCaracteristica);
    }
    


    const botRight = document.createElement("button");
    botRight.classList.add("booking-lineas-disponibles-item-bot-right");
    botRight.value=lineasDisponibles[e].Id_Horario;

    switch(bookingColumnNumber){
        case 0:
            botRight.textContent="Select route";
            break;  
        case 1:
            botRight.textContent="Seleccionar linea";
            break;  
        case 2:
            botRight.textContent="Selecione a linha";
            break;  
    }
    
    bookingLineasDisponiblesItemBot.appendChild(botLeft);
    bookingLineasDisponiblesItemBot.appendChild(botRight);
    
    bookingLineasDisponiblesItem.appendChild(bookingLineasDisponiblesItemTop);
    bookingLineasDisponiblesItem.appendChild(bookingLineasDisponiblesItemBot);
    
    // Agregar el elemento bookingLineasDisponiblesItem al DOM (por ejemplo, al body)
    bookingLineasDisponibles.appendChild(bookingLineasDisponiblesItem);
    
    }

    // Aparece la visual del procedimiento de reserva 
    document.querySelector('.booking-container').style.display='flex';
    setTimeout(() => {
        document.querySelector('.booking-container').style.height='100%';
    }, 100);

    lineSelected(datosLinea, data);
        
    })
    .catch((err)=>{
        console.error(err);
    });

}

// EMPIEZA EL AREA DE RESERVA 

let LineasData; 
let aLineIsSelected = false;

let directInputValue = 0;
let travInputValue;
let fromInputValue;
let toInputValue;
let calIdaInputValue;
let fechaIdaInput;
let fechaVueltaInput;

// Importante | Se guarda linea seleccionada por el usuario en la ida

let datosLineaIda = {
    'calIdaInputValueDateFormat':null,
    'HoraSalidaLLegada':null,
    'OrigenAb':null,
    'DestinoAb':null,
    'Num_Unidad':null,
    'ID_Linea':null,
    'Sentido':null,
    'Matricula_Unidad':null,
    'Duracion':null,
    'ID_Horario':null,
    'ID_Parada_Origen':null,
    'ID_Parada_Destino':null,
    'Num_Asiento':null,
    'Dir_Viaje':'Ida'
}

let datosLineaVuelta = {
    'calIdaInputValueDateFormat':null,
    'HoraSalidaLLegada':null,
    'OrigenAb':null,
    'DestinoAb':null,
    'Num_Unidad':null,
    'ID_Linea':null,
    'Sentido':null,
    'Matricula_Unidad':null,
    'Duracion':null,
    'ID_Horario':null,
    'ID_Parada_Origen':null,
    'ID_Parada_Destino':null,
    'Num_Asiento':null,
    'Dir_Viaje':'Vuelta'
}

// Se desbilita o hablita la fecha de "vuelta"
switch(directInputValue){
    case 1:
        document
        document.getElementById('form-calVenida-div').disabled=true;
        addIdaFocus();
        break;
    case 0:
        removeIdaFocus();
        document.getElementById('form-calVenida-div').disabled=false;
        document.getElementById('form-cont-div-calVenida').classList.remove("form-cont-div-calVenidaAfter");
        break;
}


// Cambia el valor del viaje de tipo ida o ida y vuelta
document.getElementById('form-ida-div').addEventListener('focus', ()=>{
    directInputValue = 1; // Ida = 0
});

// Cambia el valor del viaje de tipo ida o ida y vuelta
document.getElementById('form-idavenida-div').addEventListener('focus', ()=>{
    directInputValue = 0; // ida y vuelta = 1
});

// Se ejecuta al apretar el boton para buscar lineas
    document.querySelector('.submitBtn').addEventListener('click', ()=>{

    document.getElementById('booking-pago-cambiar-seccion-siguiente').disabled=false;


    fetch(raiz+'/Backend/user_cookie.php')
    .then((response)=>{
        if(response.ok){
            return response.json();
        }
    })
    .then((data)=>{
        if(!data.email_usuario){
            return window.location.href='./Frontend/Account/LogIn/logIn.php';
        }else{

            // En caso de algun dato vacio no se dispara el formulario
            if(!document.querySelector('.home-form').checkValidity()){
                return;
            }

            travInputValue = document.getElementById('form-trav-div').value;
            fromInputValue = document.getElementById('form-from-div').value;
            toInputValue = document.getElementById('form-to-div').value;
            calIdaInputValue = document.getElementById('form-calIda-div').value;
            calVueltaInputValue = document.getElementById('form-calVenida-div').value;
            fechaIdaInput = new Date(calIdaInputValue);
            fechaVueltaInput = new Date(calVueltaInputValue);

            ///////////////////////
            searchRoutes(datosLineaIda);////////
            ///////////////////////

            let columnNumber = parseInt(localStorage.getItem('columnNumber'));
            switch (columnNumber) {
                case 0:
                    document.querySelector('.seleccion-horarios-sentido-text').textContent = 'Schedule Selection | OUTBOUND';
                    break;
                case 1:
                    document.querySelector('.seleccion-horarios-sentido-text').textContent = 'Selección de horarios | IDA';
                    break;
                case 1:
                    document.querySelector('.seleccion-horarios-sentido-text').textContent = 'Seleção de Horários | IDA';
                    break;
                default:
                    break;
            }
        }
        
    })
    .catch((arr)=>{
        console.error(arr)
    });

});

// Cambiar seccion

document.getElementById('booking-cambiar-seccion-siguiente').addEventListener('click', ()=>{
    try {
        let columnNumber = parseInt(localStorage.getItem('columnNumber'));
        if(directInputValue == 1 && datosLineaIda.ID_Horario != null){
            findSeats(datosLineaIda);
            switch (columnNumber) {
                case 0:
                    document.querySelector('.seleccion-asientos-sentido-text').textContent = 'Seat selection | OUTBOUND';                    
                    break;
                case 1:
                    document.querySelector('.seleccion-asientos-sentido-text').textContent = 'Selección de asiento | IDA';                    
                    break;
                case 2:
                    document.querySelector('.seleccion-asientos-sentido-text').textContent = 'Seleção de Assento | IDA';                    
                    break;
                default:
                    break;
            }
            cambiarIdaSeccionSiguiente();
        }else if(directInputValue == 0 && datosLineaVuelta.ID_Horario == null){
            console.log('ida')
            findSeats(datosLineaIda);
            switch (columnNumber) {
                case 0:
                    document.querySelector('.seleccion-asientos-sentido-text').textContent = 'Seat selection | OUTBOUND';                    
                    break;
                case 1:
                    document.querySelector('.seleccion-asientos-sentido-text').textContent = 'Selección de asiento | IDA';                    
                    break;
                case 2:
                    document.querySelector('.seleccion-asientos-sentido-text').textContent = 'Seleção de Assento | IDA';                    
                    break;
                default:
                    break;
            }
            cambiarIdaSeccionSiguiente();
        }else if(directInputValue == 0 && datosLineaVuelta.ID_Horario != null){
            console.log('vuelta')
            findSeats(datosLineaVuelta);
            switch (columnNumber) {
                case 0:
                    document.querySelector('.seleccion-asientos-sentido-text').textContent = 'Seat selection | RETURN';                    
                    break;
                case 1:
                    document.querySelector('.seleccion-asientos-sentido-text').textContent = 'Selección de asiento | VUELTA';                    
                    break;
                case 2:
                    document.querySelector('.seleccion-asientos-sentido-text').textContent = 'Seleção de Assento | VOLTA';                    
                    break;
                default:
                    break;
            }   
            cambiarIdaSeccionSiguiente();
        }
    } catch (error) {
        console.error("Error en findSeats:", error);
    }
});

document.getElementById('booking-asiento-cambiar-seccion-anterior').addEventListener('click', ()=>{
    if(directInputValue == 1 && datosLineaVuelta.ID_Horario == null){
        cambiarIdaAsientosSeccionAnterior();
        datosLineaIda.Num_Asiento = null;
    }else{
        cambiarIdaAsientosSeccionAnterior();
        datosLineaVuelta.Num_Asiento = null;
    }
});

document.getElementById('booking-pago-cambiar-seccion-anterior').addEventListener('click', ()=>{
    cambiarPagoSeccionAnterior();
});

document.getElementById('booking-asiento-cambiar-seccion-siguiente').addEventListener('click', ()=>{
    if(directInputValue == 0){
        if(datosLineaIda.Num_Asiento != null && datosLineaVuelta.ID_Horario == null){
            removeLines();
            searchRoutes(datosLineaVuelta);
            let columnNumber = parseInt(localStorage.getItem('columnNumber'));
            switch (columnNumber) {
                case 0:
                    document.querySelector('.seleccion-horarios-sentido-text').textContent = 'Schedule Selection | RETURN';
                    break;
                case 1:
                    document.querySelector('.seleccion-horarios-sentido-text').textContent = 'Selección de horarios | VUELTA';
                    break;
                case 1:
                    document.querySelector('.seleccion-horarios-sentido-text').textContent = 'Seleção de Horários | VOLTA';
                    break;
                default:
                    break;
            }
            cambiarIdaAsientosSeccionAnterior();
        }else if(datosLineaVuelta.Num_Asiento != null && datosLineaVuelta.ID_Horario != null){
            seccionPago();  
            cambiarIdaAsientosSeccionSiguiente();
        }
    }else{
        if(directInputValue == 1){
            if(datosLineaIda.Num_Asiento != null){
                seccionPago();  
                cambiarIdaAsientosSeccionSiguiente();
            }
        }
    }
});

// Cambiar seccion

document.getElementById('booking-pago-cambiar-seccion-siguiente').addEventListener('click', ()=>{
    pagarBtn();
});