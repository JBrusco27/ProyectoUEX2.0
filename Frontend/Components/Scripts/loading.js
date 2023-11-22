
// Función para crear y mostrar la pantalla de carga
function showLoader() {
    if( document.querySelector('.loader')){
  
    }else{
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

  
  console.log('xd');
  showLoader();

  document.onreadystatechange = function () {
      if (document.readyState !== "complete") {
          console.log('Cargando...');
      } else {
          hideLoader();
          console.log('Página cargada');
      }
  };