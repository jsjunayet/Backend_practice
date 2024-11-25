import { ObjectId } from "mongoose";
import { StudentModel } from "../Student/Student.model";
import { Course } from "./Course.interface";
import { CourseModel } from "./Course.model";

const createCourseInBD = async (course: Course) => {
    console.log(course);
const student = await StudentModel.find({_id: course.userID})  
    const result = await CourseModel.create(course);
    if (student.length > 0) {
        student[0].CourseEnroll = true;
        student[0].CourseID = student[0].CourseID || []; // Ensure CourseID is initialized
        student[0].CourseID.push(result._id);
        await student[0].save(); // Save the updated student
    }
    return result;
  };
export const CoureService = {
    createCourseInBD
}