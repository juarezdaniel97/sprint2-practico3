
document.addEventListener('DOMContentLoaded', () => {

    console.log("Funcionando..");
    
    const botonesEliminar = document.querySelectorAll('#btnEliminar');

    botonesEliminar.forEach((boton)=>{
        boton.addEventListener('click', async () => {
            const id = boton.getAttribute('data-id');

            const resultado = window.confirm('¿Está seguro que desea eliminar el superhéroe?');

            if (resultado) {
                try {
                    const response = await fetch(`/api/heroes/delete/${id}`,{
                        method: 'DELETE'
                    });

                    if (response.ok) {
                        alert('¡Superhéroe eliminado correctamente!');
                        window.location.reload()
                    }else{
                        alert('Error al eliminar superhéroe');
                    }
                } catch (error) {
                    alert(`Error al realizar la petición: ${error}`)
                }
            }

        })
    })
    console.log(botonesEliminar);
    
});