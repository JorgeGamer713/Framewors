import { Router } from "express";
import { contadorController } from "../controllers/contador.controller"; // Cambio de musicoController a contadorController
import { jwtCheck } from "../middlewares/jwtCheck";
import { insertValidationRules, updateValidationRules } from "../validators/contador.rules"; // Cambio de musico.rules a contador.rules
import { validate } from "../middlewares/validator.check";

export class ContadorRoutes {
    public router: Router;

    constructor() {
        this.router = Router();
        this.config();
    }

    private config() {
        // Método para listar contadores
        this.router.get("/", [jwtCheck], contadorController.listar); // Cambio de musicoController a contadorController

        // Método para actualizar contador
        this.router.put("/", updateValidationRules(), [jwtCheck, validate], contadorController.actualizar); // Cambio de musicoController a contadorController

        // Método para eliminar contador
        this.router.delete("/:cveContador", [jwtCheck], contadorController.eliminar); // Cambio de cveMusico a cveContador y de musicoController a contadorController

        // Método para guardar contador
        this.router.post("/", insertValidationRules(), [jwtCheck, validate], contadorController.insertar); // Cambio de musicoController a contadorController
    }
}

const contadorRoutes = new ContadorRoutes();
export default contadorRoutes.router;
