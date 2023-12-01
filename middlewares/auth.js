import  jwt  from "jsonwebtoken";

export const isLoggedIn=(req,res,next)=>{
    try{
        const {jwttoken}=req.headers;

        if(!jwttoken){
            return next({
                statusCode:404,
                message:"Please provide a valid token"
            })
        }

        const user=jwt.verify(jwttoken,process.env.SECRET_KEY)
        req.user=user
        next()

    }catch{
        next({
            statusCode:401,
            message:"Session Expired!! Please login"
        })
    }
}

export const isAuthorised=(req,res,next)=>{
    console.log(`${req.user.fullName} is Authorised`)
    next()

}

