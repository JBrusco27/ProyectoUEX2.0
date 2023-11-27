function crearGestionAdmins(lineasArr) {

  // Se crea la seccion de datos generales y de trayecto
  for (let i = 0; i < lineasArr.length; i++) {
    const divClient = document.createElement("div");
    divClient.className = "gestionar-clientes-admin-cont";
    divClient.id = `gestionar-admins-admin-cont-${lineasArr[i].idUsuario}`;
    divClient.setAttribute('correo',lineasArr[i].idUsuario)

      const abrirClient = document.createElement("div")
      abrirClient.className = "gestionar-admins-admin-form-open"
      abrirClient.id = `${lineasArr[i].idUsuario}`
      
          const abrirClientIcon = document.createElement("div")
          abrirClientIcon.textContent = ">"
          abrirClientIcon.id = `abrir-admin-icon-${lineasArr[i].idUsuario}`
          abrirClientIcon.className = "abrir-cliente-icon"
          
          const abrirClientNombreClient = document.createElement("div")
          abrirClientNombreClient.textContent = `${lineasArr[i].correo}`

          abrirClient.appendChild(abrirClientNombreClient)
          abrirClient.appendChild(abrirClientIcon)

      const abrirClientContent = document.createElement("div")
      abrirClientContent.id = `gestionar-admin-admin-form-abrir-admin-content-${lineasArr[i].idUsuario}`
      abrirClientContent.className = "gestionar-cliente-admin-form-abrir-cliente-content"



          const abrirGeneralesClient = document.createElement("div")
          abrirGeneralesClient.className = "gestionar-cliente-admin-form-abrir-cliente-content-child gestionar-cliente-admin-form-abrir-cliente-content-child-datos"
          abrirGeneralesClient.id = lineasArr[i].idUsuario

              const abrirGeneralesIconGenerales = document.createElement("div")
              abrirGeneralesIconGenerales.textContent = ">"
              abrirGeneralesIconGenerales.id = `abrir-admin-Generales-icon-Generales-${lineasArr[i].idUsuario}`

              abrirGeneralesIconGenerales.className = "abrir-Generales-icon"
              
              const abrirGeneralesNombreGenerales = document.createElement("div")
              abrirGeneralesNombreGenerales.textContent = `Datos Generales`

              abrirGeneralesClient.appendChild(abrirGeneralesNombreGenerales)
              abrirGeneralesClient.appendChild(abrirGeneralesIconGenerales)

                  const abrirGeneralesClientCont = document.createElement('div')
                  abrirGeneralesClientCont.classList.add(`abrir-datos-esp-container-${lineasArr[i].idUsuario}`,"gestionar-cliente-admin-form-abrir-cliente-content-child-datos-cont")
                  abrirGeneralesClientCont.id = `gestionar-admin-admin-form-abrir-admin-content-child-datos-cont${lineasArr[i].idUsuario}`

                  // Crear los elementos input
                  const abrirGeneralesClientContInputs = [
                      { type: "email" , id: `gestionar-admin-admin-form-abrir-admin-content-child-datos-cont-email-${lineasArr[i].idUsuario}`, placeholder: "Email", disabled: true,value:lineasArr[i].correo },
                      { type: "text" , id: `gestionar-admin-admin-form-abrir-admin-content-child-datos-cont-nA-${lineasArr[i].idUsuario}`, placeholder: "Nombre y Apellido", disabled: false,value:lineasArr[i].nombreApellido },
                      { type: "text" , id: `gestionar-admin-admin-form-abrir-admin-content-child-datos-cont-tel-${lineasArr[i].idUsuario}`, placeholder: "Telefono", disabled: false, value:lineasArr[i].telefono },
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
                  eliminarGeneralesBtn.className = "gestionar-generales-eliminar-btn-admin"
                  eliminarGeneralesBtn.textContent = "Eliminar"
                  eliminarGeneralesBtn.setAttribute('correo',lineasArr[i].idUsuario)

                  const guardarGeneralesBtn = document.createElement('button')
                  guardarGeneralesBtn.className = "gestionar-generales-guardar-btn-admin"
                  guardarGeneralesBtn.textContent = "Guardar"
                  guardarGeneralesBtn.setAttribute('correo',lineasArr[i].idUsuario)

                  abrirGeneralesClientContBtnsCont.appendChild(eliminarGeneralesBtn);
                  abrirGeneralesClientContBtnsCont.appendChild(guardarGeneralesBtn);

  
                  abrirGeneralesClientCont.appendChild(abrirGeneralesClientContBtnsCont)

                  abrirClientContent.appendChild(abrirGeneralesClient)
                  abrirClientContent.appendChild(abrirGeneralesClientCont)

                  
                divClient.appendChild(abrirClient)
                divClient.appendChild(abrirClient)
                divClient.appendChild(abrirClientContent)

                  document.querySelector('.gestion-admins-container').appendChild(divClient)

    }

    document.querySelectorAll('.gestionar-admins-admin-form-open').forEach(element => {
        console.log(element.id)
        document.getElementById(`gestionar-admin-admin-form-abrir-admin-content-${element.id}`).style.display="none"
        element.addEventListener('click', ()=>{
          if (document.getElementById(`gestionar-admin-admin-form-abrir-admin-content-${element.id}`).style.display == "none") {
            document.getElementById(`gestionar-admin-admin-form-abrir-admin-content-${element.id}`).style.display="flex"
            document.getElementById(`abrir-admin-icon-${element.id}`).style.rotate="90deg"
          }else{
            document.getElementById(`gestionar-admin-admin-form-abrir-admin-content-${element.id}`).style.display="none"
            document.getElementById(`abrir-admin-icon-${element.id}`).style.rotate="0deg"
          }
        })
      });


}

function cargarAdmins() {
    let option = {
        method: 'post'
      };
    
      fetch(raiz+'/Backend/Admin/consulta_todos_admins.php', option)
        .then((response) => {
          return response.json().then(data => ({
            data: data,
            status: response.status
          }));
        })
        .then((result) => {
          if (result.status === 200) {
            usuariosAdminArray = result.data
            console.log(usuariosAdminArray)
            crearGestionAdmins(usuariosAdminArray)
            eliminarAdmin()
            guardarAdmin()
          } else {
            console.error('Respuesta con error:', result.status, result.data);
          }
        })
        .catch((error) => {
          console.error('Error en la solicitud:', error);
        });
}



function eliminarAdmin() {
    Array.from(document.querySelectorAll('.gestionar-generales-eliminar-btn-admin')).forEach((element)=>{
        element.addEventListener('click', ()=>{
            let conf = confirm('Segur@ que quiere eliminar este usuario?')
            if(conf){
                let formData = new FormData();
                formData.append('email', element.getAttribute('correo'));
                formData.append('tipo_user', 2);
                
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


let usuariosAdminArray = []
cargarAdmins()


// Lógica para dar formato al número de teléfono
let phoneInput = document.getElementById('form-phone');
phoneInput.addEventListener('input', () => {
    const putSpaces = /\d{6}/g;
    phoneInput.value = phoneInput.value.replace(putSpaces, match => {
    return match.replace(/(\d{3})(?!$)/g, "$1 ");
    });
});

// Lógica para validar y dar formato al nombre
let nameInput = document.getElementById('form-name');
nameInput.addEventListener('input', () => {
    let inputValue = nameInput.value.trim();

    if (inputValue !== '') {
    let nameLastnameTest = /^[a-zA-Z]+ [a-zA-Z]+$/;

    if (nameLastnameTest.test(inputValue)) {
        let [name, lastname] = inputValue.split(' ');
        name = name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
        lastname = lastname.charAt(0).toUpperCase() + lastname.slice(1).toLowerCase();

        nameInput.value = name + ' ' + lastname;
    }
    }
});

// Lógica para validar el formulario antes del envío
document.getElementById('create-admin-submit').addEventListener('click', (event) => {
    let nameLastnameTest = /^[A-Za-záéíóúÁÉÍÓÚ]{2,20}\s[A-Za-záéíóúÁÉÍÓÚ]{2,20}$/;
    let emailTest = /^[A-Za-z0-9._%+-áéíóúÁÉÍÓÚ]{1,30}@[A-Za-z0-9-]{1,20}\.[A-Za-záéíóúÁÉÍÓÚ]{2,8}$/;
    let pswdTest = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,30}$/;
    let phoneTest = /^[\d ]{11,11}$/;

    let nameLastname = nameInput.value;
    let phone = phoneInput.value;
    let email = document.getElementById('form-email').value;
    let pswd = document.getElementById('form-pswd').value;
    let confPswd = document.getElementById('form-confPswd').value;

    let hasError = false; // Variable para detección de errores

    // Validación del nombre
    if (!nameLastnameTest.test(nameLastname)) {
    alert('El formato del nombre y apellido no es valido')
    hasError = true;
    }

    // Validación del email
    if (!emailTest.test(email)) {
        alert('El formato del email de no es valido')
    hasError = true;
    }

    // Validación de las contraseñas
    if (!pswdTest.test(pswd) || !pswdTest.test(confPswd)) {
    alert('El formato de la contraseña no es valido')
    hasError = true;
    }

    // Validación de contraseñas iguales
    if (pswd !== confPswd) {
    alert('La contraseña y la contraseña de confirmación deben ser iguales')
    hasError = true;
    }
    
    // Validación del teléfono
    if (!phoneTest.test(phone)) {
    alert('El formato del telefono no es valido')
    hasError = true;
    }

    // Si no hay errores en el formulario se hace el fetch
    if(!hasError){
    showLoader();
    let formData = new FormData();
    formData.append('columnNumber', localStorage.getItem('columnNumber'));
    formData.append('formName', nameLastname);
    formData.append('formPswd', pswd);
    formData.append('formEmail', email);
    formData.append('formConfPswd', confPswd);
    formData.append('formPhone', phone);
    
    let opciones = {
        method: 'POST',
        body: formData
    };

    // Este fetch se hace para traer la variable email_exists que contiene la verficiacion de si el email ya existe o no
    fetch(raiz+'Backend/Admin/consulta_crear_admin.php', opciones)
    .then(function (response) {
        hideLoader();
        if (response.ok) {
        // Se pasa la respuesta a formato JSON
        return response.json();
        }
    })
    .then(function (data) {
        // Se accede a la variable email_exists de data para hacer la verificacion.
        console.log(data.email_exists)
        if(data.email_exists){
        alert('Ese email ya existe')
    }else{
        alert('Nuevo administrador creado correctamente')
        window.location.reload()
        }
    })
    .catch(function (error) {
        console.error('Error:', error);
    });
    }


});


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
                });
            
        })
    })
}
    
function guardarAdmin() {
    Array.from(document.querySelectorAll('.gestionar-generales-guardar-btn-admin')).forEach((element)=>{
        element.addEventListener('click', ()=>{
            let formData = new FormData();
            formData.append('phoneUser', document.getElementById(`gestionar-admin-admin-form-abrir-admin-content-child-datos-cont-tel-${element.getAttribute('correo')}`).value);
            formData.append('nameLastnameUser', document.getElementById(`gestionar-admin-admin-form-abrir-admin-content-child-datos-cont-nA-${element.getAttribute('correo')}`).value);
            formData.append('email', document.getElementById(`gestionar-admin-admin-form-abrir-admin-content-child-datos-cont-email-${element.getAttribute('correo')}`).value);
            
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