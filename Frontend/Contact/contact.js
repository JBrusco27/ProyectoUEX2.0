var textarea = document.getElementById('form-message');
textarea.style.height = 'auto';

  textarea.addEventListener('input', function() {
    this.style.height = 'auto';
    this.style.height = this.scrollHeight + 'px';
  });