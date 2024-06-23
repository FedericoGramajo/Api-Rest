import { Request, Response } from "express"
import { deleteProject, getMyProjects, getProject, getProjects, insertProject, updateProject } from "../services/project";
import { handleHttp } from "../utils/error.handle"
import { handleHttpNotFound } from "../utils/notFound.handle";


const getItemProject = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await getProject(id);
        const data = response ? response : handleHttpNotFound(res, 'NOT_FOUND')
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM', e)
    }
}

const getItemsProject = async (req: Request, res: Response) => {
    try {
        const response = await getProjects();
        res.send(response);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEMS', e)
    }
}
const getItemMyProjects = async (req: Request, res: Response) => {
    try {
        // const {user}=req;
        // const {userId} = user;
        // const userId = await (req as any).user.id;
        const { idUs, status } = await req.params;
        const statusNumber = Number(status);
        const response = await getMyProjects(idUs, statusNumber);
        const data = response ? response : handleHttpNotFound(res, 'NOT_FOUND')
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_GET_ITEM', e)
    }
}
const updateItemProject = async ({ params, body }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await updateProject(id, body)
        const data = response ? response : handleHttpNotFound(res, 'NOT_FOUND')
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_UPDATE_ITEM', e)
    }
}

const postItemProject = async ({ body }: Request, res: Response) => {
    try {
        const responseItem = await insertProject(body);
        res.send(responseItem);
    } catch (e) {
        handleHttp(res, 'ERROR_POST_ITEM', e)
    }
}

const deleteItemProject = async ({ params }: Request, res: Response) => {
    try {
        const { id } = params;
        const response = await deleteProject(id);
        const data = response ? response : handleHttpNotFound(res, 'NOT_FOUND')
        res.send(data);
    } catch (e) {
        handleHttp(res, 'ERROR_DELETE_ITEM', e)
    }
}

export { getItemProject, getItemsProject, getItemMyProjects, updateItemProject, postItemProject, deleteItemProject }
