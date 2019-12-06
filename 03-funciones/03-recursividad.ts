function imprimiNveces(mensaje:String, nVeces:number): void{
    if(nVeces == 0){
        console.log("Se terminó")
    }else{
        console.log("\n"+ mensaje)
        const nuevoNumeroVeces = nVeces - 1;
        imprimiNveces(mensaje,nuevoNumeroVeces);
    }

}

function main(){
    imprimiNveces('hola', 2);
}

main();

/*function imprimirValores(arreglo:number,tamaño:number):void{
    let indice = 0;
    if(nVeces == 0){
        console.log("Se terminó")
    }else{
        console.log("\n${Mensaje}\n")
        const nuevoNumeroVeces = nVeces - 1;
        imprimirValores(mensaje,nuevoNumeroVeces);
    }

}

function main(){
    let arreglo = [1, 2, 3];
    let tamaño = arreglo.length();
    imprimirValores(arreglo, tamaño);
}

main();*/