import 'dotenv/config';
import 'module-alias/register';
import express from 'express';
const port = process.env.PORT || 8080;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));



app.use()








app.listen(port, () => console.log(`Server Started on port ${port}`))
