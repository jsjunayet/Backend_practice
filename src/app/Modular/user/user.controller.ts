import { Request, Response } from "express";
import { allUserService } from "./user.service";
import sendResponse from "../../utility/sendResponse";
import catchAsync from "../../utility/catchAsync";

const postUserInMongodb = catchAsync(async (req: Request, res: Response) => {
  const {password, student}= req.body;
  const data = await allUserService.userservicepost(password, student)
  sendResponse(res, {
    statusCode: 200,
    success: true,
    message: 'Student is created succesfully',
    data: data,
  });
})
export const allUsersController={
postUserInMongodb
}