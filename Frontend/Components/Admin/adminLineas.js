

// Crear un nuevo tramo

// Crear el div principal con la clase "form-tramo" y el id "tramo1"

function eliminarTramo(){

  const tramoRemoveElements = Array.from(document.querySelectorAll('.form-tramo-remove'));

  const formTramosDiv = document.querySelector('.form-tramos-div');

  tramoRemoveElements.forEach(element => {
    element.addEventListener('click', (event) => {
      const cantTramosPorLinea = formTramosDiv.children.length;
      const posicionPadre = parseInt(element.parentNode.id[(parseInt(element.parentNode.id.indexOf('tramo')) + 5 )]);
      
      for (let i = posicionPadre; i < cantTramosPorLinea; i++) {
        document.getElementById(`tramo${i}`).remove()
      }
      event.stopImmediatePropagation()
    });
  });

}

function hoverRemoves(){
  const tramoRemoveElements = Array.from(document.querySelectorAll('.form-tramo-remove'));
  const formTramosDiv = document.querySelector('.form-tramos-div');

  tramoRemoveElements.forEach(element => {
    element.addEventListener('mouseover', (event) => {
      const cantTramosPorLinea = formTramosDiv.children.length;
      const posicionPadre = parseInt(element.parentNode.id[(parseInt(element.parentNode.id.indexOf('tramo')) + 5 )]);
      
      for (let i = posicionPadre; i < cantTramosPorLinea; i++) {
        document.getElementById(`remove-tramo${i}`).classList.add('hover-remove-tramo')
        document.getElementById(`tramo${i}`).style.background='var(--color-desaprobado)'
      }
      
      event.stopImmediatePropagation()
    });

    element.addEventListener('mouseout', (event) => {
      const cantTramosPorLinea = formTramosDiv.children.length;
      const posicionPadre = parseInt(element.parentNode.id[(parseInt(element.parentNode.id.indexOf('tramo')) + 5 )]);
      
      for (let i = posicionPadre; i < cantTramosPorLinea; i++) {
        document.getElementById(`remove-tramo${i}`).classList.remove('hover-remove-tramo')
        document.getElementById(`tramo${i}`).style.background=''

      }
      event.stopImmediatePropagation()
    });
  });
}

document.getElementById('btn-nuevo-tramo').addEventListener('click', ()=>{
  let cantTramosPorLinea = document.querySelector('.form-tramos-div').children.length;

  const divTramo = document.createElement("div");
  divTramo.className = "form-tramo form-nuevo-tramo";
  divTramo.id = `tramo${cantTramosPorLinea}`;
  
  // Crear la etiqueta "label" para "Parada 1"
  const labelTramo = document.createElement("label");
  labelTramo.htmlFor = `tramo${cantTramosPorLinea}`;
  labelTramo.className = "form-tramo-label";
  labelTramo.textContent = `Tramo ${cantTramosPorLinea}`;

  const labelParada1 = document.createElement("label");
  labelParada1.htmlFor = `parada-linea${(cantTramosPorLinea * 2) - 1}`;
  labelParada1.className = "form-parada-label";
  labelParada1.textContent = `Parada ${(cantTramosPorLinea * 2) - 1}`;

  const removeParada1 = document.createElement("button");
  removeParada1.id = `remove-tramo${cantTramosPorLinea}`;
  removeParada1.className = "form-tramo-remove";
  removeParada1.textContent = `X`;
  removeParada1.type = `button`;

  const labelParada2 = document.createElement("label");
  labelParada2.htmlFor = `parada-linea${(cantTramosPorLinea * 2)}`;
  labelParada2.className = "form-parada-label";
  labelParada2.textContent = `Parada ${(cantTramosPorLinea * 2)}`;
  
  // Crear el input para "Parada 1"
  const inputLinea = document.createElement("select");
  inputLinea.style.textTransform = "initial !important";
  inputLinea.id = `parada-linea1-tramo${cantTramosPorLinea}`;
  inputLinea.className = "form-parada-input";
  inputLinea.name = `paradaLinea1-tramo${cantTramosPorLinea}`;
  inputLinea.required = true;

  const selectParada2 = document.createElement("select");
  selectParada2.style.textTransform = "initial !important";
  selectParada2.id = `parada-linea2-tramo${cantTramosPorLinea}`;
  selectParada2.className = "form-parada-input";
  selectParada2.name = `paradaLinea2-tramo${cantTramosPorLinea}`;
  selectParada2.required = true;

  // Crear el contenedor principal
  const crearLineaTramoDataCont = document.createElement("div");
  crearLineaTramoDataCont.classList.add("crear-linea-tramo-data-cont");

  // Crear el elemento select
  const crearLineaTramoDataTipo = document.createElement("select");
  crearLineaTramoDataTipo.classList.add("crear-linea-tramo-data");
  crearLineaTramoDataTipo.id = `crear-linea-tramo${cantTramosPorLinea}-data-tipo`;
  crearLineaTramoDataTipo.setAttribute("required", true);

  // Crear las opciones para el select
  const opciones = [
    { value: "1", text: "Calle" },
    { value: "2", text: "Ruta" },
    { value: "3", text: "Ciudad" }
  ];

  opciones.forEach((opcion) => {
    const option = document.createElement("option");
    option.value = opcion.value;
    option.textContent = opcion.text;
    crearLineaTramoDataTipo.appendChild(option);
  });

  // Crear los elementos input
  const inputs = [
    { type: "number", id: `crear-linea-tramo${cantTramosPorLinea}-data-tiempo`, placeholder: "Tiempo (min.)" },
    { type: "number", id: `crear-linea-tramo${cantTramosPorLinea}-data-distancia`, placeholder: "Distancia (Km)" },
    { type: "text", id: `crear-linea-tramo${cantTramosPorLinea}-data-comentario`, placeholder: "Comentario" }
  ];

  inputs.forEach((inputConfig) => {
    const input = document.createElement("input");
    input.type = inputConfig.type;
    input.classList.add("crear-linea-tramo-data");
    input.id = inputConfig.id;
    input.setAttribute("required", true);
    input.placeholder = inputConfig.placeholder;
    crearLineaTramoDataCont.appendChild(input);
  });

  // Agregar el select y los inputs al contenedor principal
  crearLineaTramoDataCont.appendChild(crearLineaTramoDataTipo);

showLoader();
fetch(raiz+'/Backend/Booking/consulta_home.php', opciones)
.then( (response)=> {
    if(response.ok){
        return response.json();
    }
})
.then((data)=>{
  if(cantTramosPorLinea == 1){
    for (let e = 0; e < data.length; e++) {
      const newOption = document.createElement('option');
      newOption.value = data[e][1];
      newOption.textContent = data[e][1];
      selectParada2.appendChild(newOption);

      const newOption2 = document.createElement('option');
      newOption2.value = data[e][1];
      newOption2.textContent = data[e][1];
      inputLinea.appendChild(newOption2);
    }
  }else{

    for (let e = 0; e < data.length; e++) {

      const newOption = document.createElement('option');
      newOption.value = data[e][1];
      newOption.textContent = data[e][1];
      selectParada2.appendChild(newOption);
      
    }
    
    const newOption2 = document.createElement('option');
    newOption2.value = document.getElementById(`parada-linea2-tramo${cantTramosPorLinea - 1}`).selectedOptions[0].value;
    newOption2.textContent = document.getElementById(`parada-linea2-tramo${cantTramosPorLinea - 1}`).selectedOptions[0].textContent;
    newOption2.selected=true
    inputLinea.appendChild(newOption2);
    
    inputLinea.disabled=true

}

     hideLoader();

})
.catch((error)=>{
    console.error('Error: ' + error);
});


  divTramo.appendChild(removeParada1);
  divTramo.appendChild(labelTramo);
  divTramo.appendChild(labelParada1);
  divTramo.appendChild(inputLinea);
  divTramo.appendChild(labelParada2);
  divTramo.appendChild(selectParada2);
  divTramo.appendChild(crearLineaTramoDataCont);


  const btnNuevoTramo = document.getElementById('btn-nuevo-tramo');

  // Inserta el nuevo tramo después del botón "+"
  btnNuevoTramo.parentNode.insertBefore(divTramo, btnNuevoTramo);

  cambiarParada()
  eliminarTramo()
  hoverRemoves()

})

