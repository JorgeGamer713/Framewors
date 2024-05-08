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
exports.contadorController = void 0;
const contador_database_1 = __importDefault(require("../database/contador.database")); // Cambio de musicoDao a contadorDao
const utils_1 = require("../utils/utils");
class ContadorController {
    listar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const token = req.headers["auth"];
                const data = utils_1.utils.getPayload(token);
                var contadores = yield contador_database_1.default.listar(data.cveContador); // Cambio de musicoDao a contadorDao
                return res.json(contadores);
            }
            catch (error) {
                console.log(error);
                return res.status(500).json({ mensaje: "Ocurrió un error" });
            }
        });
    }
    insertar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const contador = req.body; // Cambio de musico a contador
                const result = yield contador_database_1.default.insertar(contador); // Cambio de musicoDao a contadorDao
                if (result.affectedRows > 0) {
                    return res.json({ mensaje: "Contador registrado correctamente" });
                }
                else {
                    return res.status(500).json({ mensaje: "Ocurrió un error al insertar al contador" });
                }
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ mensaje: "Ocurrió un error" });
            }
        });
    }
    actualizar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const _a = req.body, { cveContador } = _a, contador = __rest(_a, ["cveContador"]); // Cambio de cveMusico a cveContador
                console.log('Datos recibidos:', { cveContador, contador }); // Verifica los datos recibidos
                const result = yield contador_database_1.default.actualizar(contador, cveContador); // Cambio de musicoDao a contadorDao
                console.log('Resultado de la actualización:', result); // Verifica el resultado de la actualización
                if (result.affectedRows > 0) {
                    return res.json({ mensaje: "Contador actualizado correctamente" });
                }
                else {
                    return res.status(500).json({ mensaje: "Ocurrió un error al actualizar al contador" });
                }
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ mensaje: "Ocurrió un error" });
            }
        });
    }
    eliminar(req, res) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                const cveContador = parseInt(req.params.cveContador); // Cambio de cveMusico a cveContador
                const result = yield contador_database_1.default.eliminar(cveContador); // Cambio de musicoDao a contadorDao
                if (result.affectedRows > 0) {
                    return res.json({ mensaje: "Contador eliminado correctamente" });
                }
                else {
                    return res.status(500).json({ mensaje: "Ocurrió un error al eliminar al contador" });
                }
            }
            catch (error) {
                console.error(error);
                return res.status(500).json({ mensaje: "Ocurrió un error" });
            }
        });
    }
}
exports.contadorController = new ContadorController();
