import express from 'express';
import cros from 'cors';
import GlobalErrorHandle from './app/midlewares/globalErrorHandle';
import notFound from './app/midlewares/notFound';
import router from './app/route';

const app = express();
app.use(cros());
app.use(express.json());
app.use('/api/v1', router);

app.use(GlobalErrorHandle)
app.use(notFound)

export default app;
