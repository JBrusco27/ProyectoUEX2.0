function buscarClientes(lineasArr) {    

    // Se crea la seccion de datos generales y de trayecto
    for (let i = 0; i < lineasArr.length; i++) {
      const divClient = document.createElement("div");
      divClient.className = "gestionar-clientes-admin-cont";
      divClient.id = `gestionar-clientes-admin-cont-${lineasArr[i].idUsuario}`;
      divClient.setAttribute('correo',lineasArr[i].idUsuario)
  
        const abrirClient = document.createElement("div")
        abrirClient.className = "gestionar-clientes-admin-form-open"
        abrirClient.id = `${lineasArr[i].idUsuario}`
        
            const abrirClientIcon = document.createElement("div")
            abrirClientIcon.textContent = ">"
            abrirClientIcon.id = `abrir-cliente-icon-${lineasArr[i].idUsuario}`
            abrirClientIcon.className = "abrir-cliente-icon"
            
            const abrirClientNombreClient = document.createElement("div")
            abrirClientNombreClient.textContent = `${lineasArr[i].correo}`

            abrirClient.appendChild(abrirClientNombreClient)
            abrirClient.appendChild(abrirClientIcon)
  
        const abrirClientContent = document.createElement("div")
        abrirClientContent.id = `gestionar-clientes-admin-form-abrir-cliente-content-${lineasArr[i].idUsuario}`
        abrirClientContent.className = "gestionar-cliente-admin-form-abrir-cliente-content"



            const abrirGeneralesClient = document.createElement("div")
            abrirGeneralesClient.className = "gestionar-cliente-admin-form-abrir-cliente-content-child gestionar-cliente-admin-form-abrir-cliente-content-child-datos"
            abrirGeneralesClient.id = lineasArr[i].idUsuario

                const abrirGeneralesIconGenerales = document.createElement("div")
                abrirGeneralesIconGenerales.textContent = ">"
                abrirGeneralesIconGenerales.id = `abrir-Generales-icon-Generales-${lineasArr[i].idUsuario}`

                abrirGeneralesIconGenerales.className = "abrir-Generales-icon"
                
                const abrirGeneralesNombreGenerales = document.createElement("div")
                abrirGeneralesNombreGenerales.textContent = `Datos Generales`

                abrirGeneralesClient.appendChild(abrirGeneralesNombreGenerales)
                abrirGeneralesClient.appendChild(abrirGeneralesIconGenerales)

                    const abrirGeneralesClientCont = document.createElement('div')
                    abrirGeneralesClientCont.classList.add(`abrir-datos-esp-container-${lineasArr[i].idUsuario}`,"gestionar-cliente-admin-form-abrir-cliente-content-child-datos-cont")
                    abrirGeneralesClientCont.id = `gestionar-cliente-admin-form-abrir-cliente-content-child-datos-cont${lineasArr[i].idUsuario}`

                    // Crear los elementos input
                    const abrirGeneralesClientContInputs = [
                        { type: "email" , id: `gestionar-cliente-admin-form-abrir-cliente-content-child-datos-cont-email-${lineasArr[i].idUsuario}`, placeholder: "Email", disabled: true,value:lineasArr[i].correo },
                        { type: "text" , id: `gestionar-cliente-admin-form-abrir-cliente-content-child-datos-cont-nA-${lineasArr[i].idUsuario}`, placeholder: "Nombre y Apellido", disabled: false,value:lineasArr[i].nombreApellido },
                        { type: "text" , id: `gestionar-cliente-admin-form-abrir-cliente-content-child-datos-cont-tel-${lineasArr[i].idUsuario}`, placeholder: "Telefono", disabled: false, value:lineasArr[i].telefono },
                    ];

                    const abrirGeneralesClientContInputsCont = document.createElement('div')                    

                    abrirGeneralesClientContInputs.forEach((inputConfig) => {

                        const divContXd = document.createElement('div')
                        
                        const label = document.createElement("label");
                        label.for=inputConfig.id
                        label.textContent=inputConfig.placeholder
    
                        const input = document.createElement("input");
                        input.type = inputConfig.type;
                        input.id = inputConfig.id;
                        input.placeholder = inputConfig.placeholder;
                        input.value = inputConfig.value
                        input.disabled = inputConfig.disabled
    
                        divContXd.appendChild(label);
                        divContXd.appendChild(input);
                        
                        abrirGeneralesClientContInputsCont.appendChild(divContXd);
                    
                    });

                    abrirGeneralesClientCont.appendChild(abrirGeneralesClientContInputsCont)


                    const abrirGeneralesClientContBtnsCont = document.createElement('div')
                    abrirGeneralesClientContBtnsCont.className = 'gestionar-cliente-admin-form-abrir-cliente-content-child-datos-cont-btns'
                                        
                    const eliminarGeneralesBtn = document.createElement('button')
                    eliminarGeneralesBtn.className = "gestionar-generales-eliminar-btn-client   "
                    eliminarGeneralesBtn.textContent = "Eliminar"
                    eliminarGeneralesBtn.setAttribute('correo',lineasArr[i].idUsuario)

                    const guardarGeneralesBtn = document.createElement('button')
                    guardarGeneralesBtn.className = "gestionar-generales-guardar-btn-admin"
                    guardarGeneralesBtn.textContent = "Guardar"
                    guardarGeneralesBtn.setAttribute('correo',lineasArr[i].idUsuario)

                    abrirGeneralesClientContBtnsCont.appendChild(eliminarGeneralesBtn);
                    abrirGeneralesClientContBtnsCont.appendChild(guardarGeneralesBtn);

    
                    abrirGeneralesClientCont.appendChild(abrirGeneralesClientContBtnsCont)
            
            const abrirReservasClient = document.createElement("div")
            abrirReservasClient.className = "gestionar-cliente-admin-form-abrir-cliente-content-child gestionar-cliente-admin-form-abrir-cliente-content-child-reservas"
            abrirReservasClient.id = lineasArr[i].idUsuario

                const abrirReservasIconReservas = document.createElement("div")
                abrirReservasIconReservas.textContent = ">"
                abrirReservasIconReservas.id = `abrir-reservas-icon-reservas-${lineasArr[i].idUsuario}`

                abrirReservasIconReservas.className = "abrir-reservas-icon"
                
                const abrirReservasNombreReservas = document.createElement("div")
                abrirReservasNombreReservas.textContent = `Reservas`

                abrirReservasClient.appendChild(abrirReservasNombreReservas)
                abrirReservasClient.appendChild(abrirReservasIconReservas)


            abrirClientContent.appendChild(abrirGeneralesClient)
            abrirClientContent.appendChild(abrirGeneralesClientCont)

            abrirClientContent.appendChild(abrirReservasClient)

            divClient.appendChild(abrirClient)
            divClient.appendChild(abrirClient)
            divClient.appendChild(abrirClientContent)



        for (let d = 0; d < lineasArr[i].reservas.length; d++) {

            const abrirReservaEspClientCont = document.createElement('div')
            abrirReservaEspClientCont.classList.add(`abrir-reserva-esp-container-${lineasArr[i].idUsuario}`,"abrir-reserva-esp-container")

                const abrirReservaEspClientDatos = document.createElement('div')
                abrirReservaEspClientDatos.classList = "abrir-reserva-esp-datos"

                // Crear los elementos input
                const inputs = [
                    { type: "date" , id: `gestionar-reserva${lineasArr[i].idReserva}-${lineasArr[i].idUsuario}-data-fechaReserva`, placeholder: "Fecha de salida", disabled: true,value:lineasArr[i].reservas[d].fechaSalida },
                    { type: "time" , id: `gestionar-reserva${lineasArr[i].idReserva}-${lineasArr[i].idUsuario}-data-horaSalida`, placeholder: "Hora de salida", disabled: true, value:lineasArr[i].reservas[d].horaSalida },
                    { type: "date" , id: `gestionar-reserva${lineasArr[i].idReserva}-${lineasArr[i].idUsuario}-data-fechaReserva`, placeholder: "Fecha de reserva", disabled: true,value:lineasArr[i].reservas[d].fechaReserva },
                    { type: "time" , id: `gestionar-reserva${lineasArr[i].idReserva}-${lineasArr[i].idUsuario}-data-horaReserva`, placeholder: "Hora de reserva", disabled: true, value:lineasArr[i].reservas[d].horaReserva },
                    { type: "text" , id: `gestionar-reserva${lineasArr[i].idReserva}-${lineasArr[i].idUsuario}-data-origenViaje`, placeholder: "Origen del viaje", disabled: true, value:lineasArr[i].reservas[d].origenViaje },
                    { type: "text" , id: `gestionar-reserva${lineasArr[i].idReserva}-${lineasArr[i].idUsuario}-data-destinoViaje`, placeholder: "Destino del viaje", disabled: true, value:lineasArr[i].reservas[d].destinoViaje },
                ];
                
                inputs.forEach((inputConfig) => {
                    const divContXd = document.createElement('div')
                    
                    const label = document.createElement("label");
                    label.for=inputConfig.id
                    label.textContent=inputConfig.placeholder

                    const input = document.createElement("input");
                    input.type = inputConfig.type;
                    input.id = inputConfig.id;
                    input.placeholder = inputConfig.placeholder;
                    input.value = inputConfig.value
                    input.disabled = inputConfig.disabled

                    divContXd.appendChild(label);
                    divContXd.appendChild(input);

                    abrirReservaEspClientDatos.appendChild(divContXd);
                
                });

                const abrirReservaEspClientEditables = document.createElement('div')
                abrirReservaEspClientEditables.classList = "abrir-reserva-esp-editables"

                    const divContAsientos = document.createElement('div')
                    
                    const labelAsiento = document.createElement("label");
                    labelAsiento.for=`gestionar-reserva${lineasArr[i].reservas[d].idReserva}-${lineasArr[i].idUsuario}-data-asiento`
                    labelAsiento.textContent='Asiento'

                    const inputAsiento = document.createElement("input");
                    inputAsiento.type = "number";
                    inputAsiento.id = `gestionar-reserva${lineasArr[i].reservas[d].idReserva}-${lineasArr[i].idUsuario}-data-asiento`;
                    inputAsiento.placeholder = 'Asiento';
                    inputAsiento.value = lineasArr[i].reservas[d].asientoReserva

                    const labelEstado = document.createElement("label");
                    labelEstado.for=`gestionar-reserva${lineasArr[i].reservas[d].idReserva}-${lineasArr[i].idUsuario}-data-estado`
                    labelEstado.textContent='Estado'

                    const inputEstado = document.createElement("select");
                    inputEstado.id = `gestionar-reserva${lineasArr[i].reservas[d].idReserva}-${lineasArr[i].idUsuario}-data-estado`;

                    let option1 = document.createElement('option')
                    option1.value = 'Pendiente'
                    option1.textContent = 'Pendiente'
                    let option2 = document.createElement('option')
                    option2.value = 'Confirmado'
                    option2.textContent = 'Confirmado'
                    let option3 = document.createElement('option')
                    option3.value = 'Cancelado'
                    option3.textContent = 'Cancelado'

                    switch (lineasArr[i].reservas[d].estadoReserva) {
                        case 'Pendiente':
                            option1.selected = true
                            break;
                        case 'Confirmado':
                            option2.selected = true
                            break;
                        case 'Cancelado':
                            option3.selected = true
                            break;
                        default:
                            alert('Ha ocurrido un error')
                            break;
                    }

                    inputEstado.appendChild(option1)
                    inputEstado.appendChild(option2)
                    inputEstado.appendChild(option3)

                    divContAsientos.appendChild(labelAsiento);
                    divContAsientos.appendChild(inputAsiento);
                    divContAsientos.appendChild(labelEstado);
                    divContAsientos.appendChild(inputEstado);
                    
                    abrirReservaEspClientEditables.appendChild(divContAsientos)

                    
                    
                    const eliminarReservaBtn = document.createElement('button')
                    eliminarReservaBtn.className = "gestionar-reserva-eliminar-btn"
                    eliminarReservaBtn.textContent = "Eliminar"
                    eliminarReservaBtn.setAttribute('correo',lineasArr[i].idUsuario)
                    eliminarReservaBtn.setAttribute('idReserva',lineasArr[i].reservas[d].idReserva)

                    const guardarReservaBtn = document.createElement('button')
                    guardarReservaBtn.className = "gestionar-reserva-guardar-btn"
                    guardarReservaBtn.textContent = "Guardar"
                    guardarReservaBtn.setAttribute('correo',lineasArr[i].idUsuario)
                    guardarReservaBtn.setAttribute('idReserva',lineasArr[i].reservas[d].idReserva)
                    guardarReservaBtn.setAttribute('idHorario',lineasArr[i].reservas[d].idHorario)


                    abrirReservaEspClientEditables.appendChild(eliminarReservaBtn);
                    abrirReservaEspClientEditables.appendChild(guardarReservaBtn);


                abrirReservaEspClientCont.appendChild(abrirReservaEspClientDatos)
                abrirReservaEspClientCont.appendChild(abrirReservaEspClientEditables)


                abrirClientContent.appendChild(abrirReservaEspClientCont)
        }   

        document.querySelector('.gestion-clientes-container').appendChild(divClient)

  
    }

    document.querySelectorAll('.gestionar-clientes-admin-form-open').forEach(element => {
        document.getElementById(`gestionar-clientes-admin-form-abrir-cliente-content-${element.id}`).style.display="none"
        element.addEventListener('click', ()=>{
          if (document.getElementById(`gestionar-clientes-admin-form-abrir-cliente-content-${element.id}`).style.display == "none") {
            document.getElementById(`gestionar-clientes-admin-form-abrir-cliente-content-${element.id}`).style.display="flex"
            document.getElementById(`abrir-cliente-icon-${element.id}`).style.rotate="90deg"
          }else{
            document.getElementById(`gestionar-clientes-admin-form-abrir-cliente-content-${element.id}`).style.display="none"
            document.getElementById(`abrir-cliente-icon-${element.id}`).style.rotate="0deg"
          }
        })
      });

      document.querySelectorAll('.gestionar-cliente-admin-form-abrir-cliente-content-child-reservas').forEach(elementP => {
        document.querySelectorAll(`.abrir-reserva-esp-container-${elementP.id}`).forEach(element => {
            element.style.display="none"
            elementP.addEventListener('click', ()=>{
                if (element.style.display == "none") {
                    element.style.display="flex"
                }else{
                    element.style.display="none"
                }
            })
        })
      })  

      document.querySelectorAll('.gestionar-cliente-admin-form-abrir-cliente-content-child-datos').forEach(elementP => {
        document.querySelectorAll(`.abrir-datos-esp-container-${elementP.id}`).forEach(element => {
            element.style.display="none"
            elementP.addEventListener('click', ()=>{
                if (element.style.display == "none") {
                    element.style.display="flex"
                }else{
                    element.style.display="none"
                }
            })
        })
      });

    guardarUser()
    eliminarUser()
    eliminarReserva()
    guardarReserva()

}


