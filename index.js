import express from "express"
import mongoose from "mongoose"
import dotenv from "dotenv"
import healthRouter from "./routes/health.js"
import userRouter from "./routes/user.js"
import weekListRouter from "./routes/weeklist.js"
import { errorHandler } from "./middlewares/error.js"



const app=express()

dotenv.config();

app.use(express.json())
app.use(express.urlencoded({extended:true}))


// routes

app.get('/',(req,res)=>{
    res.json({
        status:"Success",
        message:"Working Fine"
    })
})

app.use(healthRouter)
app.use(weekListRouter)
app.use(userRouter)


// error middlewares

app.use(errorHandler)





app.listen(process.env.PORT,()=>{
        mongoose.connect(process.env.MONGODB_URL,{
            dbName:'backendAPI'
        })
        .then(()=>console.log(`Server running successfully on http://localhost:${process.env.PORT}`))
        .catch((error)=>console.log("Hello"))
})