function cambiarParada(){
  Array.from(document.querySelectorAll('.form-parada-input')).forEach(element => {
    element.addEventListener('input', (event) => {

      cantTramosPorLinea = document.querySelector('.form-tramos-div').children.length;
      let nextParentId = parseInt(event.target.id.match(/\d+$/)[0]) + 1
      
      if( event.target.id.includes('linea2') && document.getElementById(`tramo${nextParentId}`)){
        document.getElementById( `parada-linea1-tramo${nextParentId}`).childNodes[0].remove()
        const newOption2 = document.createElement('option');
        console.log(nextParentId)
        newOption2.value = document.getElementById(`parada-linea2-tramo${nextParentId - 1}`).value;
        newOption2.textContent = document.getElementById(`parada-linea2-tramo${nextParentId - 1}`).selectedOptions[0].textContent;
        newOption2.selected=true
        document.getElementById(`parada-linea1-tramo${nextParentId}`).appendChild(newOption2);
      

      }
    });
  });
}

function cambiarParadaEditarLinea(){
  Array.from(document.querySelectorAll('.editar-linea-form-parada-input')).forEach(element => {
    element.addEventListener('input', (event) => {
      cantTramosPorLinea = document.querySelector('.editar-linea-trayecto-xd').children.length;
      let nextParentId = parseInt(event.target.id[(parseInt(event.target.id.indexOf('tramo')) + 5 )]) + 1

      if( event.target.id.includes('linea2') && document.getElementById(`admin-linea-tramo${nextParentId}-${element.getAttribute('nomlinea')}`)){

        let inputAnterior = document.getElementById( `editar-linea-parada-linea2-tramo${nextParentId - 1}-${element.getAttribute('nomlinea')}`)
        let inputSiguiente = document.getElementById( `editar-linea-parada-linea1-tramo${nextParentId}-${element.getAttribute('nomlinea')}`)
        Array.from(inputSiguiente.childNodes).forEach(e => {
          if(e.value == inputAnterior.value){
            e.selected = true
          }
        });
        // document.getElementById( `editar-linea-parada-linea1-tramo${nextParentId}-${}`).childNodes[0].remove()

      

      }
    });
  });
}

