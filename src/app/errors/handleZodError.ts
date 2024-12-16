import { ZodError } from "zod"
import { TErrorSource } from "../interface/Error.interface"

export const handleZodError =(err:ZodError)=>{
    const errorSource:TErrorSource= err.issues.map((feild)=>{
        return{
            path: feild.path[feild.path.length - 1],
            message: feild.message
        }
    })
   const statusCode=400
   return{
    statusCode,
    message:"Validation Error",
    errorSource
   }
}