// comentario de una linea
/* comentario de más
de una línea*/
const prompt = require("prompt-sync")(); //esto para pdoer usar prompt
// ejecutar por terminal: npm install prompt-sync
// indentar control +k control +F

var nombre;
var n1, n2, suma;

seguir = prompt("Bienvenido a la calculadora, ¿quiere seguir? s/n: ");
if (seguir == "s") {
    nombre = prompt("Ingrese nombre: ");
    n1 = parseInt(prompt("Ingrese número 1: "));
    n2 = parseFloat(prompt("Ingrese número 2: "));
    suma = n1 + n2;
    console.log(suma);
}
else
    console.log("Chau");



