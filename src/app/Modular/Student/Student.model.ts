import { model, Schema } from 'mongoose';
import { Students } from './Student.interface';

const studentSchema = new Schema<Students>({
  Student_Name: {
    First_Name: { type: String, required: true },
    Middle_Name: { type: String },
    Last_Name: { type: String, required: true },
  },
  Gender: {
    type: String,
    enum: ['male', 'female'], // Enforcing the allowed values
    required: true,
  },
  Address: { type: String, required: true },
  Father_Name: { type: String, required: true },
  Mother_Name: { type: String, required: true },
  Blood_Group: {
    type: String,
    enum: ['O+', 'O-', 'A+', 'A-', 'AB+', 'AB-'], // Enforcing the allowed values
    required: true,
  },
  CourseEnroll:{type:Boolean, default:false },
  CourseID: [{ type: Schema.Types.ObjectId, ref: "Course", default: [] }], // Default is an empty array

  Image: { type: String, required: true },

  Father_Image: { type: String },
  Mother_Image: { type: String }, // Fixed the typo
},{timestamps:true}
);

// Exporting the model
export const StudentModel = model<Students>('Student', studentSchema);
