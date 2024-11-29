
import { Response } from "express";
import jwt from "jsonwebtoken"
export const tokenGenerator = (userID: string, res: Response): void => {
 
    const token = jwt.sign({ userID }, "secret", { expiresIn: "7d" });
 
    res.cookie("jwt", token, {
       maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
       httpOnly: true, // Not accessible via JavaScript
       sameSite: "strict", // Prevent CSRF
       secure: process.env.NODE_ENV === "production", // Only secure in production
    });
  };
 