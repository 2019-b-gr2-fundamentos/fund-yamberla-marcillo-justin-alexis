"use strict";
exports.__esModule = true;
var fs = require("fs");
function eliminarArchivo(path, id) {
    var resultado = fs.eliminateFileSync(path, // primer argumento a leer es el path // ./ para decir que estamos en la misma carpeta del archivo a leer
    id, 'utf-8' // CODIFICACION
    );
    //console.log(resultado); // Hola Amigos
    return resultado;
}
exports.eliminarArchivo = eliminarArchivo;
