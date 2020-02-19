"use strict";
exports.__esModule = true;
function reduce(arreglo, funcion) {
    var acumulador = 100;
    var calculo = 0;
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(acumulador, arreglo[i]);
        if (respuestaFuncion) {
            calculo = acumulador - arreglo[i].nota;
            acumulador = calculo;
        }
        ;
    }
    ;
    return calculo;
}
exports.reduce = reduce;
