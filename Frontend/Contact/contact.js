document.addEventListener('DOMContentLoaded', ()=>{
  
  const textarea = document.getElementById('form-message');
  textarea.style.height = 'auto';
  
  // Se agranda el input mientras se escribe
  textarea.addEventListener('input', () => {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });
  
});