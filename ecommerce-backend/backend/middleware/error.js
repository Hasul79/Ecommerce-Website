const ErrorHandler = require("../utils/ErrorHandler");

module.exports = (err,req,res,next) =>{
    err.statusCode = err.statusCode || 500
    err.message = err.message || "Interval server error"


    if(err.name === "CastError"){
        const message = `Resources not found with this id..Invalid ${err.path}`;
        err = new ErrorHandler(message, 400);
    }
  

    if (err.code === 11000) {
        const message = `Duplicate ${Object.keys(err.keyValue)} Entered`;
        err = new ErrorHandler(message, 400);
      }

     
     if (err.name === "JsonWebTokenError") {
     const message = `Your url is invalid please try again`;
     err = new ErrorHandler(message, 400);
     }

      
       if (err.name === "TokenExpiredError") {
         const message = `Your url is expired please try again`;
         err = new ErrorHandler(message, 400);
         }

       
     
    res.status(err.statusCode).json({
        success:false,
        //  message:err.stack
        message:"Session expired"
    })
 }