import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
dotenv.config(); 
import connectDB from "./config/db.js"
import lessonRoute from "./route/lessonRoute.js"


const port = process.env.PORT || 9000;

connectDB();

const app = express();
app.use(cors());


app.use(express.json());


app.use('/api', lessonRoute);

 

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});