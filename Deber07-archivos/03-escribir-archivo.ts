import * as fs from 'fs';

export function escribirArchivo(
    path: string,
    contenido: string){
    fs.writeFileSync(
        path,  // PATH
        contenido,  // CONTENIDO
        'utf8' // CODIFICACION
        );
}