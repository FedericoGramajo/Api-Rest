import mongoose from "mongoose";

enum StatusProjectEnum{
    NOT_STARTED = 0,
    IN_PROGRESS = 1, 
    COMPLETED = 2,
}
export interface Project {
    title: string;
    description: string;
    dueDate: Date;
    status : StatusProjectEnum;
    task : mongoose.Schema.Types.ObjectId;
    user : mongoose.Schema.Types.ObjectId;
}