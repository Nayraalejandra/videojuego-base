
$("#boton").click(function() {
    if (!$("#askName").val()) {
        alert("Escribe un nombre");

    } else if ($("#radio-1").prop("checked") == true) {
        window.location.href = "juego.html";

    } else if ($("#radio-2").prop("checked") == true) {
        window.location.href = "index.html";

    } else if ($("#pregunta").prop("checked") == null) {
        alert("Elige una opción")
    }

})

