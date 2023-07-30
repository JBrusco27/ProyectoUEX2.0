document.addEventListener('DOMContentLoaded', ()=>{

  function handleInputFocus(input, label) {
    input.addEventListener('focus', () => {
      label.style.transform = 'translateY(-25px)';
      label.style.fontSize = '13px';
    });
  
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
    document.getElementById('form').addEventListener('submit',async (event) =>{
    let email = document.getElementById('form-email').value;
    let pswd = document.getElementById('form-pswd').value;
    let emailTest = /^[A-Za-z0-9._%+-áéíóúÁÉÍÓÚ]{1,30}@[A-Za-z0-9-]{1,20}\.[A-Za-záéíóúÁÉÍÓÚ]{2,8}$/;
    let pswdTest = new RegExp('^[a-zA-Z0-9!@#$%^&*()-=+]{8,30}$');
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
      if (response.ok) {
        return response.json(); // Parsear la respuesta como JSON
      }
    })
    .then(function (data) {
      // Acceder a la variable log dentro del objeto data
      if(!data ){
        event.preventDefault();
        document.querySelector('.pswd-bd-valid-warning-content').style.display = 'flex';
        setTimeout(() => {
          document.querySelector('.pswd-bd-valid-warning-content').style.opacity='0.8';
        }, 100);
      }else{
        document.querySelector('.pswd-bd-valid-warning-content').style.opacity='0';
        setTimeout(() => {
          document.querySelector('.pswd-bd-valid-warning-content').style.display = 'none';
        }, 200);
      }
    })
    .catch(function (error) {
      console.error('Error:', error);
    });
  }else{
    event.preventDefault();
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