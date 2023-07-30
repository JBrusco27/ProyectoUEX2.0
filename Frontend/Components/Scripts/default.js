let screenWidthActual = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth; 

// Reiniciar pagina en cambios del ancho de pantalla
setInterval(() => {
  const nuevoScreenWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
  
  if (nuevoScreenWidth !== screenWidthActual) {
    location.reload();
    screenWidthActual = nuevoScreenWidth;
  }
}, 500);

document.addEventListener('DOMContentLoaded', ()=>{

function addTheme1(){
  localStorage.setItem('localTheme', 1);
  ROOT.classList.add('theme1');
  ROOT.classList.remove('theme2');
  ROOT.classList.remove('theme3');
  ROOT.classList.remove('theme4');
  ROOT.classList.remove('theme5');
}
function addTheme2(){
  localStorage.setItem('localTheme', 2)
  ROOT.classList.add('theme2');
  ROOT.classList.remove('theme1');
  ROOT.classList.remove('theme3');
  ROOT.classList.remove('theme4');
  ROOT.classList.remove('theme5');
}
function addTheme3(){
  localStorage.setItem('localTheme', 3)
  ROOT.classList.add('theme3');
  ROOT.classList.remove('theme1');
  ROOT.classList.remove('theme2');
  ROOT.classList.remove('theme4');
  ROOT.classList.remove('theme5');
}
function addTheme4(){
  localStorage.setItem('localTheme', 4)
  ROOT.classList.add('theme4');
  ROOT.classList.remove('theme1');
  ROOT.classList.remove('theme2');
  ROOT.classList.remove('theme3');
  ROOT.classList.remove('theme5');
}
function addTheme5(){
  localStorage.setItem('localTheme', 5)
  ROOT.classList.add('theme5');
  ROOT.classList.remove('theme1');
  ROOT.classList.remove('theme2');
  ROOT.classList.remove('theme3');
  ROOT.classList.remove('theme4');
}


const ROOT = document.documentElement;
  
const THEME_1 = document.getElementById('theme1Action');
const THEME_2 = document.getElementById('theme2Action');
const THEME_3 = document.getElementById('theme3Action');
const THEME_4 = document.getElementById('theme4Action');
const THEME_5 = document.getElementById('theme5Action');

let localTheme = parseInt(localStorage.getItem('localTheme'));


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
    default:
      break;
    }
    
    
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
    }


});