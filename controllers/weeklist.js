export const createWeekList=(req,res,next)=>{
    res.send(`WeekList Created by ${req.user.fullName}`)
}

export const updateWeekList=(req,res)=>{
    res.send(`WeekList Updated by ${req.user.fullName}`)

}