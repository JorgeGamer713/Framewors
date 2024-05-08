"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.jwtCheck = void 0;
const utils_1 = require("../utils/utils");
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const keys_1 = __importDefault(require("../config/keys"));
const jwtCheck = (req, res, next) => {
    try {
        //Obtener JWT
        const token = req.headers["auth"];
        //Obtener payload
        let payload = utils_1.utils.getPayload(token);
        //generar y enviar nuevo token de auth
        const newToken = jsonwebtoken_1.default.sign(payload, keys_1.default.secret.jwt, { expiresIn: '1h' });
        //agregar el nuevo jwt a la peticion
        res.setHeader("auth", newToken);
        next();
    }
    catch (error) {
        return res.status(401).send("Not Authorized");
    }
};
exports.jwtCheck = jwtCheck;
