const equipoFutbol = [
    {nombre: "brian", desempeño: 7.5},
    {nombre: "jhojan", desempeño: 6.5},
    {nombre: "steve", desempeño: 9.0},
    {nombre: "sebastian", desempeño: 4.5},
    {nombre: "thomas", desempeño: 8.4},
]


const titulares = equipoFutbol
   .filter(equipoFutbol => equipoFutbol.desempeño >= 7)
   .map(equipoFutbol => equipoFutbol.nombre);

console.log ("titulares para el siguiente partido :", titulares);

