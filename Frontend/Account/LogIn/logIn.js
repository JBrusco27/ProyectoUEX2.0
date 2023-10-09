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

  // Se sube el label al hacer focus al input 
  function handleInputFocus(input, label) {
    input.addEventListener('focus', () => {
      label.style.transform = 'translateY(-25px)';
      label.style.fontSize = '13px';
    });
  
    // Se baja el label al quitar focus al input  
    input.addEventListener('blur', () => {
      if (input.value.trim() === "") {
        label.style.transform = 'translateY(0px)';
        label.style.fontSize = '16px';
      }
    });
  }
  

  const emailForm = document.getElementById('form-email');
  const pswdForm = document.getElementById('form-pswd');

  const labelEmailForm = document.querySelector(`label[for="form-email"]`);
  const labelPswdForm = document.querySelector(`label[for="form-pswd"]`);
  
  handleInputFocus(emailForm, labelEmailForm);
  handleInputFocus(pswdForm, labelPswdForm);

    //Verificar datos y mostrar restricciones
    document.getElementById('submit').addEventListener('click', (event) =>{
    let email = document.getElementById('form-email').value;
    let pswd = document.getElementById('form-pswd').value;
    let emailTest = /^[A-Za-z0-9._%+-áéíóúÁÉÍÓÚ]{1,30}@[A-Za-z0-9-]{1,20}\.[A-Za-záéíóúÁÉÍÓÚ]{2,8}$/;
    let pswdTest = new RegExp('^[a-zA-Z0-9!@#$%^&*()-_=+]{8,30}$');
    if(emailTest.test(email) && pswdTest.test(pswd)){
        console.log("Nice!");
    }

    let hasError = false; // Variable para detección de errores

    // Validación del email
    if (!emailTest.test(email)) {
        document.querySelector('.email-warning-content').style.display = 'flex';
        setTimeout(() => {
          document.querySelector('.email-warning-content').style.opacity='0.8';
        }, 100);
        hasError = true;
      } else {
        document.querySelector('.email-warning-content').style.opacity='0';
        setTimeout(() => {
          document.querySelector('.email-warning-content').style.display = 'none';
        }, 200);
      }
  
      // Validación de las contraseñas
      if (!pswdTest.test(pswd)) {
        document.querySelector('.pswd-warning-content').style.display = 'flex';
        setTimeout(() => {
          document.querySelector('.pswd-warning-content').style.opacity='0.8';
        }, 100);
        hasError = true;
      } else {
        document.querySelector('.pswd-warning-content').style.opacity='0';
        setTimeout(() => {
          document.querySelector('.pswd-warning-content').style.display = 'none';
        }, 200);
      }


  // Aquí puedes acceder directamente a la variable pswd_valid
  if(!hasError){
    showLoader();
    let formData = new FormData();
    formData.append('formEmail', email);
    formData.append('formPswd', pswd);
    
    let opciones = {
      method: 'POST',
      body: formData
    };
    
    fetch('../../../Backend/Requests/consulta_sign_in.php', opciones)
    .then(function (response) {
      // Verificar si la solicitud fue exitosa
      hideLoader();
      if (response.ok) {
        return response.json(); // Parsear la respuesta como JSON
      }
    })
    .then(function (data) {
      if(!data){
        document.querySelector('.pswd-bd-valid-warning-content').style.display = 'flex';
        setTimeout(() => {
          document.querySelector('.pswd-bd-valid-warning-content').style.opacity='0.8';
        }, 100);
      }else{
        window.location.href="../../../index.php";
        document.querySelector('.pswd-bd-valid-warning-content').style.opacity='0';
        setTimeout(() => {
          document.querySelector('.pswd-bd-valid-warning-content').style.display = 'none';
        }, 200);
      }
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
  }
  
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