let crearTramosButtonCantidadLlamadas = 0
function buscarLineas(lineasArr) {    

  // Se crea la seccion de datos generales y de trayecto

  for (let i = 0; i < lineasArr.length; i++) {

    const divLinea = document.createElement("div");
    divLinea.className = "ediar-linea-admin-form-linea";
    divLinea.id = `${lineasArr[i].nomLinea}`;

      const abrirLinea = document.createElement("div")
      abrirLinea.className = "editar-linea-admin-form-open"
      abrirLinea.id = `${lineasArr[i].nomLinea}`
      
        const abrirLineaIcon = document.createElement("div")
        abrirLineaIcon.textContent = ">"
        abrirLineaIcon.id = `abrir-linea-icon-${lineasArr[i].nomLinea}`
        abrirLineaIcon.className = "abrir-linea-icon"
        
        const abrirLineaNombreLinea = document.createElement("div")
        abrirLineaNombreLinea.textContent = `${lineasArr[i].nomLinea}`

        abrirLinea.appendChild(abrirLineaNombreLinea)
        abrirLinea.appendChild(abrirLineaIcon)

      const abrirLineaContent = document.createElement("div")
      abrirLineaContent.id = `editar-linea-admin-form-abrir-linea-content-${lineasArr[i].nomLinea}`
      abrirLineaContent.className = "editar-linea-admin-form-abrir-linea-content"

      // Datos generales

        const abrirLineaDatos = document.createElement("div")
        abrirLineaDatos.className = "editar-linea-admin-form-abrir-linea-content-child editar-linea-admin-form-abrir-linea-content-child-datos"
        abrirLineaDatos.id = lineasArr[i].nomLinea

          const abrirLineaIconDatos = document.createElement("div")
          abrirLineaIconDatos.textContent = ">"
          abrirLineaIconDatos.id = `abrir-linea-icon-datos-${lineasArr[i].nomLinea}`

          abrirLineaIconDatos.className = "abrir-linea-icon"
          
          const abrirLineaNombreLineaDatos = document.createElement("div")
          abrirLineaNombreLineaDatos.textContent = `Datos Generales`

          abrirLineaDatos.appendChild(abrirLineaNombreLineaDatos)
          abrirLineaDatos.appendChild(abrirLineaIconDatos)

    const datosGeneralesContent = document.createElement('div')
    datosGeneralesContent.className = "datos-generales-content";
    datosGeneralesContent.id = `datos-generales-content-${lineasArr[i].nomLinea}`;

    const labelNombre = document.createElement("label");
    labelNombre.htmlFor = `input-linea-nombre-${lineasArr[i].nomLinea}`;
    labelNombre.className = "form-linea-label";
    labelNombre.textContent = `Nombre`;

    const inputLinea = document.createElement("input");
    inputLinea.style.textTransform = "initial !important";
    inputLinea.id = `input-linea-nombre-${lineasArr[i].nomLinea}`;
    inputLinea.className = "editar-linea-admin-form-input";
    inputLinea.value = `${lineasArr[i].nomLinea}`;

    const labelOrigen = document.createElement("label");
    labelOrigen.htmlFor = `input-linea-origen-${lineasArr[i].nomLinea}`;
    labelOrigen.className = "form-linea-label";
    labelOrigen.textContent = `Origen`;

    const inputOrigen = document.createElement("input");
    inputOrigen.style.textTransform = "initial !important";
    inputOrigen.id = `input-linea-origen-${lineasArr[i].nomLinea}`;
    inputOrigen.className = "editar-linea-admin-form-input";
    inputOrigen.value = lineasArr[i].origenLinea;

    const labelDestino = document.createElement("label");
    labelDestino.htmlFor = `input-linea-destino-${lineasArr[i].nomLinea}`;
    labelDestino.className = "form-linea-label";
    labelDestino.textContent = `Destino`;

    const inputDestino = document.createElement("input");
    inputDestino.style.textTransform = "initial !important";
    inputDestino.id = `input-linea-destino-${lineasArr[i].nomLinea}`;
    inputDestino.className = "editar-linea-admin-form-input";
    inputDestino.value = lineasArr[i].destinoLinea;

    datosGeneralesContent.appendChild(labelNombre)
    datosGeneralesContent.appendChild(inputLinea)
    datosGeneralesContent.appendChild(labelOrigen)
    datosGeneralesContent.appendChild(inputOrigen)
    datosGeneralesContent.appendChild(labelDestino)
    datosGeneralesContent.appendChild(inputDestino)

    const saveBtn = document.createElement('button')
    saveBtn.className = `editar-linea-admin-save-btn`
    saveBtn.setAttribute('idLinea', lineasArr[i].idLinea)
    saveBtn.id = `${lineasArr[i].nomLinea}`
    saveBtn.textContent = `Guardar`
    saveBtn.type = "button"

    // const deleteBtn = document.createElement('button')
    // deleteBtn.className = `editar-linea-admin-delete-btn`
    // deleteBtn.setAttribute('idLinea', lineasArr[i].idLinea)
    // deleteBtn.id = `${lineasArr[i].nomLinea}`
    // deleteBtn.textContent = `Eliminar`
    // deleteBtn.type = "button"

    // Trayecto

    const abrirLineaTrayecto = document.createElement("div")
    abrirLineaTrayecto.className = "editar-linea-admin-form-abrir-linea-content-child editar-linea-admin-form-abrir-linea-content-child-trayecto"
    abrirLineaTrayecto.id = lineasArr[i].nomLinea

    const abrirLineaIconTrayecto = document.createElement("div")
    abrirLineaIconTrayecto.textContent = ">"
    abrirLineaIconTrayecto.id = `abrir-linea-icon-trayecto-${lineasArr[i].nomLinea}`
    abrirLineaIconTrayecto.className = "abrir-linea-icon"
    
    const abrirLineaNombreLineaTrayecto = document.createElement("div")
    abrirLineaNombreLineaTrayecto.textContent = `Trayecto`

    abrirLineaTrayecto.appendChild(abrirLineaNombreLineaTrayecto)
    abrirLineaTrayecto.appendChild(abrirLineaIconTrayecto)


    ///////////////////


    let cantTramosPorLineaTrayecto = lineasArr[i].trayectoLinea.length;
    
    const divTramo = document.createElement("div");
    divTramo.id = `editar-linea-tramo-${lineasArr[i].nomLinea}`;
    divTramo.className = "editar-linea-trayecto-xd";

    let editarLineaNuevoTramoBtn = document.createElement("button");
    editarLineaNuevoTramoBtn.type = 'button'
    editarLineaNuevoTramoBtn.classList.add("btn-nuevo-tramo","editar-linea-nuevo-tramo");
    editarLineaNuevoTramoBtn.id = `editar-linea-sbtn-nuevo-tramo-${lineasArr[i].nomLinea}`
    editarLineaNuevoTramoBtn.textContent = "+";
    editarLineaNuevoTramoBtn.setAttribute('nomLinea', lineasArr[i].nomLinea);

    for (let e= 0; e < cantTramosPorLineaTrayecto; e++) {
      
      let cantTramosPorLineaTrayecto2 =  Array.from(document.querySelectorAll(`#editar-linea-admin-form-abrir-linea-content-${lineasArr[i].nomLinea} .editar-linea-form-tramo`)).length;

      const editarLineaTrayectoContent = document.createElement('div')
      editarLineaTrayectoContent.className = "editar-linea-form-tramo";
      editarLineaTrayectoContent.id = `admin-linea-tramo${e + 1}-${lineasArr[i].nomLinea}`;


      // Crear la etiqueta "label" para "Parada 1"
      const labelTramo = document.createElement("label");
      labelTramo.htmlFor = `editar-linea-tramo${e + 1}`;
      labelTramo.className = "form-tramo-label";
      labelTramo.textContent = `Tramo ${(e + 1)}`;
      
      const labelParada1 = document.createElement("label");
      labelParada1.htmlFor = `editar-linea-parada-linea${((e + 1) * 2) - 1}`;
      labelParada1.className = "form-parada-label";
      labelParada1.textContent = `Parada ${((e + 1) * 2) - 1}`;
      
      const removeParada1 = document.createElement("button");
      removeParada1.id = `editar-linea-remove-tramo${(e + 1)}`;

      removeParada1.className = "form-tramo-remove";
      removeParada1.setAttribute('nomLinea', lineasArr[i].nomLinea);
      removeParada1.textContent = `X`;
      removeParada1.type = `button`;
      removeParada1.id = `admin-linea-remove-tramo${e + 1}-${lineasArr[i].nomLinea}`;
      
      const labelParada2 = document.createElement("label");
      labelParada2.htmlFor = `editar-linea-parada-linea${((e + 1) * 2)}`;
      labelParada2.className = "form-parada-label";
      labelParada2.textContent = `Parada ${((e + 1) * 2)}`;
      
    // Crear el input para "Parada 1"
    const inputLinea = document.createElement("select");
    inputLinea.style.textTransform = "initial !important";
    inputLinea.id = `editar-linea-parada-linea1-tramo${(e + 1)}-${lineasArr[i].nomLinea}`;
    inputLinea.className = "form-parada-input editar-linea-form-parada-input";
    inputLinea.setAttribute('nomLinea', lineasArr[i].nomLinea);
    inputLinea.name = `editar-linea-paradaLinea1-tramo${(e + 1)}-${lineasArr[i].nomLinea}`;
    inputLinea.required = true;
    if(e + 1 != 1){
      inputLinea.disabled = true
    }
    
    const selectParada2 = document.createElement("select");
    selectParada2.style.textTransform = "initial !important";
    selectParada2.id = `editar-linea-parada-linea2-tramo${(e + 1)}-${lineasArr[i].nomLinea}`;
    selectParada2.className = "form-parada-input editar-linea-form-parada-input";
    selectParada2.setAttribute('nomLinea', lineasArr[i].nomLinea);
    selectParada2.name = `editar-linea-paradaLinea2-tramo${(e + 1)}-${lineasArr[i].nomLinea}`;
    selectParada2.required = true;


    let dataTramos = []

    let formData = new FormData();

    formData.append('nomLinea',lineasArr[i].nomLinea)
    formData.append('ordenTramo',( e + 1 ))

    let option = {
      body: formData,
      method: 'post'
    };

    showLoader();
    fetch(raiz+'/Backend/Admin/consulta_todos_tramos.php', option)
    .then( (response)=> {
        if(response.ok){
            return response.json();
        }
    })
    .then((data)=>{
      dataTramos = data


      console.log(dataTramos)
  
    // Crear el contenedor principal
    const crearLineaTramoDataCont = document.createElement("div");
    crearLineaTramoDataCont.classList.add("crear-linea-tramo-data-cont");
  
    // Crear el elemento select
    const crearLineaTramoDataTipo = document.createElement("select");
    crearLineaTramoDataTipo.classList.add("crear-linea-tramo-data");
    crearLineaTramoDataTipo.id = `gestionar-linea${lineasArr[i].nomLinea}-tramo${(e + 1)}-data-tipo`;
    crearLineaTramoDataTipo.setAttribute("required", true);
  
    // Crear las opciones para el select
    const opciones = [
      { value: "1", text: "Calle" },
      { value: "2", text: "Ruta" },
      { value: "3", text: "Ciudad" }
    ];
  
    opciones.forEach((opcion) => {
      const option = document.createElement("option");
      option.value = opcion.value;
      option.textContent = opcion.text;
      crearLineaTramoDataTipo.appendChild(option);
      if(opcion.value == dataTramos[3]){
        option.selected = true
      }
    });
  
    // Crear los elementos input
    const inputs = [
      { type: "number", arrayFuncNum: 0 , id: `gestionar-linea${lineasArr[i].nomLinea}-tramo${(e + 1)}-data-tiempo`, placeholder: "Tiempo (min.)" },
      { type: "number", arrayFuncNum: 1 , id: `gestionar-linea${lineasArr[i].nomLinea}-tramo${(e + 1)}-data-distancia`, placeholder: "Distancia (Km)" },
      { type: "text", arrayFuncNum: 2 , id: `gestionar-linea${lineasArr[i].nomLinea}-tramo${(e + 1)}-data-comentario`, placeholder: "Comentario" }
    ];
  
    inputs.forEach((inputConfig) => {
      const input = document.createElement("input");
      input.type = inputConfig.type;
      input.classList.add("crear-linea-tramo-data");
      input.id = inputConfig.id;
      input.setAttribute("required", true);
      input.placeholder = inputConfig.placeholder;
      input.value = dataTramos[inputConfig.arrayFuncNum]
      crearLineaTramoDataCont.appendChild(input);
  
    });
  
    // Agregar el select y los inputs al contenedor principal
    crearLineaTramoDataCont.appendChild(crearLineaTramoDataTipo);


    showLoader();
    fetch(raiz+'/Backend/Booking/consulta_home.php')
    .then( (response)=> {
        if(response.ok){
            return response.json();
        }
    })
    .then((data)=>{
        for (let r = 0; r < data.length; r++) {
          const editarLineaOptionParada1 = document.createElement('option');
          editarLineaOptionParada1.value = data[r][1];
          editarLineaOptionParada1.textContent = data[r][1];
          if(lineasArr[i].trayectoLinea[e][0] == data[r][1] ){
            editarLineaOptionParada1.selected = true
          }
          inputLinea.appendChild(editarLineaOptionParada1);

          const editarLineaOptionParada2 = document.createElement('option');
          editarLineaOptionParada2.value = data[r][1];
          editarLineaOptionParada2.textContent = data[r][1];
          if(lineasArr[i].trayectoLinea[e][1] == data[r][1] ){
            editarLineaOptionParada2.selected = true
          }
          selectParada2.appendChild(editarLineaOptionParada2);
        }

    })
    .catch((error)=>{
        console.error('Error: ' + error);
    });  

    editarLineaTrayectoContent.appendChild(removeParada1);
    editarLineaTrayectoContent.appendChild(labelTramo);
    editarLineaTrayectoContent.appendChild(labelParada1);
    editarLineaTrayectoContent.appendChild(inputLinea);
    editarLineaTrayectoContent.appendChild(labelParada2);
    editarLineaTrayectoContent.appendChild(selectParada2);
    
    editarLineaTrayectoContent.appendChild(crearLineaTramoDataCont);
    
    console.log(`admin-linea-tramo${e}-${lineasArr[i].nomLinea}`)
    if(document.getElementById(`admin-linea-tramo${e}-${lineasArr[i].nomLinea}`)){
      document.getElementById(`admin-linea-tramo${e}-${lineasArr[i].nomLinea}`).insertAdjacentElement('afterend', editarLineaTrayectoContent);
    }else{
      divTramo.appendChild(editarLineaTrayectoContent)
    }
    //divTramo.appendChild(editarLineaNuevoTramoBtn)

    if(crearTramosButtonCantidadLlamadas == 0){
      buttonNuevoTramo()
      crearTramosButtonCantidadLlamadas++
    }

    hoverRemovesEdLi()
    eliminarTramoEdLi()
    cambiarParadaEditarLinea()
    
    hideLoader();

    })
    .catch((error)=>{
        console.error('Error: ' + error);
    });  


    
  }



    ///////////////////



    abrirLineaContent.appendChild(abrirLineaDatos)
    abrirLineaContent.appendChild(datosGeneralesContent)
    abrirLineaContent.appendChild(abrirLineaTrayecto)
    
    
    divLinea.appendChild(abrirLinea)
    divLinea.appendChild(abrirLineaContent)
    abrirLineaContent.appendChild(divTramo)
    abrirLineaContent.appendChild(saveBtn)
    // abrirLineaContent.appendChild(deleteBtn)

    document.querySelector('.editar-linea-content').appendChild(divLinea)
    

    hoverRemovesEdLi()
    eliminarTramoEdLi()
    cambiarParadaEditarLinea()

    
  }



    document.querySelectorAll('.editar-linea-admin-form-open').forEach(element => {
      document.getElementById(`editar-linea-admin-form-abrir-linea-content-${element.id}`).style.display="none"
      element.addEventListener('click', ()=>{
        if (document.getElementById(`editar-linea-admin-form-abrir-linea-content-${element.id}`).style.display == "none") {
          document.getElementById(`editar-linea-admin-form-abrir-linea-content-${element.id}`).style.display="flex"
          document.getElementById(`abrir-linea-icon-${element.id}`).style.rotate="90deg"
        }else{
          document.getElementById(`editar-linea-admin-form-abrir-linea-content-${element.id}`).style.display="none"
          document.getElementById(`abrir-linea-icon-${element.id}`).style.rotate="0deg"
        }
      })
    });

    // EVENTOS -->

    document.querySelectorAll('.editar-linea-admin-form-abrir-linea-content-child-datos').forEach(element => {
      document.getElementById(`datos-generales-content-${element.id}`).style.display="none"
      element.addEventListener('click', ()=>{
        if (document.getElementById(`datos-generales-content-${element.id}`).style.display == "none") {
          document.getElementById(`datos-generales-content-${element.id}`).style.display="flex"
          document.getElementById(`abrir-linea-icon-datos-${element.id}`).style.rotate="90deg"
        }else{
          document.getElementById(`datos-generales-content-${element.id}`).style.display="none"
          document.getElementById(`abrir-linea-icon-datos-${element.id}`).style.rotate="0deg"
        }
      })
    });

    document.querySelectorAll('.editar-linea-admin-form-abrir-linea-content-child-trayecto').forEach(element => {
      document.getElementById(`editar-linea-tramo-${element.id}`).style.display = "none"
      element.addEventListener('click', ()=>{
        if (document.getElementById(`editar-linea-tramo-${element.id}`).style.display == "none") {
          document.getElementById(`editar-linea-tramo-${element.id}`).style.display="flex"
          document.getElementById(`abrir-linea-icon-trayecto-${element.id}`).style.rotate="90deg"
        }else{
          document.getElementById(`editar-linea-tramo-${element.id}`).style.display="none"
          document.getElementById(`abrir-linea-icon-trayecto-${element.id}`).style.rotate="0deg"
        }
      })
    });



}

