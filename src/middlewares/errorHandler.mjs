import { validationResult } from "express-validator";

export const validationErrorHandler = (req, res, next) =>{
    const errores = validationResult(req);
    
    //console.log(errores.array())

    if (!errores.isEmpty()) {
        const detallesError = errores.array().map((err)=>({
            field: err.path || 'Desconocido', //campo con el error
            value: err.value, //Valor ingresado
            message: err.msg, //Mensaje del error
            location: err.location //Ubicacion del error
        }));
        
        return res.status(400).json({
            success: false,
            message: 'Errores de validación entrados',
            errores: detallesError
        })
    }

    next();
};