function guardarReserva() {
    Array.from(document.querySelectorAll('.gestionar-reserva-guardar-btn')).forEach((element)=>{
        element.addEventListener('click', ()=>{

            let formData = new FormData()
    
            formData.append('idHorario', element.getAttribute('idHorario'))
            formData.append('idReserva', element.getAttribute('idReserva'))
            formData.append('asiento',document.getElementById(`gestionar-reserva${element.getAttribute('idReserva')}-${element.getAttribute('correo')}-data-asiento`).value)
            formData.append('estado',document.getElementById(`gestionar-reserva${element.getAttribute('idReserva')}-${element.getAttribute('correo')}-data-estado`).value)

            let option = {
                body: formData,
                method: 'post'
              };
            
              fetch(raiz+'/Backend/Admin/user/consulta_guardar_reserva.php', option)
                .then((response) => {
                  return response.json().then(data => ({
                    data: data,
                    status: response.status
                  }));
                })
                .then((result) => {
                  if (result.status === 200) {  
                    if(result.data == '10'){
                        alert('El asiento se ha actualizado correctamente | Ha ocurrido un error al actualizar el estado')
                    }else if(result.data == '11'){
                        alert('El asiento se ha actualizado correctamente | El estado se ha actualizado correctamente')
                    }else if(result.data == '01'){
                        alert('Ha ocurrido un error al actualizar el asiento | El estado se ha actualizado correctamente')
                    }else if(result.data == '00'){
                        alert('Ha ocurrido un error al actualizar el asiento | Ha ocurrido un error al actualizar el estado')
                    }else if(result.data == '20'){
                        alert('El asiento seleccionado esta ocupado actualmente | Ha ocurrido un error al actualizar el estado')
                    }else if (result.data == '21') {
                        alert('El asiento seleccionado esta ocupado actualmente | El estado se ha actualizado correctamente')
                    }
                  } else {
                    console.error('Respuesta con error:', result.status, result.data);
                  }
                })
                .catch((error) => {
                  console.error('Error en la solicitud:', error);
                });
            
        })
    })
}

