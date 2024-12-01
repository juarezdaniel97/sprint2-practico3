
document.addEventListener('DOMContentLoaded', () => {
    const modalFormulario = document.getElementById('modalFormulario');

    modalFormulario.addEventListener('show.bs.modal', function(event) {
        const button = event.relatedTarget; //Botón que abrió el modal

        //Datos
        const nombre = button.getAttribute('data-nombre');
        const nombreReal = button.getAttribute('data-nombrReal');
        const edad = button.getAttribute('data-edad');
        const planetaOrigen = button.getAttribute('data-planeta') || '';
        const debilidad = button.getAttribute('data-debibilidad') || '';
        const poderes = button.getAttribute('data-poderes');
        const aliados = button.getAttribute('data-aliados') || '';
        const enemigos = button.getAttribute('data-enemigos') || '';
        
        //Asigna datos a los campos del formulario
        document.getElementById('form-nombre').value = nombre;
    });

    modalFormulario.addEventListener('hidden.bs.modal', ()=>{
        document.getElementById('formModal').reset();
    });
});