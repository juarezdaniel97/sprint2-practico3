

document.addEventListener('DOMContentLoaded', ()=>{
    
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
        
        
        // Asignar datos al modal
        modalDetalles.querySelector('#modal-id').textContent = id
        modalDetalles.querySelector('#modal-nombre').textContent = nombre;
        modalDetalles.querySelector('#modal-poder').textContent = poder;
        modalDetalles.querySelector('#modal-aliado').textContent = aliado;
        modalDetalles.querySelector('#modal-enemigo').textContent = enemigo;
    });
})