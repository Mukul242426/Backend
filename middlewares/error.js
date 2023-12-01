export const errorHandler=(err,req,res,next)=>{

    res.status(err.statusCode).json({
        success:false,
        message:err.message
    })
}