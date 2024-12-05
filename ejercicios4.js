
const habitaciones = [
    { numero: 101, tipo: 'individual', precio: 160, ocupada: false },
    { numero: 102, tipo: 'doble', precio: 150, ocupada: false },
    { numero: 103, tipo: 'suite', precio: 250, ocupada: false }
];

let reservas = [];

function reservarHabitacion(numeroHabitacion, huesped, fechaIngreso, fechaSalida) {

    const habitacion = habitaciones.find(h => h.numero === numeroHabitacion);
    
    if (!habitacion) {
        return `La habitación ${numeroHabitacion} no existe.`;
    }

    if (habitacion.ocupada) {
        return `La habitación ${numeroHabitacion} ya está ocupada.`;
    }

    habitacion.ocupada = true;

    const nuevaReserva = {
        id: reservas.length + 1, 
        habitacion: numeroHabitacion,
        huesped: huesped,
        fechaIngreso: fechaIngreso,
        fechaSalida: fechaSalida
    };

    reservas.push(nuevaReserva);

    return `Reserva confirmada para la habitación ${numeroHabitacion}, huésped: ${huesped}.`;
}

console.log(reservarHabitacion(101, 'Juan Pérez', '2024-12-01', '2024-12-10'));
console.log(reservarHabitacion(102, 'María López', '2024-12-05', '2024-12-12'));
console.log(reservarHabitacion(101, 'Carlos García', '2024-12-15', '2024-12-20'));
console.log(reservarHabitacion(107, 'Carlos García', '2024-12-15', '2024-12-20'));