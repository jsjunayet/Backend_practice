import express from 'express';
import { CoureController } from './Course.controllers';
const router = express.Router();

router.post('/create-course', CoureController.CourseCreate);

export const course_router = router;