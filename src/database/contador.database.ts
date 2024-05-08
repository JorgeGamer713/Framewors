// contador.database.ts

import pool from "../connections/database";

class ContadorDatabase {

    public async listar(cveContador: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query(
                "SELECT cveContador, nombre, direccion, tipoContratacion, fechaRegistro"
                + " FROM tbl_contador ",
                [cveContador]
            );
        });

        return result;
    }

    public async insertar(contador: any) {
        const result = await pool.then(async (connection) => {
            return await connection.query(
                "INSERT INTO tbl_contador SET ?",
                [contador]
            );
        });

        return result;
    }

    public async actualizar(contador: any, cveContador: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query(
                "UPDATE tbl_contador SET ? WHERE cveContador = ?",
                [contador, cveContador]
            );
        });

        return result;
    }

    public async eliminar(cveContador: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query(
                "DELETE FROM tbl_contador WHERE cveContador = ?",
                [cveContador]
            );
        });

        return result;
    }
}

const contadorDao = new ContadorDatabase();
export default contadorDao;