function buttonNuevoTramo() {
  
  Array.from(document.querySelectorAll('.editar-linea-nuevo-tramo')).forEach(element => {
    element.addEventListener('click', ()=>{
      let elementoNomLinea = element.getAttribute('nomLinea')
      
      let cantTramosPorLineaTrayecto2 =  Array.from(document.querySelectorAll(`#editar-linea-admin-form-abrir-linea-content-${elementoNomLinea} .editar-linea-form-tramo`)).length;

      const editarLineaTrayectoContent = document.createElement('div')
      editarLineaTrayectoContent.className = "editar-linea-form-tramo";
      editarLineaTrayectoContent.id = `admin-linea-tramo${cantTramosPorLineaTrayecto2 + 1}-${elementoNomLinea}`;


        // Crear la etiqueta "label" para "Parada 1"
        const labelTramo = document.createElement("label");
        labelTramo.htmlFor = `editar-linea-tramo${cantTramosPorLineaTrayecto2 + 1}`;
        labelTramo.className = "form-tramo-label";
        labelTramo.textContent = `Tramo ${(cantTramosPorLineaTrayecto2 + 1)}`;

        const labelParada1 = document.createElement("label");
        labelParada1.htmlFor = `editar-linea-parada-linea${((cantTramosPorLineaTrayecto2 + 1) * 2) - 1}`;
        labelParada1.className = "form-parada-label";
        labelParada1.textContent = `Parada ${((cantTramosPorLineaTrayecto2 + 1) * 2) - 1}`;

        const removeParada1 = document.createElement("button");
        removeParada1.id = `editar-linea-remove-tramo${(cantTramosPorLineaTrayecto2 + 1)}`;

        removeParada1.className = "form-tramo-remove";
        removeParada1.setAttribute('nomLinea', elementoNomLinea);
        removeParada1.textContent = `X`;
        removeParada1.type = `button`;
        removeParada1.id = `admin-linea-remove-tramo${cantTramosPorLineaTrayecto2 + 1}-${elementoNomLinea}`;

        const labelParada2 = document.createElement("label");
        labelParada2.htmlFor = `editar-linea-parada-linea${((cantTramosPorLineaTrayecto2 + 1) * 2)}`;
        labelParada2.className = "form-parada-label";
        labelParada2.textContent = `Parada ${((cantTramosPorLineaTrayecto2 + 1) * 2)}`;

        // Crear el input para "Parada 1"
        const inputLinea = document.createElement("select");
        inputLinea.style.textTransform = "initial !important";
        inputLinea.id = `editar-linea-parada-linea1-tramo${(cantTramosPorLineaTrayecto2 + 1)}-${elementoNomLinea}`;
        inputLinea.className = "form-parada-input editar-linea-form-parada-input";
        inputLinea.setAttribute('nomLinea', elementoNomLinea);
        inputLinea.name = `editar-linea-paradaLinea1-tramo${(cantTramosPorLineaTrayecto2 + 1)}-${elementoNomLinea}`;
        inputLinea.required = true;
        if(cantTramosPorLineaTrayecto2 + 1 != 1){
          inputLinea.disabled = true
        }
      
        const selectParada2 = document.createElement("select");
        selectParada2.style.textTransform = "initial !important";
        selectParada2.id = `editar-linea-parada-linea2-tramo${(cantTramosPorLineaTrayecto2 + 1)}-${elementoNomLinea}`;
        selectParada2.className = "form-parada-input editar-linea-form-parada-input";
        selectParada2.setAttribute('nomLinea', elementoNomLinea);
        selectParada2.name = `editar-linea-paradaLinea2-tramo${(cantTramosPorLineaTrayecto2 + 1)}-${elementoNomLinea}`;
        selectParada2.required = true;
      
        showLoader();
        fetch(raiz+'/Backend/Booking/consulta_home.php')
        .then( (response)=> {
            if(response.ok){
                return response.json();
              }
          })
          .then((data)=>{
            hideLoader();

              for (let r = 0; r < data.length; r++) {
                const editarLineaOptionParada1 = document.createElement('option');
                editarLineaOptionParada1.value = data[r][1];
                editarLineaOptionParada1.textContent = data[r][1];
                inputLinea.appendChild(editarLineaOptionParada1);
            
                const editarLineaOptionParada2 = document.createElement('option');
                editarLineaOptionParada2.value = data[r][1];
                editarLineaOptionParada2.textContent = data[r][1];
                  selectParada2.appendChild(editarLineaOptionParada2);
                }
                
        })
        .catch((error)=>{
            console.error('Error: ' + error);
          });  
          
          editarLineaTrayectoContent.appendChild(removeParada1);
          editarLineaTrayectoContent.appendChild(labelTramo);
          editarLineaTrayectoContent.appendChild(labelParada1);
          editarLineaTrayectoContent.appendChild(inputLinea);
          editarLineaTrayectoContent.appendChild(labelParada2);
          editarLineaTrayectoContent.appendChild(selectParada2);
          
          document.getElementById(`editar-linea-tramo-${elementoNomLinea}`).insertBefore(editarLineaTrayectoContent, document.getElementById(`editar-linea-sbtn-nuevo-tramo-${elementoNomLinea}`));
          

          
          hoverRemovesEdLi()
          eliminarTramoEdLi()
          cambiarParadaEditarLinea()
    })
  });
}

