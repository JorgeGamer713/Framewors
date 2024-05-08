"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateValidatoRules = exports.insertValidatorRules = void 0;
const express_validator_1 = require("express-validator");
const insertValidatorRules = () => {
    return [
        (0, express_validator_1.body)("nombre").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({ min: 3, max: 350 }).withMessage("Rango incorreto"),
        (0, express_validator_1.body)("apellidos").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({ min: 3, max: 450 }).withMessage("Rango incorreto"),
        (0, express_validator_1.body)("username").trim().not().isEmpty().custom(value => !/\s/.test(value)).withMessage("Campo Requerido")
            .isLength({ min: 3, max: 150 }).withMessage("Rango incorreto"),
        (0, express_validator_1.body)("username").trim().not().isEmpty().custom(value => !/\s/.test(value)).withMessage("Campo Requerido")
            .isLength({ min: 3, max: 100 }).withMessage("Rango incorreto"),
        (0, express_validator_1.body)("email").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({ min: 3, max: 250 }).withMessage("Rango incorreto")
            .isEmail().withMessage("Fromato Incorrecto"),
        (0, express_validator_1.body)("roles").isArray({ min: 1 }).withMessage("FormatoIncorrecto")
    ];
};
exports.insertValidatorRules = insertValidatorRules;
const updateValidatoRules = () => {
    return [
        (0, express_validator_1.body)("cveUsuario").isNumeric().not().isString().withMessage("Formato Incorrecto"),
        (0, express_validator_1.body)("nombre").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({ min: 3, max: 350 }).withMessage("Rango incorreto"),
        (0, express_validator_1.body)("apellidos").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({ min: 3, max: 450 }).withMessage("Rango incorreto"),
        (0, express_validator_1.body)("email").trim().not().isEmpty().withMessage("Campo Requerido")
            .isLength({ min: 3, max: 250 }).withMessage("Rango incorreto")
            .isEmail().withMessage("Fromato Incorrecto"),
        (0, express_validator_1.body)("roles").isArray({ min: 1 }).withMessage("FormatoIncorrecto")
    ];
};
exports.updateValidatoRules = updateValidatoRules;
