import java.util.Scanner
import kotlin.math.PI
//---------------------------------------------------------------------------
fun main(args : Array<String>)
{
    calculadora()
}
//---------------------------------------------------------------------------
//Suma
fun sum(a: Float, b: Float): Float
{
    var result: Float = a + b
    println(result)
    return result
}
//Resta
fun res(a: Float, b: Float): Float
{
    var result: Float = a - b
    println(result)
    return result
}
//Multiplicación
fun multi(a: Float,b: Float): Float
{
    var result: Float = a * b
    println(result)
    return result
}
//División
fun div(a: Float,b:Float): Float
{
    var result: Float = a / b
    println(result)
    return result
}
//Area del circulo
fun area(R: Float): Double
{
    return R*R*PI
}
//Perimetro del circulo
fun circ(R: Float): Double
{
    return 2*PI*R
}
//Superficie cilindro
fun supcilindro(R: Float, H: Float): Double
{
    return (2*R* PI*H) + (2* PI*R*R)
}
//Volumen cilindro
fun volcilindro(R: Float, H: Float): Double
{
    return PI*R*R*H
}
//Superficie esfera
fun superesfera(R: Float): Double
{
    return 4* PI*R*R
}
//Volumen esfera
fun volesfera(R: Float): Double
{
    return (4* PI*R*R*R)/3
}
//funcion ingresar valores
fun ingresar(): Float
{
    val reader = Scanner(System.`in`) //instancia para leer datos del teclado
    print("Ingrese valor del numero: ")
    var numeroUno: Float = reader.nextFloat()
    return numeroUno
}
//---------------------------------------------------------------------
fun calculadora()
{
    val reader = Scanner(System.`in`) //instancia para leer datos del teclado
    println("Selecciona una operación: \n1) Suma \n2) Resta \n3) Multiplicación \n4) División \n5) Area del circulo " +
            "\n6) Perímetro del circulo \n7) Superficie del cilindro \n8) Volumen cilindro \n9) Superficie esfera " +
            "\n10) Volumen esfera")
    var operacion: String? = readLine()
    var esSuma: Boolean = operacion == "suma" || operacion == "1" || operacion == "Suma-1"
    var esResta: Boolean = operacion == "resta" || operacion == "2" || operacion == "Resta-2"
    var esMulti: Boolean = operacion == "multiplicacion" || operacion == "3" || operacion == "Multiplicacion-3"
    var esDivi: Boolean = operacion == "division" || operacion == "4" || operacion == "Division-4"
    var areaCirculo: Boolean = operacion == "area" || operacion == "5" || operacion == "area-circulo"
    var perimetro: Boolean = operacion == "perimetro" || operacion == "6" || operacion == "perimetro-circulo"
    var superCilindro: Boolean = operacion == "superficie del cilindro" || operacion == "7" || operacion == "superficie-cilindro"
    var volCilindro: Boolean = operacion == "volumen del cilindro" || operacion == "8" || operacion == "volumen-cilindro"
    var superEsfera: Boolean = operacion == "superficie de la esfera" || operacion == "9" || operacion == "superfcie-esfera"
    var volEsfera: Boolean = operacion == "volumen de la esfera" || operacion == "10" || operacion == "volumen-esfera"
    var validar: Boolean = esSuma || esResta || esMulti || esDivi || areaCirculo || perimetro || superCilindro || volCilindro
            || superEsfera || volEsfera
    if(validar)
    {
        if(esSuma) {
            sum(ingresar(), ingresar())
        }
        if(esResta){
            res(ingresar(), ingresar())
        }
        if(esMulti){
            multi(ingresar(), ingresar())
        }
        if(esDivi){
            div(ingresar(), ingresar())
        }
        if(areaCirculo){
            print("Ingrese radio: ")
            var radio: Float = reader.nextFloat()
            var resultado = area(radio)
            println(resultado)
        }
        if(perimetro){
            print("Ingrese radio: ")
            var radio: Float = reader.nextFloat()
            var resultado = circ(radio)
            println(resultado)
        }
        if(superCilindro){
            print("Ingrese radio: ")
            var radio: Float = reader.nextFloat()
            print("Ingrese altura: ")
            var altura: Float = reader.nextFloat()
            var resultado = supcilindro(radio, altura)
            println(resultado)
        }
        if(volCilindro){
            print("Ingrese radio: ")
            var radio: Float = reader.nextFloat()
            print("Ingrese altura: ")
            var altura: Float = reader.nextFloat()
            var resultado = volcilindro(radio, altura)
            println(resultado)
        }
        if(superEsfera){
            print("Ingrese radio: ")
            var radio: Float = reader.nextFloat()
            var resultado = superesfera(radio)
            println(resultado)
        }
        if(volEsfera){
            print("Ingrese radio: ")
            var radio: Float = reader.nextFloat()
            var resultado = volesfera(radio)
            println(resultado)
        }
        print("Desea volver a usar la calculadora? S/N: ")
        var ans: String? = readLine()
        when(ans){
            "S", "s", "si" -> calculadora()
            "N", "n", "no"-> println("Ha salido!")
            else -> println("respuesta no valida")
        }
    }else{
        println("Operacion no valida, vuelva a seleccionar operacion")
        calculadora()
    }
}