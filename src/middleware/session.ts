import { NextFunction, Response } from "express";
import { handleHttp } from "../utils/error.handle";
import { verifToken } from "../utils/jwt.handle";
import { JwtPayload } from "jsonwebtoken";
import { RequestExt } from "../interfaces/requestExt.interface";



const checkJwt = async (req: RequestExt, res: Response, next: NextFunction) => {
    try {
        const jwtByUser = req.headers.authorization || '';
        const jwt = jwtByUser.split(' '). pop();
        const isUser = await verifToken(`${jwt}`); 
        if (!isUser){
            handleHttp(res, 'NO_TIENES_UN_JWT_VALIDO')
        } else{
            req.user = isUser; 
        next();
        }
    } catch (e) {
        handleHttp(res, 'SESSION_NO_VALIDA', e)
    }
}

export { checkJwt };