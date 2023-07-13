
document.addEventListener('DOMContentLoaded',()=>{

    

  //Desaparece configuracion
  document.querySelector('.close-config').addEventListener('click', ()=>{
    document.querySelector('.config-container').style.height="0";
    document.querySelector('html').style.overflow="initial";
  });

});