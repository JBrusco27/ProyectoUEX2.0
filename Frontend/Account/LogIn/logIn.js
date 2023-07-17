document.addEventListener('DOMContentLoaded', ()=>{

    //Verificar datos y mostrar restricciones
    document.getElementById('form').addEventListener('submit', ()=>{

    let email = document.getElementById('form-email').value;
    let pswd = document.getElementById('form-pswd').value;
    let emailTest = new RegExp('^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    let pswdTest = new RegExp('^[a-zA-Z0-9!@#$%^&*()-=+]{8,30}$');
    if(emailTest.test(email) && pswdTest.test(pswd)){
        console.log("Nice!");
    }

    let hasError = false; // Variable para detección de errores

    // Validación del email
    if (!emailTest.test(email)) {
        document.querySelector('.email-warning-content').style.display = 'flex';
        setTimeout(() => {
          document.querySelector('.email-warning-content').style.opacity='0.6';
        }, 100);
        hasError = true;
      } else {
        document.querySelector('.email-warning-content').style.opacity='0';
        setTimeout(() => {
          document.querySelector('.email-warning-content').style.display = 'none';
        }, 200);
      }
  
      // Validación de las contraseñas
      if (!pswdTest.test(pswd) || !pswdTest.test(confPswd)) {
        document.querySelector('.pswd-warning-content').style.display = 'flex';
        setTimeout(() => {
          document.querySelector('.pswd-warning-content').style.opacity='0.6';
        }, 100);
        hasError = true;
      } else {
        document.querySelector('.pswd-warning-content').style.opacity='0';
        setTimeout(() => {
          document.querySelector('.pswd-warning-content').style.display = 'none';
        }, 200);
      }

    // No enviar formulario en presencia de errores
    if (hasError) {
        event.preventDefault();
    }

});

});