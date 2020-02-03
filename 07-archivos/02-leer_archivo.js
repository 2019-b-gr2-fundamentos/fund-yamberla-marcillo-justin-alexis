"use strict";
exports.__esModule = true;
var fs = require("prompts");
function leerArchivo(path) {
    console.log("Leer archivo");
    var resultado = fs.readFileSync(path, //Path (si estamos dentro de la misma carpeta)
    'utf-8' //Codificacion para leer el texto
    );
    console.log(resultado);
    return resultado;
}
exports.leerArchivo = leerArchivo;
