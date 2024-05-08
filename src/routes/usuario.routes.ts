import { Router } from "express";
import { usuarioController } from "../controllers/usuario.controller";
import { jwtCheck } from "../middlewares/jwtCheck";
import { insertValidatorRules, updateValidatoRules } from "../validators/usuario.rules";
import { validate } from "../middlewares/validator.check";

export class UsuarioRoutes{
    public router: Router;
    constructor(){
        this.router= Router();
        this.config();
    }
    private config(){
        //listar
        this.router.get("/",[jwtCheck],usuarioController.listar);

        //guardar
        this.router.post("/",insertValidatorRules(),[jwtCheck,validate],usuarioController.insertar);

        //actualizar 
        this.router.put("/",updateValidatoRules(),[jwtCheck,validate],usuarioController.actualizar);

        //eliminar
        this.router.delete("/:cveUsuario",[jwtCheck],usuarioController.eliminar);


    }
}
const usuarioRoutes = new UsuarioRoutes();
export default usuarioRoutes.router