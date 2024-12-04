
const formModificar = document.getElementById('formModificar');

formModificar.addEventListener('submit', async (event) => {
    event.preventDefault();

    const id = document.getElementById('form-id').value;
    const nombreSuperheroe = document.getElementById('form-nombre').value;
    const nombreReal = document.getElementById('form-nombreReal').value;
    const edad = document.getElementById('form-edad').value
    const planetaOrigen = document.getElementById('form-planeta').value;
    const debilidad = document.getElementById('form-debilidad').value;


    const poderesRecibido = document.getElementById('form-poderes').value;
    const poderes = poderesRecibido.split(',').map(poder => poder.trim());

    const aliadosRecibido = document.getElementById('form-aliados').value;
    const aliados = aliadosRecibido.split(',').map(aliado => aliado.trim());

    const enemigosRecibido = document.getElementById('form-enemigos').value;
    const enemigos = enemigosRecibido.split(',').map(enemigo => enemigo.trim());



    const datosActualizados = JSON.stringify({ nombreSuperheroe, nombreReal, edad, planetaOrigen, debilidad, poderes, aliados, enemigos })


    try {
        const response = await fetch(`/api/heroes/update/${id}`, {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: datosActualizados
        });


        if (response.ok) {
            
            //Petición fect para recargar la página nuevamente
            
            alert(`Superhéroe ${nombreSuperheroe} Modificado exitosamente...`);
            window.location.reload();

        } else {
            const errorData = await response.json();
            console.log('ErroresData-errores: ', errorData);

            const {errores} = errorData

            if (errores.length === 1) {
                const {field, value, message, location} = errores[0];
                alert(`${errorData.message}`);
                alert(`${message} \n Error en el campo: ${field} \n El valor ingresado es: ${value} `)
                console.log(location);

            }else{
                alert(`${errorData.message}`);
                errores.forEach(error =>{
                    alert(`${error.message} \n Error en el campo: ${error.field} \n El valor ingresado es: ${error.value} `)
                });   
            }
        }

    } catch (error) {
        alert(`Error al enviar formulario: ${error}`);
    }

});
