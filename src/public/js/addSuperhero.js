

document.addEventListener('DOMContentLoaded', (event) =>{

    
    const formAgregar = document.getElementById('formAgregar');
    
    formAgregar.addEventListener('submit', async (event) =>{
        
        event.preventDefault();
        const formData = new FormData(event.target);
        const data = {}

        formData.forEach((value, key)=>{

            if (key === 'poderes') {

                data[key] = value.split(',').map(poder => poder.trim());
                
            }else if (key === 'aliados') {

                data[key] = value.split(',').map(aliado => aliado.trim());

            }else if (key ==='enemigos'){

                data[key] = value.split(',').map(enemigo => enemigo.trim());

            }else{

                data[key] = value;
            }
        });
        
        
        try {
            const response = await fetch('/api/heroes',{
                method: 'POST',
                headers: {'Content-Type': 'application/json'},
                body: JSON.stringify(data)
                });

            if (response.ok) {
                alert('¡Superhéroe agregado con éxito!')
                event.target.reset;

            }else{
                const errorData = await response.json();
                alert(`Error: ${errorData.message}`);
            }

        } catch (error) {
            alert(`Error al enviar el formulario. ${error} `);
        }
        
        console.log(data);
        console.log(JSON.stringify(data));
    });

});