export function forEach(
    arreglo: any[], 
    funcion: (valorActual: any, indice?: number, arreglo?: any[]) => void
    ){
        for(let i = 0; i < arreglo.length; i++){
            const respuestaFuncion = funcion(
                arreglo[i],
                i,
                arreglo,
            );
            console.log(respuestaFuncion)
        }
}