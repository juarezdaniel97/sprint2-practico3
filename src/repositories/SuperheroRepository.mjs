import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';
import mongoose from 'mongoose';

class SuperHeroRepository extends IRepository{
    async obtobtenerPorId(id){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("ID no válido, Debe contener 24 caracteres hexadecimales.");
        }
        return await SuperHero.findById(id)
    }

    async obtenerTodos(){
        return await SuperHero.find({})
    }

    async buscarPorAtributo(atributo, valor){
        const query = { [atributo]: new RegExp(valor, 'i')} 
        return await SuperHero.find(query)
    }

    async obtnerMayoresA30(){
        //const query1 = { edad: {$gt: 30}}
        //const query2 = { edad: {$gt: 30}, planetaOrigen: 'Tierra'}
        //const query3 = { edad: {$gt: 30}, planetaOrigen: 'Tierra', poderes: { $size: {$gte: 2}}}
        const query = { edad: { $gt: 30 }, planetaOrigen: 'Tierra', 
            $expr: { $gte: [ { $size: "$poderes" }, 2 ] }
        };
        
        return await SuperHero.find(query);

    }
}

export default new SuperHeroRepository();