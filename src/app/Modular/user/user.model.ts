/* eslint-disable @typescript-eslint/no-unused-vars */
import { model, Schema } from "mongoose";
import { Tuser } from "./user.interface";
import bcrypt from 'bcrypt';

const userSchema = new Schema<Tuser>({
    
        id: {
          type: String,
          required: true,
          unique: true,
        },
        password: {
          type: String,
          required: true,
        },
        needsPasswordChange: {
          type: Boolean,
          default: true,
        },
        role: {
          type: String,
          enum: ["student" , "faculty" , "admin",],
        },
        status: {
          type: String,
          enum: ["in-progress" , "blocked",],
          default: 'in-progress',
        },
        isDeleted: {
          type: Boolean,
          default: false,
        },
      },
      {
        timestamps: true,
      },
    );
    userSchema.pre("save",async function(next){
        this.password =await bcrypt.hash(this.password,10 )
        next();
    })
    userSchema.post("save", function(doc, next){
        doc.password ="";
       next()
    })
   export const userModel = model<Tuser>('user', userSchema)
   