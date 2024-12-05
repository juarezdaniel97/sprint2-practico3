import {
    obtenerListaSuperHeroesService,
    obtenerSuperHeroPorIdService,
    buscarSuperHeroPorAtributoService,
    buscarSuperHeroMayoresA30Service,
    agregarSuperHeroService,
    eliminarSuperheroPorIdService,
    eliminarSuperHeroPorNombreService,
    actualizarSuperHeroService
} from '../services/SuperheroesService.mjs';

import {
    renderizarMensaje,
    renderizarListaSuperheroe,
    renderizarSuperheroe,
    renderizarMensajeCRUD
} from '../view/responseView.mjs';



export const apihome = async (req, res) => {
    res.render('dashboard', { title: 'SuperHero' });
}

export const editMenuController = async (req, res) =>{
    try {
        const superheroes = await obtenerListaSuperHeroesService();
        res.render('editSuperhero', { superheroes: superheroes, title:'Modificar SuperHero' }); // Renderizar la vista con los superhéroes

    } catch (error) {
        res.status(500).send('Error al obtener los superhéroes');
    }
}

export const addMenuController = async (req, res) => {
    res.render('addSuperHero',{title: 'Agregar SuperHero'});
}

export const deleteMenuController = async (req, res) => {
    try {
        const superheroes = await obtenerListaSuperHeroesService();
        
        res.render('deleteSuperHero', { superheroes: superheroes, title:'Eliminar SuperHero' }); // Renderizar la vista con los superhéroes

    } catch (error) {
        res.status(500).send('Error al obtener los superhéroes');
    }
}

export const obtenerListadoSuperHeroController = async (req, res) => {

    try {
        const superheroes = await obtenerListaSuperHeroesService();
        // res.send(renderizarListaSuperheroe(superheroes));
        res.render('listSuperHero', { superheroes: superheroes, title:'Listado SuperHero' }); // Renderizar la vista con los superhéroes

    } catch (error) {
        res.status(500).send('Error al obtener los superhéroes');
    }
}

export const obtenerSuperHeroPorIdController = async (req, res) => {

    try {
        const { id } = req.params;
        const superheroe = await obtenerSuperHeroPorIdService(id)

        if (superheroe) {

            res.send(renderizarSuperheroe(superheroe));

        } else {

            res.status(404).send(renderizarMensaje("Superheroe no encontrado"))
        }
    } catch (error) {
        if (error.message === "ID no válido, Debe contener 24 caracteres hexadecimales.") {
            return res.status(400).send(renderizarMensaje(error.message));
        }
        res.status(500).send(renderizarMensaje(error.message));
    }
}

export const buscarSuperHeroPorAtributoController = async (req, res) => {

    const { atributo, valor } = req.params;
    const superheroes = await buscarSuperHeroPorAtributoService(atributo, valor);

    if (superheroes.length > 0) {
        res.send(renderizarListaSuperheroe(superheroes));
    } else {
        res.status(404).send(renderizarMensaje("No se encontraron superheroes con ese atributo"));
    }
}

export const obtenerSuperHeroMayoresA30Controller = async (req, res) => {
    const superheroes = await buscarSuperHeroMayoresA30Service();
    res.send(renderizarListaSuperheroe(superheroes));
}

export const agregarSuperHeroController = async (req, res) => {
    try {
        const datos = req.body;
        const nuevoSuperheroe = await agregarSuperHeroService(datos);

        //res.status(201).json({ message: 'Superhéroe agregado exitosamente', data: nuevoSuperheroe });
        res.status(201).send(renderizarMensajeCRUD("Superhéroe agregado exitosamente", nuevoSuperheroe));

    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el superhéroe', error: error.message });
    }
}

export const eliminarSuperHeroPorIdController = async (req, res) => {
    try {
        const { id } = req.params;
        const superhero = await eliminarSuperheroPorIdService(id);

        if (superhero) {

            //res.send(renderizarMensaje("¡Superheroe eliminado con éxito!"));
            //res.send(renderizarSuperheroe(deleteSuperhero));
            res.send(renderizarMensajeCRUD("¡Superheroe eliminado con éxito!", superhero));

        } else {

            res.status(404).send(renderizarMensaje("Superheroe no encontrado"));

        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el superhéroe', error: error.message });
    }
}

export const eliminarSuperHeroPorNombreController = async (req, res) => {

    try {
        const { nombre } = req.params;
        const superheroes = await eliminarSuperHeroPorNombreService(nombre);

        //aqui va un if para determinar si es 1 o más Superheroes
        if (superheroes.length === 1) {
            res.send(renderizarMensajeCRUD('¡Superheroe eliminado con éxito!', superheroes))
        } else {
            res.send(renderizarMensajeCRUD('¡Superheroes eliminados con éxito!', superheroes))
        }

    } catch (error) {
        res.status(404).send(renderizarMensaje(error.message));
    }
}

export const actualizarSuperHeroController = async (req, res) => {

    try {
        const { id } = req.params;
        const data = req.body;

        const actualizado = await actualizarSuperHeroService(id, data);
        console.log(actualizado);

        res.send(renderizarMensajeCRUD('¡Superheroe Actualizado con éxito!', actualizado));
    } catch (error) {
        res.status(404).send(renderizarMensaje(error.message));
    }
}



