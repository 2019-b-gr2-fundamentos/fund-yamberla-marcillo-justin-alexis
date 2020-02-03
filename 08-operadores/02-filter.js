"use strict";
/*export function calcular(funcion, numUno, numDos){
    return funcion(numUno, numDos); //se puede enviar funciones como parámetros
}
export function sumar(numUno, numDos){
    return numUno + numDos;
}
export function restar(numUno, numDos){
    return numUno - numDos;
}

calcular(sumar, 1, 2)
calcular(restar, 1, 2)*/
exports.__esModule = true;
//FILTER
function filter(arreglo, funcion) {
    var arregloFiltrado = [];
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], i, arreglo);
        if (respuestaFuncion == true) {
            arregloFiltrado.push(arreglo[i]);
        }
    }
    return arregloFiltrado;
}
exports.filter = filter;
