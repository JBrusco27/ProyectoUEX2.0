document.addEventListener('DOMContentLoaded', ()=>{

    const SHOW_PSWD =  document.getElementById('show-pswd');
    const SHOW_PSWD_2 =  document.getElementById('show-pswd2');

    // Mostrar - Ocultar contraseña
    SHOW_PSWD.addEventListener('click', ()=>{
        let formPswd = document.getElementById('form-pswd');
        
        if(formPswd.type=='password'){
            document.getElementById('show-pswd-icon').innerHTML='visibility_off';
            formPswd.type='text';
        }else if(formPswd.type=='text'){
            document.getElementById('show-pswd-icon').innerHTML='visibility';
            formPswd.type='password';
        }
        
    });
    
    // Verificar si el elemento existe (Debido a no existencia en login.php)
    if(SHOW_PSWD_2){
        // Mostrar - Ocultar contraseña
        SHOW_PSWD_2.addEventListener('click', ()=>{
            let formPswd2 = document.getElementById('form-confPswd');
            if(formPswd2.type=='password'){
                document.getElementById('show-pswd-icon2').innerHTML='visibility_off';
                formPswd2.type='text';
            }else if(formPswd2.type=='text'){
                document.getElementById('show-pswd-icon2').innerHTML='visibility';
                formPswd2.type='password';
            } 
        });
    }
    
});