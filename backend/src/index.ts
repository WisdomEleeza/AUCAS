import 'dotenv/config';
import 'module-alias/register';
import express from 'express';
const port = process.env.PORT || 3000;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));


app.listen(port, () => console.log(`Server Started on port ${port}`))
