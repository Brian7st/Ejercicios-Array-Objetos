const alquilerLavadora = [
    {modelo: "samsung", numero: 1, ocupada : false  },
    {modelo: "LG", numero: 2, ocupada : false  },
    {modelo: "dell", numero: 3, ocupada : false  },
    {modelo: "Mox", numero: 4, ocupada : false  },
]

let pedido = [];

function reservaAlquiler( numeroDeModelo, nombre , fechaAlquilada, fechaLimite) {
    const alquiler = alquilerLavadora.find(h => h.numero === numeroDeModelo )

if (!alquiler) {
    return `este modelo no existe ${numeroDeModelo}.`
}

if (alquiler.ocupada) {
    return `este modelo ya esta alquilado ${}.`;
}

alquilerLavadora.ocupada = true;

const nuevaAlquilada = {
    nombre: nombre,
    id : reservaAlquiler.length +1,
    fechaAlquilada: fechaAlquilada,
    fechaLimite: fechaLimite
};
pedido.push (nuevaAlquilada);

return `la lavadora reservada es la numero:${numeroDeModelo} `

}

console.log(reservaAlquiler(1, "brian", "2024/11/27", "2024/11/29"));
console.log(reservaAlquiler(3, "brian", "2024/11/27", "2024/11/29"));
console.log(reservaAlquiler(3, "estiven", "2024/11/27", "2024/11/29"));




