let clasicosT = 1;
let RunningT = 2;
let BasketballT = 3; 

alert("bienvenido a tiendas brian")
alert("que tenis deseas comprar hoy")

let validacionOpciones = () => {
let opciones;
do {
     opciones=parseInt(prompt("opciones de tenis: 1: Clasicos 2: Running 3: Basketball"))
} while (opciones !==clasicosT  && opciones !== RunningT && opciones !== BasketballT );

};

let validacionTallas = () => {
let opcionesTallas;
do {
     opcionesTallas=parseInt(prompt("cual tallas deseas tenemos desde 35 hasta 44"))
} while (opcionesTallas < 35 || opcionesTallas > 44 || isNaN(opcionesTallas));

console.log(`la talla elegida es ${opcionesTallas}`);
};

let validacionCantidades = () => {
let cantidad;
do {
     cantidad=parseInt(prompt("¿que cantidad vas a comprar, cantidad maxima 5"))
} while (cantidad > 5 || cantidad === 0);

alert("si compras 3 pares o mas se hace un descuento del 10% ")

};

const PrecioClasicos = 500000
const preciosRunning = 800000
const precioBasketball = 1000000

let precios = (m1,m2) => {
    return m1 * m2 
};

let validacionValorAPagar = () => {
let valorTotal;
switch (opciones) {
    case clasicosT:
        valorTotal= precios(PrecioClasicos,cantidad)
        break;
    case RunningT:
        valorTotal=precios(preciosRunning,cantidad)
        break;
    case BasketballT:
        valorTotal=precios(precioBasketball,cantidad)    
    default:
        break;
}
};

let aplicarDescuento = () => {
if (cantidad >=3) {
    let descuento= 0.10
    valorTotal=valorTotal-(valorTotal*descuento); 
} else {
    alert(`total a pagar ${valorTotal}`);
};

console.log(`valor a pagar ${valorTotal}`);
alert("gracias por su compra");

};
 
