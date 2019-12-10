function productoCruz(vectores:number[][]):number[]{

    let suma = 0;
    let indice2 = vectores[1].length-1;

    for(let i = 0; i<=vectores[0].length-1;i++){
        suma = ((vectores[0][i])*(vectores[1][indice2]))+suma;
        indice2--;
    }
    return [0,0,suma];
}

function main(){
    let resultado=[];
    const arregloDosDimensiones =
    [
        //i,j
        [1,2,3,4],
        [4,5,6,7]
    ];
    resultado = productoCruz(arregloDosDimensiones);
    console.log(resultado);
}