import express from 'express';
import { 
    obtenerListadoSuperHeroController,
    obtenerSuperHeroPorIdController, 
    buscarSuperHeroPorAtributoController,
    obtenerSuperHeroMayoresA30Controller,
    agregarSuperHeroController,
    eliminarSuperHeroPorIdController,
    eliminarSuperHeroPorNombreController,
    actualizarSuperHeroController,
    apihome,
    editMenuController,
    addMenuController,
    deleteMenuController
} from '../controllers/superheroesController.mjs';

import {validationErrorHandler} from '../middlewares/errorHandler.mjs';
import {
    validateNombreSuperHero,
    validateNombreReal,
    validateEdad,
    validatePoderes
} from '../validators/heroValidators.mjs'



const router = express.Router();


router.get('/', apihome)
router.get('/heroes', obtenerListadoSuperHeroController);
router.get('/heroes/modificar', editMenuController);
router.get('/heroes/addSuperhero', addMenuController);
router.get('/heroes/deleteSuperHero', deleteMenuController);
router.get('/heroes/:id', obtenerSuperHeroPorIdController);
router.get('/heroes/buscar/:atributo/:valor', buscarSuperHeroPorAtributoController);
router.get('/heroes/mayores/30', obtenerSuperHeroMayoresA30Controller);
router.post('/heroes/',
    [
        validateNombreSuperHero,
        validateNombreReal,
        validateEdad,
        validatePoderes
    ],
    validationErrorHandler,
    agregarSuperHeroController );
router.delete('/heroes/delete/:id', eliminarSuperHeroPorIdController);
router.delete('/heroes/delete-nombre/:nombre', eliminarSuperHeroPorNombreController);
router.put('/heroes/update/:id', 
    [
        validateNombreSuperHero,
        validateNombreReal,
        validateEdad,
        validatePoderes
    ],
    validationErrorHandler,
    actualizarSuperHeroController);


export default router;