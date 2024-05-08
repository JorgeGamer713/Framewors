import {body} from 'express-validator';

export const authValidatorRules =() => {
    return[
        body("username").trim().not().isEmpty().withMessage("campo requerido")
        .isLength({min:3,max:150}).withMessage("rango incorrecto"),
        body("password").trim().not().isEmpty().withMessage("campo requerido")
        .isLength({min:3,max:100}).withMessage("rango incorrecto"),
    ]
}