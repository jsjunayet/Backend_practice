import express from 'express';
import { student_router } from './app/Modular/Student/Student.route';
import cros from 'cors';
import { course_router } from './app/Modular/Course/Course.route';

const app = express();
app.use(cros());
app.use(express.json());

app.use('/api/v1', student_router);
app.use('/api/v1', course_router);

export default app;
