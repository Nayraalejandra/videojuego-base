
let menuAbierto = false;
let conejodie = false;


function abrirMenu(){
    if(menuAbierto == false) {
        $("#interiorMenu").css("display","block")
            menuAbierto =true
    }else{
        $("#interiorMenu").css("display","none")
            menuAbierto = false;
    }
}

$("#menu").click(abrirMenu)

function conejoMuerto(){
    if(conejodie == false) {
        $(".conejosImg").css("margin-top","-300px");
        console.log("uyu");
        conejodie = true;
    }else{
        $(".conejosImg").css("margin-top","00px")
        console.log("eye")
            conejodie = false;
    }
}

$(".conejosImg").click(conejoMuerto)
