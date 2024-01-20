import { Router } from "express";
import { verifyUserJWT } from "../middlewares/auth.middleware.js";
import { createQuiz, deleteQuiz, getAllQuizzes, getDashboardStats, getQuizById, getTrendingQuizzes, updatePollOptionImpression, updateQnaCorrectOptionImpression, updateQnaWrongOptionImpression } from "../controllers/quiz.controller.js";

const router = Router()

router.route("/create-quiz").post(verifyUserJWT, createQuiz)
router.route("/get-quiz/:quizId").get(getQuizById)
router.route("/delete-quiz/:quizId").delete(verifyUserJWT, deleteQuiz)
router.route("/get-all-quizzes").get(verifyUserJWT, getAllQuizzes)
router.route("/trending-quizzes").get(verifyUserJWT, getTrendingQuizzes)
router.route("/dashboard-stats").get(verifyUserJWT, getDashboardStats)
router.route("/update-poll-option-impression").patch(verifyUserJWT, updatePollOptionImpression)
router.route("/update-qna-correct-option-impression").patch(verifyUserJWT, updateQnaCorrectOptionImpression)
router.route("/update-qna-wrong-option-impression").patch(verifyUserJWT, updateQnaWrongOptionImpression)

export default router