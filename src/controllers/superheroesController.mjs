import {
    obtenerListaSuperHeroesService,
    obtenerSuperHeroPorIdService,
    buscarSuperHeroPorAtributoService,
    buscarSuperHeroMayoresA30Service,
    agregarSuperHeroService,
    eliminarSuperheroService
} from '../services/SuperheroesService.mjs';
import {
    renderizarMensaje,
    renderizarListaSuperheroe,
    renderizarSuperheroe
} from '../view/responseView.mjs';


export const obtenerListadoSuperHeroController = async (req, res) => {
    const superheroes = await obtenerListaSuperHeroesService();
    res.send(renderizarListaSuperheroe(superheroes));
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

export async function agregarSuperHeroController(req, res) {
    try {
        const datos = req.body;
        const nuevoSuperheroe = await agregarSuperHeroService(datos);

        res.status(201).json({ message: 'Superhéroe agregado exitosamente', data: nuevoSuperheroe });
    } catch (error) {
        res.status(500).json({ message: 'Error al agregar el superhéroe', error: error.message });
    }
}

export async function eliminarSuperHeroController(req, res) {
    try {
        const { id } = req.params;
        const deleteSuperhero = await eliminarSuperheroService(id);

        if (deleteSuperhero) {

            res.send(renderizarMensaje("¡Superheroe eliminado con éxito!"));

        } else {

            res.status(404).send(renderizarMensaje("Superheroe no encontrado"));

        }
    } catch (error) {
        res.status(500).json({ message: 'Error al eliminar el superhéroe', error: error.message });
    }
}



