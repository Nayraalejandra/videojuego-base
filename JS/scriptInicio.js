
// let nombre = document.getElementById("askName");
// let juego =document.getElementById("pregunta")

// let vamos =document.getElementById("radio-1")

// $("#boton").click(enviarfuncion)



// function enviarfuncion(){
//     if(nombre.value==""||nombre.value==null){
//         alert("Escribe un nombre");
//     }else if(juego.value=="" || juego.value==null){
//         alert("Elige una opción")
//     }else if (juego.value=="radio-1"){
//         console.log("jfjbfksb")
//     }
// }



$("#boton").click(function(){
    // if($("#askName").value(null)){ 
    //     alert("Escribe un nombre");

     if($("#radio-1").prop("checked")== true && !$("#askName").val([])) {
        window.location.href = "juego.html";
       
    }else if($("#radio-2").prop("checked")==true){
        window.location.href = "index.html";
       
    } else if($("#pregunta").prop("checked")==null){
        alert("Elige una opción")
    }

})


