import { Router } from "express";
import { verifyUserJWT } from "../middlewares/auth.middleware.js";
import { createQuiz, getQuizById } from "../controllers/quiz.controller.js";

const router = Router()

router.route("/create-quiz").post(verifyUserJWT, createQuiz)
router.route("/get-quiz/:quizId").get(getQuizById)

export default router