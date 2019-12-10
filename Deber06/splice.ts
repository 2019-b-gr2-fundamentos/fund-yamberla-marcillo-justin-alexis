/*
    Pseudocodigo

    1) Crear un arreglo de nombres
    2) Preguntar si se quiere añadir un elemento
    4) Preguntar si se quiere borar un elemento
    5) Preguntar si se desea volver a realizar todo el proceso
    6) Salir
*/
function aniadirEliminar( arreglo: string[]): void{
    console.log("Arreglo Autos:\n"+arreglo);
    console.log("1) Aniadir\n2) Eliminar\n3) Salir");
    let opcion = +prompt("Ingrese el numero de la opcion: ");
    do{
        console.log("1) Aniadir\n2) Eliminar\n3) Salir");
        let opcion = +prompt("Ingrese el numero de la opcion: ");
        if(opcion==1){
            for(let i=0;i<=arreglo.length;i++){
                console.log("Posicion numero"+(i+1)+" -> "+arreglo[i]);
            }
            let posicion = +prompt("En que posicion desea aniadir mas nombres: ");
            posicion=posicion-1;
            let nuevoNombre = prompt("Ingrese el nombre que desea aniadir: ");
            arreglo.splice(posicion,1,nuevoNombre);
            console.log("\nEl arreglo se ha actualizado:\n"+arreglo);
        }else if(opcion==2){
            for(let i=0;i<=arreglo.length;i++){
                console.log("Posicion #"+(i+1)+" -> "+arreglo[i]);
            }
            let borrar = +prompt("Ingrese la posicion del elemento a borrar: ");
            borrar=borrar-1;
            arreglo.splice(borrar,1);
            console.log("\nEl arreglo se ha actualizado:\n"+arreglo);

        }else{
            console.log("Esa opcion no existe");
        }
    }while(opcion!=1 && opcion!=2);
}

function main(){
    const autos = ["Audi","Mercedes","Dodge"];
    aniadirEliminar(autos);
}