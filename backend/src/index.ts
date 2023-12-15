import 'dotenv/config';
import 'module-alias/register';
import express from 'express';
import errorHandler from '@/middleware/error.middleware';
import helmet from 'helmet';
const port = process.env.PORT || 8080;

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());

app.use(errorHandler);

app.listen(port, () => console.log(`Server Started on port ${port}`));
