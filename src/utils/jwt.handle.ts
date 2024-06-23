import { sign, verify } from "jsonwebtoken";
import { handleHttp } from "./error.handle";

const JWT_SECRET = process.env.JWT_SECRET || 'secreto.abierto';
const generateToken = async (id: string) => {
    const jwt = sign({ id }, JWT_SECRET,{
        expiresIn: "1h",
    });
    return jwt
}

const verifToken = async (jwt:string) => {
    try {        
    const isOk = verify(jwt, JWT_SECRET);
    return isOk;
    } catch (e) {
        return false;
    }
}

export { generateToken, verifToken };