  // Función para crear y mostrar la pantalla de carga
  function showLoader() {
    if(!document.querySelector('.loader')){
      const loader = document.createElement('div');
      loader.className = 'loader';
      document.body.appendChild(loader);
    }
  }
    
  // Función para ocultar la pantalla de carga y mostrar el contenido principal
  function hideLoader() {
    const loader = document.querySelector('.loader');
    
    if (loader) {
      loader.style.display = 'none';
      loader.remove();
    }
  }

  const fechaActual = new Date().toISOString().split('T')[0];

  // Asignar la fecha actual como el valor mínimo
  document.getElementById('form-calVenida-div').min = fechaActual;
  document.getElementById('form-calIda-div').min = fechaActual;

showLoader();
fetch('./Backend/Booking/consulta_home.php', opciones)
.then( (response)=> {
    if(response.ok){
        return response.json();
    }
})
.then((data)=>{
  for (let e = 0; e < data.length; e++) {
        const newOption = document.createElement('option');
        newOption.value = parseInt(data[e][0]);
        newOption.textContent = data[e][1];
        document.getElementById('form-from-div').appendChild(newOption);

        const newOption2 = document.createElement('option');
        newOption2.value = parseInt(data[e][0]);
        newOption2.textContent = data[e][1];
        document.getElementById('form-to-div').appendChild(newOption2);
    }
     hideLoader();

})
.catch((error)=>{
    console.error('Error: ' + error);
});

// Se desactiva el elemento seleccionado para el destino (para no poder seleccionar el mismo)
document.getElementById('form-from-div').addEventListener('input', ()=>{
  let v1 = document.getElementById('form-from-div').value;
  
  for (var i = 0; i < document.getElementById('form-to-div').options.length; i++) {
    if (document.getElementById('form-to-div').options[i].value === v1) {
      // Elemento encontrado
      var elementoEncontrado = document.getElementById('form-to-div').options[i];
      elementoEncontrado.disabled=true;
    }else{
      var elementoNoEncontrado = document.getElementById('form-to-div').options[i];
      elementoNoEncontrado.disabled=false;
    }
  }
});

// Se desactiva el elemento seleccionado para el origen (para no poder seleccionar el mismo)
document.getElementById('form-to-div').addEventListener('input', ()=>{
  let v1 = document.getElementById('form-to-div').value;

  for (var i = 0; i < document.getElementById('form-from-div').options.length; i++) {
    if (document.getElementById('form-from-div').options[i].value === v1) {
      // Elemento encontrado
      var elementoEncontrado = document.getElementById('form-from-div').options[i];
      elementoEncontrado.disabled=true;
    }else{
      var elementoNoEncontrado = document.getElementById('form-from-div').options[i];
      elementoNoEncontrado.disabled=false;
    }
  }
  


});

// let directInputValue = 0;
// let travInputValue;
// let fromInputValue;
// let toInputValue;
// let calIdaInputValue;
// let calIdaInputValueDateFormat;

function addIdaFocus(){
    document.getElementById('form-idavenida-div').classList.remove('form-input-buttonFocus');
    document.getElementById('form-ida-div').classList.add('form-input-buttonFocus');
}

function removeIdaFocus(){
    document.getElementById('form-idavenida-div').classList.add('form-input-buttonFocus');
    document.getElementById('form-ida-div').classList.remove('form-input-buttonFocus');
}

// switch(directInputValue){
//     case 1:
//         document
//         document.getElementById('form-calVenida-div').disabled=true;
//         addIdaFocus();
//         break;
//     case 0:
//         removeIdaFocus();
//         document.getElementById('form-calVenida-div').disabled=false;
//         document.getElementById('form-cont-div-calVenida').classList.remove("form-cont-div-calVenidaAfter");
//         break;
// }

document.getElementById('form-ida-div').addEventListener('focus', ()=>{
    addIdaFocus();
    document.getElementById('form-calVenida-div').disabled=true;
    document.getElementById('form-cont-div-calVenida').classList.add("form-cont-div-calVenidaAfter");
});

