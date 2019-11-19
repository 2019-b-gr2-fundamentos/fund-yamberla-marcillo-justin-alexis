fun main(args : Array<String>)
{
    print("Ingrese una frase: ")
    var frase: String = readLine()!!
    println("Formatear texto: \nTodo Mayuscula(TM)\nTodo Minuscula(tm) \nQué desea hacer?")
    var op = readLine()
    when(op)
    {
        "TM" -> println(frase.toUpperCase())
        "tm" -> println(frase.toLowerCase())
    }
}