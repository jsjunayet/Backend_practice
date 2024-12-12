import { NextFunction, Request, Response } from "express";
import { AnyZodObject } from "zod";

const validation = (Schema:AnyZodObject)=>{
    return async (req: Request, res: Response, next: NextFunction) => {
        try {
          await Schema.parseAsync({
            body: req.body,
          });
    next()
   
        } catch (err) {
            console.log(err);
         next(err)
        }
      };
}
export default validation