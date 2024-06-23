import mongoose from "mongoose";

enum StatusTaskEnum{
    NOT_STARTED = 0,
    IN_PROGRESS = 1, 
    COMPLETED = 2,
}
export interface Task {
    title: string;
    description: string;
    dueDate: string;
    status : StatusTaskEnum;
    user : mongoose.Schema.Types.ObjectId;
}