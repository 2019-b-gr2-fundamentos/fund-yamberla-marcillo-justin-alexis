//referencias
function main(){
    let uno = 1
    let dos = uno
    let tres = dos
    console.log('uno', uno)
    console.log('dos', dos)
    console.log('tres', tres)

    uno = 5 
    console.log('uno', uno)
    console.log('dos', dos)
    console.log('tres', tres)

    let arreglito = [1, 2, 3]
    let miOtroArreglito = []
    let a = arreglito[0] //valor
    let b = arreglito[1] //valor
    console.log('arreglito', arreglito)
    console.log('a', a)
    console.log('b', b)
    miOtroArreglito = arreglito
    miOtroArreglito.push(2)
    arreglito[0] = 9
    arreglito[1] = 10
    console.log('arreglito', arreglito)
    console.log('mi otro arreglito', miOtroArreglito)
    console.log('a', a)
    console.log('b', b)

    const adrian = {
        id: 1 ,
        nombre : 'Adrian',
        sueldo: 1.12
    };

    const soloElNombre = {...adrian};
    console.log('adrian',adrian);
    console.log('soloElNombre',soloElNombre)
    delete adrian.nombre; ///Eliminar el nombre del objeto
    soloElNombre['edad']= 22;
    //soloElNombre.edad =22;
    console.log('adrian',adrian);
    console.log('soloElNombre',soloElNombre)
}
main()