import { Router } from "express";
import { academicFacultyValidtionForCreate } from "./academicFaculty.validation";
import validation from "../../midlewares/Validation";
import { academicFacultyAllContorllers } from "./academicFaculty.controller";

const router = Router()
router.post("/create-academicFaculty",validation(academicFacultyValidtionForCreate),academicFacultyAllContorllers.academicFacultyCreate)
router.get("/get-academicFaculty",academicFacultyAllContorllers.academicFacultyAllget)
router.get("/get-academicFaculty/:FcaultyID",academicFacultyAllContorllers.academicFacultysingleGet)
router.patch("/get-academicFaculty/:FcaultyID",academicFacultyAllContorllers.academicFacultyUpdate)
export const academicFaculty_router = router