import { Project } from "../interfaces/project";
import ProjectModel from "../models/project";

// dar de alta un projecto
const insertProject = async (Project: Project) => {
    const responseProject = await ProjectModel.create(Project);
    return responseProject
};

// obtener un projecto por id
const getProject = async (id: string) => {
    const responseProject = await ProjectModel.findOne({ _id: id });
    return responseProject;
}

// obtener todos los projectos
const getProjects = async () => {
    const responseProject = await ProjectModel.find({});
    return responseProject;
}

//obtener projectos mediante un id de usuario y el estatus del projecto
const getMyProjects = async (idUs: string, status: number) => {

    const responseTask = await ProjectModel.find({ user: idUs, status: status });
    return responseTask;
}

//actualizar projecto
const updateProject = async (id: string, data: Project) => {
    const responseProject = await ProjectModel.findOneAndUpdate({ _id: id }, data, { new: true });
    return responseProject;
}

//eliminar projecto
const deleteProject = async (id: string) => {
    const responseProject = await ProjectModel.deleteOne({ _id: id });
    return responseProject;
}

export { insertProject, getProject, getMyProjects, getProjects, updateProject, deleteProject };