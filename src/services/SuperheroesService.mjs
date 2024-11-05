import SuperheroRepository from '../repositories/SuperheroRepository.mjs';

async function obtenerSuperHeroPorId(id) {
    return await SuperheroRepository.obtobtenerPorId(id);
}

async function obtenerListaSuperHeroes() {
    return await SuperheroRepository.obtenerTodos()
}

async function buscarSuperHeroPorAtributo(atributo, valor) {
    return await SuperheroRepository.buscarPorAtributo(atributo,valor);
}

async function obtenerSuperHeroMayoresA30() {
    return await SuperheroRepository.obtnerMayoresA30();
}

export{
    obtenerSuperHeroPorId,
    obtenerListaSuperHeroes,
    buscarSuperHeroPorAtributo,
    obtenerSuperHeroMayoresA30
}