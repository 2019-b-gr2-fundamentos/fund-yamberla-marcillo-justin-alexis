"use strict";
exports.__esModule = true;
function some(arreglo, funcion) {
    var condicion = false;
    for (var i = 0; i < arreglo.length; i++) {
        var respuestaFuncion = funcion(arreglo[i]);
        if (respuestaFuncion != true) {
            condicion = false;
        }
        else {
            condicion = true;
            return condicion;
        }
        ;
    }
    ;
    return condicion;
}
exports.some = some;
;
