import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
    cors({
        origin: process.env.CORS_ORIGIN,
        credentials: true,
    })
);

app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

//test route
app.get("/api/v1/test", async (req, res) => {
    res.send("This is a test route");
});

//importing routes
import userRouter from "./routes/user.routes.js";
import quizRouter from "./routes/quiz.routes.js";

app.use("/api/v1/user", userRouter);
app.use("/api/v1/quiz", quizRouter);

export default app;
