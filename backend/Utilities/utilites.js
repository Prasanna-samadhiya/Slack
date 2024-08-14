

const CorrectHandler= (res,message,statuscode) => {
    return res.status(statuscode).json({
        success:true,
        message:message,
        res
    })
}

const ErrorHandler=(res,message,statuscode)=>{
    return res.status(statuscode).json({
        success:true,
        message:message,
        res
    })
}


const UndefinedHandler=(res,message,statuscode)=>{
    return res.status(statuscode).json({
        success:true,
        message:message,
        res
    })
}


module.exports={UndefinedHandler,ErrorHandler,CorrectHandler}