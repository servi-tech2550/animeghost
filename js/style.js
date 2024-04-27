/*nav var*/ 
function openNav(){
    document.getElementById("mobile-menu").style.width = "100%"
}

function closeNav(){
    document.getElementById("mobile-menu").style.width = "0"
}

function confirmacion(){
    var respuesta = confirm("¿Deseas enviar este formulario?");
    if(respuesta==true){
        return true;


    }else{
        return false;
    }
}
/*formulario de registro*/ 

let singUp = document.getElementById("singUp");
let singIn = document.getElementById("singIn");
let nameInput = document.getElementById("nameInput");
let title = document.getElementById("title");

singIn.onclick = function(){
    nameInput.style.maxHeight = "0";
    title.innerHTML = "Login";
    singUp.classList.add("disable");
    singIn.classList.remove("disable");
}

singUp.onclick = function(){
    nameInput.style.maxHeight = "60px";
    title.innerHTML = "Registro";
    singUp.classList.remove("disable");
    singIn.classList.add("disable");
}