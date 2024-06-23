import { Router } from "express";
import { deleteItemTask, getItemMyTasks, getItemTask, getItemsTask, postItemTask, updateItemTask } from "../controllers/task";
import { checkJwt } from "../middleware/session";
import { validateCreateTasks } from "../validators/tasks";

const router = Router();
router.get("/", checkJwt, getItemsTask);

router.get("/:id", checkJwt, getItemTask);

router.get("/mytasks/:idUs/:status", checkJwt, getItemMyTasks);

router.post("/:idPr", checkJwt,validateCreateTasks, postItemTask);

router.put("/:id", checkJwt, updateItemTask);

router.delete("/:id", checkJwt, deleteItemTask);

export { router }