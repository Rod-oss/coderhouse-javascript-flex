// Declaración de variables y constantes
const tarifasPorServicio = {
    desarrolloWeb: 60,
    programacion: 75,
    consultoria: 100,
};

let tipoServicio;
let horasTrabajadas = 0;
let costoTotal = 0;

// Función para obtener el tipo de servicio deseado por el usuario
function obtenerTipoServicio() {
    const servicios = Object.keys(tarifasPorServicio).join(', ');
    tipoServicio = prompt(`Seleccione el tipo de servicio (${servicios}):`).toLowerCase();

    // Verifica si el tipo de servicio es válido
    while (!tarifasPorServicio.hasOwnProperty(tipoServicio)) {
        tipoServicio = prompt(`Tipo de servicio no válido. Por favor, elija entre (${servicios}):`).toLowerCase();
    }
}

// Función para obtener las horas trabajadas del usuario
function obtenerHorasTrabajadas() {
    horasTrabajadas = parseFloat(prompt('Ingrese la cantidad de horas trabajadas:'));
    // Verifica si las horas trabajadas son un número válido
    while (isNaN(horasTrabajadas) || horasTrabajadas <= 0) {
        horasTrabajadas = parseFloat(prompt('Por favor, ingrese un número válido de horas trabajadas:'));
    }
}

// Función para calcular el costo total del servicio con descuentos
function calcularCostoTotal() {
    const tarifaPorHora = tarifasPorServicio[tipoServicio];
    costoTotal = horasTrabajadas * tarifaPorHora;

    // Aplica descuento del 10% si se trabajan más de 10 horas
    if (horasTrabajadas > 10) {
        costoTotal *= 0.9;
    }

    // Aplica descuento adicional del 5% para servicios de programación
    if (tipoServicio === 'programacion') {
        costoTotal *= 0.95;
    }
}

// Función para mostrar el resultado en la consola y en un cuadro de alerta
function mostrarResultado() {
    console.log(`Tipo de servicio: ${tipoServicio}`);
    console.log(`Horas trabajadas: ${horasTrabajadas}`);
    console.log(`Tarifa por hora: $${tarifasPorServicio[tipoServicio]}`);
    console.log(`Costo total del servicio: $${costoTotal.toFixed(2)}`);

    alert(`Resumen del Servicio:\nTipo de servicio: ${tipoServicio}\nHoras trabajadas: ${horasTrabajadas}\nTarifa por hora: $${tarifasPorServicio[tipoServicio]}\nCosto total del servicio: $${costoTotal.toFixed(2)}`);
}

// Llamadas a las funciones
obtenerTipoServicio();
obtenerHorasTrabajadas();
calcularCostoTotal();
mostrarResultado();
