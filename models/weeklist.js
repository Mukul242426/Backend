import mongoose, { Mongoose } from "mongoose";

const taskSchema=new mongoose.Schema({
    description:String,
    isChecked:Boolean,
    isCompleted:Boolean},
    {timestamps:true}
)

const weekListSchema=new mongoose.Schema({
    id:String,
    name:String,
    isCompleted:Boolean,
    tasks:[taskSchema]},
    {timestamps:true}
)

export const Week=mongoose.model('Week',weekListSchema);
