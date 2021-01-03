// declarar variables de coordinadas
var x = 0;
var y = 0;
//recordar variables,                                             
var estado;

// Declarar variables con elementos de HTML
var lienzo = document.getElementById("myCanvas");

// Declarar Event Listeners
/* lienzo.addEventListener("mousemove", moveMouse); */
lienzo.addEventListener("mousedown", pressMouse);
lienzo.addEventListener("mouseup", upMouse);
lienzo.addEventListener("mousemove", moveMouse);


/* crear contexto  de canvas */
var context = lienzo.getContext("2d");
var espacio = lienzo.width;

/* declarar función que permita dibujar en canvas */
function drawInCanvas(color, xinicial, yinicial, xfinal, yfinal,) {
    context.beginPath();
    context.strokeStyle = color;
    context.moveTo(xinicial, yinicial);
    context.lineTo(xfinal, yfinal);
    context.stroke();
    context.closePath();
}




// funciones de los eventos
function pressMouse(evento) {
    
    x = evento.layerX;
    y = evento.layerY;
    estado = 1;
    console.log("El estado del mouse es presionado " + estado);
    // console.log("El estado del mouse es presionado " + estado);
} 

function upMouse (evento) {

    x = evento.layerX;
    y = evento.layerY;
    estado = 0;
    console.log("El estado del mouse es no presionado " + estado);


}

function moveMouse (evento) {



    if (estado == 1) {

        drawInCanvas("red", x, y, evento.layerX, evento.layerY);

    }

}



// comenzar a dibujar a través del canvas

/*function moveMouse(evento) {

    console.log(evento);

} */





























/* var teclas = {

    UP: 38,
    DOWN: 40,
    LEFT: 37,
    RIGHT: 39

};

var y = 150;
var x = 150;


// evento de teclas
document.addEventListener("keyup", drawDown);

// crear contexto de canvas
var canvas = document.getElementById("draw-area");
var context = canvas.getContext("2d");
var espacio = canvas.width;


drawLine("red", 149, 149, 150, 150);


function drawLine (color, xinicial, yinicial, xfinal, yfinal) {

    context.beginPath();
    context.lineWidth = 2;
    context.strokeStyle = color;
    context.moveTo(xinicial, yinicial);
    context.lineTo(xfinal, yfinal);
    context.stroke();
    context.closePath();

}


var movimiento = 10;

// dibujar las líneas
function drawDown (evento) {
    
    switch(evento.keyCode) {

        case teclas.UP:
            drawLine("blue", x, y, x, y - movimiento);
            y = y - movimiento;
            console.log("arriba");
        break;
        
        case teclas.DOWN:
            drawLine("blue", x, y, x, y + movimiento);
            y = y + movimiento;
            console.log("abajo");
            break;
        case teclas.RIGHT:
            drawLine("blue", x, y, x + movimiento, y);
            x = x + movimiento;
            console.log("derecha");
            break;
        case teclas.LEFT:
            drawLine("blue", x, y, x - movimiento, y);
            x = x - movimiento;
            console.log("izquierda");
        break;
        default:
            console.log("Otra tecla")
        break;

    }


} */