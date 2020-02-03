import * as fs from 'prompts';

export function leerArchivo(path: string):string {
    console.log("Leer archivo")
    const resultado = fs.readFileSync(
        path, //Path (si estamos dentro de la misma carpeta)
        'utf-8' //Codificacion para leer el texto
    )
    console.log(resultado) 
    return resultado
}