document.getElementById('form-idavenida-div').addEventListener('focus', ()=>{
    removeIdaFocus();
    document.getElementById('form-calVenida-div').disabled=false;
    document.getElementById('form-cont-div-calVenida').classList.remove("form-cont-div-calVenidaAfter");
});

// document.getElementById('form-ida-div').addEventListener('click', ()=>{
//     directInputValue = 1;
// });

// document.getElementById('form-idavenida-div').addEventListener('click', ()=>{
//     directInputValue = 0;
// });


// document.querySelector('.submitBtn').addEventListener('click', ()=>{

//     if(!document.querySelector('.home-form').checkValidity()){
//         return
//     }

//     let  childss = document.querySelector('.booking-lineas-disponibles').childNodes;

//     for (let brm = 0; brm < childss.length; brm++) {
//         document.querySelector('.booking-lineas-disponibles').removeChild(childss[brm]);
//     }

//     travInputValue = document.getElementById('form-trav-div').value;
//     fromInputValue = document.getElementById('form-from-div').value;
//     toInputValue = document.getElementById('form-to-div').value;
//     calIdaInputValue = document.getElementById('form-calIda-div').value;
//     let fechaIdaInput = new Date(calIdaInputValue);



//     switch (bookingColumnNumber) {
//         case 0:
//             if (cantidadPasajeros > 1) {
//                 document.querySelector('.booking-lineas-tipo-pasaje').textContent=travInputValue + (directInputValue === 1 ? " one-way tickets" : " round-trip tickets");
//             }else{
//                 document.querySelector('.booking-lineas-tipo-pasaje').textContent=cantidadPasajeros + (directInputValue === 1 ? " one-way ticket" : " round-trip ticket");
//             }
//             break;
//         case 1:
//             if (cantidadPasajeros > 1) {
//                 document.querySelector('.booking-lineas-tipo-pasaje').textContent=cantidadPasajeros + " pasajes de " + (directInputValue === 1 ? "Ida" : "ida y vuelta");
//             }else{
//                 document.querySelector('.booking-lineas-tipo-pasaje').textContent=cantidadPasajeros + " pasaje de " + (directInputValue === 1 ? "Ida" : "ida y vuelta");
//             }
//             break;
//         case 2:
//             case 1:
//                 if (cantidadPasajeros > 1) {
//                     document.querySelector('.booking-lineas-tipo-pasaje').textContent=cantidadPasajeros + " passagens de" + (directInputValue === 1 ? "ida" : "ida e volta");
//                 }else{
//                     document.querySelector('.booking-lineas-tipo-pasaje').textContent=cantidadPasajeros + " passagen de" + (directInputValue === 1 ? "ida" : "ida e volta");
//                 }
//             break;
//         default:
//             break;
//     }


//     let nombresDias;    

//     switch (bookingColumnNumber) {
//         case 0:
//             nombresDias = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];
//             break;
//         case 1:
//             nombresDias = ['DOM', 'LUN', 'MAR', 'MIE', 'JUE', 'VIE', 'SAB'];
//             break;
//             case 2:
//             nombresDias = ['DOM', 'SEG', 'TER', 'QUA', 'QUI', 'SEX', 'SAB'];
//             break;
//         default:
//             break;
//     }
    

//     const diasParaMostrar = [-2,-1,0,1,2];
//     for (let i = -2; i < diasParaMostrar.length; i++) {
//         const date = new Date()
//         date.setDate(fechaIdaInput.getDate() + diasParaMostrar[i]);
        
//         const dayValue = nombresDias[date.getDay()];
//         const dateValue = date.getDate();
//         const elementId = `booking-fechaIda-item-${i === 2 ? 'today' : i === 0 ? 'dby' : i === 1 ? 'yesterday' : i === 3 ? 'tomorrow' : 'tat'}`;
    
//         document.getElementById(`${elementId}-day`).innerHTML = dayValue;
//         document.getElementById(`${elementId}-date`).innerHTML = dateValue;
//     }

//     document.getElementById('booking-lineas-departamento-origen').textContent=document.getElementById('form-from-div').options[document.getElementById('form-from-div').selectedIndex].text;
//     document.getElementById('booking-lineas-departamento-destino').textContent=document.getElementById('form-to-div').options[document.getElementById('form-to-div').selectedIndex].text;

