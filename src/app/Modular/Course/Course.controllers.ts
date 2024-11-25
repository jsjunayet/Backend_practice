import { Request, Response } from "express";
import { CoureService } from "./Course.services";

const CourseCreate = async (req: Request, res: Response) => {
    try {
      const Student = req.body;
      const data = await CoureService.createCourseInBD(Student);
      res.status(200).json({
        success: true,
        data: data,
        message: 'successfull add in monogdb',
      });
    } catch (err) {
      res
        .status(500)
        .json({ success: false, data: err, message: 'failed this message' });
       }
  };
  export const CoureController = {
    CourseCreate
}