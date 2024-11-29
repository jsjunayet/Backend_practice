import express from 'express';
import { student_router } from './app/Modular/Student/Student.route';
import cros from 'cors';
import { course_router } from './app/Modular/Course/Course.route';
import GlobalErrorHandle from './app/midlewares/globalErrorHandle';
import notFound from './app/midlewares/notFound';
import { authRouter } from './app/Modular/auth/auth.route';

const app = express();
app.use(cros());
app.use(express.json());
app.use('/api/v1', student_router);
app.use('/api/v1', course_router);
app.use('/api/v1', authRouter);
app.use(GlobalErrorHandle)
app.use(notFound)

export default app;
