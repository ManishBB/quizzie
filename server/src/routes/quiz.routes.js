import { Router } from "express";
import { verifyUserJWT } from "../middlewares/auth.middleware.js";
import { createQuiz } from "../controllers/quiz.controller.js";

const router = Router()

router.route("/create-quiz").post(createQuiz)

export default router