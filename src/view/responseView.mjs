



function renderizarMensaje(mensaje) {
    return JSON.stringify({mensaje}, null, 2);
}

export const renderizarMensajeCRUD = (mensaje, data) =>{
    return JSON.stringify({mensaje, data}, null, 2); 
}

function renderizarSuperheroe(superheroe) {
    return {
        Nombre: superheroe.nombreSuperheroe,
        "Nombre Real": superheroe.nombreReal,
        Edad: superheroe.edad,
        "Planeta de Origen": superheroe.planetaOrigen,
        Debilidad: superheroe.debilidad,
        Poderes: superheroe.poderes,
        Aliados: superheroe.aliados,
        Enemigo: superheroe.enemigos,
        Autor: superheroe.autor
    };
}

function renderizarListaSuperheroe(superheroes) {
    return superheroes.map( superheroe => renderizarSuperheroe(superheroe));
}



export {
        renderizarMensaje,
        renderizarSuperheroe,
        renderizarListaSuperheroe
    }