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

async function agregarSuperHero(datos) {
    return await SuperheroRepository.agregarSuperhero(datos);
}

async function eliminarSuperhero(id) {
    return await SuperheroRepository.eliminarSuperhero(id);
}

export{
    obtenerSuperHeroPorId,
    obtenerListaSuperHeroes,
    buscarSuperHeroPorAtributo,
    obtenerSuperHeroMayoresA30,
    agregarSuperHero,
    eliminarSuperhero
}