Math.floor(Math.random()*11); // [0 ,11[

// 1) Crear arreglo 5 elementos
const arreglo = [];
const arreglo2 = [];
let jugadores = 10;
// 2) Cada elemento 1 o 0
for(let indice = 0; indice < jugadores; indice++){
    arreglo[indice]=Math.floor(Math.random()*2)
}
console.log(arreglo);
console.log(arreglo.length);

//arreglo2.push(Math.floor(Math.random()*2)); 0s y 1s
for(let i=0; i <jugadores; i++){
    arreglo2.push(Math.floor(Math.random()*1));//solo de ceros
}
console.log(arreglo2);
// [0 ,2[
// Ej: [0, 0, 1, 1, 0]
// 3) Existe al menos un elementos = 1
let cont = 0;
for(let indice = 0; indice < jugadores; indice++){
    if (arreglo[indice] == 0){
        cont++;
    }
}

console.log("Arreglo1 -> # de 0s ="+cont+"\n");

let cont2=0;

for(let indice = 0; indice < jugadores; indice++){
    if (arreglo2[indice] == 0){
        cont2++;
    }
}

console.log("Arreglo2 -> # de 0s ="+cont+"\n");

if(cont2==jugadores){
    let indiceRandom = (Math.floor(Math.random()*(jugadores)))
    arreglo2[indiceRandom]=1;
}

console.log(arreglo2);