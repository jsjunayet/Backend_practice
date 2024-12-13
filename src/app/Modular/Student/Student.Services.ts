
import mongoose from 'mongoose';
import AppErrors from '../../errors/AppErrors';
import { TStudent } from './Student.interface';
import { StudentModel } from './Student.model';
import { userModel } from '../user/user.model';

const createStudentInBD = async (student: TStudent) => {
  const result = await StudentModel.create(student);
  return result;
};

const getstudentAlldata= async ()=>{
  const result = await StudentModel.find()
  return result
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
  studentUpdateService
};
