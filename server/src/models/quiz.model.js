import mongoose, { Schema, Types } from "mongoose";

const optionsSchema = new mongoose.Schema({
    text: {
        type: String,
    },
    imageUrl: {
        type: String,
    },
    impressions: {
        type: Number,
        default: 0,
    },
});

const questionSchema = new mongoose.Schema({
    questionTitle: {
        type: String,
        required: true,
    },
    correctAnswer: {
        type: Number,
        required: true,
    },
    qnaCorrectAnswerImpressions: {
        type: Number,
        default: 0,
    },
    qnaWrongAnswerImpressions: {
        type: Number,
        default: 0,
    },
    options: {
        type: [optionsSchema],
        required: true,
    },
});

const quizSchema = new mongoose.Schema(
    {
        ownersEmail: {
            type: String,
            required: true,
        },
        impressions: {
            type: Number,
            default: 0,
        },
        quizName: {
            type: String,
            required: true,
        },
        quizType: {
            type: String,
            required: true,
        },
        timer: {
            type: Number,
            default: 0,
        },
        optionsType: {
            type: String,
            required: true,
        },
        questions: {
            type: [questionSchema],
            required: true,
        },
    },
    {
        timestamps: true,
    }
);

export const Quiz = mongoose.model("Quiz", quizSchema);
