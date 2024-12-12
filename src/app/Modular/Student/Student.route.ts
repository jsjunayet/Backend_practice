import express from 'express';
import { students_controllers } from './Student.controllers';
const router = express.Router();

router.get('/', students_controllers.getAllStudentFromDB);

export const student_router = router;
