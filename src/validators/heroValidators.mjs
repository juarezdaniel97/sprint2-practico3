import { body } from "express-validator";

//VALIDACIONES PARA EL CAMPO NOMBRESUPERHEROE
export const validateNombreSuperHero = body('nombreSuperheroe')
    .notEmpty().withMessage('El campo nombre del superhéroe es obligatorio')
    .trim()
    .isLength({min: 3, max: 60}).withMessage('El nombre del superheroe debe tener entre 3 y 60 caracteres')

//VALIDACIONES PARA EL CAMPO NOMBREREAL
export const validateNombreReal = body('nombreReal')
    .notEmpty().withMessage('El campo nombre real es obligatorio')
    .trim()
    .isLength({min: 3, max: 60}).withMessage('El nombre real debe tener entre 3 y 60 caracteres')

//VALIDACIONES PARA
export const validateEdad = body('edad')
    .notEmpty().withMessage('El campo edad es obligatorio')
    .isNumeric().withMessage('La edad debe ser un número')
    .trim()
    .isInt({min:0}).withMessage('La edad no puede ser negatica')

//VALIDACIONES PARA
export const validatePoderes = body('poderes')
    .notEmpty().withMessage('El campo poderes es obligatorio')
    .isArray({min: 1}).withMessage('Debe proporcionar al menos un poder')
    .bail() //Detiene la ejecución si algina ha fallado
    
    //custum(callback) -> permite definir validaciones especificas 
    .custom((poderes)=>{
        for(const poder of poderes){

            if (typeof poder !== 'string') {
                throw new Error("Todos los poderes deben ser cadenas de texto");
            }

            if (poder.trim().length < 3 || poder.trim().length > 60) {
                throw new Error("Cada poder debe contener entre 3  y 60 caracteres");
            }
        }
        return true;
    });

