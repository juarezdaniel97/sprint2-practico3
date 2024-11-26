import SuperheroRepository from '../repositories/SuperheroRepository.mjs';

export const obtenerListaSuperHeroesService = async () => {
    return await SuperheroRepository.getAll()
}

export const obtenerSuperHeroPorIdService = async (id) => {
    return await SuperheroRepository.getFindById(id);
}

export const buscarSuperHeroPorAtributoService = async (atributo, valor) => {
    return await SuperheroRepository.getFindByAttribute(atributo,valor);
}

export const buscarSuperHeroMayoresA30Service = async () => {
    return await SuperheroRepository.getMayoresA30();
}

export const agregarSuperHeroService = async (datos) => {
    return await SuperheroRepository.create(datos);
}

export const eliminarSuperheroPorIdService = async (id) => {
    return await SuperheroRepository.deleteById(id);
}

export const eliminarSuperHeroPorNombreService = async (nombre) => {
    return await SuperheroRepository.deleteByName(nombre);
}

export const actualizarSuperHeroService = async (id, data) => {
    return await SuperheroRepository.update(id, data);
}

