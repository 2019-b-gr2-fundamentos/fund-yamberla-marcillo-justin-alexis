function imprimiNveces(mensaje, nVeces){
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
