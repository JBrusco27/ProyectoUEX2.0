document.addEventListener('DOMContentLoaded', ()=>{
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

  function handleInputFocus(input, label) {
    // Se sube el label al hacer focus al input  
    input.addEventListener('focus', () => {
      label.style.display = 'none';
    });
    
    // Se baja el label al quitar focus al input  
    input.addEventListener('blur', () => {
      if (input.value.trim() === "") {
        label.style.display = 'flex';
      }
    });
  }
  
  const EmailForm = document.getElementById('form-email');
  const labelEmailForm = document.querySelector(`label[for="form-email"]`);
  handleInputFocus(EmailForm, labelEmailForm);
  
  document.getElementById('submit').addEventListener('click', ()=>{
    let hasError = false;
    
  let emailTest = /^[A-Za-z0-9._%+-áéíóúÁÉÍÓÚ]{1,30}@[A-Za-z0-9-]{1,20}\.[A-Za-záéíóúÁÉÍÓÚ]{2,8}$/;
  
  // Validación del email
  if (!emailTest.test(EmailForm.value)) {
    document.querySelector('.email-exists-warning-content').style.display = 'flex';
    setTimeout(() => {
      document.querySelector('.email-exists-warning-content').style.opacity='0.8';
    }, 100);
    hasError = true;
  } else {
    document.querySelector('.email-exists-warning-content').style.opacity='0';
    setTimeout(() => {
      document.querySelector('.email-exists-warning-content').style.display = 'none';
    }, 200);
  }
  
  let columnNumber = localStorage.getItem('columnNumber');
  
  // Al no encontrar errores se hace una solicitud para enviar el email para resetear la contraseña
  if(!hasError){
    showLoader();
    let formData = new FormData();
    formData.append('formEmail', EmailForm.value);
    
    let opciones = {
      method: 'POST',
      body: formData
    };
    
    fetch('/Backend/Requests/consulta_forgotPswd.php?columnNumber='+columnNumber, opciones)
    .then(function (response) {
      // Verificar si la solicitud fue exitosa
      hideLoader();
      if (response.ok) {
        return response.json(); // Parsear la respuesta como JSON
      }
    })
    .then(function (data) {
      if(data.email_sended){
        localStorage.setItem('forgot_email', EmailForm.value);
        document.querySelector('.verifyWasSend-container').style.height='100%';
        
        document.querySelector('.email-exists-warning-content').style.opacity='0';
        document.querySelector('.email-warning-content').style.opacity='0';
        setTimeout(() => {
          document.querySelector('.email-warning-content').style.display = 'none';
          document.querySelector('.email-exists-warning-content').style.display = 'none';
        }, 200);

      }else if(!data.email_exists){
        document.querySelector('.email-warning-content').style.display = 'flex';
        setTimeout(() => {
          document.querySelector('.email-warning-content').style.opacity='0.8';
        }, 100);
      }

    })
    .catch(function (error) {
      console.error('Error:', error);
    });
    }
  });


});