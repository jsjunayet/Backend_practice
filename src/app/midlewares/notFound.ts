/* eslint-disable no-unused-vars */
import { NextFunction, Request, Response } from "express";


// eslint-disable-next-line @typescript-eslint/no-unused-vars
const notFound = (req:Request, res:Response, next:NextFunction)=>{
    res.status(404).json({
        success:false,
        message: "not fount this route"
    })
}
export default notFound