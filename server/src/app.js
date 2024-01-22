import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';

const app = express();

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true
}))

app.use(express.json({limit: "16kb"}));
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());

//importing routes
import userRouter from './routes/user.routes.js'
import quizRouter from './routes/quiz.routes.js'

app.use("/api/v1/user", userRouter);
app.use("/api/v1/quiz", quizRouter);

export default app