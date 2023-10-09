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
    
  
    const oldPswdForm = document.getElementById('form-pswd');
    const newPswdForm = document.getElementById('form-confPswd');
    
    const labelOldPswdForm = document.querySelector(`label[for="form-pswd"]`);
    const labelNewPswdForm = document.querySelector(`label[for="form-confPswd"]`);
    
    handleInputFocus(newPswdForm, labelNewPswdForm);
    handleInputFocus(oldPswdForm, labelOldPswdForm);
    
    //Verificar datos y mostrar restricciones
    document.getElementById('submit').addEventListener('click', () =>{
      const newPswd = document.getElementById('form-confPswd').value;
      let pswdTest = new RegExp('^[a-zA-Z0-9!@#$%^&*()-=+]{8,30}$');
      
      let hasError = false; // Variable para detección de errores
        
        // Validación de las contraseñas
        if (!pswdTest.test(newPswd)) {
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

        // Al no encontrar errores se hace una solicitud para cambiar la contraseña
        if(!hasError){
          showLoader();
          let formData = new FormData();
          formData.append('formOldPswd', oldPswdForm.value);
          formData.append('formNewPswd', newPswdForm.value);
          formData.append('columnNumber',localStorage.getItem('columnNumber'));
          
          let opciones = {
            method: 'POST',
            body: formData
          };
          
          fetch(raiz+'../Backend/Requests/consulta_changePswd.php', opciones)
          .then(function (response) {
            hideLoader();
            // Verificar si la solicitud fue exitosa
            if (response.ok) {
              return response.json(); // Parsear la respuesta como JSON
            }
          })
          .then(function (data) {
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
            
            if(!data.pswd_are_dif){
              document.querySelector('.pswd-arent-same-warning-content').style.display = 'flex';
              setTimeout(() => {
                document.querySelector('.pswd-arent-same-warning-content').style.opacity='0.8';
              }, 100);
              hasError = true;
            }else{
              document.querySelector('.pswd-arent-same-warning-content').style.opacity='0';
              setTimeout(() => {
                document.querySelector('.pswd-arent-same-warning-content').style.display = 'none';
              }, 200);
              
            }
            if(!hasError){
              document.querySelector('.verifyWasSend-container').style.height='100%';
              document.querySelector('.pswd-bd-valid-warning-content').style.opacity='0';
              document.querySelector('.pswd-arent-same-warning-content').style.opacity='0';
              setTimeout(() => {
                document.querySelector('.pswd-bd-valid-warning-content').style.display = 'none';
                document.querySelector('.pswd-arent-same-warning-content').style.display = 'none';
              }, 200);
            }
          })
          .catch(function (error) {
            console.error('Error:', error);
          });
        }
        
    });
});