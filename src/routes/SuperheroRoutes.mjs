import express from 'express';
import { 
    obtenerSuperHeroPorIdController, 
    obtenerListaSuperHeroesController,
    buscarSuperHeroPorAtributoController,
    obtenerSuperHeroMayoresA30Controller,
    agregarSuperHeroController,
    eliminarSuperHeroController
} from '../controllers/superheroesController.mjs';


const router = express.Router();

router.get('/heroes', obtenerListaSuperHeroesController);
router.get('/heroes/:id', obtenerSuperHeroPorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperHeroPorAtributoController);
router.get('/heroes/mayores/30', obtenerSuperHeroMayoresA30Controller);
router.post('/heroes/', agregarSuperHeroController );
router.delete('/heroes/delete/:id', eliminarSuperHeroController)


export default router;