
import { TacademicDepartment } from "./academicDepartment.interface"
import { AcademicDepartment } from "./academicDepartment.model"

const academicDepartmentCreatefromService = async(paylod:TacademicDepartment)=>{
    const data = await AcademicDepartment.create(paylod)
    return data
}
const academicDepartmentAllgetfromService = async()=>{
    const data = await AcademicDepartment.find().populate("academicFaculty")
    return data
}
const academicDepartmentsingleGetfromService = async(paylod:string)=>{
    const data = await AcademicDepartment.findById(paylod)
    return data
}
const academicDepartmentUpdatefromService = async(ID:string, body:Partial<TacademicDepartment>)=>{
    const data = await AcademicDepartment.findByIdAndUpdate(
        ID,
         body,
        {new:true}
    )
    return data
}
export const academicDepartmentAllservice ={
    academicDepartmentCreatefromService,
    academicDepartmentAllgetfromService,
    academicDepartmentsingleGetfromService,
    academicDepartmentUpdatefromService
}