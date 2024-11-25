import { ObjectId } from "mongoose";

export interface Course {
    CourseName: string;
    Course_Code: string;
    Course_price:string;
    userID: string | ObjectId
  }
  