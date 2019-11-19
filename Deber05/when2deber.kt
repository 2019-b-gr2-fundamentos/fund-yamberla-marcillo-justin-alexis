import java.util.Scanner
fun main(args : Array<String>)
{
    val reader = Scanner(System.`in`) //instancia para leer datos del teclado

    println("Operaciones: \nMultiplicacion(m)\nDivision(d)")
    print("Ingrese valor de a: ")
    var a : Float = reader.nextFloat()
    print("Ingrese valor de b: ")
    var b : Float = reader.nextFloat()
    print("Ingrese la operacion que desee: ")
    var op: Char = readLine()!! [0]

    when(op)
    {
        'm' -> println("La multiplicacion es: ${a * b}")

        'd' -> if (b == 0.toFloat())
                println("No se puede dividir para cero!")
                else
                println("La division es: ${a / b}")

        else -> println("operacion no existente")
    }
}