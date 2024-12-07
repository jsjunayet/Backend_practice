import { Students } from './Student.interface';
import { StudentModel } from './Student.model';

const createStudentInBD = async (student: Students) => {
  const result = await StudentModel.create(student);
  return result;
};

const getstudentAlldata= async ()=>{
  const result = await StudentModel.find()
  return result
}

export const student_service = {
  createStudentInBD,
  getstudentAlldata
};
