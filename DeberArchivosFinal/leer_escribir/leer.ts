import * as fs from 'fs';

export function leerArchivo(path:string,): string{
    const resultado = fs.readFileSync(
        path, // primer argumento a leer es el path // ./ para decir que estamos en la misma carpeta del archivo a leer
        'utf-8' // CODIFICACION
    );
    //console.log(resultado); // Hola Amigos
    return resultado;
}