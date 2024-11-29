import { authModel } from "./auth.model"

const signupost =async(body:object)=>{
    const result = await authModel.create(body)
   return result
}
export const serviceAuth={
    signupost
}