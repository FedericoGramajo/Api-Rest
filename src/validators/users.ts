import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../utils/validateHelpers";



const validateCreateUsers =[
    check('name').exists().not().isEmpty(),
    check('password').exists().not().isEmpty(),
    check('email').exists().not().isEmpty().isEmail(),
    (req: Request, res: Response, next: NextFunction) =>{
        validateResult(req, res, next)
    }
]

export {validateCreateUsers};