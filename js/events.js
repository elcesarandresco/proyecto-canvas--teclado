
var teclas = {

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


}