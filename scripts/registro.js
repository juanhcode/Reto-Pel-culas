//Variables
const nombre = document.getElementById('idNombre');
const apellido = document.getElementById('idApellido');
const telefono = document.getElementById('idTeléfono');
const direction = document.getElementById('idDireccion');
const observacion = document.querySelector('.observacionIn');


let formulario = document.querySelector('form');

formulario.addEventListener('submit', (e) => {
    e.preventDefault();
    const user = {
        "nombre": nombre.value,
        "apellido":apellido.value,
        "telefono":telefono.value,
        "direction":direction.value,
        "observacion":observacion.value,
    }
    localStorage.setItem('user', JSON.stringify(user));
    formulario.reset();
})