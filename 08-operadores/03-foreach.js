"use strict";
exports.__esModule = true;
function forEach(arreglo, funcion) {
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        console.log(respuestaFuncion);
    }
}
exports.forEach = forEach;
