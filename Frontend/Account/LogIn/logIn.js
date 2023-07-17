document.addEventListener('DOMContentLoaded', ()=>{

//Verificar datos y mostrar restricciones
document.getElementById('form').addEventListener('submit', ()=>{
    let email = document.getElementById('form-email').value;
    let pswd = document.getElementById('form-pswd').value;
    let emailTest = new RegExp('^[a-zA-Z0-9.%+-]+@[a-zA-Z0-9.-]+.[a-zA-Z]$');
    let pswdTest = new RegExp('^[a-zA-Z0-9!@#$%^&*()-=+]{8,30}$');
    if(emailTest.test(email) && pswdTest.test(pswd)){
        console.log("Nice!");
    }
});

});