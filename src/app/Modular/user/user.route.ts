import express from 'express';
import { allUsersController } from './user.controller';
import validation from '../../midlewares/Validation';
import { createStudentValidationSchema } from '../Student/Student.validation';
const router = express.Router();

router.post('/create-student', validation(createStudentValidationSchema), allUsersController.postUserInMongodb);
router.get("/create-student", (req, res)=>{
    res.send({message:"hello world"})
})

export const user_router = router;