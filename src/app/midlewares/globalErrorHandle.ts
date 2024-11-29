/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const GlobalErrorHandle = (error:any, req:Request, res:Response, next:NextFunction)=>{
    const statusCode = 500;
    res.status(statusCode).json({
        success:false,
        message:error.message || "something is worng"
    })
    
}
export default GlobalErrorHandle