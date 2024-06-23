import { Response } from "express"
const handleHttpNotFound = (res:Response, error:string)=>{    
    const statusError =  error == 'NOT_FOUND' ? 404 : 403; 
    const msgError =  error == 'NOT_FOUND' ? 'No se ha encontrado el registro' : 'Datos Incorrectos'; 

    res.status(statusError);
    res.send({msgError});
};

export {handleHttpNotFound};