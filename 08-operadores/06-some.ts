export function some(arreglo: any[],
    funcion: (
        valorActual:any, 
        indice?: number, 
        arreglo?: any[]) => boolean
): boolean {
    let condicion = false;
    for(let i = 0; i < arreglo.length; i++){
        const respuestaFuncion = funcion(
            arreglo[i]
        );
        if(respuestaFuncion != true){
            condicion = false;
        }else{
            condicion = true;
            return condicion;
        };
    };
    return condicion;
};