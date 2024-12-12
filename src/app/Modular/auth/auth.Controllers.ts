// import { NextFunction, Request, Response } from "express"
// import { serviceAuth } from "./auth.services"
// import { tokenGenerator } from "../../utility/tokenGenerator"

// const postsingup = async(req:Request, res:Response, next:NextFunction)=>{
//    try{
//     const body = req.body
//     const data = await serviceAuth.signupost(body)
//     res.status(200).json({
//         success:true,
//         message:"successfuly resgiter",
//         data
//     })
//    }catch(err){
//     next(err)
//    } 
// }
// const postLogin = async(req:Request, res:Response, next:NextFunction)=>{
//    try{
//     const body = req.body
//     const data = await serviceAuth.Loginpost(body)
//     tokenGenerator(data._id,res)

//     res.status(200).json({
//         success:true,
//         message:"successfuly resgiter",
//         data
//     })
//    }catch(err){
//     next(err)
//    } 
// }
// export const controllerauth = {
// postsingup,
// postLogin
// }