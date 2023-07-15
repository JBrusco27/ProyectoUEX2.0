document.addEventListener('DOMContentLoaded', ()=>{

    document.querySelector('#show-pswd').addEventListener('click', ()=>{
        let formPswd = document.getElementById('form-pswd');
        
        if(formPswd.type=='password'){
            document.querySelector('#show-pswd-icon').innerHTML='visibility_off';
            formPswd.type='text';
        }else if(formPswd.type=='text'){
            document.querySelector('#show-pswd-icon').innerHTML='visibility';
            formPswd.type='password';
        }
        
    });
    document.querySelector('#show-pswd2').addEventListener('click', ()=>{
        let formPswd2 = document.getElementById('form-confPswd');
        
        if(formPswd2.type=='password'){
            document.querySelector('#show-pswd-icon2').innerHTML='visibility_off';
            formPswd2.type='text';
        }else if(formPswd2.type=='text'){
            document.querySelector('#show-pswd-icon2').innerHTML='visibility';
            formPswd2.type='password';
        }
        
    });
    
});