let screenWidthActual = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 

// Reiniciar pagina en cambios del ancho de pantalla
setInterval(() => {
  const nuevoScreenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  if (nuevoScreenWidth !== screenWidthActual) {
    location.reload();
    screenWidthActual = nuevoScreenWidth;
  }
}, 500);