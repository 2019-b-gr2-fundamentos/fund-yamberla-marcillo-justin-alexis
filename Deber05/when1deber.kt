import java.util.Scanner
fun main(args : Array<String>)
{
    val reader = Scanner(System.`in`) //instancia para leer datos del teclado

    println("Operaciones: \nSuma(s)\nResta(r)")
    print("Ingrese valor de a: ")
    var a : Double = reader.nextDouble()
    print("Ingrese valor de b: ")
    var b : Double = reader.nextDouble()
    print("Ingrese la operacion que desee: ")
    var op: Char = readLine()!! [0]

    when(op)
    {
        's' -> println("La suma es: ${a + b}")
        'r' -> println("La resta es: ${a - b}")
        else -> println("operacion no existente")
    }
}