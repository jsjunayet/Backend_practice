import mongoose from "mongoose";
import AppErrors from "../../errors/AppErrors";
import { AcademicSemester } from "../academicSemester/academicSemester.model";
import { TStudent } from "../Student/Student.interface";
import { StudentModel } from "../Student/Student.model";
import { Tuser } from "./user.interface";
import { userModel } from "./user.model";
import { generatorID } from "./user.utility";


const userservicepost =async(password:string, student:TStudent)=>{
    const user:Partial<Tuser> = {};

    user.password = password || "hello world";
    user.role = "student";
    const admissionSemester = await AcademicSemester.findById(student.admissionSemester)
    if(!admissionSemester){
        throw new AppErrors(400, "This ID is Not Found")
    }
    const session = await mongoose.startSession()
    try{
        session.startTransaction()
        user.id =await generatorID(admissionSemester)
        const userResult = await userModel.create([user],{session});
        console.log(userResult);
        if(!userResult.length){
            throw new AppErrors(400, "someting is wrong")
        }
        student.id = userResult[0].id;
        student.user = userResult[0]._id;
        const result = await StudentModel.create([student],{session})
        if(!result.length){
            if(!userResult.length){
                throw new AppErrors(400, "someting is wrong")
            }
        }
        session.commitTransaction();
        session.endSession()
        return result;

    }catch(err){
        session.abortTransaction();
        session.endSession()
        throw new AppErrors(500, `${err}`)
    }
   
}


export const allUserService={
    userservicepost
}
