
// Se oculta configuración
document.querySelector('.icon-close-mytickets').addEventListener('click', () => {
    closeConfig();
  });
  
  // Aparece configuración
  document.getElementById('header-myTickets-action').addEventListener('click', () => {
    openConfig();
  });
  
  // Cerrar seccion configuracion
  function openConfig() {
    if(innerWidth <= 900){
      document.querySelector('.mytickets-container').style.width = "100%";
    }else{
      document.querySelector('.mytickets-container').style.width = "75%";
    }
    document.querySelector('html').style.overflow = "hidden";
  }
  
  // Cerrar seccion configuracion
  function closeConfig() {
    document.querySelector('.mytickets-container').style.width = "0";
    document.querySelector('html').style.overflow = "initial";
  }



  function cargarTicketsUser(ticketInfo) {

    for (let t = 0; t < ticketInfo.length; t++) {

        let columnNumberMyTick = parseInt(localStorage.getItem('columnNumber'))
        
        let nomLinea = ticketInfo[t].nomLinea
        let horaSalidaFormatted = new Date(ticketInfo[t].horaSalida)
        let horaSalida = `${horaSalidaFormatted.getHours()}:${horaSalidaFormatted.getMinutes().toString().length <= 1 ? '0'+horaSalidaFormatted.getMinutes() : horaSalidaFormatted.getMinutes()}`
        let numCoche = ticketInfo[t].matriculaUnidad.slice(-3);
        let estadoReserva = ticketInfo[t].estadoInfo

        let fechaSalidaFormatted = new Date(ticketInfo[t].fechaSalida)
        let fechaSalida

        // CONVERTIR FECHA SALIDA
            
        let mesConv = fechaSalidaFormatted.getMonth();
        let diaMasUno;

        switch (columnNumberMyTick) {
            case 0:
                const mesAbreviado0 = mesConv === 0 ? 'JAN' :
                mesConv === 1 ? 'FEB' :
                mesConv === 2 ? 'MAR' :
                mesConv === 3 ? 'APR' :
                mesConv === 4 ? 'MAY' :
                mesConv === 5 ? 'JUN' :
                mesConv === 6 ? 'JUL' :
                mesConv === 7 ? 'AUG' :
                mesConv === 8 ? 'SEP' :
                mesConv === 9 ? 'OCT' :
                mesConv === 10 ? 'NOV' : 'DEC';
                diaMasUno = parseInt(fechaSalidaFormatted.getDate()) + 1;
                fechaSalida = mesAbreviado0+" "+ diaMasUno;
                break;
            case 1:
                const mesAbreviado1 = mesConv === 0 ? 'ENE' :
                mesConv === 1 ? 'FEB' :
                mesConv === 2 ? 'MAR' :
                mesConv === 3 ? 'ABR' :
                mesConv === 4 ? 'MAY' :
                mesConv === 5 ? 'JUN' :
                mesConv === 6 ? 'JUL' :
                mesConv === 7 ? 'AGO' :
                mesConv === 8 ? 'SEP' :
                mesConv === 9 ? 'OCT' :
                mesConv === 10 ? 'NOV' : 'DIC';
                diaMasUno = parseInt(fechaSalidaFormatted.getDate()) + 1;
                fechaSalida = mesAbreviado1+" "+ diaMasUno;
                break;
        case 2:
                const mesAbreviado2 = mesConv === 0 ? 'JAN' :
                mesConv === 1 ? 'FEV' :
                mesConv === 2 ? 'MAR' :
                mesConv === 3 ? 'ABR' :
                mesConv === 4 ? 'MAI' :
                mesConv === 5 ? 'JUN' :
                mesConv === 6 ? 'JUL' :
                mesConv === 7 ? 'AGO' :
                mesConv === 8 ? 'SET' :
                mesConv === 9 ? 'OUT' :
                mesConv === 10 ? 'NOV' : 'DEZ';
                diaMasUno = parseInt(fechaSalidaFormatted.getDate()) + 1;
                fechaSalida = mesAbreviado2+" "+ diaMasUno;
                break;
            default:
                break;
        }
        
        // CONVERTIR FECHA SALIDA



        // switch (columnNumberMyTick) {
        //     case 0:
                
        //         break;
        //     case 1:
                
        //         break;
        //     case 2:
                
        //         break;
        // }

        
        // Crear el contenedor principal
        let container = document.createElement("div");
        container.classList.add("booking-lineas-disponibles-item");

        // Crear la sección superior
        let topSection = document.createElement("div");
        topSection.classList.add("booking-lineas-disponibles-item-top");
        
        // Crear la sección izquierda de la parte superior
        let leftTopContent = document.createElement("div");
        leftTopContent.classList.add("booking-lineas-disponibles-item-top-content-left");
        
        // Crear la subsección del origen
        let origen = document.createElement("div");
        origen.classList.add("booking-lineas-disponibles-item-top-content-left-origen", "booking-departament");
        
        let origenTitle = document.createElement("span");
        origenTitle.classList.add("booking-lineas-disponibles-item-top-content-left-origen-title", "booking-departament-title");
        origenTitle.textContent = nomLinea;
        
        let origenText = document.createTextNode(ticketInfo[t].origenLinea);
        origen.appendChild(origenTitle);
        origen.appendChild(origenText);
        
        // Crear la subsección de la fecha
        let fecha = document.createElement("div");
        fecha.classList.add("booking-lineas-disponibles-item-top-content-left-fecha");
        
        let fechaTitle = document.createElement("span");
        fechaTitle.classList.add("booking-lineas-disponibles-item-top-content-left-fecha-title");

        
        switch (columnNumberMyTick) {
            case 0:
                fechaTitle.textContent = "Date";
                break;
            case 1:
                fechaTitle.textContent = "Fecha";                
                break;
            case 2:
                fechaTitle.textContent = "Data";                
                break;
        }
        
        let horaText = document.createElement('p');
        horaText.className = "booking-lineas-disponibles-item-top-content-left-fecha-hora"
        horaText.innerHTML = fechaSalida + '&nbsp&nbsp|&nbsp&nbsp' + horaSalida

        fecha.appendChild(fechaTitle);
        fecha.appendChild(horaText);
        
        leftTopContent.appendChild(origen);
        leftTopContent.appendChild(fecha);
        
        // Crear la sección central de la parte superior
        let centerTopContent = document.createElement("div");
        centerTopContent.classList.add("booking-lineas-disponibles-item-top-content-center");
        
        let busIcon = document.createElement("span");
        busIcon.classList.add("material-symbols-outlined", "booking-bus-icon");
        busIcon.textContent = "directions_bus";

        let estadoTitle = document.createElement("span");
        estadoTitle.textContent = estadoReserva
        estadoTitle.classList.add("booking-lineas-disponibles-item-top-content-center-estado-title");
        
        switch (columnNumberMyTick) {
            case 0:
                estadoTitle.textContent = "Reservation status";
                break;
            case 1:
                estadoTitle.textContent = "Estado de la reserva";                
                break;
            case 2:
                estadoTitle.textContent = "Estado da reserva";     
                break;
        }
        
        let estadoInfoD = document.createElement("p");
        if(estadoReserva == 'Pendiente'){
            switch (columnNumberMyTick) {
                case 0:
                    estadoInfoD.textContent = "Pending";
                    break;
                case 1:
                    estadoInfoD.textContent = "Pendiente";                
                    break;
                case 2:
                    estadoInfoD.textContent = "Pendente";     
                    break;
            }
            estadoInfoD.classList.add("booking-lineas-disponibles-item-top-content-center-estado-info","booking-lineas-disponibles-item-top-content-center-estado-info-pendiente");
        }else if (estadoReserva == 'Confirmado') {
            switch (columnNumberMyTick) {
                case 0:
                    estadoInfoD.textContent = "Confirmed";
                    break;
                case 1:
                    estadoInfoD.textContent = "Confirmado";                
                    break;
                case 2:
                    estadoInfoD.textContent = "Confirmado";     
                    break;
            }
            estadoInfoD.classList.add("booking-lineas-disponibles-item-top-content-center-estado-info","booking-lineas-disponibles-item-top-content-center-estado-info-confirmado"); 
        }else if (estadoReserva == 'Cancelado') {
            switch (columnNumberMyTick) {
                case 0:
                    estadoInfoD.textContent = "Cancelled";
                    break;
                case 1:
                    estadoInfoD.textContent = "Cancelado";                
                    break;
                case 2:
                    estadoInfoD.textContent = "Cancelado";     
                    break;
            }
            estadoInfoD.classList.add("booking-lineas-disponibles-item-top-content-center-estado-info","booking-lineas-disponibles-item-top-content-center-estado-info-cancelado"); 
        }

        let hora = document.createElement("div");
        hora.classList.add("booking-lineas-disponibles-item-top-content-center-hora");

        centerTopContent.appendChild(busIcon);
        centerTopContent.appendChild(estadoTitle);
        centerTopContent.appendChild(estadoInfoD);
        
        // Crear la sección derecha de la parte superior
        let rightTopContent = document.createElement("div");
        rightTopContent.classList.add("booking-lineas-disponibles-item-top-content-right");
        
        // Crear la subsección del destino
        let destino = document.createElement("div");
        destino.classList.add("booking-lineas-disponibles-item-top-content-right-destino", "booking-departament");
        
        let destinoTitle = document.createElement("span");
        destinoTitle.classList.add("booking-lineas-disponibles-item-top-content-right-destino-title", "booking-departament-title");
        destinoTitle.textContent = nomLinea;
        
        let destinoText = document.createTextNode(ticketInfo[t].destinoLinea);
        destino.appendChild(destinoTitle);
        destino.appendChild(destinoText);
        
        // Crear la subsección de la fecha del destino
        let fechaDestino = document.createElement("div");
        fechaDestino.classList.add("booking-lineas-disponibles-item-top-content-right-fecha");
        
        let fechaDestinoTitle = document.createElement("span");
        fechaDestinoTitle.classList.add("booking-lineas-disponibles-item-top-content-right-fecha-title");

                
        switch (columnNumberMyTick) {
            case 0:
                fechaDestinoTitle.textContent = "Bus N°";
                break;
            case 1:
                fechaDestinoTitle.textContent = "Coche N°";                
                break;
            case 2:
                fechaDestinoTitle.textContent = "Carro N°";                
                break;
        }
        
        
        let fechaDestinoText = document.createTextNode(numCoche);
        fechaDestino.appendChild(fechaDestinoTitle);
        fechaDestino.appendChild(fechaDestinoText);
        
        rightTopContent.appendChild(destino);
        rightTopContent.appendChild(fechaDestino);
        
        // Agregar todas las secciones al contenedor principal
        topSection.appendChild(leftTopContent);
        topSection.appendChild(centerTopContent);
        topSection.appendChild(rightTopContent);
        
        // Crear la sección inferior
        let botSection = document.createElement("div");
        botSection.classList.add("booking-lineas-disponibles-item-bot");
        
        // Crear la subsección izquierda de la parte inferior
        let leftBotContent = document.createElement("div");
        leftBotContent.classList.add("booking-lineas-disponibles-item-bot-left");
        

        for (let i = 0; i < ticketInfo[t].caracteristicasUnidad.length; i++) {
            let wifiIcon = document.createElement("span");
            wifiIcon.classList.add("booking-lineas-disponibles-item-bot-left-item", "material-symbols-outlined");
            switch (ticketInfo[t].caracteristicasUnidad[i]) {
                case 'Aire acondicionado':
                    wifiIcon.textContent = "ac_unit";
                    break;
                case 'Baño':
                    wifiIcon.textContent = "soap";
                    break;
                case 'Wifi':
                    wifiIcon.textContent = "wifi";
                    break;
                default:
                    break;
            }
        leftBotContent.appendChild(wifiIcon);
    }
        
        
        // Crear la subsección izquierda de la parte inferior
        let centBotContent = document.createElement("div");
        centBotContent.classList.add("booking-lineas-disponibles-item-bot-center");
        
        let seatIcon = document.createElement("span");
        seatIcon.classList.add("booking-lineas-disponibles-item-bot-center-value", "material-symbols-outlined");
        seatIcon.textContent = "airline_seat_recline_extra";
        
        centBotContent.appendChild(seatIcon);

        for (let f = 0; f < ticketInfo[t].asiento.length; f++) {
            let seatValue = document.createElement("span");
            seatValue.classList.add("booking-lineas-disponibles-item-bot-center-item");
            seatValue.textContent = ticketInfo[t].asiento[f];
            centBotContent.appendChild(seatValue);
        }

        
        
        // Crear la subsección derecha de la parte inferior
        let rightBotContent = document.createElement("button");
        rightBotContent.classList.add("booking-lineas-disponibles-item-bot-right");
        rightBotContent.id = `booking-lineas-disponibles-item-bot-right-idh${ticketInfo[t].ID_Horario}`
        rightBotContent.setAttribute('idhorario',ticketInfo[t].ID_Horario)
        switch (columnNumberMyTick) {
            case 0:
                rightBotContent.textContent = "See details";
                break;
            case 1:
                rightBotContent.textContent = "Ver detalles";
                break;
            case 2:
                rightBotContent.textContent = "Veja detalhes";
                break;
        }
        
        // Agregar las subsecciones al contenedor inferior
        botSection.appendChild(leftBotContent);
        botSection.appendChild(centBotContent);
        botSection.appendChild(rightBotContent);
        
        // Agregar las secciones superior e inferior al contenedor principal
        container.appendChild(topSection);
        container.appendChild(botSection);
        
        // Agregar el contenedor al cuerpo del documento
        document.querySelector('.tickets-items-content').appendChild(container);
    }
  }

