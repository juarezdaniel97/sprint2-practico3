import SuperHero from '../models/SuperHero.mjs';
import IRepository from './IRepository.mjs';
import mongoose from 'mongoose';

class SuperHeroRepository extends IRepository{
    
    async getAll(){
        return await SuperHero.find({})
    }

    async getFindById(id){
        if(!mongoose.Types.ObjectId.isValid(id)){
            throw new Error("ID no válido, Debe contener 24 caracteres hexadecimales.");
        }
        return await SuperHero.findById(id)
    }

    async getFindByAttribute(atributo, valor){
        const query = { [atributo]: new RegExp(valor, 'i')} 
        return await SuperHero.find(query)
    }

    async getMayoresA30(){
        //const query1 = { edad: {$gt: 30}}
        //const query2 = { edad: {$gt: 30}, planetaOrigen: 'Tierra'}
        //const query3 = { edad: {$gt: 30}, planetaOrigen: 'Tierra', poderes: { $size: {$gte: 2}}}
        
        const query7 = {
            edad: {$gt: 30},
            planetaOrigen: 'Tierra',
            $expr: { $gte: [{ $size: "$poderes" }, 3] }
        };
        return await SuperHero.find(query7);

    }

    async create(datos){
        
        try {
            const superhero = new SuperHero(datos);
            return await superhero.save();

        } catch (error) {
            throw new Error("Error al agregar un superheroe: ", error);   
        }
    }

    async delete(id){
        return await SuperHero.findByIdAndDelete(id); 
    }
    
}

export default new SuperHeroRepository();