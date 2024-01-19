import { Quiz } from "../models/quiz.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const createQuiz = async (req, res) => {

    const { quizName, quizType, timer, questions } = req.body;
    
    const user = req.user?._id
    // Create a new quiz object
    const quiz = await Quiz.create({
        ownersEmail: req.user?.email,
        quizName: quizName,
        quizType: quizType,
        timer: timer,
        questions: questions
    })
    
    const createdQuiz = await Quiz.findById(quiz._id)

    if(!createQuiz) throw new ApiError(500, "Something went wrong while creating a new quiz")
    
    return res
    .status(200)
    .json(
        new ApiResponse(200, createdQuiz, "Quiz registered successfully")
    )
}   

const getQuizById = async (req,res) => {

    const quizId = req.params.quizId

    const quiz = await Quiz.findById(quizId)

    if(!quiz) throw new ApiError(500, "Something went wrong while getting quiz")

    return res
    .status(200)
    .json(
        new ApiResponse(200, quiz, "Quiz fetched successfully")
    )

}

// TODO: Delete a quiz
// TODO: Edit/Update the quiz
// TODO: Update quiz impressions
// TODO: Aggregation : 1)Total quizzes created 2)Total questions created 3)Total impressions on quiz
// TODO: Update qna quiz impressions
// TODO: Update poll quiz impressions
// TODO: Get trending quizzes according to trending criteria
// TODO: Get all quizzes according to recently created
// TODO:
// TODO:

export { 
    createQuiz,
    getQuizById
}