export function every(arreglo: any[],
    funcion: (
        valorActual:any, 
        indice?: number, 
        arreglo?: any[])=> boolean
): boolean {
    let condicion = true;
    for(let i = 0; i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i],// -> valorActual
            i, // -> Indice
            arreglo, // -> Arreglo
        );
        if(respuestaFuncion != true){
            condicion = false;
            return condicion;
        }else{
            return condicion;
        }
    };
};