function eliminarTramoEdLi(){

  const tramoRemoveElements = Array.from(document.querySelectorAll('.form-tramo-remove'));


  tramoRemoveElements.forEach(element => {
    const formTramosDiv = document.getElementById(`editar-linea-tramo-${element.getAttribute('nomlinea')}`);

    element.addEventListener('click', (event) => {
      const cantTramosPorLinea = formTramosDiv.children.length;
      const posicionPadre = parseInt(element.parentNode.id[(parseInt(element.parentNode.id.indexOf('tramo')) + 5 )]);
      
      for (let i = posicionPadre; i < cantTramosPorLinea + 1; i++) {
        document.getElementById(`admin-linea-tramo${i}-${element.getAttribute('nomlinea')}`).remove()
        console.log(`admin-linea-tramo${i}-${element.getAttribute('nomlinea')}`)
      }
      hoverRemovesEdLi()
      eliminarTramoEdLi()
      cambiarParadaEditarLinea()
      event.stopImmediatePropagation()
    });
  });

}


function hoverRemovesEdLi(){

  const tramoRemoveElements = Array.from(document.querySelectorAll('.form-tramo-remove'));
  tramoRemoveElements.forEach(element => {
    const formTramosDiv = document.getElementById(`editar-linea-tramo-${element.getAttribute('nomlinea')}`);

    element.addEventListener('mouseover', (event) => {
      event.stopImmediatePropagation()
      const cantTramosPorLinea = formTramosDiv.children.length;
      const posicionPadre = parseInt(element.parentNode.id[(parseInt(element.parentNode.id.indexOf('tramo')) + 5 )]);
      for (let i = posicionPadre; i < cantTramosPorLinea; i++) {
        document.getElementById(`admin-linea-remove-tramo${i}-${element.getAttribute('nomlinea')}`).classList.add('hover-remove-tramo')
        document.getElementById(`admin-linea-tramo${i}-${element.getAttribute('nomlinea')}`).style.background='var(--color-desaprobado)'
      }
      
      
    });

    element.addEventListener('mouseout', (event) => {
      event.stopImmediatePropagation()
      const cantTramosPorLinea = formTramosDiv.children.length;
      const posicionPadre = parseInt(element.parentNode.id[(parseInt(element.parentNode.id.indexOf('tramo')) + 5 )]);
      
      for (let i = posicionPadre; i < cantTramosPorLinea; i++) {
        document.getElementById(`admin-linea-remove-tramo${i}-${element.getAttribute('nomlinea')}`).classList.remove('hover-remove-tramo')
        document.getElementById(`admin-linea-tramo${i}-${element.getAttribute('nomlinea')}`).style.background=''

      }
    });
  });
}

