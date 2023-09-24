
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


// Cambiar el tema de la pagina
function addTheme1(){
  localStorage.setItem('localTheme', 1);
  ROOT.classList.add('theme1');
  ROOT.classList.remove('theme2');
  ROOT.classList.remove('theme3');
  ROOT.classList.remove('theme4');
  ROOT.classList.remove('theme5');
  ROOT.classList.remove('theme6');
}

// Cambiar el tema de la pagina
function addTheme2(){
  localStorage.setItem('localTheme', 2)
  ROOT.classList.add('theme2');
  ROOT.classList.remove('theme1');
  ROOT.classList.remove('theme3');
  ROOT.classList.remove('theme4');
  ROOT.classList.remove('theme5');
  ROOT.classList.remove('theme6');
}

// Cambiar el tema de la pagina
function addTheme3(){
  localStorage.setItem('localTheme', 3)
  ROOT.classList.add('theme3');
  ROOT.classList.remove('theme1');
  ROOT.classList.remove('theme2');
  ROOT.classList.remove('theme4');
  ROOT.classList.remove('theme5');
  ROOT.classList.remove('theme6');
}

// Cambiar el tema de la pagina
function addTheme4(){
  localStorage.setItem('localTheme', 4)
  ROOT.classList.add('theme4');
  ROOT.classList.remove('theme1');
  ROOT.classList.remove('theme2');
  ROOT.classList.remove('theme3');
  ROOT.classList.remove('theme5');
  ROOT.classList.remove('theme6');
}

// Cambiar el tema de la pagina
function addTheme5(){
  localStorage.setItem('localTheme', 5)
  ROOT.classList.add('theme5');
  ROOT.classList.remove('theme1');
  ROOT.classList.remove('theme2');
  ROOT.classList.remove('theme3');
  ROOT.classList.remove('theme4');
  ROOT.classList.remove('theme6');
}

// Cambiar el tema de la pagina
function addTheme6(){
  localStorage.setItem('localTheme', 6)
  ROOT.classList.add('theme6');
  ROOT.classList.remove('theme1');
  ROOT.classList.remove('theme2');
  ROOT.classList.remove('theme3');
  ROOT.classList.remove('theme4');
  ROOT.classList.remove('theme5');
}


const ROOT = document.documentElement;
  
const THEME_1 = document.getElementById('theme1Action');
const THEME_2 = document.getElementById('theme2Action');
const THEME_3 = document.getElementById('theme3Action');
const THEME_4 = document.getElementById('theme4Action');
const THEME_5 = document.getElementById('theme5Action');
const THEME_6 = document.getElementById('theme6Action');

let localTheme = parseInt(localStorage.getItem('localTheme'));``

// Se llama a la funcion de cambio de tema segun la variable del tema del localstorage
switch(localTheme){
  case 1:
    console.log('theme1')
    addTheme1();
    break;
  case 2:
    console.log('theme2')
    addTheme2();
    break;
  case 3:
    console.log('theme3')
    addTheme3();
    break;
  case 4:
    console.log('theme4')
    addTheme4();
    break;
  case 5:
    console.log('theme5')
    addTheme5();
    break;
  case 6:
    console.log('theme6')
    addTheme6();
    break;
default:
  break;
}
    
// Cambia el tema manualmente
if(THEME_1){
  THEME_1.addEventListener('click', () => {
    addTheme1();
  });
  
  THEME_2.addEventListener('click', () => {
    addTheme2();
  });
  
  THEME_3.addEventListener('click', () => {
    addTheme3();
  });
  
  THEME_4.addEventListener('click', () => {
    addTheme4();
  });
  
  THEME_5.addEventListener('click', () => {
    addTheme5();
  });
  
  THEME_6.addEventListener('click', () => {
    addTheme6();
  });
}

// Cambiar estilo del container al scrollear
document.querySelector('.container').addEventListener('scroll', ()=>{
    if(document.querySelector('.container').scrollTop > 10){
        document.querySelector('.container').style.marginTop="00vh";
      }else{
        document.querySelector('.container').style.marginTop="20vh";
      }

  });
