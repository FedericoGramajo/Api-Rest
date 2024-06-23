import { NextFunction, Request, Response } from "express";
import { check } from "express-validator";
import { validateResult } from "../utils/validateHelpers";



const validateCreateProjects =[
    check('title').exists().not().isEmpty(),
    check('description').exists().not().isEmpty(),
    check('status').exists().not().isEmpty(),
    check('dueDate').exists().not().isEmpty(),
    (req: Request, res: Response, next: NextFunction) =>{
        validateResult(req, res, next)
    }
]

export {validateCreateProjects};