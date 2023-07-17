document.addEventListener('DOMContentLoaded', ()=>
{
    // Obtener el elemento de cierre de sesión
    let logoutButton = document.getElementById('header-logout-action');
    
    // Agregar evento de clic al botón de cierre de sesión
    logoutButton.addEventListener('click', function() 
    {
        // Eliminar la cookie estableciendo un tiempo de expiración pasado
        document.cookie = "nombre_usuario=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";

        // Redirigir al usuario a la página de inicio de sesión u otra página deseada
        window.location.href = '../../Frontend/Home/index.php';
        window.location.reload();
    });
});