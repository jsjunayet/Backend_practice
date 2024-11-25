import express from 'express';
import { students_controllers } from './Student.controllers';
const router = express.Router();

router.post('/create-student', students_controllers.postStudentsInMongodb);
router.get('/all-student', students_controllers.getAllStudentFromDB);

export const student_router = router;