// searchRoutes();









// // Esta funcion busca lineas disponibles y las muestra
// function searchRoutes(){

//     let formData = new FormData();
//     formData.append('fromValue', fromInputValue);
//     formData.append('toValue', toInputValue);
//     formData.append('calIdaValue', calIdaInputValue);

//     let options = {
//         method: 'POST',
//         body: formData
//     }

//     showLoader();
//     fetch('/Backend/Booking/consulta_lineas.php',  options)
//     .then((response)=>{
//         hideLoader();
//         if(response.ok){
//             return response.json();
//         }
//     })
//     .then((data)=>{

//         let lineasDisponibles = []
    
//         for (let o = 0; o < data.length; o++) {
//             lineasDisponibles = data.map(obj => {
//                 const fechaFormateada = new Date(obj.Fecha);
//                 // Agregar la fecha formateada al objeto
//                 obj.Fecha = fechaFormateada;
//                 return obj;
//               });
//         }
    
//         console.log(lineasDisponibles[0]);
//         document.querySelector('.booking-cantidad-lineas-num').textContent=lineasDisponibles.length;
    
//     // Se crean todas las lineas disponibles (estructura html)
    
//     // El siguiente conjunto de código exhibe un estilo de programación que resulta altamente -
//     // desafiante desde el punto de vista estético y estructural, generando -
//     // una experiencia visual que puede resultar incómoda para quienes lo observan.
    
//     for (let e = 0; e < lineasDisponibles.length; e++) {
    
//     const bookingLineasDisponibles = document.querySelector('.booking-lineas-disponibles');
    
//     const bookingLineasDisponiblesItem = document.createElement("div");
//     bookingLineasDisponiblesItem.classList.add("booking-lineas-disponibles-item");
    
//     const bookingLineasDisponiblesItemTop = document.createElement("div");
//     bookingLineasDisponiblesItemTop.classList.add("booking-lineas-disponibles-item-top");
    
//     const leftContent = document.createElement("div");
//     leftContent.classList.add("booking-lineas-disponibles-item-top-content-left");
    
//     const origen = document.createElement("div");
//     origen.classList.add("booking-lineas-disponibles-item-top-content-left-origen", "booking-departament");
//     const origenTitle = document.createElement("span");
//     origenTitle.classList.add("booking-lineas-disponibles-item-top-content-left-origen-title", "booking-departament-title");
//     origenTitle.textContent = lineasDisponibles[e].OrigenAb;
//     origen.appendChild(origenTitle);
//     origen.appendChild(document.createTextNode(lineasDisponibles[e].Origen));
    
//     const fecha = document.createElement("div");
//     fecha.classList.add("booking-lineas-disponibles-item-top-content-left-fecha");
//     const fechaTitle = document.createElement("span");
//     fechaTitle.classList.add("booking-lineas-disponibles-item-top-content-left-fecha-title");
//     switch (bookingColumnNumber) {
//         case 0:
//             fechaTitle.textContent = 'Date';
//             break;
//             case 1:
//                 fechaTitle.textContent = 'Fecha';
//             break;
//         case 2:
//             fechaTitle.textContent = 'Data';
//             break;
//             default:
//                 break;
//             }
//             fecha.appendChild(fechaTitle);
    
