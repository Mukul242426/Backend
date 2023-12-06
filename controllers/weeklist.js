import { Week } from "../models/weeklist.js"

export const createWeekList=async(req,res,next)=>{
    const {email}=req.user
    // res.send(`WeekList Created by ${req.user.fullName}`)
    try{

        const array=await Week.find({email});

        await Week.create({
            id:email,
            name:`Weeklist #${array.length+1}`,
            isCompleted:false,
            tasks:[],
        })
        res.send(`WeekList Created by ${req.user.fullName}`)

    }catch{
        console.log("Somethings wrong")
        res.send(`Somethings wrong`)

    }

}

export const updateWeekList=(req,res)=>{
    res.send(`WeekList Updated by ${req.user.fullName}`)

}