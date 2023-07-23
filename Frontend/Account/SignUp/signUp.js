document.addEventListener('DOMContentLoaded', () => {
      
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
  document.getElementById('form').addEventListener('submit', (event) => {
    let nameLastnameTest = /^[A-Za-záéíóúÁÉÍÓÚ]{2,20}\s[A-Za-záéíóúÁÉÍÓÚ]{2,20}$/;
    let emailTest = /^[A-Za-z0-9._%+-áéíóúÁÉÍÓÚ]{1,30}@[A-Za-z0-9-]{1,20}\.[A-Za-záéíóúÁÉÍÓÚ]{2,8}$/;
    let pswdTest = /^(?=.*[!@#$%^&*()-_=+])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{8,30}$/;
    let phoneTest = /^[\d ]{11,11}$/;

    let nameLastname = nameInput.value;
    let phone = phoneInput.value;
    let email = document.getElementById('form-email').value;
    let pswd = document.getElementById('form-pswd').value;
    let confPswd = document.getElementById('form-confPswd').value;

    let hasError = false; // Variable para detección de errores

    // Validación del nombre
    if (!nameLastnameTest.test(nameLastname)) {
      document.querySelector('.name-warning-content').style.display = 'flex';
      setTimeout(() => {
        document.querySelector('.name-warning-content').style.opacity='0.6';
      }, 100);
      hasError = true;
    } else {
      document.querySelector('.name-warning-content').style.opacity='0';
      setTimeout(() => {
        document.querySelector('.name-warning-content').style.display = 'none';
      }, 200);
    }

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

    // Validación de contraseñas iguales
    if (pswd !== confPswd) {
      document.querySelector('.difPswds-warning-content').style.display = 'flex';
      setTimeout(() => {
        document.querySelector('.difPswds-warning-content').style.opacity='0.6';
      }, 100);
      hasError = true;
    } else {
      document.querySelector('.difPswds-warning-content').style.opacity='0';
      setTimeout(() => {
        document.querySelector('.difPswds-warning-content').style.display = 'none';
      }, 200);
    }
    
    // Validación del teléfono
    if (!phoneTest.test(phone)) {
      document.querySelector('.phone-warning-content').style.display = 'flex';
      setTimeout(() => {
        document.querySelector('.phone-warning-content').style.opacity='0.6';
      }, 100);
      hasError = true;
    } else {
      document.querySelector('.phone-warning-content').style.opacity='0';
      setTimeout(() => {
        document.querySelector('.phone-warning-content').style.display = 'none';
      }, 200);
    }
    

    // Si no hay errores en el formulario se hace el fetch
    if(hasError){
      event.preventDefault();
    }else{

      // let formData = new FormData();
      // formData.append('formName', nameLastname);
      // formData.append('formPswd', pswd);
      // formData.append('formEmail', email);
      // formData.append('formConfPswd', confPswd);
      // formData.append('formPhone', phone);
      
      // let opciones = {
      //   method: 'POST',
      //   body: formData
      // };

      // // Este fetch se hace para traer la variable email_exists que contiene la verficiacion de si el email ya existe o no
      // fetch('../../../Backend/Requests/consulta_sign_up.php', opciones)
      // .then(function (response) {
      //   if (response.ok) {
      //     // Se pasa la respuesta a formato JSON
      //     return response.json();
      //   }
      // })
      // .then(function (data) {
      //   // Se accede a la variable email_exists de data para hacer la verificacion.
      //   if(data.email_exists){
      //     // Previene el envio del formulario
      //     event.preventDefault();
      //     document.querySelector('.emailExists-warning-content').style.display = 'flex';
      //     setTimeout(() => {
      //       document.querySelector('.emailExists-warning-content').style.opacity='0.6';
      //     }, 100);
      //   }else{
      //     document.querySelector('.emailExists-warning-content').style.opacity='0';
      //     setTimeout(() => {
      //       document.querySelector('.emailExists-warning-content').style.display = 'none';
      //     }, 200);
      //   }
      // })
      // .catch(function (error) {
      //   console.error('Error:', error);
      // });
    }


  });
    
  // Lógica para cerrar los mensajes de advertencia
  document.querySelectorAll('.close-warning').forEach(element => {
    element.addEventListener('click', () => {
      const warningContent = element.parentNode;
      warningContent.style.opacity = '0';
      setTimeout(() => {
        warningContent.style.display = 'none';
      }, 100);
    });
  });
});