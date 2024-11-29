import { NextFunction, Request, Response } from 'express';
import { student_service } from './Student.Services';

const postStudentsInMongodb = async (req: Request, res: Response, next:NextFunction) => {
  try {
    const Student = req.body;
    const data = await student_service.createStudentInBD(Student);
    res.status(200).json({
      success: true,
      data: data,
      message: 'successfull add in monogdb',
    });
  } catch (err) {
    next(err)
  }
};

const getAllStudentFromDB = async(req:Request, res:Response, next:NextFunction)=>{
  try{
    const data = await student_service.getstudentAlldata()
    res.status(200).json({success:true, data:data, message: "successfull get all student from mongodb"})
  }catch(err){
    next(err)
  }
}

export const students_controllers = {
  postStudentsInMongodb,
  getAllStudentFromDB
};
