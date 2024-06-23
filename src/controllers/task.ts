import { Request, Response } from "express"
import { handleHttp } from "../utils/error.handle"
import { insertTask, getMyTasks, getTasks, getTask, updateTask, deleteTask } from "../services/task"
import { handleHttpNotFound } from "../utils/notFound.handle";
import { RequestExt } from "../interfaces/requestExt.interface";


const getItemTask = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getTask(id);
        const data = response ? response : handleHttpNotFound(res, 'NOT_FOUND')
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM', e)
    }
}

const getItemMyTasks = async (req: Request, res: Response) => {
    try {
        // const {user}=req;
        // const {userId} = user;
        // const userId = await (req as any).user.id;
        const { idUs, status } = await req.params;
        const statusNumber = Number(status);
        const response = await getMyTasks(idUs, statusNumber);
        const data = response ? response : handleHttpNotFound(res, 'NOT_FOUND')
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM', e)
    }
}

const getItemsTask = async (req: Request, res: Response) => {
    try {
        const response = await getTasks();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS', e)
    }
}

const updateItemTask = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateTask(id, body)
        const data = response ? response : handleHttpNotFound(res, 'NOT_FOUND')
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM', e)
    }
}

const postItemTask = async ({ params, body }: Request, res: Response) => {
    try {
        const { idPr } = params;
        const responseItem = await insertTask(idPr, body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
}

const deleteItemTask = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteTask(id);
        const data = response ? response : handleHttpNotFound(res, 'NOT_FOUND')
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM', e)
    }
}

export { getItemTask, getItemMyTasks, getItemsTask, updateItemTask, postItemTask, deleteItemTask }
