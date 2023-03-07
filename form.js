//barra superior
var menu_visible = false;
let menu = document.getElementById("nav");
function mostrarOcultarMenu(){
    if(menu_visible=false){//si esta oculto
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible = false;
    }
}

 
function saludo() {
    window.alert("¡Bienvenidos a mi CV WEB!");
}

function confirmacion() {
    window.alert("Mensaje enviado con exito")
}











