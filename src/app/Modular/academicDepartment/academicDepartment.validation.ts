import { z } from "zod";

export const academicDepartmentValidtionForCreate = z.object({
    body:z.object({
        name:z.string({
            required_error:"please must be fill up name field",
            invalid_type_error:"Name must be a string"
        }),
        academicFaculty:z.string()
    
    }) 
})