// let lineas = [
//   {
//     nomLinea: 'V101',
//     origenLinea: 'origen linea',
//     destinoLinea: 'destino linea',
//     trayectoLinea: [['paraad1','Ciudad de la Costa'],['Ciudad de la Costa','parada3'],['paraad3','parada4'],['paraad4','parada5']]
//   },  
//   {
//     nomLinea: 'V111',
//     origenLinea: 'origen linea',
//     destinoLinea: 'destino linea',
//     trayectoLinea: [['paraad1','parada2'],['paraad2','parada3'],['paraad2','parada3']]
//   }
// ]


let lineasArr = [];

let formData = new FormData();

let option = {
  body: formData,
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
      lineasArr = result.data;
      buscarLineas(lineasArr)
      guardarLinea()
      eliminarLinea()
    } else {
      console.error('Respuesta con error:', result.status, result.data);
    }
  })
  .catch((error) => {
    console.error('Error en la solicitud:', error);
  });

document.getElementById('admin-submit-crear-linea').addEventListener('click', () => {
  if (document.getElementById('tramo1')) {
      let origenInput = document.getElementById('origen-linea').value;
      let destinoInput = document.getElementById('destino-linea').value;
      let nombreInput = document.getElementById('nom-linea').value;

      let trayectoUpdate = [];
      let tramoDatosUpdate = [

      ];

      for (let b = 1; b < Array.from(document.querySelectorAll('.form-nuevo-tramo')).length + 1; b++) {
          let tramoUpdate = [];
          tramoUpdate.push(document.getElementById(`parada-linea1-tramo${b}`).value);
          tramoUpdate.push(document.getElementById(`parada-linea2-tramo${b}`).value);
          trayectoUpdate.push(tramoUpdate);

          let distanciaInput = document.getElementById(`crear-linea-tramo${b}-data-distancia`).value;
          let tiempoInput = document.getElementById(`crear-linea-tramo${b}-data-tiempo`).value;
          let comentarioInput = document.getElementById(`crear-linea-tramo${b}-data-comentario`).value;
          let tipoInput = document.getElementById(`crear-linea-tramo${b}-data-tipo`).value;

          let datosTramoTemp = [distanciaInput, tiempoInput, comentarioInput, tipoInput]

          tramoDatosUpdate.push(datosTramoTemp)

      }

      console.log("---------- CREAR LINEA ---------");
      console.log(origenInput);
      console.log(destinoInput);
      console.log(nombreInput);
      console.log(trayectoUpdate);
      console.log(tramoDatosUpdate)
      console.log("---------- CREAR LINEA ---------");
    
      let formData = new FormData();
    
      formData.append('nomLinea', nombreInput);
      formData.append('origenLinea', origenInput);
      formData.append('destinoLinea', destinoInput);
      formData.append('tramoDatos', JSON.stringify(tramoDatosUpdate));
      formData.append('trayectoLinea', JSON.stringify(trayectoUpdate));
      
      let option = {
          body: formData,
          method: 'POST'
      };

      fetch(raiz+'/Backend/Admin/consulta_crear_linea.php', option)
      .then((response) => {
          return response.json().then(data => ({
              data: data,
              status: response.status
          }));
      })
      .then((result) => {
          if (result.status === 200) {
            alert('La linea se ha creado correctamente')
          } else {
            alert('Ha ocurrido un error')
          }
      })
      .catch((error) => {
          console.error('Error en la solicitud:', error);
      });
  }else{
    alert('Una linea debe tener al menos un tramo')
  }
});

