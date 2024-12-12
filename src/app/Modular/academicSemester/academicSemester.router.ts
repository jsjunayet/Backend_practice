import validation from "../../midlewares/Validation";
import { validationacademicSemetervalidation } from "./academicSemester.validation";
import { allcontrollerAcademic } from "./academicSemester.controller";
import { Router } from "express";

const router = Router();
router.post("/create-semester", 
    validation(validationacademicSemetervalidation.createAcdemicSemesterValidationSchema),
    allcontrollerAcademic.createAcademicSemester)
export const semester_Route = router