import * as fs from 'fs';

export function eliminarArchivo(
    path:string, 
    id: number
    ): any{
    const resultado = fs.eliminateFileSync(
        path, // primer argumento a leer es el path // ./ para decir que estamos en la misma carpeta del archivo a leer
        id,
        'utf-8' // CODIFICACION
    );
    //console.log(resultado); // Hola Amigos
    return resultado;
}