//             let routeMonth =  lineasDisponibles[e].Fecha.getMonth();
//             switch (bookingColumnNumber) {
//                 case 0:
//                     const mesAbreviado0 = routeMonth === 0 ? 'JAN' :
//                     routeMonth === 1 ? 'FEB' :
//                     routeMonth === 2 ? 'MAR' :
//                     routeMonth === 3 ? 'APR' :
//                     routeMonth === 4 ? 'MAY' :
//                     routeMonth === 5 ? 'JUN' :
//                     routeMonth === 6 ? 'JUL' :
//                     routeMonth === 7 ? 'AUG' :
//                     routeMonth === 8 ? 'SEP' :
//                     routeMonth === 9 ? 'OCT' :
//                     routeMonth === 10 ? 'NOV' : 'DEC';
//                     fecha.appendChild(document.createTextNode(mesAbreviado0+" "+lineasDisponibles[e].Fecha.getDate()));
//                     break;
//                 case 1:
//                     const mesAbreviado1 = routeMonth === 0 ? 'ENE' :
//                     routeMonth === 1 ? 'FEB' :
//                     routeMonth === 2 ? 'MAR' :
//                     routeMonth === 3 ? 'ABR' :
//                     routeMonth === 4 ? 'MAY' :
//                     routeMonth === 5 ? 'JUN' :
//                     routeMonth === 6 ? 'JUL' :
//                     routeMonth === 7 ? 'AGO' :
//                     routeMonth === 8 ? 'SEP' :
//                     routeMonth === 9 ? 'OCT' :
//                     routeMonth === 10 ? 'NOV' : 'DIC';
//                     fecha.appendChild(document.createTextNode(mesAbreviado1+" "+lineasDisponibles[e].Fecha.getDate()));
//                     break;
//             case 2:
//                     const mesAbreviado2 = routeMonth === 0 ? 'JAN' :
//                     routeMonth === 1 ? 'FEV' :
//                     routeMonth === 2 ? 'MAR' :
//                     routeMonth === 3 ? 'ABR' :
//                     routeMonth === 4 ? 'MAI' :
//                     routeMonth === 5 ? 'JUN' :
//                     routeMonth === 6 ? 'JUL' :
//                     routeMonth === 7 ? 'AGO' :
//                     routeMonth === 8 ? 'SET' :
//                     routeMonth === 9 ? 'OUT' :
//                     routeMonth === 10 ? 'NOV' : 'DEZ';
//                     fecha.appendChild(document.createTextNode(mesAbreviado2+" "+lineasDisponibles[e].Fecha.getDate()));
//                     break;
//                 default:
//                     break;
//             }
            
//     leftContent.appendChild(origen);
//     leftContent.appendChild(fecha);
    
//     const centerContent = document.createElement("div");
//     centerContent.classList.add("booking-lineas-disponibles-item-top-content-center");
//     // const routeText = document.createElement('p');
//     // routeText.textContent = lineasDisponibles[e].Num_Linea;
//     // routeText.classList.add('booking-route-title');
//     const busIcon = document.createElement("span");
//     busIcon.classList.add("material-symbols-outlined", "booking-bus-icon");
//     busIcon.textContent = "directions_bus";
    
//     const hora = document.createElement("div");
//     hora.classList.add("booking-lineas-disponibles-item-top-content-center-hora");
//     const origenHora = document.createElement("div");
//     origenHora.classList.add("booking-lineas-disponibles-item-top-content-center-hora-origen");
//     origenHora.textContent = lineasDisponibles[e].Hora_Salida;
//     const destinoHora = document.createElement("div");
//     destinoHora.classList.add("booking-lineas-disponibles-item-top-content-center-hora-origen");
//     let tiempoString = lineasDisponibles[e].Hora_Salida;
//     let [horaSalida, minutosSalida] = tiempoString.split(':');
//     const horaSalidaDate = new Date(0)
//     horaSalidaDate.setHours(parseInt(horaSalida)+parseInt(lineasDisponibles[e].Duracion/60))
//     horaSalidaDate.setMinutes(parseInt(minutosSalida)+parseInt(lineasDisponibles[e].Duracion%60))
//     console.log(horaSalidaDate.getHours)
//     destinoHora.innerHTML ="&nbsp•&nbsp"+horaSalidaDate.getHours()+":"+horaSalidaDate.getMinutes();
    
    
//     hora.appendChild(origenHora);
//     hora.appendChild(destinoHora);
    
//     const duracion = document.createElement("div");
//     duracion.classList.add("booking-lineas-disponibles-item-top-content-center-duracion");
//     duracion.textContent = parseInt(lineasDisponibles[e].Duracion/60)+"H "+((lineasDisponibles[e].Duracion%60) != 0 ? (lineasDisponibles[e].Duracion%60) + "M" : '00M');
    
