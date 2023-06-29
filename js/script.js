// Obtener los enlaces del navbar.
const enlaces = document.querySelector('#enlaces');

// Obtener el botón del navbar.
const boton = document.querySelector('#boton');

// Bandera que determina el estado de los enlaces (si están ocultos o no).
let enlacesOcultos = true;

// Modificar el estado de los enlaces al hacer click en el botón.
const mostrarNavegacion = () => {
    if (enlacesOcultos) {
        enlaces.classList.remove('nav__enlaces--oculto');
    } else {
        enlaces.classList.add('nav__enlaces--oculto');
    }
    enlacesOcultos = !enlacesOcultos;
};

boton.addEventListener('click', () => {mostrarNavegacion();});