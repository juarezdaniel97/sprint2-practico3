import {
    obtenerSuperHeroPorId,
    obtenerListaSuperHeroes,
    buscarSuperHeroPorAtributo,
    obtenerSuperHeroMayoresA30
} from '../services/SuperheroesService.mjs';
import { 
    renderizarMensaje,
    renderizarListaSuperheroe,
    renderizarSuperheroe
} from '../view/responseView.mjs';


export async function obtenerSuperHeroPorIdController(req, res) {
    
    try {
        const {id} = req.params; 
        const superheroe = await obtenerSuperHeroPorId(id)

        if (superheroe) {
            
            res.send(renderizarSuperheroe(superheroe));

        }else{

            res.status(404).send(renderizarMensaje("Superheroe no encontrado"))
        }
    } catch (error) {
        if (error.message === "ID no válido, Debe contener 24 caracteres hexadecimales.") {
            return res.status(400).send(renderizarMensaje(error.message));
        }
        
        res.status(500).send(renderizarMensaje(error.message));
    }
}

export async function obtenerListaSuperHeroesController(req, res) {
    const superheroes = await obtenerListaSuperHeroes();
    res.send(renderizarListaSuperheroe(superheroes));
}

export async function buscarSuperHeroPorAtributoController(req, res) {
    const {atributo, valor} = req.params;
    const superheroes = await buscarSuperHeroPorAtributo(atributo, valor);

    if (superheroes.length > 0) {
        res.send(renderizarListaSuperheroe(superheroes));
    }else{
        res.status(404).send(renderizarMensaje("No se encontraron superheroes con ese atributo"));
    }
}

export async function obtenerSuperHeroMayoresA30Controller(req, res) {
    const superheroes = await obtenerSuperHeroMayoresA30();
    res.send(renderizarListaSuperheroe(superheroes));
}



