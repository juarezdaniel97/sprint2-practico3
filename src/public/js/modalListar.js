

document.addEventListener('DOMContentLoaded', () => {

    // Configuración para actualizar datos del modal dinámicamente
    const modalDetalles = document.getElementById('modalDetalles');
    modalDetalles.addEventListener('show.bs.modal', function (event) {
        // Botón que disparó el modal
        const button = event.relatedTarget;

        // Obtener datos del botón
        const id = button.getAttribute('data-id')
        const nombre = button.getAttribute('data-nombre');
        const poder = button.getAttribute('data-poder');
        const aliado = button.getAttribute('data-aliado');
        const enemigo = button.getAttribute('data-enemigo');
        const autor = button.getAttribute('data-autor');
        const fecha = button.getAttribute('data-fecha');

        // Convertir la fecha en un objeto Date
        const formatoFecha = new Date(fecha);

        // Formatear la fecha en "dd/mm/aaaa hh:mm:ss"
        const dia = formatoFecha.getDate().toString().padStart(2, '0');
        const mes = (formatoFecha.getMonth() + 1).toString().padStart(2, '0');
        const anio = formatoFecha.getFullYear();
        const horas = formatoFecha.getHours().toString().padStart(2, '0');
        const minutos = formatoFecha.getMinutes().toString().padStart(2, '0');
        const segundos = formatoFecha.getSeconds().toString().padStart(2, '0');

        // Formatear el resultado
        const fechaFormateada = `${dia}/${mes}/${anio} ${horas}:${minutos}:${segundos}`;

        console.log(fechaFormateada);


        // Asignar datos al modal
        modalDetalles.querySelector('#modal-id').textContent = id
        modalDetalles.querySelector('#modal-nombre').textContent = nombre;
        modalDetalles.querySelector('#modal-poder').textContent = poder;
        modalDetalles.querySelector('#modal-aliado').textContent = aliado;
        modalDetalles.querySelector('#modal-enemigo').textContent = enemigo;
        modalDetalles.querySelector('#modal-autor').textContent = autor;
        modalDetalles.querySelector('#modal-fecha').textContent = fechaFormateada;
    });
})