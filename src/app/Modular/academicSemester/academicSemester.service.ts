import AppErrors from "../../errors/AppErrors";
import { academicSemesterNameCodeMapper, TAcademicSemester } from "./academicSemester.interface";
import { AcademicSemester } from "./academicSemester.model";

const createAcademicSemesterIntoDB = async (payload: TAcademicSemester) => {
    if (academicSemesterNameCodeMapper[payload.name] !== payload.code) {
        throw new AppErrors(400,'Invalid Semester Code');
      }
    const result = await AcademicSemester.create(payload);
    return result;
  };
export const AcademicSemesterServices={
    createAcademicSemesterIntoDB
}