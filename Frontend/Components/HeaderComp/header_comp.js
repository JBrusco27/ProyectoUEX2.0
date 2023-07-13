document.addEventListener('DOMContentLoaded', ()=> {
  let active = true;

  const preferencesDropdownContent = document.querySelector("#preferences-dropdown-content");
  const preferencesDropdownContentView = document.querySelector("#preferences-dropdown-content-view");
  const preferencesDropdownContentAction = document.getElementById("preferences-dropdown-content-action");


    var screenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;

    if(screenWidth < 700){
      document.querySelector('.preferences-dropdown-profile-name').style.display='none';
    }
  
  //Hace un toggle para el preferences dropdown. 
  function togglePreferencesDropDown(){
    if (active) {
      preferencesDropdownContentAction.style.display = "inline-block";
      
      document.querySelector(".arrow-icon").style.transform = "rotate(90deg)";
      if(screenWidth < 700){
        document.querySelector('.preferences-dropdown-profile-name').style.display='inline-block';
      }
      active = false;
    } else {
      preferencesDropdownContentAction.style.display = "none";
      preferencesDropdownContent.style.width = "";
      document.querySelector(".arrow-icon").style.transform = "rotate(0deg)";
      if(screenWidth < 700){
        document.querySelector('.preferences-dropdown-profile-name').style.display='none';
      }
      active = true;
    }
  }
  preferencesDropdownContentView.addEventListener('click', function(event) {
    togglePreferencesDropDown();
  });
  
  //Hace un toggle para llevar la pagina actual hacia el costado y mostrar el menu
  let active2 = true;
  document.querySelector(".menu-icon").addEventListener('click', function() {
    if (active2) {
      document.querySelector("#wrap-container").classList.add("wrap-container-active");
      document.querySelector(".container").style.borderRadius = "50px";
      active2 = false;
    } else {
      document.querySelector(".container").style.borderRadius = "";
      document.querySelector("#wrap-container").classList.remove("wrap-container-active");
      active2 = true;
    }
  });  
  
  
  //Hace un toggle para llevar la pagina actual hacia el costado y mostrar el menu
  document.querySelector("#nav-close-icon").addEventListener('click', function() {
      if (active2) {
        document.querySelector("#wrap-container").classList.add("wrap-container-active");
        document.querySelector(".container").style.borderRadius = "50px";
        active2 = false;
      } else {
        document.querySelector(".container").style.borderRadius = "";
        document.querySelector("#wrap-container").classList.remove("wrap-container-active");
        active2 = true;
      }
  });  

  
  //Aparece configuracion
  document.querySelector('#header-config-action').addEventListener('click', ()=>{
    document.querySelector('.config-container').style.height="100%";     
    document.querySelector('html').style.overflow="hidden"; 
  });


//Hover al preferences dropdown
document.querySelector('.preferences-dropdown-content').addEventListener('mouseenter',()=>{
  let preferencesDropDownContent = document.querySelector('.preferences-dropdown-content');
  if(active && screenWidth > 700){
    document.querySelector('.preferences-dropdown-content').style.width=preferencesDropDownContent.clientWidth+18+'px';
  }
})
document.querySelector('.preferences-dropdown-content').addEventListener('mouseleave',()=>{
  let preferencesDropDownContent = document.querySelector('.preferences-dropdown-content');
  if(active && screenWidth > 700){
    document.querySelector('.preferences-dropdown-content').style.width=preferencesDropDownContent.clientWidth-18+'px';
  }
});

//Cerrar preferences dropdown al clickar fuera
document.addEventListener('click', ()=>{
  let preferencesDropDownContent = document.querySelector('.preferences-dropdown-content');
  if(!preferencesDropDownContent.contains(event.target) && !active){
    togglePreferencesDropDown();
  }
}); 


});


