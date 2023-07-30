document.addEventListener('DOMContentLoaded', ()=>{
  
  const textarea = document.getElementById('form-message');
  textarea.style.height = 'auto';
  
  // Se agranda el input mientras se escribe
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  });


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
  
  const name = document.getElementById('form-name');
  const phone = document.getElementById('form-phone');
  const email = document.getElementById('form-email');
  const labelName = document.querySelector(`label[for="form-name"]`);
  const labelPhone = document.querySelector(`label[for="form-phone"]`);
  const labelEmail = document.querySelector(`label[for="form-email"]`);
  
  handleInputFocus(name, labelName);
  handleInputFocus(phone, labelPhone);
  handleInputFocus(email, labelEmail);
  
});