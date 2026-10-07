let posicionActual = -810;

const nDivNumero = document.getElementById('eDivNumero');


// Ejecuta la función indicada de forma indefinida según los milisegundos indicados.
setInterval(
    function() {
        // Puedo acceder al CSS desde JavaScript usando la propiedad style de la etiqueta.
        nDivNumero.style.backgroundPositionX = `${posicionActual}px`;
        if (posicionActual !== 0) {
            posicionActual = posicionActual + 90;
        }
    },
    1000
);