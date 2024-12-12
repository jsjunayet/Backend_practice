import catchAsync from "../../utility/catchAsync";
import sendResponse from "../../utility/sendResponse";
import { AcademicSemesterServices } from "./academicSemester.service";



const createAcademicSemester = catchAsync(async (req, res) => {
  const result = await AcademicSemesterServices.createAcademicSemesterIntoDB(
    req.body,
  );

  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Academic semester is created succesfully',
    data: result,
  });
});

export const allcontrollerAcademic={
    createAcademicSemester
}