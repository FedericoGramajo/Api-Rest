import { Request, Response, Router } from "express";
import {registerCtrl, loginCtrl} from "../controllers/auth"
import { validateCreateUsers } from "../validators/users";

const router = Router();
router.post("/register",validateCreateUsers, registerCtrl);
router.post("/login", loginCtrl);

export {router}