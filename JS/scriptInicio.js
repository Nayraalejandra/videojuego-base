
let nombre = document.getElementById("askName");
let juego =document.getElementById("pregunta")


$("#boton").click(enviarfuncion)



function enviarfuncion(){
    if(nombre.value==""||nombre.value==null){
        alert("Escribe un nombre");
    // }else if(juego.value=="" || juego.value==null){
    //     alert("Elige una opción")
    // }else{
    //     console.log("jfjbfksb")
    // }
}