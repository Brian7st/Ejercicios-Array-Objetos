const bestsellers = 1;
const literatura = 2;
const academicos = 3;

const tarifa_bestsellers = 500
const tarifa_literatura = 100
const tarifa_academico = 0

let validacionDeOpciones = () => {

do{
 opciones_categoria = parseInt(prompt("seleccione_categoria: 1 bestsellers 2 literatura 3 academico" ));
}while (opciones_categoria !== bestsellers && opciones_categoria !== literatura && opciones_categoria !== academicos)

}

let validaDiasPrestamo = () => {

let dias_de_prestamo = parseInt(prompt("¿cuantos dias va a prestar el libro?"))
    console.log(`el libro sera prestado por ${dias_de_prestamo} dias`)
}

let acumulados = (n1,n2) => {
    return n1*n2;
}
    
let validacionDePrecios = () => {

if (opciones_categoria === bestsellers) {
    console.log(`total a pagar ${acumulados(tarifa_bestsellers,dias_de_prestamo)}`)
    
}else if (opciones_categoria === literatura){
    console.log(`total a pagar ${acumulados(tarifa_literatura,dias_de_prestamo)}`)

}else if (opciones_categoria === academicos){
    console.log("tu prestamo es gratis")
}else{
    console.log("opcion no valida")
}

}

