import { Quiz } from "../models/quiz.model.js"
import { ApiError } from "../utils/ApiError.js"
import { ApiResponse } from "../utils/ApiResponse.js"

const createQuiz = async (req, res) => {

    const { questions } = req.body;
    
    const user = req.user?._id
    // Create a new quiz object
    const quiz = await Quiz.create({
        questions,
        createdBy: user
    })
    
    const createdQuiz = await Quiz.findById(quiz._id)

    if(!createQuiz) throw new ApiError(500, "Something went wrong while creating a new quiz")
    
    return res
    .status(200)
    .json(
        new ApiResponse(200, createdQuiz, "Quiz registered successfully")
    )
}   


export { 
    createQuiz
}