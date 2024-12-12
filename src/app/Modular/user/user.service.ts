import AppErrors from "../../errors/AppErrors";
import { TStudent } from "../Student/Student.interface";
import { StudentModel } from "../Student/Student.model";
import { Tuser } from "./user.interface";
import { userModel } from "./user.model";


const userservicepost =async(password:string, student:TStudent)=>{
    const user:Partial<Tuser> = {};

    user.password = password || "hello world";
    user.role = "student";
    
    // user.id = "2203075";
    const userResult = await userModel.create(user);
    if (userResult) {
        student.id = userResult.id;
        student.user = userResult._id;
    } else {
        throw new AppErrors(500, "this data not insert")
    }
    const result = await StudentModel.create(student)
    return result;
}


export const allUserService={
    userservicepost
}
