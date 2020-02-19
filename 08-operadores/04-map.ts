export function map(
    arregloOriginal: any[],
    funcion: (
        valorActual: any,
        indice?: number,
        arreglo?: any[]) => any
): any[] {
    const nuevoArreglo = [];
    const arreglo = [...arregloOriginal]; // le hago un Clon
    for(let i = 0; i < arreglo.length; i++){
        const clon = [...arreglo]; // Crear clon en cada iteracion 
        const respuestaFuncion = funcion(
            clon[i],
            i,
            [...arreglo], // Clon del clon para que juegue el programador 
        );
        nuevoArreglo.push(respuestaFuncion);
    };
    return nuevoArreglo;
}