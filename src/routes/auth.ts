import { Request, Response, Router } from "express";
import { registerCtrl, loginCtrl } from "../controllers/auth"
import { validateCreateUsers } from "../validators/users";

const router = Router();
/**
 * Post track
 * @openapi
 * /user/register:
 *    post:
 *      tags:
 *        - user
 *      summary: "Alta de usuario"
 *      description: Este endpoint es para dar de alta un usuario 
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/user"
 *      responses:
 *        '200':
 *          description: Retorna el objeto insertado en la coleccion.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *       - ffofofof: []
 */
router.post("/register", validateCreateUsers, registerCtrl);
/**
 * Post track
 * @openapi
 * /user/login:
 *    post:
 *      tags:
 *        - user
 *      summary: "Login de usuario"
 *      description: Este endpoint es para hacer el login y obtener un token 
 *      requestBody:
 *          content:
 *            application/json:
 *              schema:
 *                $ref: "#/components/schemas/auth"
 *      responses:
 *        '200':
 *          description: Retorna el objeto que tiene match con el usuario y pass junto con su token.
 *        '422':
 *          description: Error de validacion.
 *      security:
 *       - ffofofof: []
 */
router.post("/login", loginCtrl);

export { router }