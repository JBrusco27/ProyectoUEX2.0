
document.addEventListener('DOMContentLoaded',()=>{

  let active = false;

  // Se oculta configuración
  document.querySelector('.icon-close-config').addEventListener('click', () => {
    closeConfig();
  });
  
  // Aparece configuración
  document.getElementById('header-config-action').addEventListener('click', () => {
    openConfig();
  });
  
  // Cerrar preferences dropdown al hacer clic fuera
  document.addEventListener('click', (event) => {
    closeMenuOutside(event);
  });
  
  function openConfig() {
    if(innerWidth <= 900){
      document.querySelector('.config-container').style.width = "100%";
    }else{
      document.querySelector('.config-container').style.width = "45%";
    }
    document.querySelector('html').style.overflow = "hidden";
    active = true;
  }
  
  function closeConfig() {
    document.querySelector('.config-container').style.width = "0";
    document.querySelector('html').style.overflow = "initial";
    active = false;
  }
  
  
  // Cerrar menu de navegabilidad al hacer clic fuera
  function closeMenuOutside(event) {
    const configContainer = document.querySelector('.config-container');
    if (active && !document.getElementById('header-config-action').contains(event.target) && !configContainer.contains(event.target)) {
      closeConfig();
    }
  }

});