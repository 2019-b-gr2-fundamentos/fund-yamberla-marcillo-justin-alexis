import * as fs from 'prompts'

export function escribirArchivo(
    path: string,
    contenido: string) {
    fs.writeFileSync(
        path, //Path
        contenido, //Contenido
        'utf-8' //Codificación
    )
}