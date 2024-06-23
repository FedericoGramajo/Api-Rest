import { Router } from "express";
import { deleteItemProject, getItemMyProjects, getItemProject, getItemsProject, postItemProject, updateItemProject } from "../controllers/project";
import { checkJwt } from "../middleware/session";
import { validateCreateProjects } from "../validators/projects";

const router = Router();
router.get("/", checkJwt, getItemsProject);

router.get("/:id", checkJwt, getItemProject);

router.get("/myprojects/:idUs/:status", checkJwt, getItemMyProjects);

router.post("/", checkJwt,validateCreateProjects, postItemProject);

router.put("/:id", checkJwt, updateItemProject);

router.delete("/:id", checkJwt, deleteItemProject);

export {router}