function sumar(numUno:number,numDos:number): number{
    return numUno+numDos;
}
function restar(numUno:number,numDos:number): number{
    return numUno-numDos;
}
function multiplicar(numUno:number,numDos:number): number{
    return numUno*numDos;
}
function dividir(numUno:number,numDos:number): number{
    return numUno/numDos;
}

function main(){
   calculadora();
}

function calculadora(){
    const operacion:string = prompt('Selecciona una operacion:\n1) Suma\n2) Resta\n3) Multiplicacion\n4) Division');
    const esSuma:boolean = operacion =="suma"||operacion =="1"||operacion =="suma-1";
    const esResta:boolean = operacion =="resta"||operacion =="2"||operacion =="resta-2";
    const esMultiplicacion:boolean = operacion == "multiplicacion"||operacion == "3"||operacion == "multiplicacion-3";
    const esDivision:boolean = operacion =="division" ||operacion =="4" ||operacion =="division-4";
    const estaValida:boolean = esSuma || esResta || esDivision || esMultiplicacion;

    if(estaValida){
        const numUno:number = +prompt("Numero 1: ");
        const numDos:number = +prompt("Numero 2: ");
        let resultado:number =0;
        if(esSuma){
            resultado=sumar(numUno,numDos);
        }
        if(esResta){
            resultado=restar(numUno,numDos);
        }
        if(esMultiplicacion){
            resultado=multiplicar(numUno,numDos);
        }
        if(esDivision){
            resultado=dividir(numUno,numDos);
        }
        console.log(resultado);
    }else{
        calculadora();
    }
}