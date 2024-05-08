import { Request, Response } from "express";
import dao from "../database/auth.database";
import { utils } from "../utils/utils";
import { token } from "morgan";

class AuthController {
    public async login(req: Request, res: Response) {
        try {
            // se obtienen los valores del body
            var { username, password } = req.body;
           


            //TODO: Obtener informacion de los usuarios a partir de su username
            const users = await dao.getUserByUsername(username);

            //verificacion de ususairio
            if (users.length <= 0) {
                return res.status(400).json({ mensaje: "El usuario o contraseña son incorrectos" });
            }

            //realizar un ciclo for para obtener la info
            for (let user of users){

                //validar la contraseña 
                if (await utils.checkPassword(password,user.password)){
                    //obtener los datos del ususario
                    const roles =await dao.getRolByClaveUsuario(user.cveUsuario)
                    user.roles=roles;
                    //crear moddelo de información necesaria
                    const {password,fechaRegistro,...newUser} = user;
                    //generar un JWT
                    var token = utils.generateJWT(newUser);
                    //DEVOLVER INFORMACIÓN
                    return res.json({token,mensaje:"Autenticacion correcta"});

                }else{
                    return res.status(400).json({mensaje:"Contraseña y/o Usuario incorrecto"})
                }
                //obtener los datos del ususario

                //crear un modelo con la info necesaria

                //generar un JWT -AUTH

                //DEVOLVER LA INFORMACIÓN 
                return res.json(user);
            }
           
            return res.json(users);
        } catch (error: any) {
            console.log(error)
            return res.status(500).json({ mensaje: "Ocurrio un error" })
        }
    }
}
export const authController = new AuthController();