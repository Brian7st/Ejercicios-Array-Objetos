const compras = [
    {nombre: "arroz", precio: 500, cantidad: 4},
    {nombre: "huevos", precio: 1000, cantidad: 12},
    {nombre: "leche", precio: 1500, cantidad: 2},
    {nombre: "azucar", precio: 800, cantidad: 1},
]

const calcularTotal = (productos) => {
    return productos.reduce((total, productos) => {
        const subTotal = productos.precio * productos.cantidad;
        return total + subTotal;
    }, 0);
};

const total = calcularTotal (compras);
console.log ("productos comprados:", compras);
console.log (`total a cancelar : $${total}`);