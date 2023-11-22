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

  const fechaActual = new Date();
  const diaAnteriorFechaActual = fechaActual.getDate() - 1
  const mesFechaActual = fechaActual.getMonth() + 1
  const añoFechaActual = fechaActual.getFullYear()

  const fechaActualConv = new Date(añoFechaActual + '-' + mesFechaActual + '-' + diaAnteriorFechaActual).toISOString().split('T')[0]
  // Asignar la fecha actual como el valor mínimo
  document.getElementById('form-calVenida-div').min = fechaActualConv;
  document.getElementById('form-calIda-div').min = fechaActualConv;

showLoader();
fetch('./Backend/Booking/consulta_home.php', opciones)
.then( (response)=> {
    if(response.ok){
        return response.json();
    }
})
.then((data)=>{
  for (let e = 0; e < data.length; e++) {
        const newOption = document.createElement('option');
        newOption.value = parseInt(data[e][0]);
        newOption.textContent = data[e][1];
        document.getElementById('form-from-div').appendChild(newOption);

        const newOption2 = document.createElement('option');
        newOption2.value = parseInt(data[e][0]);
        newOption2.textContent = data[e][1];
        document.getElementById('form-to-div').appendChild(newOption2);
    }
     hideLoader();

})
.catch((error)=>{
    console.error('Error: ' + error);
});

// Se desactiva el elemento seleccionado para el destino (para no poder seleccionar el mismo)
document.getElementById('form-from-div').addEventListener('input', ()=>{
  let v1 = document.getElementById('form-from-div').value;
  
  for (var i = 0; i < document.getElementById('form-to-div').options.length; i++) {
    if (document.getElementById('form-to-div').options[i].value === v1) {
      // Elemento encontrado
      var elementoEncontrado = document.getElementById('form-to-div').options[i];
      elementoEncontrado.disabled=true;
    }else{
      var elementoNoEncontrado = document.getElementById('form-to-div').options[i];
      elementoNoEncontrado.disabled=false;
    }
  }
});

// Se desactiva el elemento seleccionado para el origen (para no poder seleccionar el mismo)
document.getElementById('form-to-div').addEventListener('input', ()=>{
  let v1 = document.getElementById('form-to-div').value;

  for (var i = 0; i < document.getElementById('form-from-div').options.length; i++) {
    if (document.getElementById('form-from-div').options[i].value === v1) {
      // Elemento encontrado
      var elementoEncontrado = document.getElementById('form-from-div').options[i];
      elementoEncontrado.disabled=true;
    }else{
      var elementoNoEncontrado = document.getElementById('form-from-div').options[i];
      elementoNoEncontrado.disabled=false;
    }
  }
  


});

// let directInputValue = 0;
// let travInputValue;
// let fromInputValue;
// let toInputValue;
// let calIdaInputValue;
// let calIdaInputValueDateFormat;

function addIdaFocus(){
    document.getElementById('form-idavenida-div').classList.remove('form-input-buttonFocus');
    document.getElementById('form-ida-div').classList.add('form-input-buttonFocus');
}

function removeIdaFocus(){
    document.getElementById('form-idavenida-div').classList.add('form-input-buttonFocus');
    document.getElementById('form-ida-div').classList.remove('form-input-buttonFocus');
}

// switch(directInputValue){
//     case 1:
//         document
//         document.getElementById('form-calVenida-div').disabled=true;
//         addIdaFocus();
//         break;
//     case 0:
//         removeIdaFocus();
//         document.getElementById('form-calVenida-div').disabled=false;
//         document.getElementById('form-cont-div-calVenida').classList.remove("form-cont-div-calVenidaAfter");
//         break;
// }

document.getElementById('form-ida-div').addEventListener('focus', ()=>{
    addIdaFocus();
    document.getElementById('form-calVenida-div').disabled=true;
    document.getElementById('form-cont-div-calVenida').classList.add("form-cont-div-calVenidaAfter");
});

document.getElementById('form-idavenida-div').addEventListener('focus', ()=>{
    removeIdaFocus();
    document.getElementById('form-calVenida-div').disabled=false;
    document.getElementById('form-cont-div-calVenida').classList.remove("form-cont-div-calVenidaAfter");
});

