import { Router } from "express";
import { student_router } from "../Modular/Student/Student.route";
import { user_router } from "../Modular/user/user.route";
import { semester_Route } from "../Modular/academicSemester/academicSemester.router";

const router = Router();
 const allrouter = [
    {
    path:"/student",
    router: student_router
   },
    {
    path:"/user",
    router: user_router
   },
    {
    path:"/semester",
    router: semester_Route
   }
]
allrouter.forEach((route)=>router.use(route.path, route.router))
export default router;


