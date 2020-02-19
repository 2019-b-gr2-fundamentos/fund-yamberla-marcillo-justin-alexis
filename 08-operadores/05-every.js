"use strict";
exports.__esModule = true;
function every(arreglo, funcion) {
    var condicion = true;
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i], // -> valorActual
        i, // -> Indice
        arreglo);
        if (respuestaFuncion != true) {
            condicion = false;
            return condicion;
        }
        else {
            return condicion;
        }
    }
    ;
}
exports.every = every;
;
