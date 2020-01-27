"use strict";
exports.__esModule = true;
var fs = require("fs");
function escribirArchivo(path, contenido) {
    fs.writeFileSync(path, //Path
    contenido, //Contenido
    'utf-8' //Codificación
    );
}
exports.escribirArchivo = escribirArchivo;
