import express from 'express';
import { students_controllers } from './Student.controllers';
const router = express.Router();

router.get('/', students_controllers.getAllStudentFromDB);
router.delete('/:studentID', students_controllers.DeletedStudentFromDB);
router.patch('/:studentID', students_controllers.updateStudentFromDB);

export const student_router = router;
