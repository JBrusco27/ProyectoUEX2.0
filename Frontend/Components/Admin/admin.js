function handleInputFocus(input, label) {
  // Se sube el label al hacer focus al input   
  input.addEventListener('focus', () => {
    label.style.transform = 'translateY(-25px)';
    label.style.fontSize = '13px';
  });

  // Se baja el label al quitar focus al input  
  input.addEventListener('blur', () => {
    if (input.value.trim() === "") {
      label.style.transform = 'translateY(0px)';
      label.style.fontSize = '16px';
    }
  });
}

const nameForm = document.getElementById('form-name');
const phoneForm = document.getElementById('form-phone');
const emailForm = document.getElementById('form-email');
const pswdForm = document.getElementById('form-pswd');
const confPswdForm = document.getElementById('form-confPswd');
const labelNameForm = document.querySelector(`label[for="form-name"]`);
const labelPhoneForm= document.querySelector(`label[for="form-phone"]`);
const labelEmailForm = document.querySelector(`label[for="form-email"]`);
const labelPswdForm = document.querySelector(`label[for="form-pswd"]`);
const labelConfPswdForm = document.querySelector(`label[for="form-confPswd"]`);

handleInputFocus(nameForm, labelNameForm);
handleInputFocus(phoneForm, labelPhoneForm);
handleInputFocus(emailForm, labelEmailForm);
handleInputFocus(pswdForm, labelPswdForm);
handleInputFocus(confPswdForm, labelConfPswdForm);


document.querySelector('.gestion-viajes-nav').addEventListener('click', ()=>{
    document.getElementById('component-viajes').style.display="flex"
    document.getElementById('component-lineas').style.display="none"
    document.getElementById('component-usuarios').style.display="none"
    document.getElementById('component-admins').style.display="none"
    document.getElementById('component-inicio').style.display="none"

 })

 document.querySelector('.gestion-inicio-nav').addEventListener('click', ()=>{
    document.getElementById('component-viajes').style.display="none"
    document.getElementById('component-lineas').style.display="none"
    document.getElementById('component-usuarios').style.display="none"
    document.getElementById('component-admins').style.display="none"
    document.getElementById('component-inicio').style.display="flex"

 })
 document.querySelector('.gestion-lineas-nav').addEventListener('click', ()=>{
    document.getElementById('component-viajes').style.display="none"
    document.getElementById('component-lineas').style.display="flex"
    document.getElementById('component-usuarios').style.display="none"
    document.getElementById('component-admins').style.display="none"
    document.getElementById('component-inicio').style.display="none"

 })

 document.querySelector('.gestion-usuarios-nav').addEventListener('click', ()=>{
    document.getElementById('component-viajes').style.display="none"
    document.getElementById('component-lineas').style.display="none"
    document.getElementById('component-usuarios').style.display="flex"
    document.getElementById('component-admins').style.display="none"
    document.getElementById('component-inicio').style.display="none"

 })

 document.querySelector('.gestion-admins-nav').addEventListener('click', ()=>{
    document.getElementById('component-viajes').style.display="none"
    document.getElementById('component-lineas').style.display="none"
    document.getElementById('component-usuarios').style.display="none"
    document.getElementById('component-inicio').style.display="none"
    document.getElementById('component-admins').style.display="flex"

 })
 

 
 
 // Función para crear y mostrar la pantalla de carga
  function showLoader() {
    if(!document.querySelector('.loader')){
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
 
 // Se sube el label al hacer focus al input 
  function handleInputFocus(input, label) {
    input.addEventListener('focus', () => {
      label.style.transform = 'translateY(-25px)';
      label.style.fontSize = '13px';
    });
  
    // Se baja el label al quitar focus al input  
    input.addEventListener('blur', () => {
      if (input.value.trim() === "") {
        label.style.transform = 'translateY(0px)';
        label.style.fontSize = '16px';
      }
    });
  }

const origenForm = document.getElementById('origen-linea');
const destinoForm = document.getElementById('destino-linea');
const nomForm = document.getElementById('nom-linea');

const labelOrigenForm = document.querySelector(`label[for="origen-linea"]`);
const labelDestinoForm = document.querySelector(`label[for="destino-linea"]`);
const labelNomForm = document.querySelector(`label[for="nom-linea"]`);

handleInputFocus(origenForm, labelOrigenForm);
handleInputFocus(destinoForm, labelDestinoForm);
handleInputFocus(nomForm, labelNomForm);