// let myTicketsNoConv = [
//     {
//         ID_Reserva: 15,
//         ID_Horario: 17,
//         nomLinea: 'V102',
//         origenLinea: 'Montevideo',
//         destinoLinea: 'Punta del Este',
//         caracteristicasUnidad: ['Wifi','Baño','Aire acondicionado'],
//         matriculaUnidad: 'SAD 3433',
//         horaSalida: new Date('1999-01-01T12:00:00'),
//         fechaSalida: new Date('2023-11-11'),
//         duracion: 256,
//         asiento: 12,
//     },
//     {
//         ID_Reserva: 15,
//         ID_Horario: 17,
//         nomLinea: 'V102',
//         origenLinea: 'Montevideo',
//         destinoLinea: 'Punta del Este',
//         caracteristicasUnidad: ['Wifi','Baño','Aire acondicionado'],
//         matriculaUnidad: 'SAD 3433',
//         horaSalida: new Date('1999-01-01T12:00:00'),
//         fechaSalida: new Date('2023-11-11'),
//         duracion: 256,
//         asiento: 23,
//     }
// ]

function myTicketsConvFunc(mytickets) {

    let myTicketsConv = [];

    mytickets.forEach(ticket => {
        // Buscar si ya existe un objeto con el mismo ID_Horario en el nuevo array
        let existingTicket = myTicketsConv.find(t => t.ID_Horario === ticket.ID_Horario && t.estadoInfo === ticket.estadoInfo);
    
        if (existingTicket) {
            // Si existe, agregar la ID_Reserva y el asiento al array existente
            existingTicket.ID_Reserva.push(ticket.ID_Reserva);
            existingTicket.asiento.push(ticket.asiento);
        } else {
            // Si no existe, crear un nuevo objeto con los datos del ticket actual
            myTicketsConv.push({
                costoReserva: ticket.costoReserva,
                estadoInfo: ticket.estadoInfo,
                ID_Reserva: [ticket.ID_Reserva],
                ID_Horario: ticket.ID_Horario,
                nomLinea: ticket.nomLinea,
                origenLinea: ticket.origenLinea,
                destinoLinea: ticket.destinoLinea,
                caracteristicasUnidad: ticket.caracteristicasUnidad,
                matriculaUnidad: ticket.matriculaUnidad,
                horaSalida: ticket.horaSalida,
                fechaSalida: ticket.fechaSalida,
                duracion: ticket.duracion,
                asiento: [ticket.asiento],
            });
        }
    });

    return myTicketsConv;
}


