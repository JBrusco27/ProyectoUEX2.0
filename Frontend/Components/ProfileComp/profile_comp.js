document.addEventListener('DOMContentLoaded',()=>{

let active = false;

// Se oculta configuración
document.querySelector('.icon-close-profile').addEventListener('click', () => {
  closeConfig();
});

// Aparece configuración
document.getElementById('header-profile-action').addEventListener('click', () => {
  openConfig();
});

// Cerrar seccion configuracion
function openConfig() {
  if(innerWidth <= 900){
    document.querySelector('.profile-container').style.width = "100%";
  }else{
    document.querySelector('.profile-container').style.width = "45%";
  }
  document.querySelector('html').style.overflow = "hidden";
  active = true;
}

// Cerrar seccion configuracion
function closeConfig() {
  document.querySelector('.profile-container').style.width = "0";
  document.querySelector('html').style.overflow = "initial";
  active = false;
}


let opciones = {
  method: 'POST',
  headers: {
        'Content-Type': 'application/json'
    }
};

// Se hace una solicitud a log_status para saber si hay un usuario logeado o no
fetch(raiz+'Backend/log_status.php', opciones)
.then(function (response) {
  // Verificar si la solicitud fue exitosa
  if (response.ok) {
    return response.json(); // Parsear la respuesta como JSON
    }
  })
  .then(function (data) {
    // Acceder a la variable log dentro del objeto data
    let log = data.log;
    if(log){
      document.querySelector('.profile-form').style.display="flex";
      document.querySelector('.account-item').style.display="flex";
      document.querySelector('.log-message').style.display="none";
      for (let i = 0; i < 3; i++) {
        document.querySelector('.profile-form')[i].disabled = false;
      }
      // Manejo del perfil y aparicion del boton de guardar
      fetch(raiz+'Backend/user_cookie.php')
      .then(function (response) {
        // Verificar si la solicitud fue exitosa
        if (response.ok) {
          return response.json(); // Parsear la respuesta como JSON
        }
      })
      .then(function (data) {
        profileName = document.getElementById('profile-nameLastname-input');
        profilePhone = document.getElementById('profile-phone-input');
        let nombreUsuario = data.nombre_usuario;
        let emailUsuario = data.email_usuario;
        let telefonoUsuario = data.phone_usuario;
        profileName.value = nombreUsuario;
        document.getElementById('profile-email-input').disabled = true;
        document.getElementById('profile-email-input').value = emailUsuario;
        profilePhone.value = telefonoUsuario;
        profilePhone.value =  profilePhone.value.replace(/\D/g, "").replace(/(\d{3})(?=\d)/g, "$1  ");
        
        function enableDisableSaveBtn(){
          if(profileName.value === nombreUsuario && parseInt(profilePhone.value.replace(/\s/g, '')) == telefonoUsuario){
            document.querySelector('.save-account-btn').disabled=true;
          }else{
            document.querySelector('.save-account-btn').disabled=false;
          }
        }

        profilePhone.addEventListener('input',()=>{
        profilePhone.value =  profilePhone.value.replace(/\D/g, "").replace(/(\d{3})(?=\d)/g, "$1  ");
          enableDisableSaveBtn();
        });
        
        profileName.addEventListener('input',()=>{
          enableDisableSaveBtn();
        });
        
      })
      .catch(function (error) {
        console.error('Error:', error);
      });
    }else{
        document.querySelector('.profile-form').style.display="none";
        document.querySelector('.log-message').style.borderRadius="15px";
        document.querySelector('.account-item').style.display="none";
        document.querySelector('.log-message').style.display="flex";
        for (let i = 0; i < 3; i++) {
          document.querySelector('.profile-form')[i].disabled = true;
        }
    }
})
.catch(function (error) {
   console.error('Error:', error);
});

document.querySelector('.save-account-btn').addEventListener('click', ()=>{
  let formData = new FormData();
  formData.append('phoneUser', document.getElementById('profile-phone-input').value.replace(/\D/g, ""));
  formData.append('nameLastnameUser', document.getElementById('profile-nameLastname-input').value);
  
  let opciones2 = {
    method: 'POST',
    body: formData
  };
  
  fetch(raiz+'Backend/Requests/consulta_change_profile.php', opciones2)
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
    document.querySelector('.valid-name-warning-content').style.display = 'flex';
    setTimeout(() => {
      document.querySelector('.valid-name-warning-content').style.opacity='0.6';
    }, 100);
  } else {
    document.querySelector('.valid-name-warning-content').style.opacity='0';
    setTimeout(() => {
      document.querySelector('.valid-name-warning-content').style.display = 'none';
    }, 200);
  }
  if(!data.telefono_valido){
    hasError =true;
    document.querySelector('.valid-phone-warning-content').style.display = 'flex';
    setTimeout(() => {
      document.querySelector('.valid-phone-warning-content').style.opacity='0.6';
    }, 100);
  } else {
    document.querySelector('.valid-phone-warning-content').style.opacity='0';
    setTimeout(() => {
      document.querySelector('.valid-phone-warning-content').style.display = 'none';
    }, 200);
  }
  
  if(!hasError){
    window.location.reload();
  }

})
.catch(function (error) {
  console.error('Error:', error);
  });
});

  // Lógica para cerrar los mensajes de advertencia
  document.querySelectorAll('.close-warning').forEach(element => {
    element.addEventListener('click', () => {
      const warningContent = element.parentNode;
      warningContent.style.opacity = '0';
      setTimeout(() => {
        warningContent.style.display = 'none';
      }, 200);
    });
  });

  
});