//     // centerContent.appendChild(routeText);
//     centerContent.appendChild(busIcon);
//     centerContent.appendChild(hora);
//     centerContent.appendChild(duracion);
    
//     const rightContent = document.createElement("div");
//     rightContent.classList.add("booking-lineas-disponibles-item-top-content-right");
    
//     const destino = document.createElement("div");
//     destino.classList.add("booking-lineas-disponibles-item-top-content-right-destino", "booking-departament");
//     const destinoTitle = document.createElement("span");
//     destinoTitle.classList.add("booking-lineas-disponibles-item-top-content-right-destino-title", "booking-departament-title");
//     destinoTitle.textContent = lineasDisponibles[e].DestinoAb;
//     destino.appendChild(destinoTitle);
//     destino.appendChild(document.createTextNode(lineasDisponibles[e].Destino));
    
//     const fechaDestino = document.createElement("div");
//     fechaDestino.classList.add("booking-lineas-disponibles-item-top-content-right-fecha");
//     const fechaDestinoTitle = document.createElement("span");
//     fechaDestinoTitle.classList.add("booking-lineas-disponibles-item-top-content-right-fecha-title");
//     switch (bookingColumnNumber) {
//         case 0:
//             fechaDestinoTitle.textContent = 'Car N°';
//             break;
//             case 1:
//                 fechaDestinoTitle.textContent = 'Coche N°';
//                 break;
//         case 2:
//             fechaDestinoTitle.textContent = 'Carro N°';
//             break;
//         default:
//             break;
//         }
//         fechaDestino.appendChild(fechaDestinoTitle);
//         fechaDestino.appendChild(document.createTextNode(lineasDisponibles[e].Num_Unidad));
        
//         rightContent.appendChild(destino);
//         rightContent.appendChild(fechaDestino);
        
//         bookingLineasDisponiblesItemTop.appendChild(leftContent);
//         bookingLineasDisponiblesItemTop.appendChild(centerContent);
//         bookingLineasDisponiblesItemTop.appendChild(rightContent);
        
//         const bookingLineasDisponiblesItemBot = document.createElement("div");
//         bookingLineasDisponiblesItemBot.classList.add("booking-lineas-disponibles-item-bot");
        
//         const botLeft = document.createElement("div");
//         botLeft.classList.add("booking-lineas-disponibles-item-bot-left");
//         for (let i = 0; i < lineasDisponibles[e].Caracteristica.length; i++) {
//             const itemCaracteristica = document.createElement("span");
//             itemCaracteristica.classList.add("booking-lineas-disponibles-item-bot-left-item", "material-symbols-outlined");
//             switch (lineasDisponibles[e].Caracteristica[i]) {
//                 case 'Aire acondicionado':
//                     itemCaracteristica.textContent="ac_unit";
//                     break;
//                 case 'Baño':
//                     itemCaracteristica.textContent="soap";
//                     break;
//                 case 'Wifi':
//                     itemCaracteristica.textContent="wifi";
//                     break;
//                 default:
//                     break;
//             }
//         botLeft.appendChild(itemCaracteristica);
//     }
    
//     const botRight = document.createElement("div");
//     botRight.classList.add("booking-lineas-disponibles-item-bot-right");
    
//     bookingLineasDisponiblesItemBot.appendChild(botLeft);
//     bookingLineasDisponiblesItemBot.appendChild(botRight);
    
//     bookingLineasDisponiblesItem.appendChild(bookingLineasDisponiblesItemTop);
//     bookingLineasDisponiblesItem.appendChild(bookingLineasDisponiblesItemBot);
    
//     // Agregar el elemento bookingLineasDisponiblesItem al DOM (por ejemplo, al body)
//     bookingLineasDisponibles.appendChild(bookingLineasDisponiblesItem);
    
//     }

//     // Aparece la visual del procedimiento de reserva 
//     document.querySelector('.booking-container').style.display='flex';
//     setTimeout(() => {
//         document.querySelector('.booking-container').style.height='100%';
//     }, 100);
        
//     })
//     .catch((err)=>{
//         console.error(err);
//     });


// }

//});