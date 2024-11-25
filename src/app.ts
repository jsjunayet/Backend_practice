import express from 'express';
import { student_router } from './app/Modular/Student/Student.route';
import cros from 'cors';

const app = express();
app.use(cros());
app.use(express.json());

app.use('/api/v1', student_router);

export default app;
