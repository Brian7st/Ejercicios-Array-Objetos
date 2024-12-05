let valorMatricula= 7000000

alert(" el valor base de la matricula es de $7.000.000 ")
alert(" opciones de pago ")
 
let lasOpciones = () => {

    const opcionesTexto= "elige una opcion(1: pago completo, 2: pago a dos cuotas 3: pago a tres cuotas)";
const opcionSeleccionada = parseInt(prompt(opcionesTexto));
}

let pagoCompletoEIntereses = (n1,n2) => {
    return n1 * n2;
}

let pagoCotas = (m1,m2) => {
    return m1/m2
}


let opcionElegida = () =>{

    switch (opcionSeleccionada) {
    case 1:
        console.log(pagos(valorMatricula,0.95), "total a pagar");
        break;
    case 2:
        alert("el pago a cuotas tiene un interes del 2% ya aplicado al total")
        console.log(pagoCotas(valorTotalIntereses/2)+pagoCompletoEIntereses(valorMatricula*0.02), "total a pagar")
        break;
    case 3: alert("el pago a cuotas tiene un interes del 2% ya aplicado al total")

        console.log(pagoCotas(valorTotalIntereses/3)+pagoCompletoEIntereses(valorMatricula*0.02), "total a pagar")
        break;
    default:
        console.log("opcion no valida. Debe de ingresar una opcion entre 1 y 3.")
        break;
}

}