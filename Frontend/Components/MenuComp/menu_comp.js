document.addEventListener('DOMContentLoaded', function() {
let active2 = true;
document.querySelector(".menu-icon").addEventListener('click', function() {

if (active2) {
        document.querySelector(".container-content").style.pointerEvents = "none";        
        document.querySelector(".wrap-container").style.height="100vh";        
        document.querySelector(".menu-container").style.display="flex";        
        active2 = false;
    }else{
        document.querySelector(".wrap-container").style.height="";        
        document.querySelector(".menu-container").style.display="none";        
        active2 = true;
    }
});

document.querySelector("#nav-close-icon").addEventListener('click', function() {

if (active2) {
        document.querySelector(".container-content").style.pointerEvents = "none";        
        document.querySelector(".wrap-container").style.height="100vh";        
        document.querySelector(".menu-container").style.display="flex";        
        active2 = false;
    }else{
        document.querySelector(".wrap-container").style.height="";
        document.querySelector(".menu-container").style.opacity="0";
        setTimeout(() => {
            document.querySelector(".menu-container").style.display="none";        
            document.querySelector(".menu-container").style.opacity="1";
        }, 300);        
        active2 = true;
    }
});

});