fetch(raiz+'Backend/Requests/consulta_tickets_usuarios.php')
.then(function (response) {
// Verificar si la solicitud fue exitosa
    if (response.ok) {
    return response.json(); // Parsear la respuesta como JSON
    }
})
.then(function (data) {
    let myTicketsNoConv = data
    let myTicketsConv = []
    console.log(data)
    myTicketsConv = myTicketsConvFunc(myTicketsNoConv)
    cargarTicketsUser(myTicketsConv)
    seeDetails(myTicketsConv)    
    cancelarReserv()
})
.catch(function (error) {
    console.error('Error:', error);
});


function seeDetails(mytickets) {
    Array.from(document.querySelectorAll('.booking-lineas-disponibles-item-bot-right')).forEach(element => {
        let columnNumberMyTick = parseInt(localStorage.getItem('columnNumber'))
        element.addEventListener('click', ()=>{

                document.querySelector('.tickets-view-content-cont').style.transition="all 0.2s linear"
                document.querySelector('.tickets-view-content-cont').style.height="0"
                document.querySelector('.tickets-view-content-cont').style.opacity="0"

                setTimeout(() => {
                    
                document.querySelector('.tickets-view-content-cont').style.transition=""
                    
                    for (let s = 0; s < mytickets.length; s++) {
                        if(mytickets[s].ID_Horario == element.getAttribute('idhorario')){
                            document.querySelector('.tickets-view-content-top-top-right-cancelarBtn').setAttribute('idreserva',mytickets[s].ID_Reserva)
                            document.getElementById('tickets-view-content-top-top-right-info-data1').textContent = '$'+mytickets[s].costoReserva+".00"
                        }
                    }
                    
                    document.querySelector('.select-reservation-to-info').style.display="none"
                    document.querySelector('.tickets-view-content-cont').style.height="100%"
                    document.querySelector('.tickets-view-content-cont').style.opacity="1"
                }, 500);

        })
    });
}

