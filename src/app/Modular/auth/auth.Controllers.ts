import { NextFunction, Request, Response } from "express"
import { serviceAuth } from "./auth.services"

const postsingup = async(req:Request, res:Response, next:NextFunction)=>{
   try{
    const body = req.body
    const data = await serviceAuth.signupost(body)
    res.status(200).json({
        success:true,
        message:"successfuly resgiter",
        data
    })
   }catch(err){
    next(err)
   } 
}
export const controllerauth = {
postsingup
}