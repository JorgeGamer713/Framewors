"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.authValidatorRules = void 0;
const express_validator_1 = require("express-validator");
const authValidatorRules = () => {
    return [
        (0, express_validator_1.body)("username").trim().not().isEmpty().withMessage("campo requerido")
            .isLength({ min: 3, max: 150 }).withMessage("rango incorrecto"),
        (0, express_validator_1.body)("password").trim().not().isEmpty().withMessage("campo requerido")
            .isLength({ min: 3, max: 100 }).withMessage("rango incorrecto"),
    ];
};
exports.authValidatorRules = authValidatorRules;
