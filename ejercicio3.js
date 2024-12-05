const ventaRestaurante = [
    {producto: "churrasco", categoria: "plato fuerte", valor: 350},
    {producto: "ceviche", categoria: "entrada", valor: 250},
    {producto: "patacones", categoria: "entrada", valor: 3500},
    {producto: "sancocho", categoria: "plato fuerte", valor: 35},
    {producto: "carne a la llanera", categoria: "plato fuerte", valor: 500}
];

const ventasPorCategoria = ventaRestaurante.reduce((acc, ventaRestaurante) => {
    acc[ventaRestaurante.categoria] = (acc [ventaRestaurante.categoria] || 0 )+ ventaRestaurante.valor;
    return acc;
}, {});

console.log("ventas por categoria:", ventasPorCategoria);  
