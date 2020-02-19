"use strict";
exports.__esModule = true;
var fs = require("fs");
function escribirArchivo(path, contenido) {
    fs.writeFileSync(path, // PATH 
    contenido, // contenido
    'utf-8' // CODIFICACION
    );
}
exports.escribirArchivo = escribirArchivo;
