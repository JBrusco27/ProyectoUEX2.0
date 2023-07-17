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
    let nameLastnameTest = /^[A-Za-z]{2,20}\s[A-Za-z]{2,20}$/;
    let emailTest = /^[A-Za-z0-9._%+-]{1,30}@[A-Za-z0-9-]{1,20}\.[A-Za-z]{2,8}$/;
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

    // Validación de contraseñasiguales
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

    // No enviar formulario en presencia de errores
    if (hasError) {
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
      }, 100);
    });
  });
});