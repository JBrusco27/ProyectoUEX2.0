const fechaActualViajes = new Date();
const diaAnteriorFechaActualViajes = fechaActualViajes.getDate() - 1
const mesFechaActualViajes = fechaActualViajes.getMonth() + 1
const añoFechaActualViajes = fechaActualViajes.getFullYear()

const fechaActualViajesConv = new Date(añoFechaActualViajes + '-' + mesFechaActualViajes + '-' + diaAnteriorFechaActualViajes).toISOString().split('T')[0]

document.getElementById('diasalida-viaje-input').min = fechaActualViajesConv;

function poblarSelectLineas(lineasArr) {
    for (let r = 0; r < lineasArr.length; r++) {
        let option1 = document.createElement('option')
        option1.value=lineasArr[r].idLinea
        option1.textContent=lineasArr[r].nomLinea + " | " + lineasArr[r].origenLinea + ' - ' + lineasArr[r].destinoLinea
         
        document.getElementById('linea-viaje-input').appendChild(option1)
    }
}

function poblarSelectUnidades(lineasArr) {
    for (let r = 0; r < lineasArr.length; r++) {
        let option1 = document.createElement('option')
        option1.value=lineasArr[r].matriculaUnidad
        option1.textContent=lineasArr[r].matriculaUnidad
         
        document.getElementById('unidad-viaje-input').appendChild(option1)
    }
}

document.getElementById('admin-submit-crear-viaje').addEventListener('click', ()=>{
    if(document.getElementById('crear-viaje-form').checkValidity()){
        let lineaInput = document.getElementById('linea-viaje-input').value
        let unidadInput = document.getElementById('unidad-viaje-input').value
        let sentidoInput = document.getElementById('sentido-viaje-input').value
        let diasalidaInput = document.getElementById('diasalida-viaje-input').value
        let horasalidaInput = document.getElementById('horasalida-viaje-input').value + ":00"
    
        console.log("---------- CREAR VIAJE ---------")
        console.log(lineaInput)
        console.log(unidadInput)
        console.log(sentidoInput)
        console.log(diasalidaInput)
        console.log(horasalidaInput)
        console.log("---------- CREAR VIAJE ---------")
        
        let formData = new FormData()
    
        formData.append('lineaViaje', lineaInput)
        formData.append('unidadViaje', unidadInput)
        formData.append('sentidoViaje', sentidoInput)
        formData.append('fechaViaje', diasalidaInput)
        formData.append('horaViaje', horasalidaInput)

        let option = {
          body: formData,
          method:'post'
        }
    
        fetch(raiz+'/Backend/Admin/consulta_crear_viaje.php', option).
        then((response) => {
          return response.json().then(data => ({
            data: data,
            status: response.status
          }));
        })
        .then((result) => {
          if (result.status === 200) {
            if(result.data){
              alert('El viaje se ha creado correctamente')
            }else{
              alert('Ha ocurrido un error')
            }
          } else {
            console.error('Respuesta con error:', result.status, result.data);
          }
        })
        .catch((error) => {
          console.error('Error en la solicitud:', error);
        })
        
      }
})

