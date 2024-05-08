import connection from "../config/connection";
import pool from "../connections/database";

class AuthDatabase {
    public async getUserByUsername(username: string) {
        const result = await pool.then(async (connection) => {
            return await connection.query("SELECT* FROM tbl_usuario WHERE username = ?",
                [username])

        });
        return result;
    }
    public async getRolByClaveUsuario(cveUsuario: number) {
        const result = await pool.then(async (connection) => {
            return await connection.query(
                " select r.cveRol, r.nombre, r.clave "
                + " from tbl_rol_usuario ru " 
                + " join tbl_rol r on ru.cveRol = r.cveRol " 
                + " where ru.cveUsuario = ? and r.estatus = ?; ",
                [cveUsuario,true]
            )

        });
        return result;
    }

}
const dao = new AuthDatabase;
export default dao;