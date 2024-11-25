import detenv from 'dotenv';
detenv.config();

export default {
  mongodb: process.env.MONGO_DB,
  port: process.env.PORT,
};
