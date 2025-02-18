import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import keys from '../config/keys';
class Utils{
    public getPayload(token:string){
        var jwtPayload = <any> jwt.verify(token, keys.secret.jwt)

        const{ iat, exp, ... data }=jwtPayload;
        return data
    }
    public generateJWT(payload:any){
        var token = jwt.sign(payload,keys.secret.jwt,{expiresIn:'1h'});
        return token;
    }
    public async hashPassword(plainText:string){
        const salt = await bcrypt.genSaltSync(10)
        return await bcrypt.hashSync(plainText,salt);
    }
    public async checkPassword(plainText:string,encryptedPwd:string){
        return await bcrypt.compareSync(plainText,encryptedPwd);
    }
}

export const utils=new Utils();