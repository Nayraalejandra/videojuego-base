
let menuAbierto = false;


function abrirMenu(){
    if(menuAbierto == false) {
        $("#interiorMenu").css("display","flex")
    
            menuAbierto =true
    }else{
        $("#interiorMenu").css("display","none")
            menuAbierto = false;
    }
}
// $("#interiorMenu").css("transition", "2s")
$("#menu").click(abrirMenu)

function revivirAzul(){
    $("#conejoAzul Img").css("margin-top","0px")
}

function matarAzul (){
    $("#conejoAzul Img").css("margin-top","-300px");
    setTimeout(revivirAzul,3000)
}
$("#conejoAzul Img").click(matarAzul);



function revivir(){
    $("#conejoRosa Img").css("margin-top","0px")
}

function matar (){
    $("#conejoRosa Img").css("margin-top","-300px");
    setTimeout(revivir,3000)
}
$("#conejoRosa Img").click(matar);




function revivirNaranja(){
    $("#conejoNaranja Img").css("margin-top","0px")
}

function matarNaranja (){
    $("#conejoNaranja Img").css("margin-top","-300px");
    setTimeout(revivirNaranja,3000)
}
$("#conejoNaranja Img").click(matarNaranja);