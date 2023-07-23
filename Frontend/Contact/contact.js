document.addEventListener('DOMContentLoaded', ()=>{
  
  const textarea = document.getElementById('form-message');
  textarea.style.height = 'auto';
  
  // Se agranda el input mientras se escribe
  textarea.addEventListener('input', () => {
    textarea.style.height = 'auto';
    textarea.style.height = textarea.scrollHeight + 'px';
  });
  
});