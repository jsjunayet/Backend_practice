import { Types } from "mongoose"

export type TacademicDepartment = {
    name:string
    academicFaculty:Types.ObjectId
}