function cancelarReserv() {
    document.querySelector('.tickets-view-content-top-top-right-cancelarBtn').addEventListener('click', ()=>{

        let columnNumberMyTick = parseInt(localStorage.getItem('columnNumber'))

        let confrm
        
        switch (columnNumberMyTick) {
            case 0:
                confrm = confirm('Are you sure you want to cancel this reservation?')
                break;
            case 1:
                confrm = confirm('¿Está segur@ de que quiere cancelar esta reserva?')
                break;
            case 2:
                confrm = confirm('Tem certeza de que deseja cancelar esta reserva?')
                break;
        }
        
        if(confrm){
            let formData = new FormData()
    
            formData.append('idReserva', document.querySelector('.tickets-view-content-top-top-right-cancelarBtn').getAttribute('idreserva'))
        
            let option = {
                body: formData,
                method: 'post'
              };
            fetch(raiz+'Backend/Admin/user/consulta_cancelacion_reserva.php', option)
            .then((response) => {
                return response.json().then(data => ({
                data: data,
                status: response.status
                }));
            })
            .then((result) => {
                if (result.status === 200) {  
                if(result.data){
                    window.location.reload()
                }else{
                    alert('Ha ocurrido un error')
                }
                } else {
                console.error('Respuesta con error:', result.status, result.data);
                }
            })
            .catch((error) => {
                console.error('Error en la solicitud:', error);
            });
        }
    })
}
