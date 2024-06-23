import { JwtPayload } from "jsonwebtoken";
import { Task } from "../interfaces/task";
import ProjectModel from "../models/project";
import TaskModel from "../models/task";
import UserModel from "../models/user";

const insertTask = async (idPr: string, task: Task) => {
    const responseTask = await TaskModel.create(task);
    await ProjectModel.findByIdAndUpdate(
        idPr,
        { $push: { tasks: responseTask._id } },
    )
    return responseTask
};

const getTask = async (id: string) => {
    const responseTask = await TaskModel.findOne({ _id: id });
    return responseTask;
}

const getMyTasks = async (idUs: string, status: number) => {

    const userId = await UserModel.findOne({ id: idUs })
    const responseTask = await TaskModel.find({ users: idUs, status: status });
    return responseTask;
}
const getTasks = async () => {
    const responseTask = await TaskModel.find({});
    return responseTask;
}

const updateTask = async (id: string, data: Task) => {
    const responseTask = await TaskModel.findOneAndUpdate({ _id: id }, data, { new: true });
    return responseTask;
}

const deleteTask = async (id: string) => {
    const responseTask = await TaskModel.findByIdAndDelete({ _id: id });
    return responseTask;
}

export { insertTask, getMyTasks, getTasks, getTask, updateTask, deleteTask };