document.addEventListener('DOMContentLoaded', ()=> {

let action = true;

// [ FUNCTION ] Cierra el menu de navegación mobile
function closeMenuNavMobile(){
    if (action) {
        document.querySelector(".container-content").style.pointerEvents = "none";        
        document.querySelector(".wrap-container").style.height="100vh";        
        document.querySelector(".menu-container").style.display="flex";        
        action = false;
    }else{
        document.querySelector(".wrap-container").style.height="";
        document.querySelector(".menu-container").style.opacity="0";
        setTimeout(() => {
            document.querySelector(".menu-container").style.display="none";        
            document.querySelector(".menu-container").style.opacity="1";
        }, 300);        
        action = true;
    }
}

// [ EXECUTE ] closeMenuNavMobile
document.querySelector(".menu-icon").addEventListener('click', ()=> {
    closeMenuNavMobile();
});

// [ EXECUTE ] closeMenuNavMobile
document.getElementById("nav-close-icon").addEventListener('click', ()=> {
    closeMenuNavMobile();
});

});

