// Manejo de la base de datos local (data.json)


// Inicialización de baseDeDatosLocal 
const baseDeDatosLocal = JSON.parse(localStorage.getItem('baseDeDatosLocal')) || {
    tarifasPorServicio: {
        desarrolloWeb: 60,
        programacion: 75,
        consultoria: 100
    },
    serviciosGuardados: []
};

// Función para obtener las tarifas por servicio desde la base de datos
async function obtenerTarifasPorServicio() {
    return new Promise((resolve, reject) => {
        resolve(baseDeDatosLocal.tarifasPorServicio);
    });
}

// Función para obtener los servicios guardados desde la base de datos
async function obtenerServiciosGuardados() {
    return new Promise((resolve, reject) => {
        resolve(baseDeDatosLocal.serviciosGuardados);
    });
}

// Función para guardar un nuevo servicio en la base de datos
async function guardarServicio(servicio) {
    return new Promise((resolve, reject) => {
        baseDeDatosLocal.serviciosGuardados.push(servicio);
        actualizarBaseDeDatos();
        resolve("Servicio guardado exitosamente");
    });
}

// Función para actualizar la base de datos local
function actualizarBaseDeDatos() {
    // Simulamos la escritura en un archivo JSON (puedes cambiarlo por un método real si es necesario)
    localStorage.setItem('baseDeDatosLocal', JSON.stringify(baseDeDatosLocal));
}
