import { ObjectId } from "mongoose";

export interface Students {
  Student_Name: {
    First_Name: string;
    Middle_Name?: string;
    Last_Name: string;
  };
  Gender: 'male' | 'female';
  Address: string;
  Father_Name: string;
  Mother_Name: string;
  Blood_Group: 'O+' | 'O-' | 'A+' | 'A-' | 'AB+' | 'AB-';
  Image: string;
  CourseEnroll:boolean
  CourseID?:string | ObjectId | undefined
  Father_Image?: string;
  Mother_Image?: string; // Fixed the typo
}
