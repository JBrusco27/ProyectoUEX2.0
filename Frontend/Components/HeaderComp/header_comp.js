document.addEventListener('DOMContentLoaded', ()=> {
  
  let active = true;
  let active2 = true;
  const PREFERENCES_DROPDOWN_CONTENT = document.getElementById("preferences-dropdown-content");
  const PREFERENCES_DROPDOWN_CONTENT_VIEW = document.getElementById("preferences-dropdown-content-view");
  const PREFERENCES_DROPDOWN_CONTENT_ACTION = document.getElementById("preferences-dropdown-content-action");

  // Ancho de pantalla
  var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

  // Ocultar nombre de usuario segun ancho de pantalla
    if(screenWidth < 700){
      document.querySelector('.preferences-dropdown-profile-name').style.display='none';
    }
  
  // [ FUNCTION ] Hace un toggle para el menu de preferencias y usuario. 
  function togglePreferencesDropDown(){
    if (active) {
      PREFERENCES_DROPDOWN_CONTENT_ACTION.style.display = "inline-block";

      document.querySelector(".arrow-icon").style.transform = "rotate(90deg)";
      if(screenWidth < 700){
        PREFERENCES_DROPDOWN_CONTENT.style.borderRadius="35px 20px 20px 20px";
        document.querySelector('.preferences-dropdown-profile-name').style.display='inline-block';
      }
      active = false;
    } else {
      PREFERENCES_DROPDOWN_CONTENT_ACTION.style.display = "none";
      PREFERENCES_DROPDOWN_CONTENT.style.width = "";
      PREFERENCES_DROPDOWN_CONTENT.style.borderRadius="";
      document.querySelector(".arrow-icon").style.transform = "rotate(0deg)";
      if(screenWidth < 700){
        document.querySelector('.preferences-dropdown-profile-name').style.display='none';
      }
      active = true;
    }
  }
  
  // [ FUNCTION ] Hace un toggle para llevar la pagina actual hacia el costado y mostrar el menu de navegacion mobile
  function toggleNavMenuMobile(){
    if (active2) {
      document.getElementById("wrap-container").classList.add("wrap-container-active");
      document.querySelector(".container").style.borderRadius = "50px";
      active2 = false;
    } else {
      document.querySelector(".container").style.borderRadius = "";
      document.getElementById("wrap-container").classList.remove("wrap-container-active");
      active2 = true;
    }
  }

  // [ FUNCTION ] Cerrar preferences dropdown al clickar fuera
  function closeMenuOutside(){
    if(!PREFERENCES_DROPDOWN_CONTENT.contains(event.target) && !active){
      togglePreferencesDropDown();
    }   
  }

  // [ EXECUTE ] togglePreferencesDropDown
  PREFERENCES_DROPDOWN_CONTENT_VIEW.addEventListener('click', function(event) {
    togglePreferencesDropDown();
  });
  
  // [ EXECUTE ]  closeMenuOutside
  document.addEventListener('click', ()=>{
    closeMenuOutside();
  }); 
  
  
  // [ EXECUTE ] toggleNavMenuMobile
  document.querySelector(".menu-icon").addEventListener('click', function() {
    toggleNavMenuMobile();
  });  
  
  // [ EXECUTE ] toggleNavMenuMobile
  document.getElementById("nav-close-icon").addEventListener('click', function() {
      toggleNavMenuMobile();
  });  


  let opciones = {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
};

  fetch('../../Backend/log_status.php', opciones)
  .then(function (response) {
    // Verificar si la solicitud fue exitosa
    if (response.ok) {
      return response.json(); // Parsear la respuesta como JSON
    }
  })
  .then(function (data) {
    // Acceder a la variable log dentro del objeto data
    let log = data.log;
    if(log){
      document.getElementById('header-logout-action').style.display="flex";
      document.getElementById('header-login-action').style.display="none";
    }else{
      document.getElementById('header-logout-action').style.display="none";
      document.getElementById('header-login-action').style.display="flex";
    }
  })
  .catch(function (error) {
    console.error('Error:', error);
  });

});


