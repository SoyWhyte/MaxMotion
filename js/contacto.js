// Coordenadas de la ubicación
const negocioCoords = [37.3891, -5.9845];

// Inicializar Mapa
const map = L.map('map').setView(negocioCoords, 13);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors'
}).addTo(map);

// Marcador
L.marker(negocioCoords).addTo(map)
    .bindPopup('Nuestra ubicación')
    .openPopup();

// Almacenar la ruta y resetearla
let routingControl;
let clienteMarker;

// Obtener las coordenadas de la dirección
async function obtenerCoordenadas(direccion) {
    const response = await fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(direccion)}`);
    const data = await response.json();
    if (data.length > 0) {
        return [parseFloat(data[0].lat), parseFloat(data[0].lon)];
    } else {
        alert('No se pudo encontrar la ubicación. Inténtalo nuevamente.');
        return null;
    }
}

// Función para calcular la ruta
async function calcularRuta() {
    const direccion = document.getElementById('direccion').value;
    const clienteCoords = await obtenerCoordenadas(direccion);

    if (clienteCoords) {
        // Eliminar la ruta y marcador anterior
        if (routingControl) {
            map.removeControl(routingControl);
        }
        if (clienteMarker){
            map.removeLayer(clienteMarker)
        }

        // Agregar marcador
        clienteMarker = L.marker(clienteCoords).addTo(map)
            .bindPopup('Tu ubicación')
            .openPopup();

        // Calcular y mostrar la ruta
        routingControl = L.Routing.control({
            waypoints: [
                L.latLng(clienteCoords),
                L.latLng(negocioCoords)
            ],
            routeWhileDragging: false,
            addWaypoints: false,
            show: false,
            createMarker: function () { return null; }
        }).addTo(map);

        // Mostrar el tiempo
        routingControl.on('routesfound', function (e) {
            const route = e.routes[0];
            const tiempoEstimado = route.summary.totalTime;

            //Pasar el tiempo a horas y minutos
            const horas = Math.floor(tiempoEstimado / 3600);
            const minutos = Math.round((tiempoEstimado % 3600) / 60);

            //Mostrar tiempo
            document.getElementById('tiempoEstimado').textContent = `Tiempo estimado de llegada: ${horas} horas y ${minutos} minutos`;
        });
    }
}

// Calcular Ruta
document.getElementById('calcularRuta').addEventListener('click', calcularRuta);


