import { Request, Response } from "express";
import contadorDao from "../database/contador.database"; // Cambio de musicoDao a contadorDao
import { utils } from "../utils/utils";

class ContadorController {

    public async listar(req: Request, res: Response) {
        try {
            const token = <string>req.headers["auth"];
            const data = utils.getPayload(token);
            var contadores = await contadorDao.listar(data.cveContador); // Cambio de musicoDao a contadorDao
           
            return res.json(contadores);
        } catch (error: any) {
            console.log(error);
            return res.status(500).json({ mensaje: "Ocurrió un error" });
        }
    }

    public async insertar(req: Request, res: Response) {
        try {
            const contador = req.body; // Cambio de musico a contador
            const result = await contadorDao.insertar(contador); // Cambio de musicoDao a contadorDao

            if (result.affectedRows > 0) {
                return res.json({ mensaje: "Contador registrado correctamente" });
            } else {
                return res.status(500).json({ mensaje: "Ocurrió un error al insertar al contador" });
            }
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ mensaje: "Ocurrió un error" });
        }
    }

    public async actualizar(req: Request, res: Response) {
        try {
            const { cveContador, ...contador } = req.body; // Cambio de cveMusico a cveContador
            console.log('Datos recibidos:', { cveContador, contador }); // Verifica los datos recibidos

            const result = await contadorDao.actualizar(contador, cveContador); // Cambio de musicoDao a contadorDao
            console.log('Resultado de la actualización:', result); // Verifica el resultado de la actualización

            if (result.affectedRows > 0) {
                return res.json({ mensaje: "Contador actualizado correctamente" });
            } else {
                return res.status(500).json({ mensaje: "Ocurrió un error al actualizar al contador" });
            }
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ mensaje: "Ocurrió un error" });
        }
    }

    public async eliminar(req: Request, res: Response) {
        try {
            const cveContador: number = parseInt(req.params.cveContador); // Cambio de cveMusico a cveContador
            const result = await contadorDao.eliminar(cveContador); // Cambio de musicoDao a contadorDao

            if (result.affectedRows > 0) {
                return res.json({ mensaje: "Contador eliminado correctamente" });
            } else {
                return res.status(500).json({ mensaje: "Ocurrió un error al eliminar al contador" });
            }
        } catch (error: any) {
            console.error(error);
            return res.status(500).json({ mensaje: "Ocurrió un error" });
        }
    }
}

export const contadorController = new ContadorController();
