import { Authinterface } from "./auth.interface"
import { authModel } from "./auth.model"
import bcrypt from 'bcrypt';
const signupost =async(body:Authinterface)=>{
    const result = await authModel.create(body)
   return result
}
const Loginpost =async(body)=>{
    const {password, email} = body
    const user = await authModel.findOne({email:email})
    if(!user){
        throw new Error("User not found");
    }
    const passwordMatch = await bcrypt.compare(password, user.password)
    if(!passwordMatch){
        throw new Error("password not match")
    }
    const result = {
        _id:user._id,
        email:user.email,
        name:user.name,
    }
    return result
}
export const serviceAuth={
    signupost,
    Loginpost
}