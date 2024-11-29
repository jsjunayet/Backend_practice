/* eslint-disable @typescript-eslint/no-this-alias */
import mongoose, { Schema } from "mongoose";
import { Authinterface } from "./auth.interface";
import { NextFunction } from "express";
import bcrypt from 'bcrypt';
const saltRounds = 10;

export const authSchema = new Schema<Authinterface>({
    name: { type: String, required: [true, "Name is required"] },
    email: { type: String, required: [true, "Email is required"] },
    password: { type: String, required: [true, "Password is required"] },
    image: { type: String, required: [true, "Image is required"] },
    role: { type: String, required: [true, "Role is required"] },
},{timestamps:true, versionKey:false});

authSchema.pre('save', async function(this: Authinterface, next:NextFunction) {
    const user = this
    const existingUser = await mongoose.model("auth").findOne({ email: user.email })
    if (existingUser) {
        const error = new Error("Email already exists")
        return next(error);
    }
    const password =await bcrypt.hash(user.password, saltRounds)
    user.password = password;
    next()
})


export const authModel = mongoose.model<Authinterface>("auth", authSchema)

