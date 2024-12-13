import { TAcademicSemester } from "../academicSemester/academicSemester.interface";
import { userModel } from "./user.model";
const FindlastID =async()=>{
    const FindlastStudent = await userModel.findOne(
        {role:"student"},
        {id:1,_id:0},
    ).sort({createdAt: -1}).lean();

    return FindlastStudent?.id?FindlastStudent?.id:undefined
}

export const generatorID = async(admissionSemester:TAcademicSemester)=>{
    let currentId = (0).toString();

const lastID = await FindlastID();
const laststudentSemesterCode=lastID?.substring(4,6)
const laststudentSemesteryear=lastID?.substring(0,4)
const presentstudentSemesteryear=admissionSemester.year
const presentstudentSemestercode=admissionSemester.code
if(lastID && laststudentSemesterCode == presentstudentSemestercode 
    && laststudentSemesteryear == presentstudentSemesteryear){
        currentId = lastID.substring(6)
}
let incrementId = (Number(currentId) + 1).toString().padStart(4, '0');

  incrementId = `${admissionSemester.year}${admissionSemester.code}${incrementId}`;

  return incrementId;
}