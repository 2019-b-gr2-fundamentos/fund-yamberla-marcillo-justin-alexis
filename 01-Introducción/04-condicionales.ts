// 04-condicionales.ts
const casado = true;
if(casado != true){
console.log("Está casado");  //expresión devuelve boolean
}else{
console.log("No está casado")
}

const tengomosa = true;
const casadoYmosero = casado == true && tengomosa == true
if(casadoYmosero){
    console.log("casado y mosero")
}else{
    console.log("o casado o mosero o nada")
}


//apago la 1era alarma
//bolita y lloro hasta la segunda
//alarma y me levanto
//celulardescargado
//celulardañado == true
//amanecemuerto == true
//no esta activada la alarma == true
//está en silencio == true
// const se atrasoaclase = celulardescargado == true || celulardañado == true || amanecemuerto == true || esta activada la alarma != true || está en silencio == true
//Pseudocódigo:
/*
Si celulardescargado == true ó celulardañado == true ó amanecemuerto == true ó esta activada la alarma != true ó está en silencio == true
entonces se atrasó a clase == verdadero. 
 */



 //TRUTY & FALSY    
 if(""){
    console.log("truty") //todos los números excepto 0
 }else{
    console.log("falsy"); //todos los strings excepto el vacío
 }

//SWITCH
const calculo = "sumar"
switch(calculo){
    case "sumar": 
    //code
    break;
    case "restar":
    //code
    break;
    default:
}

/* 6 guagua
 18 wambra
 65 longo
 66 rucu
*/
const edad = 6; 
switch(edad){
    case 6: 
    console.log("guagua")
    break;
    case 18:
    console.log("wambra")
    break;
    case 25:
    console.log("tiu")
    break;
    case 65:
    console.log("rucu")
    break;
    default:
}

const edadString = prompt("Ingresar número:")
const edad = Number(edadString);
if (edad > 0 && edad <= 6){
    console.log("guagua")
}

/*
"calculadora"
eliga la operación que desee:
1. Suma
2. Resta
3. Multiplicación
4. División
5. Área de un círculo
 Leer operación
 Si operación == 1. Entonces (Leo A y B)
 Suma = A + B

 Si operación == 2. Entonces (Leo A y B)
 Resta = A + B

 Si operación == 3. Entonces (Leo A y B)
 Multiplicación = A + B

 Si operación == 4. Entonces (Leo A y B)
 Si B < 0. Despliego: "Error, ingrese nuevo valor de B:"
 Leo B
 Si B > 0. División = A / B 

Si operación == 5. Entonces (Leo R (radio))
Área del círuclo = Pi*R*R

Si operación < 1 ó operación > 5
Despliego: "Operación no válida"
*/