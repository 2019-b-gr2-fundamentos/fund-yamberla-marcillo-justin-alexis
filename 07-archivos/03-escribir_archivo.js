"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var fs = require("prompts");
function escribirArchivo(path, contenido) {
    fs.writeFileSync(path, //Path
    contenido, //Contenido
    'utf-8' //Codificación
    );
}
exports.escribirArchivo = escribirArchivo;
