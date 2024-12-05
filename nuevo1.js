// arrays arreglos listas matrices (dos dimensiones)

 let personas = ["brian","maria","estiven","acuña", "silba"]
 
 
 // empieza desde cero los indices 

 // cambiar uno o remplazar
personas[2] = "andres"

// añadir de ultimo 
personas[personas.length] = "lina"

console.log(personas.length)

personas.length = 1

console.log (personas)
 

let fruta = []

fruta.push ("pera")
fruta.push ("mango", "piña")

let frutas2 = []
frutas2.push ("manzana","papaya")

// tres putos unir dos listas 
let todoFrutas = [...fruta, ...frutas2, "kiwi"]
console.log(todoFrutas)

// recorre la litas desde 0 hasta el final 
for(let e of todoFrutas) {
    console.log(`esta es la fruta ${e}`)
}
// elimina el elemento 0
todoFrutas.shift()

console.log(todoFrutas)

// elimino el ultimo 
todoFrutas.pop ()

// elimina segun los indices en este caso borra 1 hasta 2
todoFrutas.splice(1,2)
console.log(todoFrutas)

// recorre y tranforma segun la condicion 
let numeros = [1, 2, 3, 4, 5]
let copyNumbers = numeros.map(n => n ** 2)

console.log(copyNumbers)

let nombres = ["lina","antonio","juanita"]

// combierte a mayusculas (toUpperCase)
let mayucula = nombres.map(x => x.toUpperCase())
console.log (mayucula)

// filtra por numero de letras 
let persons =  ["lina","antonio","juanita"]
let buscar = persons.filter(x => x.length > 4)
console.log (buscar)

// condicion mayor a 20
let numeros1 = [1, 28, 35, 48, 53]
let buscarNumeros =numeros1.filter(x => x > 20)
console.log (buscarNumeros)

//si todos cumples la condicion
let numeros2 = [1, 28, 35, 48, 53]
let buscarNumeros1 =numeros1.every(x => x > 2)
console.log (buscarNumeros1)

// comprueba si un valor cumple la condicion solo una da true 
let numeros3 = [1, 28, 35, 48, 53]
let buscarNumeros3 =numeros1.some(x => x > 20)
console.log (buscarNumeros3)

// find encuentra un valor dentro de un array 