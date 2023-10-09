document.addEventListener('DOMContentLoaded', ()=>{
  
  const textarea = document.getElementById('form-message');
  textarea.style.height = 'auto';
  
  // Se agranda el input mientras se escribe
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  });


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
  
  const name = document.getElementById('form-name');
  const phone = document.getElementById('form-phone');
  const email = document.getElementById('form-email');
  const labelName = document.querySelector(`label[for="form-name"]`);
  const labelPhone = document.querySelector(`label[for="form-phone"]`);
  const labelEmail = document.querySelector(`label[for="form-email"]`);
  
  handleInputFocus(name, labelName);
  handleInputFocus(phone, labelPhone);
  handleInputFocus(email, labelEmail);

  document.getElementById('submit').addEventListener('click', ()=>{
    
    let userPhone = document.getElementById('form-phone');
    let userEmail = document.getElementById('form-email');
    let userName = document.getElementById('form-name');
    let userMessage = document.getElementById('form-message');
    
    let formData = new FormData();
    formData.append('formEmail', userEmail.value);
    formData.append('formName', userName.value);
    formData.append('formPhone', userPhone.value);
    formData.append('formMessage', userMessage.value);
    
    let opciones = {
      method: 'POST',
      body: formData
    };
    
    // Este fetch se hace para traer la variable email_exists que contiene la verficiacion de si el email ya existe o no
    showLoader()
    fetch('../../Backend/viauy_email.php', opciones)
    .then(function (response) {
      if (response.ok) {
        // Se pasa la respuesta a formato JSON
        return response.json(); 
      }
    })
    .then(function (data) {
      hideLoader()
      let columnNumber = parseInt(localStorage.getItem('columnNumber'));
      switch(columnNumber){
        case 0:
          swal("Email sended", "Thank you for contacting Viauy", "success");
          break;
        case 1:
          swal("Email enviado", "Gracias por contactarte con Viauy", "success");
          break;
        case 2:
          swal("Email enviado", "Obrigado por entrar em contato com Viauy", "success");
          break;
      }
    })
  .catch(function (error) {
    console.error('Error:', error);
  });
});

// Lógica para dar formato al número de teléfono
let phoneInput = document.getElementById('form-phone');
phoneInput.addEventListener('input', () => {
  const putSpaces = /\d{6}/g;
  phoneInput.value = phoneInput.value.replace(putSpaces, match => {
    return match.replace(/(\d{3})(?!$)/g, "$1 ");
  });
});

});