
let menuAbierto = false;
let vida=3;


// Menu
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

    function teclaPulsada(e){
        console.log(e.code)

        if(e.code == "Escape"){
            if(menuAbierto == false) {
                $("#interiorMenu").css("display","flex")
                
                    menuAbierto =true
            }else{
                $("#interiorMenu").css("display","none")
                    menuAbierto = false;
            }
        }
    }


    document.addEventListener('keyup' ,teclaPulsada)

// Azul
    function revivirAzul(){
        $("#conejoAzul Img").css("margin-top","0px")
    }

    function matarAzul (){
        $("#conejoAzul Img").css("margin-top","-300px");
        setTimeout(revivirAzul,3000)
    }
    $("#conejoAzul Img").click(matarAzul);

// Rosa

    function revivir(){
        $("#conejoRosa Img").css("margin-top","0px")
    }

    function matar (){
        $("#conejoRosa Img").css("margin-top","-300px");
        setTimeout(revivir,3000)
    }
    $("#conejoRosa Img").click(matar);



// Naranja
    function revivirNaranja(){
        $("#conejoNaranja Img").css("margin-top","0px")
    }

    function matarNaranja (){
        $("#conejoNaranja Img").css("margin-top","-300px");
        setTimeout(revivirNaranja,3000)
    }
    $("#conejoNaranja Img").click(matarNaranja);

// Negro

    function restarVida(){
        if(vida == 3){
            console.log("aaaa")
            $("#vida img").css("margin-top","-50px");
            vida=2
        }else if(vida == 2){
            console.log("eye")
            $("#vida img").css("margin-top","-100px");
            vida=1
        }else{
            console.log("abfa")
            $("#vida img").css("margin-top","-150px");
            vida=0
        }
        
    }

    // function parpadeo{
    //     $("#conejoNegro Img").css("margin-top","-300px");
    // }


    $("#conejoNegro").click(restarVida);
    $("#conejoNegro").click(parpadeo);



    