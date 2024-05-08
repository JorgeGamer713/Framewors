import { body } from "express-validator";

export const insertValidationRules = () => {
    return [
        body("nombre").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({ min: 3, max: 250 }).withMessage("Rango incorrecto"),
        body("direccion").trim().not().isEmpty().withMessage("Campo requerido")
            .isLength({ min: 3, max: 500 }).withMessage("Rango incorrecto"),
        body("tipoContratacion").isInt().withMessage("Debe ser un número entero"), // Cambio de intrumento a tipoContratacion
        // Agrega más reglas de validación según tus necesidades
    ];
};

export const updateValidationRules = () => {
    return [
        body("cveContador").isNumeric().not().isString().withMessage("Formato incorrecto"), // Cambio de cveMusico a cveContador
        body("nombre").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({ min: 3, max: 250 }).withMessage("Rango incorrecto"),
        body("direccion").trim().not().isEmpty().withMessage("Campo requerido")
            .isLength({ min: 3, max: 500 }).withMessage("Rango incorrecto"),
        body("tipoContratacion").isInt().withMessage("Debe ser un número entero"), // Cambio de intrumento a tipoContratacion
        // Agrega más reglas de validación según tus necesidades
    ];
};

