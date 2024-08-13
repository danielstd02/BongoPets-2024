// scripts.js
document.getElementById('reserva-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const nombre = document.getElementById('nombre').value;
    const mascota = document.getElementById('mascota').value;
    const fecha = document.getElementById('fecha').value;
    const hora = document.getElementById('hora').value;

    alert(`Reserva realizada para ${nombre} y su mascota ${mascota} el ${fecha} a las ${hora}.`);
});