function eliminarReserva() {
    Array.from(document.querySelectorAll('.gestionar-reserva-eliminar-btn')).forEach((element)=>{
        element.addEventListener('click', ()=>{
            let formData = new FormData()
    
            formData.append('idReserva', element.getAttribute('idReserva'))
    
            let option = {
              body: formData,
              method:'post'
            }
            
              fetch(raiz+'/Backend/Admin/user/consulta_eliminar_reserva.php', option)
                .then((response) => {
                  return response.json().then(data => ({
                    data: data,
                    status: response.status
                  }));
                })
                .then((result) => {
                  if (result.status === 200) {
                    if(result.data){
                        alert('La reserva se ha eliminado correctamente')
                        window.location.reload();
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
            
        })
    })
}

function guardarUser() {
    Array.from(document.querySelectorAll('.gestionar-generales-guardar-btn-admin')).forEach((element)=>{
        element.addEventListener('click', ()=>{
            let formData = new FormData();
            formData.append('phoneUser', document.getElementById(`gestionar-cliente-admin-form-abrir-cliente-content-child-datos-cont-tel-${element.getAttribute('correo')}`).value);
            formData.append('nameLastnameUser', document.getElementById(`gestionar-cliente-admin-form-abrir-cliente-content-child-datos-cont-nA-${element.getAttribute('correo')}`).value);
            formData.append('email', document.getElementById(`gestionar-cliente-admin-form-abrir-cliente-content-child-datos-cont-email-${element.getAttribute('correo')}`).value);
            
            let opciones2 = {
            method: 'POST',
            body: formData
            };
            
            fetch(raiz+'Backend/Admin/user/consulta_editar_usuario.php', opciones2)
            .then(function (response) {
            // Verificar si la solicitud fue exitosa
                if (response.ok) {
                return response.json(); // Parsear la respuesta como JSON
                }
            })
            .then(function (data) {
                let hasError =false;
                if(!data.nombre_valido){
                    hasError =true;
                    alert('Nombre y apellido no validos')
                }
                if(!data.telefono_valido){
                    hasError =true;
                    alert('Telefono no valido')
                }
                if(!hasError){
                    alert('Los datos se han actualizado correctamente')
                    window.location.reload();
                }
            })
            .catch(function (error) {
                console.error('Error:', error);
            });
        })
    })

}

function eliminarUser() {
    Array.from(document.querySelectorAll('.gestionar-generales-eliminar-btn-client')).forEach((element)=>{
        element.addEventListener('click', ()=>{
            let conf = confirm('Segur@ que quiere eliminar este usuario?')
            if(conf){
                let formData = new FormData();
                formData.append('email', element.getAttribute('correo'));
                formData.append('tipo_user', 1);
                
                let opciones2 = {
                    method: 'POST',
                    body: formData
                };
            
                fetch(raiz+'Backend/Admin/user/consulta_eliminar_usuario.php', opciones2)
                .then(function (response) {
                    // Verificar si la solicitud fue exitosa
                    if (response.ok) {
                        return response.json(); // Parsear la respuesta como JSON
                    }
                })
                .then(function (data) {
                    if(data){
                        alert('El usuario se ha eliminado correctamente')
                        window.location.reload()
                    }else{
                        alert('Ha ocurrido un error')
                    }
                })
                .catch(function (error) {
                    console.error('Error:', error);
                });
            }
        })
    })
}

function cargarClientes() {
    let option = {
        method: 'post'
      };
    
      fetch(raiz+'/Backend/Admin/user/consulta_todos_usuarios.php', option)
        .then((response) => {
          return response.json().then(data => ({
            data: data,
            status: response.status
          }));
        })
        .then((result) => {
          if (result.status === 200) {
            usuariosArray = result.data
            console.log(usuariosArray)
            buscarClientes(usuariosArray)
          } else {
            console.error('Respuesta con error:', result.status, result.data);
          }
        })
        .catch((error) => {
          console.error('Error en la solicitud:', error);
        });
}


let usuariosArray = []
cargarClientes()
