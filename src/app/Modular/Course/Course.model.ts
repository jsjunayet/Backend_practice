import { model, Schema } from 'mongoose';
import { Course } from './Course.interface';


const studentSchema = new Schema<Course>({
    CourseName: { type: String, required: true },
    Course_Code: { type: String, required: true },
    Course_price: { type: String, required: true },
    userID:{type: Schema.Types.ObjectId, required:true, ref:"Student"}
},{timestamps:true}
);

// Exporting the model
export const CourseModel = model<Course>('Course', studentSchema);