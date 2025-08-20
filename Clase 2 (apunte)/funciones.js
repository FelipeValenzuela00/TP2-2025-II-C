var a = 20;
var b = 10;

console.log(sumar(a, b));



// funcion declarada se puede llamar antes de su definicion por hoisting
function sumar(a, b) {
    return a + b;
}


// funcion expresada no se puede llamar antes de su definicion


var restar = (x, y) => { return x - y; };
console.log(restar(a, b));

// funcion flecha
//tiene una sintaxis corta