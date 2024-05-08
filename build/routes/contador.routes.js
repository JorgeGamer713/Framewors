"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContadorRoutes = void 0;
const express_1 = require("express");
const contador_controller_1 = require("../controllers/contador.controller"); // Cambio de musicoController a contadorController
const jwtCheck_1 = require("../middlewares/jwtCheck");
const contador_rules_1 = require("../validators/contador.rules"); // Cambio de musico.rules a contador.rules
const validator_check_1 = require("../middlewares/validator.check");
class ContadorRoutes {
    constructor() {
        this.router = (0, express_1.Router)();
        this.config();
    }
    config() {
        // Método para listar contadores
        this.router.get("/", [jwtCheck_1.jwtCheck], contador_controller_1.contadorController.listar); // Cambio de musicoController a contadorController
        // Método para actualizar contador
        this.router.put("/", (0, contador_rules_1.updateValidationRules)(), [jwtCheck_1.jwtCheck, validator_check_1.validate], contador_controller_1.contadorController.actualizar); // Cambio de musicoController a contadorController
        // Método para eliminar contador
        this.router.delete("/:cveContador", [jwtCheck_1.jwtCheck], contador_controller_1.contadorController.eliminar); // Cambio de cveMusico a cveContador y de musicoController a contadorController
        // Método para guardar contador
        this.router.post("/", (0, contador_rules_1.insertValidationRules)(), [jwtCheck_1.jwtCheck, validator_check_1.validate], contador_controller_1.contadorController.insertar); // Cambio de musicoController a contadorController
    }
}
exports.ContadorRoutes = ContadorRoutes;
const contadorRoutes = new ContadorRoutes();
exports.default = contadorRoutes.router;
