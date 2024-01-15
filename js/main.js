const tarifasPorServicio = {
    desarrolloWeb: 60,
    programacion: 75,
    consultoria: 100,
};

function calcularCostoTotal() {
    const tipoServicioElement = document.getElementById('tipoServicio');
    const horasTrabajadasElement = document.getElementById('horasTrabajadas');
    const resultadoElement = document.getElementById('resultado');

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
    resultadoElement.innerHTML = `
        <p><strong>Tipo de Servicio:</strong> ${tipoServicio}</p>
        <p><strong>Horas Trabajadas:</strong> ${horasTrabajadas}</p>
        <p><strong>Tarifa por Hora:</strong> $${tarifaPorHora}</p>
        <p><strong>Costo Total:</strong> $${costoTotal.toFixed(2)}</p>
    `;

    // Guardado de los datos en localStorage
    const servicio = {
        tipoServicio,
        horasTrabajadas,
        tarifaPorHora,
        costoTotal,
    };

    // Recuperación los servicios existentes de localStorage
    const serviciosGuardados = JSON.parse(localStorage.getItem('servicios')) || [];

    // Incorporación del nuevo servicio y guarda en localStorage
    serviciosGuardados.push(servicio);
    localStorage.setItem('servicios', JSON.stringify(serviciosGuardados));
}
