import * as fs from 'fs'

export function escribirArchivo(
    path: string,
    contenido: string) {
    fs.writeFileSync(
        path, //Path
        contenido, //Contenido
        'utf-8' //Codificación
    )
}