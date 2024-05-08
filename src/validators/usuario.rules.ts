import { body } from "express-validator";

export const insertValidatorRules = ()=> {
    return [
        body ("nombre").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({min:3,max:350}).withMessage("Rango incorreto"),

        body ("apellidos").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({min:3,max:450}).withMessage("Rango incorreto"),

        body ("username").trim().not().isEmpty().custom(value => !/\s/.test(value)).withMessage("Campo Requerido")
            .isLength({min:3,max:150}).withMessage("Rango incorreto"),    

        body ("username").trim().not().isEmpty().custom(value => !/\s/.test(value)).withMessage("Campo Requerido")
            .isLength({min:3,max:100}).withMessage("Rango incorreto"),  

        body ("email").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({min:3,max:250}).withMessage("Rango incorreto")
            .isEmail().withMessage("Fromato Incorrecto"), 

        body ("roles").isArray({min :1}).withMessage("FormatoIncorrecto")    
    ]   

}
export const updateValidatoRules = () =>{
    return [
        body ("cveUsuario").isNumeric().not().isString().withMessage("Formato Incorrecto"),

        body ("nombre").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({min:3,max:350}).withMessage("Rango incorreto"),

        body ("apellidos").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({min:3,max:450}).withMessage("Rango incorreto"),

        body ("email").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({min:3,max:250}).withMessage("Rango incorreto")
            .isEmail().withMessage("Fromato Incorrecto"), 

        body ("roles").isArray({min :1}).withMessage("FormatoIncorrecto")    
    ]

}