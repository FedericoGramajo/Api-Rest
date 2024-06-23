import mongoose, { Schema, Types, model, Model } from "mongoose";
import { Project } from "../interfaces/project";

enum StatusProjectEnum{
    NOT_STARTED = 0,
    IN_PROGRESS = 1, 
    COMPLETED = 2,
}
const ProjectSchema = new Schema<Project>(
    {
        title:{
            type: String,
            required: true,
        },
        description:{
            type: String,
            required: true,
        },
        status:{
            type: Number,
            enum: StatusProjectEnum,
            required: true,
        },
        dueDate:{
            type: Date,
            required: true,
        },
        task: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'task'
            }
        ],
        user: [
            {
                type: mongoose.Schema.Types.ObjectId,
                ref: 'user'
            }
        ]
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const ProjectModel = model('projects', ProjectSchema);
export default ProjectModel;