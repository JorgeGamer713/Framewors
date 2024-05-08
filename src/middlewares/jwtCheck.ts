import { NextFunction,Request,Response } from "express";
import { utils } from "../utils/utils";
import jwt from 'jsonwebtoken'
import keys from "../config/keys";

export const jwtCheck=(req:Request, res: Response, next:NextFunction) => {
    try{

        //Obtener JWT
        const token = <string> req.headers["auth"];
        //Obtener payload
        let payload = utils.getPayload(token);
        //generar y enviar nuevo token de auth
        const newToken = jwt.sign(payload, keys.secret.jwt,{expiresIn:'1h'})
        //agregar el nuevo jwt a la peticion
        res.setHeader("auth", newToken);

        next();
    }catch(error){
        return res.status(401).send("Not Authorized")
    }
}