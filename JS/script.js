
let menuAbierto = false;
let menuFin = false;
let vida=3;
let counter=  0;
let time = 60;


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
        setTimeout(revivirAzul,3500)
        counter++;
        $("#counter").text(counter);
    }
    $("#conejoAzul Img").click(matarAzul);

// Rosa

    function revivir(){
        $("#conejoRosa Img").css("margin-top","0px")
    }

    function matar (){
        $("#conejoRosa Img").css("margin-top","-300px");
        setTimeout(revivir,3000);
        counter++;
        $("#counter").text(counter);
    }
    $("#conejoRosa Img").click(matar);



// Naranja
    function revivirNaranja(){
        $("#conejoNaranja Img").css("margin-top","0px")
    }

    function matarNaranja (){
        $("#conejoNaranja Img").css("margin-top","-300px");
        setTimeout(revivirNaranja,3000);
        counter++;
        $("#counter").text(counter);
    }
    $("#conejoNaranja Img").click(matarNaranja);

// Negro

    function restarVida(){
        if(vida == 3){
            $("#vida img").css("margin-top","-50px");
            
            vida=2
        }else if(vida == 2){
            $("#vida img").css("margin-top","-100px");
            vida=1
        }else{
            $("#vida img").css("margin-top","-150px");
            vida=0
            $("#final").css("display","flex")
        }
        
    }

    $("#conejoNegro").click(restarVida);

// Fin Tiempo
    function finTiempo(){
        $("#finalBueno").css("display","flex");
        $("#puntuacion").text("¡Has conseguido " + $(".puntos").text() + " puntos!")
    }

    setTimeout(finTiempo,60000)


    function myTimer() {
        time--;
        $("#tiempo").text(time);
    }

    setInterval(myTimer, 1000);



    