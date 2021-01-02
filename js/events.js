document.addEventListener("keyup", drawDown);

var teclas = {

    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

};

function drawDown (evento) {
    
    switch(evento.keyCode) {

        case teclas.UP:
            console.log("arriba");
        break;
        
        case teclas.DOWN:
            console.log("abajo");
        break;
        default:
            console.log("Otra tecla")
        break;

    }


}