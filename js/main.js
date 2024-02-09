// Manejo de la interfaz de usuario

document.addEventListener('DOMContentLoaded', function () {
    const formElement = document.getElementById('formulario');

    formElement.addEventListener('submit', async function (event) {
        event.preventDefault();

        // Obtener datos necesarios desde la base de datos
        const tarifasPorServicio = await obtenerTarifasPorServicio();

        // Calcular costo total
        calcularCostoTotal(tarifasPorServicio);
    });
});

// Función para calcular el costo total
async function calcularCostoTotal(tarifasPorServicio) {
    const tipoServicioElement = document.getElementById('tipoServicio');
    const horasTrabajadasElement = document.getElementById('horasTrabajadas');

    const tipoServicio = tipoServicioElement.value;
    const horasTrabajadas = parseFloat(horasTrabajadasElement.value);

    if (isNaN(horasTrabajadas) || horasTrabajadas <= 0) {
        alert('Por favor, ingrese un número válido de horas trabajadas.');
        return;
    }

    const tarifaPorHora = tarifasPorServicio[tipoServicio];
    let costoTotal = horasTrabajadas * tarifaPorHora;

    if (horasTrabajadas > 10) {
        costoTotal *= 0.9;
    }

    if (tipoServicio === 'programacion') {
        costoTotal *= 0.95;
    }

    // Muestra del resultado en el DOM
    mostrarResultadoEnDOM(tipoServicio, horasTrabajadas, tarifaPorHora, costoTotal);

    // Guardado de los datos en la base de datos
    const servicio = {
        tipoServicio,
        horasTrabajadas,
        tarifaPorHora,
        costoTotal,
    };

    await guardarServicio(servicio);
}

// Función para mostrar el resultado en el DOM
function mostrarResultadoEnDOM(tipoServicio, horasTrabajadas, tarifaPorHora, costoTotal) {
    const resultadoElement = document.getElementById('resultado');

    resultadoElement.innerHTML = `
        <p><strong>Tipo de Servicio:</strong> ${tipoServicio}</p>
        <p><strong>Horas Trabajadas:</strong> ${horasTrabajadas}</p>
        <p><strong>Tarifa por Hora:</strong> $${tarifaPorHora}</p>
        <p><strong>Costo Total:</strong> $${costoTotal.toFixed(2)}</p>
    `;
}
