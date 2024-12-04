import mongoose from "mongoose";


const superheroShema = new mongoose.Schema({
    nombreSuperheroe: {type: String, required: true},
    nombreReal: {type: String, required: true},
    edad: {type: Number, min: 0},
    planetaOrigen: {type: String, default: 'Desconocido'},
    debilidad: String,
    poderes: [String],
    aliados: [String],
    enemigos: [String],
    createdAt: {type: Date, default: Date.now} ,
    autor: {type: String, default: 'Daniel Juarez'}
},{collection: 'Grupo-13'});

export default mongoose.model('SuperHero',superheroShema);