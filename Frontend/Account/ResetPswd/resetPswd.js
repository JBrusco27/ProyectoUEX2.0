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
  

  const PswdForm = document.getElementById('form-pswd');
  const ConfPswdForm = document.getElementById('form-confPswd');
  
  const labelPswdForm = document.querySelector(`label[for="form-pswd"]`);
  const labelConfPswdForm = document.querySelector(`label[for="form-confPswd"]`);
  
  handleInputFocus(PswdForm, labelPswdForm);
  handleInputFocus(ConfPswdForm, labelConfPswdForm);
  
  //Verificar datos y mostrar restricciones
  document.getElementById('submit').addEventListener('click', () =>{
    // Función para obtener el valor de una cookie por su nombre
    function getCookieValue(cookieName) {
      const cookies = document.cookie.split(';');
      for (let i = 0; i < cookies.length; i++) {
          const cookie = cookies[i].trim();
          if (cookie.startsWith(cookieName + '=')) {
              return cookie.substring(cookieName.length + 1);
          }
      }
      return null; // Cookie no encontrada
    }

    let param = new URLSearchParams(window.location.search);
    let verif_code = param.get('codigo_verif_reset');

    if(verif_code == getCookieValue('codigo_verif_reset')){
      const Pswd = document.getElementById('form-pswd').value;
      const confPswd = document.getElementById('form-confPswd').value;
      let pswdTest = new RegExp('^[a-zA-Z0-9!@#$%^&*()-=+]{8,30}$');
      
      let hasError = false; // Variable para detección de errores
      
      // Validación de las contraseñas
      if (!pswdTest.test(Pswd) || !pswdTest.test(confPswd)) {
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
        
        // Validación de las contraseñas
        if (Pswd != confPswd) {
          document.querySelector('.pswd-are-same-warning-content').style.display = 'flex';
          setTimeout(() => {
            document.querySelector('.pswd-are-same-warning-content').style.opacity='0.8';
          }, 100);
          hasError = true;
        } else {
          document.querySelector('.pswd-are-same-warning-content').style.opacity='0';
          setTimeout(() => {
              document.querySelector('.pswd-are-same-warning-content').style.display = 'none';
          }, 200);
        }

        if(!hasError){
          showLoader();
          let formData = new FormData();
          formData.append('formPswd', Pswd);
          formData.append('formConfPswd', confPswd);
          formData.append('formEmail', localStorage.getItem('forgot_email'));
          
          let opciones = {
            method: 'POST',
            body: formData
          };
          
          fetch(raiz+'Backend/Requests/consulta_resetPswd.php', opciones)
          .then(function (response) {
            hideLoader();
            // Verificar si la solicitud fue exitosa
            if (response.ok) {
              return response.json(); // Parsear la respuesta como JSON
            }
          })
          .then(function (data) {
            if(!data.pswd_are_dif){
              document.querySelector('.pswd-are-same-bd-warning-content').style.display = 'flex';
              setTimeout(() => {
                document.querySelector('.pswd-are-same-bd-warning-content').style.opacity='0.8';
              }, 100);
              hasError = true;
            }else{
              document.querySelector('.pswd-are-same-bd-warning-content').style.opacity='0';
              setTimeout(() => {
                document.querySelector('.pswd-are-same-bd-warning-content').style.display = 'none';
              }, 200);
            }
            if(!data.pswd_valid){
              document.querySelector('.pswd-bd-valid-warning-content').style.display = 'flex';
              setTimeout(() => {
                document.querySelector('.pswd-bd-valid-warning-content').style.opacity='0.8';
              }, 100);
              hasError = true;
            }else{
              document.querySelector('.pswd-bd-valid-warning-content').style.opacity='0';
              setTimeout(() => {
                document.querySelector('.pswd-bd-valid-warning-content').style.display = 'none';
              }, 200);
            }
            
            if(!hasError){
              window.location.href=raiz+"Frontend/Account/VerifyComplete/verifyComplete.php ";
              document.querySelector('.pswd-bd-valid-warning-content').style.opacity='0';
              document.querySelector('.pswd-are-same-warning-content').style.opacity='0';
              setTimeout(() => {
                document.querySelector('.pswd-bd-valid-warning-content').style.display = 'none';
                document.querySelector('.pswd-are-same-warning-content').style.display = 'none';
              }, 200);
            }
        })
        .catch(function (error) {
          console.error('Error:', error);
        });
      }
    }else{
      
    }
    
  });
  });