import { Request, Response } from 'express';
import { student_service } from './Student.Services';
import sendResponse from '../../utility/sendResponse';
import catchAsync from '../../utility/catchAsync';

const getAllStudentFromDB = catchAsync(async(req:Request, res:Response,)=>{

  const data = await student_service.getstudentAlldata()
  sendResponse(res, {
    statusCode:200,
    success:true,
    message:"successfull get all student",
    data:data
  })
})
export const students_controllers = {
  getAllStudentFromDB
};
