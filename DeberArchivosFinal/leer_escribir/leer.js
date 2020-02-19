"use strict";
exports.__esModule = true;
var fs = require("fs");
function leerArchivo(path) {
    var resultado = fs.readFileSync(path, // primer argumento a leer es el path // ./ para decir que estamos en la misma carpeta del archivo a leer
    'utf-8' // CODIFICACION
    );
    //console.log(resultado); // Hola Amigos
    return resultado;
}
exports.leerArchivo = leerArchivo;
