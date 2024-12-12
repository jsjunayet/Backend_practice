import { Response } from "express";

type dataTypes<T> = {
    statusCode:number,
    success:boolean,
    message:string,
    data:T
}

const sendResponse = <T>(res:Response, data:dataTypes<T>)=>{
    res.status(data.statusCode).json({
        success:data.success,
        message:data.message,
        data: data.data

    })

}
export default sendResponse