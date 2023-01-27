function acercarMouse(texto,imagen){
    document.getElementById("label-redes").innerHTML = texto;
    document.getElementById(imagen).style.height = "75px";
    document.getElementById(imagen).style.width = "75px";
}
function alejarMouse(imagen){
    document.getElementById("label-redes").innerHTML = "";
    document.getElementById(imagen).style.height= "50px";
    document.getElementById(imagen).style.width = "50px";
}
function acercarMouse2(texto,imagen){
    document.getElementById("label-ancla").innerHTML = texto;
    document.getElementById(imagen).style.height = "75px";
    document.getElementById(imagen).style.width = "75px";
}
function alejarMouse2(imagen){
    document.getElementById("label-ancla").innerHTML = "";
    document.getElementById(imagen).style.height = "50px";
    document.getElementById(imagen).style.width = "50px";
}

document.getElementById("boton").addEventListener('click',function(){
        window.scrollTo(0, 0);
});