// se podrian implementar filtros a futuro
function buscarViajes(viajesArr, lineasArr, unidadesArr){

  Array.from(document.querySelector('.gestion-viajes-container').childNodes).forEach(element => {
    element.remove()
  });

  
  for (let e = 0; e < viajesArr.length; e++) {
      console.log(viajesArr[e].idHorario)

    // Crear el div principal con clase "datos-generales-action-viaje"
    const div1 = document.createElement("div");
    div1.className = "datos-generales-action-viaje";
    div1.id = `datos-generales-action-viaje-${viajesArr[e].idHorario}`;
    div1.setAttribute("idViaje", `${viajesArr[e].idHorario}`);

    // Crear el primer span con el contenido deseado
    const span1 = document.createElement("span");
    span1.textContent = `Viaje ${viajesArr[e].idHorario} | ${viajesArr[e].fechaSalida} ${viajesArr[e].horaSalida}`;

    // Crear el segundo span con el contenido ">"
    const span2 = document.createElement("span");
    span2.textContent = ">";

    // Agregar los spans al div principal
    div1.appendChild(span1);
    div1.appendChild(span2);

    // Crear el segundo div con clase "gestion-viajes-viaje"
    const div2 = document.createElement("div");
    div2.className = "gestion-viajes-viaje";
    div2.id = `gestion-viajes-viaje-${viajesArr[e].idHorario}`;

    const div21 = document.createElement("div");
    div21.className = "gestion-viajes-viaje-input-cont";

    // Crear los elementos dentro del segundo div
    const label1 = document.createElement("label");
    label1.setAttribute("for", `viajes-viaje-linea-input-${viajesArr[e].idHorario}`);
    label1.className = "form-label-noaction";
    label1.textContent = "Linea";

    const select1 = document.createElement("select");
    select1.id = `viajes-viaje-linea-input-${viajesArr[e].idHorario}`;
    select1.className = "select-gestionar-viaje";
    select1.setAttribute("required", "true");

    const div22 = document.createElement("div");
    div22.className = "gestion-viajes-viaje-input-cont";

    const label2 = document.createElement("label");
    label2.setAttribute("for", `viajes-viaje-unidad-input-${viajesArr[e].idHorario}`);
    label2.className = "form-label-noaction";
    label2.textContent = "Unidad";

    const select2 = document.createElement("select");
    select2.id = `viajes-viaje-unidad-input-${viajesArr[e].idHorario}`;
    select2.className = "select-gestionar-viaje";
    select2.setAttribute("required", "true");
    
    for (let r = 0; r < lineasArr.length; r++) {
        let option1 = document.createElement('option')
        option1.value=lineasArr[r].idLinea
        option1.textContent=lineasArr[r].nomLinea + " | " + lineasArr[r].origenLinea + ' - ' + lineasArr[r].destinoLinea

        if(viajesArr[e].idLinea == lineasArr[r].idLinea){
            option1.selected = true
        }
         
        select1.appendChild(option1)
    }

    for (let r = 0; r < unidadesArr.length; r++) {
        let option2 = document.createElement('option')
        option2.value=unidadesArr[r].matriculaUnidad
        option2.textContent=unidadesArr[r].matriculaUnidad

        if(viajesArr[e].matricula == unidadesArr[r].matriculaUnidad){
            option2.selected = true
        }
        
        select2.appendChild(option2)
    }


    const div23 = document.createElement("div");
    div23.className = "gestion-viajes-viaje-input-cont";

    const label3 = document.createElement("label");
    label3.setAttribute("for", `viajes-viaje-sentido-input-${viajesArr[e].idHorario}`);
    label3.className = "form-label-noaction";
    label3.textContent = "Sentido";

    const select3 = document.createElement("select");
    select3.id = `viajes-viaje-sentido-input-${viajesArr[e].idHorario}`;
    select3.className = "select-gestionar-viaje";
    select3.setAttribute("required", "true");

    const option1 = document.createElement("option");
    option1.value = "Ida";
    option1.textContent = "Ida";

    const option2 = document.createElement("option");
    option2.value = "Vuelta";
    option2.textContent = "Vuelta";

    if(viajesArr[e].sentido == 'Ida'){
        option1.selected = true
    }else if(viajesArr[e].sentido == 'Vuelta'){
        option2.selected = true
    }

    const div3 = document.createElement("div");
    div3.className = "gestion-viajes-viaje-input-fecha-hora-container";

    const div4 = document.createElement("div");
    div4.className = "gestion-viajes-viaje-input-cont-fecha";

    const label4 = document.createElement("label");
    label4.setAttribute("for", `viajes-viaje-fecha-input-${viajesArr[e].idHorario}`);
    label4.className = "form-label-noaction";
    label4.textContent = "Fecha salida";

    const input1 = document.createElement("input");
    input1.type = "date";
    input1.id = `viajes-viaje-fecha-input-${viajesArr[e].idHorario}`;
    input1.className = "fecha-gestionar-viaje";
    input1.setAttribute("required", "true");
    input1.value = viajesArr[e].fechaSalida

    const div5 = document.createElement("div");
    div5.className = "gestion-viajes-viaje-input-cont-fecha";

    const label5 = document.createElement("label");
    label5.setAttribute("for", `viajes-viaje-hora-input-${viajesArr[e].idHorario}`);
    label5.className = "form-label-noaction";
    label5.textContent = "Hora salida";

    const input2 = document.createElement("input");
    input2.type = "time";
    input2.id = `viajes-viaje-hora-input-${viajesArr[e].idHorario}`;
    input2.className = "fecha-gestionar-viaje";
    input2.setAttribute("required", "true");
    input2.value = viajesArr[e].horaSalida


    const div6 = document.createElement("div");
    div6.className = "gestion-viajes-viaje-save-delete-cont";

    const p1 = document.createElement("p");
    p1.id = `admin-gestion-viajes-viaje-eliminar-${viajesArr[e].idHorario}`;
    p1.setAttribute("idviaje", `${viajesArr[e].idHorario}`);
    p1.className = "admin-submitBtn-delete admin-submitBtn-eliminar-viaje";
    p1.textContent = "Eliminar";

    // const p2 = document.createElement("p");
    // p2.id = `dmin-gestion-viajes-viaje-save`;
    // p2.setAttribute("idviaje", `${viajesArr[e].idHorario}`);
    // p2.className = "admin-submitBtn admin-submitBtn-guardar-viaje";
    // p2.textContent = "Guardar";

    // Agregar los elementos creados dentro del segundo div
    div21.appendChild(label1);
    div21.appendChild(select1);
    div22.appendChild(label2);
    div22.appendChild(select2);
    div23.appendChild(label3);
    div23.appendChild(select3);
    div2.appendChild(div21);
    div2.appendChild(div22);
    div2.appendChild(div23);
    select3.appendChild(option1);
    select3.appendChild(option2);
    div2.appendChild(div3);
    div3.appendChild(div4);
    div4.appendChild(label4);
    div4.appendChild(input1);
    div3.appendChild(div5);
    div5.appendChild(label5);
    div5.appendChild(input2);
    div2.appendChild(div6);
    div6.appendChild(p1);
    // div6.appendChild(p2);

    // Agregar los divs al cuerpo del documento
    document.querySelector('.gestion-viajes-container').appendChild(div1);
    document.querySelector('.gestion-viajes-container').appendChild(div2);

    
  }

}

