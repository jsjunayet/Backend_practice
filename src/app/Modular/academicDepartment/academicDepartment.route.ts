import { Router } from "express";

import validation from "../../midlewares/Validation";
import { academicDepartmentValidtionForCreate } from "./academicDepartment.validation";
import { academicDepartmentAllContorllers } from "./academicDepartment.controller";

const router = Router()
router.post("/create-academicDepartment",validation(academicDepartmentValidtionForCreate),academicDepartmentAllContorllers.academicDepartmentCreate)
router.get("/get-academicDepartment",academicDepartmentAllContorllers.academicDepartmentAllget)
router.get("/get-academicDepartment/:departmentID",academicDepartmentAllContorllers.academicDepartmentsingleGet)
router.patch("/get-academicDepartment/:departmentID",academicDepartmentAllContorllers.academicDepartmentUpdate)
export const academicDepartment_router = router