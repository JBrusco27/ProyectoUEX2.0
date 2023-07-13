document.addEventListener('DOMContentLoaded', ()=>{

    document.querySelector('#show-pswd').addEventListener('click', ()=>{
        let formPswd = document.getElementById('form-pswd');
        
        if(formPswd.type=='password'){
            document.querySelector('#show-pswd-icon').name='eye-off';
            formPswd.type='text';
        }else if(formPswd.type=='text'){
            document.querySelector('#show-pswd-icon').name='eye';
            formPswd.type='password';
        }
        
    });
    document.querySelector('#show-pswd2').addEventListener('click', ()=>{
        let formPswd2 = document.getElementById('form-confPswd');
        
        if(formPswd2.type=='password'){
            document.querySelector('#show-pswd-icon2').name='eye-off';
            formPswd2.type='text';
        }else if(formPswd2.type=='text'){
            document.querySelector('#show-pswd-icon2').name='eye';
            formPswd2.type='password';
        }
        
    });
    
});