function eliminarViaje(){
  Array.from(document.querySelectorAll('.admin-submitBtn-eliminar-viaje')).forEach(element => {
    element.addEventListener('click', ()=>{

      let formData = new FormData()
      
      formData.append('idViaje', element.getAttribute('idviaje'))

      let option = {
          body: formData,
          method:'post'
        }
    
        fetch(raiz+'/Backend/Admin/consulta_eliminar_viaje.php', option).
        then((response) => {
          return response.json().then(data => ({
            data: data,
            status: response.status
          }));
        })
        .then((result) => {
          if (result.status === 200) {
            if(result.data){
              alert('El viaje se ha eliminado correctamente')
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
        })


    });
  });
}


function datosLineas(){

  let lineasViaje = []
  let unidadesViaje = []
  let viajesArr = []

  let option3 = {
    method:'post'
  }
  
  fetch(raiz+'Backend/Admin/consulta_viajes.php', option3).
  then((response) => {
    return response.json().then(data => ({
      data: data,
      status: response.status
    }));
  })
  .then((result) => {
    if (result.status === 200) {
      viajesArr = result.data
    } else {
      console.error('Respuesta con error:', result.status, result.data);
    }
  })
  .catch((error) => {
    console.error('Error en la solicitud:', error);
  })
  
  
  let option = {
    method: 'post'
  };

  fetch(raiz+'/Backend/Admin/consulta_todas_lineas.php', option)
    .then((response) => {
      return response.json().then(data => ({
        data: data,
        status: response.status
      }));
    })
    .then((result) => {
      if (result.status === 200) {
        lineasViaje = result.data
        poblarSelectLineas(lineasViaje)
        let option2 = {
          method: 'post'
        };
      
        fetch(raiz+'/Backend/Admin/consulta_todas_unidades.php', option2)
          .then((response) => {
            return response.json().then(data => ({
              data: data,
              status: response.status
            }));
          })
          .then((result) => {
            if (result.status === 200) {
              unidadesViaje = result.data
              poblarSelectUnidades(unidadesViaje)
              //buscarViajes(viajesArr, lineasViaje, unidadesViaje)
              eliminarViaje()
              Array.from(document.querySelectorAll('.datos-generales-action-viaje')).forEach(element => {
                element.addEventListener('click', () => {
                  if(window.getComputedStyle(document.getElementById(`gestion-viajes-viaje-${element.getAttribute('idviaje')}`)).getPropertyValue("display") == "none"){
                    document.getElementById(`gestion-viajes-viaje-${element.getAttribute('idviaje')}`).style.display="flex"
                  }else{
                    document.getElementById(`gestion-viajes-viaje-${element.getAttribute('idviaje')}`).style.display="none"
                  }
                })
              });
            } else {
              console.error('Respuesta con error:', result.status, result.data);
            }
          })
          .catch((error) => {
            console.error('Error en la solicitud:', error);
          });



      } else {
        console.error('Respuesta con error:', result.status, result.data);
      }
    })
    .catch((error) => {
      console.error('Error en la solicitud:', error);
    });
}





// let viajesArr = [
//   {
//     matricula: 'SAD XD',
//     horaSalida: '12:00:00',
//     fechaSalida: '2024-01-01',
//     idLinea:1,
//     idHorario:6,
//     sentido:'Ida'
//   }
// ]

// let lineasViaje = [
//   {
//     nomLinea: 'V105',
//     origenLinea: 'origen linea',
//     destinoLinea: 'destino linea',
//     idLinea:5
//   },
//   {
//     nomLinea: 'V101',
//     origenLinea: 'origen linea',
//     destinoLinea: 'destino linea',
//     idLinea:1
//   }
// ]
// let unidadesViaje = [
//   {
//     matriculaUnidad:'SAD 2006'
//   },
//   {
//     matriculaUnidad:'SAD XD'
//   }
// ]

datosLineas()



// Mostrar viajes

  