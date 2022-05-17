let menuAbierto = false;


function abrirMenu(){
    if(menuAbierto == false) {
        interiorMenu.style.display="block"
            menuAbierto =true
    }else{
        interiorMenu.style.display="none"
            menuAbierto = false;
    }
}

$("#menu").click(abrirMenu)
