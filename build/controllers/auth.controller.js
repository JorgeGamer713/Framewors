"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.authController = void 0;
const auth_database_1 = __importDefault(require("../database/auth.database"));
const utils_1 = require("../utils/utils");
class AuthController {
    login(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                // se obtienen los valores del body
                var { username, password } = req.body;
                //TODO: Obtener informacion de los usuarios a partir de su username
                const users = yield auth_database_1.default.getUserByUsername(username);
                //verificacion de ususairio
                if (users.length <= 0) {
                    return res.status(400).json({ mensaje: "El usuario o contraseña son incorrectos" });
                }
                //realizar un ciclo for para obtener la info
                for (let user of users) {
                    //validar la contraseña 
                    if (yield utils_1.utils.checkPassword(password, user.password)) {
                        //obtener los datos del ususario
                        const roles = yield auth_database_1.default.getRolByClaveUsuario(user.cveUsuario);
                        user.roles = roles;
                        //crear moddelo de información necesaria
                        const { password, fechaRegistro } = user, newUser = __rest(user, ["password", "fechaRegistro"]);
                        //generar un JWT
                        var token = utils_1.utils.generateJWT(newUser);
                        //DEVOLVER INFORMACIÓN
                        return res.json({ token, mensaje: "Autenticacion correcta" });
                    }
                    else {
                        return res.status(400).json({ mensaje: "Contraseña y/o Usuario incorrecto" });
                    }
                    //obtener los datos del ususario
                    //crear un modelo con la info necesaria
                    //generar un JWT -AUTH
                    //DEVOLVER LA INFORMACIÓN 
                    return res.json(user);
                }
                return res.json(users);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ mensaje: "Ocurrio un error" });
            }
        });
    }
}
exports.authController = new AuthController();
