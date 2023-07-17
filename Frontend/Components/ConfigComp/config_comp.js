
document.addEventListener('DOMContentLoaded',()=>{
  //Se oculta configuración
  document.querySelector('.close-config').addEventListener('click', ()=>{
    document.querySelector('.config-container').style.height="0";
    document.querySelector('html').style.overflow="initial";
  });

  // Aparece configuracion
  document.getElementById('header-config-action').addEventListener('click', ()=>{
    document.querySelector('.config-container').style.height="100%";     
    document.querySelector('html').style.overflow="hidden"; 
  });

});