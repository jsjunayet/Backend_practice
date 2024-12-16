/* eslint-disable @typescript-eslint/no-explicit-any */
import { NextFunction, Request, Response } from "express";
import { ZodError } from "zod";
import { TErrorGenetic, TErrorSource } from "../interface/Error.interface";
import { handleZodError } from "../errors/handleZodError";
import AppErrors from "../errors/AppErrors";
import { DuplicateError } from "../errors/DuplicateError";
// eslint-disable-next-line no-unused-vars, @typescript-eslint/no-unused-vars
const GlobalErrorHandle = (error:any, req:Request, res:Response, next:NextFunction)=>{
    let statusCode = 500;
    let message = "something  went wrong"
    let errorMessage:TErrorSource=[
        {
            path:"",
            message:"something went wrong"
        }
    ]
    if(error instanceof ZodError){
        const semplifyError:TErrorGenetic = handleZodError(error)
        statusCode = semplifyError?.statusCode
        message = semplifyError?.message
        errorMessage = semplifyError?.errorSource
    }else if(error.code === 11000){
        const semplifyError:TErrorGenetic = DuplicateError(error)
        statusCode = semplifyError?.statusCode
        message = semplifyError?.message
        errorMessage = semplifyError?.errorSource
    }
    else if(error instanceof AppErrors){
        statusCode = error.statusCode
        message = error.message
        errorMessage =[
            {
                path:"",
                message: error.message
            }
        ]
    }
    else if(error instanceof Error){
        message = error.message
        errorMessage=[
            {
                path:"",
                message: error.message
            }
        ]
    }
    res.status(statusCode).json({
        success:false,
        message,
        errorMessage,
    })
    
}
export default GlobalErrorHandle