function guardarLinea() {

  Array.from(document.querySelectorAll('.editar-linea-admin-save-btn')).forEach(element => {
    element.addEventListener('click', () =>{
  
      if(document.getElementById(`admin-linea-tramo1-${element.id}`)){
        let nombreInput = document.getElementById(`input-linea-nombre-${element.id}`).value
        let origenInput = document.getElementById(`input-linea-origen-${element.id}`).value
        let destinoInput = document.getElementById(`input-linea-destino-${element.id}`).value
        let idLinea = element.getAttribute('idlinea')
    
        let trayectoUpdate = []
        let tramoDatosUpdate = [];

    
        for (let b = 1; b < Array.from(document.getElementById(`editar-linea-tramo-${element.id}`).childNodes).length; b++) {
          
          let tramoUpdate = []
          tramoUpdate.push(document.getElementById(`editar-linea-parada-linea1-tramo${b}-${element.id}`).value)
          tramoUpdate.push(document.getElementById(`editar-linea-parada-linea2-tramo${b}-${element.id}`).value)
          trayectoUpdate.push(tramoUpdate)


          let distanciaInput = document.getElementById(`gestionar-linea${element.id}-tramo${b}-data-distancia`).value;
          let tiempoInput = document.getElementById(`gestionar-linea${element.id}-tramo${b}-data-tiempo`).value;
          let comentarioInput = document.getElementById(`gestionar-linea${element.id}-tramo${b}-data-comentario`).value;
          let tipoInput = document.getElementById(`gestionar-linea${element.id}-tramo${b}-data-tipo`).value;

          let datosTramoTemp = [distanciaInput, tiempoInput, comentarioInput, tipoInput]

          tramoDatosUpdate.push(datosTramoTemp)

        }

        console.log("---------- EDITAR LINEA ---------")
        console.log(origenInput)
        console.log(destinoInput)
        console.log(nombreInput)
        console.log(trayectoUpdate)
        console.log(idLinea)
        console.log(tramoDatosUpdate)
        console.log("---------- EDITAR LINEA ---------")
    
        let formData = new FormData();
      
        formData.append('nomLineaUpdate', nombreInput);
        formData.append('origenLineaUpdate', origenInput);
        formData.append('destinoLineaUpdate', destinoInput);
        formData.append('idLineaUpdate', idLinea);
        formData.append('tramoDatosUpdate', JSON.stringify(tramoDatosUpdate));
        formData.append('trayectoLinea', JSON.stringify(trayectoUpdate));
        
        let option = {
            body: formData,
            method: 'POST'
        };
    
        fetch(raiz+'/Backend/Admin/consulta_editar_linea.php', option)
        .then((response) => {
            return response.json().then(data => ({
                data: data,
                status: response.status
            }));
        })
        .then((result) => {
            if (result.status === 200) {
                alert('La linea se ha editado correctamente')
                window.location.reload()
            } else {
                alert('Ha ocurrido un error')
                console.error('Respuesta con error:', result.status, result.data);
            }
        })
        .catch((error) => {
            console.error('Error en la solicitud:', error);
        });
      }
    })
  });

}

function eliminarLinea() {

  Array.from(document.querySelectorAll('.editar-linea-admin-delete-btn')).forEach(element => {
    element.addEventListener('click', () =>{
      let conf = confirm('Estas segur@? Esta accion no se puede revertir')

      if(conf){
        let formData = new FormData();
      
        formData.append('idLineaDelete', parseInt(element.getAttribute('idlinea')));
        
        let option = {
            body: formData,
            method: 'POST'
        };
    
        fetch(raiz+'/Backend/Admin/consulta_eliminar_linea.php', option)
        .then((response) => {
            return response.json().then(data => ({
                data: data,
                status: response.status
            }));
        })
        .then((result) => {
            if (result.status === 200) {
              if(result.data){
                alert('La linea se ha eliminado correctamente')
                window.location.reload()
              }
            } else {  
                alert('Ha ocurrido un error')
                console.error('Error:', result.status, result.data);
            }
        })
        .catch((error) => {
            console.error('Error en la solicitud:', error);
        });

      }

    })
  });

}
