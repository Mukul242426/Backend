import mongoose from "mongoose";

const userSchema=mongoose.Schema({
    fullName:String,
    email:String,
    password:String,
    age:Number,
    gender:String,
    mobile:Number
})

export const User=mongoose.model("User",userSchema);