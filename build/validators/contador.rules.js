"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateValidationRules = exports.insertValidationRules = void 0;
const express_validator_1 = require("express-validator");
const insertValidationRules = () => {
    return [
        (0, express_validator_1.body)("nombre").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({ min: 3, max: 250 }).withMessage("Rango incorrecto"),
        (0, express_validator_1.body)("direccion").trim().not().isEmpty().withMessage("Campo requerido")
            .isLength({ min: 3, max: 500 }).withMessage("Rango incorrecto"),
        (0, express_validator_1.body)("tipoContratacion").isInt().withMessage("Debe ser un número entero"), // Cambio de intrumento a tipoContratacion
        // Agrega más reglas de validación según tus necesidades
    ];
};
exports.insertValidationRules = insertValidationRules;
const updateValidationRules = () => {
    return [
        (0, express_validator_1.body)("cveContador").isNumeric().not().isString().withMessage("Formato incorrecto"),
        (0, express_validator_1.body)("nombre").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({ min: 3, max: 250 }).withMessage("Rango incorrecto"),
        (0, express_validator_1.body)("direccion").trim().not().isEmpty().withMessage("Campo requerido")
            .isLength({ min: 3, max: 500 }).withMessage("Rango incorrecto"),
        (0, express_validator_1.body)("tipoContratacion").isInt().withMessage("Debe ser un número entero"), // Cambio de intrumento a tipoContratacion
        // Agrega más reglas de validación según tus necesidades
    ];
};
exports.updateValidationRules = updateValidationRules;
