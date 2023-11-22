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

  const nomParForm = document.getElementById('admin-crear-nombre-parada');
  const comParForm = document.getElementById('admin-crear-comentario-parada');
  const matriculaForm = document.getElementById('admin-crear-unidad-matricula');
  const asientosForm = document.getElementById('admin-crear-unidad-asiento');

  const labelNomParForm = document.querySelector(`label[for="admin-crear-nombre-parada"]`);
  const labelComParForm= document.querySelector(`label[for="admin-crear-comentario-parada"]`);
  const labelMatriculaForm = document.querySelector(`label[for="admin-crear-unidad-matricula"]`);
  const labelAsientosForm= document.querySelector(`label[for="admin-crear-unidad-asiento"]`);


  handleInputFocus(nomParForm, labelNomParForm);
  handleInputFocus(comParForm, labelComParForm);
  handleInputFocus(matriculaForm, labelMatriculaForm);
  handleInputFocus(asientosForm, labelAsientosForm);

function crearParada(){
    document.getElementById('admin-submit-crear-parada').addEventListener('click', ()=>{

        let formData = new FormData()
        
        formData.append('nomParada',document.getElementById('admin-crear-nombre-parada').value)
        formData.append('comParada',document.getElementById('admin-crear-comentario-parada').value)

        let option = {
            body: formData,
            method: 'post'
        };
        
        fetch(raiz+'/Backend/Admin/consulta_crear_parada.php', option)
            .then((response) => {
            return response.json().then(data => ({
                data: data,
                status: response.status
            }));
            })
            .then((result) => {
            if (result.status === 200) {  
                if(result.data){
                    alert('La parada se ha creado correctamente')
                }else{
                    alert('Ha ocurrido un error')
                }
            } else {
                console.error('Respuesta con error:', result.status, result.data);
            }
            })
            .catch((error) => {
            console.error('Error en la solicitud:', error);
            });
})    

}


function crearUnidad() {
    document.getElementById('admin-submit-crear-unidad').addEventListener('click', ()=>{

            let formData = new FormData()
            
            formData.append('matricula',document.getElementById('admin-crear-unidad-matricula').value)
            formData.append('cantAsientos',document.getElementById('admin-crear-unidad-asiento').value)
    
            let option = {
                body: formData,
                method: 'post'
            };
            
            fetch(raiz+'/Backend/Admin/consulta_crear_unidad.php', option)
                .then((response) => {
                return response.json().then(data => ({
                    data: data,
                    status: response.status
                }));
                })
                .then((result) => {
                if (result.status === 200) {  
                    if(result.data){
                        alert('La unidad se ha creado correctamente')
                    }else{
                        alert('Ha ocurrido un error')
                    }
                } else {
                    console.error('Respuesta con error:', result.status, result.data);
                }
                })
                .catch((error) => {
                console.error('Error en la solicitud:', error);
                });
    })     
}
crearParada()
crearUnidad()


