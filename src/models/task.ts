import mongoose, { Schema, model } from "mongoose";
import { Task } from "../interfaces/task";


enum StatusTaskEnum{
    NOT_STARTED = 0,
    IN_PROGRESS = 1, 
    COMPLETED = 2,
}
const TaskSchema = new Schema<Task>(
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
            enum: StatusTaskEnum,
            required: true,
        },
        dueDate:{
            type: String,
            required: true,
        },
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

const TaskModel = model('tasks', TaskSchema);
export default TaskModel;