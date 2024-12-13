import { TacademicDepartment } from "../academicDepartment/academicDepartment.interface"
import { TacademicFaculty } from "./academicFaculty.interface"
import { AcademicFaculty } from "./academicFaculty.model"

const academicFacultyCreatefromService = async(paylod:TacademicDepartment)=>{
    const data = await AcademicFaculty.create(paylod)
    return data
}
const academicFacultyAllgetfromService = async()=>{
    const data = await AcademicFaculty.find()
    return data
}
const academicFacultysingleGetfromService = async(paylod:string)=>{
    const data = await AcademicFaculty.findById(paylod)
    return data
}
const academicFacultyUpdatefromService = async(ID:string, body:Partial<TacademicFaculty>)=>{
    const data = await AcademicFaculty.findByIdAndUpdate(
        ID,
         body,
        {new:true}
    )
    return data
}
export const academicFacultyAllservice ={
    academicFacultyCreatefromService,
    academicFacultyAllgetfromService,
    academicFacultysingleGetfromService,
    academicFacultyUpdatefromService
}