import { Response } from "express"
const handleHttp = (res: Response, error: string, erroRaw?: any) => {
    var statusCode = 0;
    switch (error) {
        case "ERROR_GET_ITEM":
            statusCode = 500;
            break;
        case "SESSION_NO_VALIDA":
            statusCode = 400;
            break;
        case "NO_TIENES_UN_JWT_VALIDO":
            statusCode = 401;
            break;
        default:
            statusCode = 404;
            break;
    }
    res.status(statusCode);
    res.send({ error });
};
const handleSesion = (res: Response, error: string, erroRaw?: any) => {
    res.status(400);
    res.send({ error });
};
const handleJWT = (res: Response, error: string, erroRaw?: any) => {
    res.status(401);
    res.send({ error });
};

export { handleHttp, handleSesion };