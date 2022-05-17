
let menuAbierto = false;
let conejodie = false;


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

function conejoAzulMuerto(){
    if(conejodie == false) {
        $("#conejoAzul Img").css("margin-top","-300px");
        console.log("uyu");
        conejodie = true;
    }else{
        $("#conejoAzul Img").css("margin-top","0px")
        console.log("eye")
            conejodie = false;
    }
}

$("#conejoAzul Img").click(conejoAzulMuerto)

function conejoRosaMuerto(){
    if(conejodie == false) {
        $("#conejoRosa Img").css("margin-top","-300px");
        console.log("uyu");
        conejodie = true;
    }else{
        $("#conejoRosa Img").css("margin-top","0px")
        console.log("eye")
            conejodie = false;
    }
}

$("#conejoRosa Img").click(conejoRosaMuerto)
