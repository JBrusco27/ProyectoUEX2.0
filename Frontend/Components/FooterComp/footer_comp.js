let opcionesFooter = {
method: 'POST',
headers: {
    'Content-Type': 'application/json'
}
};
// Se hace una solicitud a log_status para saber si hay un usuario logeado o no
fetch(raiz+'Backend/log_status.php', opcionesFooter)
.then(function (response) {
    // Verificar si la solicitud fue exitosa
    if (response.ok) {
        return response.json(); // Parsear la respuesta como JSON
    }
})
.then(function (data) {
    // Acceder a la variable log dentro del objeto data
    let log = data.log;
    if(log){
        document.getElementById('footer-signup-login-container').style.display="none";
        document.getElementById('footer-logo-company-phone').style.display="none";
        document.getElementById('footer-company-phone').style.display="flex";
    }else{
        document.getElementById('footer-signup-login-container').style.display="flex";
        document.getElementById('footer-logo-company-phone').style.display="flex";
        document.getElementById('footer-company-phone').style.display="none";
    }
})
.catch(function (error) {
    console.error('Error:', error);
});