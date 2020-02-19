export function reduce(
    arreglo: any[],
    funcion: (
        acumulador: number,
        valorActual: any,
        indice?: number,
        arreglo?: any[]) => number
): number {
    let acumulador: number = 100;
    let calculo = 0;
    for(let i = 0; i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            acumulador,
            arreglo[i],
        );
        if(respuestaFuncion){
        calculo = acumulador - arreglo[i].nota;
        acumulador = calculo;
        };
    };
    return calculo;
    
}