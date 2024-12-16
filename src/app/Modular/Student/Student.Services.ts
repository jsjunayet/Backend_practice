
import mongoose from 'mongoose';
import AppErrors from '../../errors/AppErrors';
import { TStudent } from './Student.interface';
import { StudentModel } from './Student.model';
import { userModel } from '../user/user.model';
import Querybuilder from '../../builder/Querybuilder';

const createStudentInBD = async (student: TStudent) => {
  const result = await StudentModel.create(student);
  return result;
};
const getsinglestudent = async (studentID:string) => {
  const result = await StudentModel.findById(studentID)
  return result;
};

const getstudentAlldata= async (query:Record<string, unknown>)=>{
//   const queryObj = {...query}
//   const searchTerm =query.searchTerm || ""
//   const searching = StudentModel.find(
//     {
//       $or: ["email", "id", "gender"].map((fields)=>({
//         [fields]:{$regex:searchTerm, $options:"i"}
//       }))
//     }
//   );
//   const ExculsiveFeild =["searchTerm", "sort", "limit", "page", "field"]
//   ExculsiveFeild.forEach((el)=>delete queryObj[el])
//   const Filtering = searching.find(queryObj)
//  let sort = "-createdAt"
//  if(query.sort){
//   sort = query.sort as string
//  }
//  const sorting =Filtering.sort(sort)
//  const page = Number(query.page) || 1
//  const limit = Number(query.limit) || 10
//  const skip = (page-1)*limit
//  const paginationQuery = sorting.skip(skip).limit(limit)
const studentQueryFilter = new Querybuilder(StudentModel.find().populate('admissionSemester'), query)
  .searching(["email", "id", "gender"])
  .Filtering()
  .sorting()
  .pagination()
const result = await studentQueryFilter.QueryModel.exec();  // Execute query

return result;
}
const studentUpdateService= async (id:string, studentData:Partial<TStudent>)=>{
  const{name, guardian, localGuardian, ...remainstudentData}= studentData
  const modifydata:Record<string, unknown>={
    ...remainstudentData
  }
  if(name && Object.keys(name).length){
    Object.entries(name).forEach(([key, value])=>{
     modifydata[`name.${key}`]=value
    })
  }
  if(localGuardian && Object.keys(localGuardian).length){
    Object.entries(localGuardian).forEach(([key,value])=>{
      modifydata[`localGuardian.${key}`]=value
    })
  }
  if(guardian && Object.keys(guardian).length){
    Object.entries(guardian).forEach(([key,value])=>{
      modifydata[`localGuardian.${key}`]=value
    })
  }
  const result = await StudentModel.findByIdAndUpdate(id,modifydata,{new:true})
  return result
}
const Deletedstudent= async (id:string)=>{
  const session = await mongoose.startSession()
  try{
    session.startTransaction()
    const studentDeleted = await StudentModel.findByIdAndUpdate(
      id,
      {isDeleted:true},
      {new:true, session}
    ) 
    if(!studentDeleted){
      throw new AppErrors(500, "student is not deleted")
    }
    const userID = studentDeleted.user
    const userDeleted = await userModel.findByIdAndUpdate(
      userID,
      {isDeleted:true},
      {new:true, session}
    ) 
    if(!userDeleted){
      throw new AppErrors(500, "user is not deleted")
    }
    session.commitTransaction();
    session.endSession()
    return studentDeleted

    

  }catch(err){
    session.abortTransaction();
    session.endSession()
    throw new AppErrors(500, `${err}`)
  }
}

export const student_service = {
  createStudentInBD,
  getstudentAlldata,
  Deletedstudent,
  studentUpdateService,
  getsinglestudent
};
